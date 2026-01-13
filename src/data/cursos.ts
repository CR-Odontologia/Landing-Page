const cursosData = [
    {
        id: 1,
        slug: "imagenologia-implantologia-periodoncia",
        titulo: "Domina la Imagenología avanzada en Implantología y Periodoncia",
        tag: "Curso Virtual",
        infoGeneral: {
            inicio: "02/02/2026",
            fin: "25/02/2026",
            duracion: "4 semanas",
            modalidad: "100% Virtual (Sincrónico)",
            horario: "Lunes y Miércoles de 8:00 PM a 10:00 PM",
            precio: {
                original: 250,
                ofertaBase: 160,
                ofertaFacop: 200
            },
            moneda: "USD"
        },
        certificacion: {
            tipo: "Doble Certificación",
            entidades: ["CR Odontología", "Faculdade do Centro Oeste Paulista (FACOP)"],
            detalle: "Certificación internacional válida para escalafón profesional."
        },
        planEstudios: [
            { modulo: 1, titulo: "Fundamentos de la Imagenología Odontológica", temas: ["Importancia de la radiología en implantología y periodoncia", "Tipos de estudios radiográficos y sus indicaciones clínicas", "Principios de justificación y optimización radiológica", "Criterios de selección del examen por caso clínico"] },
            { modulo: 2, titulo: "Anatomía Radiológica Maxilofacial Aplicada", temas: ["Anatomía ósea del maxilar y la mandíbula", "Identificación de estructuras anatómicas de riesgo", "Variantes anatómicas y hallazgos incidentales", "Interpretación clínica para procedimientos quirúrgicos"] },
            { modulo: 3, titulo: "Evaluación Radiológica del Hueso Alveolar", temas: ["Análisis tridimensional del reborde alveolar", "Altura, ancho y morfología ósea", "Calidad y densidad ósea en CBCT", "Criterios radiológicos para la selección del implante"] },
            { modulo: 4, titulo: "Radiología en Periodoncia", temas: ["Correlación clínico–radiográfica en enfermedad periodontal", "Tipos de pérdida ósea y defectos infraóseos", "Evaluación de furcas", "CBCT versus radiografía convencional en periodoncia"] },
            { modulo: 5, titulo: "CBCT en la Planificación Implantológica", temas: ["Protocolos de adquisición en tomografía Cone Beam", "Selección del campo de visión y resolución", "Interpretación multiplanar", "Introducción a software de planificación implantológica"] },
            { modulo: 6, titulo: "Radiología en Procedimientos Avanzados", temas: ["Evaluación radiológica para elevación de seno maxilar", "Regeneración ósea guiada e injertos", "Análisis radiológico pre y postquirúrgico", "Control y seguimiento radiográfico"] },
            { modulo: 7, titulo: "Complicaciones Implantológicas y Periodontales", temas: ["Diagnóstico radiológico de periimplantitis", "Identificación de fallas tempranas y tardías", "Errores frecuentes en interpretación radiográfica", "Análisis de complicaciones clínicas"] },
            { modulo: 8, titulo: "Integración Clínica y Casos Clínicos", temas: ["Análisis integral de casos reales", "Toma de decisiones clínicas basadas en imagenología", "Enfoque multidisciplinario: implantología, periodoncia y radiología", "Recomendaciones para informes radiológicos"] }
        ]
    },
    {
        id: 2,
        slug: "radiologia-rehabilitacion-oral",
        titulo: "Radiología Bucal y Maxilofacial Aplicada a la Rehabilitación Oral",
        tag: "Curso Virtual",
        infoGeneral: {
            inicio: "02/02/2026",
            fin: "26/02/2026",
            duracion: "4 semanas",
            modalidad: "100% Virtual (Sincrónico)",
            horario: "Lunes y Jueves de 8:00 PM a 10:00 PM",
            precio: {
                original: 250,
                ofertaBase: 160,
                ofertaFacop: 200
            },
            moneda: "USD"
        },
        certificacion: {
            tipo: "Doble Certificación",
            entidades: ["CR Odontología", "Faculdade do Centro Oeste Paulista (FACOP)"],
            detalle: "Certificación internacional válida para escalafón profesional."
        },
        planEstudios: [
            { modulo: 1, titulo: "Fundamentos de la Imagenología en Rehabilitación Oral", temas: ["Rol de la radiología en la rehabilitación oral", "Indicaciones de estudios radiográficos según el caso clínico", "Principios de justificación y optimización radiológica", "Selección del estudio por tipo de rehabilitación"] },
            { modulo: 2, titulo: "Anatomía Radiológica de Interés Protésico", temas: ["Anatomía ósea y dentaria del maxilar y la mandíbula", "Identificación de estructuras anatómicas críticas", "Variantes anatómicas y hallazgos incidentales", "Implicancias protésicas de la anatomía radiológica"] },
            { modulo: 3, titulo: "Evaluación Radiológica del Diente y del Periodonto", temas: ["Análisis radiográfico del soporte dentario", "Longitud radicular y relación corona–raíz", "Evaluación del periodonto de soporte", "Criterios radiológicos de pronóstico dental"] },
            { modulo: 4, titulo: "Imagenología Aplicada a la Planificación Protésica", temas: ["Selección del tipo de rehabilitación (fija, removible, mixta)", "Evaluación radiológica preprotésica", "Planificación de pilares dentarios", "Correlación clínico–radiográfica en rehabilitación"] },
            { modulo: 5, titulo: "CBCT en Rehabilitación Oral", temas: ["Indicaciones del CBCT en rehabilitación oral", "Evaluación tridimensional de: Pilares dentarios, Rebordes alveolares", "Relación con estructuras anatómicas", "Interpretación multiplanar aplicada a la prótesis"] },
            { modulo: 6, titulo: "Rehabilitación Oral en Casos Complejos", temas: ["Pacientes parcialmente y totalmente edéntulos", "Rehabilitación sobre dientes e implantes", "Evaluación radiológica en casos de desgaste severo", "Casos interdisciplinarios"] },
            { modulo: 7, titulo: "Complicaciones Protésicas y Evaluación Radiográfica", temas: ["Fracasos protésicos desde el punto de vista radiográfico", "Alteraciones óseas y dentarias postrehabilitación", "Interpretación clínica de hallazgos radiográficos", "Ajustes terapéuticos basados en imagenología"] },
            { modulo: 8, titulo: "Integración Clínica y Casos Reales", temas: ["Análisis integral de casos clínicos", "Discusión multidisciplinaria", "Planificación rehabilitadora guiada por imagenología", "Recomendaciones para informes radiológicos"] }
        ]
    },
    {
        id: 3,
        slug: "imagenologia-clinica-endodoncia",
        titulo: "Imagenología Diagnóstica Avanzada para la Práctica Clínica en Endodoncia",
        tag: "Curso Virtual",
        infoGeneral: {
            inicio: "03/02/2026",
            fin: "27/02/2026",
            duracion: "4 semanas",
            modalidad: "100% Virtual (Sincrónico)",
            horario: "Martes y Viernes de 8:00 PM a 10:00 PM",
            precio: {
                original: 250,
                ofertaBase: 160,
                ofertaFacop: 200
            },
            moneda: "USD"
        },
        certificacion: {
            tipo: "Doble Certificación",
            entidades: ["CR Odontología", "Faculdade do Centro Oeste Paulista (FACOP)"],
            detalle: "Certificación internacional válida para escalafón profesional."
        },
        planEstudios: [
            { modulo: 1, titulo: "Fundamentos de Imagenología Aplicada a la Endodoncia", temas: ["Rol de la Imagenologia en el diagnóstico endodóntico", "Principios de radioprotección imagenologia endodóntica"] },
            { modulo: 2, titulo: "Anatomía Dentaria y Periapical en Imagenología", temas: ["Anatomía radicular y del sistema de conductos", "Anatomia periapical y relación diente - estructuras vecinas"] },
            { modulo: 3, titulo: "Diagnóstico Radiológico de Patología Pulpar y Periapical", temas: ["Cambios radiográficos en patología pulpar", "Diagnóstico diferencial de lesiones periapicales", "Limitaciones de la radiografía convencional", "Valor agregado del CBCT en el diagnóstico precoz"] },
            { modulo: 4, titulo: "CBCT en Endodoncia Clínica Avanzada", temas: ["Indicaciones basadas en evidencia del CBCT", "Selección del FOV y parámetros de adquisición", "Interpretación multiplanar y tridimensional", "Identificación de anatomía compleja", "Casos donde el CBCT modifica la conducta terapéutica"] },
            { modulo: 5, titulo: "Planificación del Tratamiento Endodóntico Guiado por Imagen", temas: ["Principios de planificación asistida por CBCT", "Evaluación de conductos calcificados", "Localización de conductos omitidos", "Imagenología aplicada a retratamientos endodónticos"] },
            { modulo: 6, titulo: "Diagnóstico Radiológico de Complicaciones Endodónticas", temas: ["Fracturas radiculares verticales y horizontales", "Reabsorciones internas y externas", "Perforaciones y accidentes operatorios", "Evaluación radiológica de fracasos endodónticos"] },
            { modulo: 7, titulo: "Control, Seguimiento y Pronóstico Endodóntico", temas: ["Evaluación postoperatoria inmediata y tardía", "Seguimiento de lesiones periapicales", "Radiografía vs CBCT en controles", "Consideraciones éticas, legales y radioprotección"] },
            { modulo: 8, titulo: "Integración Clínica y Casos Clínicos Certificables", temas: ["Análisis integral de casos clínicos reales", "Toma de decisiones basada en imagenología", "Integración clínico–radiológica en endodoncia", "Elaboración de informes radiológicos especializados", "Recomendaciones prácticas para la clínica diaria"] }
        ]
    }
];

export default cursosData;