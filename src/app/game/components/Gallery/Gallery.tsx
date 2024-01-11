import { getRawgGame, getRawgGameImage } from "@/app/services/api";

export async function Gallery() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <span className="text-3xl font-bold">Gallery</span>
        <button className="text-xl">+ Show More</button>
      </div>
      <div className="flex gap-2">
        <img
          className="w-[750px] h-[510px] rounded hover:brightness-50 cursor-pointer"
          src="/RDR2.jpg"
          alt=""
        />
        <div className="flex flex-col gap-2">
          <img
            src="/RDR2B.png"
            className="w-[470px] h-[250px] rounded hover:brightness-50 cursor-pointer"
            alt=""
          />
                    <img
            src="/rdr2.png"
            className="w-[470px] h-[250px] rounded hover:brightness-50 cursor-pointer"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
