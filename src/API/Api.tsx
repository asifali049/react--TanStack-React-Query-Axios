import axios from "axios";

const dragonApi = axios.create({
  baseURL: "https://dragonball-api.com/api",
});

export const fetchCharacters = async (pageNumber:number) => {
  try {
    const res = await dragonApi(`/characters?page=${pageNumber}&limit=10`);
    return res.status === 200 ? res.data.items : [];
  } catch (error) {
    console.log(error);
  }
};

export const fetchPlanets = async (pageNumber:number) => {
  try {
    const res = await dragonApi(`/planets?page=${pageNumber}&limit=10`);
    return res.status === 200 ? res.data.items : [];
  } catch (error) {
    console.log(error);
  }
};

export const fetchPlanetById = async (id:number) => {
  try {
    const res = await dragonApi.get(`/planets/${id}`);
    return res.status === 200 ? res.data : [];
  } catch (error) {
    console.log(error);
  }
};

export const fetchCharById = async (id:number) => {
  try {
    const res = await dragonApi.get(`/characters/${id}`);
    return res.status === 200 ? res.data : [];
  } catch (error) {
    console.log(error);
  }
};


export const patchCard = (id:number) =>{
  return dragonApi.patch(`/planets/${id}`)
}
export const deleteId = async (id:number) => {
  return dragonApi.delete(`/characters/${id}`);
};


export const fetchCharINScroll = async ({ pageParam = 1 }) => {
  const res = await axios.get(
    `https://dragonball-api.com/api/characters?page=${pageParam}&limit=10`
  );

  return res.data.items;
};