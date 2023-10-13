<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p(data-aos="fade-left") Por medio de este componente contará con una visión más amplia de la importancia que tiene determinar las condiciones sanitarias de procesos, productos y servicios, de acuerdo con los protocolos técnicos y normativos. 
        p(data-aos="fade-left") La información que se presenta a continuación le ayudará a identificar los factores de riesgo, de acuerdo con el protocolo y la normativa sanitaria correspondiente y a desarrollar sus propias estrategias de pensamiento para resolver las situaciones de la vida personal y profesional, dado que cualquier producto debe contar con indicadores o un certificado de calidad para garantizar que esté fuera de algún riesgo sanitario y que cuente con la salubridad, calidad y limpieza óptima. 

    .row.justify-content-center.align-items-center.md-5   
      .col-lg-12(data-aos="fade-left")     
        figure
          .video          
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
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
