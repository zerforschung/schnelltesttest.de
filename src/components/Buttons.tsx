import { Link } from 'react-router-dom';
import React, { CSSProperties } from 'react';
import { useNavigate } from 'react-router';

const buttonStyleBase: CSSProperties = {
  textDecoration: 'none',
  fontWeight: 'bold',
  width: '100%',
  borderRight: '2.5px solid white',
  borderTop: '5px solid white',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px solid black',
  padding: '.75em',
  marginTop: '1em',
  textAlign: 'center',
  fontSize: '1em',
};

const primaryButtonStyle: CSSProperties = {
  ...buttonStyleBase,
  backgroundColor: 'black',
  color: 'white',
};

const secondaryButtonStyle: CSSProperties = {
  ...buttonStyleBase,
  backgroundColor: 'white',
  color: 'black',
};

type Appearance = 'primary' | 'secondary';

function getButtonStyle(appearance?: Appearance): CSSProperties {
  return appearance === 'primary' ? primaryButtonStyle : secondaryButtonStyle;
}
export function BigLinkButton({
  to,
  content,
  appearance,
}: {
  to: string;
  content: JSX.Element | string;
  appearance?: Appearance;
}): JSX.Element {
  return (
    <Link to={to} style={getButtonStyle(appearance)}>
      {content}
    </Link>
  );
}

export function BigBackButton({
  content,
  style,
  appearance,
}: {
  content: JSX.Element | string;
  style?: CSSProperties;
  appearance?: Appearance;
}): JSX.Element {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} style={{ ...getButtonStyle(appearance), ...style }}>
      {content}
    </button>
  );
}
