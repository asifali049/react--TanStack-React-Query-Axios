import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchCharById } from "../../API/Api";

export const CharId = () => {
  const { id } = useParams();
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["characters", id],
    queryFn: () => fetchCharById(Number(id))
  });
  console.log(data);

  if (isPending) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Charecter ID: {id}</h1>
      <h2>{data?.name}</h2>
    </div>
  );
};
