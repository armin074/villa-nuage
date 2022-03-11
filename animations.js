
    const tl = gsap.timeline()
    const first = document.querySelector('.first')
    tl.to(first, {clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'})
    
    .from(".home-text", {duration:1.5, skewY: 20, opacity: 0, stagger: 1, y:150})
//
    let tll = gsap.timeline({
        scrollTrigger: {
            trigger: '.about',
            start: "top center"
        }
    });
    tll.to(".about",{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'})
    
    //
    let tl1 = gsap.timeline({
        scrollTrigger: {
            trigger: '.second',
            start: "top center"
        }
    })
    tl1.from(".second h2",{ skewY: 15, duration: 1.2, opacity: 0,y:100})
        .from(".second p",{skewY:10, duration: 1.2, opacity: 0,y:100},"-=0.5")
        .from(".second span",{skewY:10, duration: 1.2, opacity: 0,x:100},"-=1")
        .from(".second-1 p",{skewY:10, duration: 1.2, opacity: 0,y:100})

    //


    //
    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: '.img-anim',
            start: "top top"
        }
    });
    tl2.to(".img-anim", { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', ease: 'elastic'})
        .from(".third p",{
            skewY:10, duration: .8, opacity: 0,y:100
        })
       

    //
    let tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: '.bedrooms',
            start: "top center"
        }
    });

    tl3.from(".bedrooms h2",{ skewY: 15, duration: 1.2, opacity: 0,y:100})
       .from(".bedrooms p", { skewY: 15, duration: 1.2, opacity: 0,y:100},"-=.3")
       .from(".bedrooms span",{skewY:10, duration: 1.2, opacity: 0,x:100},"-=.7") 
    
    
       




       
            