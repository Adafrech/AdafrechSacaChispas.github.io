const axios = require('axios');
const fs = require('fs');

async function fetchItems() {
  try {
    const itemResponse = await axios.get('https://ddragon.leagueoflegends.com/cdn/13.12.1/data/es_MX/item.json');
    const itemData = itemResponse.data.data;
    const items = Object.values(itemData);

    const itemDetails = [];

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const { name, description, tags, gold, image, mythic, legendary, epic } = item;
      const { total, sell } = gold;

      if (total && sell) {
        const cleanedDescription = cleanDescription(description);

        const itemInfo = {
          id: i + 1,
          name,
          description: cleanedDescription,
          ...createTagProperties(tags),
          totalGold: total,
          sellGold: sell,
          image: `https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/${image.full}`,
        };

        itemDetails.push(itemInfo);
      }
    }

    const jsonData = JSON.stringify(itemDetails, null, 2);
    fs.writeFileSync('items1.txt', jsonData);

    console.log('Se han guardado todos los items con sus respectivos IDs, descripciones limpias en items.txt');
  } catch (error) {
    console.error('Error al obtener los items:', error);
  }
}
function cleanDescription(description) {
  const regex = /<\/?[^>]+(>|$)/g;
  const cleanedDescription = description.replace(regex, ' ');

  return cleanedDescription;
}


function createTagProperties(tags) {
  const tagProperties = {};

  tags.forEach((tag, index) => {
    tagProperties[`tag${index + 1}`] = tag;
  });

  return tagProperties;
}

fetchItems(); 