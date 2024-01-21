<template>
  <div>
    <router-view></router-view>

    <!--<button @click="IfAppSDK.requestUserdata()">send test</button>-->
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import * as IfAppSDK from "./rywl-ifapp-sdk"

onMounted(() => {
  IfAppSDK.init({
    appName: "RYWL Esports",
    theme: IfAppSDK.ThemeFlag.DARK
  })

  window.addEventListener(
        "message",
        (event) => {
          if (event.origin == "https://challonge.com") {
            console.log(event.source)
            window.testSource = event.source
          }
        },
        false,
    );
})
</script>