import axios from "axios";
import { useState } from "react";

const InfoForm = (props: any) => {
  const [onChangeRegTest, setOnChangeRegTest] = useState(true);
  const formInputRegex = /^(0|[1-9][0-9_]*)$/;
  const adjustReload = (e: any) => {
    setOnChangeRegTest(formInputRegex.test(e.target.value));
  };

  return (
    <label htmlFor="min-reload ">
      Minimum Reload Amount:
      {onChangeRegTest ? (
        true
      ) : (
        <h1 className="text-red-400">Please Enter Only Numbers</h1>
      )}
      <input
        className="shadow appearance-none border rounded w-fit py-2 px-3 dark:bg-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-black"
        name="min-Reload"
        pattern="^(0|[1-9][0-9]*)$"
        onChange={(e) => {
          adjustReload(e);
          props.reload;
        }}
      />
      <div className="my-5 w-full ">
        <input
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          value="Submit"
        />
        {/* <input onClick={props.parentFormFunction()} className="bg-red-500 ml-4 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit"  value="Cancel"/> */}
      </div>
    </label>
  );
};

export default InfoForm;
