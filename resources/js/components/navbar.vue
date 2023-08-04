<template>
    <nav class="sticky z-20 bg-sky-500 text-white p-2 h-10 top-0 ">
        <div class="flex justify-between items-center">
            <div class="ml-2">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </div>


            <!-- Navigation Links -->
            <div class="mx-auto">
                <span class="text-lg">SI Galon</span>
            </div>
            <span class="text-sm">
                ADD ITEM
            </span>
            <div class="ml-2 w-7">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M9 12H15" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                        <path d="M12 9L12 15" stroke="#ffffff" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round"></path>
                        <path
                            d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                            stroke="#ffffff" stroke-width="2"></path>
                    </g>
                </svg>
            </div>
            <div>

            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            showMenu: true,
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
