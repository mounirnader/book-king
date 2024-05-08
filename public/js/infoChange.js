const image = document.querySelector('.info img');
const paragraphs = document.querySelectorAll('.info p');
const background = document.querySelector('.info .half')
paragraphs[1].style.display = 'none';
background.style.borderTopLeftRadius = '12px';
        background.style.borderBottomLeftRadius = '12px';
function changeText() {
    if(paragraphs[0].style.display == 'none') {
        paragraphs[0].style.display = 'block';
        image.style.transform = 'translateX(0)';
        paragraphs[1].style.display = 'none';
        background.style.transform = 'translateX(0)';
        background.style.borderTopLeftRadius = '12px';
        background.style.borderBottomLeftRadius = '12px';
        background.style.borderTopRightRadius = '0px';
        background.style.borderBottomRightRadius = '0px';
    }
    else {
        paragraphs[0].style.display = 'none';
        image.style.transform = 'translateX(-100%)';
        paragraphs[1].style.display = 'block';
        background.style.transform = 'translateX(100%)';
        background.style.borderTopRightRadius = '12px';
        background.style.borderBottomRightRadius = '12px';
        background.style.borderTopLeftRadius = '0px';
        background.style.borderBottomLeftRadius = '0px';
    }
}
setInterval(changeText, 5000);
