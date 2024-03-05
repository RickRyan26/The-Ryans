<script lang="ts">
	import { dev } from '$app/environment';
	import '../app.pcss';
	import SiteHeader from '$lib/components/custom/SiteHeader.svelte';
	import TailwindIndicator from '$lib/components/custom/TailwindIndicator.svelte';
	import { page } from '$app/stores';
</script>

<div
	class:!from-slate-200={$page.data.src === 'debra'}
	class:!to-slate-500={$page.data.src === 'debra'}
	class:dark:!from-slate-600={$page.data.src === 'debra'}
	class:dark:!to-slate-900={$page.data.src === 'debra'}
	class="bg-gradient-to-br from-purple-200 to-purple-500 transition-all dark:from-purple-600 dark:to-purple-900"
>
	<SiteHeader />
	<div class="relative flex min-h-screen flex-col" id="page" data-vaul-drawer-wrapper>
		<slot />
		{#if dev}
			<TailwindIndicator />
		{/if}
		<!-- <div class="fixed inset-0">
			<img src={`${$page.data.src}/header.jpg`} class="h-full w-full object-cover" alt="" />
		</div> -->
	</div>
</div>
