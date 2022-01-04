import React from 'react';
import { TestData } from '../../utils/testdata';
export default function TestFound({ testdata }: { testdata: TestData }): JSX.Element {
  return (
    <>
      <p>
        Du hast den Test "{testdata.test_name}" von "{testdata.manufacturer}" gescannt
      </p>
      <p>Dieser erkennt Infizierte mit hoher Viruslast zu {testdata['sensitivity_cq<25']}</p>
      <p>
        Über alle Viruslasten bescheinigt ihm das PEI eine Sensitivität von{' '}
        {testdata.sensitivity_total}
      </p>
      {/*<p>{JSON.stringify(testdata)}</p>*/}
    </>
  );
}
