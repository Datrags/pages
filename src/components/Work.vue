<template>  
    <div>
        <h3 class="text-3xl font-semibold indent-14">{{work}}</h3>
        <p class="font-semibold">{{role}}</p>
            <p class="text-xl indent-30">{{dates}}</p>
        <ul class="indent-9 pl-16 list-disc">
            <li v-for="(task, index) in tasks" :key="index" >
                {{task}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "Work",
    props: {
        work: String,
        role: String,
        dates: String,
        tasks: Array
    }
}
</script>