<template>
    <i-layout id="person">

        <i-layout-content class="_background-white _padding-top-4 _padding-bottom-6">

            <i-container>
                <i-row>

                    <i-column xs="12"
                    data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-mirror="true"
                    data-aos-once="true">
                        <i-layout-content class="">
                            <h3 class="_text-center">{{ $t('Person.Title') }}</h3>
                        </i-layout-content>
                        <i-layout-content>
                            <div class="_text-center">
                                <img data-src="~assets/profile.jpg" width="130" class="image -responsive _border _border-color-gray-60 _rounded-circle" alt="Owner Image" v-lazy-load>
                            </div>
                        </i-layout-content>
                        <i-layout-content class="animated">
                            <p class="_text-center _text-justify lead">
                                {{ $t('Person.Description') }}
                            </p>
                        </i-layout-content>
                    </i-column>

                </i-row>
            </i-container>
        </i-layout-content>

    </i-layout>
</template>

<script>

export default 
{
  
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Arapey&display=swap');
img {
  height: 130px !important;
  object-fit: cover;
}

*{
  font-family: 'Arapey', serif;
}
</style>
