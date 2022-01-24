import React, { ReactElement, useEffect, useRef, useState } from 'react';
import Quagga, { QuaggaJSResultCallbackFunction } from '@ericblade/quagga2';
import './BarcodeScannerComponent.css';
import { NoPermissionsModal } from './NoPermissionsModal';
import { HowToOverlay } from './HowToOverlay';

const BarcodeScannerComponent = ({
  onUpdate,
}: {
  onUpdate: QuaggaJSResultCallbackFunction;
}): ReactElement => {
  const ref = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [frontCamera, setFrontCamera] = useState(false);
  const [torchEnabled, setTorchEnabled] = useState(false);

  const quaggaConfig = {
    inputStream: {
      constraints: {
        height: window.innerHeight * 0.8 * window.devicePixelRatio,
        width: window.innerWidth * window.devicePixelRatio,
        facingMode: frontCamera ? 'environment' : 'user',
        focusMode: 'continuous',
        aspectRatio: { ideal: (window.innerHeight * 0.8) / window.innerWidth },
      },
      target: '#scanner',
    },
    locator: {
      patchSize: 'medium',
      halfSample: true,
    },
    frequency: 30,
    decoder: {
      readers: ['ean_reader', 'code_39_reader', 'code_128_reader', 'i2of5_reader'],
    },
    locate: true,
  };
  console.log(window.innerWidth / window.innerHeight, quaggaConfig, ref);
  useEffect(() => {
    Quagga.init(quaggaConfig, (err) => {
      if (err) {
        setShowModal(true);
      }
      try {
        Quagga.start();
      } catch (e) {
        console.log('err', e);
      }
    });

    Quagga.onProcessed((result) => {
      const drawingCtx = Quagga.canvas.ctx.overlay,
        drawingCanvas = Quagga.canvas.dom.overlay;

      if (result) {
        if (result.boxes) {
          drawingCtx.clearRect(
            0,
            0,
            Number(drawingCanvas.getAttribute('width')),
            Number(drawingCanvas.getAttribute('height'))
          );
          result.boxes
            .filter(function (box) {
              return box !== result.box;
            })
            .forEach(function (box) {
              Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, {
                color: 'gray',
                lineWidth: 1,
              });
            });
        }

        if (result.box) {
          Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, {
            color: 'blue',
            lineWidth: 2,
          });
        }
      }
    });

    Quagga.onDetected(onUpdate);
    return () => {
      Quagga.stop();
    };
  }, [quaggaConfig]);

  return (
    <>
      {showModal ? (
        <>
          <NoPermissionsModal />
        </>
      ) : (
        <>
          <HowToOverlay
            toggleFrontCamera={() => setFrontCamera(!frontCamera)}
            torchEnabled={torchEnabled}
            toggleTorchEnabled={() => {
              const track = Quagga.CameraAccess.getActiveTrack();
              if (track && typeof track.getCapabilities === 'function') {
                track.applyConstraints({
                  advanced: [{ torch: !torchEnabled } as MediaTrackConstraintSet],
                });
                setTorchEnabled(!torchEnabled);
              }
            }}
          />
          <div id={'scanner'} ref={ref} />
        </>
      )}
    </>
  );
};

export default BarcodeScannerComponent;
