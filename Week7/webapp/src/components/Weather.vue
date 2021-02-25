<template>
    <span>{{temperature}} F</span>
</template>

<script>
    import Vue from 'vue';
    
    export default {
        name: 'Weather',
        
        data () {
            return {
                temperature: '',
                apiServer: process.env.VUE_APP_API_SERVER
            }
        },

        methods: {
            getTemperature: function() {
                let url = `http://${this.apiServer}/api/weather/temperature/current`;

                Vue.axios.get(url).then(
                    (response) => {
                        this.temperature = response.data.f;
                    },
                    (error) => {
                        console.log(error)
                    }
                );  
            }
        },

        mounted() {
            this.getTemperature();
        }
    }
</script>

<style scoped>
</style>