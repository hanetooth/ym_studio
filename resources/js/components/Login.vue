<template>

    <main>
        <div class="center grey darken-3 login-card__container valign-wrapper">

            <div class="container">
                <div class="z-depth-1 grey lighten-4 row login-card">

                    <form class="col s12" method="post" @submit.prevent="login">

                        <div class='row'>
                            <div class='input-field col s12'>
                                <h5>Member Login</h5>
                            </div>
                        </div>

                        <div class='row'>
                            <div class='input-field col s12'>
                                <input v-model="email" class='validate credentials' type='email' name='email' id='email' />
                                <label for='email'>Email</label>
                            </div>
                        </div>

                        <div class='row'>
                            <div class='input-field col s12'>
                                <input v-model="password" class='validate credentials' type='password' name='password' id='password' />
                                <label for='password'>Password</label>
                            </div>
                        </div>

                        <br />
                        <div class="center">
                            <button type='submit' name='btn_login' class='btn waves-effect indigo__custom'>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </main>

</template>

<script>

    export default {
        name: "Login",
        data () {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            login () {
                this.$store.dispatch('auth/login', {
                    email: this.email,
                    password: this.password
                });
            }
        }
    }
</script>

<style scoped>

</style>
