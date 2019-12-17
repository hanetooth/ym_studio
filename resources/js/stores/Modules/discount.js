import Vue from 'vue';

export default {
    state: {
        discount: null
    },
    getters: {
        discount (state) {
            return state.discount;
        }
    },
    mutations: {
        SET_DISCOUNT (state, classPacks) {
            Vue.set(state, 'discount', classPacks);
        }
    },
    actions: {
        async applyDiscount (context, couponCode) {
            context.commit('SET_DISCOUNT', null);
            await axios.post(
                'discounts/get',
                { coupon_code: couponCode }
            )
            .then(({ data }) => {
                context.commit('SET_DISCOUNT', data.data);
            })
            .catch(({ response }) => {
                let message = 'Invalid coupon code!';
                M.toast({
                    classes: 'red darken-3',
                    html: message
                })
            });
        }
    }
}
