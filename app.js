let dropTarget = document.querySelector("#app-wrapper")
let draggables = document.querySelectorAll(".task")

for (let item of draggables) {
    item.addEventListener("dragstart", function (e) {
        e.dataTransfer.setData("srcId", e.target.id)
    });
}

dropTarget.addEventListener("dragover", function (e) {
    e.preventDefault();
});

dropTarget.addEventListener("drop", function (e) {
    e.preventDefault();
    let target = e.target;
    let srcId = e.dataTransfer.getData("srcId");
    let droppable = target.classList.contains("board")

    if (droppable) {
        target.appendChild(document.getElementById(srcId));
    }
});