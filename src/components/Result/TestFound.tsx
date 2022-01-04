import React from 'react';
import { TestData } from '../../utils/testdata';
import { BigBackButton, BigLinkButton } from '../Buttons';
import { ResultIcon } from './ResultIcon';
import LogoHeadingPage from '../LogoHeadingPage';
export default function TestFound({ testdata }: { testdata: TestData }): JSX.Element {
  return (
    <LogoHeadingPage>
      <ResultIcon passed={testdata['sensitivity_cq<25'] >= 75} />
      <p style={{ textAlign: 'justify' }}>
        <b>"{testdata.test_name}"</b> von <b>"{testdata.manufacturer}"</b> erkennt Infizierte mit{' '}
        <i>hoher</i> Viruslast zu <b>{testdata['sensitivity_cq<25']} %</b>
      </p>
      <p>
        Über <i>alle</i> Viruslasten erkennt der Test <b>{testdata.sensitivity_total} %</b> der
        Infizierten
      </p>
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
      <div style={{ flexGrow: 1 }} />
      <BigLinkButton to={'/more_information'} content={'Mehr Informationen'} appearance="primary" />
      <BigBackButton content={'Zurück'} />
    </LogoHeadingPage>
  );
}
