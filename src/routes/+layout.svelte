<script lang="ts">
	import { dev } from '$app/environment';
	import '../app.pcss';
	import SiteHeader from '$lib/components/custom/SiteHeader.svelte';
	import SiteFooter from '$lib/components/custom/SiteFooter.svelte';
	import TailwindIndicator from '$lib/components/custom/TailwindIndicator.svelte';
</script>

<div class="relative flex min-h-screen flex-col bg-background" id="page" data-vaul-drawer-wrapper>
	<SiteHeader />
	<div class="container mt-6 flex max-w-screen-lg items-center">
		<slot />
	</div>
	<SiteFooter />
	{#if dev}
		<TailwindIndicator />
	{/if}
</div>
