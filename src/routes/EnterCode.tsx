import React, { CSSProperties, useState } from 'react';
import { LogoHeadingPage } from '../components/HeadingPageLayouts';
import { BigBackButton, BigLinkButton } from '../components/Buttons';
import { checkPrefix } from '../utils/testdata';
import { useNavigate } from 'react-router';

const inputStyle: CSSProperties = {
  textDecoration: 'none',
  fontWeight: 'bold',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px solid black',
  padding: '.75em',
  marginTop: '1em',
  textAlign: 'center',
  fontSize: '1em',
  borderRadius: '2em',
  width: '80%',
};

export function TestIdUnknown({ testId }: { testId: string }): JSX.Element {
  return (
    <>
      <p style={{ color: 'red', textAlign: 'center', fontWeight: 700, fontFamily: 'Open Sans' }}>
        Leider konnten wir diesen Test nicht finden.
      </p>
      <p style={{ textAlign: 'center', fontWeight: 500, fontFamily: 'Open Sans' }}>
        Du kennst uns helfen, besser zu werden, indem zu uns weiter Informationen über den Test
        übermittelst.
      </p>
      <div style={{ flexGrow: 1 }} />
      <BigLinkButton
        to={`/result?test_id=${encodeURIComponent(testId)}`}
        content={'Hilf uns!'}
        appearance={'primary'}
      />
    </>
  );
}
export function TestIdKnown({ testId }: { testId: string }): JSX.Element {
  return (
    <>
      <div style={{ flexGrow: 1 }} />
      <BigLinkButton
        to={`/result?test_id=${encodeURIComponent(testId)}`}
        content={'Überprüfen'}
        appearance={'primary'}
      />
    </>
  );
}
export function EnterCode(): JSX.Element {
  const [testId, setTestId] = useState('');
  const isTestKnown = checkPrefix(testId);

  const navigate = useNavigate();

  const handleKeyDown = function (e: React.KeyboardEvent) {
    if (e.key == 'Enter') {
      navigate(`/result?test_id=${encodeURIComponent(testId)}`);
    }
  };

  return (
    <LogoHeadingPage>
      <div style={{ textAlign: 'center', fontWeight: 700, fontFamily: 'Open Sans Condensed' }}>
        Bitte gib die Nummer unter dem Strichcode oder die AT-Nummer ein:
      </div>
      <input
        style={inputStyle}
        onChange={(target) => setTestId(target.target.value.toUpperCase())}
        onKeyDown={handleKeyDown}
      />
      {isTestKnown ? <TestIdKnown testId={testId} /> : <TestIdUnknown testId={testId} />}
      <BigBackButton content={'Zurück'} />
    </LogoHeadingPage>
  );
}
