import Link from "next/link";
import { LargeCard, MediumCard } from "..";

interface IGames {
  games: any;
}

export async function MiddleSection({ games }: IGames) {
  return (
    <div className="w-full flex  gap-2  ">
      {games.slice(9, 10).map((game: any, key: any) => (
        // eslint-disable-next-line react/jsx-key
        <Link href={`game/${game.id}`}>
          <LargeCard
            key={key}
            image={game.background_image}
            name={game.name}
            assessment={game.metacritic}
            genre={game.genre}
            platform={game.platform}
          />
        </Link>
      ))}
      <div className="w-[22rem] h-[40rem] flex justify-between flex-col">
        {games.slice(7, 9).map((game: any, key: any) => (
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
    </div>
  );
}
