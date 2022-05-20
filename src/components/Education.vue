<template>
    <div class="info">
        <h3 class="text-3xl font-semibold">{{school}}</h3>
        <h4 class="text-xl">{{dates}}</h4>      
        <p class=" pl-20 w-1/2">{{classes}}</p>
    </div>
</template>
<script>
export default {
    name: "Education",
    props: {
        school: String,
        dates: String,
        classes: String
    }
}
</script>