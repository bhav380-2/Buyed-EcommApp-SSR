
const viewAllContainer = document.getElementsByClassName('view-all');

const appendProductsToCatalogType1 = (products) => {

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
        viewAllContainer[0].appendChild(productElement);
    });
};

const appendProductsToCatalogType2 = (products) => {

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



let currentPage = 1;
let flag = false;
const fetchMoreProducts = async () => {
    try {
        const response = await fetch(`https://fakestoreapi.com/products?page=${currentPage + 3}`);

        const data = await response.json();

        let cardType = document.querySelector('#card-type').getAttribute('data-cardType');

        console.log("*****************************",cardType);

        if(cardType=='type1'){
            appendProductsToCatalogType1(data);

        }else{

            appendProductsToCatalogType2(data);

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
    flag =true;
};

window.addEventListener('scroll', checkScroll);

fetchMoreProducts();
