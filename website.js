
document.addEventListener('DOMContentLoaded', function (e){
    console.log("its loaded");
    var image = document.getElementById('cat');
    image.addEventListener('click', function imageClick (e){
        console.log("I just clicked on the snake image")
        console.log(image.src)
        image.src = "file:///C:/Users/GWC11/Documents/website/dumbcat.jpg"
    })
})
document.addEventListener('DOMContentLoaded', function (f){
    var image = document.getElementById('catv');
    image.addEventListener('click', function imageClick (f){
        console.log(image.src)
        image.src = "file:///C:/Users/GWC11/Documents/website/digust.jpg"
    })
})
document.addEventListener('DOMContentLoaded', function (g){
    var image = document.getElementById('snake');
    image.addEventListener('click', function imageClick (g){
        console.log(image.src)
        image.src = "file:///C:/Users/GWC11/Documents/website/banned.jpg"
    })
})
document.addEventListener('DOMContentLoaded', function (f){
    var image = document.getElementById('sadself');
    image.addEventListener('click', function imageClick (f){
        console.log(image.src)
        image.src = "file:///C:/Users/GWC11/Documents/website/sadimageofself.jpg"
    })
})
document.addEventListener('DOMContentLoaded', function loaded (event)
{
    console.log("I'm Loaded!");
    var image = document.getElementById('Image');
    image.addEventListener('click', function imageClick (e)
    {
        console.log("I just clicked on the sandwich iamge.")
        console.log(image.scr)
        image.src = "file:///C:/Users/GWC11/Documents/website/sadimageofself.jpg"
        if (document.getElementById("Image").src == "file:///C:/Users/GWC11/Documents/website/sadimageofself.jpg") 
        {
            document.getElementById("Image").src = "file:///C:/Users/GWC11/Documents/website/othersadimageofself.jpg";
        }
        else 
        {
            document.getElementById("Image").src = "https://media-cdn.tripadvisor.com/media/photo-s/09/6c/42/7a/homemade-soups-and-sandwiches.jpg";
        }
    })
})


