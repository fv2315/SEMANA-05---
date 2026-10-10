import { MetricCard } from './MetricCard';

export function Dashboard() {
  const metrics = [
    { id: 1, title: "USUARIOS ACTIVOS", value: "3,102", icon: "👤", color: "#38bdf8", trend: "↑ +14.5% vs mes anterior", isUp: true },
    { id: 2, title: "INGRESOS", value: "$52,890", icon: "💰", color: "#10b981", trend: "↑ +10.2% vs mes anterior", isUp: true },
    { id: 3, title: "PEDIDOS", value: "1,204", icon: "📦", color: "#f59e0b", trend: "↓ -2.1% vs mes anterior", isUp: false },
    { id: 4, title: "CONVERSIÓN", value: "4.15%", icon: "📈", color: "#c084fc", trend: "↑ +1.1% vs mes anterior", isUp: true }
  ];

  return (
    <section>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
        <div>
          <h1 style={{ margin: '0 0 5px 0', fontSize: '1.8rem', color: '#f8fafc' }}>Resumen del Mes</h1>
          <p style={{ margin: 0, color: '#94a3b8' }}>Datos actualizados en tiempo real (Dark Mode)</p>
        </div>
        <button style={{ 
          backgroundColor: '#38bdf8', color: '#0f172a', border: 'none', 
          padding: '10px 20px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' 
        }}>
          ↻ Actualizar
        </button>
      </div>
      
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {metrics.map((metric) => (
          <MetricCard 
            key={metric.id} 
            title={metric.title} 
            value={metric.value}
            icon={metric.icon}
            accentColor={metric.color}
          >
            <span style={{ 
              fontSize: '0.85rem', 
              fontWeight: '600',
              color: metric.isUp ? '#10b981' : '#ef4444' 
            }}>
              {metric.trend}
            </span>
          </MetricCard>
        ))}
      </div>
    </section>
  );
}