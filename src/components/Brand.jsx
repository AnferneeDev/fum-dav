export default function Brand({ compact = false, inverse = false }) {
  return (
    <a className={`brand ${compact ? 'brand--compact' : ''} ${inverse ? 'brand--inverse' : ''}`} href="#inicio" aria-label="Fumigaciones David - inicio">
      <img src="/logo-mark.png" alt="" className="brand__mark" />
      <span className="brand__ms"><b>M</b><b>S</b></span>
      <span className="brand__name">FUMIGACIONES DAVID</span>
    </a>
  );
}
