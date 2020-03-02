<template>
 
    <div>
        <!-- Content -->
        <i-row> 
            <!-- My Portfolio -->
            <i-column xs="12" lg="4" class="hvr-bob _padding-top-2">

                <i-layout-content class="_display-flex _justify-content-center"
                data-aos="fade-right"
                data-aos-duration="3000" data-aos-delay="30"
                data-aos-mirror="true"
                data-aos-once="true">
                    <i-card size="sm" variant="light">
                        <img slot="image" data-src="~assets/portfolio.png" alt="My Portfolio Image" v-lazy-load/>
                        <h4 class="title _text-center">{{ $t('Portfolio.MyPortfolio.Title') }}</h4>
                        <p class="_text-justify _text-center-xs  _text-center-sm  _text-center-md">
                            {{ $t('Portfolio.MyPortfolio.Description') }}
                        </p>
                        <!-- Links -->
                        <i-layout-content class="_display-flex _justify-content-xl-space-around">
                            <a class="link _text-decoration-none" href="https://yannicksilva.herokuapp.com/">{{ $t('Portfolio.Demo') }}</a>
                            <a class="link _text-decoration-none" href="https://github.com/YannickSilva/myportfolio" target="_blank">{{ $t('Portfolio.Source') }}</a>
                        </i-layout-content>
                        <!-- ====== -->
                        <template slot="footer">
                            <i-layout-content class="_display-flex _justify-content-center">
                                <!-- Tooltip -->
                                <i-tooltip placement="bottom" size="sm">
                                    <img data-src="https://img.icons8.com/color/28/000000/html-5.png" class="image -responsive" alt="HTML Image" v-lazy-load>
                                    <template slot="body">HTML</template>
                                </i-tooltip>
                                <i-tooltip placement="bottom" size="sm">
                                    <img data-src="https://img.icons8.com/color/28/000000/css3.png" class="image -responsive" alt="CSS Image" v-lazy-load>
                                    <template slot="body">CSS</template>
                                </i-tooltip>
                                <i-tooltip placement="bottom" size="sm">
                                    <img data-src="https://img.icons8.com/color/28/000000/vue-js.png" class="image -responsive" alt="Vue JS Image" v-lazy-load>
                                    <template slot="body">Vue JS</template>
                                </i-tooltip>
                                <i-tooltip placement="bottom" size="sm">
                                    <img data-src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/054/square_256/nuxt.png" class="image -responsive nuxt" alt="Nuxt JS Image" v-lazy-load>
                                    <template slot="body">Nuxt JS</template>
                                </i-tooltip>
                                <!-- ======== -->
                            </i-layout-content>
                        </template>
                    </i-card>
                </i-layout-content>

            </i-column>
            <!-- ============== -->

            <!-- Hotel website -->
            <i-column xs="12" lg="4" class="hvr-bob _padding-top-2">

                <i-layout-content class="_display-flex _justify-content-center"
                data-aos="fade-right"
                data-aos-duration="3000" data-aos-delay="30"
                data-aos-mirror="true"
                data-aos-once="true">
                    <i-card size="sm" variant="light">
                        <img slot="image" data-src="~assets/paradisehotel.png" alt="Hotel Image" v-lazy-load/>
                        <h4 class="title _text-center">{{ $t('Portfolio.Hotel.Title') }}</h4>
                        <p class="_text-justify _text-center-xs  _text-center-sm  _text-center-md">
                            {{ $t('Portfolio.Hotel.Description') }}
                        </p>
                        <!-- Links -->
                        <i-layout-content class="_display-flex _justify-content-xl-space-around">
                            <a class="link _text-decoration-none" href="https://paradisehotel.netlify.com/" target="_blank">{{ $t('Portfolio.Demo') }}</a>
                            <a class="link _text-decoration-none" href="https://github.com/YannickSilva/hotelparaiso" target="_blank">{{ $t('Portfolio.Source') }}</a>
                        </i-layout-content>
                        <!-- ====== -->
                        <template slot="footer">
                            <i-layout-content class="_display-flex _justify-content-center">
                                <!-- Tooltip -->
                                <i-tooltip placement="bottom" size="sm">
                                    <img data-src="https://img.icons8.com/color/28/000000/html-5.png" class="image -responsive" alt="HTML Image" v-lazy-load>
                                    <template slot="body">HTML</template>
                                </i-tooltip>
                                <i-tooltip placement="bottom" size="sm">
                                    <img data-src="https://img.icons8.com/color/28/000000/css3.png" class="image -responsive" alt="CSS Image" v-lazy-load>
                                    <template slot="body">CSS</template>
                                </i-tooltip>
                                <!-- ======== -->
                            </i-layout-content>
                        </template>
                    </i-card>
                </i-layout-content>

            </i-column>
            <!-- =================== -->

            <!-- Mobile App Wireframe -->
            <i-column xs="12" lg="4" class="hvr-bob _padding-top-2">

                <i-layout-content class="_display-flex _justify-content-center"
                data-aos="fade-right"
                data-aos-duration="3000" data-aos-delay="30"
                data-aos-mirror="true"
                data-aos-once="true">
                    <i-card size="sm" variant="light">
                        <img slot="image" data-src="~assets/sketch.png" alt="Wireframe Image" v-lazy-load/>
                        <h4 class="title _text-center">{{ $t('Portfolio.Sketch.Title') }}</h4>
                        <p class="_text-justify _text-center-xs  _text-center-sm  _text-center-md">
                            {{ $t('Portfolio.Sketch.Description') }}
                        </p>
                        <!-- Links -->
                        <i-layout-content class="_display-flex _justify-content-xl-space-around">
                            <a class="link _text-decoration-none" href="https://xd.adobe.com/view/0181d23e-181b-4499-5c37-ac9136b173b3-77b0/" target="_blank">{{ $t('Portfolio.Demo') }}</a>
                            <a class="link _text-decoration-none" href="https://github.com/YannickSilva/hookedwireframe" target="_blank">{{ $t('Portfolio.Source') }}</a>
                        </i-layout-content>
                        <!-- ====== -->
                        <template slot="footer">
                            <i-layout-content class="_display-flex _justify-content-center">
                                <!-- Tooltip -->
                                <i-tooltip placement="bottom" size="sm">
                                    <img data-src="https://img.icons8.com/color/28/000000/adobe-xd.png" class="image -responsive" alt="XD image" v-lazy-load>
                                    <template slot="body">Adobe XD</template>
                                </i-tooltip>
                                <!-- ======== -->
                            </i-layout-content>
                        </template>
                    </i-card>
                </i-layout-content>

            </i-column>
            <!-- ============= -->

            <!-- University Website -->
            <i-column xs="12" lg="4" class="hvr-bob _padding-top-2">

                <i-layout-content class="_display-flex _justify-content-center"
                data-aos="fade-right"
                data-aos-duration="3000" data-aos-delay="30"
                data-aos-mirror="true"
                data-aos-once="true">
                    <i-card size="sm" variant="light">
                        <img slot="image" data-src="~assets/university.png" alt="Card Image" v-lazy-load/>
                        <h4 class="title _text-center">{{ $t('Portfolio.University.Title') }}</h4>
                        <p class="_text-justify _text-center-xs  _text-center-sm  _text-center-md">
                            {{ $t('Portfolio.University.Description') }}
                        </p>
                        <!-- Links -->
                        <i-layout-content class="_display-flex _justify-content-xl-space-around">
                            <a class="link _text-decoration-none" @click="ugs = true" v-scroll-to="" href="" target="_self">{{ $t('Portfolio.Demo') }}</a>
                            <a class="link _text-decoration-none" href="https://github.com/YannickSilva/universitywebsite" target="_blank">{{ $t('Portfolio.Source') }}</a>
                        </i-layout-content>
                        <!-- ====== -->
                        <template slot="footer">
                            <i-layout-content class="_display-flex _justify-content-center">
                                <!-- Tooltip -->
                                <i-tooltip placement="bottom" size="sm">
                                    <img data-src="https://img.icons8.com/color/28/000000/html-5.png" class="image -responsive" alt="HTML Image" v-lazy-load>
                                    <template slot="body">HTML</template>
                                </i-tooltip>
                                <i-tooltip placement="bottom" size="sm">
                                    <img data-src="https://img.icons8.com/color/28/000000/css3.png" class="image -responsive" alt="CSS Image" v-lazy-load>
                                    <template slot="body">CSS</template>
                                </i-tooltip>
                                <i-tooltip placement="bottom" size="sm">
                                    <img data-src="https://img.icons8.com/color/28/000000/javascript.png" class="image -responsive" alt="Javascript Image" v-lazy-load>
                                    <template slot="body">Javascript</template>
                                </i-tooltip>
                                <i-tooltip placement="bottom" size="sm">
                                    <img data-src="https://img.icons8.com/officel/28/000000/php-logo.png" class="image -responsive _margin-left-1-2" alt="PHP Image" v-lazy-load>
                                    <template slot="body">PHP</template>
                                </i-tooltip>
                                <i-tooltip placement="bottom" size="sm">
                                    <img data-src="https://img.icons8.com/ios/28/000000/mysql-logo.png" class="image -responsive _margin-left-1-2" alt="MySQL Image" v-lazy-load>
                                    <template slot="body">MySQL</template>
                                </i-tooltip>
                                <!-- ======== -->
                            </i-layout-content>
                        </template>
                    </i-card>
                </i-layout-content>

            </i-column>
            <!-- ================= -->

            <!-- Art Factor -->
            <i-column xs="12" lg="4" class="hvr-bob _padding-top-2">

                <i-layout-content class="_display-flex _justify-content-center"
                data-aos="fade-right"
                data-aos-duration="3000" data-aos-delay="30"
                data-aos-mirror="true"
                data-aos-once="true">
                    <i-card size="sm" variant="light">
                        <img slot="image" data-src="~assets/artfactory.png" alt="ArtFactor Image" v-lazy-load/>
                        <h4 class="title _text-center">{{ $t('Portfolio.Art.Title') }}</h4>
                        <p class="_text-justify _text-center-xs  _text-center-sm  _text-center-md">
                            {{ $t('Portfolio.Art.Description') }}
                        </p>
                        <!-- Links -->
                        <i-layout-content class="_display-flex _justify-content-xl-space-around">
                            <a class="link _text-decoration-none" href="https://artfactor.netlify.com/" target="_blank">{{ $t('Portfolio.Demo') }}</a>
                            <a class="link _text-decoration-none" href="https://github.com/YannickSilva/artfactory" target="_blank">{{ $t('Portfolio.Source') }}</a>
                        </i-layout-content>
                        <!-- ====== -->
                        <template slot="footer">
                            <i-layout-content class="_display-flex _justify-content-center">
                                <!-- Tooltip -->
                                <i-tooltip placement="bottom" size="sm">
                                    <img data-src="https://img.icons8.com/color/28/000000/html-5.png" class="image -responsive" alt="HTML Image" v-lazy-load>
                                    <template slot="body">HTML</template>
                                </i-tooltip>
                                <i-tooltip placement="bottom" size="sm">
                                    <img data-src="https://img.icons8.com/color/28/000000/css3.png" class="image -responsive" alt="CSS Image" v-lazy-load>
                                    <template slot="body">CSS</template>
                                </i-tooltip>
                                <i-tooltip placement="bottom" size="sm">
                                    <img data-src="https://img.icons8.com/color/28/000000/javascript.png" class="image -responsive" alt="Javascript Image" v-lazy-load>
                                    <template slot="body">Javascript</template>
                                </i-tooltip>
                                <!-- ======== -->
                            </i-layout-content>
                        </template>
                    </i-card>
                </i-layout-content>

            </i-column>
            <!-- ================ -->
        
            <!-- Feed News -->
            <i-column xs="12" lg="4" class="hvr-bob _padding-top-2">
                <i-layout-content class="_display-flex _justify-content-center"
                data-aos="fade-right"
                data-aos-duration="3000" data-aos-delay="30"
                data-aos-mirror="true"
                data-aos-once="true">
                    <i-card size="sm" variant="light">
                        <img slot="image" data-src="~assets/feed.png" alt="FeedNews Image" v-lazy-load/>
                        <h4 class="title _text-center">{{ $t('Portfolio.Feed.Title') }}</h4>
                        <p class="_text-justify _text-center-xs  _text-center-sm  _text-center-md">
                            {{ $t('Portfolio.Feed.Description') }}
                        </p>
                        <!-- Links -->
                        <i-layout-content class="_display-flex _justify-content-xl-space-around">
                            <a class="link _text-decoration-none" @click="feed = true" v-scroll-to="" href="" target="_self">{{ $t('Portfolio.Demo') }}</a>
                            <a class="link _text-decoration-none" href="https://github.com/YannickSilva/xamarinformsfeednews" target="_blank">{{ $t('Portfolio.Source') }}</a>
                        </i-layout-content>
                        <!-- ====== -->
                        <template slot="footer">
                            <i-layout-content class="_display-flex _justify-content-center">
                                <!-- Tooltip -->
                                <i-tooltip placement="bottom" size="sm">
                                    <img data-src="https://img.icons8.com/color/28/000000/xamarin.png" class="image -responsive" alt="Xamarin Forms image" v-lazy-load>
                                    <template slot="body">Xamarin Forms</template>
                                </i-tooltip>
                                <i-tooltip placement="bottom" size="sm">
                                    <img data-src="https://img.icons8.com/color/28/000000/nodejs.png" class="image -responsive  _margin-x-1-2" alt="Node JS image" v-lazy-load>
                                    <template slot="body">Node JS</template>
                                </i-tooltip>
                                <i-tooltip placement="bottom" size="sm">
                                    <img data-src="https://images.ctfassets.net/rnx10gdrj9dy/6TGR7OYoH7rYdj2NMvSjuj/7c8652049a0d8ddafdbc3d4492b2e65b/express.png?w=300&q=50" class="image -responsive nuxt _margin-x-1-2" alt="Express JS Image" v-lazy-load>
                                    <template slot="body">Express JS</template>
                                </i-tooltip>
                                <i-tooltip placement="bottom" size="sm">
                                    <img data-src="https://img.icons8.com/color/28/000000/mongodb.png" class="image -responsive  _margin-x-1-2" alt="MongoDB Image" v-lazy-load>
                                    <template slot="body">MongoDB</template>
                                </i-tooltip>
                                <i-tooltip placement="bottom" size="sm">
                                    <img data-src="https://img.icons8.com/color/28/000000/graphql.png" class="image -responsive" alt="GraphQL Image" v-lazy-load>
                                    <template slot="body">GraphQL</template>
                                </i-tooltip>
                                <!-- ======== -->
                            </i-layout-content>
                        </template>
                    </i-card>
                </i-layout-content>

            </i-column>

            <!-- Feed News Modal -->
            <i-modal v-model="feed">
                <div class="_embed _embed-1by1">
                    <video data-src="~assets/feednews.mp4" controls autoplay v-lazy-load/>
                </div>
            </i-modal>

            <!-- University Website Modal -->
            <i-modal v-model="ugs">
                <div class="_embed _embed-1by1">
                    <video data-src="~assets/ugshomepage.mp4" controls autoplay v-lazy-load/>
                </div>
            </i-modal>
            
            <!-- ============ -->
        </i-row>
                                                                
    </div>
 
</template>

<script>
export default 
{
    data () 
    {
        return {
            feed: false,
            ugs: false
        };
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Arapey&display=swap');
.nuxt{
    height: 28px !important;
}

*{
  font-family: 'Arapey', serif;
}

p{
    font-size: 16px !important;
}
</style>
