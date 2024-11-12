<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Especificaciones técnicas de los productos metálicos
    
    .row(data-aos="fade-up" data-aos-duration="950")
      .col(style="place-self:center;")
        p.mb-0 Un proceso se define como el conjunto de actividades interrelacionadas que transforman elementos de entrada en productos. En el caso de los #[strong productos metálicos], uno de estos elementos de entrada son las especificaciones, que se refieren a las #[strong normas y procedimientos] aplicables en todos los trabajos de #[strong construcción de obras, elaboración de estudios o fabricación de equipos.] 
      .col-auto.d-none.d-md-block(style="place-self:center;" data-aos="fade-left" data-aos-duration="1200")
        figure
          img(src="@/assets/curso/tema1/1.svg")
    
    .col-xl-10.m-auto.mt-5
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="flip-up")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema1/2.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Estas especificaciones siempre se redactan y se consignan en los contratos correspondientes. Las especificaciones provienen de entidades internacionales que, mediante estudios de ingeniería, establecen los valores numéricos de las propiedades de los metales adecuados para el uso previsto.
    
    .row.mt-5
      .col-lg(data-aos="fade-right")
        .row
          .col-auto.pe-lg-0.d-none.d-lg-block
            figure
              img(src="@/assets/curso/tema1/3.png")
          .col-lg.ps-lg-0
            .p-4.h-100.d-flex.align-content-center.flex-wrap(style="background-color:#FDECD4;")
              p.fw-bold.mb-0 Por ejemplo
              p.mb-0 Si se busca fabricar un tenedor para uso en un restaurante, es evidente que este debe ser lo suficientemente resistente para evitar que se doble o se rompa, además de ser resistente a la oxidación y a la corrosión. En este caso, se combinan dos tipos de propiedades: una física y una química.
        p.mt-4 Es fundamental que las propiedades requeridas para #[strong un producto metálico sean comprendidas y definidas por todas las personas involucradas en el diseño del producto], para que el área de fabricación pueda seleccionar los materiales más adecuados desde una perspectiva técnica y económica.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/4.png")
    
    p.mt-4(data-aos="fade-up") Entre las entidades que norman las especificaciones de los metales, se encuentra:

    .col-xl-10.m-auto.mt-4
      .p-4(style="background-color:#E5E8ED;" data-aos="fade-up" data-aos-duration="900")
        .row.justify-content-center
          .col-lg-auto.mb-4.mb-lg-0.col-md-10(style="place-self:center;")
            figure 
              img(src="@/assets/curso/tema1/5.svg")
          .col-lg(style="place-self:center;")
            p.mb-0 #[strong ASTM (American Society for Testing Materials):] una asociación de profesionales y empresas que ha establecido especificaciones para materiales y metales, empleadas tanto en la fabricación de productos industriales como de uso doméstico. 
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/6.svg")
        .col.ps-2(style="place-self:end;")
          h3.mb-0.mb-lg-2.pe-4 Propiedades de los metales
    
    .row
      .col-lg(data-aos="fade-right")
        p.mb-0 Las propiedades de los metales se refieren a las características de su comportamiento o respuesta frente a condiciones específicas de uso. Las propiedades físicas y químicas de los metales ante condiciones externas de aplicación, y en cómo se evalúa dicho comportamiento mediante ensayos normalizados por la ASTM, que permiten determinar: tenacidad, fatiga, dureza y conductividad eléctrica en el ámbito físico. En el ámbito químico, se evaluarán la oxidación, la corrosión y la reactividad.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/7.png")
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_1_1 1.1 Ensayos físicos
    
    .row
      .col-lg(data-aos="fade-right")
        p Se entiende por ensayo el conjunto de pruebas que permiten analizar el comportamiento de un metal para determinar sus características ante posibles condiciones de uso, identificar defectos en piezas terminadas y establecer las causas de posibles fallos.
        p Existen ensayos que evalúan el comportamiento del metal frente a exigencias de tipo físico, es decir, su capacidad para soportar esfuerzos mecánicos.
        LineaTiempoD.color-secundario.mt-4
          div.text-small(numero="1" titulo="Tenacidad") 
            .row.justify-content-center
              .col-lg.mb-4.mb-lg-0
                p.mb-0 En la ciencia de materiales, la tenacidad se refiere a la energía total de deformación que un material puede absorber antes de romperse, ya sea por impacto o por acumulación de dislocaciones. Depende en gran medida del grado de cohesión entre las moléculas de la aleación. La relación entre el esfuerzo y la deformación se ilustra en un diagrama donde la resiliencia es el área bajo la curva en la zona verde, y la tenacidad es la suma de las áreas bajo la curva en las zonas verde y amarilla.
              .col-lg-auto.col-md-8.col-10
                figure
                  img(src="@/assets/curso/tema1/8.png")
          div.text-small(numero="2" titulo="Ductilidad") 
            .row.justify-content-center
              .col-lg.mb-4.mb-lg-0
                p.mb-0 La ductilidad es la capacidad de un metal para ser estirado o trefilado en forma de hilos. Un ejemplo de esto es una puntilla, que se fabrica a partir de un rollo de alambrón, el cual se transforma, mediante un proceso continuo de trefilación, en un alambre delgado que luego se corta y se le da forma de punta y cabeza.
              .col-lg-auto.col-md-8.col-10
                figure
                  img(src="@/assets/curso/tema1/9.png")
          div.text-small(numero="3" titulo="Maleabilidad") 
            .row.justify-content-center
              .col-lg.mb-4.mb-lg-0
                p.mb-0 La maleabilidad es la cualidad de un metal que le permite ser transformado en láminas mediante un proceso de laminación.
              .col-lg-auto.col-md-8.col-10
                figure
                  img(src="@/assets/curso/tema1/10.png")
          div.text-small(numero="4" titulo="Resistencia") 
            .row.justify-content-center
              .col-lg.mb-4.mb-lg-0
                p.mb-0 Los metales en servicio están sometidos a fuerzas o cargas. En estas condiciones, es fundamental conocer las características del metal para diseñar componentes de manera que los esfuerzos a los que estén expuestos no excedan su resistencia máxima, evitando así la fractura del material. El comportamiento mecánico de un metal es resultado de la relación entre su deformación y la fuerza aplicada.
              .col-lg-auto.col-md-8.col-10
                figure
                  img(src="@/assets/curso/tema1/11.png")
          div.text-small(numero="5" titulo="Resistencia a compresión") 
            .row.justify-content-center
              .col-lg.mb-4.mb-lg-0
                p.mb-0 Este ensayo se realiza colocando una probeta cilíndrica en una máquina universal de ensayos, que aplica una fuerza uniaxial hasta que la probeta se abomba y finalmente se rompe. El equipo cuenta con un sistema de recolección de datos que permite construir una curva de esfuerzo-deformación.
              .col-lg-auto.col-md-8.col-10
                figure
                  img(src="@/assets/curso/tema1/12.png")
          div.text-small(numero="6" titulo="Ensayo de tensión") 
            .row.justify-content-center
              .col-lg.mb-4.mb-lg-0
                p Este ensayo tecnológico tiene como objetivo determinar la resistencia elástica, resistencia última, fluencia y tenacidad de un metal cuando se somete a fuerzas uniaxiales en tensión. Las características mínimas del equipo incluyen:
                ul.lista-ul
                  li.d-flex.mb-0
                    i.fas.fa-check-circle(style="color:#FE783D;")
                    span Alcanzar la fuerza suficiente para fracturar la probeta.
                  li.d-flex.mb-0
                    i.fas.fa-check-circle(style="color:#FE783D;")
                    span Controlar la velocidad de aplicación de fuerzas.
                  li.d-flex.mb-0
                    i.fas.fa-check-circle(style="color:#FE783D;")
                    span Registrar las fuerzas (F) aplicadas y los alargamientos (ΔL) de la probeta.
                p.mb-0 El resultado del ensayo de tracción se registra y grafica en el diagrama esfuerzo-deformación, que proporciona al diseñador del producto una referencia sobre el comportamiento del material bajo condiciones de carga.
              .col-lg-auto.col-md-8.col-10
                figure
                  img(src="@/assets/curso/tema1/13.png")
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/14.png")

    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_1_2 1.2 Ensayos químicos
    
    .row
      .col-md(data-aos="fade-right")
        p.mb-0 Otros ensayos buscan conocer la estructura interna del material. A partir de estos, se obtienen datos sobre la resistencia del material frente a agentes químicos o su interacción con sustancias en estado sólido, líquido o gaseoso, y se determina cómo este contacto degrada el metal en términos de tipo de daño y duración.
      .col-md-auto.d-none.d-md-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/15.svg")
    
    .cont_1_1.mt-5.pb-4
      .cont_decorativo.mb-4(data-aos="fade-right")
        .row
          .col-auto.pe-0
            figure
              img(src="@/assets/curso/tema1/6.svg")
          .col.ps-2(style="place-self:end;")
            h3.mb-0.mb-lg-2.pe-4 Oxidación
      
      .row
        .col-lg(data-aos="fade-right")
          p La oxidación ocurre cuando un material se combina con el oxígeno, formando óxidos complejos. Este proceso puede expresarse de forma esquemática:
          .p-4.mt-4.text-center.col-lg-10.m-auto(style="background-color:#CDD2DC;border-radius:5px;")
            h4.mb-0 Material + Oxígeno = Óxido del material ± energía.
          p.mt-4.mb-0 Si la reacción es exotérmica (libera energía), se facilita la formación del óxido. Si es endotérmica (absorbe energía), el material es más resistente a la oxidación. La reacción química produce una capa de óxido, que puede ser dura e impermeable (patinas), lo cual protege al metal y detiene la oxidación, o puede formar capas porosas que permiten que la oxidación continúe, degradando el metal y favoreciendo la corrosión.
        .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema1/16.png")
      
      .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
        .row
          .col-auto.pe-0
            figure
              img(src="@/assets/curso/tema1/6.svg")
          .col.ps-2(style="place-self:end;")
            h3.mb-0.mb-lg-2.pe-4 Corrosión
      
      .row
        .col-lg(data-aos="fade-right")
          p La corrosión se produce cuando la oxidación del metal ocurre en un ambiente húmedo o en presencia de otras sustancias. Esta es más dañina que la oxidación simple, ya que, en un medio húmedo, la capa de óxido no se deposita sobre el material, sino que se disuelve y se desprende, reduciendo el espesor del metal. La corrosión no se distribuye de manera uniforme, generando puntos específicos de ataque que pueden provocar fisuras y, eventualmente, la rotura por fatiga o una fractura frágil del material, especialmente si está sometido a tensiones cíclicas o bajas temperaturas.
          figure.mt-4
            img(src="@/assets/curso/tema1/17.svg" style="max-width:295px;")
        .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema1/18.png")

    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/6.svg")
        .col.ps-2(style="place-self:end;")
          h3.mb-0.mb-lg-2.pe-4 Fatiga
    
    .row
      .col-lg(data-aos="fade-right")
        .p-4.p-lg-3(style="background-color:#BFE7F2;border-radius:14px;")
          .row
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src="@/assets/curso/tema1/19.png")
            .col-lg(style="place-self:center;")
              p.mb-0 Es un fenómeno que lleva a la fractura de una pieza mecánica debido a solicitaciones repetidas o cíclicas. Puede verificarse fácilmente doblando alternativamente un alambre en un sentido y luego en el opuesto. En un momento determinado, la fractura ocurre incluso con esfuerzos muy pequeños. En la práctica, lo que sucede con los metales es comparable a lo que ocurre con las personas: la repetición de un esfuerzo, aunque sea leve, puede causar un estado de fatiga.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/20.png")
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/6.svg")
        .col.ps-2(style="place-self:end;")
          h3.mb-0.mb-lg-2.pe-4 Dureza
    
    p(data-aos="fade-up") Propiedad de la capa superficial de un material que le permite resistir la deformación elástica, plástica y la destrucción, frente a esfuerzos de contacto locales aplicados por otro cuerpo más duro, que no sufre deformaciones residuales (indentador o penetrador) de forma y dimensiones específicas. El método de Rockwell, aunque es un método de indentación, no mide la dureza de forma directa a través de la determinación precisa de los esfuerzos de contacto, sino que la expresa como un número arbitrario, inversamente proporcional a la penetración del indentador.

    .col-xl-10.m-auto.mt-5
      .titulo-sexto.color-acento-contenido(data-aos="fade-down")
        h5 Figura 1.
        span Ensayo Rockwell
      .cont_1_2.p-0.pb-xl-5.pt-xl-5(data-aos="zoom-in" data-aos-duration="900")
        .col-xl-11.m-auto
          .bg-white.p-4.col-xl-11.m-auto
            figure
              img(src="@/assets/curso/tema1/22.svg")
    
    .row.mt-4
      .col-lg.pe-lg-0(data-aos="fade-up")
        .p-4.h-100(style="background-color:#FBD9AB;")
          .row
            .col-md-auto(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema1/23.svg")
            .col-md(style="place-self:center;")
              p.mb-0 El estándar #[strong ASTM E 18-03] define la dureza Rockwell como un método de ensayo por indentación, mediante el cual, con el uso de una máquina calibrada, se aplica un indentador cónico esferoidal de diamante (penetrador de diamante) o una bola de acero endurecido (acero o carburo de tungsteno) sobre la superficie del material a ser probado, bajo condiciones específicas. Este proceso se realiza en dos etapas, midiendo la profundidad permanente de la huella dejada bajo condiciones precisas de carga.
      .col-lg-auto.d-none.d-lg-block.ps-lg-0(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/24.png")
        




      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
