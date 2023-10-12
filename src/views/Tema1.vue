<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Identificación de los componentes ambientales
      
    .cajon.color-secundario.p-4.mb-4
      p Los componentes ambientales del medio ambiente están constituidos por todos los elementos que integran el entorno, los cuales están funcionalmente interrelacionados y estructurados, se componen de elementos bióticos (aquellos que tienen vida) y abióticos (aquellos que no tienen vida), los cuales forman parte de toda la biósfera del planeta Tierra.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        p Lo anterior quiere decir que:
        .cajon.color-primario.p-4.mb-4(style="background-color:#E7FFD1;")
          p Los componentes ambientales son la suma de todos los seres vivos y todos aquellos elementos físicos y químicos que se ven en el agua, el aire y el suelo, los cuales forman un equilibrio ecosistémico del territorio.
      .col-lg-8
        figure
        img(src="@/assets/curso/temas/tema1/img1.png", alt="")

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
