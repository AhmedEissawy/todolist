
const input = document.querySelector("input");
const form = document.querySelector("form");
const container = document.getElementById("container");


container.addEventListener("click", (eo) => {
    switch (eo.target.className) {
        case "icon-bin icon":
            eo.target.parentElement.parentElement.remove()
            break;

        case "icon-smile icon":
            {
                eo.target.classList.add("dn");

                const heart = `<span class="icon-heart"> </span>`;




                eo.target.parentElement.parentElement.getElementByClassName("task-text")[0].classList.add("finish");
                eo.target.parentElement.innerHTML += heart;

            }
            break;

        case "icon-heart":
            {
                eo.target.parentElement.parentElement.getElementByClassName("task-text")[0].classList.remove("finish");
                eo.target.classList.add("dn");
                const addAngry = ` <span class="icon-smile icon "></span>`
                eo.target.parentElement.innerHTML += addAngry;
            }

            break;

        case "icon-svg icon":
            {
                eo.target.classList.add("orange");
                container.prepend(eo.target.parentElement);

            }

            break;

        case "icon-svg icon orange":
            {
                eo.target.classList.remove("orange")
            }

            break;

        default:
            break;
    }


});

form.addEventListener("submit", (eo) => {
    eo.preventDefault();
    const task = `   <div class="task">
    <span class="icon-svg icon"></span>
    <p class="task-text">
        ${input.value}
    </p>
    <div>
        <span class="icon-bin icon"></span>

        <span class="icon-smile icon"></span>
    </div>

</div>`
    container.innerHTML += task;


    input.value = ""

});