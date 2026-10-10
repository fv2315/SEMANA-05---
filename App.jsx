import { useState } from 'react';
import { Dashboard } from './components/Dashboard';

function ComponentesView() {
  return (
    <section>
      <div style={{ marginBottom: '25px' }}>
        <h1 style={{ margin: '0 0 5px 0', fontSize: '1.8rem', color: '#f8fafc' }}>🧩 Arquitectura de Componentes</h1>
        <p style={{ margin: 0, color: '#94a3b8' }}>Demostración de Props y Children en React</p>
      </div>
      <div style={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '10px', padding: '20px' }}>
        <h3 style={{ color: '#10b981' }}>Transmisión de Datos</h3>
        <p style={{ color: '#e2e8f0', lineHeight: '1.6' }}>
          El flujo de datos en React es unidireccional. Aquí estamos pasando información desde el 
          <b> Orquestador (Dashboard)</b> hacia las <b>Tarjetas (MetricCard)</b> mediante <i>props</i> estructuradas. 
          Además, utilizamos la prop especial <i>children</i> para inyectar los porcentajes y tendencias dinámicamente.
        </p>
      </div>
    </section>
  );
}

function EstiladoView() {
  return (
    <section>
      <div style={{ marginBottom: '25px' }}>
        <h1 style={{ margin: '0 0 5px 0', fontSize: '1.8rem', color: '#f8fafc' }}>🎨 Estrategias de Estilado</h1>
        <p style={{ margin: 0, color: '#94a3b8' }}>CSS Modules vs Tailwind vs Inline Styles</p>
      </div>

      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '250px', backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '10px', padding: '20px' }}>
          <h3 style={{ color: '#e2e8f0', marginTop: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>📦 CSS Modules</h3>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Scope aislado, ideal para componentes complejos</p>
          <pre style={{ backgroundColor: '#1e293b', padding: '12px', borderRadius: '6px', color: '#38bdf8', fontSize: '0.85rem', overflowX: 'auto' }}>
{`.card_abc123 {
  padding: 1rem;
  border-radius: 8px;
}
// Uso:
<div className={styles.card}>`}
          </pre>
          <div style={{ backgroundColor: '#064e3b', color: '#34d399', padding: '10px', borderRadius: '6px', fontSize: '0.85rem', marginTop: '15px', fontWeight: '500' }}>
            ✅ Ventaja: Sin colisiones de nombres
          </div>
        </div>

        <div style={{ flex: 1, minWidth: '250px', backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '10px', padding: '20px' }}>
          <h3 style={{ color: '#e2e8f0', marginTop: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>⚡ Tailwind CSS</h3>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Utilidades, prototipado rápido</p>
          <pre style={{ backgroundColor: '#1e293b', padding: '12px', borderRadius: '6px', color: '#c084fc', fontSize: '0.85rem', overflowX: 'auto' }}>
{`<div className="p-4 rounded-lg 
bg-slate-800 shadow-md 
hover:scale-105 transition-all">
</div>`}
          </pre>
          <div style={{ backgroundColor: '#064e3b', color: '#34d399', padding: '10px', borderRadius: '6px', fontSize: '0.85rem', marginTop: '15px', fontWeight: '500' }}>
            ✅ Ventaja: No inventas clases
          </div>
        </div>

        <div style={{ flex: 1, minWidth: '250px', backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '10px', padding: '20px' }}>
          <h3 style={{ color: '#e2e8f0', marginTop: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>🖌️ Inline Styles</h3>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Solo para valores dinámicos</p>
          <pre style={{ backgroundColor: '#1e293b', padding: '12px', borderRadius: '6px', color: '#fbbf24', fontSize: '0.85rem', overflowX: 'auto' }}>
{`const color = trend === 'up' 
  ? '#10b981' 
  : '#ef4444';

<div style={{ color, padding: '1rem' }}>`}
          </pre>
          <div style={{ backgroundColor: '#7f1d1d', color: '#fca5a5', padding: '10px', borderRadius: '6px', fontSize: '0.85rem', marginTop: '15px', fontWeight: '500' }}>
            ⚠️ Limitación: No media queries
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="modal-window">
      <header className="modal-header">
        <h2 style={{ margin: 0, color: '#38bdf8', fontSize: '1.2rem' }}>
          🚀 DarkTheme Dashboard
        </h2>
        
        <div className="modal-tabs">
          <span 
            className={`tab ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            📊 Dashboard
          </span>
          <span 
            className={`tab ${activeTab === 'componentes' ? 'active' : ''}`}
            onClick={() => setActiveTab('componentes')}
          >
            🧩 Componentes
          </span>
          <span 
            className={`tab ${activeTab === 'estilado' ? 'active' : ''}`}
            onClick={() => setActiveTab('estilado')}
          >
            🎨 Estilado
          </span>
        </div>
        
        <button className="btn-close">✖ Cerrar Demo</button>
      </header>

      <main style={{ padding: '30px', minHeight: '400px' }}>
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'componentes' && <ComponentesView />}
        {activeTab === 'estilado' && <EstiladoView />}
      </main>
    </div>
  );
}

export default App;