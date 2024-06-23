function loadingAnimation(){
    


var t1=gsap.timeline()
t1.from(".line h1",{
    y:150,
    stagger:0.25,
    duration:0.6,
    delay:0.5
})
t1.from("#line1-part1",{
    opacity:0,
    onStart:function(){
        let h5timer=document.querySelector("#line1-part1 h5");

let grow=0;
setInterval(()=>{
 if(grow<100){
    h5timer.innerHTML=grow++;
 }else{
    h5timer.innerHTML=grow;

 }
},30)
    }


})
t1.from(".hero h1",{
    y:100,
    stagger:0.25,
    duration:0.3,
    delay:0.2
})
t1.to(".line h2",{
    animation:"anime",
    opacity:1
})
t1.to("#loader",{
    opacity:0,
    duration:0.4,
    delay:3
})
t1.from("#page1",{
 y:1200,
 delay:0.2,
 opacity:0
})
t1.to("#loader",{
    display:"none"
})
}
loadingAnimation()