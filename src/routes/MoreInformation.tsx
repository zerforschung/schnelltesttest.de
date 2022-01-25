import React from 'react';
import { Translate } from '../components/Localization';
import { TextHeadingPage } from '../components/HeadingPageLayouts';
import NoTestFound from '../components/Result/NoTestFound';
import TestFoundButNoData from '../components/Result/TestFoundButNoData';
import { BigLinkButton } from '../components/Buttons';
import { useTestData } from '../utils/hooks';

const antigenMap: Record<string, string> = {
  N: 'Nucleoprotein',
  S: 'Spike',
  'N+S': 'Nucleoprotein + Spike',
};

const getReadableAntigen = (antigen: string) => antigenMap[antigen] || antigen;

export default function MoreInformation(): JSX.Element {
  const [test_id, test_data] = useTestData();

  if (test_id == null) {
    return <></>;
  }

  if (test_data === null) {
    return <NoTestFound test_id={test_id} />;
  }

  if (test_data == 'NO_DATA') {
    return <TestFoundButNoData />;
  }

  return (
    <TextHeadingPage heading={<Translate id="app.moreInfo" />}>
      <p style={{ textAlign: 'center' }}>
        <Translate
          id="test.moreInfo"
          values={{
            manufacturer: test_data.manufacturer,
            test_name: test_data.test_name,
          }}
        />
      </p>
      <table>
        <tbody>
          <tr>
            <td>
              <Translate id="test.properties.atNr" />:
            </td>
            <td>{test_data.at_nr}</td>
          </tr>
          <tr>
            <td>
              <Translate id="test.properties.refNr" />:
            </td>
            <td>{test_data.ref_nr}</td>
          </tr>
          <tr>
            <td>
              <Translate id="test.properties.zielantigen" />:
            </td>
            <td>{getReadableAntigen(test_data.target_antigen)}</td>
          </tr>
          <tr>
            <td>
              <Translate id="test.properties.sensitivityFor" />{' '}
              <Translate id="test.properties.cq" /> &lt; 25:
            </td>
            <td>{test_data['sensitivity_cq<25']}&nbsp;%</td>
          </tr>
          <tr>
            <td>
              <Translate id="test.properties.sensitivityFor" />{' '}
              <Translate id="test.properties.cq" /> 25–30:
            </td>
            <td>{test_data['sensitivity_cq25-30']}&nbsp;%</td>
          </tr>
          <tr>
            <td>
              <Translate id="test.properties.sensitivityFor" />{' '}
              <Translate id="test.properties.cq" /> &gt; 30:
            </td>
            <td>{test_data['sensitivity_cq>30']}&nbsp;%</td>
          </tr>
          <tr>
            <td>
              <Translate id="test.properties.sensitivityTotal" />:
            </td>
            <td>{test_data['sensitivity_total']}&nbsp;%</td>
          </tr>
        </tbody>
      </table>
      <p>
        <Translate id="app.source" />:{' '}
        <a href="https://www.pei.de/SharedDocs/Downloads/DE/newsroom/dossiers/evaluierung-sensitivitaet-sars-cov-2-antigentests.pdf?__blob=publicationFile&v=69">
          PEI
        </a>
      </p>
      {/*<pre>*/}
      {/*  <code>{JSON.stringify(test_data, null, 4)}</code>*/}
      {/*</pre>*/}

      <div style={{ flexGrow: 1 }} />
      <BigLinkButton to="/" content={<Translate id="app.backToStart" />} appearance="primary" />
    </TextHeadingPage>
  );
}
