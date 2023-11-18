import { DataGrid } from "@mui/x-data-grid";
import "./productList.css";
import { DeleteSharp } from "@mui/icons-material";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

const ProductList = () => {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "product",
      headerName: "product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="product_list_user">
            <img className="product_list_img" src={params.row.Img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 200 },
    {
      field: "status",
      headerName: "status",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="product_list_edit">Edit</button>
            </Link>
            <DeleteSharp
              className="product_list_delete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="product_list">
      <DataGrid
        rows={data}
        disableRowSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
};

export default ProductList;
