//import { Link } from "@mui/icons-material";
import "./App.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CallToActionIcon from "@mui/icons-material/CallToAction";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import InfoIcon from "@mui/icons-material/Info";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import PendingIcon from "@mui/icons-material/Pending";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import DynamicFormIcon from "@mui/icons-material/DynamicForm";

const App = () => {
  return (
    <div className="container-main">
      <div className="aside">
        <div className="sidebar">
          <a className="icons" href="dashboard">
            <DashboardIcon />
          </a>
          <a className="icons" href="action">
            <CallToActionIcon />
          </a>
          <a className="icons" href="search">
            <ManageSearchIcon />
          </a>
          <a className="icons" href="document">
            <DocumentScannerIcon />
          </a>
          <a className="icons" href="info">
            <InfoIcon />
          </a>
        </div>
        <div className="main">
          <h1 className="title"> Dashboard </h1>
          <div className="top-btn">
            <button>YTD</button>
            <button>MTD</button>
            <button>today</button>
            <input type="date" />
          </div>
          <div className="first">
            <div className="top-end">
              <AccessTimeFilledIcon className="icon" />
              <h5>TAT (Days)</h5>
              <h2>1.75</h2>
            </div>
            <div className="top-end">
              <DynamicFormIcon className="icon" />
              <h5>Accuracy</h5>
              <h2>87%</h2>
            </div>
            <div className="top-end">
              <PendingActionsIcon className="icon" />
              <h5> Allocation Pending</h5>
              <h2>12</h2>
            </div>

            <div className="top-end">
              <PendingIcon className="icon" />
              <h5>Pending</h5>
              <h2>28</h2>
            </div>
          </div>
          <div className="second">
            <div className="progress">
              <div className="empty-box">
                <h1> Empty Box </h1>
              </div>
              <div className="circle">
                <h5>In-progress</h5>
                <svg>
                  <circle cx="70" cy="75" r="60"></circle>
                </svg>
                <h2>92%</h2>
              </div>

              <div className="circle">
                <h5>Query Status</h5>
                <svg>
                  <circle cx="70" cy="75" r="60"></circle>
                </svg>
                <h2>45%</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
