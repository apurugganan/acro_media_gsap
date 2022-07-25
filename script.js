// CONTAINER 
gsap.set(".container", {
  css:{
    backgroundImage:'url(./assets/bg01.jpg)',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "800px",
    width: "950px",
    objectFit: "cover",
    position:"relative",
    overflow: "hidden",
    
  }
});

// POSITIONS: SWIRLS 
gsap.set("#blueSwirl", {
  css:{
   position: "absolute",
   x: "80%",
   y: "-10%"
  }
});
gsap.set("#yellowSwirl", {
  css:{
    position: "absolute",
    x: "-10%",
    y: "45%"
  }
});
gsap.set("#greenSwirl", {
  css:{
    position: "absolute",
    x: "80%",
    y: "75%"
  }
});

// POSITIONS: REFRESHING TEXT
gsap.set("#refreshing-01", {
  css:{
    position: "absolute",
    x: "30%",
    y: "5%"
  }
});
gsap.set("#refreshing-02", {
  css:{
    position: "absolute",
    x: "30%",
    y: "25%"
  }
});
gsap.set("#refreshing-03", {
  css:{
    position: "absolute",
    x: "30%",
    y: "45%"
  }
});
gsap.set("#refreshing-04", {
  css:{
    position: "absolute",
    x: "30%",
    y: "65%"
  }
});

// POSITIONS: JUICEBOX
gsap.set("#juicebox", {
  css:{
    position: "absolute",
    x: "200%",
    y: "35%"
  }
});

// POSITIONS: TEXTS
gsap.set(".texts", {
  css:{
    position: "absolute",
    x: "35%",
    y: "35%"
  }
});

// POSITIONS: LOGO
gsap.set("#logo", {
  css:{
    position: "absolute",
    x: "35%",
    y: "35%"
  }
});

// ANIMATION: LOOP
gsap.to(".swirl", 40, {rotation:"360", ease:Linear.easeNone, repeat:-1});
gsap.to("#blueSwirl", 60, { rotation:"-360", ease:Linear.easeNone, repeat:-1});

// ANIMATION: SEQUENCED
const timeline = gsap.timeline();

// FADEIN REFRESHING TEXTS
timeline.from(".refreshing", {
  duration: 1, 
  opacity: 0, 
  delay: 1, 
  stagger: 0.25
})

// JUICEBOX SEQUENCE | Without CustomWiggle (Club perk)
timeline
  .to("#juicebox", {duration: .2, x: "40%"})
  .to("#juicebox", {scale: 1.15}) 
  .to("#juicebox", 0.25,{rotation:"5", ease:Linear.easeNone})
  .to("#juicebox", 0.15,{rotation:"-5", ease:Linear.easeNone})
  .to("#juicebox", 0.15,{rotation:"5", ease:Linear.easeNone})
  .to("#juicebox", 0.15,{rotation:"-5", ease:Linear.easeNone})
  .to("#juicebox", {scale: 1})
  .to("#juicebox", {duration: .2, x: "10%"}
)

// FADOUT REFRESHING TEXTS
timeline.to(".refreshing", {
  duration: 1, 
  opacity: 0, 
  stagger: 0.25
  }, "-=1.25"
)

// ENTER SERIES-OF-TEXTS
timeline
  .from("#new", {duration: 0.2, y: "-200%"})
  .from("#flavours", {duration: 0.2, x: "200%"})
  .from("#instores", {duration: 0.2, y: "200%"})
  .from("#now", {duration: 0.2, x: "200%"})

// FADOUT JUICEPACK AND SERIES-OF-TEXTS
timeline.to(".bundle", 1, {delay: 1, opacity: 0})

// FADEIN FRUIT CRUSH
timeline.from("#logo", 1, { opacity: 0})





