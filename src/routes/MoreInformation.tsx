import React from 'react';
import TextHeadingPage from '../components/TextHeadingPage';
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { get_test } from '../utils/testdata';

export default function MoreInformation(): JSX.Element {
  const [searchParams, _setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const test_id = searchParams.get('test_id');
  if (test_id === null) {
    navigate('/scan');
    return <></>;
  }
  const test_data = get_test(test_id);
  return (
    <TextHeadingPage heading={'Mehr Informationen'}>
      {/*TODO*/}
      <h1>So, das muss noch jemand bauen</h1>
      <p>Die Daten des Tests sind:</p>
      <pre><code>
        {JSON.stringify(test_data, null, 4)}
      </code></pre>
    </TextHeadingPage>
  );
}
