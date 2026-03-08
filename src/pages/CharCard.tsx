import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteId, fetchCharacters } from "../API/Api";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export const CharCard = () => {
  const [pageNumber,setPageNumber]  =  useState(1)

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["characters",pageNumber],
    queryFn:() =>fetchCharacters(pageNumber),
    placeholderData:keepPreviousData,
  });

  const queryClient = useQueryClient()

  const delCard = useMutation({
    mutationFn:(id)=> deleteId(id),
    onSuccess:(data,id)=>{
      queryClient.setQueryData()
    }
  })

  if (isPending) return <p>Loading...</p>;
  if (isError) return <p>Error :{error.message || "Error loading data"}</p>;

  return (
    <div>
      <div className="Card">
        {data?.map((char) => {
          const { id, image, name, race, gender, ki, maxKi, affiliation } =
            char;

          return (
            <div key={id} className="CardList">
              <NavLink to={`/characters/${id}`}>
                <img src={image} width={120} />

                <h1>{name}</h1>
                <h2>
                  {race} - {gender}
                </h2>
                <h3>Base KI : {ki}</h3>
                <h3>Total KI : {maxKi}</h3>
                <h3>Afillation : {affiliation}</h3>
              </NavLink>
              <button onClick={()=>delCard.mutate(id)} >DELETE</button>
            </div>
          );
        })}
      </div>
      <div>
        <button disabled={pageNumber === 0 ? true : false} onClick={()=> setPageNumber((prev)=>prev-1)}>prev</button>
        <h1>{pageNumber}</h1>
        <button onClick={()=> setPageNumber((prev)=>prev+1)}>Next</button>
      </div>
    </div>
  );
};
