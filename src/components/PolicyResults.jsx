export default function PolicyResults({ threshold, approvalRate, fraudPrevented, reviewCases, reviewReduction }) {
  return (
    <div className="policy-results">
      <p className="kicker">Projected impact</p>

      <div className="impact-grid">
        <div>
          <strong>{approvalRate}%</strong>
          <span>legitimate approvals</span>
          <b className="positive">+{(Number(approvalRate) - 95.4).toFixed(1)}%</b>
        </div>
        <div>
          <strong>{fraudPrevented}%</strong>
          <span>fraud loss prevented</span>
          <b className="neutral">vs. current policy</b>
        </div>
        <div>
          <strong>{reviewCases}</strong>
          <span>review cases per day</span>
          <b className="positive">-{reviewReduction}%</b>
        </div>
      </div>

      <div className="decision-banner">
        <span className="check">&#10003;</span>
        <div>
          <strong>Recommended operating point</strong>
          <p>
            At a threshold of 70, the portfolio protects revenue while keeping
            customer friction within target.
          </p>
        </div>
      </div>
    </div>
  );
}
