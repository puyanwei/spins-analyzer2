import { useEffect } from "react";
const Analysis = () => {
  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <h1>Analysis Page</h1>
    </div>
  );
};

export default Analysis;
