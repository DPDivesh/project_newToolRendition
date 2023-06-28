import CurrentServices from "./components/CurrentServices"
import Navbar from "./components/Navbar"
import ScrapeInfoForm from "./components/ScrapeInfoForm"

 const Accounts =()=>{
    return(
        <>
        <Navbar/>
        <div className="flex flex-col w-full h-screen ">
            <div className="bg-gray-500">
        <link rel="icon" href="/favicon.ico" sizes="any" />
            <h1 className=""> Enter information for services you would like to have added to your account.</h1>
            </div>
            <div className="m-auto">    
                <div>
                <h1 className="flex ">Current Services { true? <h1 className="text-gray-400">(click to enable)</h1> : <h1>sdsd</h1>} :</h1>

                   <CurrentServices/>
                </div>
            <ScrapeInfoForm />

            </div>
        </div>
        </>

    )
}

export default Accounts