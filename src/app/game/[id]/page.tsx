import { getRawgGames } from "@/app/services/api";
import { GameSection, SearchCard } from "../components";
import { FilterSection, NewGamesSection } from "@/app/components";

export default async function Game() {
  const games = await getRawgGames();
  return (
    <div className="max-w-full flex flex-col gap-10">
      <SearchCard />

      <div className="flex flex-col max-w-[1226px] m-auto pb-24 gap-10">
        <div className="flex justify-center">
          <div className="flex items-center border-b-[4px] border-zinc-400 rounded p-2  ">
            <span className="text-md">Games- Playstation - Rockstar </span>
          </div>
        </div>
        <GameSection />
        <div className="w-full h-[1px] bg-zinc-700"></div>
        <NewGamesSection games={games} />

        <FilterSection games={games} />
      </div>
    </div>
  );
}
