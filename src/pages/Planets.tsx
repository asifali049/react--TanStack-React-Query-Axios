import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchPlanets } from "../API/Api";
import { NavLink } from "react-router-dom";
import { useState } from "react";

interface Planet {
  id: number;
  image: string;
  name: string;
}

export const Planets = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const { data, isPending, isError, error } = useQuery<Planet[]>({
    queryKey: ["planets", pageNumber],
    queryFn: () => fetchPlanets(pageNumber),
    placeholderData: keepPreviousData,
  });

  if (isPending) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <div className="Card">
        {data?.map((planet) => {
          const { id, image, name } = planet;

          return (
            <div key={id}>
              <NavLink to={`/planets/${id}`}>
                <img src={image} width={120} />
                <h2>{name}</h2>
              </NavLink>
            </div>
          );
        })}
      </div>

      <button
        disabled={pageNumber === 1}
        onClick={() => setPageNumber((prev) => prev - 1)}
      >
        Prev
      </button>

      <h1>{pageNumber}</h1>

      <button onClick={() => setPageNumber((prev) => prev + 1)}>
        Next
      </button>
    </div>
  );
};