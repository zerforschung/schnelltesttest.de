import React from 'react';
import './Scanner.css';
import zerlogo from '../components/About/ZER_Logo_header.svg';
import TextHeadingPage from '../components/TextHeadingPage';
import { ContactInfo } from '../components/ContactInfo';

export default function About(): JSX.Element {
  return (
    <TextHeadingPage heading={'Über'}>
      <p>Schnelltesttest.de bietet dir einen einfachen Weg, Informationen über die vom
        Paul-Ehrlich-Institut evaluierten SARS-COV-2-Antigen-Schnelltests abzurufen.</p>
      <p>Hierzu verwenden wir die Daten aus <a href="https://www.pei.de/SharedDocs/Downloads/DE/newsroom/dossiers/evaluierung-sensitivitaet-sars-cov-2-antigentests.pdf?__blob=publicationFile&v=69">"Vergleichende Evaluierung der Sensitivität von SARS-CoV-2 Antigenschnelltests"</a> mit dem Stand vom 14.12.2021.</p>
      <p>Solltest du dazu Fragen oder Anmerkungen haben oder einen Fehler entdeckt haben, melde dich gerne bei uns:</p>
      <ContactInfo/>
      <div style={{ flexGrow: 1 }}></div>
      <p>schnelltesttest.de ist ein Projekt von</p>
      <a href="https://zerforschung.org">
        <img style={{ width: '100%' }} src={zerlogo} />
      </a>
    </TextHeadingPage>
  );
}
