
let menuIcon = document.querySelector('#menu-icon i') //points to menu icon
let showItems = false; // if true shows menuItems
let links = document.getElementsByClassName('links2');  // navbar links-container


// adding click event listener on menuIcon
menuIcon.addEventListener('click',(e)=>{

    showItems=!showItems;  //for toglling showItems value

    if(showItems){

        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
        links[0].style.display = 'flex';

    }else{

        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
        links[0].style.display='none';
    }
})



let navbar1 = document.querySelector('.navbar1');
let navbar2 = document.querySelector('.navbar2');

if(localStorage.getItem('navbar')=='navbar1'){

    navbar1.style.display = 'flex'; 
    navbar2.style.display = 'none';

}else{

    navbar2.style.display = 'flex';
    navbar1.style.display = 'none';

}