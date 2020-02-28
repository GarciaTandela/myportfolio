<template>
  <div id="skills">
    <i-layout>
        
        <i-layout-content class="_padding-top-2 _padding-bottom-8">
            
            <i-container>
                <i-row>

                    <i-column xs="12" class="_margin-bottom-1">
                            
                        <i-layout-content>
                            <h3 class="_text-center">{{ $t('Skills.Title') }}</h3>
                        </i-layout-content>
                
                    </i-column>

                    <i-column xs="12">
                            
                        <i-layout-content>
                            
                            <el-tabs :tab-position="tabPosition" style="height: auto;" type="border-card" stretch>
                                
                                <el-tab-pane :label="$t('Skills.Frontend')">
                                    <Frontend></Frontend>
                                </el-tab-pane>

                                <el-tab-pane :label="$t('Skills.Backend')">
                                    <Backend></Backend>
                                </el-tab-pane>

                                <el-tab-pane :label="$t('Skills.Mobile')">
                                    <Mobile></Mobile>
                                </el-tab-pane>

                                <el-tab-pane :label="$t('Skills.Database')">
                                    <Database></Database>
                                </el-tab-pane>

                                <el-tab-pane :label="$t('Skills.DevOps')">
                                    <Devops></Devops>
                                </el-tab-pane>

                                <el-tab-pane :label="$t('Skills.Test')">
                                    <Test></Test>
                                </el-tab-pane>

                            </el-tabs>

                        </i-layout-content>
                
                    </i-column>

                </i-row>
            </i-container>

        </i-layout-content>

    </i-layout>
    
  </div>
</template>

<script>
import Frontend from '~/components/Skills/Frontend.vue'
import Backend from '~/components/Skills/Backend.vue'
import Mobile from '~/components/Skills/Mobile.vue'
import Database from '~/components/Skills/Database.vue'
import Devops from '~/components/Skills/Devops.vue'
import Test from '~/components/Skills/Test.vue'


export default 
{
  data() 
  {
      return {
        tabPosition: 'top'
      };
  },
  components:
  {
      Frontend,
      Backend,
      Mobile,
      Database,
      Devops,
      Test
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Arapey&display=swap');
*{
  font-family: 'Arapey', serif;
}
</style>
