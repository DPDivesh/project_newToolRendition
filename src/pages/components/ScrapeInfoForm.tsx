
const ScrapeInfoForm = ()=>{


  const submitData=(e:any)=>{
    console.log(e);
    
  }



    return(

<div className="w-full max-w-xs">
  <form onClick={(e)=>{submitData(e)}} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="username">
        Username
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 mb-7 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-2xl font-bold mb-2 " htmlFor="password">
        Password
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-10 leading-tight focus:outline-none focus:shadow-outline"  id="password"  type="password" placeholder="Password"/>
      {/* { <p className="text-red-500 text-xs italic">Please choose a password.</p>} */}
    </div>
    
    
<div className="flex items-center mb-4">
    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-black dark:text-black">Other (work in progress)</label>
</div>
<div className="flex items-center mb-10">
    <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="default-radio-2" className="ml-2 text-sm font-medium text-black dark:text-black">ColumbusData</label>
</div>


    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
      <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
  <p className="text-center text-gray-500 text-xs">
    &copy;2023 ATM CORP. All rights reserved.
  </p>
</div>

    )
}

export default ScrapeInfoForm