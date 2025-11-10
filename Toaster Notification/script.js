function createToaster(config) {
    return function (str) {
        let div = document.createElement("div");
        div.textContent = str;

        div.className = "toaster"

        if (config.theme === "dark") {
            div.classList.add("toaster-dark")
        } else {
            div.classList.add("toaster-light")
        }


        let parent = document.querySelector(".parent")
        parent.appendChild(div);

        parent.className = `parent ${config.positionX === "right" ? "right-5" : "left-5"} ${config.positionY === "top" ? "top-5" : "bottom-5"}`;


        setTimeout(() => {
            parent.removeChild(div)
        }, config.duration * 1000)
    }
}

let toaster = createToaster({
    positionX: "right",
    positionY: "top",
    theme: "light",
    duration: 3,
});


toaster("dowload done")