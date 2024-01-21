<template>
    <button @click="openAction" class="game-btn mt-2">
        <div class="info">
            <img :src="logo" height="40" alt="">
            <p class="game-title">{{ title }}</p>
        </div>
    </button>
</template>

<script setup>
const props = defineProps(['title', 'logo', 'gameID', 'external'])
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import * as IfAppSDK from "../rywl-ifapp-sdk"

const router = useRouter()

const openAction = async () => {
    if (props.external) {
        IfAppSDK.openLink(props.external)
        return
    }
    if (props.gameID == "tft") {
        const iselect = await Swal.fire({
            title: "เลือกรอบการแข่งขัน", input: "select", inputOptions: {
                ab: "กลุ่ม A B",
                cd: "กลุ่ม C D",
            },
        })

        if (iselect.isConfirmed) {
            if (iselect.value == "ab") {
                router.push(`/bracket/tftAB`)
            } else {
                router.push(`/bracket/tftCD`)
            }
        }
    } else if (props.gameID == "efootball") {
        const iselect = await Swal.fire({
            title: "เลือกรอบการแข่งขัน", input: "select", inputOptions: {
                a: "กลุ่ม A",
                b: "กลุ่ม B",
                c: "กลุ่ม C",
            },
        })

        if (iselect.isConfirmed) {
            switch (iselect.value) {
                case "a":
                    router.push(`/bracket/efootballA`)
                    break;
                case "b":
                    router.push(`/bracket/efootballB`)
                    break;
                case "c":
                    router.push(`/bracket/efootballC`)
                    break;
            }
        }
    } else {
        router.push(`/bracket/${props.gameID}`)
    }
}
</script>

