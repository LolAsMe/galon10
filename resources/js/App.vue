<template>
    <div class="flex">
        <sidebar></sidebar>
        <div class="w-my-screen">
            <navbar></navbar>
            <div class="bg-slate-200 h-my-screen">
                <router-view class=""></router-view>
            </div>
        </div>
    </div>
    <!-- component matched by the route will render here -->
</template>
<script setup>
import { ref } from 'vue'

const name = ref();
</script>

<script>
import Navbar from './components/Navbar.vue' // Import the Navbar component
import Sidebar from './components/Sidebar.vue' // Import the Navbar component
export default {
    components: {
        Navbar, Sidebar
    }
}
</script>
