export default function TopBar() {
  return (
    <header className="topbar">
      <a className="brand" href="#top">
        <span className="brand-mark">FP</span>
        <span>
          <strong>Fraud Policy Simulator</strong>
          <small>Test policy changes before production</small>
        </span>
      </a>
    </header>
  );
}
