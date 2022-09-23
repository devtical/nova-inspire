<template id="inspire" v-if="response">
    <div v-if="loading == true">
        <Card>
            <div class="w-full rounded overflow-hidden shadow-lg">
                <div class="spinner">
                    <div class="bounce1"></div>
                    <div class="bounce2"></div>
                    <div class="bounce3"></div>
                </div>
            </div>
        </Card>
    </div>

    <div v-else>

        <!-- DEFAULT -->
        <Card v-if="style === 'default'">
            <div v-if="response" class="w-full rounded overflow-hidden shadow-lg">
                <div class="flex flex-col w-full overflow-hidden rounded">
                    <div class="relative bg-cover bg-center bg-no-repeat" :style="{backgroundImage: 'url(\'' + response.image + '\')'}">
                        <div class="relative bg-black/50">
                            <span class="bg-black/30 p-1 absolute rounded top-2 left-2 text-white text-xs"> Image by <a href="https://unsplash.com" target="_blank">Unsplash</a> </span>

                            <div class="flex flex-col justify-between text-white p-4 pt-20">
                                <div>
                                    <p class="mb-2">{{ response.quote }}</p>
                                    <p class="font-bold text-xs">~ {{ response.author }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
        <!-- STACKED -->
        <Card v-else-if="style === 'stacked'">
            <div v-if="response" id="inspire-stacked">
                <div class="flex flex-col w-full overflow-hidden rounded">
                    <div class="relative h-28 bg-cover bg-center bg-no-repeat" :style="{backgroundImage: 'url(\'' + response.image + '\')'}">
                        <span class="bg-black/30 p-1 absolute rounded bottom-2 left-2 text-white text-xs"> Image by <a href="https://unsplash.com" target="_blank">Unsplash</a> </span>
                    </div>
                    <div class="flex flex-col justify-between bg-white p-4">
                        <div>
                            <p class="mb-2">{{ response.quote }}</p>
                            <p class="font-bold text-xs">~ {{ response.author }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Card>

        <!-- HORIZONTAL -->
        <Card v-else-if="style === 'horizontal'">
            <div v-if="response" id="inspire-horizontal">
                <div class="flex w-full overflow-hidden rounded">
                    <div class="relative w-1/3 bg-cover bg-center bg-no-repeat" :style="{backgroundImage: 'url(\'' + response.image + '\')'}">
                        <span class="bg-black/30 p-1 absolute rounded bottom-2 left-2 text-white text-xs"> Image by <a href="https://unsplash.com" target="_blank">Unsplash</a> </span>
                    </div>
                    <div class="flex w-2/3 flex-col justify-between bg-white p-4 py-6">
                        <div>
                            <p class="mb-2">{{ response.quote }}</p>
                            <p class="font-bold text-xs">~ {{ response.author }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    </div>
</template>

<script>
    export default {
        props: ['card'],
        data() {
            return {
                response: null,
                style: null,
                loading: true,
            };
        },
        mounted () {
            this.start()
        },
        methods: {
            start() {
                this.loading = true;
                Nova.request().get('/nova-vendor/inspire/random/' + this.card.topic)
                .then(response => {
                    this.response = response.data
                    this.style = this.card.style
                })
                .catch(() => this.error = true)
                .finally(() => this.loading = false)
            }
       }
    }
</script>
