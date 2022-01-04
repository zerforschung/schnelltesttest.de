import { Link } from 'react-router-dom';
import React, { CSSProperties } from 'react';
import { useNavigate } from 'react-router';

const buttonStyle: CSSProperties = {
  color: 'black',
  textDecoration: 'none',
  fontWeight: 'bold',
  backgroundColor: 'white',
  width: '100%',
  borderRight: '2.5px solid white',
  borderTop: '5px solid white',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px solid black',
  padding: '.75em',
  margin: '1em',
  textAlign: 'center',
  fontSize: '1em'
};
export function BigLinkButton({ to, content }: { to: string; content: JSX.Element | string }): JSX.Element {
  return (
    <Link to={to} style={buttonStyle}>
      {content}
    </Link>
  );
}

export function BigBackButton({ content, style }: { content: JSX.Element | string; style?: CSSProperties }): JSX.Element {
  const navigate = useNavigate();

  return (
    <button onClick={()=>navigate(-1)} style={{...buttonStyle, ...style}}>
      {content}
    </button>
  );
}