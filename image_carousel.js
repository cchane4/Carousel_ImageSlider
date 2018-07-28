// create the carousel
let carousel = document.getElementsByClassName('image_carousel'); 
// for each index of the carousel 
[].forEach.call(carousel, function (c) {
    let next = c.getElementsByClassName('next')[0],
         previous = c.getElementsByClassName('previous')[0],
        bubblesContainer = c.getElementsByClassName('bubbles')[0],
        inner = c.getElementsByClassName('inner')[0],
        imgs = inner.getElementsByTagName('img'); 
        currentImageIndex = 0;
        width = 308; 
        bubbles = []; 
// creates the four bubbles seen at the bottom of the carousel
    for (let i = 0; i < imgs.length; i++){ 
        let b = document.createElement('span');
        b.classList.add('bubble');
        bubblesContainer.appendChild(b); 
        bubbles.push(b); 
   // if the cursor clicks on any given image referenced by the bubble, the carousel slides to that image      
        b.addEventListener('click', function(){ 
            currentImageIndex = i; 
            switchImg(); 
        })

    }
// functionality for switching the image and the current image corresponds with the only bubble that is white and opaque
// so if the image is image #1, then bubble number 1 will be white
   function switchImg () { 
        inner.style.left = -width * currentImageIndex + 'px'; 
        bubbles.forEach( function(b, i){ 
            if (i === currentImageIndex){ 
                b.classList.add('active'); 
            } else{ 
                b.classList.remove('active'); 
            }
        });
    }

// each click on the "next" element pushes to the next image
    next.addEventListener("click", function () { 
        currentImageIndex++; 

        if (currentImageIndex >= imgs.length){ 
            currentImageIndex = 0; 
        }
        switchImg(); 

    });
 //each click on the "previous" element slides back to the preceding image
    previous.addEventListener("click", function () { 
         currentImageIndex--; 

        if (currentImageIndex < 0) { 
            currentImageIndex = imgs.length - 1;
        } 
        switchImg(); 
    }); 

    switchImg(); 
}); 