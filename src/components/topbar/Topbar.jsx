import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";
import avatar from "../../assets/images/avatar.jpg";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar_wrapper">
        <div className="topbar_left">
          <span className="logo">SK admin</span>
        </div>
        <div className="topbar_right">
          <div className="topbar_right_icon_container">
            <NotificationsNone />
            <span className="top_icon_badge">3</span>
          </div>
          <div className="topbar_right_icon_container">
            <Language />
            <span className="top_icon_badge">2</span>
          </div>
          <div className="topbar_right_icon_container">
            <Settings />
          </div>
          <img className="image_avatar" src={avatar} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
