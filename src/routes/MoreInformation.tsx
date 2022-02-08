import React from 'react';
import { TextHeadingPage } from '../components/HeadingPageLayouts';
import NoTestFound from '../components/Result/NoTestFound';
import { useTestData } from '../utils/hooks';
import TestFoundButNoData from '../components/Result/TestFoundButNoData';
import { BigLinkButton } from '../components/Buttons';
function getReadableAntigen(antigen: string): string {
  if (antigen == 'N') {
    return 'Nucleoprotein';
  } else if (antigen == 'S') {
    return 'Spike';
  } else if (antigen == 'N+S') {
    return 'Nucleoprotein + Spike';
  }
  return antigen;
}
export default function MoreInformation(): JSX.Element {
  const [test_id, test_data] = useTestData();
  if (test_id == null) {
    console.log('no test id');
    return <></>;
  }
  if (test_data === null) {
    return <NoTestFound test_id={test_id} />;
  } else if (test_data == 'NO_DATA') {
    return <TestFoundButNoData />;
  } else {
    return (
      <TextHeadingPage heading={`Mehr Informationen`}>
        <p style={{ textAlign: 'center' }}>
          Weitere Informationen zu{' '}
          <b>
            {test_data.manufacturer} {test_data.test_name}
          </b>
          :
        </p>
        <table>
          <tbody>
            <tr>
              <td>AT-Nr:</td>
              <td>{test_data.at_nr}</td>
            </tr>
            <tr>
              <td>AT-Nr. Selbsttest:</td>
              <td>{test_data.at_nr_self || ''}</td>
            </tr>
            <tr>
              <td>Ref-Nr:</td>
              <td>{test_data.ref_nr}</td>
            </tr>
            <tr>
              <td>Zielantigen:</td>
              <td>{getReadableAntigen(test_data.target_antigen)}</td>
            </tr>
            <tr>
              <td>Sensitivität bei Cq&le;25:</td>
              <td>{test_data['sensitivity_cq<=25']}&nbsp;%</td>
            </tr>
            <tr>
              <td>Sensitivität bei Cq 25-30:</td>
              <td>{test_data['sensitivity_cq25-30']}&nbsp;%</td>
            </tr>
            <tr>
              <td>Sensitivität bei Cq&ge;30:</td>
              <td>{test_data['sensitivity_cq>=30']}&nbsp;%</td>
            </tr>
            <tr>
              <td>Sensitivität gesamt:</td>
              <td>{test_data['sensitivity_total']}&nbsp;%</td>
            </tr>
          </tbody>
        </table>
        <p>
          Quelle:{' '}
          <a
            href={
              'https://www.pei.de/SharedDocs/Downloads/DE/newsroom/dossiers/evaluierung-sensitivitaet-sars-cov-2-antigentests.pdf?__blob=publicationFile&v=69'
            }
          >
            PEI
          </a>
        </p>
        {/*<pre>*/}
        {/*  <code>{JSON.stringify(test_data, null, 4)}</code>*/}
        {/*</pre>*/}

        <div style={{ flexGrow: 1 }} />
        <BigLinkButton to={`/`} content={'Zurück zum Start'} appearance={'primary'} />
      </TextHeadingPage>
    );
  }
}
