<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';

	let node: HTMLElement;
	let intersecting = false;
</script>

<IntersectionObserver element={node} bind:intersecting>
	<div bind:this={node} class="fade-in" class:intersecting>
		<slot />
	</div>
</IntersectionObserver>

<style>
	.fade-in {
		opacity: 0;
		transition: opacity 2s ease;
	}

	.intersecting {
		opacity: 1;
	}
</style>
