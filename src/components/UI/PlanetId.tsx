import { useQuery } from "@tanstack/react-query";
import { fetchPlanetById } from "../../API/Api";
import { useParams } from "react-router-dom";

export const PlanetId = () => {
  const { id } = useParams();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["planets", id],
    queryFn: () => fetchPlanetById(Number(id))  });  

  console.log(data);

  if (isPending) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Planet ID: {id}</h1>
      <h2>{data?.name}</h2>
    </div>
  );
};
