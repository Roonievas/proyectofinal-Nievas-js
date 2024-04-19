
function agregarTarea() {
    const nuevaTareaInput = document.getElementById("nuevaTarea");
    const nuevaTarea = nuevaTareaInput.value.trim();

    if (nuevaTarea !== "") {

        const tareasGuardadas = JSON.parse(localStorage.getItem("tareas")) || [];
        const nuevaTareaObj = { tarea: nuevaTarea, completada: false };

        tareasGuardadas.push(nuevaTareaObj);

        localStorage.setItem("tareas", JSON.stringify(tareasGuardadas));

        nuevaTareaInput.value = "";
        mostrarTareas();
    }

}

function completarTarea(index, estado) {
    const tareasGuardadas = JSON.parse(localStorage.getItem("tareas"));
    tareasGuardadas[index].completada = estado;

    localStorage.setItem("tareas", JSON.stringify(tareasGuardadas));
    mostrarTareas();
}


function eliminarTarea(index) {
    const tareasGuardadas = JSON.parse(localStorage.getItem("tareas"));
    tareasGuardadas.splice(index, 1);

    localStorage.setItem("tareas", JSON.stringify(tareasGuardadas));

    mostrarTareas();
}

mostrarTareas();