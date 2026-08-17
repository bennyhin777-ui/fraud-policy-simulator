export default function PolicyControl({ threshold, onThresholdChange, onSave }) {
  return (
    <div className="policy-control">
      <div className="control-header">
        <div>
          <span>Policy threshold</span>
          <strong>Auto-review above risk score</strong>
        </div>
        <span className="threshold-value">{threshold}</span>
      </div>

      <input
        type="range"
        min="40"
        max="95"
        value={threshold}
        onChange={(event) => onThresholdChange(Number(event.target.value))}
      />

      <div className="range-labels">
        <span>More protection</span>
        <span>Less friction</span>
      </div>

      <div className="scenario-note">
        <span>Scenario</span>
        <p>
          Increase threshold to reduce manual reviews while keeping high-risk
          payments blocked.
        </p>
      </div>

      <button
        className="primary-button small"
        onClick={() => onSave(`Scenario saved at threshold ${threshold}.`)}
      >
        Save scenario <span>&rarr;</span>
      </button>
    </div>
  );
}
