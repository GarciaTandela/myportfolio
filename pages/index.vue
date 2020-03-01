<template>
  <div v-loading="loading">
    <Header></Header>
    <Person></Person>
    <Services></Services>
    <Skills></Skills>
    <Portfolio></Portfolio>
    <Contact></Contact>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Person from '~/components/Person.vue'
import Services from '~/components/Services.vue'
import Skills from '~/components/Skills.vue'
import Portfolio from '~/components/Portfolio.vue'
import Contact from '~/components/Contact.vue'
import Footer from '~/components/Footer.vue'
export default 
{
  components: 
  {
    Header,
    Person,
    Services,
    Skills,
    Portfolio,
    Contact,
    Footer
  }
}
</script>

<style>
</style>

