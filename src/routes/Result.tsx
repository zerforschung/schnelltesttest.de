import React from 'react';
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import {useNavigate, useParams} from "react-router";

import data from '../data/all.json';
import {get_test} from "../utils/testdata";
import NoTestFound from "../components/Result/NoTestFound";
import TestFound from "../components/Result/TestFound";
import {useSearchParams} from "react-router-dom";

export default function Result() {
    const [searchParams, setSearchParams] = useSearchParams();
    let params = useParams();
    let navigate = useNavigate();
    let test_id = searchParams.get('test_id')
    if (test_id === null) {
        navigate("/scan")
        return <></>
    }

    let test_data = get_test(test_id);
    return test_data == null ? <NoTestFound test_id={test_id}/> : <TestFound testdata={test_data}/>
}