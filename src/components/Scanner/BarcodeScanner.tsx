import React from 'react';
import BarcodeScannerComponent from 'react-qr-barcode-scanner';
import { useNavigate } from 'react-router';
export default function BarcodeScanner(): JSX.Element {
  const navigate = useNavigate();
  return (
    <div style={{ position: 'absolute', height: '100%', width: '100%', top: 0, left: 0 }}>
      <BarcodeScannerComponent
        onUpdate={(err, result) => {
          if (result) navigate(`/result?test_id=${encodeURIComponent(result.getText())}`);
        }}
      />
    </div>
  );
}
