<template id="inspire">
    <!-- STACKED -->
    <card v-if="style === 'stacked'">
        <div v-if="data" id="inspire-stacked">
            <div class="w-full rounded overflow-hidden shadow-lg">
                <div :style="{backgroundImage: 'url(\'' + data.image + '\')'}" class="image">
                    <span class="image-copyright">
                        Image by <a href="https://unsplash.com" target="_blank">Unsplash</a>
                    </span>
                </div>
                <div class="px-6 py-4">
                    <blockquote class="inspire-quote">
                        <p><span>{{ data.quote }}</span></p>
                        <footer>{{ data.author }}</footer>
                    </blockquote>
                </div>
            </div>
        </div>
    </card>

    <!-- HORIZONTAL -->
    <card v-else-if="style === 'horizontal'">
        <div v-if="data" id="inspire-horizontal">
            <div class="w-full flex rounded overflow-hidden shadow-lg">
                <div class="w-1/3 image" :style="{backgroundImage: 'url(\'' + data.image + '\')'}">
                    <span class="image-copyright">
                        Image by <a href="https://unsplash.com" target="_blank">Unsplash</a>
                    </span>
                </div>
                <div class="bg-white p-4 flex flex-col justify-between leading-normal">
                    <blockquote class="inspire-quote">
                        <p><span>{{ data.quote }}</span></p>
                        <footer>{{ data.author }}</footer>
                    </blockquote>
                </div>
            </div>
        </div>
    </card>

    <!-- DEFAULT -->
    <card v-else>
        <div v-if="data" class="w-full rounded overflow-hidden shadow-lg">
            <div id="inspire-default" :style="{backgroundImage: 'url(\'' + data.image + '\')'}">
                <div class="inspire-overlay"></div>

                <blockquote class="inspire-quote">
                    <p><span>{{ data.quote }}</span></p>
                    <footer>{{ data.author }}</footer>
                </blockquote>

                <span class="image-copyright">
                    Image by <a href="https://unsplash.com" target="_blank">Unsplash</a>
                </span>
            </div>
        </div>
    </card>
</template>

<script>
	export default {
        props: ['card'],
        data() {
            return {
                data: null,
                style: null
            };
        },
        mounted () {
            Nova.request().get('/nova-vendor/inspire/random/' + this.card.topic)
                .then(response => {
                    this.data = response.data
                    this.style = this.card.style
                })
                .catch(() => this.error = true)
                .finally(() => this.loading = false)
        }
	}
</script>
