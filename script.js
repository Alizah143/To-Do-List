let input = document.getElementById("search")
let main = document.getElementById("main")

function Tasks(){
    if (input.value === '' ) {
        alert("Queen Please add something!")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML =  input.value
        main.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "X"
        li.appendChild(span)
       }
       main.value = ""
           saveData()
}
main.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("complete")
        saveData()
        }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
    },false)

    function saveData() {
        localStorage.setItem("data",main.innerHTML)
    }

    function showTask(){
        main.innerHTML = localStorage.getItem("data")
    }



showTask()

saveData()

Tasks()
console.log(input)