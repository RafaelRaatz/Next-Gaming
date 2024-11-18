import { AiFillStar } from "react-icons/ai";
import { MdArrowForwardIos } from "react-icons/md";

interface IGames {
  name: string;
  image: string;
  genre: any;
  platform: any;
  assessment: string;
  description: string;
}

export function GameCard({
  name,
  image,
  genre,
  platform,
  assessment,
  description,
}: IGames) {
  return (
    <div className="flex flex-col w-[75rem] h-[80rem] gap-2 bg-zinc-800 items-center p-8 rounded-lg ">
      <img
        src={image}
        alt=""
        className="w-[70rem] h-[34rem] opacity-70 brightness-[0.9] blur-[2px]  rounded"
      />
      <div className=" absolute w-[75rem] h-[35rem] bg-gradient-to-t from-zinc-800"></div>
      <div className="absolute flex flex-col justify-center items-center gap-4 w-[50rem] mt-16 ">
        <div>
          <img src={image} alt="" className="w-[50rem] h-[25rem] rounded-xl" />
        </div>
        <div className="gap-4 flex flex-col ">
          <div className="flex w-[48rem] gap-2 justify-between items-center">
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-6xl">{name}</h1>
              <div className="flex items-center gap-2">
                <div className="flex gap-2 items-center ">
                  <div className="flex">
                    <AiFillStar className="text-yellow-400 w-4 h-4" />
                    <AiFillStar className="text-yellow-400 w-4 h-4" />
                    <AiFillStar className="text-yellow-400 w-4 h-4" />
                    <AiFillStar className="text-yellow-400 w-4 h-4" />
                    <AiFillStar className="text-yellow-400 w-4 h-4" />
                  </div>
                  |
                  <span className="text-xs font-bold text-zinc-500 ">
                    Genres:
                  </span>
                  {genre?.slice(0, 3).map((genre: any, key: any) => (
                    <span key={key} className="text-xs font-bold text-zinc-500">
                      {genre.name}
                    </span>
                  ))}
                  |
                  <span className="text-md font-bold text-zinc-500 flex gap-1">
                    Meta: {assessment}
                    <img className="h-6 w-6" src="/metacritic.png" alt="" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <div className=" flex items-center justify-center bg-zinc-700 p-2 h-4 rounded">
              <span className="text-[10px] text-zinc-400">
                Playtime: {platform}hrs
              </span>
            </div>
          </div>
          <p>{description}</p>
          <button className=" h-12 w-full font-bold text-zinc-500 flex justify-center items-center border-[1px] rounded border-zinc-500 text-xs">
            Buy Here <MdArrowForwardIos className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
