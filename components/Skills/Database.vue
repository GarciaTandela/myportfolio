<template>
 
    <div>
        <!-- Conteúdo -->
        <i-row>
            
            <i-column xs="4" class="hvr-hang">

                <i-layout-content class="_display-flex _justify-content-center">
                    <img data-src="https://img.icons8.com/ios/48/000000/mysql-logo.png" class="image -responsive" alt="MYSQL Image" v-lazy-load>
                </i-layout-content>

                <i-layout-content class="_display-flex _justify-content-center">
                    <label>MYSQL</label>
                </i-layout-content>

            </i-column>

            <i-column xs="4" class="hvr-hang">

                <i-layout-content class="_display-flex _justify-content-center">
                    <img data-src="https://img.icons8.com/color/48/000000/mongodb.png" class="image -responsive" alt="MongoDB Image" v-lazy-load>
                </i-layout-content>

                <i-layout-content class="_display-flex _justify-content-center">
                    <label>MONGODB</label>
                </i-layout-content>

            </i-column>

            <i-column xs="4" class="hvr-hang">

                <i-layout-content class="_display-flex _justify-content-center">
                    <img data-src="https://img.icons8.com/color/48/000000/redis.png" class="image -responsive nuxt" alt="Redis Image" v-lazy-load>
                </i-layout-content>

                <i-layout-content class="_display-flex _justify-content-center">
                    <label>REDIS</label>
                </i-layout-content>

            </i-column>


        </i-row>
                                                                
    </div>
 
</template>

<script>

export default 
{

}
</script>

<style scoped>
.nuxt{
    height: 48px !important;
}
</style>
