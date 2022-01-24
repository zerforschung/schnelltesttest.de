import React from 'react';
import BarcodeScannerComponent from './BarcodeScannerComponent';
import { useNavigate } from 'react-router';
import { QuaggaJSResultObject } from '@ericblade/quagga2';
import { checkCode } from '../../utils/testdata';

export default function BarcodeScanner(): JSX.Element {
  const navigate = useNavigate();
  let eanCount: Record<string, number> = {};
  let active = true;
  const unknownLimit = 10;

  const handleData = function (data: QuaggaJSResultObject) {
    if (!active) {
      return;
    }
    const code = data.codeResult.code || '';
    const count = eanCount[code] || 0;

    const checkedCode = checkCode(code);

    if (checkedCode || count >= unknownLimit) {
      active = false;
      eanCount = {};
      navigate(`/result/${encodeURIComponent(checkedCode || code)}`);
    }

    eanCount[code] = count + 1;
  };
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <BarcodeScannerComponent onUpdate={handleData} />
    </div>
  );
}
