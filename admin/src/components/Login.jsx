import { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(backendUrl + "/api/user/admin", {
        email,
        password,
      });
      if (response.data.success) {
        setToken(response.data.token);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center w-full bg-gradient-to-br from-[#FDEFF9] via-[#E7D3FF] to-[#C3F7F7]">
      <div className="bg-white shadow-lg rounded-lg px-8 py-6 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-[#2C3E50]">Admin Panel</h1>
        <form onSubmit={onSubmitHandler}>
          <div className="mb-3">
            <p className="text-sm font-medium text-[#34495E] mb-2">Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none bg-[#f9f9f9] focus:border-[#6C5CE7]"
              type="email"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="mb-3">
            <p className="text-sm font-medium text-[#34495E] mb-2">Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none bg-[#f9f9f9] focus:border-[#6C5CE7]"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            className="mt-2 w-full py-2 px-4 rounded-md text-white bg-gradient-to-r from-[#2C3E50] to-[#4CA1AF] hover:opacity-90 transition-all"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
