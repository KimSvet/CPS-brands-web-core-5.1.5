document.addEventListener('DOMContentLoaded', function() {

    const buttonMore = document.querySelector('.more-button');
    const buttonLess = document.querySelector('.less-button');
    let brandItems = {};
    if (window.innerWidth > 1391) {
        brandItems = document.querySelectorAll('.brands-container__item:nth-child(n+11)');
    } else if (window.innerWidth > 768) {
        brandItems = document.querySelectorAll('.brands-container__item:nth-child(n+9)');
    } else if (window.innerWidth > 430) {
        brandItems = document.querySelectorAll('.brands-container__item:nth-child(n+7)');
    } 
    
    buttonMore.addEventListener('click', function() {
        for(let item of brandItems) {
            item.style.display = 'flex';
        }
    
        buttonMore.style.display = 'none';
        buttonLess.style.display = 'flex';
    });

    buttonLess.addEventListener('click', function(){
        for(let item of brandItems) {
            item.style.display = 'none';
        }

        buttonMore.style.display = 'flex';
        buttonLess.style.display = 'none';
    })
    
});