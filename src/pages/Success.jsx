import { useEffect } from "react";

function Success() {

  useEffect(() => {
    fetch("http://localhost:3001/api/orders", {
      method: "POST"
    });
  }, []);

  return (
    <div>
      <h2>Payment Successful </h2>
    </div>
  );
}

export default Success;