import barcodeImage from './barcode.svg';
import React, { CSSProperties } from 'react';
export function HowToOverlay({
  toggleFrontCamera,
  torchEnabled,
  toggleTorchEnabled,
}: {
  toggleFrontCamera: () => void;
  torchEnabled: boolean;
  toggleTorchEnabled: () => void;
}): JSX.Element {
  const buttonStyle: CSSProperties = {
    textDecoration: 'none',
    font: 'Open Sans',
    cursor: 'pointer',
    borderRight: '2.5px solid white',
    borderTop: '5px solid white',
    boxSizing: 'border-box',
    display: 'block',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid black',
    padding: '.75em',
    margin: '1em',
    textAlign: 'center',
    fontSize: '1em',
    backgroundColor: 'black',
    fontWeight: '700',
    fontFamily: 'Open Sans Condensed',
    color: 'white',
  };
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
      }}
    >
      <img width="50%" src={barcodeImage} style={{ marginBottom: '2em', opacity: '20%' }} />
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 42%)',
          fontWeight: 'bold',
          color: 'white',
          padding: '1em',
          textAlign: 'center',
        }}
      >
        Bitte scanne den Strichcode auf der Verpackung des Schnelltests
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <button onClick={toggleFrontCamera} style={buttonStyle}>
          Kamera wechseln
        </button>
        <button onClick={toggleTorchEnabled} style={buttonStyle}>
          Taschenlampe {!!torchEnabled.toString()}
        </button>
      </div>
    </div>
  );
}
