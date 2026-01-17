const wheels = [
    {
        id: 1,
        name: "Нурофен Экспресс-Форте",
        category: "Безрецептурное",
        description: "Обезболивающее и жаропонижающее средство. Действующее вещество: ибупрофен.",
        price: 320,
        image: "photos/wheels/nurofen.webp"
    },
    {
        id: 2,
        name: "Парацетамол",
        category: "Безрецептурное",
        description: "Жаропонижающее и болеутоляющее средство. Применяется при простуде и гриппе.",
        price: 85,
        image: "photos/wheels/paracetamol.webp"
    },
    {
        id: 3,
        name: "Аспирин",
        category: "Безрецептурное",
        description: "Ацетилсалициловая кислота. Обезболивающее, жаропонижающее, противовоспалительное.",
        price: 120,
        image: "photos/wheels/aspirin.webp"
    },
    {
        id: 4,
        name: "Амоксициллин",
        category: "Рецептурное",
        description: "Антибиотик широкого спектра действия. Назначается при бактериальных инфекциях.",
        price: 560,
        image: "photos/wheels/amoksicilin.webp"
    },
    {
        id: 5,
        name: "Лоратадин",
        category: "Безрецептурное",
        description: "Антигистаминный препарат. Противоаллергическое средство, не вызывает сонливости.",
        price: 210,
        image: "photos/wheels/loratadin.webp"
    },
    {
        id: 6,
        name: "Эналаприл",
        category: "Рецептурное",
        description: "Гипотензивное средство. Применяется для лечения артериальной гипертензии.",
        price: 430,
        image: "photos/wheels/enalapril.webp"
    },
    {
        id: 7,
        name: "Омепразол",
        category: "Рецептурное",
        description: "Ингибитор протонной помпы. Лечение язвы желудка и гастрита.",
        price: 380,
        image: "photos/wheels/omeprazol.webp"
    },
    {
        id: 8,
        name: "Метформин",
        category: "Рецептурное",
        description: "Гипогликемическое средство. Применяется при сахарном диабете 2 типа.",
        price: 290,
        image: "photos/wheels/metformin.webp"
    },
    {
        id: 9,
        name: "Цетрин",
        category: "Безрецептурное",
        description: "Антигистаминный препарат. Цетиризина гидрохлорид, противоаллергическое средство.",
        price: 340,
        image: "photos/wheels/cetrin.jpg"
    },
    {
        id: 10,
        name: "Валидол",
        category: "Безрецептурное",
        description: "Успокаивающее средство при сердечно-сосудистых неврозах и стенокардии.",
        price: 65,
        image: "photos/wheels/validol.jpg"
    },
    {
        id: 11,
        name: "Фуросемид",
        category: "Рецептурное",
        description: "Мочегонное средство. Применяется при отеках различного происхождения.",
        price: 95,
        image: "photos/wheels/furosemid.webp"
    },
    {
        id: 12,
        name: "Виагра",
        category: "Рецептурное",
        description: "Силденафил. Применяется при эректильной дисфункции у мужчин.",
        price: 890,
        image: "photos/wheels/viagra.webp"
    }
];

let filteredWheels = [...wheels];

function renderProducts(productsArray) {
    const catalogGrid = document.getElementById('catalogGrid');
    
    if (productsArray.length === 0) {
        catalogGrid.innerHTML = `
            <div class="no-results">
                <h3>Товары не найдены</h3>
                <p>Попробуйте изменить запрос поиска</p>
            </div>
        `;
        return;
    }
    
    let html = '';
    
    productsArray.forEach(wheel => {
        html += `
            <div class="content-card product-card">
                <img src="${wheel.image}" alt="${wheel.name}" class="product-image">
                <div class="product-info">
                    <span class="product-category">${wheel.category}</span>
                    <h3>${wheel.name}</h3>
                    <p class="product-description">${wheel.description}</p>
                    <div class="product-price">
                        <div class="price"><span>${wheel.price}</span> ₽</div>
                        <button class="add-to-cart" onclick="addToCart(${wheel.id})">В корзину</button>
                    </div>
                </div>
            </div>
        `;
    });
    
    catalogGrid.innerHTML = html;
}

function search() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        filteredWheels = [...wheels];
    } else {
        filteredWheels = wheels.filter(wheel => 
            wheel.name.toLowerCase().includes(searchTerm) ||
            wheel.description.toLowerCase().includes(searchTerm) ||
            wheel.category.toLowerCase().includes(searchTerm)
        );
    }
    
    const sortSelect = document.getElementById('sortSelect');
    applySorting(sortSelect.value);
}

function clearSearch() {
    document.getElementById('searchInput').value = '';
    filteredWheels = [...wheels];
    renderProducts(filteredWheels);
}

function sort() {
    const sortSelect = document.getElementById('sortSelect');
    applySorting(sortSelect.value);
}

function applySorting(sortType) {
    let sortedArray = [...filteredWheels];
    
    switch(sortType) {
        case 'price-asc':
            sortedArray.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            sortedArray.sort((a, b) => b.price - a.price);
            break;
        case 'name-asc':
            sortedArray.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            sortedArray.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case 'default':
        default:
            sortedArray.sort((a, b) => a.id - b.id);
            break;
    }
    
    renderProducts(sortedArray);
}

function addToCart(productId) {
    const wheel = wheels.find(p => p.id === productId);
    alert(`Товар "${wheel.name}" добавлен в корзину!\nЦена: ${wheel.price} ₽\nКатегория: ${wheel.category}`);
}


document.addEventListener('DOMContentLoaded', function() {
    renderProducts(wheels);
    
    document.getElementById('searchInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            search();
        }
    });
    
    document.getElementById('searchInput').addEventListener('input', function() {
        if (this.value.length >= 2) {
            search();
        } else if (this.value.length === 0) {
            filteredWheels = [...wheels];
            renderProducts(filteredWheels);
        }
    });
});