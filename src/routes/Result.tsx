import React from 'react';
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import {useNavigate, useParams} from "react-router";

import data from '../data/all.json';
import {get_test} from "../utils/testdata";
import NoTestFound from "../components/Result/NoTestFound";
import TestFound from "../components/Result/TestFound";

export default function Result() {

    let params = useParams();
    let navigate = useNavigate();
    if (params.testId === undefined) {
        navigate("/scan")
        return <></>
    }

    let test_id = params.testId;
    let test_data = get_test(test_id);
    return test_data == null ? <NoTestFound/> : <TestFound testdata={test_data}/>
}