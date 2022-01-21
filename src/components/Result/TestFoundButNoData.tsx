import React from 'react';
import { TextHeadingPage } from '../HeadingPageLayouts';

export default function TestFoundButNoData(): JSX.Element {
  return (
    <TextHeadingPage heading={'Keine Daten vorhanden'}>
      <div
        style={{
          display: 'flex',
          alignContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0 0.5em 0.5em 0.5em',
          maxWidth: '800px',
          fontFamily: 'Open Sans',
        }}
      >
        <h1
          style={{
            textAlign: 'center',
            fontSize: '2rem',
          }}
        >
          Zu diesem Test gibt es leider keine Daten
        </h1>
        <p style={{ justifyContent: 'center', textAlign: 'center' }}>
          Leider wurde dieser Test noch nicht vom{' '}
          <a
            href={
              'https://www.pei.de/SharedDocs/Downloads/DE/newsroom/dossiers/evaluierung-sensitivitaet-sars-cov-2-antigentests.pdf?__blob=publicationFile'
            }
          >
            Paul-Ehrlich-Institut
          </a>{' '}
          überprüft. Deswegen können wir hier keine Informationen zur Genauigkeit anzeigen.
        </p>
        <p style={{ fontWeight: 300, textAlign: 'center' }}>
          Bitte wende Dich an das Paul-Ehrlich-Institut für weitere Fragen zu diesem Test.
        </p>
      </div>
      <div style={{ flexGrow: 1 }} />
    </TextHeadingPage>
  );
}
