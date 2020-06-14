<template>
    <div class="container">
        Output:
        <br>
        {{ output }}
    </div>
</template>

<script>
export default {
    name: "Output",
    props: [
        'output'
    ],
    data: function() {
        return {}
    }
}
</script>
<style lang="scss" scoped>
.container {
}
</style>