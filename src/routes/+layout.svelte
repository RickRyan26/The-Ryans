<script lang="ts">
	import { dev } from '$app/environment';
	import '../app.pcss';
	import SiteHeader from '$lib/components/custom/SiteHeader.svelte';
	import SiteFooter from '$lib/components/custom/SiteFooter.svelte';
	import TailwindIndicator from '$lib/components/custom/TailwindIndicator.svelte';
</script>

<div class="bg-slate-500 dark:bg-slate-600">
	<div class="relative flex min-h-screen flex-col bg-background" id="page" data-vaul-drawer-wrapper>
		<SiteHeader />
		<div class="container p-4 mt-12 flex max-w-screen-md items-center">
			<slot />
		</div>
		<SiteFooter />
		{#if dev}
			<TailwindIndicator />
		{/if}
	</div>
</div>
