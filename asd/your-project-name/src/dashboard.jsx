import React, { useEffect, useState } from "react";
import { axiosFetch } from "./Apis/api";
import Card from "./Components/Card/card";
import style from "./dashboard.module.css";
import { TablePagination } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const [data, setData] = useState();

  useEffect(() => {
    getProducts();
  }, []);

  const navigate = useNavigate();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); 
  };
  const getProducts = async () => {
    try {
      await axiosFetch.get("/products").then((res) => {
        setData(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={style.module}>
      {data?.products?.slice((page - 1 ) * rowsPerPage).map((ele) => {
        return (
          <a className={style.CardInsideContainer} href={`/info?${ele.id}`} onClick={() => {
            navigate({pathname:`/info?${ele.id}`});
          }}>
            <Card title={ele.title} image={ele.thumbnail} price={ele.price} />
          </a>
        );
      })}
      <TablePagination
        component="div"
        sx={{
          position: "fixed",
          bottom: 0,
          zIndex: 11,
          width: "100%",
          backgroundColor: "white",
          marginTop: "30px",
        }}
        count={data?.products?.length  }
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};
export default Dashboard;
