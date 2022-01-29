import React from 'react';
import { TestData } from '../../utils/testdata';
import { BigBackButton } from '../Buttons';
import { ResultIcon } from './ResultIcon';
import { LogoHeadingPage } from '../HeadingPageLayouts';
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
        Die Daten zu allen Tests findet ihr beim{' '}
        <a
          href={
            'https://www.pei.de/SharedDocs/Downloads/DE/newsroom/dossiers/evaluierung-sensitivitaet-sars-cov-2-antigentests.pdf?__blob=publicationFile&v=69'
          }
        >
          Paul-Ehrlich-Institut.
        </a>
      </p>
      <p style={{ textAlign: 'center' }}>
        Falls ihr uns bei eventuellen Rechtsstreitigkeiten unterstützen wollt, findet ihr{' '}
        <a href={'https://zerforschung.org/unterstuetzen/'}>hier Möglichkeiten.</a>
      </p>

      <div style={{ flexGrow: 1 }} />
      <BigBackButton content={'Zurück'} />
    </LogoHeadingPage>
  );
}
