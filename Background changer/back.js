const body = document.body;

body.addEventListener("click", changeBgColor);

function changeBgColor(){

    const randomClr = getRandomColour();  //#fffcd4
    body.style.backgroundColor = randomClr;
}

function getRandomColour(){

    const letters = "0123456789ABCDEF";
    let color = "#";

    for(let i =0; i < 6; i++){

        color += letters[Math.floor(Math.random() * 16)];
        console.log(color);
    }


    return color;
}

