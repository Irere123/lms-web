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
        <h1>Hello</h1>
      </div>
      <div className="flex m-auto flex-col p-6 gap-5 bg-slate-800 sm:rounded-8 z-10 sm:w-400 w-full">
        <h2 className="text-white">Welcome back</h2>
        <div className="flex flex-col gap-3">
          <p className="text-slate-50">
            By preceeding you agree to our terms of use and privacy policies
          </p>
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Button color="primary">Login</Button>
        </div>
      </div>
    </div>
  );
}
