<template>

    <main>
        <div class="full-height center valign-wrapper">
            <div class="container">
                <div class="row">
                    <template v-if="classPacks.length > 0">
                        <div v-for="classPack in classPacks" class="col s12 m6 l4 no__margin no__padding">
                            <div class="card-panel class-pack__card z-depth-0 no__margin pad with__border">
                                <div v-if="classPack.tag_name" class="chip class-pack__tag black white-text left">
                                    {{classPack.tag_name}}
                                </div>
                                <p>&ensp;</p>
                                <div class="class-pack__image-container">
                                    <div class="class-pack__image-overlay"></div>
                                    <img src="/images/Yoga.png" alt="">
                                </div>
                                <p class="title">{{ classPack.pack_name }}</p>
                                <div class="class-pack__type center-block">
                                        <span class="btn-floating btn-large primary no-shadow">
                                        {{ classPack.total_credit | stringifyTotalCredit }}
                                        </span>
                                </div>
                                <router-link :to="'/class-packs/' + classPack.pack_alias">
                                    <p class="black-text">{{ classPack.pack_description }}</p>
                                    <p>&ensp;</p>
                                    <h6 class="black-text"><b>$ {{ classPack.pack_price }}</b></h6>
                                    <small class="grey-text">{{ classPack.estimate_price | stringifyEstimatePrice }}</small>
                                </router-link>
                            </div>
                        </div>
                    </template>
                    <template v-else>
                        <h4>No Class Packs</h4>
                    </template>
                </div>
            </div>
        </div>
    </main>

</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: "ClassPacks",
        data () {
            return {
                email: '',
                password: ''
            }
        },
        computed: {
            ...mapGetters({
                classPacks: 'classPack/classPacks'
            })
        },
        filters: {
            stringifyEstimatePrice (estimatePrice) {
                switch (estimatePrice) {
                    case 0:
                        return 'per month'
                    default:
                        return estimatePrice + ' per class!'
                }
            },
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
            this.$store.dispatch('classPack/fetchClassPacks')
        }
    }
</script>

<style scoped>

</style>
