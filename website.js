
// document.addEventListener('DOMContentLoaded', function (e){
//     console.log("its loaded");
//     var image = document.getElementById('cat');
//     image.addEventListener('click', function imageClick (e){
//         console.log("I just clicked on the snake image")
//         console.log(image.src)
//         image.src = "file:///C:/Users/GWC11/Documents/website/dumbcat.jpg"
//     })
// })
// document.addEventListener('DOMContentLoaded', function (f){
//     var image = document.getElementById('catv');
//     image.addEventListener('click', function imageClick (f){
//         console.log(image.src)
//         image.src = "file:///C:/Users/GWC11/Documents/website/digust.jpg"
//     })
// })
// document.addEventListener('DOMContentLoaded', function (g){
//     var image = document.getElementById('snake');
//     image.addEventListener('click', function imageClick (g){
//         console.log(image.src)
//         image.src = "file:///C:/Users/GWC11/Documents/website/banned.jpg"
//     })
// })
// document.addEventListener('DOMContentLoaded', function (f){
//     var image = document.getElementById('sadself');
//     image.addEventListener('click', function imageClick (f){
//         console.log(image.src)
//         image.src = "file:///C:/Users/GWC11/Documents/website/sadimageofself.jpg"
//     })
// })

// var image;
// document.addEventListener('DOMContentLoaded', function loaded(event) {
//     image = document.getElementById('sadself');
//     //  image.onclick('c')
//     image.addEventListener('click', function imageClick(e) {
//         console.log("clicking this shit");
//         changePic();
    // })
    // var image = document.getElementById('sadself');
    // image.addEventListener('click', function imageClick(e) {
    //     console.log(image.scr);
    //     image.src = "file:///C:/Users/GWC11/Documents/website/sadimageofself.jpg";
    //     var picOne = "file:///C:/Users/GWC11/Documents/website/sadimageofself.jpg";
    //     var picTwo = "file:///C:/Users/GWC11/Documents/website/othersadimageofself.jpg";
    //     if (document.getElementById("sadself").src == picOne) {
    //         document.getElementById("othersadself").src = picTwo
    //     } else if (document.getElementById("othersadself").src == picTwo){
    //         document.getElementById("sadself").src = picTwo;
    //     }
    // })
// })

// function changePic(){
//     image.src = "file:///C:/Users/GWC11/Documents/website/sadimageofself.jpg";
//     var picOne = "file:///C:/Users/GWC11/Documents/website/sadimageofself.jpg";
//     var picTwo = "file:///C:/Users/GWC11/Documents/website/othersadimageofself.jpg";
//     if (image.src == picOne) {
//         image2.src = picTwo;
//     } else if (image2.src == picTwo){
//         image.src = picTwo;
//     }
// }

/* Set the width of the side navigation to 250px */

document.addEventListener('DOMContentLoaded', function loaded(event){
    console.log("page has loaded.");

    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
    };
    
    /* Set the width of the side navigation to 0 */
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    };
    
    
    var image2 = document.getElementById('sadself');
    
    image2.addEventListener('click', function imageClick(e){
        console.log(image2.src)
        if (image2.src=== 'file:///C:/Users/GWC11/Documents/website/othersadimageofself.jpg'){
            image2.src='file:///C:/Users/GWC11/Documents/website/sadimageofself.jpg';
        }else if (image2.src==='file:///C:/Users/GWC11/Documents/website/sadimageofself.jpg'){
            image2.src='file:///C:/Users/GWC11/Documents/website/othersadimageofself.jpg';
        }   
    });
       
    var image3 = document.getElementById('cat');
    
    image3.addEventListener('click', function imageClick(e){
        console.log(image3.src)
        if (image3.src=== 'file:///C:/Users/GWC11/Documents/website/dumbcat.jpg'){
            image3.src='file:///C:/Users/GWC11/Documents/website/cat.jpg';
        }else if (image3.src==='file:///C:/Users/GWC11/Documents/website/cat.jpg'){
            image3.src='file:///C:/Users/GWC11/Documents/website/dumbcat.jpg';
        }   
    });
       
    var image4 = document.getElementById('snake');
    
    image4.addEventListener('click', function imageClick(e){
        console.log(image4.src)
        if (image4.src=== 'file:///C:/Users/GWC11/Documents/website/banned.jpg'){
            image4.src='file:///C:/Users/GWC11/Documents/website/snakes.jpg';
        }else if (image4.src==='file:///C:/Users/GWC11/Documents/website/snakes.jpg'){
            image4.src='file:///C:/Users/GWC11/Documents/website/banned.jpg';
        }   
    });
       
    var image5 = document.getElementById('catv');
    
    image5.addEventListener('click', function imageClick(e){
        console.log(image5.src)
        if (image5.src=== 'file:///C:/Users/GWC11/Documents/website/digust.jpg'){
            image5.src='file:///C:/Users/GWC11/Documents/website/catpv.jpg';
        }else if (image5.src==='file:///C:/Users/GWC11/Documents/website/catpv.jpg'){
            image5.src='file:///C:/Users/GWC11/Documents/website/digust.jpg';
        }   
    });
});

