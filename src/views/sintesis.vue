<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p A continuación, se describe el tema principal del componente formativo Determinación de condiciones sanitarias de procesos, productos y servicios que es esencial para garantizar la seguridad y el bienestar de los consumidores. Mediante rigurosas inspecciones y análisis, se evalúan y establecen las normas y regulaciones necesarias para asegurar que todas las etapas del proceso cumplan con los estándares sanitarios. Desde la producción de alimentos hasta la prestación de servicios de salud, cada paso se somete a un escrutinio minucioso para prevenir enfermedades y garantizar la calidad. El monitoreo regular, las pruebas de laboratorio y las auditorías son herramientas clave en este proceso. La determinación de condiciones sanitarias se traduce en la confianza de los consumidores y en la protección de la salud pública. 
    
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis se presentan los temas más importantes del componente formativo en cuanto a componentes ambientales, afecciones a la salud, análisis de condiciones sanitarias y reportes sanitarios.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
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
