import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { get_test, TestData } from './testdata';

export function useTestData(): [string | null, TestData | null] {
  const params = useParams();
  const test_id = params.testId || null;
  console.log('test_id', test_id);
  const navigate = useNavigate();
  useEffect(() => {
    if (test_id === null) {
      navigate('/');
    }
  }, [test_id]);
  if (test_id === null) {
    return ['', null];
  }
  const test_data = get_test(test_id);
  return [test_id, test_data];
}
