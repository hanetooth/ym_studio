import Vue from 'vue';
import router from '../../routes';

export default {
    state: {
        classPacks: [],
        selectedClassPack: null
    },
    getters: {
        classPacks (state) {
            return state.classPacks;
        },
        selectedClassPack (state) {
            return state.selectedClassPack;
        }
    },
    mutations: {
        SET_CLASS_PACKS (state, classPacks) {
            Vue.set(state, 'classPacks', classPacks);
        },
        SET_SELECTED_CLASS_PACK (state, classPack) {
            Vue.set(state, 'selectedClassPack', classPack)
        }
    },
    actions: {
        async fetchClassPacks (context) {
            await axios.get(
                'packages'
            )
            .then(({ data }) => {
                context.commit('SET_CLASS_PACKS', data.data.pack_list);
                // router.go(-1);
            })
            .catch(({ response }) => {
                let message = 'Oops! <br/> Something went wrong. <br/> Please try again by reloading the page.';
                M.toast({
                    classes: 'red darken-3',
                    html: message
                })
            });
        },
        async fetchClassPackByAlias (context, alias) {
            await axios.get(
                'packages/' + alias
            )
            .then(({ data }) => {
                context.commit('SET_SELECTED_CLASS_PACK', data.data)
            })
            .catch(({ response }) => {
                let message = 'Oops! <br/> Something went wrong. <br/> Please try again by reloading the page.';
                M.toast({
                    classes: 'red darken-3',
                    html: message
                });
                router.push('/class-packs');
            });
        },
        async purchase (context, payload) {
            await axios.post(
                'packages/purchase',
                payload
            );
        }
    }
}
