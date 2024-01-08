import { MediumCard } from "@/app/components";
import { FaAngleDown, FaChevronRight } from "react-icons/fa6";

interface IGames {
  games: any;
}

export async function List({ games }: IGames) {
  
  return (
    <div className="w-[920px]  flex flex-col gap-2 ">
      <div className="flex ml-4 mr-4 justify-between items-center p-1">
        <span>440 results</span>
        <button className="bg-zinc-400 w-28 flex items-center justify-between rounded p-1">
          user score <FaAngleDown />
        </button>
      </div>

      <div className="flex gap-4 flex-wrap justify-around">
        {games.slice(14, 20).map((game: any, key: any) => (
           <MediumCard
           key={key}
           image={game.background_image}
           name={game.name}
           assessment={game.metacritic}
           genre={game.genre}
           platform={game.platform}
         />
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-12 items-center">
        <button className="rounded-full bg-zinc-400 w-6 h-6">1</button>
        <button className="rounded-full w-6 h-6">2</button>
        <button className="rounded-full w-6 h-6">3</button>
        <FaChevronRight />
      </div>
    </div>
  );
}
