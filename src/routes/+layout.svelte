<script lang="ts">
	import { dev } from '$app/environment';
	import '../app.pcss';
	import SiteHeader from '$lib/components/custom/SiteHeader.svelte';
	import TailwindIndicator from '$lib/components/custom/TailwindIndicator.svelte';
	import { page } from '$app/stores';
	import MetaData from '$lib/components/custom/MetaData.svelte';
	import debra_img_avatar from '$lib/images/debra/avatar.jpg?w=1280;640;400&enhanced';
	import debra_img_header from '$lib/images/debra/header.jpg?&enhanced';
	import hilltop_img_header from '$lib/images/hilltop/header.jpg?&enhanced';
	import SuperCard from '$lib/components/custom/SuperCard.svelte';
</script>

<MetaData />
<div
	class:!from-neutral-200={$page.data.src === 'debra'}
	class:!to-neutral-500={$page.data.src === 'debra'}
	class:dark:!from-neutral-400={$page.data.src === 'debra'}
	class:dark:!to-neutral-800={$page.data.src === 'debra'}
	class="w-[100vw] bg-gradient-to-br from-violet-200 to-violet-500 transition-all dark:from-violet-400 dark:to-violet-900"
>
	<SiteHeader />
	<div class="fixed inset-0 top-0 portrait:w-[200vw]">
		{#if $page.data.src === 'debra'}
			<enhanced:img
				loading="eager"
				class="mx-auto h-full w-full object-cover"
				src={debra_img_header}
				alt=""
			/>
		{:else}
			<enhanced:img
				loading="eager"
				class="mx-auto -mt-64 h-full w-full object-cover"
				src={hilltop_img_header}
				alt=""
			/>
		{/if}
	</div>
	<div class="relative flex min-h-screen flex-col" id="page">
		<div class="mx-auto my-16 max-w-screen-md portrait:mx-2 portrait:my-10">
			<!-- <SuperCard> -->
			<!-- <marquee
				class:!bg-neutral-300={data.src === 'debra'}
				class:dark:!bg-neutral-700={data.src === 'debra'}
				class="-mx-14 rounded-sm bg-violet-300 py-2 font-sans text-xl font-extrabold text-black/80 shadow-sm dark:bg-violet-700 dark:text-white/80 portrait:-mx-9"
			>
				{data.marquee}
			</marquee> -->
			<h1>
				{$page.data.title}
			</h1>
			<h1>
				{$page.data.subtitle}
			</h1>
			{#if $page.data.avatar}
				<enhanced:img
					src={debra_img_avatar}
					class="mx-auto mt-6 w-2/3 max-w-[300px] rounded-lg border-2 border-neutral-500/50 shadow landscape:w-2/5"
					sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px"
					alt=""
				/>
			{/if}
			<!-- <div class="relative">
				<p bind:this={aboutEl} class="absolute top-0 z-10 text-left indent-6"></p>
				<p class="invisible">{data.about}</p>
			</div> -->
			<!-- </SuperCard> -->
		</div>
		<slot />
		{#if dev}
			<TailwindIndicator />
		{/if}
		<!-- <div class="fixed inset-0">
			<img src={`${$page.data.src}/header.jpg`} class="h-full w-full object-cover" alt="" />
		</div> -->
	</div>
</div>
