import React from 'react';
import { TestData } from '../../utils/testdata';
import { BigBackButton, BigLinkButton } from '../Buttons';
export default function TestFound({ testdata }: { testdata: TestData }): JSX.Element {
  return (
    <>
      <div style={{display: "flex", flexDirection: "column", justifyItems: 'center', alignItems: 'center', alignContent: 'center', padding: '2em'}}>
      <div style={{  height: '25vw',
        width: '25vw',
        backgroundColor: 'green',
        borderRadius: '50%',
        display: 'inline-block'}}></div>
      <p>
        <b>"{testdata.test_name}"</b> von <b>"{testdata.manufacturer}"</b> erkennt Infizierte mit <i>hoher</i> Viruslast zu <b>{testdata['sensitivity_cq<25']} %</b></p>
      <p>
        Über <i>alle</i> Viruslasten erkennt er <b>{testdata.sensitivity_total} %</b>
      </p>
        <p>Quelle: <a href={"https://www.pei.de/SharedDocs/Downloads/DE/newsroom/dossiers/evaluierung-sensitivitaet-sars-cov-2-antigentests.pdf?__blob=publicationFile&v=69"}>PEI</a></p>
      {/*<p>{JSON.stringify(testdata)}</p>*/}

        <BigLinkButton to={"/more_information"} content={"Mehr Informationen"}/>
        <BigBackButton content={"Zurück"}/>
      </div>
    </>
  );
}
