import React from 'react';
import { Translate } from '../Localization';
import { BigBackButton, BigLinkButton } from '../Buttons';
import { ResultIcon } from './ResultIcon';
import { LogoHeadingPage } from '../HeadingPageLayouts';
import { TestData } from '../../utils/testdata';

export default function TestFound({ testdata }: { testdata: TestData }): JSX.Element {
  return (
    <LogoHeadingPage>
      <ResultIcon passed={testdata['sensitivity_cq<25'] >= 75} />
      <p>
        <Translate
          id="test.found.body"
          defaultMessage={`
            <b>"{test_name}"</b> von
            <b>"{manufacturer}"</b> erkennt Infizierte mit
            <i>sehr hoher</i> Viruslast zu
            <b>{sensitivity} %</b>`}
          values={{
            test_name: testdata.test_name,
            manufacturer: testdata.manufacturer,
            sensitivity: testdata['sensitivity_cq<25'],
          }}
        />
      </p>
      <p>
        <Translate
          id="test.found.sensitivity_total"
          defaultMessage="Über <i>alle</i> Viruslasten erkennt der Test <b>{sensitivity_total} %</b> der Infizierten."
          values={{ sensitivity_total: testdata.sensitivity_total }}
        />
      </p>
      <p style={{ fontStyle: 'italic' }}>
        <Translate
          id="test.warning"
          defaultMessage="Vorsicht: Diese Zahlen wurden vor Omikron erhoben, allerdings <a>schätzt das PEI Antigentests auch für den Nachweis von Omikron-Infektion als geeignet ein</a>."
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
        <Translate id="app.source" defaultMessage="Quelle" />:{' '}
        <a href="https://www.pei.de/SharedDocs/Downloads/DE/newsroom/dossiers/evaluierung-sensitivitaet-sars-cov-2-antigentests.pdf?__blob=publicationFile&v=69">
          PEI
        </a>
      </p>
      <div style={{ flexGrow: 1 }} />
      <BigLinkButton
        to={`/result/${encodeURIComponent(testdata.at_nr)}/details`}
        content={<Translate id="app.moreInfo" defaultMessage="Mehr Informationen" />}
        appearance="primary"
      />
      <BigBackButton content={<Translate id="app.back" defaultMessage="Zurück" />} />
    </LogoHeadingPage>
  );
}
