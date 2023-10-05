import { Link, Outlet } from "react-router-dom";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-main">
      <div className="dashboard-container">
        <div className="dashboard-title">JK Store</div>
        <ul className="dashboard-ul">
          <li className="dashboard-li">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="dashboard-li">
            <Link to="/customers">Customers</Link>
          </li>
          <li className="dashboard-li">
            <Link to="/merchandisers">Merchandisers</Link>
          </li>
          <li className="dashboard-li">
            <Link to="/transactions">Transactions</Link>
          </li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
