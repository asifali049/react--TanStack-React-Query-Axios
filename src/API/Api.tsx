import axios from "axios";

const dragonApi = axios.create({
  baseURL: "https://dragonball-api.com/api",
});


// fetch characters
export const fetchCharacters = async (pageNumber: number) => {
  return dragonApi.get(`/characters?page=${pageNumber}`);
};


// fetch planets
export const fetchPlanets = async (pageNumber: number) => {
  try {
    const res = await dragonApi.get(`/planets?page=${pageNumber}&limit=10`);
    return res.status === 200 ? res.data.items : [];
  } catch (error: unknown) {
    console.log(error);
    return [];
  }
};


// planet by id
export const fetchPlanetById = async (id: number) => {
  try {
    const res = await dragonApi.get(`/planets/${id}`);
    return res.status === 200 ? res.data : null;
  } catch (error: unknown) {
    console.log(error);
    return null;
  }
};


// character by id
export const fetchCharById = async (id: number) => {
  try {
    const res = await dragonApi.get(`/characters/${id}`);
    return res.status === 200 ? res.data : null;
  } catch (error: unknown) {
    console.log(error);
    return null;
  }
};


// update
export const patchCard = (id: number, data: any) => {
  return dragonApi.patch(`/planets/${id}`, data);
};


// delete
export const deleteId = (id: number) => {
  return dragonApi.delete(`/characters/${id}`);
};


// infinite scroll
export const fetchCharINScroll = async ({
  pageParam = 1,
}: {
  pageParam: number;
}) => {
  const res = await dragonApi.get(`/characters?page=${pageParam}&limit=10`);
  return res.data.items;
};