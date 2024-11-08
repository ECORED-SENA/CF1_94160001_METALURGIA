<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5(data-aos="fade-down" data-aos-duration="800") A continuación, se presenta una síntesis de la temática estudiada en el componente formativo. 

    .row.justify-content-center.p-4(style="background-color:#F6F6F6;border-radius:20px;")
      .col-lg-10.mb-5
        figure(data-aos="fade-up" data-aos-duration="900")
          img(src="@/assets/curso/sintesis.svg", alt="La síntesis presenta las propiedades de los metales, que se determinan a través de ensayos. Se divide en dos categorías principales: ensayos químicos y ensayos físicos. Dentro de los ensayos químicos, se encuentran la corrosión y la oxidación. Los ensayos físicos incluyen la conductividad eléctrica, dureza, fatiga y tenacidad. La tenacidad se desglosa en resistencia y ductilidad, y la resistencia se clasifica en resistencia a impacto, a compresión, a corte y a tensión.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
