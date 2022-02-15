// 1.Circle Move
var tl = gsap.timeline({repeat: -1, repeatDelay: 0});//create timeline
tl.to(".c1", {x: 200, y: 200, duration: 2, ease: "none"});//one move
tl.to(".c1", {x: 1000, y: 0, duration: 4, ease: "none"});//two move
tl.to(".c1", {x: 0, y: 0, duration: 4, ease: "none"});//three move

// 2.Circle Move
var tl = gsap.timeline({repeat: -1, repeatDelay: 0});//create timeline
tl.to(".c2", {x: -1000, y: -300, duration: 4, ease: "none"});//one move
tl.to(".c2", {x: 0, y: 0, duration: 4, ease: "none"});//two move