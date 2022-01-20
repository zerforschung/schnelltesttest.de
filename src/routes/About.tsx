import React from 'react';
import './Scanner.css';
import zerlogo from '../components/About/ZER_Logo_header.svg';
import { TextHeadingPage } from '../components/HeadingPageLayouts';
import { ContactInfo } from '../components/ContactInfo';
import { LinkFooter } from '../components/LinkFooter';

export default function About(): JSX.Element {
  return (
    <TextHeadingPage heading={'Über'}>
      <p>
        Schnelltesttest.de bietet dir einen einfachen Weg, Informationen über die vom
        Paul-Ehrlich-Institut evaluierten SARS-COV-2-Antigen-Schnelltests abzurufen.
      </p>
      <p>
        Hierzu verwenden wir die Daten aus{' '}
        <a href="https://www.pei.de/SharedDocs/Downloads/DE/newsroom/dossiers/evaluierung-sensitivitaet-sars-cov-2-antigentests.pdf?__blob=publicationFile">
          "Vergleichende Evaluierung der Sensitivität von SARS-CoV-2 Antigenschnelltests"
        </a>{' '}
        mit dem Stand vom 12.01.2021.
      </p>
      <p>
        Solltest du dazu Fragen oder Anmerkungen haben oder einen Fehler entdeckt haben, melde dich
        gerne bei uns:
      </p>
      <ContactInfo />
      <div style={{ flexGrow: 1 }}></div>
      <p style={{ textAlign: 'center' }}>
        Den Code für diese Project findet ihr unter{' '}
        <a href={'https://github.com/zerforschung/schnelltesttest.de'}>
          https://github.com/zerforschung/schnelltesttest.de
        </a>
      </p>
      <p style={{ fontWeight: 300, textAlign: 'center' }}>
        schnelltesttest.de ist ein Projekt von
        <a href="https://zerforschung.org">
          <img style={{ width: '100%', height: '5em' }} src={zerlogo} />
        </a>
      </p>
      <LinkFooter />
    </TextHeadingPage>
  );
}
