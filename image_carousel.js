let carousel = document.getElementsByClassName('image_carousel'); 

[].forEach.call(carousel, function (c) {
    let next = c.getElementsByClassName('next')[0],
         previous = c.getElementsByClassName('previous')[0],
        bubbles = c.getElementsByClassName('bubbles')[0],
        inner = c.getElementsByClassName('inner')[0],
        imgs = inner.getElementsByTagName('img'); 
        currentImageIndex = 0;
        width = 308; 

   function switchImg () { 
        inner.style.left = -width * currentImageIndex + 'px'; 
    }


    next.addEventListener("click", function () { 
        currentImageIndex++; 

        if (currentImageIndex >= imgs.length){ 
            currentImageIndex = 0; 
        }
        switchImg(); 

    });
 
    previous.addEventListener("click", function () { 
         currentImageIndex--; 

        if (currentImageIndex < 0) { 
            currentImageIndex = imgs.length - 1;
        } 
        switchImg(); 
    }); 

    switchImg(); 
}); 