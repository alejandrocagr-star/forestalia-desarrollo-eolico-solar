
const casos = [
  {
    titulo: "Trazabilidad entre fases",
    situacion: "Durante la viabilidad se modifica el nudo de conexión. La alternativa mejora el plazo, pero la decisión se basa en una llamada y el análisis de riesgos sigue referido al nudo anterior.",
    opciones: [
      "Continuar y documentar el cambio al preparar el expediente final.",
      "Actualizar riesgos, criterios y responsables antes de aprobar el nuevo hito.",
      "Solicitar conformidad del equipo técnico y mantener el calendario inicial.",
      "Registrar la llamada y validar el cambio cuando se solicite el permiso."
    ],
    correcta: 1,
    explicaciones: [
      "INCORRECTA. Pospone controles transversales que deben acompañar cada hito.",
      "CORRECTA. Integra criterio, evidencia, responsable y aprobación antes de avanzar.",
      "INCORRECTA. La conformidad técnica no sustituye el análisis legal y la trazabilidad.",
      "INCORRECTA. Registrar la llamada no basta para justificar ni aprobar el cambio."
    ]
  },
  {
    titulo: "Versiones y permisos",
    situacion: "El día previo al registro, un consultor entrega una cartografía corregida. El informe ambiental cita la versión anterior y el plazo administrativo vence mañana.",
    opciones: [
      "Registrar la nueva cartografía y corregir el informe tras la presentación.",
      "Mantener ambos documentos y explicar la discrepancia si la detectan.",
      "Verificar coherencia, validar el cambio y evaluar el plazo con Legal.",
      "Presentar la versión anterior y conservar la nueva como soporte interno."
    ],
    correcta: 2,
    explicaciones: [
      "INCORRECTA. Presentar documentos incoherentes crea un riesgo de subsanación o rechazo.",
      "INCORRECTA. La discrepancia conocida debe resolverse antes de presentar, si es exigible.",
      "CORRECTA. Concilia control de versiones, validación y gestión fundamentada del plazo.",
      "INCORRECTA. Ocultar una modificación conocida compromete la fiabilidad del expediente."
    ]
  },
  {
    titulo: "Reunión institucional",
    situacion: "Un representante público propone hablar de un permiso pendiente durante un evento sectorial. Ofrece adelantar su criterio si el equipo evita dejar constancia de la conversación.",
    opciones: [
      "Escuchar sin entregar documentos y registrar después una nota interna.",
      "Aceptar solo si participa también el asesor jurídico del proyecto.",
      "Pedir que el representante confirme por escrito su criterio informal.",
      "Reconducir la consulta a un cauce oficial y dejar constancia del contacto."
    ],
    correcta: 3,
    explicaciones: [
      "INCORRECTA. La nota interna no convierte en adecuado un contacto opaco.",
      "INCORRECTA. La presencia de Legal no legitima un canal deliberadamente informal.",
      "INCORRECTA. No debe buscarse una ventaja mediante una consulta irregular.",
      "CORRECTA. Evita trato privilegiado y preserva transparencia y trazabilidad."
    ]
  },
  {
    titulo: "Diligencia sobre un asesor",
    situacion: "Un asesor acredita experiencia y presenta un precio razonable, pero evita identificar a su beneficiario real. Propone iniciar trabajos urgentes mientras se completa el expediente de homologación.",
    opciones: [
      "Suspender el alta hasta aclarar titularidad, riesgos y aprobaciones.",
      "Permitir tareas preliminares sin pagos mientras finaliza la revisión.",
      "Firmar cláusulas anticorrupción y revisar la titularidad en el primer pago.",
      "Solicitar referencias comerciales y contratar por un periodo de prueba."
    ],
    correcta: 0,
    explicaciones: [
      "CORRECTA. La identificación y evaluación del tercero son controles previos relevantes.",
      "INCORRECTA. Trabajar sin evaluación puede generar obligaciones y exposición reputacional.",
      "INCORRECTA. Una cláusula contractual no sustituye la diligencia debida previa.",
      "INCORRECTA. Las referencias no resuelven la opacidad sobre el beneficiario real."
    ]
  },
  {
    titulo: "Conflicto en la selección",
    situacion: "Una responsable participa en la evaluación de terrenos y descubre que una sociedad de su antiguo socio tiene derechos sobre una parcela candidata. La oferta parece competitiva.",
    opciones: [
      "Continuar, siempre que se documente que el precio es de mercado.",
      "Solicitar otra valoración técnica sin revelar la relación anterior.",
      "Declarar el vínculo y pedir evaluación de su participación en la decisión.",
      "Excluir la parcela de forma inmediata para evitar cualquier sospecha."
    ],
    correcta: 2,
    explicaciones: [
      "INCORRECTA. El precio objetivo no elimina el riesgo de sesgo o apariencia de conflicto.",
      "INCORRECTA. Una revisión técnica no permite gestionar un vínculo que se ha ocultado.",
      "CORRECTA. Permite decidir medidas proporcionales, incluida la abstención si procede.",
      "INCORRECTA. La exclusión automática puede ser innecesaria sin evaluar el conflicto."
    ]
  },
  {
    titulo: "Datos y cartografía",
    situacion: "Un consultor autorizado solicita acceso al mapa completo de parcelas, incluidos datos de propietarios ajenos a su zona. Alega que necesita comparar alternativas de implantación.",
    opciones: [
      "Compartir el mapa completo mediante un enlace corporativo temporal.",
      "Entregar solo los datos necesarios, con acceso autorizado y controlado.",
      "Enviar una copia seudonimizada de toda la base para evitar retrasos.",
      "Pedir confidencialidad por escrito y facilitar el repositorio completo."
    ],
    correcta: 1,
    explicaciones: [
      "INCORRECTA. El canal seguro no justifica un acceso más amplio del necesario.",
      "CORRECTA. Aplica finalidad, minimización, autorización y protección del proyecto.",
      "INCORRECTA. La seudonimización no elimina por sí sola el exceso de información.",
      "INCORRECTA. La confidencialidad no reemplaza la limitación de accesos."
    ]
  },
  {
    titulo: "Comunicación y evidencias",
    situacion: "Una empleada recibe una factura sospechosa de un intermediario y un correo que sugiere una gestión irregular. Su responsable le pide esperar hasta confirmar los hechos.",
    opciones: [
      "Pedir explicaciones al intermediario y guardar sus respuestas.",
      "Esperar al cierre contable para comprobar si hubo algún pago.",
      "Compartir las evidencias con otros compañeros para contrastarlas.",
      "Conservar lo recibido y comunicar indicios por el canal habilitado."
    ],
    correcta: 3,
    explicaciones: [
      "INCORRECTA. Confrontar al tercero puede alertarlo y comprometer la revisión.",
      "INCORRECTA. La comunicación de indicios no requiere una investigación concluida.",
      "INCORRECTA. Difundir el caso vulnera la confidencialidad y puede alterar evidencias.",
      "CORRECTA. Permite evaluación competente y preserva información sin manipularla."
    ]
  },
  {
    titulo: "Cierre con excepciones",
    situacion: "Al cerrar un hito, constan la aprobación técnica y el permiso, pero falta validar una factura de asesoría y el cambio cartográfico no tiene aprobación formal. Dirección solicita cerrar hoy.",
    opciones: [
      "Cerrar con un listado de excepciones para regularizarlas después.",
      "Aprobar el cierre técnico y tramitar los dos pendientes por separado.",
      "Verificar los controles pendientes y elevar la decisión antes del cierre.",
      "Solicitar firma de dirección para dar por subsanadas las dos carencias."
    ],
    correcta: 2,
    explicaciones: [
      "INCORRECTA. Una lista de pendientes no equivale a controles ejecutados y aprobados.",
      "INCORRECTA. Separar tareas no resuelve su efecto sobre la integridad del cierre.",
      "CORRECTA. Asegura aprobación de cambios y soporte de servicios antes de cerrar.",
      "INCORRECTA. La firma jerárquica no reemplaza la evidencia ni la validación exigible."
    ]
  }
];

let indice = 0;
let seleccion = null;
let aciertos = 0;
let respondida = false;

const app = document.getElementById("app");
const letras = ["A", "B", "C", "D"];

document.getElementById("comenzar").addEventListener("click", iniciar);

function iniciar() {
  indice = 0;
  seleccion = null;
  aciertos = 0;
  respondida = false;
  mostrarCaso();
}

function mostrarCaso() {
  seleccion = null;
  respondida = false;

  const caso = casos[indice];

  app.innerHTML = `
    <section class="tarjeta">
      <div class="progreso">
        CASO ${indice + 1} DE ${casos.length}
      </div>

      <h2>${caso.titulo}</h2>

      <p class="situacion">${caso.situacion}</p>

      <h3>¿Cuál es la actuación más adecuada?</h3>

      <div class="opciones">
        ${caso.opciones.map((opcion, i) => `
          <button class="opcion" data-opcion="${i}">
            <strong>${letras[i]}.</strong> ${opcion}
          </button>
        `).join("")}
      </div>

      <button id="comprobar" disabled>
        COMPROBAR RESPUESTA
      </button>
    </section>
  `;

  document.querySelectorAll(".opcion").forEach(boton => {
    boton.addEventListener("click", () => {
      elegirRespuesta(Number(boton.dataset.opcion));
    });
  });

  document.getElementById("comprobar").addEventListener(
    "click",
    comprobarRespuesta
  );

  window.scrollTo(0, 0);
}

function elegirRespuesta(numero) {
  if (respondida) return;

  seleccion = numero;

  document.querySelectorAll(".opcion").forEach((boton, i) => {
    boton.classList.toggle("seleccionada", i === numero);
  });

  document.getElementById("comprobar").disabled = false;
}

function comprobarRespuesta() {
  if (seleccion === null || respondida) return;

  respondida = true;

  const caso = casos[indice];
  const esCorrecta = seleccion === caso.correcta;

  if (esCorrecta) {
    aciertos++;
  }

  document.querySelectorAll(".opcion").forEach(boton => {
    boton.disabled = true;
  });

  document.getElementById("comprobar").remove();

  const tarjeta = document.querySelector(".tarjeta");

  const resolucion = document.createElement("div");
  resolucion.className = "resolucion";

  resolucion.innerHTML = `
    <h3>${esCorrecta ? "¡RESPUESTA CORRECTA!" : "RESPUESTA INCORRECTA"}</h3>

    <p>
      <strong>Respuesta correcta: ${letras[caso.correcta]}</strong>
    </p>

    <p>${caso.opciones[caso.correcta]}</p>

    <h3>Explicación de las cuatro opciones</h3>

    ${caso.explicaciones.map((explicacion, i) => `
      <div class="explicacion">
        <strong class="${i === caso.correcta ? "correcta" : "incorrecta"}">
          OPCIÓN ${letras[i]}
        </strong>
        <p>${explicacion}</p>
      </div>
    `).join("")}

    <div style="margin-top:25px">
      <button id="siguiente">
        ${indice === casos.length - 1
          ? "VER RESULTADO FINAL"
          : "SIGUIENTE CASO"}
      </button>
    </div>
  `;

  tarjeta.appendChild(resolucion);

  document.getElementById("siguiente").addEventListener(
    "click",
    siguienteCaso
  );

  resolucion.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function siguienteCaso() {
  indice++;

  if (indice < casos.length) {
    mostrarCaso();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  const porcentaje = Math.round((aciertos / casos.length) * 100);

  let mensaje = "";

  if (porcentaje === 100) {
    mensaje = "¡Excelente! Has resuelto correctamente todos los casos.";
  } else if (porcentaje >= 75) {
    mensaje = "¡Muy buen resultado! Demuestras un buen criterio de Compliance.";
  } else if (porcentaje >= 50) {
    mensaje = "Buen trabajo. Conviene reforzar algunos controles de Compliance.";
  } else {
    mensaje = "Te recomendamos repasar los controles y repetir el reto.";
  }

  app.innerHTML = `
    <section class="tarjeta resultado">
      <h1>RETO COMPLETADO</h1>

      <h2>Desarrollo Eólico y Solar</h2>

      <div class="puntuacion">
        ${aciertos} / ${casos.length}
      </div>

      <h2>${porcentaje}% de aciertos</h2>

      <p class="situacion">${mensaje}</p>

      <button id="reiniciar">
        REPETIR RETO
      </button>
    </section>
  `;

  document.getElementById("reiniciar").addEventListener(
    "click",
    iniciar
  );

  window.scrollTo(0, 0);
}
