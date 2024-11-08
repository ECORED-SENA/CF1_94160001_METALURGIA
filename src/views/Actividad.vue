<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'Propiedades mecánicas y metalúrgicas de los metales ',
      titulo: 'Cuestionario',
      introduccion:
        'Identificar las propiedades mecánicas y metalúrgicas de los metales, así como los diferentes ensayos físicos y químicos utilizados para evaluar su comportamiento bajo diversas condiciones. ',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto: '¿Qué característica define la tenacidad de un metal? ',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Absorción de energía antes de la rotura. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Resistencia a la deformación permanente. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Capacidad para ser estirado en hilos. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Resistencia a la oxidación. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: 'La maleabilidad de un metal se refiere a: ',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Capacidad de formar láminas mediante laminación. ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Resistencia a la fractura por tensión. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Dureza superficial del material. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Capacidad para soportar cargas cíclicas. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Cuál es la función principal de un ensayo de tensión? ',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Medir la resistencia química de un metal. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evaluar la reactividad ante el oxígeno. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Determinar la resistencia elástica y la tenacidad. ',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Analizar la estructura interna de un metal. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: 'La oxidación de un metal ocurre cuando: ',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se combina con el oxígeno, formando óxidos. ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Soporta fuerzas de igual magnitud y opuestas. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Es sometido a cargas repetitivas. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La dureza es evaluada mediante un indentador. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál de las siguientes es una propiedad química de los metales? ',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Dureza. ', esCorrecta: false },
            { id: 'b', texto: 'Corrosión. ', esCorrecta: true },
            {
              id: 'c',
              texto: 'Resistencia a la compresión. ',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Maleabilidad. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué entidad internacional define normas para materiales y metales? ',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'ASTM. ', esCorrecta: true },
            { id: 'b', texto: 'AFNOR. ', esCorrecta: false },
            { id: 'c', texto: 'ISO. ', esCorrecta: false },
            { id: 'd', texto: 'ICC.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿En qué tipo de ambiente la corrosión de los metales es más peligrosa? ',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'En ambientes de baja humedad. ',
              esCorrecta: false,
            },
            { id: 'b', texto: 'En ambientes secos. ', esCorrecta: false },
            { id: 'c', texto: 'En ambientes húmedos. ', esCorrecta: true },
            {
              id: 'd',
              texto: 'En ambientes con baja presión. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué mide un ensayo de fatiga? ',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La capacidad de un metal para ser laminado. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La resistencia de un metal ante solicitaciones cíclicas. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La dureza de la capa superficial. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La reacción del metal ante cambios de temperatura. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'La maleabilidad permite a un metal ser transformado en hilos. ',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso. ', esCorrecta: false },
            { id: 'b', texto: 'Verdadero. ', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'La resistencia a la compresión se evalúa mediante ensayos uniaxiales. ',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso. ', esCorrecta: false },
            { id: 'b', texto: 'Verdadero. ', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué fenómeno describe la transición entre deformaciones elásticas y plásticas en los metales? ',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Tenacidad. ', esCorrecta: false },
            { id: 'b', texto: 'Fluencia. ', esCorrecta: true },
            { id: 'c', texto: 'Maleabilidad. ', esCorrecta: false },
            { id: 'd', texto: 'Ductilidad. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Cuál de las siguientes características describe la dureza de un metal? ',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Capacidad para ser estirado. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Resistencia a la deformación por un cuerpo más duro. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Energía absorbida antes de la rotura. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Capacidad de soportar fuerzas cíclicas. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué ensayo se utiliza para evaluar la resistencia de un metal ante fuerzas de corte? ',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Ensayo de tensión. ', esCorrecta: false },
            { id: 'b', texto: 'Ensayo de dureza. ', esCorrecta: false },
            {
              id: 'c',
              texto: 'Ensayo de resistencia a corte. ',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Ensayo de tracción. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Cuál es el objetivo de las cámaras de niebla salina en los ensayos de corrosión? ',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Probar la dureza superficial de un metal. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Simular condiciones ambientales corrosivas de manera acelerada. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Determinar la ductilidad de un metal. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evaluar la resistencia de un metal a la tensión. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'La oxidación de un metal siempre resulta en una capa protectora para el material. ',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso. ', esCorrecta: true },
            { id: 'b', texto: 'Verdadero. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
