import "./widgetSmall.css";
import Img from "../../assets/images/avatar.jpg";
import { VisibilitySharp } from "@mui/icons-material";

const WidgetSmall = () => {
  return (
    <div className="widget_sm">
      <span className="widget_sm_title">New Join Members</span>
      <ul className="widget_sm_list">
        <li className="widget_sm_list_item">
          <img className="widget_sm_img" src={Img} alt="" />
          <div className="widget_sm_user">
            <span className="widget_sm_username">Nayon Kumar</span>
            <span className="widget_sm_user_title">Software Enggineer</span>
          </div>
          <button className="widget_sm_button">
            <VisibilitySharp className="widget_sm_Icon" /> Display
          </button>
        </li>
        <li className="widget_sm_list_item">
          <img className="widget_sm_img" src={Img} alt="" />
          <div className="widget_sm_user">
            <span className="widget_sm_username">Nayon Kumar</span>
            <span className="widget_sm_user_title">Software Enggineer</span>
          </div>
          <button className="widget_sm_button">
            <VisibilitySharp className="widget_sm_Icon" /> Display
          </button>
        </li>
        <li className="widget_sm_list_item">
          <img className="widget_sm_img" src={Img} alt="" />
          <div className="widget_sm_user">
            <span className="widget_sm_username">Nayon Kumar</span>
            <span className="widget_sm_user_title">Software Enggineer</span>
          </div>
          <button className="widget_sm_button">
            <VisibilitySharp className="widget_sm_Icon" /> Display
          </button>
        </li>
        <li className="widget_sm_list_item">
          <img className="widget_sm_img" src={Img} alt="" />
          <div className="widget_sm_user">
            <span className="widget_sm_username">Nayon Kumar</span>
            <span className="widget_sm_user_title">Software Enggineer</span>
          </div>
          <button className="widget_sm_button">
            <VisibilitySharp className="widget_sm_Icon" /> Display
          </button>
        </li>
        <li className="widget_sm_list_item">
          <img className="widget_sm_img" src={Img} alt="" />
          <div className="widget_sm_user">
            <span className="widget_sm_username">Nayon Kumar</span>
            <span className="widget_sm_user_title">Software Enggineer</span>
          </div>
          <button className="widget_sm_button">
            <VisibilitySharp className="widget_sm_Icon" /> Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSmall;
