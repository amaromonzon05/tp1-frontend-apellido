
const guias = [
    {
        guia_id: 1,
        nombre: "Carlos",
        apellido: "Perez",
        email: "carlos@gmail.com",
        idioma: "Inglés",
        aniosExperiencia: 5
    },
    {
        guia_id: 2,
        nombre: "Laura",
        apellido: "Gomez",
        email: "laura@gmail.com",
        idioma: "Portugués",
        aniosExperiencia: 3
    },
    {
        guia_id: 3,
        nombre: "Martin",
        apellido: "Lopez",
        email: "martin@gmail.com",
        idioma: "Francés",
        aniosExperiencia: 8
    },
    {
        guia_id: 4,
        nombre: "Sofia",
        apellido: "Diaz",
        email: "sofia@gmail.com",
        idioma: "Inglés",
        aniosExperiencia: 2
    },
    {
        guia_id: 5,
        nombre: "Pedro",
        apellido: "Fernandez",
        email: "pedro@gmail.com",
        idioma: "Italiano",
        aniosExperiencia: 6
    },
    {
        guia_id: 6,
        nombre: "Lucia",
        apellido: "Martinez",
        email: "lucia@gmail.com",
        idioma: "Portugués",
        aniosExperiencia: 4
    },
    {
        guia_id: 7,
        nombre: "Andres",
        apellido: "Rodriguez",
        email: "andres@gmail.com",
        idioma: "Francés",
        aniosExperiencia: 7
    },
    {
        guia_id: 8,
        nombre: "Valentina",
        apellido: "Sanchez",
        email: "valentina@gmail.com",
        idioma: "Inglés",
        aniosExperiencia: 1
    }
];

const viajes = [
    {
        viaje_id: 1,
        destino: "Bariloche",
        fechaSalida: "2026-12-10",
        precioBase: 350000,
        temporada: "alta",
        guia_id: 1
    },
    {
        viaje_id: 2,
        destino: "Mar del Plata",
        fechaSalida: "2026-11-20",
        precioBase: 180000,
        temporada: "media",
        guia_id: 2
    },
    {
        viaje_id: 3,
        destino: "Mendoza",
        fechaSalida: "2027-05-15",
        precioBase: 220000,
        temporada: "baja",
        guia_id: 3
    },
    {
        viaje_id: 4,
        destino: "Puerto Iguazu",
        fechaSalida: "2027-01-12",
        precioBase: 280000,
        temporada: "alta",
        guia_id: 4
    },
    {
        viaje_id: 5,
        destino: "Cordoba",
        fechaSalida: "2027-03-18",
        precioBase: 160000,
        temporada: "media",
        guia_id: 5
    },
    {
        viaje_id: 6,
        destino: "Salta",
        fechaSalida: "2027-06-22",
        precioBase: 240000,
        temporada: "baja",
        guia_id: 6
    },
    {
        viaje_id: 7,
        destino: "Ushuaia",
        fechaSalida: "2027-01-25",
        precioBase: 420000,
        temporada: "alta",
        guia_id: 7
    },
    {
        viaje_id: 8,
        destino: "Buenos Aires",
        fechaSalida: "2027-04-10",
        precioBase: 150000,
        temporada: "media",
        guia_id: 8
    }
];


document.addEventListener("DOMContentLoaded", function() {

    // MOSTRAR GUIAS

    function mostrarGuias() {

        const contenedor = document.getElementById("lista-guias");

        if (!contenedor) {
            console.error("No se encontró lista-guias en HTML");
            return;
        }

        contenedor.innerHTML = "";

        guias.forEach(function(guia) {

            contenedor.innerHTML += `
                <div>
                    <h3>${guia.nombre} ${guia.apellido}</h3>
                    <p>Email: ${guia.email}</p>
                    <p>Idioma: ${guia.idioma}</p>
                    <p>Experiencia: ${guia.aniosExperiencia} años</p>
                </div>
            `;
        });
    }


    // FILTRAR GUIAS POR IDIOMA

    function filtrarGuias() {

        const idioma = document.getElementById("filtro-idioma").value;

        const guiasFiltrados = guias.filter(function(guia) {

            return idioma === "" || guia.idioma === idioma;

        });

        const contenedor = document.getElementById("lista-guias");

        contenedor.innerHTML = "";

        guiasFiltrados.forEach(function(guia) {

            contenedor.innerHTML += `
                <div>
                    <h3>${guia.nombre} ${guia.apellido}</h3>
                    <p>Email: ${guia.email}</p>
                    <p>Idioma: ${guia.idioma}</p>
                    <p>Experiencia: ${guia.aniosExperiencia} años</p>
                </div>
            `;

        });

    }


    // MOSTRAR VIAJES

    function mostrarViajes(viajesFiltrados = viajes) {

        const contenedor = document.getElementById("lista-viajes");

        if (!contenedor) {
            console.error("No se encontró lista-viajes en HTML");
            return;
        }

        contenedor.innerHTML = "";

        viajesFiltrados.forEach(function(viaje) {

            const guia = guias.find(function(g) {
                return g.guia_id === viaje.guia_id;
            });

            if (!guia) {
                console.error("No se encontró el guía:", viaje.destino);
                return;
            }

            contenedor.innerHTML += `
                <div>
                    <h3>${viaje.destino}</h3>
                    <p>Fecha: ${viaje.fechaSalida}</p>
                    <p>Precio base: $${viaje.precioBase}</p>
                    <p>Temporada: ${viaje.temporada}</p>
                    <p>Guía: ${guia.nombre} ${guia.apellido}</p>
                </div>
            `;
        });
    }


    // FILTRAR VIAJES POR DESTINO Y TEMPORADA

    function aplicarFiltros() {

        const destino = document.getElementById("buscador-destino").value.toLowerCase();

        const temporada = document.getElementById("filtro-temporada").value;

        const viajesFiltrados = viajes.filter(function(viaje) {

            const coincideDestino = viaje.destino.toLowerCase().includes(destino);

            const coincideTemporada = temporada === "" || viaje.temporada === temporada;

            return coincideDestino && coincideTemporada;
        });

        mostrarViajes(viajesFiltrados);
    }


    // CARGAR GUIAS EN EL SELECTOR DEL FORMULARIO

    function cargarGuiasEnFormulario() {

        const selector = document.getElementById("guia_id");

        guias.forEach(function(guia) {

            const opcion = document.createElement("option");

            opcion.value = guia.guia_id;
            opcion.textContent = guia.nombre + " " + guia.apellido;

            selector.appendChild(opcion);

        });

    }


    // REGISTRAR UN NUEVO VIAJE

    function registrarViaje(event) {

        event.preventDefault();

        const destino = document.getElementById("destino").value.trim();
        const fechaSalida = document.getElementById("fechaSalida").value;
        const precioBase = Number(document.getElementById("precioBase").value);
        const temporada = document.getElementById("temporada").value;
        const guia_id = Number(document.getElementById("guia_id").value);


        // VALIDAR DESTINO

        if (destino === "") {
            alert("El destino no puede estar vacío.");
            return;
        }


        // VALIDAR FECHA

        const partesFecha = fechaSalida.split("-").map(Number);

        const fecha = new Date(
            partesFecha[0],
            partesFecha[1] - 1,
            partesFecha[2]
        );

        const fechaValida =
            /^\d{4}-\d{2}-\d{2}$/.test(fechaSalida) &&
            fecha.getFullYear() === partesFecha[0] &&
            fecha.getMonth() === partesFecha[1] - 1 &&
            fecha.getDate() === partesFecha[2];

        if (!fechaValida) {
            alert("Ingresá una fecha válida.");
            return;
        }


        // VALIDAR PRECIO

        if (!Number.isFinite(precioBase) || precioBase <= 0) {
            alert("El precio base debe ser mayor que cero.");
            return;
        }


        // VALIDAR TEMPORADA

        if (!["baja", "media", "alta"].includes(temporada)) {
            alert("Seleccioná una temporada válida.");
            return;
        }


        // VALIDAR GUIA

        const guiaExiste = guias.some(function(guia) {
            return guia.guia_id === guia_id;
        });

        if (!guiaExiste) {
            alert("Seleccioná un guía válido.");
            return;
        }


        // CREAR NUEVO VIAJE

        const nuevoViaje = {
            viaje_id: Math.max(...viajes.map(v => v.viaje_id)) + 1,
            destino: destino,
            fechaSalida: fechaSalida,
            precioBase: precioBase,
            temporada: temporada,
            guia_id: guia_id
        };


        // AGREGAR EL VIAJE AL ARREGLO

        viajes.push(nuevoViaje);


        // ACTUALIZAR LA LISTA

        aplicarFiltros();


        // LIMPIAR EL FORMULARIO

        document.getElementById("formulario-viaje").reset();

        alert("¡El viaje se registró correctamente!");

    }


    // CONECTAR LOS FILTROS Y EL FORMULARIO

    document.getElementById("buscador-destino").addEventListener("input", aplicarFiltros);

    document.getElementById("filtro-temporada").addEventListener("change", aplicarFiltros);

    document.getElementById("filtro-idioma").addEventListener("change", filtrarGuias);

    document.getElementById("formulario-viaje").addEventListener("submit", registrarViaje);


    // EJECUTAR FUNCIONES AL INICIAR LA PAGINA

    mostrarGuias();
    mostrarViajes();
    cargarGuiasEnFormulario();

});



