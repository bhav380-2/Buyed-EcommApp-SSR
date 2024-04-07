let updateSettingsForm = document.getElementById('updateSettings');
updateSettingsForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let navbarType = document.getElementById('navbarType').value;
    let productCardType = document.getElementById('productCardType').value;
    let catlogView = document.getElementById('catalogView').value;

    console.log(navbarType, productCardType, catlogView);

    localStorage.setItem('navbar', navbarType);
    localStorage.setItem('view', catlogView);
    localStorage.setItem('productCard', productCardType);
    window.location.href = '/'
})