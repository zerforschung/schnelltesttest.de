import React from 'react';
import { Translate } from '../Localization';
import { TextHeadingPage } from '../HeadingPageLayouts';

export default function TestFoundButNoData(): JSX.Element {
  return (
    <TextHeadingPage
      heading={<Translate id="test.noData" defaultMessage="Keine Daten vorhanden" />}
    >
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
        <h1 style={{ textAlign: 'center', fontSize: '2rem' }}>
          <Translate
            id="test.noDataForTest"
            defaultMessage="Zu diesem Test gibt es noch keine Daten"
          />
        </h1>
        <p style={{ justifyContent: 'center', textAlign: 'center', fontWeight: 700 }}>
          <Translate
            id="test.unvalidated"
            defaultMessage="Leider wurde dieser Test noch nicht vom <peiStudyLink>Paul-Ehrlich-Institut</peiStudyLink> überprüft. Deswegen können wir hier keine Informationen zur Genauigkeit anzeigen."
            values={{
              peiStudyLink: (title: string) => (
                <a href="https://www.pei.de/SharedDocs/Downloads/DE/newsroom/dossiers/evaluierung-sensitivitaet-sars-cov-2-antigentests.pdf?__blob=publicationFile">
                  {title}
                </a>
              ),
            }}
          />
        </p>
        <p style={{ fontWeight: 300, textAlign: 'center' }}>
          <Translate
            id="test.pleaseContactPei"
            defaultMessage="Bitte wende Dich an das Paul-Ehrlich-Institut für weitere Fragen zu diesem Test."
          />
        </p>
      </div>
      <div style={{ flexGrow: 1 }} />
    </TextHeadingPage>
  );
}
