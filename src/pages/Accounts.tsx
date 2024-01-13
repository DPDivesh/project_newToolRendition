import CurrentServices from "./components/CurrentServices";
import Navbar from "./components/Navbar";
import ScrapeInfoForm from "./components/ScrapeInfoForm";
import prisma from "./api/client";
import { useSession } from "next-auth/react";
import axios from "axios";
import { useState } from "react";

const Accounts = () => {
  const { data: session } = useSession();
  const [userProviderInfo, setUserProviderInfo] = useState();

  let currentServices: any = axios
    .post("/api/routes/getUsersScrapeInfo", { email: session?.user?.email })
    .catch((error) => {
      console.log(error);
    });

  return (
    <>
      <Navbar
        handleButton={function (arg: string): void {
          throw new Error("Function not implemented.");
        }}
      />
      <div className="flex flex-col w-full h-screen ">
        <div className="bg-gray-500">
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <h1 className="">
            {" "}
            Enter information for services you would like to have added to your
            account.
          </h1>
        </div>
        <div className="m-auto">
          <div>
            <h1 className="flex ">Current Services {}</h1>

            <CurrentServices />
          </div>
          <ScrapeInfoForm />
        </div>
      </div>
    </>
  );
};

export default Accounts;
