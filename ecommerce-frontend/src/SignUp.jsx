import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
export default function SignUp() {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [accept, setAccept] = useState(false);
  const [flag, setFlag] = useState(true);

  function SubmitEvent(e) {
    e.preventDefault();
    setAccept(true);
    if (name === "" || password < 8 || password == confirmPassword) {
      setFlag(false);
    }
    if (flag) {
      const data = {
        name: name,
        email: email,
        password: password,
        password_confirmation: confirmPassword,
      };
      let res = axios
        .post("http://127.0.0.1:8000/api/register", data)
        .then((response) => {
          console.log(response.data.token);
        })
        .catch((error) => {
          console.error(error, data);
        });
    }
  }
  return (
    <form
      onSubmit={SubmitEvent}
      className="bg-grey-lighter min-h-screen flex flex-col"
    >
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="fullname"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          {name == "" && accept && (
            <p className="text-red-400">username requierd</p>
          )}
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {password.length < 8 && accept && (
            <p className="text-red-400 mt--10 pt-0">
              {" "}
              the password must be gratter than or equel 8 charcter{" "}
            </p>
          )}
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="confirm_password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {confirmPassword.length != password.length && accept && (
            <p className="text-red-400">the confirm password doesn't match</p>
          )}
          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-black text-white hover:bg-green-dark focus:outline-none my-1"
          >
            Create Account
          </button>

          <div className="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the
            <a
              className="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Terms of Service
            </a>{" "}
            and
            <a
              className="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="text-grey-dark mt-6">
          Already have an account?
          <a
            className="no-underline border-b border-blue text-blue"
            href="../login/"
          >
            Log in
          </a>
          .
        </div>
      </div>
    </form>
  );
}
