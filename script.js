
function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });



    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
locomotiveAnimation()


document.addEventListener("mousemove", (e) => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

var crsr = document.querySelector("#cursor")
var allImages = document.querySelectorAll(".card-img")
var text = ""
allImages.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        text = elem.getAttribute("data-text")
        gsap.to(crsr,{
            width: "150px",
            borderRadius: "25px"
        })
        crsr.innerHTML = `<h5>${text}</h5> <h5>${text}</h5> <h5>${text}</h5>`
        gsap.from("#cursor h5", {
            opacity: 1,
        })
    })
    elem.addEventListener("mouseleave", function(){
        crsr.innerHTML = "</h5> <h5/>",
        gsap.to(crsr, {
            width: "24px",
        })
    })
})

var roti = 0
document.addEventListener("wheel",function(dets){
    if(dets.deltaY>0){
        roti += 1000
        gsap.to("#bottomright .bottom",{
            transform:`rotate(${roti}deg)`
        })
    }else{
        roti -= 1000
        gsap.to("#bottomright .bottom",{
            transform:`rotate(${roti}deg)`
        })
    }
})

gsap.from('#page1 h1', {
    y: 200,
    opacity: 0,
    delay: 0.5,
    duration: 0.8
})
var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page2",
        scroller: "#main",
        // markers:true,
        start: "top 50%",
        end: "top -10%",
        scrub: 2
    }
})
function breakTheText() {
    var h1 = document.querySelector("#page2 h3")
    var h1Text = h1.textContent
    var splittedText = h1Text.split(" ")
    console.log(splittedText)
    var clutter = ""
    splittedText.forEach(function (elem) {
        clutter += `<span class="a">${elem} </span>`
    })
    h1.innerHTML = clutter
}
breakTheText()
tl2.from("#page2 h4", {
    x:100,
    opacity:0,
    duration:5
},"shyam")
tl2.from(".a",{
    opacity:0,
    duration:1,
    stagger:0.4
},"shyam")
tl2.from("#page2 .but",{
    x:-200,
    opacity:0,
    duration:1
})
var spot = document.querySelector(".spot")
document.querySelector(".but").addEventListener('mouseenter', function () {
    document.querySelector(".but .txt").style.zIndex = 10,
    // document.querySelector(".but .txt")
    gsap.to(spot, {
        scale: 30,
        opacity: 1,
        duration:0.3
    });
});
document.querySelector(".but").addEventListener('mouseleave', function () {
    gsap.to(spot, {
        scale: 1,
        duration:0.5
    });
});

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page3",
        scroller: "#main",
        // markers:true,
        start: "top -60%",
        end: "top 15%",
        scrub: 2
    }
})
gsap.to("#page3 h1",{
    y:-200,
    opacity:0.6,
    mixBlendMode:"difference",
    duration:0.8,
    repeat:Infinity,
    yoyo:true
})
var image = document.querySelector(".card")
image.style.transform = `scale(${1 + 0.1 * 0.5})`;

var tl4 = gsap.timeline({
    scrollTrigger:{
        trigger:".card-container",
        scroller:"#main",
        // markers:true,
        start:"top 40%",
        end:"top -50%",
        scrub:2
    }   
})
tl4.from(".card.line1.left",{
    x:-300,
    opacity:0,
    duration:2,
    stagger:0.1
},"shri ram")
tl4.from(".card.line1.right",{
    x:300,
    opacity:0,
    duration:2
},"shri ram")
tl4.from(".card.line2.left",{
    x:-300,
    opacity:0,
    duration:2
},"ram")
tl4.from(".card.line2.right",{
    x:300,
    opacity:0,
    duration:2
},"ram")

var tl5 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page5",
        scroller:"#main",
        // markers:true,
        start:"top 80%",
        end:"top 20%",
        scrub:2
    }   
})
tl5.from("#page5 p",{
    x:-300,
    opacity:0,
    duration:2
},"shyam")
tl5.from("#page5 .button",{
    y:200,
    duration:2
},"shyam")
var sot = document.querySelector(".spoting")
document.querySelector(".button").addEventListener('mouseenter', function () {
    document.querySelector(".button .text").style.zIndex = 10,
    // document.querySelector(".but .txt")
    gsap.to(sot, {
        scale: 31,
        opacity: 1,
        duration:0.3
    });
});
document.querySelector(".button").addEventListener('mouseleave', function () {
    gsap.to(sot, {
        scale: 1,
        duration:0.5
    });
});


var initialPath = `M 10 100 Q 500 100 1500 100`
var finalPath = `M 10 100 Q 500 100 1500 100`
var string = document.querySelector('#string')
string.addEventListener('mousemove', function(dets){
    path = `M 10 100 Q ${dets.x} ${dets.y} 1500 100`
    gsap.to(".svg path",{
        attr:{d:path},  
        // marker:true,
        end:"top 260px",
        duration:0.2,
        ease:"power3.out"
    })
})
string.addEventListener('mouseleave', function(dets){
    gsap.to(".svg path",{
        attr:{d:finalPath},
        duration:1.5,
        ease:"elastic.out(1,0.1)"
    })
})

var elementContainer = document.querySelector("#element-container")

    elementContainer.addEventListener("mouseenter", function () {
        gsap.to("#moving-image", {
            opacity: 1,
            display: "inline"
        })
    })

    elementContainer.addEventListener("mouseleave", function () {
        gsap.to("#moving-image", {
            opacity: 0,
            display: "none"
        })
    })

    var allElements = document.querySelectorAll(".element")
    var movingImageDiv = document.querySelector("#moving-image")
    var moveImg = document.querySelector("#moving-image img")


    allElements.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            let image = elem.getAttribute("data-image")
            gsap.to(moveImg, {
                attr: { src: image },
            })
        })
        elementContainer.addEventListener("mousemove", function (dets) {
            gsap.to("#moving-image", {
                left: `${dets.x - elementContainer.getBoundingClientRect().x}`,
                top: `${dets.y - elementContainer.getBoundingClientRect().y}`,
                duration: 3,
                ease: "power1.out"
            })

        })
    })

var tl6 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page6",
        scroller:"#main",
        // markers:true,
        start:"top 80%",
        end:"top 20%",
        scrub:2
    }   
})
tl6.from("#page6 h1",{
    y:-300,
    opacity:0,
    duration:2
})

var tl6 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page7",
        scroller:"#main",
        // markers:true,
        start:"top 80%",
        end:"top 20%",
        scrub:2
    }   
})
tl6.from("#page7 .elem",{
    x:-300,
    opacity:0,
    duration:2,
    stagger:1
})
tl5.from("#page7 .bun",{
    y:200,
    duration:2
})
var sott = document.querySelector(".spun")
document.querySelector(".bun").addEventListener('mouseenter', function () {
    document.querySelector(".bun .tun").style.zIndex = 11,
    document.querySelector(".bun .tun").style.color = "white"
    gsap.to(sott, {
        scale: 31,
        opacity: 1,
        duration:0.3
    });
});
document.querySelector(".bun").addEventListener('mouseleave', function () {
    document.querySelector(".bun .tun").style.color = "black"
    gsap.to(sott, {
        scale: 1,
        duration:0.5
    });
});
window.addEventListener("wheel", function(dets){
    if(dets.deltaY>0){
        gsap.to(".marque",{
            transform:'translateX(-200%)',
            duration:4,
            repeat:-1,
            ease:"none"
        })
        gsap.to(".marque img",{
            rotate:180,
            duration:0.5
        })
    }
    else{
        gsap.to(".marque",{
            transform:'translateX(0%)',
            duration:4,
            repeat:-1,
            ease:"none"
        })
        gsap.to(".marque img",{
            rotate:0,
            duration:0.5
        })
    }
})
