let gifContainer = document.querySelector(".gif_container")
let text1 = document.querySelector(".text1")
let text2 = document.querySelector(".text2")
let text3 = document.querySelector(".text3")
let btn8 = document.querySelector(".button8");
let screenWidth = window.screen.width;
let screenHeight = window.screen.height;

function preloadImages(images, callback) {
    var loadedImages = 0;
    var numImages = images.length;

    images.forEach(function(src) {
        var img = new Image();
        img.onload = function() {
            loadedImages++;
            if (loadedImages === numImages) {
                callback();
            }
        };
        img.src = src;
    });
}

var imagePaths = [
    "Asset/tenor1.gif",
    "Asset/tenor7.gif",
    "Asset/tenor8.gif",
    "Asset/gifgit03.gif",
    "Asset/tenor9.gif",
    "Asset/gifgit01.gif",
    "Asset/tenor5.gif",
    "Asset/gifgit02.gif"
];

preloadImages(imagePaths, function() {
    console.log("All images preloaded.");
});

if (document.body.scrollHeight > window.innerHeight) {
    document.body.style.overflowY = 'hidden';
}

document.querySelector(".button1").addEventListener("click", () => {   
    gifContainer.innerHTML = ""
    gifContainer.innerHTML = `<img src="Asset/tenor1.gif" alt="" class="cryGif">`
    text1.innerText = "Buddhuuu, peheley thora nakhrey"
    text2.innerText = "dikhana cahiye the nah!!!"
    text3.innerText = "😤"
    document.querySelector(".button1").classList.add("none")
    document.querySelector(".button2").classList.add("none")
})

document.querySelector(".button_final").addEventListener("click", () => {
    var end = Date.now() + (6 * 1000);
    var colors = ['#bb0000', '#ffffff'];

    (function frame() {
        confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
    });
    confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
    });

    if (Date.now() < end) {
    requestAnimationFrame(frame);
  }
}());
setTimeout(() => {
    var duration = 6 * 1000;
    var animationEnd = Date.now() + duration;
    var skew = 1;
    
    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }
    
    (function frame() {
      var timeLeft = animationEnd - Date.now();
      var ticks = Math.max(200, 500 * (timeLeft / duration));
      skew = Math.max(0.8, skew - 0.001);
    
      confetti({
        particleCount: 1,
        startVelocity: 0,
        ticks: ticks,
        origin: {
          x: Math.random(),
          y: (Math.random() * skew) - 0.2
        },
        colors: ['#ffffff'],
        shapes: ['circle'],
        gravity: randomInRange(0.4, 0.6),
        scalar: randomInRange(0.4, 1),
        drift: randomInRange(-0.4, 0.4)
      });
    
      if (timeLeft > 0) {
        requestAnimationFrame(frame);
      }
    }());
}, 1000)

    gifContainer.innerHTML = ""
    gifContainer.innerHTML = `<img src="Asset/tenor7.gif" alt="">`
    setTimeout(() => {
        gifContainer.innerHTML = ""
        gifContainer.innerHTML = `<img src="Asset/tenor10.gif" alt="">`
    }, 2100)
    text1.innerText = "I'm Over the Moon,"
    text2.innerText = " Thank You❤️"
    text3.innerText = ""
    document.querySelector(".button1").classList.add("none")
    document.querySelector(".button2").classList.add("none")
    document.querySelector(".button3").classList.add("none")
    document.querySelector(".button4").classList.add("none")
    document.querySelector(".button5").classList.add("none")
    document.querySelector(".button6").classList.add("none")
    document.querySelector(".button7").classList.add("none")
    document.querySelector(".button_final").classList.add("none")
    document.querySelector(".button8").classList.add("none")
})

document.querySelector(".button2").addEventListener("click", () => {
    document.querySelector(".button1").classList.add("none")
    document.querySelector(".button_final").classList.remove("none")
    gifContainer.innerHTML = ""
    gifContainer.innerHTML = `<img src="Asset/tenor8.gif" alt="" class="cryGif">`
    text1.innerText = "Why don't you love me?"
    text2.innerText = 'Please say "Yes"'
    document.querySelector(".button2").classList.add("none")
    document.querySelector(".button3").classList.remove("none")
})

document.querySelector(".button3").addEventListener("click", () => {
    gifContainer.innerHTML = ""
    gifContainer.innerHTML = `<img src="Asset/gifgit03.gif" alt="">`
    text1.innerText = "Areeh maan jaw nah!"
    text2.innerText = 'Haa bol do...'
    document.querySelector(".button3").classList.add("none")
    document.querySelector(".button4").classList.remove("none")
})

document.querySelector(".button4").addEventListener("click", () => {
    gifContainer.innerHTML = ""
    gifContainer.innerHTML = `<img src="Asset/tenor9.gif" alt="" class="cryGif">`
    text1.innerText = "Ice Cream dilaungi,"
    text2.innerText = ' Chocolate dilaungi'
    document.querySelector(".button4").classList.add("none")
    document.querySelector(".button5").classList.remove("none")
})

document.querySelector(".button5").addEventListener("click", () => {
    gifContainer.innerHTML = ""
    gifContainer.innerHTML = `<img src="Asset/gifgit01.gif" alt="">`
    text1.innerText = "Aur kitna vhaw khayogi,"
    text2.innerText = 'Soch lo acchey se...'
    document.querySelector(".button5").classList.add("none")
    document.querySelector(".button6").classList.remove("none")
})

if (window.innerWidth <= 1080) {
    document.querySelector(".button6").addEventListener("click", () => {
        document.querySelector(".button6").classList.add("none")
        document.querySelector(".button7").classList.remove("none")
        
        gifContainer.innerHTML = ""
        gifContainer.innerHTML = `<img src="Asset/tenor5.gif" alt="" class="cryGif">`
        text1.innerText = "Ek aur bar soch lo,"
        text2.innerText = 'Yaar maan jaw nah!!!'
    })
} else {
    document.querySelector(".button6").addEventListener("click", () => {
        gifContainer.innerHTML = ""
        gifContainer.innerHTML = `<img src="Asset/tenor5.gif" alt="" class="cryGif">`
        text1.innerText = "Ek aur bar soch lo,"
        text2.innerText = 'Yaar maan jaw nah!!!'
        document.querySelector(".button6").classList.add("none")
        document.querySelector(".button7").classList.remove("none")
    })
}


document.querySelector(".button7").addEventListener("click", () => {
    gifContainer.innerHTML = ""
    gifContainer.innerHTML = `<img src="Asset/gifgit02.gif" alt="" class="angry">`
    text1.innerText = "Baas aab or nhi, apna final"
    text2.innerText = 'decision de do, Yes or No!!!'
    document.querySelector(".button7").classList.add("none")
    document.querySelector(".button10").classList.remove("none")
})

let isClicked = false;

document.querySelector(".button10").addEventListener("click", () => {
    isClicked = true;
    document.querySelector(".button10").classList.add("none");
    document.querySelector(".button9").classList.remove("none");
    document.querySelector(".button8").classList.remove("none");
    document.querySelector(".button8").classList.add("absolute");
    document.querySelector(".button9").classList.remove("none");
    document.querySelector(".button9").classList.add("visibility");
    document.querySelector(".button8").classList.add("phudo");
    document.querySelector(".button11").classList.add("none");
});

document.querySelector(".button10").addEventListener("mouseout", () => {
    if (!isClicked) {
        document.querySelector(".button11").classList.remove("none");
        document.querySelector(".button10").classList.add("none");
    }
});

document.querySelector(".button10").addEventListener("mouseover", () => {
    isClicked = false;
});

document.querySelector(".button11").addEventListener("mouseover", () => {
    document.querySelector(".button11").classList.add("none")
    document.querySelector(".button8").classList.remove("none")
    document.querySelector(".button8").classList.add("absolute")
    document.querySelector(".button8").classList.add("phudo")
    document.querySelector(".button9").classList.remove("none")
    document.querySelector(".button9").classList.add("visibility")
    let randomTop = Math.floor(Math.random() * screenHeight) + 1;
    let randomLeft = Math.floor(Math.random() * screenWidth) + 1;
    let topParcentage = (randomTop / screenHeight) * 95;
    let leftParcentage = (randomLeft / screenWidth) * 100;

    if(topParcentage < 5){
        topParcentage = 5
    }
    if(leftParcentage < 10){
        leftParcentage = 10
    }
    if(leftParcentage > 82){
        leftParcentage = 92
    }
    btn8.style.top = `${topParcentage - 5}%`;
    btn8.style.left = `${leftParcentage - 10}%`;
})
document.querySelector(".button8").addEventListener("click", () => {
    document.querySelector(".button8").classList.add("absolute")   
    document.querySelector(".button8").classList.add("absolute")
    document.querySelector(".button8").classList.add("phudo")
    let randomTop = Math.floor(Math.random() * screenHeight) + 1;
    let randomLeft = Math.floor(Math.random() * screenWidth) + 1;
    let topParcentage = (randomTop / screenHeight) * 95;
    let leftParcentage = (randomLeft / screenWidth) * 100;

    if(topParcentage < 5){
        topParcentage = 5
    }
    if(leftParcentage < 10){
        leftParcentage = 10
    }
    if(leftParcentage > 82){
        leftParcentage = 92
    }
    btn8.style.top = `${topParcentage - 5}%`;
    btn8.style.left = `${leftParcentage - 10}%`;
})

document.querySelector(".button8").addEventListener("mouseover", () => {
    document.querySelector(".button8").classList.add("absolute")
    document.querySelector(".button9").classList.remove("none")
    document.querySelector(".button9").classList.add("visibility")
    document.querySelector(".button8").classList.add("absolute")
    document.querySelector(".button8").classList.add("phudo")
    let randomTop = Math.floor(Math.random() * screenHeight) + 1;
    let randomLeft = Math.floor(Math.random() * screenWidth) + 1;
    let topParcentage = (randomTop / screenHeight) * 95;
    let leftParcentage = (randomLeft / screenWidth) * 100;

    if(topParcentage < 5){
        topParcentage = 5
    }
    if(leftParcentage < 10){
        leftParcentage = 10
    }
    if(leftParcentage > 82){
        leftParcentage = 92
    }
    btn8.style.top = `${topParcentage - 5}%`;
    btn8.style.left = `${leftParcentage - 10}%`;
})


document.querySelector(".spn").addEventListener("click", () => {
    document.querySelector(".button8").classList.add("absolute")
    document.querySelector(".button9").classList.remove("none")
    document.querySelector(".button9").classList.add("visibility")
    document.querySelector(".button8").classList.add("absolute")
    document.querySelector(".button8").classList.add("phudo")
    let randomTop = Math.floor(Math.random() * screenHeight) + 1;
    let randomLeft = Math.floor(Math.random() * screenWidth) + 1;
    let topParcentage = (randomTop / screenHeight) * 95;
    let leftParcentage = (randomLeft / screenWidth) * 100;

    if(topParcentage < 5){
        topParcentage = 5
    }
    if(leftParcentage < 10){
        leftParcentage = 10
    }
    if(leftParcentage > 82){
        leftParcentage = 92
    }
    btn8.style.top = `${topParcentage - 5}%`;
    btn8.style.left = `${leftParcentage - 10}%`;
})

document.querySelector(".spn").addEventListener("mouseover", () => {
    document.querySelector(".button8").classList.add("absolute")
    document.querySelector(".button9").classList.remove("none")
    document.querySelector(".button9").classList.add("visibility")
    document.querySelector(".button8").classList.add("absolute")
    document.querySelector(".button8").classList.add("phudo")
    let randomTop = Math.floor(Math.random() * screenHeight) + 1;
    let randomLeft = Math.floor(Math.random() * screenWidth) + 1;
    let topParcentage = (randomTop / screenHeight) * 95;
    let leftParcentage = (randomLeft / screenWidth) * 100;

    if(topParcentage < 5){
        topParcentage = 5
    }
    if(leftParcentage < 10){
        leftParcentage = 10
    }
    if(leftParcentage > 82){
        leftParcentage = 92
    }
    btn8.style.top = `${topParcentage - 5}%`;
    btn8.style.left = `${leftParcentage - 10}%`;
})