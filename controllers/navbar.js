
let navbar1 = document.querySelector('.navbar1');
let navbar2 = document.querySelector('.navbar2');



if(localStorage.getItem('navbar')=='navbar1'){

    navbar1.style.display = 'flex'; 
    navbar2.style.display = 'none';

}else{

    navbar2.style.display = 'flex';
    navbar1.style.display = 'none';



}