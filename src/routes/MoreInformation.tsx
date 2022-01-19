import React from 'react';
import { TextHeadingPage } from '../components/HeadingPageLayouts';
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { get_test } from '../utils/testdata';
import NoTestFound from '../components/Result/NoTestFound';
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
  const [searchParams, _setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const test_id = searchParams.get('test_id');
  if (test_id === null) {
    navigate('/scan');
    return <></>;
  }
  const test_data = get_test(test_id);
  if (test_data === null) {
    return <NoTestFound test_id={test_id} />;
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
              <td>Ref-Nr:</td>
              <td>{test_data.ref_nr}</td>
            </tr>
            <tr>
              <td>Zielantigen:</td>
              <td>{getReadableAntigen(test_data.target_antigen)}</td>
            </tr>
            <tr>
              <td>Sensitivität bei Cq&lt;25:</td>
              <td>{test_data['sensitivity_cq<25']}&nbsp;%</td>
            </tr>
            <tr>
              <td>Sensitivität bei Cq 25-30:</td>
              <td>{test_data['sensitivity_cq25-30']}&nbsp;%</td>
            </tr>
            <tr>
              <td>Sensitivität bei Cq&gt;30:</td>
              <td>{test_data['sensitivity_cq>30']}&nbsp;%</td>
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
      </TextHeadingPage>
    );
  }
}
