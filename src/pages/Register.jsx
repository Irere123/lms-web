import { useSearchParams } from "react-router-dom";
import Step1 from "../components/register/Step1";
import Step2 from "../components/register/Step2";
import Step3 from "../components/register/Step3";

export default function RegisterPage() {
  const [params, setParams] = useSearchParams(1);

  const page = parseInt(params.get("page")) || 1;

  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
      <div className="flex justify-self-center self-center sm:hidden">
        <h1 className="text-slate-900 mt-6 font-semibold">LMS</h1>
      </div>
      <div className="flex m-auto flex-col p-6 gap-5 shadow-lg bg-slate-800 sm:rounded-8 z-10 sm:w-400 w-full text-slate-50">
        {page == 1 ? <Step1 /> : page == 2 ? <Step2 /> : <Step3 />}
        {page == 3 ? (
          <button>Finish</button>
        ) : (
          <button
            onClick={() => {
              setParams({ page: page + 1 });
            }}
          >
            Next
          </button>
        )}

        {page !== 1 ? (
          <button
            onClick={() => {
              setParams({ page: page - 1 });
            }}
          >
            Back
          </button>
        ) : null}
      </div>
    </div>
  );
}
