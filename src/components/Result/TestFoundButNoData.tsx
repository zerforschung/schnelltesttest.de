import React from 'react';
import { TextHeadingPage } from '../HeadingPageLayouts';

export default function TestFoundButNoData({ test_id }: { test_id: string }): JSX.Element {
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
          Du diesem Test gibt es leider keine Daten
        </h1>
        <p style={{ justifyContent: 'center', textAlign: 'center' }}>
          Den Test <b>"{test_id}"</b> kennen wir zwar, allerdings wurde er noch nicht{' '}
          <a
            href={
              'https://www.pei.de/SharedDocs/Downloads/DE/newsroom/dossiers/evaluierung-sensitivitaet-sars-cov-2-antigentests.pdf?__blob=publicationFile'
            }
          >
            vom PEI evaluiert
          </a>
          . Wenn es dort neue Daten gibt, tragen wir diese hier nach.
        </p>
      </div>
      <div style={{ flexGrow: 1 }} />
    </TextHeadingPage>
  );
}
