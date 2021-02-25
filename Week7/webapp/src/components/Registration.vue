<template>
    <div>
        <h1>Registration</h1>
        
        <form>
            <div class='form-entry'>
                First Name: <input type='text' v-model='firstName'/>
            </div>

            <div class='form-entry'>
                Last Name: <input type='text' v-model='lastName'/>
            </div>

            <div class='form-entry'>
                <input type='button' value='Submit' v-on:click='submitRegistration'/>
            </div>
        </form>

        <div>{{error}}</div>
    </div>
</template>

<script>
    export default {
        name: 'Registration',
        methods: {
            submitRegistration: function() {
                if (this.firstName.length == 0) {
                    this.error = "First name must be entered.";
                    return;
                }
                if (this.lastName.length == 0) {
                    this.error = "Last name must be entered.";
                    return;
                }
                alert('Submitting Registration');
            }
        },
        data () {
            return {
                firstName: '',
                lastName: '',
                error: ''
            }
        }
    }
</script>

<style scoped>
</style>