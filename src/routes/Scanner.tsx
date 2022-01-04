import React from 'react';
import BarcodeScannerComponent from 'react-qr-barcode-scanner';
import { useNavigate } from 'react-router';

export default function Scanner(): JSX.Element {
  const navigate = useNavigate();
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
