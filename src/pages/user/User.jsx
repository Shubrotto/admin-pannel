import "./user.css";
import Img from "../../assets/images/avatar.jpg";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentitySharp,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className="user">
      <div className="user_title_container">
        <h1 className="user_title">Edit User</h1>
        <Link to="/newUser">
          <button className="user_add_button">Create</button>
        </Link>
      </div>
      <div className="user_container">
        <div className="user_show">
          <div className="user_show_top">
            <img src={Img} alt="" className="user_show_img" />
            <div className="user_show_top_title">
              <span className="user_show_username">Shubrotto Kumar</span>
              <span className="user_show_position">Software Engineer</span>
            </div>
          </div>
          <div className="user_show_bottom">
            <span className="user_show_title">Account Details</span>
            <div className="user_show_info">
              <PermIdentitySharp className="user_show_icon" />
              <span className="user_show_info_title">annabeck99</span>
            </div>
            <div className="user_show_info">
              <CalendarToday className="user_show_icon" />
              <span className="user_show_info_title">11.12.1998</span>
            </div>
            <span className="user_show_title">Contact Details</span>
            <div className="user_show_info">
              <PhoneAndroid className="user_show_icon" />
              <span className="user_show_info_title">+880 1311 479092</span>
            </div>
            <div className="user_show_info">
              <MailOutline className="user_show_icon" />
              <span className="user_show_info_title">annabeck99@gmail.com</span>
            </div>
            <div className="user_show_info">
              <LocationSearching className="user_show_icon" />
              <span className="user_show_info_title">Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>
        <div className="user_update">
          <span className="user_update_title">Edit</span>
          <form className="user_update_form">
            <div className="user_update_left">
              <div className="user_update_item">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="annabeck99"
                  className="user_update_input"
                />
              </div>
              <div className="user_update_item">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Shubrotto Kumar"
                  className="user_update_input"
                />
              </div>
              <div className="user_update_item">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="annabeck99@gmail.com"
                  className="user_update_input"
                />
              </div>
              <div className="user_update_item">
                <label>Phone</label>
                <input
                  type="email"
                  placeholder="+880 1311 479092"
                  className="user_update_input"
                />
              </div>
              <div className="user_update_item">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Dhaka, Bangladesh"
                  className="user_update_input"
                />
              </div>
            </div>
            <div className="user_update_right">
              <div className="user_update_upload">
                <img className="user_update_img" src={Img} alt="" />
                <label htmlFor="file">
                  <Publish className="user_update_icon" />
                </label>
                <input
                  type="file"
                  name=""
                  id="file"
                  style={{ display: "none" }}
                />
              </div>
              <button className="user_update_btn">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
