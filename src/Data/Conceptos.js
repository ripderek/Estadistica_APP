export const tasks = [
    {
        id: 0,
        title: "Tendencia central",
        description: "Las medidas de tendencia central son valores estadísticos que tienden a situarse en el centro de un conjunto de datos ordenados. Son indicadores que resumen y dan una visión general de un conjunto de datos mediante un solo valor que representa típicamente a todo el grupo. Estas medidas incluyen la media, la mediana y la moda. Para analizar las medidas de tendencia central, los usuarios deben comprender lo que representa cada una y qué datos necesitan para calcularlas:",
        description2: "Estas medidas son fundamentales en estadísticas descriptivas y se utilizan comúnmente en diversos campos, desde la sociología hasta la economía, la psicología y más, para analizar tendencias y patrones en los datos recopilados.",
        //MIRA VALESKA ESTO ES POR SI ACASO LA TEORIA TIENE ITEMS, ES DECIR, OTRAS DEFINICIONES EN FORMA DE LISTA
        definiciones: [
            { tipo: "Media", definition: "Suma de todos los valores de datos dividida por el número total de elementos. Se necesita un conjunto de números para calcular la media." },
            { tipo: "Mediana", definition: "El valor medio en un conjunto de datos ordenados. Si el número total de datos es impar, es el número central; si es par, es el promedio de los dos números centrales. Se requiere el conjunto completo de datos, preferiblemente ya ordenados." },
            { tipo: "Moda", definition: "El valor o valores que aparecen con más frecuencia en un conjunto de datos. Dependiendo de la naturaleza de los datos, puede haber una moda, más de una, o ninguna (en caso de que todos los datos aparezcan con la misma frecuencia). Se necesita el conjunto de datos para identificar la moda." }
        ],
        //aqui van los links de youtube 
        links_youtube: [
            { video: "MEDIA, MODA Y MEDIANA Super facil | Medidas de tendencia central", link: "https://www.youtube.com/watch?v=0DA7Wtz1ddg", miniatura: "/img/Home/video_medidas1.jpg" },
            //aca copias y pegas si hay mas links
            { video: "Media mediana y moda | Datos sin agrupar", link: "https://www.youtube.com/watch?v=fOuRqk1nzgY", miniatura: "/img/Home/video_medidas2.jpg" }
        ],
        //aqui van los links del pdf
        links_pdf: [
            { pdf: "MEDIDAS DE TENDENCIA CENTRAL", link: "https://uptprobest.files.wordpress.com/2008/02/act-04-medidas-tendencia-central.pdf", miniatura: "/img/Home/pdf_medidas1.png" },
            //aca copias y pegas si hay mas links
            { pdf: "MEDIDAS DE TENDENCIA CENTRAL PARA DATOS AGRUPADOS", link: "https://www.cesp.cl/Descargas/3Media/4tos%20Medios/Matematica/7.-%2023-10-2020/Gu%C3%ADa%20N%C2%B07%20-%20MTC%20DATOS%20AGRUPADOS.pdf", miniatura: "/img/Home/pdf_medidas2.png" }
        ]
    },
    //Nueva fila
    {
        id: 1,
        title: "Distribución de Bernoulli",
        description: "La distribución de Bernoulli es una distribución de probabilidad discreta de un experimento de Bernoulli, un experimento que tiene exactamente dos resultados posibles, 'éxito' (con probabilidad p) y 'fracaso' (con probabilidad 1-p). Para hacer el cálculo de la distribución de Bernoulli, necesitamos ingrese el valor de 'p' y luego mostrarle las probabilidades de éxito y fracaso.",
        links_youtube: [
            { video: "Distribución de Bernoulli | Introducción y ejercicio resuelto", link: "https://www.youtube.com/watch?v=olGbPzIGJ4M", miniatura: "/img/Home/video_bernouli1.jpg" },
            //aca copias y pegas si hay mas links
            { video: "Distribución de Bernoulli", link: "https://www.youtube.com/watch?v=y8I9N2r2t10", miniatura: "/img/Home/video_bernouli1.jpg" }
        ],
        links_pdf: [
            { pdf: "Ensayos de Bernoulli", link: "https://www.cimat.mx/~jortega/MaterialDidactico/probabilidad17/Tema2.pdf", miniatura: "/img/Home/pdf_bernouli.png" },
            //aca copias y pegas si hay mas links
        ]
    },
    //PUEDES AGREGAR MAS FILAS AQUI VALESKA
    {
        id: 2,
        title: "Distribución de Poisson",
        description: "La distribución de Poisson es un modelo estadístico que se utiliza para predecir la probabilidad de ocurrencia de eventos en un espacio o intervalo de tiempo fijos, considerando que estos eventos suceden con una tasa constante y de manera independiente entre sí. Es especialmente útil para modelar eventos raros o aleatorios en un espacio o periodo de tiempo específicos. Al realizar cálculos relacionados con la distribución de Poisson, es crucial ingresar información precisa para los siguientes componentes:",
        description2: "Con estos dos datos, la distribución de Poisson puede predecir la probabilidad de que ocurra un número particular de eventos, lo que ayuda en la planificación y análisis en diversas áreas como la gestión de inventarios, los estudios de siniestralidad en seguros, y la teoría de colas en operaciones de servicio.",
        definiciones: [
            { tipo: "Tasa media de éxito (λ)", definition: "También conocida como 'parámetro de tasa', representa el número promedio de veces que se espera que ocurra un evento en el intervalo especificado. Por ejemplo, si se estudia la cantidad de llamadas que recibe una central telefónica por hora, λ sería el promedio de llamadas esperadas por hora." },
            { tipo: "Número de eventos (k", definition: "Este es el número específico de eventos para el cual el usuario desea calcular la probabilidad. En el contexto de la central telefónica, k sería el número de llamadas para el que se desea encontrar la probabilidad en una hora dada." },

        ],
        links_youtube: [
            { video: "Distribución de Poisson | Ejercicios resueltos | Intro", link: "https://www.youtube.com/watch?v=PMX75m4-s9A", miniatura: "/img/Home/video_poisson1.jpg" },
            //aca copias y pegas si hay mas links
            { video: "Distribución de Poisson | Teoría y ejercicio resuelto", link: "https://www.youtube.com/watch?v=hmAfNpD7Eps", miniatura: "/img/Home/Video_poisson2.jpg" }
        ],
        links_pdf: [
            { pdf: "La distribución Poisson", link: "https://riunet.upv.es/bitstream/handle/10251/7937/Distribucion%20Poisson.pdf", miniatura: "/img/Home/pdf_poisson1.png" },
            //aca copias y pegas si hay mas links
            { pdf: "La distribución de Poisson", link: "https://www.uv.es/zuniga/09_La_distribucion_de_Poisson.pdf", miniatura: "/img/Home/pdf_poisson2.png" }
        ]
    },
    {
        id: 3,
        title: "Distribución Binomial",
        description: "La distribución binomial es una distribución de probabilidad discreta que describe el número de éxitos en una secuencia de n ensayos independientes de sí o no (como cara o cruz), cada uno con su propia probabilidad de éxito. Para calcular la probabilidad usando la distribución binomial, introduzca los siguientes parámetros:",

        definiciones: [
            { tipo: "Número de ensayos (n)", definition: "Corresponde al número total de eventos o pruebas independientes en el experimento." },
            { tipo: "Probabilidad de éxito en un solo ensayo (p)", definition: "Es la probabilidad de que ocurra un éxito en un ensayo individual. Debe ser un valor entre 0 y 1, donde 0 indica imposibilidad y 1 indica certeza." },
            { tipo: "Número de éxitos (k) deseados", definition: "El número específico de éxitos que el usuario desea evaluar dentro del número total de ensayos." },

        ],
        links_youtube: [
            { video: "Distribución binomial | Ejercicios resueltos | Introducción", link: "https://www.youtube.com/watch?v=-XxZGvNClkg", miniatura: "/img/Home/video_binomial1.jpg" },
            //aca copias y pegas si hay mas links
            { video: "Distribución Binomial | Explicación y ejercicio resuelto", link: "https://www.youtube.com/watch?v=GvqsxC8UL3I", miniatura: "/img/Home/video_binomial2.jpg" }
        ],
        links_pdf: [
            { pdf: "La distribución binomial", link: "https://riunet.upv.es/bitstream/handle/10251/7936/Distribucion%20binomial.pdf", miniatura: "/img/Home/pdf_binomial1.png" },
            //aca copias y pegas si hay mas links
            { pdf: "Distribución binomial", link: "https://institutoclaret.cl/wp-content/uploads/2020/11/PPT-Distribuci%C3%B3n-Binomial.pdf", miniatura: "/img/Home/pdf_binomial2.png" }
        ]

    },
    {
        id: 4,
        title: "Distribución Normal",
        description: "La distribución normal, también conocida como la 'campana de Gauss', es fundamental en la estadística debido a su presencia en varios fenómenos naturales. Se caracteriza por su forma simétrica de campana donde la mayoría de las observaciones se agrupan alrededor del centro.Para calcular la probabilidad asociada con la distribución normal, necesitamos que los usuarios introduzcan los siguientes datos y comprendan su propósito:",
        description2: "Es importante destacar que, en la práctica, calcular la probabilidad exacta implica el área bajo la curva de la distribución normal, requiriendo técnicas de integración en el campo de cálculo. Sin embargo, aquí mostraremos cómo estos parámetros afectan la forma y posición de la curva normal.",
        definiciones: [
            { tipo: "Media (μ)", definition: "Es el valor promedio de la distribución y se sitúa en el centro de la curva de la campana. Representa el punto donde se esperan los valores." },
            { tipo: "Desviación estándar (σ)", definition: "Mide la dispersión de los datos respecto a la media. Una σ más grande indica un mayor esparcimiento de los datos; una más pequeña señala que los datos están más agrupados alrededor de la media." },
            { tipo: "Valor de X", definition: "Es el valor específico para el cual deseas calcular la probabilidad de ocurrencia. En el contexto de la distribución normal, estamos interesados en calcular la probabilidad de que la variable aleatoria sea menor que X, es decir, P(X < x)." },
        ],
        links_youtube: [
            { video: "DISTRIBUCIÓN NORMAL desde CERO | 2º bachillerato", link: "https://www.youtube.com/watch?v=2v_0AmKIuAA", miniatura: "/img/Home/video_normal1.jpg" },
            //aca copias y pegas si hay mas links
            { video: "DISTRIBUCIÓN NORMAL | INTRODUCCIÓN Desde Cero (Profesor Claudio)", link: "https://www.youtube.com/watch?v=c7NXmhQ--LE", miniatura: "/img/Home/video_normal2.jpg" }
        ],
        links_pdf: [
            { pdf: "La distribución normal", link: "https://www.ugr.es/~rruizb/cognosfera/sala_de_estudio/estadistica/distribucionnormal2.pdf", miniatura: "/img/Home/pdf_normal1.png" },
            //aca copias y pegas si hay mas links
            { pdf: "La distribución Normal", link: "https://m.riunet.upv.es/bitstream/handle/10251/7939/La%20distribucion%20Normal.pdf?sequence=3&isAllowed=y", miniatura: "/img/Home/pdf_normal2.png" }
        ]
    },

    {
        id: 5,
        title: "Teorema de Bayes",
        description: "El Teorema de Bayes es un principio fundamental en el campo de la estadística y la teoría de la probabilidad. Ofrece una forma matemática de actualizar la probabilidad de un evento a medida que se obtiene nueva evidencia. Se utiliza ampliamente en una variedad de campos, desde la medicina hasta la ingeniería, para hacer inferencias predictivas. Para utilizar el Teorema de Bayes y actualizar la probabilidad de un evento, es importante comprender y definir los siguientes términos:",
        description2: "El Teorema de Bayes nos ayuda a combinar estas probabilidades para obtener una nueva comprensión (la probabilidad a posteriori) de la situación después de considerar la nueva evidencia. Este proceso de actualización es fundamental en la toma de decisiones informadas y el razonamiento estadístico.",
        definiciones: [
            { tipo: "Probabilidad a priori (P(A))", definition: "Esta es nuestra creencia inicial o la probabilidad de un evento A antes de obtener nueva evidencia. Representa lo que sabemos antes de considerar los nuevos datos." },
            { tipo: "Probabilidad a posteriori (P(A|B))", definition: "Es la probabilidad revisada del evento A después de tomar en cuenta la nueva evidencia B. Este es el objetivo principal del cálculo de Bayes: entender cómo cambia nuestra creencia en la luz de nueva información." },
            { tipo: "Probabilidad de la evidencia (P(B))", definition: "La probabilidad del evento B, que es la nueva evidencia o información que estamos considerando." },
            { tipo: "Probabilidad de la evidencia dada la hipótesis (P(B|A))", definition: "Esto describe cuán probable es observar la nueva evidencia B si el evento A es verdadero." },
        ],
        links_youtube: [
            { video: "Teorema de Bayes | Introducción", link: "https://www.youtube.com/watch?v=bDfCURXoKkU", miniatura: "/img/Home/video_bayes1.jpg" },
            //aca copias y pegas si hay mas links
            { video: "Teorema de Bayes - Probabilidades - Ejercicios Resueltos", link: "https://www.youtube.com/watch?v=CP4ToX5Tyvw", miniatura: "/img/Home/video_bayes2.jpg" }
        ],
        links_pdf: [
            { pdf: "TEOREMA DE BAYES ", link: "http://administracion.universidadipei.com/wp-content/uploads/2020/08/A2.pdf", miniatura: "/img/Home/pdf_bayes1.png" },
            //aca copias y pegas si hay mas links
            { pdf: "Introducción a la Estadística Bayesiana", link: "https://ddd.uab.cat/pub/tfg/2015/137782/TFG_DailosCastellanoMarrero.pdf", miniatura: "/img/Home/pdf_bayes2.png" }
        ]
    },
    {
        id: 6,
        title: "Tabla de frecuencia",
        description: "Una tabla de frecuencias es una herramienta estadística que organiza y resume la información sobre la distribución de datos. Consiste en una estructura de columnas que muestra las distintas categorías o valores de una variable, junto con el número de veces que cada categoría ocurre en un conjunto de datos. Esta tabla proporciona una visión general y ordenada de la frecuencia con la que aparecen los valores en una muestra o población, lo que permite analizar patrones, identificar tendencias y extraer conclusiones significativas.",
        description2: "Es una herramienta fundamental en el análisis estadístico y es utilizada en diversos campos, como la investigación científica, el marketing, la economía y muchas otras disciplinas que requieren el estudio e interpretación de datos cuantitativos.",
        definiciones: [
            { tipo: "Valores de la variable:", definition: "Son los diferentes valores que toma la variable en el estudio." },
            { tipo: "Frecuencia absoluta:", definition: "Es la cantidad de veces que aparece el valor en el estudio. La sumatoria de las frecuencias absolutas es igual al número de datos." },
            { tipo: "Frecuencia absoluta acumulada:", definition: "Es el acumulado o suma de las frecuencias absolutas, indica cuantos datos se van contando hasta ese momento o cuántos datos se van reportando." },
            { tipo: "Frecuencia relativa:", definition: "Es la fracción o proporción de elementos que pertenecen a una clase o categoría. Se calcula dividiendo la frecuencia absoluta entre el número de datos del estudio." },
            { tipo: "Frecuencia relativa acumulada:", definition: "Es la proporción de datos respecto al total que se han reportado hasta ese momento. Es la suma de las frecuencias relativas, y se puede calcular también dividiendo la frecuencia acumulada entre el número de datos del estudio." },
        ],
        links_youtube: [
            { video: "Tabla de Frecuencias para Datos no Agrupados - Ejercicios Resueltos", link: "https://www.youtube.com/watch?v=iPEt789ewVM", miniatura: "/img/Home/frecuencia1.jpg" },
            //aca copias y pegas si hay mas links
            { video: "Tabla de frecuencias para datos agrupados y datos no agrupados (intervalos)", link: "https://www.youtube.com/watch?v=sOpQqDU5Swg", miniatura: "/img/Home/frecuencia2.jpg" }
        ],
        links_pdf: [
            { pdf: "TABLAS DE FRECUENCIAS", link: "https://www.cesp.cl/Descargas/3Media/4tos%20Medios/Matematica/5.-%2011-09-2020/Gu%C3%ADa%20N%C2%B05%20-%20TABLAS%20DE%20FRECUENCIAS.pdf", miniatura: "/img/Home/pdf_frecuencia1.png" },
            //aca copias y pegas si hay mas links
            { pdf: "Tablas de frecuencias ", link: "https://www3.gobiernodecanarias.org/medusa/ecoblog/agilarm/files/2014/10/UNIDAD-1.pdf", miniatura: "/img/Home/pdf_frecuencia2.png" }
        ]
    },
];