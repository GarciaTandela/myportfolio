<template>
    <i-layout id="services">

        <i-layout-content class="_background-tumblr _padding-top-3">

            <i-container>
                <i-row>

                    <i-column xs="12">
                        
                        <i-layout-content>
                            <h3 class="_text-center">{{ $t('Services.Title') }}</h3>
                        </i-layout-content>
            
                    </i-column>

                    <!-- My services cards -->
                    <i-column xs="12" sm="12" md="12" lg="12" class="_margin-top-2 _margin-bottom-8">
                        <i-row>

                            <i-column class="_margin-bottom-xs-2 _margin-bottom-sm-2 _margin-bottom-md-2" xs="12" sm="12" md="12" lg="4" 
                            data-aos="fade-right"
                            data-aos-duration="3000" data-aos-delay="30"
                            data-aos-mirror="true"
                            data-aos-once="true">
                                <i-layout-content class="hvr-bob ">
                                    <i-card size="md">
                                        <img class="web" slot="image" data-src="~assets/web.png" alt="Web Dev Image" v-lazy-load/>
                                        <h4 class="title _text-center">{{ $t('Services.Web.Title') }}</h4>
                                        <p class="_text-justify">
                                            {{ $t('Services.Web.Description') }}
                                        </p>
                                    </i-card>
                                </i-layout-content>
                            </i-column>

                            <i-column class="_margin-bottom-xs-2 _margin-bottom-sm-2 _margin-bottom-md-2" xs="12" sm="12" md="12" lg="4"
                            data-aos="fade-right"
                            data-aos-duration="3000" data-aos-delay="30"
                            data-aos-mirror="true"
                            data-aos-once="true">
                                <i-layout-content class="hvr-bob ">
                                    <i-card size="md">
                                        <img class="mobile" slot="image" data-src="~assets/mobile.png" alt="Mobile Dev Image" v-lazy-load/>
                                        <h4 class="title _text-center">{{ $t('Services.Mobile.Title') }}</h4>
                                        <p class="_text-justify">
                                            {{ $t('Services.Mobile.Description') }}
                                        </p>
                                    </i-card>
                                </i-layout-content>
                            </i-column>

                            <i-column xs="12" sm="12" md="12" lg="4"
                            data-aos="fade-right"
                            data-aos-duration="3000" data-aos-delay="30"
                            data-aos-mirror="true"
                            data-aos-once="true">
                                <i-layout-content class="hvr-bob ">
                                    <i-card size="md">
                                        <img class="desktop" slot="image" data-src="~assets/desktop2.svg" alt="Desktop Dev Image" v-lazy-load/>
                                        <h4 class="title _text-center">{{ $t('Services.Desktop.Title') }}</h4>
                                        <p class="_text-justify">
                                            {{ $t('Services.Desktop.Description') }}
                                        </p>
                                    </i-card>
                                </i-layout-content>
                            </i-column>

                        </i-row>
                        
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
.web{
    height: 230px !important;
}

.mobile{
    height: 230px !important;
}

.desktop{
    height: 230px !important;
}

*{
  font-family: 'Arapey', serif;
}

p{
    font-size: 18px !important;
}
</style>>
