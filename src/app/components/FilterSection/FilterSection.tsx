import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import { MediumCard } from "..";
import Link from "next/link";

interface IGames {
  games: any;
}

export async function FilterSection({ games }: IGames) {
  return (
    <div>
      <div className="flex flex-col">
        <h2 className="text-2xl">Best Games On</h2>
        <div className="flex gap-2 items-center ">
          <div className="w-[70rem] h-[1px] bg-zinc-700"></div>
          <button className="w-10 h-10 border-[1px] border-zinc-500 rounded-full flex items-center justify-center text-zinc-500 hover:text-zinc-700 focus:ring">
            <MdArrowBackIosNew className="w-6 h-6" />
          </button>
          <button className="w-10 h-10 border-[1px] border-zinc-500 rounded-full flex items-center justify-center text-zinc-500 hover:text-zinc-700 focus:ring">
            <MdArrowForwardIos className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          <div className="flex gap-2">
            <button className=" text-[10px] p-2 font-bold bg-zinc-700 rounded-md hover:bg-sky-700 focus:ring">
              <span className="font-bold text-zinc-200">Playstation</span>
            </button>
            <button className=" text-[10px] p-2 font-bold bg-zinc-700 rounded-md hover:bg-sky-700 focus:ring">
              <span className="font-bold text-zinc-200">Xbox</span>
            </button>
            <button className=" text-[10px] p-2 font-bold bg-zinc-700 rounded-md hover:bg-sky-700 focus:ring">
              <span className="font-bold text-zinc-200">PC</span>
            </button>
            <button className=" text-[10px] p-2 font-bold bg-zinc-700 rounded-md hover:bg-sky-700 focus:ring">
              <span className="font-bold text-zinc-200">Nintendo Switch</span>
            </button>
            <button className=" text-[10px] p-2 font-bold bg-zinc-700 rounded-md hover:bg-sky-700 focus:ring">
              <span className="font-bold text-zinc-200">Playstation Vita</span>
            </button>
            <button className=" text-[10px] p-2 font-bold bg-zinc-700 rounded-md hover:bg-sky-700 focus:ring">
              <span className="font-bold text-zinc-200">PSP</span>
            </button>
            <button className=" text-[10px] p-2 font-bold bg-zinc-700 rounded-md hover:bg-sky-700 focus:ring">
              <span className="font-bold text-zinc-200">Nintendo DS</span>
            </button>
            <button className=" text-[10px] p-2 font-bold bg-zinc-700 rounded-md hover:bg-sky-700 focus:ring">
              <span className="font-bold text-zinc-200">DreamCast</span>
            </button>
            <button className=" text-[10px] p-2 font-bold bg-zinc-700 rounded-md hover:bg-sky-700 focus:ring">
              <span className="font-bold text-zinc-200">Sega Saturn</span>
            </button>
            <button className=" text-[10px] p-2 font-bold bg-zinc-700 rounded-md hover:bg-sky-700 focus:ring">
              <span className="font-bold text-zinc-200">IOS</span>
            </button>
            <button className=" text-[10px] p-2 font-bold bg-zinc-700 rounded-md hover:bg-sky-700 focus:ring">
              <span className="font-bold text-zinc-200">Apple Macintosh</span>
            </button>
            <button className=" text-[10px] p-2 font-bold bg-zinc-700 rounded-md hover:bg-sky-700 focus:ring">
              <span className="font-bold text-zinc-200">Linux</span>
            </button>
          </div>
        </div>

        <div className="flex gap-2">
          {games.slice(15, 18).map((game: any, key: any) => (
           // eslint-disable-next-line react/jsx-key
           <Link href={`${game.id}`}> 
          <MediumCard
          key={key}
          image={game.background_image}
          name={game.name}
          assessment={game.metacritic}
          genre={game.genre}
          platform={game.platform}
        />
        </Link>
          ))}
        </div>

        <button className="flex gap-2 items-center hover:underline">
          Ver todos os jogos
          <MdArrowForwardIos className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
