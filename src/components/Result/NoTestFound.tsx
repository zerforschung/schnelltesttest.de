import React from 'react';
import { Translate } from '../Localization';
import { TextHeadingPage } from '../HeadingPageLayouts';
import { ContactInfo } from '../ContactInfo';

export default function NoTestFound({ test_id }: { test_id: string }): JSX.Element {
  return (
    <TextHeadingPage heading={<Translate id="app.helpUs" />}>
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
          <Translate id="test.unknown.header" />
        </h1>

        <p style={{ justifyContent: 'center', textAlign: 'center' }}>
          <Translate id="test.unknown.body" values={{ test_id }} />
        </p>

        <p>
          <Translate id="app.contactUs" />:
        </p>
        <ContactInfo />
      </div>
      <div style={{ flexGrow: 1 }} />
    </TextHeadingPage>
  );
}
