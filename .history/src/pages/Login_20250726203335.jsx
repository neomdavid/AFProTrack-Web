import { Link } from "react-router-dom";
import logo from "../assets/AFProTrack_logo.png";
const Login = () => {
  return (
    <main className="bg-base h-screen w-screen flex justify-around items-center bg-primary">
      <section className="flex flex-col px-10 gap-2 py-8 rounded-xl bg-base-400 text-primary min-w-130 max-w-100">
        <div className="self-center shadow-sm mb-1 bg-primary flex items-center justify-around p-1 rounded-full">
          <img src={logo} className="h-22 w-22" />
        </div>
        <p className="mb-4 self-center text-center text-gray italic text-sm w-[80%]">
          Training Management System for Armed Forces of the Philippines
        </p>
        <p className="mb-6 text-2xl font-semibold self-center">Welcome</p>
        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <label htmlFor="serviceId" className="font-semibold">
              Service ID
            </label>
            <input
              type="text"
              id="serviceId"
              name="serviceId"
              required
              className="bg-white border-2 border-primary/60 rounded-xl p-2 focus:outline-primary focus:outline-2"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="bg-white border-2 border-primary/60 rounded-xl p-2 focus:outline-primary focus:outline-2"
            />
          </div>
          <Link className="self-end italic mt-[-7px] mb-7 hover:cursor-pointer hover:underline transition duration-100">
            Forgot Password?
          </Link>
          <button
            type="submit"
            className="bg-primary text-md py-2.5 rounded-2xl text-white font-semibold"
          >
            Login
          </button>
        </form>
        <p className="text-xs break-words w-[80%] text-gray self-center text-center">
          © 2025 AFProTrack. All rights reserved. This system contains
          confidential and proprietary information. Unauthorized access is
          prohibited and may be subject to criminal and civil penalties.
        </p>
      </section>
    </main>
  );
};

export default Login;
