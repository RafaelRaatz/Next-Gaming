import axios from "axios";


export async function getRawgGame(id: any) {
  const res = await axios.get(`https://api.rawg.io/api/games/${id}?key=8ddb542fc54244ca83f1c754c9a000b5`);
  const data = res.data;

  return data;
}

export async function getRawgGameImage() {
  const res = await axios.get('https://api.rawg.io/api/games/3070/screenshots?key=8ddb542fc54244ca83f1c754c9a000b5');
  const data = res.data.results;

  return data;
}

export async function getPlatforms() {
  const res = await axios.get('https://api.rawg.io/api/platforms?key=8ddb542fc54244ca83f1c754c9a000b5');
  const data = res.data.results;

  return data;
}

export async function getRawgGames() {
  const res = await axios.get('https://api.rawg.io/api/games?key=8ddb542fc54244ca83f1c754c9a000b5');
  const data = res.data.results

  data?.forEach((item: any) => {
    const genreArray: any[] = [];

    item?.genres?.forEach((genre: any) => {
      genreArray.push(genre?.name);
    });

    item.genre = genreArray;
  });

  data?.forEach((item: any) => {
    const platformArray: any[] = [];

    item?.parent_platforms?.forEach((genre: any) => {
      platformArray.push(genre?.platform.name);
    });

    item.platform = platformArray;
  });


  return data;
}

