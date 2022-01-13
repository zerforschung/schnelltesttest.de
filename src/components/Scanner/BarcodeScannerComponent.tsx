import React, { ReactElement, useEffect, useRef } from 'react';
import Quagga, { QuaggaJSResultCallbackFunction } from '@ericblade/quagga2';
import './BarcodeScannerComponent.css';

const BarcodeScannerComponent = ({
  onUpdate,
}: {
  onUpdate: QuaggaJSResultCallbackFunction;
}): ReactElement => {
  const ref = useRef(null);
  const quaggaConfig = {
    inputStream: {
      constraints: {
        height: window.innerHeight * 0.8 * window.devicePixelRatio,
        width: window.innerWidth * window.devicePixelRatio,
        facingMode: 'environment',
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
      readers: ['ean_reader'],
    },
    locate: true,
  };
  console.log(window.innerWidth / window.innerHeight, quaggaConfig, ref);
  useEffect(() => {
    Quagga.init(quaggaConfig, (err) => {
      if (err) {
        console.log(err, 'error msg');
      }
      Quagga.start();
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

  return <div id={'scanner'} ref={ref} />;
};

export default BarcodeScannerComponent;
