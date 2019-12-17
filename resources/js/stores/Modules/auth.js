import Vue from 'vue';
import router from '../../routes';

export default {
    state: {
        accessToken: null,
        user: null
    },
    getters: {
        accessToken (state) {
            return state.accessToken;
        },
        isLoggedIn (state) {
            return (state.accessToken !== null) && (state.accessToken !== '') && (state.accessToken !== undefined)
        },
        user (state) {
            return state.user
        }
    },
    mutations: {
        SET_ACCESS_TOKEN (state, accessToken) {
            Vue.set(state, 'accessToken', accessToken);
        },
        SET_USER (state, user) {
            Vue.set(state, 'user', user)
        }
    },
    actions: {
        async login (context, credentials) {
            await axios.post(
                'auth/login', credentials
            )
            .then(({ data }) => {
                context.commit('SET_ACCESS_TOKEN', data.access_token);
                context.commit('SET_USER', data.user);
                context.dispatch('setDefaultAuthorizationHeader');
                router.go(-1);
            })
            .catch(({ response }) => {
                let message = (response.status === 422)
                                ? 'Invalid Credentials'
                                : 'Oops! <br/> Something went wrong. <br/> Please try again.';
                M.toast({
                    classes: 'red darken-3',
                    html: message
                })
            });
        },
        setDefaultAuthorizationHeader (context) {
            if (context.getters.isLoggedIn) {
                axios.defaults.headers.common['authorization'] = 'Bearer ' + context.getters.accessToken;
            }
        },
        async validateAccessToken (context) {
            await axios.get('validate-access-token')
                .catch(({ response }) => {
                    context.dispatch('clearCredentials');
                    router.push('/login');
                });
        },
        clearCredentials (context) {
            context.commit('SET_ACCESS_TOKEN', null);
            context.commit('SET_USER', null)
        }
    }
}
