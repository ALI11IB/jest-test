import axios from "axios";

const Utils = {
  fetchData: async () => {
    const response = await axios.get("https://api.difx.com/api/v1/pairs");
    // const json = await response.json();
    return response.data;
  },
};
export default Utils;
