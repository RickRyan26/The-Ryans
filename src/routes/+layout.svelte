<script lang="ts">
	import { dev } from '$app/environment';
	import '../app.pcss';
	import SiteHeader from '$lib/components/custom/SiteHeader.svelte';
	import TailwindIndicator from '$lib/components/custom/TailwindIndicator.svelte';
	import { page } from '$app/stores';
	import MetaData from '$lib/components/custom/MetaData.svelte';
	import debra_img_avatar from '$lib/images/debra/avatar.jpg?w=1280;640;400&enhanced';
	import debra_img_header from '$lib/images/debra/header.jpg?&enhanced';
	import hilltop_img_avatar from '$lib/images/hilltop/avatar.jpg?w=1280;640;400&enhanced';
	import hilltop_img_header from '$lib/images/hilltop/header.jpg?&enhanced';
	import { onMount } from 'svelte';
	import { fade, fly, scale } from 'svelte/transition';
	import { Toaster } from '$lib/components/ui/sonner';
	import Slideshow from '$lib/components/custom/Slideshow.svelte';
	// import SuperCard from '$lib/components/custom/SuperCard.svelte';
	import debra_img_1 from '$lib/images/debra/1.jpg?w=1280;640;400&enhanced';
	import debra_img_2 from '$lib/images/debra/2.jpg?w=1280;640;400&enhanced';
	import debra_img_3 from '$lib/images/debra/3.jpg?w=1280;640;400&enhanced';
	import debra_img_4 from '$lib/images/debra/4.jpg?w=1280;640;400&enhanced';
	import debra_img_5 from '$lib/images/debra/5.jpg?w=1280;640;400&enhanced';
	import debra_img_6 from '$lib/images/debra/6.jpg?w=1280;640;400&enhanced';
	import debra_img_7 from '$lib/images/debra/7.jpg?w=1280;640;400&enhanced';
	import debra_img_8 from '$lib/images/debra/8.jpg?w=1280;640;400&enhanced';
	import debra_img_9 from '$lib/images/debra/9.jpg?w=1280;640;400&enhanced';

	import hilltop_img_1 from '$lib/images/hilltop/1.jpg?w=1280;640;400&enhanced';
	import hilltop_img_2 from '$lib/images/hilltop/2.jpg?w=1280;640;400&enhanced';
	import hilltop_img_3 from '$lib/images/hilltop/3.jpg?w=1280;640;400&enhanced';
	import hilltop_img_4 from '$lib/images/hilltop/4.jpg?w=1280;640;400&enhanced';
	import hilltop_img_5 from '$lib/images/hilltop/5.jpg?w=1280;640;400&enhanced';
	import hilltop_img_6 from '$lib/images/hilltop/6.jpg?w=1280;640;400&enhanced';
	import hilltop_img_7 from '$lib/images/hilltop/7.jpg?w=1280;640;400&enhanced';
	import hilltop_img_8 from '$lib/images/hilltop/8.jpg?w=1280;640;400&enhanced';
	import hilltop_img_9 from '$lib/images/hilltop/9.jpg?w=1280;640;400&enhanced';

	const debraPortfolio = [
		debra_img_header,
		debra_img_1,
		debra_img_2,
		debra_img_3,
		debra_img_4,
		// debra_img_5,
		debra_img_6,
		debra_img_7,
		debra_img_8,
		debra_img_9
	];

	const hilltopPortfolio = [
		hilltop_img_header,
		hilltop_img_1,
		hilltop_img_2,
		hilltop_img_3,
		hilltop_img_4,
		hilltop_img_5,
		hilltop_img_6,
		hilltop_img_7,
		hilltop_img_8,
		hilltop_img_9
	];

	const contactTrigger = () => {
		const contactTrigger = document.getElementById('contactTrigger');
		if (contactTrigger) {
			contactTrigger.click();
		}
	};

	let duration = 700;
	let isMounted = false;
	onMount(() => {
		isMounted = true;
	});
</script>

<Toaster position="top-center" richColors />
<MetaData />
{#if !isMounted}
	<div
		out:fade={{ duration }}
		class="pointer-events-none fixed inset-x-0 z-50 h-[100lvh] bg-black transition-opacity duration-1000"
	/>
{/if}
<div
	class="w-[100vw] bg-gradient-to-br !from-neutral-200 !to-neutral-500 dark:!from-neutral-400 dark:!to-neutral-800"
>
	<SiteHeader />
	<div class="fixed top-0 w-[100vw]">
		{#if $page.data.src === 'debra'}
			<Slideshow images={debraPortfolio} />
			<!-- <enhanced:img
				loading="eager"
				class="mx-auto h-[100lvh] w-full object-cover portrait:-mt-20"
				src={debra_img_header}
				alt=""
			/> -->
		{:else}
			<Slideshow images={hilltopPortfolio} />
			<!-- <enhanced:img
				loading="eager"
				class="mx-auto h-[100lvh] w-full object-cover"
				src={hilltop_img_header}
				alt=""
			/> -->
		{/if}
	</div>
	<div class="relative flex min-h-screen flex-col" id="page">
		<div class="mx-auto mt-2 max-w-screen-md portrait:mx-0 portrait:my-10">
			<!-- <SuperCard> -->
			<!-- <marquee
				class:!bg-neutral-300={data.src === 'debra'}
				class:dark:!bg-neutral-700={data.src === 'debra'}
				class="-mx-14 rounded-sm bg-violet-300 py-2 font-sans text-xl font-extrabold text-black/80 shadow-sm dark:bg-violet-700 dark:text-white/80 portrait:-mx-9"
			>
				{data.marquee}
			</marquee> -->
			{#if isMounted}
				<div in:scale={{ duration }}>
					{#if $page.data.src === 'debra'}
						<h1>
							<span class="large-letter">D</span>ebra <span class="large-letter">K</span>ay
							<span class="large-letter">G</span>eorge
						</h1>
						<h1
							class:tracking-[0.65em]={$page.data.src === 'debra'}
							class="ml-4 text-2xl font-extrabold uppercase lg:text-5xl"
						>
							{$page.data.subtitle}
						</h1>
						<enhanced:img
							src={debra_img_avatar}
							class="mx-auto mt-10 w-1/2 max-w-[300px] rounded-lg border-neutral-500/50 portrait:mb-10 landscape:w-2/5"
							sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px"
							alt=""
						/>
					{:else}
						<h1 class="text-5xl lg:text-6xl">
							{$page.data.title}
						</h1>
						<h1
							class:tracking-[0.65em]={$page.data.src === 'debra'}
							class="ml-4 mt-3 text-4xl font-extrabold uppercase lg:text-5xl"
						>
							{$page.data.subtitle}
						</h1>
						<enhanced:img
							src={hilltop_img_avatar}
							class="mx-auto mt-10 w-1/2 max-w-[300px] rounded-lg border-neutral-500/50 portrait:mb-10 landscape:w-1/2"
							sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px"
							alt=""
						/>
					{/if}
					<div class="flex justify-center">
						<button
							on:click={contactTrigger}
							type="button"
							class="btn mx-auto mb-6 mt-10 rounded-full border-0 bg-white/30 px-8 pb-2 pt-[9px] text-3xl font-bold text-black shadow-lg backdrop-blur transition-all hover:scale-95 portrait:my-0"
						>
							{$page.data.cta}
						</button>
					</div>

					<!-- <div class="relative">
				<p bind:this={aboutEl} class="absolute top-0 z-10 text-left indent-6"></p>
				<p class="invisible">{data.about}</p>
			</div> -->
					<!-- </SuperCard> -->
				</div>
			{/if}
		</div>
		{#if isMounted}
			<div in:fly={{ y: -100, duration }}>
				<slot />
			</div>
		{/if}
		{#if dev}
			<TailwindIndicator />
		{/if}
		<!-- <div class="fixed inset-0">
			<img src={`${$page.data.src}/header.jpg`} class="h-full w-full object-cover" alt="" />
		</div> -->
	</div>
</div>
