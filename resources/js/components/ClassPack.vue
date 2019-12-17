<template>

    <main>
        <div class="full-height center valign-wrapper">
            <div class="container grey lighten-2">
                <div class="row">
                    <div class="col s12">
                        <template v-if="(selectedClassPack)">
                            <h5 v-if="selectedClassPack.purchased" class="left-align primary-text">
                                THANK YOU! <br/>
                                YOU HAVE SUCCESSFULLY PURCHASED A CLASS PACK!
                            </h5>
                            <h5 v-else class="left-align primary-text">  CLASS PACK PURCHASE PREVIEW</h5>

                            <div class="card primary-card">
                                <div class="card-content">
                                    <span class="card-title">
                                        <b>You have selected:</b>
                                    </span>
                                </div>
                                <div class="card-content no__padding-bottom">
                                    <div class="row">
                                        <div class="col l4 s12 left-align valign-wrapper">
                                            <div class="class-pack__type avatar">
                                        <span class="btn-floating btn-large primary no-shadow">
                                        {{ selectedClassPack.total_credit | stringifyTotalCredit }}
                                        </span>
                                            </div>
                                            <div class="avatar-label">
                                                <p>  {{ selectedClassPack.pack_name }}</p>
                                                <small>{{ selectedClassPack.newbie_note }}</small>
                                            </div>
                                        </div>
                                        <div class="col l8 s12">
                                            <h6 class="right-align"><b>$ {{ selectedClassPack.pack_price }}</b></h6>
                                        </div>
                                    </div>
                                </div>

                                <div v-if="!selectedClassPack.purchased" class="card-content no__padding-top no__padding-bottom">
                                    <div class="row">
                                        <div class="col l4 s12 left-align">
                                            <div class="input-field input-group no__margin">
                                                <input v-model="discountCoupon" placeholder="Coupon Code" type="text" class="validate">
                                                <span class="suffix">
                                                <a @click="applyDiscount" class="btn waves-effect waves-light cyan">APPLY</a>
                                            </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card-action">

                                    <div v-if="classPackSubTotal" class="row no__margin">
                                        <div class="col l4 s12 left-align valign-wrapper">
                                            <p class="grey-text no__margin">Subtotal</p>
                                        </div>
                                        <div class="col l8 s12">
                                            <p class="grey-text right-align no__margin"><b>$ {{ classPackSubTotal }}</b></p>
                                        </div>
                                    </div>

                                    <div v-if="gst" class="row no__margin">
                                        <div class="col l4 s12 left-align valign-wrapper">
                                            <p class="grey-text no__margin">GST</p>
                                        </div>
                                        <div class="col l8 s12">
                                            <p class="grey-text right-align no__margin"><b>$ {{ gst }}</b></p>
                                        </div>
                                    </div>

                                    <div v-if="discount && discount.amount" class="row no__margin">
                                        <div class="col l4 s12 left-align valign-wrapper">
                                            <p class="no__margin">Discount</p>
                                        </div>
                                        <div class="col l8 s12">
                                            <p class="right-align no__margin"><b>- $ {{ discount.amount }}</b></p>
                                        </div>
                                    </div>

                                    <div v-if="classPackGrandTotal" class="row no__margin">
                                        <div class="col l4 s12 left-align valign-wrapper">
                                            <p class="grey-text no__margin">Grand Total</p>
                                        </div>
                                        <div class="col l8 s12">
                                            <p class="grey-text right-align no__margin"><b>$ {{ classPackGrandTotal }}</b></p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <p  v-if="!selectedClassPack.purchased" class="left-align">Please read all <span class="primary-text">Terms & Condition</span> before purchasing your YM Class or Class Pack.</p>
                            <div class="row">
                                <div class="col s6 left-align">
                                    <router-link to="/">
                                        <span class="cyan-text">
                                            <i class="material-icons">arrow_back</i>&ensp;&ensp;Back
                                        </span>
                                    </router-link>
                                </div>
                                <div  v-if="!selectedClassPack.purchased" class="col s6 right-align">
                                    <a @click="submit" class="waves-effect waves-light btn cyan btn-round">PAY NOW</a>
                                </div>
                            </div>
                            <template>

                            </template>
                        </template>
                        <template v-else>
                            <h5>Oops! No data for select class pack.</h5>
                        </template>
                    </div>

                </div>
            </div>
        </div>
    </main>

</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: "ClassPack",
        props: {
            alias: {
                type: String,
                required: true
            }
        },
        data () {
            return {
                discountCoupon: '',
                email: '',
                password: ''
            }
        },
        computed: {
            ...mapGetters({
                selectedClassPack: 'classPack/selectedClassPack',
                discount: 'discount/discount'
            }),
            gst () {
                return (7 * (this.selectedClassPack.pack_price /100))
            },
            classPackSubTotal () {
                return (this.selectedClassPack) ? (Math.round((this.selectedClassPack.pack_price - this.gst) * 100) / 100) : null;
            },
            classPackGrandTotal () {
                return (this.discount) ? Math.round(this.selectedClassPack.pack_price - this.discount.amount) : this.selectedClassPack.pack_price;
            }
         },
        methods: {
            applyDiscount () {
                this.$store.dispatch('discount/applyDiscount', this.discountCoupon);
            },
            getUserId () {
                return this.$store.getters['auth/user'].id;
            },
            loadClassPack () {
                let vm = this;
                vm.$store.dispatch(
                    'classPack/fetchClassPackByAlias', this.alias
                ).then(() => {
                    vm.$store.commit(
                        'discount/SET_DISCOUNT',
                        (vm.selectedClassPack.purchased) ? vm.selectedClassPack.discount : null
                    );
                });
                this.discountCoupon = '';
            },
            submit () {
                let vm = this;
                vm.$store.dispatch('classPack/purchase', {
                    user_id: this.getUserId(),
                    package_id: this.selectedClassPack.pack_id,
                    discount_id: (this.discount) ? this.discount.id : null
                }).then(() => {
                    vm.loadClassPack();
                });
            }
        },
        filters: {
            stringifyTotalCredit (totalCredit) {
                switch (totalCredit) {
                    case 0:
                        return 'U';
                    case 1:
                        return 'S';
                    default:
                        return totalCredit;
                }
            }
        },
        created () {
            this.loadClassPack();
        },
        watch: {
            discount: {
                handler (discount) {
                    if (discount) {
                        this.discountCoupon = discount.coupon_code
                    }
                },
                deep: true,
                immediate: true
            }
        }
    }
</script>

<style scoped>

</style>
