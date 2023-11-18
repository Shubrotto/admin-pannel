import "./newProduct.css";

const NewProduct = () => {
  return (
    <div className="new_user">
      <h1 className="new_user_title">New Product</h1>
      <form className="add_product_form">
        <div className="add_product_item">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="add_product_item">
          <label>Name</label>
          <input type="text" placeholder="Apple Airpods" />
        </div>
        <div className="add_product_item">
          <label>Stock</label>
          <input type="text" placeholder="123" />
        </div>
        <div className="add_product_item">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="add_product_button">Create</button>
      </form>
    </div>
  );
};

export default NewProduct;
