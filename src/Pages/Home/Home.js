import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Login = () => {
  return (
    <div className="w-full h-100vh">
      <h4 className="h4 flex items-center justify-center">async</h4>
      <div className="mb-24">
        <h2 className="h2 flex justify-center items-center">
          tic tac <br />
        </h2>
        <h2 className="h2 flex justify-center items-center">toe</h2>
      </div>
      <div>
        <Link>
          <button className="btn text-sm rounded font-bold mb-2 bg-[#F2C94C] text-white w-full mx-4 py-5 ">
            Login
          </button>
        </Link>

        <Link to="/register">
          <button className="btn text-sm rounded my-4 font-bold bg-[#2F80ED] text-white w-full mx-4 py-5 ">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
