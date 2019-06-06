<template id="inspire" v-if="response">
    <div v-if="loading == true">
        <card>
            <div class="w-full rounded overflow-hidden shadow-lg">
                <div class="spinner">
                    <div class="bounce1"></div>
                    <div class="bounce2"></div>
                    <div class="bounce3"></div>
                </div>
            </div>
        </card>
    </div>

    <div v-else>

        <!-- DEFAULT -->
        <card v-if="style === 'default'">
            <div v-if="response" class="w-full rounded overflow-hidden shadow-lg">
                <div id="inspire-default" :style="{backgroundImage: 'url(\'' + response.image + '\')'}">
                    <div class="inspire-overlay"></div>

                    <blockquote class="inspire-quote">
                        <p><span>{{ response.quote }}</span></p>
                        <footer>{{ response.author }}</footer>
                    </blockquote>

                    <span class="image-copyright">
                        Image by <a href="https://unsplash.com" target="_blank">Unsplash</a>
                    </span>

                    <div v-show="this.card.refresh" class="refresh">
                        <button @click="start">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 3v2a5 5 0 0 0-3.54 8.54l-1.41 1.41A7 7 0 0 1 10 3zm4.95 2.05A7 7 0 0 1 10 17v-2a5 5 0 0 0 3.54-8.54l1.41-1.41zM10 20l-4-4 4-4v8zm0-12V0l4 4-4 4z"/></svg>
                        </button>
                    </div>
                </div>
            </div>
        </card>
        <!-- STACKED -->
        <card v-else-if="style === 'stacked'">
            <div v-if="response" id="inspire-stacked">
                <div class="w-full rounded overflow-hidden shadow-lg">
                    <div :style="{backgroundImage: 'url(\'' + response.image + '\')'}" class="image">
                        <span class="image-copyright">
                            Image by <a href="https://unsplash.com" target="_blank">Unsplash</a>
                        </span>
                        <div v-show="this.card.refresh" class="refresh">
                            <button @click="start">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 3v2a5 5 0 0 0-3.54 8.54l-1.41 1.41A7 7 0 0 1 10 3zm4.95 2.05A7 7 0 0 1 10 17v-2a5 5 0 0 0 3.54-8.54l1.41-1.41zM10 20l-4-4 4-4v8zm0-12V0l4 4-4 4z"/></svg>
                            </button>
                        </div>
                    </div>
                    <div class="px-6 py-4">
                        <blockquote class="inspire-quote">
                            <p><span>{{ response.quote }}</span></p>
                            <footer>{{ response.author }}</footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        </card>

        <!-- HORIZONTAL -->
        <card v-else-if="style === 'horizontal'">
            <div v-if="response" id="inspire-horizontal">
                <div class="w-full flex rounded overflow-hidden shadow-lg">
                    <div class="w-1/3 image" :style="{backgroundImage: 'url(\'' + response.image + '\')'}">
                        <span class="image-copyright">
                            Image by <a href="https://unsplash.com" target="_blank">Unsplash</a>
                        </span>
                    </div>
                    <div class="w-2/3 bg-white p-4 flex flex-col justify-between leading-normal">
                        <div v-show="this.card.refresh" class="refresh">
                            <button @click="start">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 3v2a5 5 0 0 0-3.54 8.54l-1.41 1.41A7 7 0 0 1 10 3zm4.95 2.05A7 7 0 0 1 10 17v-2a5 5 0 0 0 3.54-8.54l1.41-1.41zM10 20l-4-4 4-4v8zm0-12V0l4 4-4 4z"/></svg>
                            </button>
                        </div>
                        <blockquote class="inspire-quote">
                            <p><span>{{ response.quote }}</span></p>
                            <footer>{{ response.author }}</footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        </card>
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
