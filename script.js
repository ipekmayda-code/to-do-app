function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value

    if(task === "") return

    let li = document.createElement("li")
    li.innerText = task

    //göreve tıklanınca tamamlandı
    li.onclick = function() {
    li.classList.toggle("done")
}

// silme butonu
let deleteBtn = document.createElement("button")
deleteBtn.innerText = "x"

deleteBtn.onclick = function() {
    li.remove()
}

li.appendChild(deleteBtn)

document.getElementById("taskList").appendChild(li)

input.value = ""

}

document.getElementById("taskInput").addEventListener("keypress", function(event) {

    if(event.key === "Enter") {
        addTask()
}

})

function toggleMode(){
document.body.classList.toggle("dark")

let btn = document.getElementById("modeBtn")

if(document.body.classList.contains("dark")){
btn.innerText = "☀️"
}else{
btn.innerText = "🌙"
}


}

