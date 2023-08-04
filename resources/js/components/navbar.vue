<template>
    <nav class="bg-white p-4 h-16 sticky top-0 border text-black">
        <div class="container mx-auto flex justify-between items-center">
            <!-- Logo -->
            <div class=" text-xl font-bold"></div>

            <!-- Navigation Links -->
            <div class="hidden md:flex space-x-4">
                <router-link to="/" class="">Home</router-link>
                <router-link to="/about" class="">About</router-link>
                <router-link to="/contact" class="">Contact</router-link>
            </div>

            <!-- Hamburger Menu (for mobile) -->
            <button @click="toggleMenu" class="md:hidden  focus:outline-none">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
        </div>

        <!-- Mobile Menu (hidden by default) -->
        <div v-show="showMenu" class="md:hidden">
            <router-link to="/" class="block p-2 ">Home</router-link>
            <router-link to="/about" class="block p-2 ">About</router-link>
            <router-link to="/contact" class="block p-2 ">Contact</router-link>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            showMenu: false,
        };
    },
    methods: {
        toggleMenu() {
            this.showMenu = !this.showMenu;
        },
    },
};
</script>

<style>
/* Add custom styles here if needed */
</style>
