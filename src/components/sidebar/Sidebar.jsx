import { Link } from "react-router-dom";
import "./sidebar.css";
import {
  LineStyleSharp,
  TimelineSharp,
  TrendingUpSharp,
  PermIdentitySharp,
  StorefrontSharp,
  AttachMoneySharp,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@mui/icons-material";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_wrappper">
        <div className="sidebar_menu">
          <h3 className="sidebar_title">Dashboard</h3>
          <ul className="sidebar_list">
            <Link to="/" className="link">
              <li className="sidebar_list_item active">
                <LineStyleSharp className="sidebar_icon" />
                Home
              </li>
            </Link>
            <li className="sidebar_list_item">
              <TimelineSharp className="sidebar_icon" />
              Analytics
            </li>
            <li className="sidebar_list_item">
              <TrendingUpSharp className="sidebar_icon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebar_menu">
          <h3 className="sidebar_title">Quick Menu</h3>
          <ul className="sidebar_list">
            <Link to="/users" className="link">
              <li className="sidebar_list_item">
                <PermIdentitySharp className="sidebar_icon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebar_list_item">
                <StorefrontSharp className="sidebar_icon" />
                Products
              </li>
            </Link>
            <li className="sidebar_list_item">
              <AttachMoneySharp className="sidebar_icon" />
              Transactions
            </li>
            <li className="sidebar_list_item">
              <Report className="sidebar_icon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebar_menu">
          <h3 className="sidebar_title">Notifications</h3>
          <ul className="sidebar_list">
            <li className="sidebar_list_item">
              <MailOutline className="sidebar_icon" />
              Mail
            </li>
            <li className="sidebar_list_item">
              <DynamicFeed className="sidebar_icon" />
              Feedback
            </li>
            <li className="sidebar_list_item">
              <ChatBubbleOutline className="sidebar_icon" />
              Message
            </li>
          </ul>
        </div>
        <div className="sidebar_menu">
          <h3 className="sidebar_title">Staff</h3>
          <ul className="sidebar_list">
            <li className="sidebar_list_item">
              <WorkOutline className="sidebar_icon" />
              Manage
            </li>
            <li className="sidebar_list_item">
              <TimelineSharp className="sidebar_icon" />
              Analytics
            </li>
            <li className="sidebar_list_item">
              <Report className="sidebar_icon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
