import { keepPreviousData, useQuery,  } from "@tanstack/react-query";
import {  fetchPlanets,  } from "../API/Api";
import { NavLink } from "react-router-dom";
import { useState } from "react";

  export interface Character {
  id: number;
  name: string;
  ki: string;
  maxKi: string;
  race: string;
  gender: string;
  description: string;
  image: string;
  affiliation: string;
  deletedAt: string | null;
}


export const Planets = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["planets", pageNumber],
    queryFn: () => fetchPlanets(pageNumber),
    placeholderData:keepPreviousData
  });

  if (isPending) return <p>Loading...</p>;
  if (isError) return <p>Error :{error.message || "Error loading data"}</p>;

  return (
    <div>
      <div className="Card"> 
        {data?.map((planets) => {
          const { id, image, name } = planets;
          return (
            <div key={id}>
              <NavLink to={`/planets/${id}`}>
                <img src={image} width={120} />
                <h2>{name}</h2>
              </NavLink>
              <button onClick={()=>patchUpdate.mutate(id)} >UPDATE</button>
            </div>
          );
        })}
      </div>
      <button
        disabled={pageNumber === 0 ? true : false}
        onClick={() => setPageNumber((prev) => prev - 1)}
      >
        Prev
      </button>
      <h1>{pageNumber}</h1>
      <button  onClick={() => setPageNumber((prev) => prev + 1)}>Next</button>
    </div>
  );
};
