import { AiFillStar } from "react-icons/ai";
import { MdArrowForwardIos } from "react-icons/md";

interface ICard {
  image: string;
  name: string;
  genres: any;
  description: string;
  platform: any;
}

export function DescriptionCard({
  image,
  name,
  genres,
  description,
  platform,
}: ICard) {
  return (
    <div className="flex flex-col w-full bg-zinc-800 gap-2 rounded p-2 hover:bg-zinc-700 cursor-pointer ">
      <img src={image} alt="" className="h-48 rounded" />
      <div className="flex flex-col gap-2 ">
        <div className="flex justify-between items-center ">
          <span className="font-bold mt-1 w-60 ">{name}</span>
          <button className="mt-2 h-4 w-24 font-bold text-zinc-500 flex justify-center items-center border-[1px] rounded border-zinc-500 text-[10px]">
            Ver mais <MdArrowForwardIos className="w-3 h-3" />
          </button>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex">
            <AiFillStar className="text-yellow-400 w-4 h-4" />
            <AiFillStar className="text-yellow-400 w-4 h-4" />
            <AiFillStar className="text-yellow-400 w-4 h-4" />
            <AiFillStar className="text-yellow-400 w-4 h-4" />
            <AiFillStar className="text-yellow-400 w-4 h-4" />
          </div>
          |
          <div className="flex items-center gap-1">
            <span className="text-xs font-bold text-zinc-500 ">Genres:</span>

            <span className="text-[10px] font-bold text-zinc-500 ">
              / {genres}
            </span>
          </div>
          |
          <span className="text-xs font-bold text-zinc-500">
            Metacritic: 92
          </span>
        </div>

        <div className="flex gap-2 flex-wrap">
          <div className=" flex items-center justify-center bg-zinc-700 p-2 h-4 rounded">
            <span className="text-[10px] text-zinc-400 ">{platform}</span>
          </div>
        </div>

        <p>{description}</p>
      </div>
    </div>
  );
}
