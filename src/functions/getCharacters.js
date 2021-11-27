import axios from "axios";

export const getCharacters = async (name) => {
  const url = `https://www.superheroapi.com/api.php/3896683383777225/search/${name}`;
  const result = await axios.get(url);
  const data = await result.data.results;

  const character = data?.map((d) => {
    return {
      id: d.id,
      appearance: d.appearance,
      biography: d.biography,
      connections: d.connections,
      image: d.image,
      name: d.name,
      powerstats: d.powerstats,
      work: d.work,
    };
  });

  return character;
};
