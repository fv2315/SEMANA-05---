import styles from '../styles/MetricCard.module.css';

/**
 * Componente que muestra una tarjeta de métrica.
 * @param {Object} props
 * @param {string} props.title - El título de la métrica.
 * @param {string|number} props.value - El valor principal a mostrar.
 * @param {string} props.icon - El emoji/icono de la métrica.
 * @param {string} props.accentColor - Color hexadecimal para el borde superior.
 * @param {React.ReactNode} props.children - Contenido anidado (composición).
 */
export function MetricCard({ title, value, icon, accentColor, children }) {
  return (
    <article className={styles.card} style={{ borderTop: `4px solid ${accentColor}` }}>
      <div className={styles.cardHeader}>
        <span className={styles.icon}>{icon}</span>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <h2 className={styles.value}>{value}</h2>
      <div>{children}</div>
    </article>
  );
}