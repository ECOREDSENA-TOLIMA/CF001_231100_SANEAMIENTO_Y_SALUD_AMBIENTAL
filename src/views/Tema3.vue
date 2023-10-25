<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Análisis de las condiciones sanitarias

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema3/img1.png', alt='')
      .col-lg-8
        p Los análisis de situación de salud (ASIS) son aquellos que permiten medir, caracterizar y explicar el perfil de cada enfermedad en una población determinada y, así mismo, facilitan la identificación de necesidades y prioridades en salud y de aquellas intervenciones, programas apropiados y evaluaciones de impacto en la salud.
        p Este sistema de análisis de las condiciones sanitarias debe realizarse anualmente, por tanto, las entidades territoriales deben recibir asistencia técnica y acompañamiento presencial y virtual. Esto es importante debido a que fortalece la capacidad técnica en la aplicación de la metodología del ASIS. Ver figura.


    .row.justify-content-center.mb-1(data-aos="fade-left")
      .col-md-9.desktop 
        .titulo-sexto.color-acento-contenido.offset-1
          h5 Figura 5.
          span  #[i  Metodología del ASIS]
    
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-md-8.desktop 
        figure
          img(src='@/assets/curso/temas/tema3/img2.svg', alt='En la figura 5 se muestran las necesidades y problemas sanitarios.')
          figcaption Nota. Ministerio de Salud (2018)
      .col-md-8.movil
        figure
          img(src='@/assets/curso/temas/tema3/img2_1.svg', alt='En la figura 5 se muestran las necesidades y problemas sanitarios.')
          figcaption Nota. Ministerio de Salud (2018)

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Este análisis es fundamental para impedir la ocurrencia de algún riesgo o la existencia de alguna situación que atente contra la salud de las personas. A estas medidas se les debe dar inmediata ejecución porque son de carácter preventivo y transitorio, y se aplican en todo caso las sanciones correspondientes si es el caso.
        p Ahora bien, es indispensable tener en cuenta algunas condiciones sanitarias mínimas, que deben siempre estar en correspondencia con la seguridad como las descritas a continuación:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-6.p-2(data-aos="fade-down-left")
        .tarjeta-avatar-b.p-2.mb-5
          .tarjeta.tarjeta-verde.color-primario(style="background-color:#E7FFD1;margin-left:0px;height: 129px")
            p.mb-3
            ul.lista-ul
              li
                i.fas.fa-check(style="color:#63C500")
                | Permanecer siempre libre de cualquier tipo de contaminante e incluso de roedores.
      .col-lg-6(data-aos="fade-down-left")
        .tarjeta-avatar-b.mb-5        
          .tarjeta.tarjeta--azul.color-secundario(style="background-color:#E7FFD1;margin-left:0px;height: 129px")
            p.mb-3
            ul.lista-ul
              li
                i.fas.fa-check(style="color:#63C500")
                | Las puertas de acceso o las vías de ingreso deberán ser totalmente seguras y estar constantemente en mantenimiento.
      
      .col-lg-6(data-aos="fade-down-left")
        .tarjeta-avatar-b.mb-5        
          .tarjeta.tarjeta--azul.color-secundario(style="background-color:#E7FFD1;margin-left:0px;height: 129px")
            p.mb-3
            ul.lista-ul
              li
                i.fas.fa-check(style="color:#63C500")
                | Debe contar con el espacio suficiente que permita la circulación del aire y claramente del personal.

      .col-lg-6(data-aos="fade-down-left")
        .tarjeta-avatar-b.mb-5          
          .tarjeta.tarjeta--azul.color-secundario(style="background-color:#E7FFD1;margin-left:0px;height: 129px")
            p.mb-3
            ul.lista-ul
              li
                i.fas.fa-check(style="color:#63C500")
                | Los pisos, muros, ventanas y puertas deberían ser de materiales impermeables, no absorbentes, lavables, antideslizantes y atóxicos. Cualquiera de estos elementos no debe tener grietas y deberán ser fáciles de limpiar y desinfectar.
      .col-lg-6(data-aos="fade-down-left")
        .tarjeta-avatar-b.mb-5          
          .tarjeta.tarjeta--azul.color-secundario(style="background-color:#E7FFD1;margin-left:0px;height: 129px")
            p.mb-3
            ul.lista-ul
              li
                i.fas.fa-check(style="color:#63C500")
                | Los servicios higiénicos del personal, la ventilación, la iluminación, las instalaciones de residuos sólidos y las de lavado son otros factores que deben permanecer en las mejores condiciones de salubridad y saneamiento.
      .col-lg-6(data-aos="fade-down-left")
        .tarjeta-avatar-b.mb-5          
          .tarjeta.tarjeta--azul.color-secundario(style="background-color:#E7FFD1;margin-left:0px;height: 129px")
            p.mb-3
            ul.lista-ul
              li
                i.fas.fa-check(style="color:#63C500")
                | Tener en cuenta el abastecimiento de agua y asegurarse de que sea potable, bien distribuida y en cantidades suficientes.      

    .row
      .col-lg-7
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/imgt.svg' alt='AvatarTop')(style="max-width: 55%;margin-top: -15px;")
          .tarjeta.tarjeta--azul.tituhoja(style="background-color:#C1E29A;margin-left: -16%;")
            .row.justify-content-center.align-items-center              
              .col-lg-12
                h2(style="color:#264100").mt-2 Factores de riesgo a la salud
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(style="background-color:#C1E29A")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/img3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Teniendo en cuenta lo anterior es fundamental mencionar que la exposición a altos agentes contaminantes que pueden estar presentes en el aire, el agua y el suelo, causan también crisis agudas en la salud, incrementando así problemas en la visión, la nariz y las vías respiratorias, los dolores de cabeza, asma e incluso hipertensión, por ejemplo, según el Centro de Investigación y de Estudios Avanzados del INP, la mala calidad en el aire es un problema actual y significativo para la salud pública, la cual afecta a miles de personas en el mundo, desde niños hasta personas mayores; sin embargo, las personas más vulnerables a estas enfermedades por cualquier tipo de contaminación son niños, mujeres embarazadas, adultos mayores y personas con enfermedades preexistentes.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Todas las medidas de prevención y acción según el Gobierno de México en 2019 señalan que se requieren recursos económicos y, la organización debe crear una conciencia en la población de que el derecho a un aire limpio cuesta y es responsabilidad de todos, pues es una garantía para la calidad de vida de todos, especialmente de los más jóvenes que son el futuro del país.

    .row
      .col-lg-7
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/imgt.svg' alt='AvatarTop')(style="max-width: 55%;margin-top: -15px;")
          .tarjeta.tarjeta--azul.tituhoja(style="background-color:#C1E29A;margin-left: -16%;")
            .row.justify-content-center.align-items-center              
              .col-lg-12
                h2(style="color:#264100").mt-2 Tipos y clases
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Se puede decir que las consecuencias de un mundo contaminado son muchas y afectan a largo plazo el riesgo en la salud de la población. A continuación, se pueden revisar algunas de ellas y los tipos de contaminación:

    .row.justify-content-center
      .col-lg-10
        PasosA.color-acento-contenido.mb-5(tipo="l")
          .row
            .col-lg
              h3 Contaminación atmosférica
              p Es también llamada polución y se produce debido a la emisión de sustancias químicas a la atmósfera que afectan la calidad del aire, como el monóxido de carbono, el azufre, los óxidos de nitrógeno, entre otros.
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema3/img4.svg', alt='').img125
          .row                          
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema3/img5.svg', alt='').img125
            .col-lg
              h3 Contaminación hídrica
              p Se da por exceso de residuos en los lagos, ríos, plantas, cultivos, entre otros.
          .row
            .col-lg
              h3 Contaminación acústica y lumínica
              p Dada por cualquier ruido excesivo y la contaminación lumínica dada por la iluminación artificial fuerte que emiten las personas.              
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema3/img6.svg', alt='').img125
          .row
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema3/img7.svg', alt='').img125
            .col-lg
              h3 Quema de combustibles fósiles
              p Como el petróleo y el gas natural, los cuales emiten contaminantes nocivos en el aire como el benceno.                          
          .row
            .col-lg
              h3 Gases contaminantes
              p Producto de fábricas y vehículos a gas generando otro tipo de contaminantes como óxido de nitrógeno, dióxido de azufre e hidrocarburos; componentes químicos que reaccionan con elementos como la luz y provocan cambios drásticos en el ambiente como capas de niebla contaminante.              
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema3/img8.svg', alt='').img125
          .row
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema3/img9.svg', alt='').img125
            .col-lg
              h3 Lluvia ácida
              P Puede llegar a acabar con gran parte de la vegetación y contaminar fuertemente los lagos y arroyos, de hecho, si esta lluvia es excesiva en un determinado lugar puede llegar a convertirse en algo mortal para algunas especies marinas.                          

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-3
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/tema3/img10.svg', alt='').img125
        .col-lg-4
          h3 Todos estos contaminantes generan
          ul.lista-ul
            li
              i.fas.fa-check
              | Cambio climático.
            li
              i.fas.fa-check
              | Calentamiento global.
            li
              i.fas.fa-check
              | Efecto invernadero.
            li
              i.fas.fa-check
              | Afectación en la salud.
            li
              i.fas.fa-check
              | Calidad de los productos.

    .row
      .col-lg-7
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/imgt.svg' alt='AvatarTop')(style="max-width: 55%;margin-top: -15px;")
          .tarjeta.tarjeta--azul.tituhoja(style="background-color:#C1E29A;margin-left: -16%;")
            .row.justify-content-center.align-items-center              
              .col-lg-12
                h2(style="color:#264100").mt-2 Enfermedades transmitidas por alimentos
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Las buenas prácticas de saneamiento deben estar presentes en cada lugar de cualquier establecimiento, estas prácticas deben aplicarse también en los alimentos y son muy importantes, ya que pueden existir grandes contaminantes para la salud humana si no se realizan buenas prácticas. Así como los alimentos pueden tener muchas propiedades beneficiosas para el organismo, estas no son necesariamente seguras; estos riesgos pueden presentarse como peligros biológicos, químicos y físicos, y al mismo tiempo, subdividirse causando otros problemas de carácter biológico. 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema3/img11.png', alt='').img125
      .col-lg-8(style="background-color:#C1E29A;")
        p De acuerdo con lo anterior, los alimentos tienen una gran probabilidad de contaminarse y presenciar microorganismos como bacterias, levaduras, hongos, parásitos y virus, los cuales pueden llegar al consumidor por medio del medio ambiente, el suelo, de algunos agentes como la salmonella, el campylobacter, hepatitis tipo A, entre otros agentes presentes en los intestinos de los animales y de las personas. Además, también se corre riesgo por medio del cultivo, la cosecha y otros tipos de manipulación.
        br
        br
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(style="background-color:#E8FEFF;")
        p Es importante recalcar que hay muchos factores que también pueden llegar a afectar los alimentos, por ejemplo, hoy en día se ve que hay muchos puestos de comida que están ubicados en la calle e incluso cerca a alcantarillados, lo cual puede llegar a tener contacto directo con animales como ratas y desencadenar enfermedades por animales y agentes infecciosos por suciedad. Otro tipo de ejemplo es la gran contaminación que se puede encontrar en las frutas y verduras que se adquiere en las calles, ya que estas son abiertas bastante tiempo antes de ser ingeridas y pueden adquirir distintos virus y bacterias que afecten el fruto y también la vida del consumidor. 
        br
      .col-lg-4
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema3/img12.png', alt='').img125


    .row
      .col-lg-7
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/imgt.svg' alt='AvatarTop')(style="max-width: 55%;margin-top: -15px;")
          .tarjeta.tarjeta--azul.tituhoja(style="background-color:#C1E29A;margin-left: -16%;")
            .row.justify-content-center.align-items-center              
              .col-lg-12
                h2(style="color:#264100").mt-2 Buenas prácticas
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Pueden aplicarse algunas estrategias que podría usar cualquier tipo de establecimiento para el cuidado, la calidad e inocuidad de sus productos, alimentos y/o servicios. Conozca algunas de ellas:

    .tarjeta.tarjeta--amarilla.p-4(style="background-color:#EEFFDE")
      SlyderA(tipo="b")(data-aos="flip-right")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Determinar la ubicación 
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p Establecer el lugar o espacio de trabajo adecuado es fundamental para la comida de los empleados, la ventilación del aire y el buen desarrollo de las tareas, evitando, por ejemplo, en una cocina problemas de contaminación cruzada por alimentos.
                  
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img13.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Usar recipientes aptos 
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p Usar recipientes más higiénicos que eviten en mayor medida el contacto con el exterior, así mismo, tener orden y limpieza con estos es primordial para desarrollar buenas prácticas en la organización que sea.
                  
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img14.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Implementar medidas 
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p Hacerlo durante la exposición de temperaturas externas que tienen los productos o alimentos, ya que hay que tener en cuenta que los cambios bruscos de temperatura dificultan mantener la regulación térmica del alimento de manera adecuada.
                  
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img15.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Zonas de peligro
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p Los alimentos pueden estar expuestos a la descomposición y las zonas de peligro, de igual forma aislarse de zonas de temperatura extremas y llevar un estimado de comidas que puedan sufrir alteraciones o deterioro rápidamente para vender las necesarias y no dejarlas para próximos días, almacenándolas de manera inadecuada.
                  
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img16.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Establecer zonas 
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p Espacios para separar productos fríos y calientes, así como recipientes y utensilios no aptos para contener alimentos o evitar la presencia de materiales como plástico y cartones que son materiales que pueden ocasionar un incendio o descomposición de algún producto.
                  
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img17.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Iluminación correcta 
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p Tener una ubicación con la iluminación correcta puede evitar la disminución visual y permitir el desarrollar un trabajo de la mejor manera.                  
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img18.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Alejar productos combustibles o sustancias inflamables
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p Alejar del puesto de trabajo productos como combustibles o sustancias inflamables, realizar carteles que informen normas básicas de bioseguridad al momento de consumir en el puesto y que el trabajador tenga los equipos correctos para la manipulación de los alimentos, mantener los recipientes cerrados y en lugares apropiados y realizar un automantenimiento semanal de elementos como el aceite, el gas, el asador, entre otros.
                  
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img19.png', alt='')

</template>

<script>
export default {
  name: 'Tema3',
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
