let rect = document.querySelector("#center");

rect.addEventListener("mousemove", function (details) {
    let rectlocation = rect.getBoundingClientRect();
    let insiderectval = details.clientX - rectlocation.left;

    if (insiderectval < rectlocation.width / 2) {
       let redcolor = gsap.utils.mapRange(0, rectlocation.width/2, 255, 0, insiderectval);
       gsap.to(rect, {
        backgroundColor: `rgb(${redcolor}, 0, 0)`,
        ease : Power4,
       })

    } else {
        let bluecolor = gsap.utils.mapRange(rectlocation.width/2, rectlocation.width, 0, 255, insiderectval);
       gsap.to(rect, {
        backgroundColor: `rgb(0, 0, ${bluecolor})`,
        ease : Power4,
       })
    }
});


