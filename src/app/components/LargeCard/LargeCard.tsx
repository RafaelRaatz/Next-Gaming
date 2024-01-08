import { AiFillStar } from "react-icons/ai";
import { MdArrowForwardIos } from "react-icons/md";

interface ICard {
  image: string;
  name: string;
  assessment: string;
  genre: any;
  platform: any;
}

export function LargeCard({ image, name, assessment, genre, platform }: ICard) {
  return (
    <div className="flex flex-col w-[50rem] h-[39rem] gap-2 bg-zinc-800 items-center p-2 rounded hover:bg-zinc-700 cursor-pointer">
      <div>
        <img src={image} alt="" className="w-[50rem] h-[32rem]  rounded" />
      </div>
      <div className="gap-2 flex flex-col justify-end ">
        <div className="flex w-[48rem] gap-2 justify-between items-center">
          <div className="flex gap-2">
            <h1 className="font-bold">{name}</h1>|
            <div className="flex items-center gap-2">
              <div className="flex gap-2 items-center">
                <div className="flex">
                  <AiFillStar className="text-yellow-400 w-4 h-4" />
                  <AiFillStar className="text-yellow-400 w-4 h-4" />
                  <AiFillStar className="text-yellow-400 w-4 h-4" />
                  <AiFillStar className="text-white w-4 h-4" />
                  <AiFillStar className="text-white w-4 h-4" />
                </div>
                |
                <span className="text-xs font-bold text-zinc-500 ">
                  Genres:
                </span>
                {genre?.map((genre: any, key: any) => (
                  <span
                    key={key}
                    className="text-[10px] font-bold text-zinc-500"
                  >
                    /{genre}
                  </span>
                ))}
                |
                <span className="text-xs font-bold text-zinc-500 flex items-center gap-1">
                  Metacritic: {assessment}
                  <img className="h-6 w-6" src="/metacritic.png" alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          {platform?.map((platforms: any, key: any) => (
            <div
              key={key}
              className=" flex items-center justify-center bg-zinc-700 p-2 h-4 rounded"
            >
              <span className="text-[10px] text-zinc-400">{platforms}</span>
            </div>
          ))}
        </div>
        <button className=" h-8 w-full font-bold text-zinc-500 flex justify-center items-center border-[1px] rounded border-zinc-500 text-[10px]">
          Ver mais <MdArrowForwardIos className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}
