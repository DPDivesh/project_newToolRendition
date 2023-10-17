import { signIn } from "next-auth/react";

export const SplashLoginPage = () => {
  return (
    <>
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-7xl font-extrabold text-transparent sm:text-5xl">
              Atm Monitoring Services{" "}
              <span className="sm:block text-2xl">
                {" "}
                Save time and make more money.{" "}
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              Login and try us out!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => {
                  signIn("google");
                }}
                className="px-4 m-auto py-2 items-center border flex gap-2 border-white rounded-lg bg-white  text-black h-fit hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
              >
                <img
                  className="w-10 h-6"
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  loading="lazy"
                  alt="google logo"
                />
                <span>Login In</span>
              </button>

              {/* <a
                className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                href="/about"
              >
                Learn More
              </a> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
