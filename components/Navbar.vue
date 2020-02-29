<template>
    <i-layout>
        <!-- Header com navbar -->
        <i-navbar size="lg" variant="light">
            <i-navbar-brand class="_justify-content-center logo">
                <img src="~assets/Logo.png" width="25" class="image -responsive" alt="Portfolio Logo">
            </i-navbar-brand>

            <i-navbar-items class="_justify-content-end">
                <i-nav>
                    <i-nav-item class="hover" v-scroll-to="'#home'">{{ $t('Navbar.Home') }}</i-nav-item>
                    <i-nav-item class="hover" v-scroll-to="'#person'">{{ $t('Navbar.WhoAmI') }}</i-nav-item>
                    <i-nav-item class="hover" v-scroll-to="'#services'">{{ $t('Navbar.MyServices') }}</i-nav-item>
                    <i-nav-item class="hover" v-scroll-to="'#skills'">{{ $t('Navbar.Skills') }}</i-nav-item>
                    <i-nav-item class="hover" v-scroll-to="'#portfolio'">{{ $t('Navbar.Portfolio') }}</i-nav-item>
                    <i-nav-item class="hover" v-scroll-to="'#contact'">{{ $t('Navbar.Contact') }}</i-nav-item>

                        <i-dropdown placement="bottom" trigger="hover" class="_hidden-md-and-down">
                            <i-nav-item>
                                
                                <span v-html="$t('Navbar.Language')">
                                    
                                </span>
                                <i-icon icon="chevron-down" size="sm" class="_margin-left-1"/>
                            </i-nav-item>
                            <i-dropdown-menu variant="light" class="_border-color-gray-50 _margin-top-1">
                                <i-dropdown-item :to="switchLocalePath('en')">{{ $t('Navbar.Dropdown.English') }}<img class="_float-right _margin-top-0" src="https://img.icons8.com/officexs/16/000000/usa.png"></i-dropdown-item>
                                <i-dropdown-item :to="switchLocalePath('es')">{{ $t('Navbar.Dropdown.Spanish') }}<img class="_float-right _margin-top-0" src="https://img.icons8.com/color/16/000000/spain.png"></i-dropdown-item>
                                <i-dropdown-item :to="switchLocalePath('fr')">{{ $t('Navbar.Dropdown.French') }}<img class="_float-right _margin-top-0" src="https://img.icons8.com/color/16/000000/france.png"></i-dropdown-item>
                                <i-dropdown-item :to="switchLocalePath('pt')">{{ $t('Navbar.Dropdown.Portuguese') }}<img class="_float-right _margin-top-0" src="https://img.icons8.com/color/16/000000/portugal.png"></i-dropdown-item>
                                
                            </i-dropdown-menu>
                        </i-dropdown>

                        <i-collapsible class="_visible-md-and-down _width-50">
                            <i-collapsible-item :title="$t('Navbar.LanguageMobile')" class="_background-gray-10">
                                <i-layout>
                                    <i-nav-item class="_text-decoration-none" :to="switchLocalePath('en')">{{ $t('Navbar.Dropdown.English') }}<img class="_float-right _margin-top-0" src="https://img.icons8.com/officexs/16/000000/usa.png"></i-nav-item>
                                    <i-nav-item class="_text-decoration-none" :to="switchLocalePath('es')">{{ $t('Navbar.Dropdown.Spanish') }}<img class="_float-right _margin-top-0" src="https://img.icons8.com/color/16/000000/spain.png"></i-nav-item>
                                    <i-nav-item class="_text-decoration-none" :to="switchLocalePath('fr')">{{ $t('Navbar.Dropdown.French') }}<img class="_float-right _margin-top-0" src="https://img.icons8.com/color/16/000000/france.png"></i-nav-item>
                                    <i-nav-item class="_text-decoration-none" :to="switchLocalePath('pt')">{{ $t('Navbar.Dropdown.Portuguese') }}<img class="_float-right _margin-top-0" src="https://img.icons8.com/color/16/000000/portugal.png"></i-nav-item>
                                </i-layout>  
                            </i-collapsible-item>
                        </i-collapsible>
                        
                </i-nav>
            </i-navbar-items>

        </i-navbar>    
        
    </i-layout>
</template>

<script>
export default 
{
   
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Amatic+SC&display=swap');
@import url('https://fonts.googleapis.com/css?family=Arapey&display=swap');
.logo{
    font-family: 'Amatic SC', cursive;
    font-size: 25px !important;
}


*{
  font-family: 'Arapey', serif;
}

.hover:hover{
    cursor: pointer;
}
</style>