function toggleContent(id) {
    var contenido = document.getElementById(id);
    if (contenido.style.display === "none") {
        contenido.style.display = "block";
    } else {
        contenido.style.display = "none";
    }
}

function openMenu() {
    // Aquí puedes agregar el código para abrir el menú o realizar otra acción
    console.log("Haz hecho clic en el iframe.");
}

let p = document.getElementById("foo"); // Encuentra el elemento "p" en el sitio
  p.onclick = muestraAlerta; // Agrega función onclick al elemento
    
function muestraAlerta(evento) {
    alert("Evento onclick ejecutado!");
  }


function openNewPage(id) {
    window.location.href = 'songs/ministracion/'+id+'.html';
}


/*function openNewPage(id) {
    window.location.href = 'songs/ministracion'+'/como_en_el_cielo.html';
}*/