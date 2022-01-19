import { Link } from 'react-router-dom';
import React, { CSSProperties } from 'react';
import { useNavigate } from 'react-router';

const buttonStyleBase: CSSProperties = {
  textDecoration: 'none',
  fontWeight: '700',
  font: 'Open Sans',
  width: '100%',
  cursor: 'pointer',
  borderRight: '2.5px solid white',
  borderTop: '5px solid white',
  boxSizing: 'border-box',
  display: 'block',
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
  fontWeight: '700',
  fontFamily: 'Open Sans Condensed',
  color: 'white',
};

const secondaryButtonStyle: CSSProperties = {
  ...buttonStyleBase,
  backgroundColor: 'white',
  fontWeight: '400',
  color: 'black',
};

const disabledStyle: CSSProperties = {
  pointerEvents: 'none',
  backgroundColor: '#888',
  border: '2px solid #888',
};

type Appearance = 'primary' | 'secondary';

function getButtonStyle(appearance: Appearance, disabled: boolean): CSSProperties {
  const baseStyle = appearance === 'primary' ? primaryButtonStyle : secondaryButtonStyle;
  const stateStyle = disabled ? disabledStyle : {};
  return { ...baseStyle, ...stateStyle };
}
export function BigLinkButton({
  to,
  content,
  appearance = 'secondary',
  disabled = false,
}: {
  to: string;
  content: JSX.Element | string;
  appearance?: Appearance;
  disabled?: boolean;
}): JSX.Element {
  return (
    <Link to={to} style={getButtonStyle(appearance, disabled)}>
      {content}
    </Link>
  );
}

export function BigBackButton({
  content,
  style,
  appearance = 'secondary',
}: {
  content: JSX.Element | string;
  style?: CSSProperties;
  appearance?: Appearance;
}): JSX.Element {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} style={{ ...getButtonStyle(appearance, false), ...style }}>
      {content}
    </button>
  );
}
