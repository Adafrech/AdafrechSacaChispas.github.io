const itemContainer = document.querySelector('.item-container');
const inputBuscar = document.getElementById('input-buscar');
inputBuscar.value="";
const filtrosCheckbox = document.querySelectorAll('.btn-check');

filtrosCheckbox.forEach(checkbox => {
  checkbox.addEventListener('change', filterItems);
});

inputBuscar.addEventListener('input', filterItems);

// let templateDescripcion="";

function loadItems(items) {
  itemContainer.innerHTML = '';

  items.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.classList.add('item');

    const imageElement = document.createElement('img');
    imageElement.src = item.image;
    itemElement.appendChild(imageElement);

    const nameElement = document.createElement('h3');
    nameElement.textContent = item.name;
    itemElement.appendChild(nameElement);

    const priceContainer = document.createElement('div');
    priceContainer.classList.add('price-container');

    const priceItem = document.createElement('a');
    priceItem.textContent = item.totalGold;
    priceItem.classList.add('price');
    priceContainer.appendChild(priceItem);

    const goldIcon = document.createElement('span');
    goldIcon.classList.add('gold-icon');
    priceContainer.appendChild(goldIcon);
    itemElement.appendChild(priceContainer);

    const descriptionElement = document.createElement('p');
    // templateDescripcion=
    // `<span class="d-inline-block item-description" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="${item.description}">
    //     <button class="btn btn-primary" type="button">Mas Info</button>
    // </span>`;
    // descriptionElement.innerHTML=templateDescripcion;

    descriptionElement.textContent = item.description;
    descriptionElement.classList.add('item-description');
    itemElement.appendChild(descriptionElement);


    itemContainer.appendChild(itemElement);



    itemElement.addEventListener('mouseenter', () => {
      descriptionElement.style.display = 'block';
    });

    itemElement.addEventListener('mouseleave', () => {
      descriptionElement.style.display = 'none';
    });
  });
//   const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
//   const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
}

function filterItems() {
  const checkboxes = document.querySelectorAll('input[name="filtro"]:checked');
  const categoriasSeleccionadas = Array.from(checkboxes).map(checkbox => checkbox.value);
  const searchText = inputBuscar.value.toLowerCase();

  let filteredItems = [];

  if (categoriasSeleccionadas.length === 0) {
    filteredItems = items.filter(item => item.name.toLowerCase().includes(searchText));
  } else {
    filteredItems = items.filter(item => {
      const hasCategoria = categoriasSeleccionadas.includes(item.class);
      const hasSearchText = item.name.toLowerCase().includes(searchText);
      return hasCategoria && hasSearchText;
    });
  }

  loadItems(filteredItems);
}

loadItems(items);