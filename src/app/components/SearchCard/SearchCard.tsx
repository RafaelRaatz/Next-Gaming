import { AiFillStar } from "react-icons/ai";

export async function SearchCard() {
  return (
    <div className="h-[44rem] flex items-center justify-center ">
      <div>
        <img
          src="large-image.jpg"
          alt=""
          className=" w-[150rem] h-[44rem] brightness-[0.3] blur-[2px] rounded"
        />
      </div>
      <div className="absolute w-[1226px] h-[32rem] flex flex-col justify-center items-center">
        <div className="w-[650px] flex flex-col items-center justify-center gap-4">
          <h1 className=" text-7xl">Busque, Favorite e liste seus games|</h1>
          <div>
            <div className="flex pl-8">
              <AiFillStar className="text-yellow-400 w-2 h-2" />
              <AiFillStar className="text-yellow-400 w-2 h-2" />
            </div>
            <span className="text-sm">De Ztaars ao seus games!</span>
          </div>

          <input
            type="text"
            placeholder="Search"
            className="w-[480px] h-10 rounded-md p-2"
          />
        </div>
      </div>
    </div>
  );
}
