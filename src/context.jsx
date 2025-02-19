import React, { createContext } from "react";
import axios from "axios";

import { useContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
    [recipes, setRecipes] = useState([]);

    async function fetchRecepies(query = "pizza") {

        try {
            const response = await axios.get(`https://forkify-api.herokuapp.com/api/search?q=${query}`);
            const data = response.data;


            if (data?.data?.recipe) {
                setRecipes(data.data.recipes);
            }
        }
        catch (error) {
            console.error("Error while fetching")
        }


    }

    useEffect(() => {
        fetchRecepies()
    }, []);


    return (
        <GlobalContext.Provider

            value={{

                recipes,
                fetchRecepies,

            }}
        >

            {{ children }}

        </GlobalContext.Provider>

    )
}