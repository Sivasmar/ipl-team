import axios from "axios";
import { useEffect, useState } from "react";

const RecipeFinderQ = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

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
      console.log(revampData,"hi")
      setRecipes(revampData);
    } catch (error) {
      setError("Failed to fetch recipes");
    } finally {
      setLoading(false);
    }
  };

  const searchHandler = () => {
    if (searchQuery === "") {
      setFilteredRecipes([]);
    } else {
      const filtered = recipes.filter((recipe) =>
        recipe.recipeName.toLowerCase().includes(searchQuery.toLowerCase())
      );
      console.log(filtered ,"hello");
      
      setFilteredRecipes(filtered);
      if (filtered.length > 0) {
        fetchEachRecipe(filtered[0].id);
      }
    }
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
      <h3>Search for a recipe</h3>
      <div style={styles.searchContainer}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search recipes..."
          style={styles.search}
        />
        <button onClick={searchHandler} style={styles.searchButton}>
          Search
        </button>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {Object.keys(selectedRecipe).length > 0 && !loading && (
        <div style={styles.card}>
          <h4>{selectedRecipe.name}</h4>
          <img src={selectedRecipe.image} width={200} height={200} alt={selectedRecipe.name} />
          <h4>Rating:</h4><p>{selectedRecipe.rating}</p>
          {/* <h4>Ingredients:</h4><p>{selectedRecipe.ingredients}</p>
          <h4>Instructions:</h4><p>{selectedRecipe.instructions}</p> */}
          <h4>Meal Type:</h4><p>{selectedRecipe.mealType}</p>
          <h4>Tags:</h4><p>{selectedRecipe.tags}</p>
        </div>
      )}
      {!loading && filteredRecipes.length === 0 && searchQuery && <h5>No recipes found</h5>}
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
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  search: {
    padding: '10px',
    fontSize: '16px',
    width: '200px',
  },
  searchButton: {
    padding: '10px 20px',
    marginLeft: '10px',
    fontSize: '16px',
    cursor: 'pointer',
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
