<template>
        <navbar class=""></navbar>
        <sidebar class=""></sidebar>
        <router-view class="w-4/5  bg-gray-100 h-my-screen" style="margin-left: 20%;"></router-view>



    <!-- component matched by the route will render here -->
</template>
<script setup>
import { ref } from 'vue'

const name = ref();
</script>

<script>
import Navbar from '@/components/Navbar.vue' // Import the Navbar component
import Sidebar from '@/components/Sidebar.vue' // Import the Navbar component
export default {
    components: {
        Navbar, Sidebar
    }
}
</script>
