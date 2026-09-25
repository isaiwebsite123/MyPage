document.addEventListener("DOMContentLoaded", function () {

    /* ==========================================================================
       1. MODAL PARA AMPLIAR LA FOTO DE PERFIL
       ========================================================================== */
    const fotoPerfil = document.getElementById("fotoPerfil");
    const modalFoto = document.getElementById("modalFoto");
    const fotoAmpliada = document.getElementById("fotoAmpliada");
    const cerrarFoto = document.getElementById("cerrarFoto");

    if (fotoPerfil && modalFoto && fotoAmpliada) {
        // Abrir modal con la foto
        fotoPerfil.addEventListener("click", function () {
            modalFoto.classList.add("mostrar");
            fotoAmpliada.src = this.src;
        });

        // Cerrar modal al hacer clic en la X
        if (cerrarFoto) {
            cerrarFoto.addEventListener("click", function () {
                modalFoto.classList.remove("mostrar");
            });
        }

        // Cerrar modal al hacer clic fuera de la imagen
        modalFoto.addEventListener("click", function (evento) {
            if (evento.target === modalFoto) {
                modalFoto.classList.remove("mostrar");
            }
        });
    }

    /* ==========================================================================
       2. MODAL PARA EL PROYECTO AUTOCAD
       ========================================================================== */
    const btnAutoCAD = document.getElementById("btnAutoCAD");
    const modalAutoCAD = document.getElementById("modalAutoCAD");
    const cerrarAutoCAD = document.getElementById("cerrarAutoCAD");

    if (btnAutoCAD && modalAutoCAD) {
        // Abrir modal de AutoCAD
        btnAutoCAD.addEventListener("click", function (e) {
            e.preventDefault(); // Evita recargas si fuera un enlace predeterminado
            modalAutoCAD.classList.add("mostrar");
        });

        // Cerrar modal al hacer clic en la X
        if (cerrarAutoCAD) {
            cerrarAutoCAD.addEventListener("click", function () {
                modalAutoCAD.classList.remove("mostrar");
            });
        }

        // Cerrar modal al hacer clic fuera del contenido del proyecto
        modalAutoCAD.addEventListener("click", function (evento) {
            if (evento.target === modalAutoCAD) {
                modalAutoCAD.classList.remove("mostrar");
            }
        });
    }

    /* ==========================================================================
       3. NAVEGACIÓN POR PESTAÑAS (TABS) EN EL MODAL DE AUTOCAD
       ========================================================================== */
    const tabBotones = document.querySelectorAll(".tab-btn");
    const tabContenidos = document.querySelectorAll(".tab-content");

    if (tabBotones.length > 0 && tabContenidos.length > 0) {
        tabBotones.forEach(boton => {
            boton.addEventListener("click", function () {
                // Quitar clase 'active' de todos los botones y contenidos
                tabBotones.forEach(btn => btn.classList.remove("active"));
                tabContenidos.forEach(content => content.classList.remove("active"));

                // Activar el botón presionado
                this.classList.add("active");

                // Mostrar el contenido de la pestaña correspondiente
                const tabId = this.getAttribute("data-tab");
                const targetContent = document.getElementById(tabId);
                if (targetContent) {
                    targetContent.classList.add("active");
                }
            });
        });
    }

    /* ==========================================================================
       4. NAVEGACIÓN Y DESPLAZAMIENTO SUAVE A EXCEL
       ========================================================================== */
    const btnExcel = document.getElementById("btnExcel");
    const seccionExcel = document.getElementById("seccion-excel");

    if (btnExcel && seccionExcel) {
        btnExcel.addEventListener("click", function (e) {
            e.preventDefault();
            seccionExcel.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    }

    /* ==========================================================================
       5. ATTACH TECLA ESCAPE PARA CERRAR MODALES
       ========================================================================== */
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            if (modalFoto && modalFoto.classList.contains("mostrar")) {
                modalFoto.classList.remove("mostrar");
            }
            if (modalAutoCAD && modalAutoCAD.classList.contains("mostrar")) {
                modalAutoCAD.classList.remove("mostrar");
            }
        }
    });

});
