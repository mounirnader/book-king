let images = document.getElementsByTagName("img");
for (let i = 0; i < images.length; i++) {
    images[i].onclick = function() {
        window.open(this.src, '_blank');
    };
}
