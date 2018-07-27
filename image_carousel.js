let carousel = document.getElementsByClassName('image_carousel'); 

[].forEach(carousels, function (c) {
    let next = c.getElementsByClassName('next')[0],
    let prev = c.getElementsByClassName('prev')[0],
    let bubbles = c.getElementsByClassName('bubbles')[0],
    let inner = c.getElementsByClassName('inner')[0],
    imgs = c.getElementsByClassName('img'); 
    currentImageIndex = 0; 



    next.addEventListener("click", function(){ 
        currentImageIndex++; 
        if (currentImageIndex >= imgs.length){ 
            currentImageIndex = 0; 
        }
        swithchImg(); 

    });
 
    prev.addEventListener("click", function() { 
         currentImageIndex--; 

        if (currentImageIndex > 0) { 
            currentImageIndex = imgs.length - 1;
        } 
    }); 
}); 