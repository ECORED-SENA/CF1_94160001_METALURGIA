<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .cont_intro.pb-5
      .row
        .col-lg(data-aos="fade-right" data-aos-duration="800")
          .p-4(style="background-color:#E5E8ED;")
            .row
              .col-auto.d-none.d-md-block
                figure
                  img(src="@/assets/curso/intro2.svg")
              .col
                p.mb-0 Para comprender las propiedades de los metales, es fundamental entender las limitaciones de su comportamiento. Esto requiere una aplicación cuidadosa y adecuada, considerando que estas características deben equilibrar el costo de fabricación con su desempeño, la composición química, la síntesis, el procesamiento y la microestructura. Este enfoque permite desarrollar procesos de fabricación de productos que sean tanto económicos como eficientes.
          .row.mt-4
            .col-auto.d-none.d-lg-block
              figure
                img(src="@/assets/curso/intro3.png")
            .col
              p.mb-0 En Colombia y en el resto del mundo, existen leyes gubernamentales y tratados internacionales que exigen y recomiendan la protección del medio ambiente, la conservación de los seres vivos y la preservación de los recursos naturales y económicos del país. Esto se debe al impacto significativo de las actividades mineras, tanto legales como ilegales, en los aspectos de beneficios, transporte, producción y reciclaje de metales.
        .col-lg-auto.d-none.d-lg-block(data-aos="fade-left" data-aos-duration="1000")
          figure
            img(src="@/assets/curso/intro4.png")
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
