
const container = document.getElementsByClassName('view-all'); //product container


// function for appending type1 product box to container
const appendType1ProductsToCatalog = (products) => {

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product-card-1');
        productElement.innerHTML = `
        <div class="img-container">
        <img src="${product.image}" alt="${product.title}" class="product-image">
    </div>
 
    <div class="product-info">
        <div class="product-title">
        ${product.title}
        </div>
        <div class="product-price">$${product.price}
        </div>
    </div>

    <div class="buttons">
        <button class="buy">Buy Now</button>
        <button class="add-cart">Add to Cart</button>

    </div>
        `;
        container[0].appendChild(productElement);
    });
};

// function for appending type2 product box to container
const appendType2ProductsToCatalog = (products) => {

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product-card-2');
        productElement.innerHTML = `
        <div class="img-container">
        <img src="${product.image}" alt="${product.title}" class="product-image">
    </div>
 
    <div class="product-info">
        <div class="product-title">
        ${product.title}
        </div>
        <div class="product-price">$${product.price}
        </div>
    </div>

        `;
        viewAllContainer[0].appendChild(productElement);
    });
};


let currentPage = 1; // used for storing value of curr page number (product api) --> fakestoreapi does not provide pagination (here its of no use)
let flag = false; 
const fetchMoreProducts = async () => {
    try {
        const response = await fetch(`https://fakestoreapi.com/products?page=${currentPage + 1}`);
        const data = await response.json();

        let cardType = document.querySelector('#card-type').getAttribute('data-cardType');

        if (cardType == 'type1') {
            appendType1ProductsToCatalog(data);

        } else {

            appendType2ProductsToCatalog(data);

        }

        currentPage++;
        
    } catch (error) {
        console.error('Error fetching more products:', error);
    }
};

const checkScroll = () => {
    const scrollThreshold = 50;
    const scrollPosition = window.innerHeight + window.scrollY;
    const documentHeight = document.body.offsetHeight;

    if (scrollPosition >= documentHeight - scrollThreshold && flag) {
        fetchMoreProducts();
    }
    flag = true;
};

window.addEventListener('scroll', checkScroll);

fetchMoreProducts();
