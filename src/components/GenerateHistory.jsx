import { QRCodeSVG } from 'qrcode.react';
import { GENERATE_DATA } from '../constants';
import s from './history.module.css';

export const GenerateHistory = () => {
    const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

    return (
        <div className={s.container}>
            <h1 className={s.title}>История генерации QR-кодов</h1>
            
            {data.length === 0 ? (
                <p className={s.empty}>Вы еще не генерировали QR-коды</p>
            ) : (
                <div className={s.grid}>
                    {data.map((text) => (
                        <div key={text} className={s.card}>
                            <div className={s.qrContainer}>
                                <QRCodeSVG 
                                    value={text} 
                                    size={150}
                                    level="H"
                                    includeMargin
                                />
                            </div>
                            <div className={s.textContainer}>
                                <p className={s.text}>{text}</p>
                                <button 
                                    className={s.copyButton}
                                    onClick={() => {
                                        navigator.clipboard.writeText(text);
                                        alert('Текст скопирован в буфер обмена');
                                    }}
                                >
                                    Копировать текст
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};