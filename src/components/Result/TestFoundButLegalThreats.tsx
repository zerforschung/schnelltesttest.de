import React from 'react';
import { ResultIcon } from './ResultIcon';
import { Translate } from '../Localization';
import { BigBackButton } from '../Buttons';
import { LogoHeadingPage } from '../HeadingPageLayouts';
import { TestData } from '../../utils/testdata';

export default function TestFoundButLegalThreats({
  testdata,
}: {
  testdata: TestData;
}): JSX.Element {
  return (
    <LogoHeadingPage>
      <ResultIcon passed={false} />
      <p>{testdata.legal_threat || ''}</p>
      <p>
        <Translate
          id="test.allDataReference"
          values={{
            peiStudyLink: (title: string) => (
              <a href="https://www.pei.de/SharedDocs/Downloads/DE/newsroom/dossiers/evaluierung-sensitivitaet-sars-cov-2-antigentests.pdf?__blob=publicationFile">
                {title}
              </a>
            ),
          }}
        />
      </p>
      {testdata.notice ? (
        <p>
          <b>
            <Translate id="app.remark" />:
          </b>{' '}
          <div dangerouslySetInnerHTML={{ __html: testdata.notice }} />
        </p>
      ) : (
        <></>
      )}
      <p style={{ textAlign: 'center' }}>
        <Translate
          id="test.legalThreat.advise"
          values={{
            link: (title: string) => <a href="https://zerforschung.org/unterstuetzen/">{title}.</a>,
          }}
        />
      </p>

      <div style={{ flexGrow: 1 }} />
      <BigBackButton content={<Translate id="app.back" />} />
    </LogoHeadingPage>
  );
}
