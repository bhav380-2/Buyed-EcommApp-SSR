let productCard1 = document.querySelectorAll('.product-card-1');
let productCard2 = document.querySelectorAll('.product-card-2');




if(localStorage.getItem('productCard')=='type1'){

    for(let i=0; i<productCard1.length; i++){
        productCard2[i].style.display = 'none';
        productCard1[i].style.display = 'flex';
    }

  

}else{
    for(let i=0; i<productCard1.length; i++){
        productCard1[i].style.display = 'none';
        productCard2[i].style.display = 'flex';
    }

}