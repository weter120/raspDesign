const searchBar = document.querySelector('#search-field-rasp');
const searchButton = document.querySelector('.search-rasp a i');
const leading = document.querySelector('.leading');
const rasp = document.querySelector('.rasp-days');
const tuesday = document.getElementById('tuesday');

function search(e){
    console.log('yes');
    leading.className += ' invisible';
    rasp.className = 'rasp-days';
    // this.target.preventDefault();
    location.href = "#tuesday";
}

searchButton.addEventListener('click', search);

console.log(tuesday.scrollTop, tuesday.scrollLeft)