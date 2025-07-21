import { Routes, Route } from "react-router-dom";
import { Navigation } from './components/Navigation/Navigation';
import { QrCodeGenerator } from './components/Generate/QrCodeGenerator';
import { QrCodeScanner } from './components/Scan/QrCodeScanner';
import { GenerateHistory } from './components/GenerateHistory';
import { ScanHistory } from './components/ScanHistory';

const Layout = () => {
    return (
        <div>
            <Navigation />

            <Routes>
                <Route path="/QrCode/generate" element={<QrCodeGenerator />} />
                <Route path="/QrCode/scan" element={<QrCodeScanner />} />
                <Route path="/QrCode/scanHistory" element={<ScanHistory />} />
                <Route path="/QrCode/generateHistory" element={<GenerateHistory />} />
            </Routes>
        </div>
    );
};


export { Layout };