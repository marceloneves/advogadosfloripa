/**
 * KML com a localização do escritório, referenciado pelo sitemap geográfico.
 * Os dados saem de `site` para não divergirem do NAP exibido no rodapé e do
 * LegalService do JSON-LD.
 */
import type { APIRoute } from 'astro';
import { site as dados } from '../data/site';

const escape = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export const GET: APIRoute = ({ site }) => {
  const origin = (site ?? new URL('https://kfsadvogados.com.br')).origin;
  const { street, locality, region, postalCode } = dados.addressParts;

  // KML usa a ordem longitude,latitude,altitude — o inverso do GeoCoordinates.
  const coordenadas = `${dados.geo.lng},${dados.geo.lat},0`;

  const kml = `<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">
  <Document>
    <name>${escape(dados.name)}</name>
    <description>${escape(`${dados.tagline}. ${dados.hours}.`)}</description>
    <Placemark>
      <name>${escape(dados.name)}</name>
      <description>${escape(`${dados.legalName} — ${dados.address}. Telefone: ${dados.phone}.`)}</description>
      <address>${escape(`${street}, ${locality} - ${region}, ${postalCode}, Brasil`)}</address>
      <phoneNumber>+${dados.whatsapp}</phoneNumber>
      <atom:link xmlns:atom="http://www.w3.org/2005/Atom" href="${origin}/contato/" />
      <Point>
        <coordinates>${coordenadas}</coordinates>
      </Point>
    </Placemark>
  </Document>
</kml>
`;

  return new Response(kml, {
    headers: { 'Content-Type': 'application/vnd.google-earth.kml+xml; charset=utf-8' },
  });
};
