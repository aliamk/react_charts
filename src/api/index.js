import axios from "axios";

// FETCHED DATA 

const url = "https://randomuser.me/api/?results=100";

export const fetchData = async () => {
  try {
    const response = await axios.get(url);
    const rowData = await response.data.results;
    return rowData;
  } catch (error) {
    console.log(error);
  }
};
