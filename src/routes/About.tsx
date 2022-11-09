import React from 'react';
import './Scanner.css';
import zerlogo from '../components/About/ZER_Logo_header.svg';
import { TextHeadingPage } from '../components/HeadingPageLayouts';
import { ContactInfo } from '../components/ContactInfo';
import { LinkFooter } from '../components/LinkFooter';
import { metadata } from '../utils/testdata';

export default function About(): JSX.Element {
  return (
    <TextHeadingPage heading={'Über'}>
      <p>
        Schnelltesttest.de bietet dir einen einfachen Weg, Informationen über die vom
        Paul-Ehrlich-Institut evaluierten SARS-COV-2-Antigen-Schnelltests abzurufen.
      </p>
      <p>
        Hierzu verwenden wir die Daten aus{' '}
        <a href={metadata.source}>
          "Vergleichende Evaluierung der Sensitivität von SARS-CoV-2 Antigenschnelltests"
        </a>{' '}
        mit dem Stand vom {metadata.date}.
      </p>
      <p>
        Ein Test wird mit einem grünen Haken angezeigt, wenn die Sensitivität bei sehr hoher
        Viruslast (Cq ≤ 25) mehr als 75% beträgt. Dies entspricht dem vom{' '}
        <a href={metadata.source}>Paul-Ehrlich-Institut angenommenen "Stand der Technik".</a> Falls
        wir aus rechtlichen Gründen keine Daten zu einem Test anzeigen können, erscheint ebenfalls
        ein rotes Kreuz.
      </p>
      <p>
        Solltest du dazu Fragen oder Anmerkungen haben oder einen Fehler entdeckt haben, melde dich
        gerne bei uns:
      </p>
      <ContactInfo />
      <div style={{ flexGrow: 1 }}></div>
      <p style={{ width: '100%', textAlign: 'center' }}>
        Den Code für dieses Projekt findet ihr auf{' '}
        <a href={'https://github.com/zerforschung/schnelltesttest.de'}>unserem GitHub</a>.
      </p>
      <p style={{ fontWeight: 300, textAlign: 'center' }}>
        schnelltesttest.de ist ein Projekt von
        <a href="https://zerforschung.org">
          <img style={{ width: '100%', height: '5em' }} src={zerlogo} alt="Rotes Logo von Zerforschung mit der Aufschrift &quot;ZER REVERSE ENGINEERING ZENTRUM&quot;" />
        </a>
      </p>
      <LinkFooter />
    </TextHeadingPage>
  );
}
