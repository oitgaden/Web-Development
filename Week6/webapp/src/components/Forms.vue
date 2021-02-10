<template>
    <div>
        <h1>Student Registration</h1>
        <form>

            <div class="form-entry">
                First Name: <input id='first-name' type="text" v-model="firstName"/>
                <span id='first-name-error' v-bind:style="{visibility: firstNameErrorVisibility}">Please enter first name.</span>
            </div>

            <div class="form-entry">
                Last Name: <input id='last-name' type="text" v-model="lastName"/>
                <span id='last-name-error' v-bind:style="{visibility: lastNameErrorVisibility}">Please enter last name.</span>
            </div>

            <div class="form-entry">
                Birthdate:
                <br/>
                Month: <input id='birth-month' type="text" v-model="birthDay" size="2" maxlength="2"/>
                Day: <input id='birth-day' type="text" v-model="birthMonth" size="2" maxlength="2"/>
                Year: <input id='birth-year' type="text" v-model="birthYear" size="4" maxlength="4"/>
            </div>

            <div class="form-entry">
                <input type="button" value="Register" v-on:click="submitRegistration()"/>
            </div>

        </form>
    </div>
</template>

<script>
    import { getAge } from '../Modules/AgeCalculator';
    export default {
        name: 'Registration',
        methods: {
            submitRegistration: function() {
                this.firstNameErrorVisibility = 'hidden';
                this.lastNameErrorVisibility = 'hidden';
                if (this.firstName.length == 0) {
                    this.firstNameErrorVisibility = 'visible';
                    return;
                }
                if (this.lastName.length == 0) {
                    this.lastNameErrorVisibility = 'visible';
                    return;
                }
                let age = getAge(this.birthDay, this.birthMonth, this.birthYear);
                alert('Submitting Registration with age: ' + age);
            }
        },
        data () {
            return {
                firstName: '',
                lastName: '',
                birthDay: '',
                birthMonth: '',
                birthYear: '',
                firstNameErrorVisibility: 'hidden',
                lastNameErrorVisibility: 'hidden'
            }
        }
    }
</script>

<style scoped>
    form {
        background-color: white;
        padding: 10px;
    }

    .form-entry {
        padding: 10px;
        background-color: lightgray;
    }
</style>