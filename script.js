// gsap.from("#li-one",{
//     opacity:0,
//     y:30,
//     duration:2,
//     delay:1
// })
gsap.from("ul li",{
    opacity:0,
    y:-30,
    duration:0.33,
    delay:1,
    stagger : 1
})
gsap.from(".right",{
    opacity:0,
    duration:2,
    delay:1
})
gsap.from(".placeholder p",{
    opacity:0,
    duration:2.5,
    delay:5,


})
gsap.from(".left",{
    opacity:0,
    duration:2,
    delay:5,
    x:50
})
gsap.from(".biggerBox p",{
    opacity:0,
    duration:2,
    delay:1,
    scrollTrigger:".biggerBox p"
})
gsap.from(".biggerBox .box-1",{
    opacity : 0,
    duration:2,
    delay:1,
    scale:0,
    rotate:360,
    stagger:0.3,
    scrollTrigger:".biggerBox .box-1"
})
gsap.from(".quote p",{
    opacity:0,
    duration:2,
    delay:1,
    x:100,
    scrollTrigger:".quote p"
})
gsap.from(".quote span",{
    opacity:0,
    // x:100,
    duration:2,
    delay:3,
    scrollTrigger:".quote span"
})

gsap.from(".signUp",{
    opacity:0,
    duration:2,
    y:100,
    delay:1,
    scrollTrigger:".signUp"
})