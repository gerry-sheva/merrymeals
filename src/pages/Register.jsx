import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    role: "User",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      userName: user.email,
      userFirstName: user.fname,
      userLastName: user.lname,
      userPassword: user.password,
      address: "123 Example St",
      distance: 10,
      email: user.email,
    };
    console.log(newUser);
    axios.post(`http://localhost:8080/reg/registerNew${user.role}`, newUser);
    return navigate("/dashboard");
  };

  return (
    <main className="bg-merryblue-600 h-screen">
      <div className="flex flex-wrap">
        <div className="mx-auto mt-6 rounded-md bg-slate-300 py-10 px-6 dark:bg-dark sm:p-[60px]">
          <h3 className="text-center text-2xl font-bold sm:text-3xl">
            Sign up to
          </h3>
          <h2 className="mb-24 text-center text-3xl font-bold">
            Meals on Wheels
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-8 flex gap-x-4">
              <div>
                <label
                  htmlFor="fname"
                  className="mb-3 block text-sm font-medium"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="fname"
                  placeholder="First Name"
                  onChange={handleChange}
                  value={user.fname}
                  className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none"
                />
              </div>
              <div>
                <label
                  htmlFor="lname"
                  className="mb-3 block text-sm font-medium"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="lname"
                  placeholder="Last Name"
                  onChange={handleChange}
                  value={user.lname}
                  className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none"
                />
              </div>
            </div>
            <div className="mb-8">
              <label
                htmlFor="email"
                className="mb-3 block text-sm font-medium"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={user.email}
                className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none"
              />
            </div>
            <div className="mb-8">
              <label
                htmlFor="password"
                className="mb-3 block text-sm font-medium"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                value={user.password}
                className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none"
              />
            </div>
            <div className="mb-8">
              <label
                htmlFor="role"
                className="mb-3 block text-sm font-medium"
              >
                Role:
              </label>
              <select
                name="role"
                id="role"
                onChange={handleChange}
                value={user.role}
                className=""
              >
                <option value="User">Member</option>
                <option value="Partner">Partner</option>
                <option value="rider">Rider</option>
                <option value="caregiver">Caregiver</option>
              </select>
            </div>
            <div className="mb-6">
              <button className="flex w-full items-center justify-center rounded-md bg-merrygreen-600 py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                Sign up
              </button>
            </div>
          </form>
          <p className="text-center text-base font-medium text-body-color">
            Already have an account?&nbsp;
            <Link
              to={"/login"}
              className="hover:underline hover:text-merrygreen-600"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Register;
