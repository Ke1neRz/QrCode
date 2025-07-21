// ScanHistory.jsx
import { QRCodeSVG } from 'qrcode.react';
import { SCAN_DATA } from '../constants';
import s from './history.module.css';

export const ScanHistory = () => {
    const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

    return (
        <div className={s.container}>
            <h1 className={s.title}>История сканирования</h1>
            {data.length === 0 ? (
                <p className={s.empty}>Нет данных о сканировании</p>
            ) : (
                <div className={s.list}>
                    {data.map((text) => (
                        <div key={text} className={s.item}>
                            <p className={s.text}>{text}</p>
                            <div className={s.qrWrapper}>
                                <QRCodeSVG 
                                    value={text} 
                                    size={150} 
                                    level="H"
                                    includeMargin
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}