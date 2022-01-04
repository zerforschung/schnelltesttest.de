import React from 'react';
import { useNavigate } from 'react-router';

import { get_test } from '../utils/testdata';
import NoTestFound from '../components/Result/NoTestFound';
import TestFound from '../components/Result/TestFound';
import { useSearchParams } from 'react-router-dom';

export default function Result(): JSX.Element {
  const [searchParams, _setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const test_id = searchParams.get('test_id');
  if (test_id === null) {
    navigate('/scan');
    return <></>;
  }
  const test_data = get_test(test_id);

  return (
    <>
      {test_data == null ? <NoTestFound test_id={test_id} /> : <TestFound testdata={test_data} />}
    </>
  );
}
