<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Interpretación y descripción de las afectaciones a la salud

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .cajon.color-primario.p-4.mb-4(style="background-color:#DBF9BD")          
          p Según lo mencionado por Soler Palau en 2019, la Organización Mundial de la Salud (OMS) dice que la salud ambiental está directamente relacionada con todos aquellos factores que se han mencionado con anterioridad, como los factores físicos, químicos y biológicos. Muchos estudios e informes publicados por esta organización han comprobado que los efectos de la contaminación en el aire y el agua son devastadores para la salud humana, además, el medio ambiente influye en más de un 80% de los casos de enfermedades graves de carácter respiratorio y cardiovascular.
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img1.png', alt='')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12 Los impactos ambientales que más afectan a la salud son:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .row 
          .col-lg-2
            figure
              img(src='@/assets/curso/temas/tema2/img2.svg', alt='')
          .col-lg-4
            ul.lista-ul
              li
                i.lista-ul__vineta
                | Las alteraciones de los ecosistemas.
              li
                i.lista-ul__vineta
                | La desigualdad.
              li
                i.lista-ul__vineta
                | La acelerada urbanización.
          .col-lg-4
            ul.lista-ul
              li
                i.lista-ul__vineta
                | El cambio climático.
              li
                i.lista-ul__vineta
                | El exceso consumismo y el desecho de residuos.
              li
                i.lista-ul__vineta
                | Los modelos de producción insostenibles.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Todos estos aspectos traen consecuencias en la salud también por factores como contaminación en el aire, la falta de acceso al agua potable y el saneamiento, la exposición a sustancias químicas nocivas, los desastres naturales que se relacionan con el clima, los desechos plásticos marinos y microplásticos que pueden llegar a afectar el agua potable, las enfermedades zoonóticas, entre otros. 
        p A continuación, revise detalladamente la alteración y la afectación que se tiene por el comportamiento climático: 
    
    .row.justify-content-center.mb-1(data-aos="fade-left")
      .col-md-12.desktop 
        .titulo-sexto.color-acento-contenido.offset-1
          h5 Figura 3.
          span  #[i  Afectaciones de salud]
    
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-md-10.desktop 
        figure
          img(src='@/assets/curso/temas/tema2/img3.1.svg', alt='En la figura 3 se muestra las afectaciones de salud, provocadas por el comportamiento climático y como algunas de las epidemias se propagan entre la población por factores como la falta de agua y los cambios bruscos en el ambiente.')
          figcaption Nota. Tomado y adaptado del Boletín Epidemiológico del Ministerio de Salud (2018).

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Algunos factores son causados por la contaminación, y como efecto, pueden aparecer algunos tipos de enfermedades si se expone mucho tiempo a ellos. Los factores ambientales que influyen en la salud de las personas se dividen en algunos conceptos como:

    TabsA.color-acento-botones.mb-5(style="background-color=#DBF9BD")
      .tarjeta.colorprimario--borde.p-4(titulo="Factores físicos")
        .row.justify-content-center.align-items-center.mb-5
          .col-md-9
            h4
            p Estos engloban todas aquellas condiciones externas que los rodean, como factores de temperatura, iluminación, ruido, olores, entre otros, que pueden provocar afectaciones fuertes sobre la salud e incluso disminuir la calidad de vida de la persona y su comportamiento. 
          .col-md-3             
            figure
              img(src='@/assets/curso/temas/tema2/img16.svg', alt='')
      .tarjeta.colorprimario--borde.p-4(titulo="Temperatura ambiental")
        .row.justify-content-center.align-items-center.mb-5
          .col-md-9
            h4
            p Se define como la relación de las condiciones térmicas del ambiente en el que las personas habitan, las temperaturas juegan un papel importante ya que un cambio en estas puede generar problemas de salud y supervivencia. 
          .col-md-3             
            figure
              img(src='@/assets/curso/temas/tema2/img17.svg', alt='')
      .tarjeta.colorprimario--borde.p-4(titulo="Contaminación ambiental")
        .row.justify-content-center.align-items-center.mb-5
          .col-md-9
            h4
            p Está dada por el aire contaminado que se respira, por la contaminación en el agua e incluso en el suelo, existe además contaminación atmosférica, acústica, lumínica, visual, radioactiva, electromagnética, alimentaria, química, biológica, entre otras. 
          .col-md-3             
            figure
              img(src='@/assets/curso/temas/tema2/img18.svg', alt='')
      .tarjeta.colorprimario--borde.p-4(titulo="Factores químicos")
        .row.justify-content-center.align-items-center.mb-5
          .col-md-9    
            h4
            p Estos factores han ido aumentando a lo largo de los años y han aportado a ese aumento de enfermedades por causa de contaminantes ambientales, un ejemplo de ello, son las que se adquieren día a día en muchos hogares con el uso de cosméticos, detergentes, ropa, productos para el cabello, entre otros, que al entrar en el organismo afectan el sistema respiratorio y digestivo, incluso por contacto directo con estos elementos.
          .col-md-3             
            figure
              img(src='@/assets/curso/temas/tema2/img19.svg', alt='')
      .tarjeta.colorprimario--borde.p-4(titulo="Factores biológicos")
        .row.justify-content-center.align-items-center.mb-5
          .col-md-9
            h4
            p Estos factores lo componen animales, plantas y microorganismos como bacterias, virus, hongos, parásitos, vegetales, etc.
          .col-md-3
            figure
              img(src='@/assets/curso/temas/tema2/img20.svg', alt='')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-2
            figure
              img(src='@/assets/curso/temas/tema2/img21.svg', alt='')
          .col-lg-10
            p Las sustancias tóxicas y elementos naturales inorgánicos como el mercurio o el plomo pueden ser inhalados, ingeridos o absorbidos. Esto sucede porque no solo respiramos por la nariz, sino también los poros de nuestra piel están absorbiendo constantemente las sustancias que nos rodean haciendo que vayamos acumulando carga tóxica, y cuando sobrepasa los límites aceptables, empiezan a agravarse las enfermedades por la contaminación ambiental.

    .row
      .col-lg-7
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/imgt.svg' alt='AvatarTop')(style="max-width: 55%;margin-top: -15px;")
          .tarjeta.tarjeta--azul(style="background-color:#C1E29A;height:50px;margin-left: -16%;")
            .row.justify-content-center.align-items-center              
              .col-lg-12
                h2(style="color:#264100").mt-2 Tipos y componentes

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Establecidos los conceptos es importante relacionar algunos tipos y componentes que se dan en las afectaciones de la salud:
    
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="flip-right")
      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/img22.svg' alt='AvatarTop')        
        p Enfermedades respiratorias, tales como el asma, la bronquitis y la neumonía/pulmonía.
      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/img23.svg' alt='AvatarTop')        
        p Enfermedades virales tales como el dengue, la fiebre amarilla o la hepatitis.
      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/img24.svg' alt='AvatarTop')        
        p Enfermedades del sistema circulatorio, las cuales están relacionadas directamente con los gases que despiden los motores como el diesel.
      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/img25.svg' alt='AvatarTop')        
        p Aumenta hasta en 20% el riesgo de padecer cáncer de pulmón.
      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/img26.svg' alt='AvatarTop')        
        p Las comunidades pobres suelen envenenarse a sí mismas al usar fuentes de energía tóxicas como el carbón.
      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/img27.svg' alt='AvatarTop')        
        p La radioactividad/radiación es sumamente mortal. Una exposición prolongada a una cantidad considerable puede provocar severos tumores malignos en el cuerpo de la persona e incluso matarla. 
      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/img28.svg' alt='AvatarTop')        
        p Síntomas de una exposición menos prolongada pueden implicar pérdida de cabello, vómitos y mareos.
      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/img29.svg' alt='AvatarTop')        
        p Enfermedades psicológicas o relacionadas con el sistema nervioso derivan de la contaminación sonora. Casos de insomnio, dolores de cabeza y otros han sido reportados.
      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/img30.svg' alt='AvatarTop')        
        p La contaminación del agua afecta duramente a las comunidades con menos recursos o sin agua potable o limpia. Enfermedades como la malaria se propagan a través de este medio. Millones de adultos y niños mueren al año debido a la falta de agua limpia.
      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/img31.svg' alt='AvatarTop')        
        p En los países desarrollados cada año mueren casi 2 millones de niños debido a enfermedades que son provocadas por el agua contaminada. Esta agua también afecta negativamente a la flora y la fauna.

    .row
      .col-lg-9
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/imgt.svg' alt='AvatarTop')(style="max-width: 55%;margin-top: -15px;")
          .tarjeta.tarjeta--azul(style="background-color:#C1E29A;height:50px;margin-left: -16%;")
            .row.justify-content-center.align-items-center              
              .col-lg-12
                h2(style="color:#264100").mt-2 Sistema de alerta temprana ambiental para los efectos en salud
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Las alertas son un aviso que se mencionan con anterioridad por la manifestación de algún acontecimiento que ponga en riesgo la vida de alguien, para este caso, el sistema de alerta temprana ambiental se da como consecuencia de la degradación y el manejo inapropiado de los recursos naturales por causa de actividades humanas invasivas, esta alerta temprana y de respuesta es un mecanismo de integración que recopila datos del ambiente y de la población para dirigir la respuesta de salud pública, y así, buscar reducir el tiempo entre la emisión de alerta y la participación en la respuesta, previendo cualquier tipo de riesgo. 
        p La Organización Mundial de la Salud y la OPS han diseñado dos tipos de vigilancia que se relacionan en el SATAES y, por consiguiente, se consideran tres tipos de variables para la estimación del riesgo como se muestra en la siguiente figura:

    .row.justify-content-center.mb-1(data-aos="fade-left")
      .col-md-12.desktop 
        .titulo-sexto.color-acento-contenido.offset-1
          h5 Figura 4.
          span  #[i  Evaluación del riesgo]
    
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-md-10.desktop 
        figure
          img(src='@/assets/curso/temas/tema2/img32.svg', alt='En la figura 4 se muestran los tipos de vigilancia y variables para la evaluación de riesgos.')

    .row
      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/imgt.svg' alt='AvatarTop')(style="max-width: 55%;margin-top: -15px;")
          .tarjeta.tarjeta--azul(style="background-color:#C1E29A;height:50px;margin-left: -16%;")
            .row.justify-content-center.align-items-center              
              .col-lg-12
                h2(style="color:#264100").mt-2 Amenazas y emergencias ambientales

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/img33.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las emergencias ambientales que se asocian con la contaminación y el mal manejo de las sustancias generan afectaciones en la población y también en el ambiente, esto puede causar varias amenazas y emergencias ambientales como desastres naturales, los cuales son ocasionados por fenómenos de la naturaleza que dejan grandes pérdidas materiales y vidas humanas; en estos acontecimientos no hay intervención de personas, así que estos pueden ser terremotos, inundaciones, tsunamis, huracanes, entre otros. Por otro lado, están los desastres antropónimos, estos, a diferencia de los naturales, son causados por la intervención de actividades humanas que repercuten en enormes daños o destrucciones que alteran el funcionamiento del entorno en general, pueden darse por la contaminación atmosférica por emisiones, contaminación por radiaciones nucleares, incendios forestales o derrames de compuestos químicos. 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p.mb-0 Es importante mencionar que en estos factores de riesgo existen también amenazas como las geológicas, que son fenómenos naturales interpretados como fallas geológicas, emisiones volcánicas, deslizamientos, caídas de rocas, avalanchas, etc. Igualmente, están las amenazas meteorológicas, que son un fenómeno natural de origen atmosférico, hidrológico u oceanográfico como los ciclones, lluvias torrenciales, descargas eléctricas, tormentas de nieve, tormentas de arena, entre otros. Finalmente, también se consideran las amenazas sísmicas, de origen social, tecnológico y biológico.

    


</template>

<script>
export default {
  name: 'Tema2',
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
