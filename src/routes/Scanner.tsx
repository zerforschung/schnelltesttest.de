import React from 'react';
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import {useNavigate, useParams} from "react-router";

export default function Scanner() {
    const [data, setData] = React.useState("Not Found");

    let navigate = useNavigate();
    return (
        <>
            <BarcodeScannerComponent
                onUpdate={(err, result) => {
                    if (result) navigate(`/result/${result.getText()}`);
                }}
            />
            <p>{data}</p>
        </>

    );
}