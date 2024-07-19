/* eslint-disable @next/next/no-img-element */
"use client";
import { redirect, useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

export default function Home() {
  // * HOOKS
  const session = useSession();
  const router = useRouter();

  if (session.data?.user) {
    redirect("/dashboard");
  }

  const handleLogin = async (
    e: { preventDefault: () => void },
    email: any,
    password: any
  ) => {
    e.preventDefault();

    console.log(email, password);

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    console.log(result);
    if (!result?.error) {
      router.push("/dashboard");
    } else {
      console.log(result.error);
      console.log("signed in failed");
    }
  };

  return (
    <>
      <main className="flex items-center justify-center h-screen w-screen">
        {/* CARD */}
        <div
          className={`flex flex-col items-end justify-start p-7 w-[500px] overflow-hidden border border-black rounded-md`}
        >
          <div className="flex flex-row items-start justify-center w-full py-0 pr-1">
            <img
              className="h-14 w-38 object-cover"
              loading="lazy"
              alt=""
              src="/tumirayi-3@2x.png"
            />
          </div>
          <div className="flex flex-row justify-end w-full p-0 pl-3 pr-0">
            <div className="flex flex-col items-start justify-start gap-2 w-full">
              <div className="flex flex-col items-start justify-start gap-0 w-40">
                <div className="flex flex-row items-start justify-start p-0 pl-3">
                  <b className="relative inline-block min-w-[65px] uppercase leading-5">
                    Register
                  </b>
                </div>
                <div className="relative text-sm font-semibold leading-12 text-gray-100 mt-[-10.5px]">
                  Create a new account
                </div>
              </div>
              <div className="flex flex-row justify-start w-full p-0 pl-3 pr-0 text-gray-200">
                <div className="flex flex-col items-start justify-start gap-20 w-full pt-4">
                  <div className="relative overflow-hidden h-[39px] hidden text-xs text-blue-600">
                    <img
                      className="absolute top-[37px] left-0 w-[375px] h-[2px] object-cover"
                      alt=""
                      src="/object@2x.png"
                    />
                    <div className="absolute top-[-12.5px] left-0 leading-9 font-light w-20">
                      Full Name
                    </div>
                  </div>
                  <div className="relative overflow-hidden h-5 w-full">
                    <img
                      className="absolute top-[21px] left-0 w-[375px] h-[1px] object-cover"
                      loading="lazy"
                      alt=""
                      src="/object-1@2x.png"
                    />
                    <div className="absolute top-[-11px] left-0 leading-9 w-24 z-10">
                      Full Name
                    </div>
                  </div>
                  <div className="relative overflow-hidden h-5 w-full">
                    <img
                      className="absolute top-[21px] left-0 w-[375px] h-[1px] object-cover"
                      loading="lazy"
                      alt=""
                      src="/object-1@2x.png"
                    />
                    <div className="absolute top-[-11px] left-0 leading-9 w-32 z-10">
                      Email Address
                    </div>
                  </div>
                  <div className="relative overflow-hidden h-5 w-full">
                    <img
                      className="absolute top-[21px] left-0 w-[375px] h-[1px] object-cover"
                      loading="lazy"
                      alt=""
                      src="/object-1@2x.png"
                    />
                    <div className="absolute top-[-11px] left-0 leading-9 min-w-[66px] z-10">
                      Password
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start w-[198px] h-4 overflow-hidden p-0 pl-4 pr-4 relative">
                <div className="relative leading-9 w-5 flex-shrink-0 z-10 mt-[-8.5px]">
                  
                </div>
                <input
                  className="absolute top-0 left-0 h-full w-4 m-0"
                  type="checkbox"
                />
                <div className="relative font-semibold text-sm leading-9 w-[205px] mt-[-9.5px] flex-shrink-0 text-gray-200 flex items-center">
                  <span className="w-full">
                    <span>{`I accept `}</span>
                    <span className="text-blue-600">{`Terms & Conditions`}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={(e) => handleLogin(e, "test1@donotreply.com", "pass")}
            className="cursor-pointer border-0 p-2 pl-12 pr-12 bg-blue-600 w-[140px] shadow-md flex items-start justify-start hover:bg-blue-800"
          >
            <div className="hidden relative h-11 w-36 shadow-md bg-blue-600" />
            <b className="relative text-sm leading-5 text-white uppercase flex-grow text-center z-10">
              Register
            </b>
          </button>
          <div className="flex flex-row items-start justify-end w-full p-0 pl-[34rem] pr-[34rem] text-center text-sm font-semibold text-gray-100">
            <span>
              <span>{`Already have an Account?  `}</span>
              <span className="text-blue-600">{`Login Here`}</span>
            </span>
          </div>
        </div>
      </main>
    </>
  );
}
