<template>
    <button @click="openAction" class="game-btn mt-2">
        <div class="info">
            <img :src="logo" height="40" alt="">
            <p class="game-title">{{ title }}</p>
        </div>
    </button>
</template>

<script setup>
const props = defineProps(['title', 'logo', 'gameID'])
import { useRouter } from 'vue-router'

const router = useRouter()

const openAction = () => {
    router.push(`/bracket/${props.gameID}`)
}
</script>

