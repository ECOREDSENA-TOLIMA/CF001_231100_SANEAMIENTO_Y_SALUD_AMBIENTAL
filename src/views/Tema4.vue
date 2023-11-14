<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Reportes sanitarios

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(style="background-color:#C1E29A")(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema4/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p Son un elemento de apoyo básico para el diseño y la planificación adecuada de nuevas políticas sanitarias o mejoras en estas, dichos reportes son emitidos por la Secretaría Regional Ministerial de Salud (SEREMI), en la cual se acredita que cualquier establecimiento puede ser comercial o industrial cumpla con todas las condiciones de seguridad mínimas para poder operar; dentro de estas condiciones se encuentran las exigencias sanitarias, ambientales y de prevención de riesgos, después de haber implementado todo lo que por ley se exige se obtendrá un reporte sanitario positivo.
        br
        br
        p Además, estos reportes son fundamentales para el buen desempeño de los sistemas de salud de un país, los programas, los planes de salud, la respectiva atención y la resolución de estos problemas sanitarios ameritan sistemas de información confiables emitidos de forma periódica, completa y continua.


    .row
      .col-lg-7(data-aos="fade-left")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/imgt.svg' alt='AvatarTop')(style="max-width: 55%;margin-top: -15px;")
          .tarjeta.tarjeta--azul.tituhoja(style="background-color:#C1E29A;margin-left: -16%;")
            .row.justify-content-center.align-items-center              
              .col-lg-12.tith
                h2.mt-2 Concepto e historia de la epidemiología
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-left")
        p La epidemiología es la ciencia que estudia las epidemias, es decir, es la ciencia que estudia el fenómeno de la propagación de las enfermedades que afectan a las sociedades de manera expansiva en el marco de un ciclo de tiempo. Ver figura.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        .cajon.color-secundario.p-4.mb-4(style="background-color:#D5FFF5")(data-aos="fade-left")
          p La palabra tiene su origen etimológico en los términos griegos epi, prefijo que significa "sobre"; demo, que significa "pueblo" y logos que significa "estudio, razonamiento o tratado". Por lo tanto, la epidemiología estudia las enfermedades que afectan al pueblo. En concreto, investiga la distribución de los problemas de la salud entre la población, los factores que pueden ser detonantes y el estado del fenómeno identificado, a fin de poder diseñar políticas en materia de salud pública que garanticen la desaparición del flagelo.
      .col-lg-4
        .row.justify-content-center.mb-1(data-aos="fade-left")
          .col-md-12.desktop 
            .titulo-sexto.color-acento-contenido.offset-1
              h5 Figura 6.
              span  #[i  Metodología del ASIS]
        
        .row.justify-content-center.mb-5(data-aos="fade-left")
          .col-md-12.desktop 
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema4/img2.svg', alt='En la figura 6 se muestra el estudio de la epidemiología.')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-left")
        p Es también importante recalcar la importancia que tiene la epidemiología, debido a que esta aporta a la identificación de posibles focos de infección, la disminución de factores de riesgo en la propagación de la enfermedad, el diseño de políticas públicas y planes de atención médica que ayuden a mitigar o frenar el impacto de alguna enfermedad; algunos de estos objetivos son:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema4/img3.png', alt='')
      .col-lg-5(data-aos="fade-left")
        .cajon.color-primario.p-4.mb-4(style="background-color:#C1E29A")
          ul.lista-ul
            li
              i.lista-ul__vineta
              | Identificar los problemas de salud de las comunidades.
            li
              i.lista-ul__vineta
              | Determinar los índices de morbilidad y mortalidad.
            li
              i.lista-ul__vineta
              | Describir la evolución de las enfermedades.
            li
              i.lista-ul__vineta
              | Identificar los factores de riesgo.
            li
              i.lista-ul__vineta
              | Prever la evolución y la expansión de la enfermedad.
            li
              i.lista-ul__vineta
              | Diseñar programas de intervención y prevención.
            li
              i.lista-ul__vineta
              | Aplicar los programas y hacerles seguimiento.
            li
              i.lista-ul__vineta
              | Evaluar los resultados. 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-left")
        p A continuación, conozca la historia de la epidemiología y sus principales representantes según cada época:

    
    LineaTiempoE.color-primario.mb-5
      .row(titulo="2000 a.C." subtitulo="")
        .col-lg-6.mb-4.mb-lg-0(data-aos="fade-left")
          h3 Papiro de Ebers
          p Menciona fiebres pestilentes (malaria), siendo una antigua referencia a un padecimiento colectivo.
          
      .row(titulo="1224 a.C. " subtitulo="")
        .col-lg-6(data-aos="fade-left")
          h3 Mineptah, sucesor de Ramsés II
          p Permite la salida de los judíos de Egipto debido a una plaga. Los libros sagrados (Biblia y Corán) describen la aparición de plagas y normas para prevenirlas.

      .row(titulo="450 a.C." subtitulo="")
        .col-lg-6(data-aos="fade-left")
          h3 Hipócrates
          p Da primeras referencias del término epidémico y endémico.
      .row(titulo="430 a.C." subtitulo="")
        .col-lg-6(data-aos="fade-left")
          H3 Plaga de Atenas
          p  Durante la Guerra de Peloponeso descrita por Homero, Heródoto.      
      .row(titulo="401 d.C." subtitulo="")
        .col-lg-6(data-aos="fade-left")
          h3 Lucrecio, Ovidio y Virgilio 
          p Que se refieren a fenómenos epidémicos.
      .row(titulo="1580" subtitulo="")
        .col-lg-6(data-aos="fade-left")
          h3 Guillaume de Naillou.
          p Es publicado el libro Epidemiorum.
      .row(titulo="1598" subtitulo="")
        .col-lg-6(data-aos="fade-left")
          h3 Quinto Tiberio Angelerio
          p Se publica la primera referencia del término Epidemiologia.
      .row(titulo="Siglo V" subtitulo="")
        .col-lg-6(data-aos="fade-left")
          h3 La plaga
          p Azotó al mundo ya recibió el nombre de epidemia.
      .row(titulo="Siglo VII" subtitulo="")
        .col-lg-6(data-aos="fade-left")        
          h3 Control sanitario
          p Se ejecutan por primera vez acciones de control sanitario en Europa asilamiento y cuarentena.
      .row(titulo="1650" subtitulo="")
        .col-lg-6(data-aos="fade-left")
          h3 Thomas Sydenham
          p Avance de las ciencias naturales reflejada en el estudio cuidadoso de patologías como la disentería, malaria, viruela, gota, sífilis.
      .row(titulo="1662" subtitulo="")
        .col-lg-6(data-aos="fade-left")
          h3 John Graunt
          p Identifica el patrón constante de causas de muerte y diferencias entre zonas rurales y urbanas: identificó que nacían más hombres que mujeres y que el 36% de los bebés morirían antes de llegar a los 6 años. Se propuso la creación de una agencia gubernamental encargada de la recolección e interpretación sistemática de la información de nacimientos, muertes distribución por sexo, edad y ocupación. Sugiere la creación de tablas de mortalidad.
      .row(titulo="Siglo VIII" subtitulo="")
        .col-lg-6(data-aos="fade-left")
          h3 Daniel Bernoulli
          p Publica un trabajo que concluye que la variación protegía y daba inmunidad hacia la viruela. 
      .row(titulo="Siglo XIX" subtitulo="")
        .col-lg-6(data-aos="fade-left")
          h3 Pierre Charles
          p Descubre que la Tuberculosis no es transmisible hereditariamente.
      .row(titulo="1837" subtitulo="")
        .col-lg-6(data-aos="fade-left")
          h3 William Farr
          p Da un concepto altamente preciso que es idéntico al termino Letalidad.
      .row(titulo="1846" subtitulo="")
        .col-lg-6(data-aos="fade-left")
          h3 P.L. Panum
          p Avance de sobre la contagiosidad del sarampión.
      .row(titulo="1850" subtitulo="")
        .col-lg-6(data-aos="fade-left")
          h3 Alexander Louis
          p Se muestra en la primera declaración de la Sociedad Epidemiológica de Londres, en donde se afirma que la estadística también nos ha proporcionado un medio nuevo y poderoso para poner a prueba las verdades médicas.
      .row(titulo="1980" subtitulo="")
        .col-lg-6(data-aos="fade-left")
          h3 Síndrome de inmunodeficiencia Humana
          p Diversos estudios epidemiológicos encontraron una fuerte asociación entre las prácticas sexuales y el riesgo de transmisión del Síndrome de inmunodeficiencia Humana.
      .row(titulo="Siglo XX" subtitulo="")
        .col-lg-6(data-aos="fade-left")
          h3 La epidemiología
          p Desarrolló con mayor precisión los conceptos de exposición, riesgo, asociación, confusión y sesgo, e incorporó el uso franco de la teoría de la probabilidad y de un sin número de técnicas de estadística avanzada.
      .row(titulo="Siglo XXI" subtitulo="")
        .col-lg-6(data-aos="fade-left")
          h3 Avance de programas preventivos y de promoción de la salud.

    .row
      .col-lg-7(data-aos="fade-left")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/imgt.svg' alt='AvatarTop')(style="max-width: 55%;margin-top: -15px;")
          .tarjeta.tarjeta--azul.tituhoja(style="background-color:#C1E29A;margin-left: -16%;")
            .row.justify-content-center.align-items-center              
              .col-lg-12.tith
                h2.mt-2 Sistema de vigilancia
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="fade-left")
        .cajon.color-secundario.p-4.mb-4(style="background-color:#D5FFF5")
          p Un sistema de vigilancia epidemiológico es un proceso dinámico que busca observar de manera continua todos los factores que tienen la conducta de un daño y las condiciones de la salud en general, a través de este sistema se realiza una identificación de los hechos, recolección de datos, consolidación y análisis, se toman decisiones y acciones y, se realiza una divulgación de la información sobre las enfermedades y los resultados de las medidas aplicadas. Este sistema además es esencial para el análisis del procesamiento del PHVA (Planear, Hacer, Verificar y Actuar) para estrategias de prevención.
          p Mencionado lo anterior, hay que tener en cuenta que estas acciones de vigilancia son fundamentales y resultan oportunas y efectivas para los programas de control de enfermedades, por tanto, estas no pueden faltar en dichos procesos, además todas las actividades de vigilancia epidemiológica deben ser llevadas a cabo en todos los niveles de prestación de servicios local, regional y central. 

      .col-lg-4
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema4/img4.png', alt='')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-left")
        p Ahora bien, existen elementos de vigilancia para tomar datos de cuáles enfermedades o condiciones serán objeto de vigilancia epidemiológica, estos pueden ser: casos, muertes, resultados de laboratorio, medidas de prevención o control, medio ambiente, vectores, reservorios, población, entre otros. Asimismo, existe un marco legal frente a las obligaciones de los sistemas de vigilancia epidemiológica, los cuales son: 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema4/img5.png', alt='')
      .col-lg-8(data-aos="fade-left")
        .cajon.color-primario.p-4.mb-4(style="background-color:#C1E29A")
          ul.lista-ul
            li
              i.fas.fa-check
              | Decreto 1562 de 1984.
            li
              i.fas.fa-check
              | Ley 9 de 1979, en cuanto a vigilancia y control epidemiológico y medidas de seguridad.
            li
              i.fas.fa-check
              | Resolución 1016 de 1989. Desarrollar actividades de vigilancia epidemiológica.
            li
              i.fas.fa-check
              | Decreto 1295 de 1994. Procurar el cuidado integral de la salud de los trabajadores y ambientes de trabajo.
            li
              i.fas.fa-check
              | Decreto 1530 de 1996. Se priorizan los riesgos a controlar y los PVE a desarrollar.
            li
              i.fas.fa-check
              | Resoluciones 2844 de 2007, 3676, 2646 y 1013 de 2008.
            li
              i.fas.fa-check
              | Decreto 1477 del 2014 GATISO y riesgos específicos.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-left")
        p El organismo encargado de declarar el alcance de una enfermedad es la Organización Mundial de la Salud (OMS) y según esta fuente se clasifican de la siguiente manera: 

    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta-gris").mb-5
      .row(titulo="Pandemia")
        .col-md-6.mb-4.mb-md-0
          p La pandemia hace referencia a la propagación de virus y enfermedades, y son epidemias que por su gran aceleración y crecimiento han acabado afectando a muchas zonas del mundo casi al mismo tiempo, por ejemplo, el COVID-19 fue declarado como una pandemia por la OMS debido al número de países que han sido afectados, igualmente pasó con la Gripe tipo A que acabó con más de 18.000 vidas en tan solo un año (2009 -2010). 
      
        .col-md-6
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/tema4/img6.png', alt='')            

      .row(titulo="Endemia")
        .col-md-6.mb-4.mb-md-0
          p Una endemia se conoce como aquella enfermedad infecciosa que aparecen en un país concreto y en un momento determinado, estas enfermedades son típicas de una zona y están presentes en la población durante varios años, un ejemplo de ello es la varicela, ya que se registran muchos casos en muchos países todos los años, igualmente la malaria en algunas partes de África y en otras partes del mundo es una infección endémica y causa también millones de muertes al año. 
      
        .col-md-6
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/tema4/img7.png', alt='')
      
      .row(titulo="Sindemia")
        .col-md-6.mb-4.mb-md-0
          p La sindemia es un concepto que une los conceptos de sinergia y pandemia, es aquella que se da cuando dos o más enfermedades interactúan entre sí causando así daños mucho mayores en las personas, es decir, es la suma de dos enfermedades. Según algunos especialistas como Horton, el coronavirus es una sindemia, ya que el SARS-CoV-2 interactúa con otras enfermedades como la diabetes, el cáncer, problemas cardiacos, asma, entre otras enfermedades no transmisibles. 
      
        .col-md-6
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/tema4/img8.png', alt='')
      
      .row(titulo="Epidemia")
        .col-md-6.mb-4.mb-md-0
          p Una epidemia es una enfermedad que se extiende durante un tiempo determinado afectando una zona y a un gran número de personas, también se utiliza la palabra brote para referirse a este concepto, especialmente a una enfermedad infecciosa en un lugar determinado, un ejemplo de ello es la epidemia de la influenza, que es una enfermedad respiratoria que afecta a muchas personas, igual que la gripa A en la variante AH1N1, la cual provocó millones de muertes en el mundo. 
      
        .col-md-6
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/tema4/img9.png', alt='')

    .row
      .col-lg-7(data-aos="fade-left")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/imgt.svg' alt='AvatarTop')(style="max-width: 55%;margin-top: -15px;")
          .tarjeta.tarjeta--azul.tituhoja(style="background-color:#C1E29A;margin-left: -16%;")
            .row.justify-content-center.align-items-center              
              .col-lg-12.tith
                h2.mt-2 Entomología en salud pública
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-left")
        p La entomología médica es la ciencia que estudia los insectos y otros artrópodos que tienen interés sanitario por su papel patógeno propio o por su papel vectorial, es decir, intervienen en el ciclo de transmisión de determinadas enfermedades que afectan al hombre, a los animales domésticos y silvestres. Las enfermedades transmitidas por vectores como el dengue, la malaria y la enfermedad de chagas, afectan enormemente la salud humana, así mismo, el laboratorio de entomología médica tiene diversas líneas de investigación, entre ellas:   

      .row.mb-5
        .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
          .tarjeta--boton.color-secundario.p-4(style="background-color:#DEFFF8")
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/tema4/img10.svg', alt='Texto que describa la imagen')

            p.text-small Estudia los insectos y artrópodos transmisores de enfermedades de interés en salud pública.
            br
            br

        .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
          .tarjeta--boton.color-secundario.p-4(style="background-color:#DEFFF8")
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/tema4/img11.svg', alt='Texto que describa la imagen')

            p.text-small Realiza investigaciones sobre colonias de insectos en el laboratorio.
            br
            br

        .col-sm-6.col-lg-4.mb-4.mb-sm-0(data-aos="fade-left")
          .tarjeta--boton.color-secundario.p-4(style="background-color:#DEFFF8")
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/tema4/img12.svg', alt='Texto que describa la imagen')
            
            p.text-small Investiga sobre infecciones experimentales, sondeos entomológicos y estudios de infectividad de reservorios potenciales de enfermedades como la leishmaniosis. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="fade-left")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema4/img13.png' alt='AvatarTop')
          .tarjeta.tarjeta-verde
            .p-4
              p Un caso cercano que realza la necesidad de este ámbito de estudio para asegurar la salud pública es el peligro potencial de introducción de virus tropicales como el #[i chikungunya] o el dengue, de la mano del mosquito tigre, #[i aedes albopictus], que hasta hace poco no tenía cabida en los territorios templados de Colombia. Con el paso del tiempo se está viendo una proliferación de las enfermedades tropicales transmitidas por artrópodos en Occidente.

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
