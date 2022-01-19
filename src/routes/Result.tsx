import React from 'react';
import NoTestFound from '../components/Result/NoTestFound';
import TestFound from '../components/Result/TestFound';
import { useTestData } from '../utils/hooks';

export default function Result(): JSX.Element {
  const [test_id, test_data] = useTestData();
  if (test_id == null) {
    return <></>;
  }

  return (
    <>
      {test_data == null ? <NoTestFound test_id={test_id} /> : <TestFound testdata={test_data} />}
    </>
  );
}
