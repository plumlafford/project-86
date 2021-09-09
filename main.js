var canvas = new fabric.Canvas('myCanvas');
var x = document.getElementById("myAudio");

function new_image()
{
    fabric.Image.fromURL('https://i.pinimg.com/originals/4f/b9/96/4fb996524beabfa60c7ca4394057bbc9.gif', function(Img) {
        block_image_object.scaleToWidth(700);
        block_image_object.scaleToHeight(510);
        block_image_object.set({
            top:0,
            left:0
        });
        canvas.add(block_image_object);
    })
}

function playSound()
{
    x.play();
}