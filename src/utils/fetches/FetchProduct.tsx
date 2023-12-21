export async function fetchProduct(query: string): Promise<any> {
  const appId = '2c301974'; // Твой app_id
  const appKey = '4594eb787ae98f1972e9c2e436debedb'; // Твой app_key
  const apiUrl = ` https://api.edamam.com/api/food-database/v2/parser?app_id=${appId}&app_key=${appKey}&ingr=${query}&nutrition-type=cooking`;


  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Ошибка запроса: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Произошла ошибка при запросе данных:', error);
    throw error;
  }
}

