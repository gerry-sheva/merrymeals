import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      username: user.username,
      password: user.password,
    };
    axios
      .post("http://localhost:3001/auth/signin-user", payload)
      .then((response) => {
        const token = response.data.token;
        const username = response.data.username;
        const role = response.data.role;
        localStorage.setItem("token", token);
        localStorage.setItem("username", username);
        localStorage.setItem("role", role);
      });
    return navigate("/dashboard");
  };

  return (
    <main className="bg-merryblue-600 h-screen">
      <div className="flex flex-wrap">
        <div className="mx-auto mt-32 max-w-[500px] rounded-md bg-slate-300 py-10 px-6 sm:p-[60px]">
          <h3 className="mb-24 text-center text-2xl font-bold sm:text-3xl">
            Sign in to your account
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-8">
              <label
                htmlFor="username"
                className="mb-3 block text-sm font-medium"
              >
                Your Username
              </label>
              <input
                name="username"
                placeholder="Enter your username"
                value={user.username}
                onChange={handleChange}
                className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none"
              />
            </div>
            <div className="mb-8">
              <label
                htmlFor="password"
                className="mb-3 block text-sm font-medium"
              >
                Your Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your Password"
                value={user.password}
                onChange={handleChange}
                className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none"
              />
            </div>
            <div className="mb-8 flex flex-col justify-between sm:flex-row sm:items-center">
              <div>
                <a
                  href="#0"
                  className="text-sm font-medium text-primary hover:underline hover:text-merrygreen-600"
                >
                  Forgot Password?
                </a>
              </div>
            </div>
            <div className="mb-6">
              <button className="flex w-full items-center justify-center rounded-md bg-merrygreen-600 py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                Sign in
              </button>
            </div>
          </form>
          <p className="text-center text-base font-medium text-body-color">
            Don’t you have an account?&nbsp;
            <Link
              to={"/register"}
              className="text-primary hover:text-merrygreen-600 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Login;
