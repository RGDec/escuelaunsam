function agregarTarea(){
    let input = document.getElementById("nuevaTarea");
    let ul = document.getElementById("listaTareas");
    let li = "<li>" + input.value + "</li>";
    ul.innerHTML += li;
    input.value = "";
}

function eliminarTarea(event){
    if (event.target.tagName === "LI"){
        event.target.remove();
    }
}