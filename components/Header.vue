<template>
    <i-layout id="home">
        <Navbar></Navbar>
        <i-header lazy-background="~assets/TI.jpg" size="lg" :cover="true" class="_text-center _text-white" fluid>
            <h1>{{ $t('Header.Title') }}</h1>
            <p>{{ $t('Header.Content') }}</p>
            <i-button variant="primary" v-scroll-to="'#person'">{{ $t('Header.Button') }}</i-button>
        </i-header>
    </i-layout>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
export default 
{
  components: 
  {
    Navbar
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Arapey&display=swap');
#header {
    background-image: url('~assets/TI.jpg');
} 

*{
  font-family: 'Arapey', serif;
}

p{
    font-size: 1.3em;
}
</style>
