import React from 'react';
import NoTestFound from '../components/Result/NoTestFound';
import TestFound from '../components/Result/TestFound';
import { useTestData } from '../utils/hooks';
import TestFoundButNoData from '../components/Result/TestFoundButNoData';

export default function Result(): JSX.Element {
  const [test_id, test_data] = useTestData();
  if (test_id == null) {
    return <></>;
  }
  if (test_data == null) {
    return <NoTestFound test_id={test_id} />;
  } else if (test_data == 'NO_DATA') {
    return <TestFoundButNoData test_id={test_id} />;
  } else {
    return <TestFound testdata={test_data} />;
  }
}
