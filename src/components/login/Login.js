import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, logout } from "../../features/Users";
import userMap from "../../mock_data/userList";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(logout());
  }, []);
  const handleLogin = () => {
    console.log(username, password);
    if (userMap.has(username)) {
      if (userMap.get(username).password === password) {
        dispatch(
          login({
            id: userMap.get(username).id,
            name: userMap.get(username).name,
            username: username,
            isLoggedIn: true,
          })
        );

        navigate("/");
      } else {
        alert("Incorrect Password");
      }
    } else {
      alert(`User Doesn't Exist`);
    }
  };
  return (
    <div className="min-h-screen bg-white flex">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm">
          <div>
            <h2 className="mt-6 text-3xl leading-9 font-extrabold text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-sm leading-5 text-gray-600 max-w">
              Or
              <a className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                start your 14-day free trial
              </a>
            </p>
          </div>

          <div className="mt-8">
            <div className="mt-6">
              <div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="mt-1 rounded-md shadow-sm">
                    <input
                      id="email"
                      type="email"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Password
                  </label>
                  <div className="mt-1 rounded-md shadow-sm">
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    />
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember_me"
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                    />
                    <label
                      htmlFor="remember_me"
                      className="ml-2 block text-sm leading-5 text-gray-900"
                    >
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm leading-5">
                    <a className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                      Forgot your password?
                    </a>
                  </div>
                </div>

                <div className="mt-6">
                  <span className="block w-full rounded-md shadow-sm">
                    <button
                      type="submit"
                      onClick={handleLogin}
                      className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                    >
                      Sign in
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block relative w-0 flex-1">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default Login;
