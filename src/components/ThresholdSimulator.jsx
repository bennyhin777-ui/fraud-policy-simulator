import PolicyControl from './PolicyControl.jsx';
import PolicyResults from './PolicyResults.jsx';

export default function ThresholdSimulator({ threshold, onThresholdChange, onSave }) {
  const approvalRate = Math.min(98.7, 95.4 + (threshold - 70) * 0.09).toFixed(1);
  const fraudPrevented = Math.max(9.8, 18.4 - (threshold - 70) * 0.16).toFixed(1);
  const reviewCases = Math.round(1284 - (threshold - 70) * 18);
  const reviewReduction = Math.max(0, Math.round((threshold - 70) * 1.4));

  return (
    <section style={{ paddingTop: 20 }}>
      <div className="section-heading">
        <div>
          <p className="kicker">Policy lab</p>
          <h2>Threshold simulator</h2>
        </div>
        <p className="section-note">
          Move the slider to explore the tradeoff between protection and
          friction. The recommended operating point balances both.
        </p>
      </div>

      <div className="policy-demo">
        <PolicyControl
          threshold={threshold}
          onThresholdChange={onThresholdChange}
          onSave={onSave}
        />
        <PolicyResults
          threshold={threshold}
          approvalRate={approvalRate}
          fraudPrevented={fraudPrevented}
          reviewCases={reviewCases}
          reviewReduction={reviewReduction}
        />
      </div>
    </section>
  );
}
