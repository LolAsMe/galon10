<template>
    <div class="lg:w-64 w-44 lg:block hidden
     bg-gray-800  text-white h-my-screen sticky top-0 px-4 py-8 transition-all duration-300">
        <!-- Sidebar Logo -->
        <div class="text-center mb-20">
            <div class="text-2xl font-bold">My Logo</div>
        </div>

        <!-- Navigation Links -->
        <div class="flex flex-col space-y-4">
            <router-link to="/" class="block p-2">Home</router-link>
            <router-link to="/about" class="block p-2">About</router-link>
            <router-link to="/contact" class="block p-2">Contact</router-link>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
        };
    },
    methods: {
    },
};
</script>

<style>
/* Add custom styles here if needed */
</style>
