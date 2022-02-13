import React from "react";
import { useGlobalContext } from "./context";
import { ThreeCircles } from "react-loader-spinner";

// components
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
// items

function App() {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <div className="loading">
        <ThreeCircles
          color="#2680c0"
          height={110}
          width={110}
          ariaLabel="three-circles-rotating"
          wrapperClass="spinner"
        />
      </div>
    );
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
