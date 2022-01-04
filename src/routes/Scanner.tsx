import React from 'react';
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import {useNavigate, useParams} from "react-router";


export default function Scanner() {
    let navigate = useNavigate();
    return (
        <>
            <BarcodeScannerComponent
                onUpdate={(err, result) => {
                    if (result) navigate(`/result?test_id=${encodeURIComponent(result.getText())}`);
                }}
            />
        </>


    );
}