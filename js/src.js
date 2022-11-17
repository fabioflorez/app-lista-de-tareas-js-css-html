/*Animaciones */

const NORMALbutton = document.getElementById("NORMAL");

NORMALbutton.addEventListener("click", () => {
  NORMALbutton.classList.toggle("click");
  setTimeout(() => {
    NORMALbutton.classList.remove("click");
  }, 300);
});

const SENDbutton = document.getElementById("SEND");

SENDbutton.addEventListener("click", () => {
  SENDbutton.classList.toggle("click");
  setTimeout(() => {
    SENDbutton.classList.remove("click");
  }, 300);
});

NORMALbutton.onclick = function changetext() {
  if (NORMALbutton.innerHTML === "NORMAL") {
    NORMALbutton.innerHTML = "IMPORTANT";
  } else {
    NORMALbutton.innerHTML = "NORMAL";
  }
};

/*
 *
 * window.addEventListener('load', () => {}) es para crear el archivo en local (Local Storage) de las tareas que se vayan creando
 * Cuando se carga/load/ completamente la página, el objeto window. tiene como referencia el objeto 'tareas', el formulario en HTML y el * evento creador de tareas
 *
 */

("use strict");

let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

window.addEventListener("load", () => {
  const formularioTareas = document.querySelector("#formularioTareas");

  formularioTareas.addEventListener("submit", (event) => {
    event.preventDefault();

    const tarea = {
      texto: event.target.elements.tarea.value,
      categoria: event.target.elements.categoria.checked,
      completada: false,
      fecha: `${new Date().getDate()} - ${
        new Date().getMonth() + 1
      } - ${new Date().getFullYear()} ${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`,
    };

    if (tarea.texto != "") {
      tareas.push(tarea);
      localStorage.setItem("tareas", JSON.stringify(tareas));
    }
    //Reseteo de Texto
    event.target.tarea.value = "";

    añadirTarea();
  });

  añadirTarea();
});

/*
 *
 * function añadirTarea() para crear la functión que CREA las tareas en el HTML a partir del Local Storage
 *
 * Por eso volvemos a utilizar las constantes ya creadas:
 *
 *      - tareas (array de varios objetos 'tarea')
 *      - tarea (objeto)
 *
 */

function añadirTarea() {
  const listaDeTareas = document.querySelector("#listaDeTareas");
  listaDeTareas.innerHTML = "";

  tareas.forEach((tarea) => {
    // <div class="tarea"></div>
    const nuevaTarea = document.createElement("div");
    nuevaTarea.classList.add("tarea");

    // <label></label>
    const label = document.createElement("label");
    label.innerHTML = "Hecha";

    // <input class="checkbox"></input>
    const input = document.createElement("input");
    input.classList.add("checkbox");
    input.type = "checkbox";
    input.checked = tarea.completada;

    // <h4 class="textoTarea"></h4>
    const textoTarea = document.createElement("h4");
    textoTarea.classList.add("textoTarea");
    textoTarea.innerHTML = tarea.texto;

    // <p class="categoriaTarea"></p>
    const categoriaTarea = document.createElement("p");
    categoriaTarea.innerHTML = "Importante";
    categoriaTarea.classList.add("categoriaTarea");

    // <h5 class="fecha"></h5>
    const fecha = document.createElement("p");
    fecha.innerHTML = tarea.fecha;
    fecha.classList.add("fecha");

    nuevaTarea.appendChild(label);
    nuevaTarea.appendChild(input);
    nuevaTarea.appendChild(textoTarea);
    nuevaTarea.appendChild(fecha);

    if (tarea.categoria === true) {
      nuevaTarea.appendChild(categoriaTarea);
    } else if (tarea.categoria === false) {
    }

    listaDeTareas.appendChild(nuevaTarea);

    if (tarea.completada) {
      nuevaTarea.classList.add("hecha");
    }

    input.addEventListener("click", (event) => {
      tarea.completada = event.target.checked;

      localStorage.setItem("tareas", JSON.stringify(tareas));

      if (tarea.completada) {
        nuevaTarea.classList.add("hecha");
      } else {
        nuevaTarea.classList.remove("hecha");
      }

      añadirTarea();
    });

    const eliminarHechas = document.querySelector("#eliminarHechas");
    var SelectAllButtonReset = document.getElementById("SelectAll");

    eliminarHechas.addEventListener("click", (event) => {
      SelectAllButtonReset.checked = false;
      tareas.forEach((tarea) => {
        if (tarea.completada === true) {
          console.log("Hola");
          tareas = tareas.filter((t) => t !== tarea);

          localStorage.setItem("tareas", JSON.stringify(tareas));
          añadirTarea();
        }
      });
    });

    // Select All //

    var ALLcheckboxes = document.getElementsByClassName("checkbox");
    var SelectAll = document.getElementById("SelectAll");

    SelectAll.onclick = (e) => {
      if (SelectAll.checked == true) {
        tareas.forEach((tarea) => {
          tarea.completada = true;
        });

        for (let i = 0; i < ALLcheckboxes.length; i++) {
          ALLcheckboxes[i].checked = true;
        }
      } else {
        tareas.forEach((tarea) => {
          tarea.completada = false;
        });
        for (let i = 0; i < ALLcheckboxes.length; i++) {
          ALLcheckboxes[i].checked = false;
        }
      }
    };
  });
}
