import React from 'react';
import NoTestFound from '../components/Result/NoTestFound';
import TestFound from '../components/Result/TestFound';
import { useTestData } from '../utils/hooks';
import TestFoundButNoData from '../components/Result/TestFoundButNoData';
import TestFoundButLegalThreats from '../components/Result/TestFoundButLegalThreats';

export default function Result(): JSX.Element {
  const [test_id, test_data] = useTestData();
  if (test_id == null) {
    return <></>;
  }
  if (test_data == null) {
    return <NoTestFound test_id={test_id} />;
  } else if (test_data == 'NO_DATA') {
    return <TestFoundButNoData />;
  } else if (test_data?.legal_threat) {
    return <TestFoundButLegalThreats testdata={test_data} />;
  } else {
    return <TestFound testdata={test_data} />;
  }
}
