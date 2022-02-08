import React from 'react';
import { Translate } from '../Localization';
import { TextHeadingPage } from '../HeadingPageLayouts';

export default function TestFoundButNoData(): JSX.Element {
  return (
    <TextHeadingPage heading={<Translate id="test.noData" />}>
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
          <Translate id="test.noDataForTest" />
        </h1>
        <p style={{ justifyContent: 'center', textAlign: 'center', fontWeight: 700 }}>
          <Translate
            id="test.unvalidated"
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
          <Translate id="test.pleaseContactPei" />
        </p>
      </div>
      <div style={{ flexGrow: 1 }} />
    </TextHeadingPage>
  );
}
