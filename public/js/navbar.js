
console.log("load");
let menuIcon = document.querySelector('#menu-icon i')

let showItems = false;

let links = document.getElementsByClassName('links2');
console.log(links[0]);
menuIcon.addEventListener('click',(e)=>{

    console.log("hi");

    showItems=!showItems;

    if(showItems){

        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');


        console.log("changing")

        links[0].style.display = 'flex';


    }else{

        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
        console.log('')
        links[0].style.display='none';
    }



})