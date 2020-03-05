<template>
  <div id="contact">
    <i-layout>
        
        <i-layout-content class="_padding-top-2 _padding-bottom-3">
            
            <i-container>
                <i-row>

                    <i-column xs="12" lg="6" class="_margin-x-auto">

                        <i-layout-content>
                            <h3 class="_text-center">{{$t('Contact.Title')}}</h3>
                        </i-layout-content>
                            
                        <i-layout-content>
                                    
                            <p class="_text-justify">
                                {{$t('Contact.Description1')}}
                            </p>

                            <i-form  v-loading="loading" class="_background-white _border _border-color-gray-40 _rounded _padding-x-2 _padding-y-2" @submit.prevent="Contact" :schema="form">
                                            
                                <i-form-group>
                                    <i-input :schema="form.nome" v-model.trim="form.nome.value" :placeholder="$t('Contact.PlaceholderNome')" />
                                </i-form-group>

                                <i-form-group>
                                    <i-input :schema="form.email" v-model.trim="form.email.value" :placeholder="$t('Contact.PlaceholderEmail')" />
                                </i-form-group>
                                            
                                <i-form-group>
                                    <i-textarea :schema="form.message" v-model.trim="form.message.value" :placeholder="$t('Contact.PlaceholderMessage')" />
                                </i-form-group>
                                            
                                <i-form-group class="_text-right">
                                    <i-button type="submit" variant="primary">{{$t('Contact.Button')}}</i-button>
                                </i-form-group>

                            </i-form>
                            
                            <p class="_text-justify">
                                {{$t('Contact.Description2')}}
                            </p>

                        </i-layout-content>
                
                    </i-column>

                </i-row>
            </i-container>

        </i-layout-content>

    </i-layout>
    
  </div>
</template>

<script>
export default 
{
    data()
    {
        return{
            loading: false,
            form: this.$form({

                nome: 
                {
                    value: '',
                    validateOn: 'input',
                    validators: 
                    [
                        { rule: 'alpha', message: this.$t('Validation.Name.Message1') },
                        { rule: 'required', message: this.$t('Validation.Name.Message2') },
                        { rule: 'minLength', message: this.$t('Validation.Name.Message3'), value: 6 }
                    ]
                },
                email: 
                {
                    value: '',
                    validateOn: 'input',
                    validators: 
                    [
                        { rule: 'email', message: this.$t('Validation.Email.Message1')  },
                        { rule: 'required', message: this.$t('Validation.Email.Message2')  },
                        { rule: 'minLength', message: this.$t('Validation.Name.Message3'), value: 6 }
                    ]
                },
                message: 
                {
                    value: '',
                    validateOn: 'input',
                    validators: 
                    [
                        { rule: 'required', message: this.$t('Validation.Message.Message1')  },
                        { rule: 'minLength', message: this.$t('Validation.Message.Message2'), value: 6 }
                    ]
                }
            })

        }
    },

    methods:
    {
        Contact()
        {
            this.loading = true;
            return this.$axios.$post('/sendmail',{
                nome:this.form.nome.value,
                email:this.form.email.value,
                message:this.form.message.value
            })
            .then((result) => {

                this.$notify({
                    title: this.$t('ResultMail.Sucess.Title'),
                    message: this.$t('ResultMail.Sucess.Message'),
                    type: 'success'
                });
                this.loading = false;
                this.form.nome.value = "";
                this.form.email.value = "";
                this.form.message.value = "";
            })
            .catch((error)=>{
                
                this.$notify({
                    title: this.$t('ResultMail.Failure.Title'),
                    message: this.$t('ResultMail.Failure.Message'),
                    type: 'error'
                });
                this.loading = false;
            });
            
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Arapey&display=swap');
.nuxt{
    height: 50px !important;
}

*{
  font-family: 'Arapey', serif;
}

p{
    font-size: 1.2em;
}
</style>
