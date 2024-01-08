"use client";
import { useParams } from "next/navigation";
import { Gallery, GameCard } from "..";
import { getRawgGame } from "@/app/services/api";

export async function GameSection() {
  const { id } = useParams();

  const games = await getRawgGame(id);

  return (
    <>
      <GameCard
        image={games.background_image}
        name={games.name}
        assessment={games.rating}
        genre={games.genres}
        platform={games.playtime}
        description={games.description_raw}
      />

      <Gallery />
    </>
  );
}
