import {
  MiddleSection,
  NewGamesSection,
  SearchCard,
  FavoriteGamesSection,
  FilterSection,
} from "./components";
import { getRawgGames } from "./services/api";

export default async function Home() {
 
  const games = await getRawgGames();

  console.log(games);

  return (
    <div className="max-w-full flex flex-col gap-4">
      <SearchCard />
      <div className="flex flex-col max-w-[1226px] m-auto pb-24 gap-10">
        <NewGamesSection games={games} />

        <div className="w-full h-[1px] bg-zinc-700"></div>

        <MiddleSection games={games} />

        <div className="w-full h-[1px] bg-zinc-700"></div>

        <FavoriteGamesSection games={games} />

        <FilterSection games={games} />
      </div>
    </div>
  );
}
