"use client";

import React, { useState, useEffect } from "react";
import Router from "next/router";
import { axios } from "@/config";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { login } from "@/Redux/Slices/AuthSlice";
import { useRouter } from "next/navigation";
import Link from "next/link";
type Props = {};

const Login = (props: Props) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);
  console.log(auth);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e: any) => {
    const { value, name } = e.target;
    setFormData((prev: any) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    dispatch(login(formData));
  };

  useEffect(() => {
    if (auth.user){
        router.push("/")
    }

  },[auth.user]);

  return (
    <div className="flex justify-center flex-col">
      <div className="text-center text-5xl font-bold my-4 flex flex-col">
        JAMBO
        <p className="text-sm font-light ">
          Join the biggest online streaming site today
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className=" flex flex-col items-center justify-center space-y-4"
      >
        <div className="w-96 flex flex-col space-y-5">
          <div>
            <input
              onChange={handleChange}
              className="rounded p-2 bg-transparent border-b focus:outline-none w-full"
              type="text"
              name="email"
              placeholder="email"
            />
          </div>
          <div>
            <input
              onChange={handleChange}
              className="rounded p-2 bg-transparent border-b focus:outline-none w-full"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
          {auth.message && <p className="text-red-500">{auth.message}</p>}
          <p className="text-xs my-2 cursor-pointer hover:text-gray-400">
            Forgot your password?
          </p>
          <button
            className="bg-red-600 w-full py-2 hover:bg-red-700 font-semibold"
            type="submit"
          >
            Login
          </button>
        </div>
        <p>Don't have an account? <Link href='/register' className="hover:text-red-500 text-gray-400">Create one</Link></p>
      </form>
      
    </div>
  );
};

export default Login;
