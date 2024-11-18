import { MdArrowForwardIos } from "react-icons/md";
import { MediumCard } from "..";
import Link from "next/link";

interface IGames {
  games: any;
}

export async function FavoriteGamesSection({ games }: IGames) {
  return (
    <div className="flex flex-col gap-4">
      <button className="flex gap-2 items-center hover:underline text-2xl">
        Games Favoritos dos Usuários <MdArrowForwardIos className="w-6 h-6" />{" "}
      </button>

      <div className="flex gap-2">
        {games.slice(17, 20).map((game: any, key: any) => (
          // eslint-disable-next-line react/jsx-key
          <Link href={`game/${game.id}`}>
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
    </div>
  );
}
