import React from "react";
// import MaterialTable from 'material-table'
import { fetchData } from "./homeTable";
import BasicTable from "./homeTable";
import "./home.css";
import axios from "axios";

class Home extends React.Component {
  async componentDidMount() {
    const data = await fetchData();

    console.log(data);
  }

  render() {
    return (
      <div className="container">
        <header></header>
        <BasicTable />
      </div>
    );
  }
}

export default Home;
