import React from "react";
import { set, useForm } from "react-hook-form";
const FormFields = {
  fullName: "",
  email: "",
  password: "",
};
const Login = () => {
  const [LoginOrRegister, setLoginOrRegister] = React.useState(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      console.log(data);
    } catch (error) {
      setError("root", {
        message: "This email is already taken",
      });
    }
  };

  return (
    <div className="w-full h-2/3 flex justify-center items-center">
      <div className="space-y-5 border-[1px] lg:w-2/5 w-4/5 border-[#D4D4D4] rounded-xl flex flex-col pt-10 pb-16 px-10 bg-white shadow-md hover:shadow-lg transition duration-300 ease-in-out">
        <h1 className="font-bold text-[26px] text-[#4B5563]">
          {LoginOrRegister ? "Login" : "Create Account"}
        </h1>
        <p className="font-normal text-[19px] text-[#4B5563]">
          Please {LoginOrRegister ? "login" : "sign up"} to book appointment
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-3 flex flex-col"
        >
          {/*  */}
          {!LoginOrRegister && (
            <>
              <label
                htmlFor="fullname"
                className="font-normal text-[17px] text-[#4B5563]"
              >
                Full Name
              </label>
              <input
                id="fullname"
                className="w-[100%] border-[#DADADA] border-[1px] py-2 pl-4 rounded-lg"
                {...register("fullName", {
                  required: "full Name is required",
                  minLength: 3,
                })}
                type="text"
                placeholder="Enter Full Name"
              />
              {errors.fullName && (
                <span className="font-bold text-red-600">
                  {errors.fullName.message}
                </span>
              )}
            </>
          )}
          {/*  */}
          <label
            htmlFor="email"
            className="font-normal text-[17px] text-[#4B5563]"
          >
            Email
          </label>
          <input
            id="email"
            className="w-[100%] border-[#DADADA] border-[1px] py-2 pl-4 rounded-lg"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
            type="email"
            placeholder="Enter Email"
          />
          {errors.email && (
            <span className="font-bold text-red-600">
              {errors.email.message}
            </span>
          )}
          <label
            htmlFor="password"
            className="font-normal text-[17px] text-[#4B5563]"
          >
            password
          </label>
          <input
            id="password"
            className="w-[100%] border-[#DADADA] border-[1px] py-2 pl-4 rounded-lg"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must have at least 8 characters",
              },
            })}
            type="password"
            placeholder="Enter Password"
          />
          {errors.password && (
            <span className="font-bold text-red-600">
              {errors.password.message}
            </span>
          )}
          <button
            disabled={isSubmitting}
            type="submit"
            className="!mt-6 bg-[#5F6FFF] w-[100%] py-2 rounded-lg"
          >
            {isSubmitting ? "Loading" : "Log In"}
          </button>
          {errors.root && (
            <span className="font-bold text-red-600">
              {errors.root.message}
            </span>
          )}
        </form>
        <p className="font-normal text-[17px] text-[#4B5563]">
          {LoginOrRegister ? "Don't have an account?" : "Already have an account?"}
          <button
            className="underline text-[#5F6FFF]"
            onClick={() => {
              setLoginOrRegister(!LoginOrRegister);
            }}
          >
            Click here
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
