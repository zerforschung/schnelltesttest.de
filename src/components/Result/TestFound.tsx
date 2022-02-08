import React from 'react';
import { Translate } from '../Localization';
import { BigBackButton, BigLinkButton } from '../Buttons';
import { ResultIcon } from './ResultIcon';
import { LogoHeadingPage } from '../HeadingPageLayouts';
import { TestData } from '../../utils/testdata';

export default function TestFound({ testdata }: { testdata: TestData }): JSX.Element {
  return (
    <LogoHeadingPage>
      <ResultIcon passed={testdata['sensitivity_cq<=25'] >= 75} />
      <p>
        <Translate
          id="test.found.body"
          values={{
            test_name: testdata.test_name,
            manufacturer: testdata.manufacturer,
            sensitivity: testdata['sensitivity_cq<=25'],
          }}
        />
      </p>
      <p>
        <Translate
          id="test.found.sensitivity_total"
          values={{ sensitivity_total: testdata.sensitivity_total }}
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
      <p style={{ fontStyle: 'italic' }}>
        <Translate
          id="test.warning"
          values={{
            a: (title: string) => (
              <a href="https://www.pei.de/DE/newsroom/hp-meldungen/2021/211230-antigentests-omikron-variante.html">
                {title}
              </a>
            ),
          }}
        />
      </p>
      <p>
        <Translate id="app.source" />:{' '}
        <a href="https://www.pei.de/SharedDocs/Downloads/DE/newsroom/dossiers/evaluierung-sensitivitaet-sars-cov-2-antigentests.pdf?__blob=publicationFile&v=69">
          PEI
        </a>
      </p>
      <div style={{ flexGrow: 1 }} />
      <BigLinkButton
        to={`/result/${encodeURIComponent(testdata.at_nr)}/details`}
        content={<Translate id="app.moreInfo" />}
        appearance="primary"
      />
      <BigBackButton content={<Translate id="app.back" />} />
    </LogoHeadingPage>
  );
}
