function throttle(fn, delay) {
    let lastTime = 0;
    return function (...args) {
        let now = Date.now();
        if (now - lastTime >= delay) {
            fn.apply(this, args);
            lastTime = now;
        }
    };
}

document.querySelector("#center")
.addEventListener("mousemove", throttle((dets) => {
    var div = document.createElement("div");
    div.classList.add('imagediv');
    div.style.left = dets.clientX + 'px';
    div.style.top = dets.clientY + 'px';

    var img = document.createElement("img");
    img.setAttribute("src", "https://images.unsplash.com/photo-1624239408355-7b06ee576e95?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    div.appendChild(img);

    document.body.appendChild(div);

    gsap.to(img,{
        y: "0",
        ease: Power1,
        duration: .2
    });

    gsap.to(img,{
        y: "100%",
        delay: .6,
        ease: Power2
    });

    setTimeout(function(){
        div.remove()
    },2000)
}, 400))