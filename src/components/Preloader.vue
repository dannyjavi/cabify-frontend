<template>
    <transition name="fade">
        <div class="preloader">
            <div class="logo"></div>
            <p>Searching your account ...</p>
            <div class="circles">
				<div class="circle"></div>
				<div class="circle"></div>
				<div class="circle"></div>
				<div class="circle"></div>
				<div class="circle"></div>
			</div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'preloader',
    data(){
        return {
            show: true
        }
    }
}
</script>