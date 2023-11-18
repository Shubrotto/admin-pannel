import "./newUser.css";

const NewUser = () => {
  return (
    <div className="new_user">
      <h1 className="new_user_title">New User</h1>
      <form className="new_user_form">
        <div className="new_user_item">
          <label>Username</label>
          <input type="text" placeholder="John" />
        </div>
        <div className="new_user_item">
          <label>Full Name</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className="new_user_item">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
        <div className="new_user_item">
          <label>Password</label>
          <input type="password" placeholder="12345" />
        </div>
        <div className="new_user_item">
          <label>Phone</label>
          <input type="text" placeholder="+880 131 147 9092" />
        </div>
        <div className="new_user_item">
          <label>Address</label>
          <input type="text" placeholder="Dhaka, Bangladesh" />
        </div>
        <div className="new_user_item">
          <label>Gender</label>
          <div className="new_user_gender">
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              placeholder="Dhaka, Bangladesh"
            />
            <label for="male">Male</label>
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              placeholder="Dhaka, Bangladesh"
            />
            <label for="female">Female</label>
            <input
              type="radio"
              name="gender"
              id="others"
              value="others"
              placeholder="Dhaka, Bangladesh"
            />
            <label for="Others">Others</label>
          </div>
        </div>
        <div className="new_user_item">
          <label>Active</label>
          <select name="active" id="active" className="new_user_select">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="new_user_button">Create</button>
      </form>
    </div>
  );
};

export default NewUser;
