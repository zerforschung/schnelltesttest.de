import React from 'react';
import {TestData} from "../../utils/testdata";
export default function NoTestFound({test_id}: {test_id: string}) {
    return (
        <>
            <p>Huch, einen Test mit der Nummer "{test_id}" kennen wir garnicht. Schreib uns doch eine eMail an schnelltests@zerforschung.org mit dem Barcode, einem Foto des Tests und der Marke, dann tragen wir das nach.</p>
        </>

    );
}