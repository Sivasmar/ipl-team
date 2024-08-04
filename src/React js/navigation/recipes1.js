import axios from "axios";
import { useEffect, useState } from "react";

const RecipeFinderQ = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await axios.get("https://dummyjson.com/recipes");
      const revampData = data.recipes.map((eachRecipe) => ({
        id: eachRecipe.id,
        recipeName: eachRecipe.name,
      }));
      setRecipes(revampData);
    } catch (error) {
      setError("Failed to fetch recipes");
    } finally {
      setLoading(false);
    }
  };

  const selectHandler = (event) => {
    const selectedRecipeId = event.target.value;
    fetchEachRecipe(selectedRecipeId);
  };

  const fetchEachRecipe = async (recipeId) => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await axios.get(`https://dummyjson.com/recipes/${recipeId}`);
      setSelectedRecipe(data);
    } catch (error) {
      setError("Failed to fetch recipe details");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h3>Select the recipes</h3>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {recipes.length > 0 ? (
        <select onChange={selectHandler} style={styles.select}>
          {recipes.map((each) => (
            <option value={each.id} key={each.id}>
              {each.recipeName}
            </option>
          ))}
        </select>
      ) : (
        !loading && <h5>No recipes found</h5>
      )}

      {Object.keys(selectedRecipe).length > 0 && !loading && (
        <div style={styles.card}>
          <h4>{selectedRecipe.name}</h4>
          <img src={selectedRecipe.image} width={200} height={200} alt={selectedRecipe.name} />
          <h4>Rating:</h4><p>{selectedRecipe.rating}</p>
          <h4>Ingredients:</h4><p>{selectedRecipe.ingredients}</p>
          <h4>Instructions:</h4><p>{selectedRecipe.instructions}</p>
          <h4>Meal Type:</h4><p>{selectedRecipe.mealType}</p>
          <h4>Tags:</h4><p>{selectedRecipe.tags}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  },
  select: {
    padding: '10px',
    marginBottom: '20px',
    fontSize: '16px',
  },
  card: {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    width: '300px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
};

export default RecipeFinderQ;
