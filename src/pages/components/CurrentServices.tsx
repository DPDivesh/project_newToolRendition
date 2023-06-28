import prisma from "../api/client";

const CurrentServices = ()=>{

    
    return (
        <div className="border shadow-xl rounded bg-white text-black mb-10 " >
        <div className="my-2  mx-7">
        {false ? <ul className="text-center">Columbus Data Processing</ul> : <ul className="text-center">none</ul>}
        </div>
    </div>
    )

}


export default CurrentServices;