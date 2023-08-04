<template>
    <div class="mt-6 pt-6 fixed z-10 top-0 h-screen w-1/5 md:block hidden
     bg-gray-700  text-white h-my-screen transition-all duration-300">
        <!-- Sidebar Logo -->
        <div class="flex items-center justify-center mt-4">
            <div class="h-24 w-24 rounded-full bg-gray-400 overflow-hidden">
                <img src="/foto.jpeg" alt="Person Photo" class="object-cover h-full w-full">
            </div>
        </div>
        <p class="text-center mt-5">Bargalons</p>
        <p class="text-center mt-2">Si Petugas Galon</p>
        <div class="border-b border-gray-300 mt-2"></div>
        <!-- Navigation Links -->
        <div class="flex flex-col space-y-4 mt-4">
            <router-link to="/" class="block p-3 pl-8">Home</router-link>
            <router-link to="/dashboard" class="block p-3 pl-8">Dashboard</router-link>
            <router-link to="/contact" class="block p-3 pl-8">Contact</router-link>
            <router-link to="/About" class="block p-3 pl-8">About</router-link>
        </div>
        <div class="border-b border-gray-300 mt-2"></div>
        <router-link to="/About" class="block p-3 pl-8">Logout</router-link>

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
/* Style for the active link */
.router-link-active {
    font-weight: bold;
    font-size: larger;
    @apply bg-gray-800;
    @apply border-l-4;
}
</style>
