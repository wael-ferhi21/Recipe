import { useParams } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";
import axios from "axios";
import "../RecipeDeatil/RecipeDetail.css";

export default function RecipeDetail() {
  const { id } = useParams();
  const { recipeDetailsData, setRecipeDetailsData } = useContext(GlobalContext);

  useEffect(() => {
    async function getRecipeDetails() {
      setRecipeDetailsData(null); // Reset previous data before fetching new one

      try {
        const response = await axios.get(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
        );
        const data = response.data;

        console.log("Fetched Recipe Detail:", data);

        if (data?.data?.recipe) {
          setRecipeDetailsData(data.data.recipe); // Store only the recipe object
          console.log("Updated recipeDetailsData:", data.data.recipe); // Debugging
        }
      } catch (error) {
        console.error("Error fetching recipe details:", error);
        setRecipeDetailsData(null); // Ensure data is cleared on error
      }
    }

    getRecipeDetails();
  }, [id]); // Refetch when id changes

  console.log("Current recipeDetailsData:", recipeDetailsData); // Debugging

  return (
    <div className="recipe-detail-container">
      {recipeDetailsData ? (
        <>
          <div className="recipe-image">
            <img src={recipeDetailsData.image_url} alt={recipeDetailsData.title} />
          </div>

          <div className="recipe">
            <div className="recipe-title">
              <span>{recipeDetailsData.publisher}</span>
              <h3>{recipeDetailsData.title}</h3>
            </div>
            <div>
              <button className="save">Save as Favourite</button>
            </div>
            <div className="ingredients">
              <span> Ingredients:</span>
              <ul className="list">
                {recipeDetailsData.ingredients?.map((ingredient, index) => (
                  <li key={index}>
                    <span>
                      {ingredient.quantity} {ingredient.unit}
                    </span>
                    <span className="description">{ingredient.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      ) : (
        <div>Loading recipe details...</div>
      )}
    </div>
  );
}
