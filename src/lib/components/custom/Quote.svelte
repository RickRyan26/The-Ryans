<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';

	let node: HTMLElement;
	let intersecting = false;
</script>

<IntersectionObserver element={node} bind:intersecting once>
	<div bind:this={node} class="slide-in" class:intersecting>
		<slot />
	</div>
</IntersectionObserver>

<style>
	.slide-in {
		opacity: 0;
		transform: translateX(-100%);
		transition:
			opacity 0.8s,
			transform 0.8s;
	}

	.intersecting {
		opacity: 1;
		transform: translateX(0);
	}
</style>
