import React, { useState } from 'react';
import { LogoHeadingPage } from '../components/HeadingPageLayouts';
import { BigBackButton, BigLinkButton } from '../components/Buttons';
import { all, checkPrefix, TestData } from '../utils/testdata';
import SelectSearch, { SelectSearchOption } from 'react-select-search';

import './EnterCode.css';

import Fuse from 'fuse.js';

function UnknownText(): JSX.Element {
  return (
    <>
      {' '}
      <p style={{ color: 'red', textAlign: 'center', fontWeight: 700, fontFamily: 'Open Sans' }}>
        Leider konnten wir diesen Test nicht finden.
      </p>
      <p style={{ textAlign: 'center', fontWeight: 500, fontFamily: 'Open Sans' }}>
        Du kennst uns helfen, besser zu werden, indem zu uns weiter Informationen über den Test
        übermittelst.
      </p>
    </>
  );
}
type TestOption = { name: string; value: string; raw: TestData };
type SearchOption =
  | TestOption
  | { value: string; name: string; type: 'group'; items: TestOption[] };
export function EnterCode(): JSX.Element {
  const [testId, setTestId] = useState('');
  const isTestKnown = checkPrefix(testId);

  const [userInput, setUserInput] = useState('');
  function fuzzySearch(options: SelectSearchOption[]) {
    const fuse = new Fuse(options, {
      keys: ['name', 'groupName', 'raw.at_nr', 'raw.ids'],
      threshold: 0.3,
      ignoreLocation: true,
    });

    return (value: string) => {
      if (!value.length) {
        console.log('no value', value);
        return options;
      }
      setUserInput(value);
      const res = fuse.search(value);
      console.log('search', res);
      // res = res.filter((v,i,a)=>a.findIndex(t=>(t.value===v.value))===i)
      // console.log("dedup", res);
      return res.map((x) => x.item);
    };
  }
  const options: SearchOption[] = Object.values(all).map((x) => {
    return { name: `${x.manufacturer} ${x.test_name}`, value: x.at_nr, raw: x };
  });
  if (userInput.trim()) {
    // We add the user input as the last element so it can be selected
    options.push({
      name: `Unbekannter Test: ${userInput}`,
      value: userInput,
      raw: {
        at_nr: '',
        ref_nr: '',
        manufacturer: '',
        test_name: '',
        'sensitivity_cq<25': 0,
        'sensitivity_cq25-30': 0,
        'sensitivity_cq>30': 0,
        target_antigen: '',
        sensitivity_total: 0,
      },
    });
  }
  const [onBlur, setOnBlur] = useState(() => {
    return (_event: Event) => {};
  });
  return (
    <LogoHeadingPage>
      <div style={{ textAlign: 'center', fontWeight: 700, fontFamily: 'Open Sans Condensed' }}>
        Such nach der Nummer unter dem Strichcode, dem Hersteller oder dem Namen deines Tests:
      </div>
      <SelectSearch
        search={true}
        filterOptions={fuzzySearch}
        value={testId}
        onChange={(x) => {
          const value = x as unknown as string; // our selection library has wrong types
          setTestId(value);
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          onBlur(null);
        }}
        options={options}
        placeholder="Test suchen"
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        renderValue={(props, snapshot, className) => {
          console.log(props, snapshot, className);
          setOnBlur(() => {
            // eslint-disable-next-line react/prop-types
            return props.onBlur;
          });
          return (
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            <input
              {...props}
              onBlur={() => {}}
              // eslint-disable-next-line react/prop-types
              value={props['value'] || ''}
              className={className}
            />
          );
        }}
        printOptions={'on-focus'}
      />
      {!isTestKnown && testId.trim() ? <UnknownText /> : <></>}
      <div style={{ flexGrow: 1 }} />
      <BigLinkButton
        to={`/result/${encodeURIComponent(testId)}`}
        content={isTestKnown ? 'Überprüfen' : 'Hilf uns!'}
        appearance={'primary'}
        disabled={testId.trim() == ''}
      />

      <BigBackButton content={'Zurück'} />
    </LogoHeadingPage>
  );
}
