import React, { useState, useEffect } from "react";
import axios from "axios";
import { AnimationOnScroll } from "react-animation-on-scroll";

import { Link } from "react-router-dom";

import Modal from "./Modal";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [token, setToken] = useState("");

  const loginHandler = async () => {
    try {
      const response = await axios.post(
        "https://restapi-mongo.onrender.com/api/user/login",
        {
          email: email,
          password: password,
        }
      );
      setToken(response.data.token);
      if (token) {
        console.log("Logged in");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //Pass this State to Modal
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <AnimationOnScroll animateIn="animate__bounceIn">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src="https://uas.gov.ge/infopage/img/logo.png"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            შესვლა
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  ელფოსტა
                </label>
                <div className="mt-1">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  პაროლი
                </label>
                <div className="mt-1">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    დამახსოვრება
                  </label>
                </div>

                <div className="text-sm">
                  <Link
                    to="/password-reset"
                    className="font-medium text-blue-600 hover:text-blue-400"
                  >
                    პაროლის აღდგენა
                  </Link>
                </div>
              </div>

              <div>
                <button
                  onClick={loginHandler}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  შესვლა
                </button>
              </div>
            </div>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              {open && <Modal open={open} setOpen={setOpen} />}
              <button
                onClick={() => setOpen(!open)}
                type="submit"
                className="w-25 flex justify-center py-2 mt-8 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                ინფორმაცია
              </button>
            </div>
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
}
