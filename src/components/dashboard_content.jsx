import "./dashboard_content.css";

function DashboardComponent() {
  return (
    <div className="dc">
      <div className="payable">
        <div className="amount">50000 Rs</div>
        <div className="payableamount">Payable</div>
      </div>
      <div className="receivable">
        <div className="amount">100000 Rs</div>
        <div className="receivableamount">Receivable</div>
      </div>
    </div>
  );
}

export default DashboardComponent;
