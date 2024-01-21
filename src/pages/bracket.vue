<template>
    <div class="top-nav" :style="{'--color': gameData[route.params.id].color}">
        <div class="top-nav-overlay"></div>
        <div class="top-nav-info">
            <router-link to="/" class="btn nav-back-btn me-2 ms-2">
                <img src="../assets/back.svg" height="18" alt="">
            </router-link>
            <img :src="gameData[route.params.id].icon" class="game-icon" width="30" height="30" alt="">
            <p class="m-0 ms-3 top-nav-game-title">{{ gameData[route.params.id].title }}</p>
        </div>
        <div class="top-nav-divider"></div>
    </div>

    <div class="d-flex flex-column main-content">
        <!--
        <div class="livestream-notice ps-3 pe-3">
            <div>/// TWITCH LIVE /////////</div>
            <div class="flex-grow-1"></div>
            <button class="btn layout-toggle" @click="twitchToggle = !twitchToggle">{{ twitchToggle ? "ปิด" : "เปิด" }}หน้า Twitch</button>
        </div>

        <div class="flex-grow-1 flex-column layout" :class="{ 'layout-disable': !twitchToggle }">
            <div class="gone-fx"></div>
            <iframe class="flex-grow-1" :src="`https://player.twitch.tv/?channel=rywstudentcouncil&parent=${docDomain}`"
                frameborder="0"></iframe>
        </div>
        -->

        <div class="flex-grow-1 flex-column layout">
            <iframe class="bracket-iframe flex-grow-1" :src="`https://challonge.com/th/${gameData[route.params.id].bracketCode}/module?show_voting=0`" width="100%"
                frameborder="0" scrolling="auto" allowtransparency="true"></iframe>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue"
import { useRoute } from "vue-router";

const route = useRoute()
const docDomain = ref(document.domain)
const twitchToggle = ref(false)
const bracketToggle = ref(true)

const gameData = ref({
    valorant: {
        title: "Valorant",
        bracketCode: "VALORYW",
        icon: "/game-logo/valorant.svg",
        color: "#FF4655"
    },
    tftAB: {
        title: "Teamfight Tactics GROUP A B",
        bracketCode: "TFTRYW_1",
        icon: "/game-logo/tft.svg",
        color: "#FCFF74"
    },
    tftCD: {
        title: "Teamfight Tactics GROUP C D",
        bracketCode: "TFTRYW_2",
        icon: "/game-logo/tft.svg",
        color: "#FCFF74"
    },
    efootballA: {
        title: "Efootball Group A",
        bracketCode: "2k03fgwa",
        icon: "/game-logo/efootball.svg",
        color: "#74DEFF"
    },
    efootballB: {
        title: "Efootball Group B",
        bracketCode: "tquxrwdl",
        icon: "/game-logo/efootball.svg",
        color: "#74DEFF"
    },
    efootballC: {
        title: "Efootball Group C",
        bracketCode: "itwv0nxw",
        icon: "/game-logo/efootball.svg",
        color: "#74DEFF"
    },
})

onMounted(() => {
    console.log("YE:", docDomain.value)
})
</script>

<style scoped>
.layout {
    transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
    display: flex;
    display: -webkit-flex;
    opacity: 1;
    max-height: 100vh;
    filter: blur(0);
    position: relative;
}

.layout-disable {
    opacity: 0;
    max-height: 0;
    pointer-events: none;
    filter: blur(20px);
    transform: scale(0.4);
    animation: layoutDisableAnim 1s linear forwards;
}

.gone-fx {
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    left: calc(50% - 25px);
    top: calc(50% - 25px);
    transform: scale(0);
}

.game-icon {
    animation: gameIconIn 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.layout-disable .gone-fx {
    animation: layoutCircleFx 0.5s;
}

@keyframes layoutCircleFx {
    0% {
        transform: scaleX(0.2) scaleY(0.2);
        opacity: 1;
    }
    100% {
        transform: scaleX(20) scaleY(0.5);
        opacity: 1;
    }
}

@keyframes gameIconIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes layoutDisableAnim {
    0% {
        display: initial;
    }

    99% {
        display: initial;
    }

    100% {
        display: none;
    }
}
</style>

<style>
.top-nav {
    height: 70px;
    display: flex;
    position: relative;
}

.top-nav-overlay {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, var(--color) 100%);
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.4;
}

.top-nav-divider {
    opacity: 0.8;
    background: var(--color);
    box-shadow: 0px 0px 7.5px 0px var(--color);
    height: 3px;
    width: 100%;
    position: absolute;
    bottom: 0;
}

.layout-toggle {
    text-decoration: underline !important;
    background-color: rgba(255, 255, 255, 0.14) !important;
}

.layout-toggle:active {
    background-color: rgba(255, 255, 255, 0.3) !important;
}

.top-nav .top-nav-info {
    display: flex;
    align-items: center;

    animation: topNavInfoAnim 0.5s;
}

.main-content {
    height: calc(100vh - 70px);
}

@keyframes topNavInfoAnim {
    0% {
        transform: translateX(15px);
    }

    100% {
        transform: translateX(0px);
    }
}

.top-nav .top-nav-info .top-nav-game-title {
    font-size: 20px;
}

.nav-back-btn {
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
}


.livestream-notice {
    background: #9146FF;
    display: flex;
    height: 34px;
    align-items: center;
    flex-shrink: 0;
}
</style>