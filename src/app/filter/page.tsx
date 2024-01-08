import { FavoriteGamesSection } from "../components";
import { SearchCard } from "../game/components";
import { getRawgGames } from "../services/api";
import { List, Sidebar } from "./components";

export default async function Game() {
  const games = await getRawgGames();
  return (
    <div className="max-w-full flex flex-col gap-10">
      <SearchCard />

      <div className="flex flex-col max-w-[1226px] m-auto pb-24 gap-6">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold">What Games to Play Right Now</h1>
          <span>
            Find your next game for any platform. Filter by platform, genre, or
            release year.
          </span>
        </div>
        <div className="w-full h-[1px] bg-zinc-700"></div>
        <div className="flex gap-16">
          <Sidebar />
          <List games={games} />
        </div>
        <div className="w-full h-[1px] bg-zinc-700"></div>
        <FavoriteGamesSection games={games} />
      </div>
    </div>
  );
}
