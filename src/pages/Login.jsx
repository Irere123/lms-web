import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export default function LoginPage() {
  return (
    <div
      className="grid w-full h-full"
      style={{
        gridTemplateRows: "1fr auto 1fr",
      }}
    >
      <div className="hidden sm:flex" />
      <div className="flex justify-self-center self-center sm:hidden">
        <h1 className="text-slate-900">LMS</h1>
      </div>
      <div className="flex m-auto flex-col p-6 gap-5 shadow-lg bg-slate-800 sm:rounded-8 z-10 sm:w-400 w-full">
        <h2 className="text-white">Welcome back</h2>
        <div className="flex flex-col gap-3">
          <p className="text-slate-50">
            By preceeding you agree to our terms of use and privacy policy
          </p>
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Button color="primary">Login</Button>
          <div className="flex justify-between">
            <Link
              to={"/forgot-password"}
              className="text-slate-100 no-underline"
            >
              Forgot password
            </Link>
            <p className="text-slate-300">Or</p>
            <Link
              to={"/register?page=1"}
              className="text-slate-100 no-underline"
            >
              Create account
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-row absolute bottom-0 w-full justify-between px-5 py-5 mt-auto items-center sm:px-7">
        <div className="hidden sm:flex">
          <h2>LMS</h2>
        </div>
        <div className="flex flex-row gap-6 text-slate-900">
          <a
            href="/privacy-policy.html"
            className="text-slate-900 hover:text-slate-800"
          >
            Privacy policy
          </a>
          <a href="#" className="ml-2 text-slate-900 hover:text-slate-800">
            Report a bug
          </a>
        </div>
      </div>
    </div>
  );
}
