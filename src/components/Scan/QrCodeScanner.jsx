import { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import s from './qrCodeScanner.module.css';
import { SCAN_DATA } from '../../constants';

export const QrCodeScanner = () => {
    const [scanned, setScanned] = useState(null);

    const scanHandler = (result) => {
        if (!result) return;

        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

        if (prevData.includes(result.text)) {
            setScanned("Этот QR-код уже был отсканирован: " + result.text);
            return;
        }

        setScanned(result.text);
        localStorage.setItem(
            SCAN_DATA,
            JSON.stringify([...prevData, result.text])
        );
    };

    return (
        <div className={s.container}>
            <h1 className={s.title}>Сканер QR-кода</h1>
            
            <div className={s.scannerWrapper}>
                <QrReader
                    constraints={{ facingMode: 'environment' }}
                    scanDelay={500}
                    onResult={scanHandler}
                />
            </div>
        
            {scanned && (
                <div className={s.result}>
                    {scanned.startsWith("Этот QR-код уже был") ? (
                        <p style={{ color: 'var(--danger)' }}>{scanned}</p>
                    ) : (
                        <>
                            <p>Успешно отсканировано:</p>
                            <p>{scanned}</p>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};