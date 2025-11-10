let form = document.querySelector("form");
let inp = document.querySelector("form input");
let add_btn = document.querySelector(".add-btn");
let taskcard = document.querySelector(".taskcard");
let ul = document.querySelector(".card ul");


form.addEventListener("submit", function (e) {
    e.preventDefault();
});

add_btn.addEventListener("click", function () {
    if (inp.value.trim() === "") return

    let li = document.createElement("li")

    let taskText = document.createElement("span");
    taskText.textContent = inp.value;

    let delBtn = document.createElement("button")
    delBtn.textContent = "Delete"
    delBtn.classList.add("delete-btn");


    delBtn.addEventListener("click", function () {
        li.remove();
        if (ul.children.length === 0) {
            taskcard.classList.add("hidden")
        }
    })

    let editBtn = document.createElement("button")
    editBtn.textContent = "Edit"
    editBtn.classList.add("edit-btn");


    editBtn.addEventListener("click", function () {
        let newtext = prompt("  Enter Your Task: ", taskText.textContent)
        if (newtext) {
            taskText.textContent = newtext
        }
    });

    li.appendChild(taskText);
    li.appendChild(delBtn);
    li.appendChild(editBtn);
    ul.appendChild(li);

    taskcard.classList.remove("hidden")
    inp.value = ""

})