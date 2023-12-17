interface RecipeFilter {
    query: string;
    limit: number;
}


export async function fetchRecipes(filter:RecipeFilter) {
    const { query, limit } = filter;

    const url = `https://api.edamam.com/search?q=${query}&app_id=${process.env.RECIPE_SEARCH_ID}&app_key=${process.env.RECIPE_SEARCH_API_KEY}&from=0&to=${limit}&`;

    const response = await fetch(url);

    const data = await response.json();
    
    return data?.hits;
}

export async function fetchRecipe(id: string) {
    const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=${process.env.RECIPE_SEARCH_ID}&app_key=${process.env.ECIPE_SEARCH_API_KEY}`;
  
    const response = await fetch(url);
  
    const data = await response.json();
  
    return data[0];
  }