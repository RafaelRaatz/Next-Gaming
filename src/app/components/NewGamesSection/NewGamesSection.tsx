import { MdArrowForwardIos } from "react-icons/md";
import { MediumCard } from "..";
import Link from "next/link";

interface IGames {
  games: any;
}

export async function NewGamesSection({ games }: IGames) {
  return (
    <div className="flex flex-col gap-4 ">
      <button className="flex gap-2 items-center hover:underline text-2xl">
        Novos Games <MdArrowForwardIos className="w-6 h-6" />{" "}
      </button>

      <div className="flex gap-2">
        {games.slice(0, 3).map((game: any, key: any) => (
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
