<template>
  <div>

    <i-layout>

        <i-layout-footer class="_background-dark">
            
            <i-row>

                <i-column xs="12" class="_margin-top-1">
                    <i-layout-content class=" _text-center">

                        <i-tooltip variant="light" placement="bottom" size="sm">
                            <a class="link _text-decoration-none" href="mailto:garciatandela@gmail.com" target="_blank">
                                <img data-src="https://img.icons8.com/doodle/38/000000/new-post.png" alt="Email Image" v-lazy-load>
                            </a>
                            <template slot="body">Email</template>
                        </i-tooltip>

                        <i-tooltip variant="light" placement="bottom" size="sm">
                            <a class="link _text-decoration-none" href="https://linkedin.com/in/yannick-silva-a329a8182/" target="_blank">
                                <img data-src="https://img.icons8.com/color/38/000000/linkedin.png" alt="LinkedIn Image" v-lazy-load>
                            </a>
                            <template slot="body">LinkedIn</template>
                        </i-tooltip>

                        <i-tooltip variant="light" placement="bottom" size="sm">
                            <a class="link _text-decoration-none" href="https://www.instagram.com/yannicksilva13/" target="_blank">
                                <img data-src="https://img.icons8.com/color/38/000000/instagram-new.png" alt="Instagram Image" v-lazy-load>
                            </a>
                            <template slot="body">Instagram</template>
                        </i-tooltip>

                        <i-tooltip variant="light" placement="bottom" size="sm">
                            <a class="link _text-decoration-none" href="https://github.com/YannickSilva" target="_blank">
                                <img data-src="https://img.icons8.com/bubbles/38/000000/github.png" v-lazy-load alt="Github Image">
                            </a>
                            <template slot="body">Github</template>
                        </i-tooltip>

                        <i-tooltip variant="light" placement="bottom" size="sm">
                            <a class="link _text-decoration-none" href="https://www.facebook.com/yannick.silva13" target="_blank">
                                <img data-src="https://img.icons8.com/plasticine/38/000000/facebook-new.png" alt="Facebook Image" v-lazy-load>
                            </a>
                            <template slot="body">Facebook</template>
                        </i-tooltip>

                        <i-tooltip variant="light" placement="bottom" size="sm">
                            <a class="link _text-decoration-none" href="https://api.whatsapp.com/send?phone=244926920530" target="_blank">
                                <img data-src="https://img.icons8.com/officel/33/000000/whatsapp.png" alt="Whatsapp Image" v-lazy-load>
                            </a>
                            <template slot="body">{{$t('Footer.Whatsapp')}}</template>
                        </i-tooltip>
                      
                    </i-layout-content> 
                </i-column>

                <i-column xs="12" class="_margin-top-1">
                    <i-layout-content class=" _text-center">
                        <label class="_text-center">{{$t('Footer.Title')}}</label>
                    </i-layout-content> 
                </i-column>

            </i-row>

        </i-layout-footer>

    </i-layout>
    
  </div>
</template>

<script>
export default 
{
  
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Arapey&display=swap');
*{
  font-family: 'Arapey', serif;
}
</style>
