import React from 'react';
import { Translate } from '../Localization';
import { TextHeadingPage } from '../HeadingPageLayouts';
import { ContactInfo } from '../ContactInfo';

export default function NoTestFound({ test_id }: { test_id: string }): JSX.Element {
  return (
    <TextHeadingPage heading={<Translate id="app.helpUs" defaultMessage="Hilf Uns!" />}>
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
          <Translate
            id="test.unknown.header"
            defaultMessage="Huch, diesen Test kennen wir garnicht!"
          />
        </h1>

        <p style={{ justifyContent: 'center', textAlign: 'center' }}>
          <Translate
            id="test.unknown.body"
            defaultMessage={`Leider konnten wir unter "<b>{test_id}</b>" keinen Test finden.
            Es wäre cool, wenn du uns ein Foto des Tests, des Barcodes und die Marke schicken könntest.
            <br />
            <br />
            Wir tragen den Test dann in den nächsten Tagen ein.`}
            values={{ test_id }}
          />
        </p>

        <p>
          <Translate id="app.contactUs" defaultMessage="Du erreichst uns per" />:
        </p>
        <ContactInfo />
      </div>
      <div style={{ flexGrow: 1 }} />
    </TextHeadingPage>
  );
}
