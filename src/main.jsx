import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import TopBar from './components/TopBar.jsx';
import Hero from './components/Hero.jsx';
import ThresholdSimulator from './components/ThresholdSimulator.jsx';
import Footer from './components/Footer.jsx';
import Toast from './components/Toast.jsx';

const TOAST_DURATION = 2600;

function App() {
  const [threshold, setThreshold] = useState(70);
  const [toast, setToast] = useState('');

  function showToast(message) {
    setToast(message);
    window.setTimeout(() => setToast(''), TOAST_DURATION);
  }

  return (
    <div className="app-shell">
      <TopBar />

      <main id="top" className="page-width">
        <Hero />
        <ThresholdSimulator
          threshold={threshold}
          onThresholdChange={setThreshold}
          onSave={showToast}
        />
        <Footer />
      </main>

      <Toast message={toast} />
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
