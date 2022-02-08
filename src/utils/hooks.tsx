import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { get_test, TestData } from './testdata';

export function useTestData(): [string | null, TestData | 'NO_DATA' | null] {
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

export function safeJsonParse(string: string | null, defaultValue?: any): any {
  if (!string) return defaultValue;
  try {
    return JSON.parse(string);
  } catch {
    return defaultValue;
  }
}

export function useLocalStorageState<T = any>(
  key: string,
  initialValue?: T
): [typeof state, typeof setState] {
  const [state, setState] = useState<T>(() =>
    safeJsonParse(localStorage.getItem(key), initialValue)
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
}
