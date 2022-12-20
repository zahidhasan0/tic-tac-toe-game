import React from "react";
import "./Register.css";
import { FaBeer, FaAngleLeft } from "react-icons/fa";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="px-6 pt-5 register">
      <FaAngleLeft />
      <h4 className="text-sm font-bold mt-9 mb-2 ">Create account</h4>
      <h2 className="text-3xl font-bold">
        Let's get to know <br /> you better!
      </h2>

      <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <div className="mb-4">
          <label className="font-bold mb-3" htmlFor="name">
            Your name
          </label>
          <input
            type="text"
            className="input bg-[#F4F4F4] mt-3 p-5 w-full text-[#333333] "
            id="name"
            placeholder="Type your name here"
            {...register("name", { required: true })}
          />
        </div>
        <div className="mb-4">
          <label className="font-bold mb-3" htmlFor="username">
            Username
          </label>
          <input
            className="input bg-[#F4F4F4] mt-3 p-5 w-full text-[#333333] "
            id="username"
            type="text"
            placeholder="Type your username here"
            {...register("username", { required: true })}
          />
        </div>
        <div className="mb-4">
          <label className="font-bold mb-3" htmlFor="email">
            Email
          </label>
          <input
            className="input bg-[#F4F4F4] mt-3 p-5 w-full text-[#333333] "
            id="email"
            type="email"
            placeholder="Type your name here"
            {...register("email", { required: true })}
          />
        </div>
        <div className="mb-4">
          <label className="font-bold mb-3" htmlFor="password">
            Password
          </label>
          <input
            className="input bg-[#F4F4F4] mt-3 p-5 w-full text-[#333333] "
            type="password"
            id="password"
            placeholder="Type your password here"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="text-red-500">This field is require</span>
          )}
        </div>

        <input
          className="btn text-sm rounded px-4 hidden mb-2 bg-[#6FCF97] text-white w-full py-5 "
          type="text"
          defaultValue="Congratulations! Account created."
        />
        <input
          className="btn text-sm rounded font-bold mb-2 bg-[#F2C94C] text-white w-full py-5 "
          type="submit"
        />
      </form>
    </div>
  );
};

export default Register;
