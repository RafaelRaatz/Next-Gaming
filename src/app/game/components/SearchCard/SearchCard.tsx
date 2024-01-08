import { AiFillStar } from "react-icons/ai";

export async function SearchCard() {

  return (
    <div className="max-h-80 flex items-center justify-center ">
      <div >
       
          <img
            src="/searchImage.jpg"
            alt=""
            className=" w-[150rem] h-72 brightness-[0.3] blur-[2px] rounded"
          />
     
      </div>
      <div className="absolute w-[1226px] h-[32rem] flex  justify-center items-center">
        <div className="w-[850px] flex items-center justify-center gap-4">
          <h1 className=" text-5xl">Busque, Favorite e liste seus games|</h1>
          <div className="flex flex-col gap-2">
          <div className="flex flex-col justify-center items-center">
            <div className="flex pl-8">
              <AiFillStar className="text-yellow-400 w-2 h-2" />
              <AiFillStar className="text-yellow-400 w-2 h-2" />
            </div>
            <span className="text-md">De Ztaars ao seus games!</span>
          </div>

          <input
            type="text"
            placeholder="Search"
            className="w-[400px] h-10 rounded-md p-2"
          />
          </div>
        </div>
      </div>
    </div>
  );
}
