const cursosData = [
    {
        id: 1,
        slug: "radiologia-rehabilitacion-oral",
        titulo: "Radiología Bucal y Maxilofacial Aplicada a la Rehabilitación Oral",
        status: "OPEN",
        tag: "Curso Virtual",
        infoGeneral: {
            inicio: "02/03/2026",
            fin: "26/03/2026",
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
        id: 2,
        slug: "imagenologia-clinica-endodoncia",
        titulo: "Imagenología Diagnóstica Avanzada para la Práctica Clínica en Endodoncia",
        status: "OPEN",
        tag: "Curso Virtual",
        infoGeneral: {
            inicio: "03/03/2026",
            fin: "27/03/2026",
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
    },
    {
        id: 3,
        slug: "tomografia-cone-beam",
        titulo: "Tomografía Cone Beam en Implantología y Periodoncia: del Diagnóstico a la Planificación",
        status: "OPEN",
        tag: "Curso Virtual",
        infoGeneral: {
            inicio: "03/03/2026",
            fin: "26/03/2026",
            duracion: "4 semanas",
            modalidad: "100% Virtual (Sincrónico)",
            horario: "Martes y Jueves de 8:00 PM a 10:00 PM",
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
    },
    {
        id: 4,
        slug: "ortodoncia-cone-beam",
        titulo: "Exactitud Diagnóstica en Ortodoncia mediante Tomografía Cone Beam",
        status: "OPEN",
        tag: "Curso Virtual",
        infoGeneral: {
            inicio: "05/03/2026",
            fin: "30/03/2026",
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
            { modulo: 1, titulo: "Fundamentos de la Imagenología en Ortodoncia", temas: ["Rol de la radiología en el diagnóstico y planificación ortodóncica", "Indicaciones de radiografías periapical, panorámica, lateral de cráneo y CBCT", "Principios de justificación y optimización radiológica", "Selección del estudio radiográfico según la etapa del tratamiento"] },
            { modulo: 2, titulo: "Crecimiento y Desarrollo Craneofacial", temas: ["Bases radiológicas del crecimiento facial", "Métodos de evaluación de maduración ósea", "Estadio pico de crecimiento y su importancia clínica", "Aplicación clínica en ortopedia y ortodoncia"] },
            { modulo: 3, titulo: "Anatomía Radiológica Craneofacial Aplicada", temas: ["Anatomía ósea craneofacial de interés ortodóncico", "Identificación de estructuras anatómicas críticas", "Variantes anatómicas y hallazgos incidentales", "Correlación anatómica para el diagnóstico ortodóncico"] },
            { modulo: 4, titulo: "Radiología y Análisis Cefalométrico", temas: ["Principios del análisis cefalométrico", "Análisis sagital, vertical y transversal", "Errores frecuentes en la interpretación cefalométrica", "Integración cefalométrica al plan de tratamiento"] },
            { modulo: 5, titulo: "CBCT Aplicado a la Ortodoncia", temas: ["Indicaciones actuales del CBCT en ortodoncia", "Selección del campo de visión (FOV) y resolución", "Evaluación tridimensional de: Vías aéreas, Caninos incluidos y Reabsorciones radiculares", "Ventajas y limitaciones del CBCT"] },
            { modulo: 6, titulo: "Diagnóstico Radiológico en Casos Complejos", temas: ["Dientes retenidos e impactados", "Reabsorciones radiculares externas e internas", "Anomalías dentarias y esqueléticas", "Evaluación de asimetrías faciales"] },
            { modulo: 7, titulo: "Integración Clínica y Casos Ortodóncicos", temas: ["Análisis integral de casos reales", "Interpretación imagenológica para la toma de decisiones", "Enfoque multidisciplinario: ortodoncia y radiología", "Recomendaciones para informes radiológicos"] },
            { modulo: 8, titulo: "Complicaciones y Control Clínico–Radiográfico en Ortodoncia", temas: ["Reabsorciones radiculares inducidas por ortodoncia", "Cambios óseos y dentarios durante el tratamiento", "Interpretación clínica de hallazgos radiográficos", "Modificaciones del plan de tratamiento ante complicaciones", "Prevención y manejo clínico de efectos adversos"] }
        ]
    },
    {
        id: 5,
        slug: "radiologia-cone-beam",
        titulo: "Radiología Bucal y Maxilofacial basada en Tomografía Cone Beam (CBCT)",
        status: "OPEN",
        tag: "Curso Virtual",
        infoGeneral: {
            inicio: "04/03/2026",
            fin: "27/03/2026",
            duracion: "4 semanas",
            modalidad: "100% Virtual (Sincrónico)",
            horario: "Miercoles y Viernes de 8:00 PM a 10:00 PM",
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
            { modulo: 1, titulo: "Fundamentos del CBCT y Protección Radiológica", temas: ["Principios físicos del Cone Beam", "Diferencias entre CBCT y TC médica", "Dosis de radiación en CBCT", "Principios ALARA y ALADA", "Selección del campo de visión (FOV)"] },
            { modulo: 2, titulo: "Manejo del Software en Tomográfica Cone Beam", temas: ["Reconstrucción multiplanar", "Cortes oblicuos y curvos", "Ajustes de imagen", "Mediciones y herramientas diagnósticas", "Exportación de imágenes"] },
            { modulo: 3, titulo: "Anatomía Radiológica en CBCT", temas: ["Anatomía tomográfica del maxilar", "Anatomía tomográfica mandibular", "Senos maxilares y cavidad nasal", "Conducto dentario inferior", "Variantes anatómicas"] },
            { modulo: 4, titulo: "CBCT en Implantología y Periodoncia", temas: ["Evaluación tridimensional del hueso alveolar", "Medición de altura, espesor y densidad ósea", "Relación con estructuras anatómicas críticas", "Defectos óseos verticales y horizontales", "Planificación de implantes basada en CBCT"] },
            { modulo: 5, titulo: "CBCT en Endodoncia", temas: ["Anatomía radicular compleja", "Conductos accesorios y calcificados", "Reabsorciones internas y externas", "Fracturas radiculares", "Indicaciones reales del CBCT en endodoncia"] },
            { modulo: 6, titulo: "Patología Bucal y Maxilofacial en CBCT I", temas: ["Lesiones inflamatorias y quísticas", "Lesiones periapicales", "Quistes odontogénicos", "Quistes no odontogénicos", "Infecciones óseas", "Osteítis y osteomielitis"] },
            { modulo: 7, titulo: "Patología Bucal y Maxilofacial en CBCT II (Lesiones tumorales y fibro-óseas)", temas: ["Tumores odontogénicos benignos", "Tumores malignos maxilofaciales", "Lesiones fibro-óseas", "Alteraciones del desarrollo", "Diagnóstico diferencial tomográfico"] },
            { modulo: 8, titulo: "Interpretación Integral e Informe Tomográfico (CBCT)", temas: ["Lectura sistemática del estudio CBCT", "Identificación de hallazgos incidentales", "Errores frecuentes de interpretación", "Estructura y redacción del informe tomográfico"] }
        ]
    },
    {
        id: 999,
        slug: "test",
        titulo: "test",
        status: "OPEN",
        tag: "Curso Virtual",
        infoGeneral: {
            inicio: "03/03/2026",
            fin: "27/03/2026",
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
            { modulo: 1, titulo: "X", temas: [""] },
            { modulo: 2, titulo: "X", temas: [""] },
            { modulo: 3, titulo: "X", temas: [""] },
            { modulo: 4, titulo: "X", temas: [""] },
            { modulo: 5, titulo: "X", temas: [""] },
            { modulo: 6, titulo: "X", temas: [""] },
            { modulo: 7, titulo: "X", temas: [""] },
            { modulo: 8, titulo: "X", temas: [""] }
        ]
    }
];

export default cursosData;