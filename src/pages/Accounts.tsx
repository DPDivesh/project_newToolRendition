import Navbar from "./components/Navbar"
import ScrapeInfoForm from "./components/ScrapeInfoForm"

 const Accounts =()=>{
    return(
        <>
        <Navbar/>
        <div className="flex w-full h-screen ">
            <div className="m-auto">
                <div>
                <h1>Current Services:</h1>

                    <div className="border shadow-xl rounded bg-white text-black mb-10 " >
                        <div className="my-2  mx-7">
                        <ul className="text-center">Columbus Data Processing</ul>
                        </div>
                    </div>
                </div>
            <ScrapeInfoForm />

            </div>
        </div>
        </>

    )
}

export default Accounts