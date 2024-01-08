import { getRawgGame, getRawgGameImage } from "@/app/services/api";

export async function Gallery() {
  const games = await getRawgGame();
  const gamesImage = await getRawgGameImage();

  console.log(gamesImage);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <span className="text-3xl font-bold">Gallery</span>
        <button className="text-xl">+ Show More</button>
      </div>
      <div className="flex gap-2">
        <img
          className="w-[750px] h-[510px] rounded hover:brightness-50 cursor-pointer"
          src={games.background_image}
          alt=""
        />
        <div className="flex flex-col gap-2">
          
          {gamesImage.slice(0, 2).map((game: any, key: any) => (
            <img
              key={key}
              src={game.image}
              className="w-[470px] h-[250px] rounded hover:brightness-50 cursor-pointer"
              alt=""
            />
          ))}
        </div>
      </div>
    </div>
  );
}
