<template>
		<!-- header -->
			<pro-header></pro-header>
		<!-- /header -->

		<!-- nav -->
			<pro-nav></pro-nav>
		<!-- /nav -->

		<!-- title -->
		<h1 class="text-center text-xl md:text-4xl px-6 py-12 bg-white">Our Products</h1>
		<!-- /title -->

		<!-- products grid -->
			<pro-grid></pro-grid>
		<!-- /products grid -->


		<!-- footer -->
			<pro-footer></pro-footer>
		<!-- /footer -->

</template>

<script>
import ProHeader from './ProHeader.vue';
import ProNav from './ProNav.vue';
import ProGrid from './ProGrid.vue';
import ProFooter from './ProFooter.vue';
export default {
	components: {
		ProHeader,
		ProNav,
		ProGrid,
		ProFooter
	}

}
</script>

<style>

</style>