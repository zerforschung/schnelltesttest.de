import React from 'react';
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import {useNavigate, useParams} from "react-router";

export default function Result() {

    let params = useParams();
    let navigate = useNavigate();
    let test_id;
    if (test_id === undefined) {
        navigate("/scan")
    }
    test_id = params.testId;
    return (
        <>

            <p>You scanned: {test_id}</p>
        </>

    );
}