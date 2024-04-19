const $submit = document.getElementById("submit"),
    $password = document.getElementById("password"),
    $username = document.getElementById("username"),
    $visible = document.getElementById("visible");

document.addEventListener("change", (e) => {
    if (e.target === $visible) {
        if ($visible.checked === false) $password.type = "password";
        else $password.type = "text";
    }
})

document.addEventListener("click", (e) => {
    if (e.target === $submit) {
        if ($password.value !== "" && $username.value !== "") {
            e.preventDefault();
            window.location.href = "tareas.html";
        }
    }
})



function mostrarTareas() {

    const tareasGuardadas = JSON.parse(localStorage.getItem("tareas")) || [];
    const tareasPendientesUl = document.getElementById("tareasPendientes");
    const tareasCompletadasUl = document.getElementById("tareasCompletadas");

    tareasPendientesUl.innerHTML = "";
    tareasCompletadasUl.innerHTML = "";

    tareasGuardadas.forEach((tarea, index) => {
        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = tarea.completada;

        checkbox.onchange = () => completarTarea(index, !tarea.completada);

        const label = document.createElement("label")
        label.textContent = tarea.tarea;

        const elimnarBtn = document.createElement("button");
        elimnarBtn.textContent = "Eliminar";
        elimnarBtn.onclick = () => eliminarTarea(index);

        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(elimnarBtn);

        if (tarea.completada) {
            tareasCompletadasUl.appendChild(li);
        } else {
            tareasPendientesUl.appendChild(li);
        }



    });


}



// USUARIOS CONTENTOS CON NUESTRA WEB
const boton = document.querySelector("#boton");
const foto = document.querySelector("#foto");
const nombre = document.querySelector("#nombre");
const correo = document.querySelector("#correo");
const telefono = document.querySelector("#telefono");


const generarUsuario = async () => {
    try {
        const url = 'https://randomuser.me/api/';
        const respuesta = await fetch(url)
        const { results } = await respuesta.json()
        const datos = results[0]

        console.log(datos)
        foto.src = datos.picture.medium;
        nombre.textContent = datos.name.first
        correo.textContent = datos.email
        telefono.textContent = datos.cell

    } catch (error) {
        console.log(error)
    }
}

boton.addEventListener("click", generarUsuario)
document.addEventListener("DOMContentLoaded", generarUsuario)