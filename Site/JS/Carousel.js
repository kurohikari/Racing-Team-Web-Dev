function next() {
    for(i=0; i<document.querySelectorAll(".img-container").length; i++){
        if(document.querySelectorAll(".img-container")[i].classList.contains("active")) {
            document.querySelectorAll(".img-container")[i].classList.add("next");
            document.querySelectorAll(".img-container")[(i+1)%3].classList.add("nextLeft");
            document.querySelector(".carousel-dot-container > .current").classList.remove("current");
            document.querySelectorAll(".carousel-dot-container > div")[(i+1)%3].classList.add("current");
            break;
        }
    }
    stop();
    window.setTimeout(nextEnd, 1050);
}

function prev() {
    for(i=0; i<document.querySelectorAll(".img-container").length; i++){
            if(document.querySelectorAll(".img-container")[i].classList.contains("active")) {
                document.querySelectorAll(".img-container")[i].classList.add("prev");
                document.querySelectorAll(".img-container")[(i+2)%3].classList.add("prevRight");
                document.querySelector(".carousel-dot-container > .current").classList.remove("current");
                document.querySelectorAll(".carousel-dot-container > div")[(i+2)%3].classList.add("current");
                break;
            }
        }
        stop();
        window.setTimeout(prevEnd, 1050);
}

function nextEnd() {
    document.querySelector(".img-container.next").classList.remove("next", "active");
    document.querySelector(".nextLeft").classList.add("active");
    document.querySelector(".nextLeft").classList.remove("nextLeft");
    start();
}

function prevEnd() {
    document.querySelector(".img-container.prev").classList.remove("active", "prev");
    document.querySelector(".img-container.prevRight").classList.add("active");
    document.querySelector(".img-container.prevRight").classList.remove("prevRight");
    start();
}

function switchImg(index) {
    for(i = 0; i<document.querySelectorAll(".carousel-dot-container > div").length; i++) {
        if(document.querySelectorAll(".carousel-dot-container > div")[i].classList.contains("current") && i != index
                && document.querySelector(".carousel-dot-container").classList.contains("avail")) {
            document.querySelector(".carousel-dot-container > .current").classList.remove("current");
            document.querySelectorAll(".carousel-dot-container > div")[index].classList.add("current");
            if(i!=(index+2)%3) {
                prev();
            } else {
                next();
            }
        }
    }
 }

 function start() {
    document.getElementById("carouselNext").onclick = next;
    document.getElementById("carouselPrev").onclick = prev;
    document.querySelector(".carousel-dot-container").classList.add("avail")
 }

 function stop() {
    document.getElementById("carouselNext").onclick = function () {return false;};
    document.getElementById("carouselPrev").onclick = function () {return false;};
    document.querySelector(".carousel-dot-container").classList.remove("avail")
 }