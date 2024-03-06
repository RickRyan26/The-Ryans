<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';
	import { page } from '$app/stores';

	const currentYear = new Date().getFullYear();

	let node: HTMLElement;
	let intersecting = false; // Initialize intersecting

	// Reactive statement to trigger click when intersecting becomes true
	$: if (intersecting) {
		const contactTrigger = document.getElementById('contactTrigger');
		if (contactTrigger) {
			contactTrigger.click();
		}
	}
</script>

<IntersectionObserver element={node} bind:intersecting threshold={1}>
	<footer bind:this={node} class="card mt-12 block bg-opacity-50 py-6 shadow-lg backdrop-blur-sm">
		<p class="text-center text-sm leading-loose text-muted-foreground">
			© {currentYear}
			{$page.data.title}
		</p>
	</footer>
</IntersectionObserver>
