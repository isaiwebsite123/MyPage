// ==========================================================================
// 1. CONTROL DE LA VENTANA EMERGENTE DE LA FOTO DE PERFIL
// ==========================================================================
const fotoPerfil = document.querySelector('.foto');
const modalFoto = document.getElementById('modal-foto');
const botonCerrarModal = document.querySelector('.cerrar-modal');

if (fotoPerfil && modalFoto && botonCerrarModal) {
    fotoPerfil.addEventListener('click', () => {
        modalFoto.classList.add('mostrar');
    });

    botonCerrarModal.addEventListener('click', () => {
        modalFoto.classList.remove('mostrar');
    });

    modalFoto.addEventListener('click', (e) => {
        if (e.target === modalFoto) {
            modalFoto.classList.remove('mostrar');
        }
    });
}

// ==========================================================================
// 2. CONTROL DEL CUADRO EMERGENTE BLANCO PARA EL PROYECTO DE AUTOCAD
// ==========================================================================
const tarjetaAutoCAD = document.getElementById('tarjeta-autocad');
const modalAutoCAD = document.getElementById('modal-autocad');
const cerrarAutoCAD = document.querySelector('.cerrar-proyecto');

if (tarjetaAutoCAD && modalAutoCAD && cerrarAutoCAD) {
    const botonAutoCAD = tarjetaAutoCAD.querySelector('.boton-habilidad');

    if (botonAutoCAD) {
        botonAutoCAD.addEventListener('click', (e) => {
            e.preventDefault();
            modalAutoCAD.classList.add('mostrar');
        });

        cerrarAutoCAD.addEventListener('click', () => {
            modalAutoCAD.classList.remove('mostrar');
        });

        modalAutoCAD.addEventListener('click', (e) => {
            if (e.target === modalAutoCAD) {
                modalAutoCAD.classList.remove('mostrar');
            }
        });
    }
}

// ==========================================================================
// 3. CONTROL DE PESTAÑAS INTERNAS DEL CUADRO DE AUTOCAD (TABS)
// ==========================================================================
const botonesPestana = document.querySelectorAll('.tab-btn');
const contenidosPestana = document.querySelectorAll('.tab-content');

if (botonesPestana.length > 0 && contenidosPestana.length > 0) {
    botonesPestana.forEach(boton => {
        boton.addEventListener('click', () => {
            botonesPestana.forEach(b => b.classList.remove('active'));
            contenidosPestana.forEach(c => c.classList.remove('active'));

            boton.classList.add('active');

            const idContenido = boton.getAttribute('data-tab');
            const contenidoActivo = document.getElementById(idContenido);
            if (contenidoActivo) {
                contenidoActivo.classList.add('active');
            }
        });
    });
}
