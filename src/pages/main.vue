<template>
    <div class="banner">
        <div class="banner-overlay b2"></div>
        <div class="banner-overlay b1"></div>
        <div class="banner-content">
            <small>BETA</small>
            <h1 class="m-0">RYW</h1>
            <p class="m-0">ESPORTS TOURNAMENT</p>
        </div>
    </div>
    <div class="banner-divider"></div>

    <div class="container-fluid mt-3 mb-5">
        <h2 class="title mb-4" style="--color: #00FF9F;">สายการแข่งขัน</h2>
        <GameBtn gameID="valorant" class="valo g1" title="Valorant" logo="/game-logo/valorant.svg" />
        <GameBtn gameID="tft" class="tft g2" title="Teamfight Tactics" logo="/game-logo/tft.svg" />
        <GameBtn gameID="efootball" class="efootball g3" title="eFootball" logo="/game-logo/efootball.svg" />
        <h2 class="title mt-4 mb-4" style="--color: #00FFFF;">ติดตามข่าวสาร</h2>
        <GameBtn external="https://www.instagram.com/rywesports/" class="ig g4" title="@rywesports" logo="/game-logo/ig.svg" />
        <GameBtn external="https://www.twitch.tv/rywstudentcouncil" class="twitch g5" title="Twitch" logo="/game-logo/twitch.svg" />
    </div>

    <p class="text-center text-muted m-0">ตัว Track นี้ส่วนหนึ่งของ ”แอพล่าสุด ระยองวิทย์” ไม่มีส่วนเกี่ยวข้องกับทางโรงเรียน หรือสภานักเรียนโดยตรง</p>
    <p class="text-center text-muted m-0">Challonge เป็นเครื่องหมายการค้าของ Challonge LLC</p>
</template>

<script setup>
import GameBtn from "../components/game-btn.vue"
</script>

<style>
.banner {
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    font-family: 'Tektur', sans-serif;
    background-image: url(../assets/leaf.png);
    background-size: cover;
    background-position: center;

    position: relative;
}

.banner-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    z-index: 3;
}

.banner-overlay {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}

.banner-overlay.b1 {
    opacity: 0.3;
    background: linear-gradient(180deg, rgba(250, 0, 255, 0.00) 0%, #FA00FF 100%);
}


.banner-overlay.b2 {
    opacity: 0.5;
    background-color: black;
}

.banner h1 {
    color: rgb(255, 69, 236);
    font-size: 40px;
}

.banner p {
    color: #FFD600;
}

.banner small {
    border: solid 2px #ae00ff;
    padding-left: 12px;
    padding-right: 12px;
    border-radius: 12px;
    font-weight: lighter;
}

.banner-divider {
    width: 100%;
    height: 3px;
    opacity: 0.8;
    background: #FA00FF;
    box-shadow: 0px 0px 11.2px 0px #FA00FF;
    position: relative;
    z-index: -1;
}

.banner-divider::after {
    content: " ";
    background: linear-gradient(0deg, rgba(250, 0, 255, 0.00) 0%, #FA00FF 100%);
    opacity: 0.4;
    position: relative;
    display: inline-block;
    width: 100%;
    height: 200px;
}

.game-btn.valo {
    border-image: url(../assets/frame-valo.png) 150 round;
}

.game-btn.tft {
    border-image: url(../assets/frame-tft.png) 150 round;
}

.game-btn.efootball {
    border-image: url(../assets/frame-efootball.png) 150 round;
}

.game-btn.ig {
    border-image: url(../assets/frame-ig.png) 150 round;
}

.game-btn.twitch {
    border-image: url(../assets/frame-twitch.png) 150 round;
}
</style>