import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        " https://checkinn.co/api/v1/int/requests"
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container">
      <h1>API Data</h1>
      <ul>
        {Array.isArray(data) &&
          data.map((item, index) => <li key={index}>{item.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
