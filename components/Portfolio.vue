<template>
  <div id="portfolio">
    <i-layout>
        
        <i-layout-content class="_background-tumblr _padding-top-2 _padding-bottom-6">
            
            <i-container>
                <i-row>

                    <i-column xs="12">
                            
                        <i-layout-content>
                            <h3 class="_text-center">{{ $t('Portfolio.Title') }}</h3>
                        </i-layout-content>
                
                    </i-column>

                    <i-column lg="12">
                        <All></All>
                    </i-column>

                </i-row>
            </i-container>

        </i-layout-content>

    </i-layout>
    
  </div>
</template>

<script>

import All from '~/components/Projects/All.vue'

export default 
{
  components:
  {
      All
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Arapey&display=swap');
*{
  font-family: 'Arapey', serif;
}
</style>
