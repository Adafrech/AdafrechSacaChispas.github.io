const axios = require('axios');
const fs = require('fs');

async function deleteItems() {
  try {
    const existingItemsResponse = await axios.get('https://ddragon.leagueoflegends.com/cdn/13.12.1/data/es_MX/item.json');
    const existingItemsData = existingItemsResponse.data.data;
    const existingItems = Object.values(existingItemsData);

    const itemsTxtData = fs.readFileSync('items.txt', 'utf8');
    const items = JSON.parse(itemsTxtData);

    const itemNames = existingItems.map(item => item.name);

    const updatedItems = items.filter(item => !itemNames.includes(item.name));

    const jsonData = JSON.stringify(updatedItems, null, 2);
    fs.writeFileSync('items.txt', jsonData, 'utf8');

    console.log('Se han eliminado los items del archivo items.txt');
  } catch (error) {
    console.error('Error al obtener los items:', error);
  }
}

deleteItems();
