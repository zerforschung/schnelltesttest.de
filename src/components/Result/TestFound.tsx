import React from 'react';
import { metadata, TestData } from '../../utils/testdata';
import { BigBackButton, BigLinkButton } from '../Buttons';
import { ResultIcon } from './ResultIcon';
import { LogoHeadingPage } from '../HeadingPageLayouts';
export default function TestFound({ testdata }: { testdata: TestData }): JSX.Element {
  return (
    <LogoHeadingPage>
      <ResultIcon passed={testdata['sensitivity_cq<=25'] >= 75} />
      <p>
        <b>"{testdata.test_name}"</b> von <b>"{testdata.manufacturer}"</b> erkennt Infizierte mit{' '}
        <i>sehr hoher</i> Viruslast zu <b>{testdata['sensitivity_cq<=25']}&nbsp;%</b>
      </p>
      <p>
        Über <i>alle</i> Viruslasten erkennt der Test <b>{testdata.sensitivity_total}&nbsp;%</b> der
        Infizierten
      </p>
      <p>
        <strong>Hinweis</strong>:{' '}
        <em>
          Seit dem 30.05.2022 werden diese Daten nicht mehr durch das PEI veröffentlicht.
          schnelltesttest.de wurde auf diesem letzten Datenstand eingefroren und wird nicht mehr
          aktualisiert
        </em>
      </p>
      {testdata.notice ? (
        <p>
          <b>Hinweis:</b> <div dangerouslySetInnerHTML={{ __html: testdata.notice }} />
        </p>
      ) : (
        <></>
      )}
      {!testdata.omicron_bridging ? (
        <p style={{ fontStyle: 'italic' }}>
          Vorsicht: Für diesen Test hat das PEI nicht angegeben, ob die Werte auch für Omikron
          gelten.
        </p>
      ) : (
        <></>
      )}
      <p>
        Quelle: <a href={metadata.source}>PEI</a>
      </p>
      <div style={{ flexGrow: 1 }} />
      <BigLinkButton
        to={`/result/${encodeURIComponent(testdata.at_nr)}/details`}
        content={'Mehr Informationen'}
        appearance="primary"
      />
      <BigBackButton content={'Zurück'} />
    </LogoHeadingPage>
  );
}
