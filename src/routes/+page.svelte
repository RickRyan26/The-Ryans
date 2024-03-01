<script lang="ts">
	import SuperCard from '$lib/components/custom/SuperCard.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { text } from '@sveltejs/kit';
	import { fade, fly } from 'svelte/transition';

	export let { data } = $$props;

	let scrollY = 0;
	let bannerHeight = 0;

	$: isScrolled = scrollY > 30;
</script>

<svelte:window bind:scrollY />
<div class="fixed inset-0">
	<img src={`${data.src}/header.jpg`} class="h-full w-full object-cover" alt="" />
</div>
{#if !isScrolled}
	<div
		bind:clientHeight={bannerHeight}
		transition:fly={{ y: -100 }}
		class="card fixed top-0 z-10 max-w-screen-md transform rounded-b-xl bg-opacity-50 shadow-lg backdrop-blur-sm md:left-1/2 md:-translate-x-1/2 portrait:mx-2"
	>
		<!-- svelte-ignore a11y-distracting-elements -->
		<marquee class="bg-purple-500 pb-2 pt-16 font-sans text-xl font-extrabold text-white/75">
			{data.marquee}
		</marquee>
		<div class="px-6 pb-10 pt-6">
			<h1 class="pb-6 text-center text-4xl font-extrabold lg:text-5xl">
				{data.title}
			</h1>
			<h2>
				{data.subtitle}
			</h2>
			<p class="">
				{data.about}
			</p>
		</div>
	</div>
{/if}

{#if bannerHeight}
	<div in:fade style={`margin-top:${bannerHeight}px`} class="!w-full">
		<SuperCard>
			{#if data.avatar}
				<img
					src={`${data.src}/avatar.jpg`}
					class="mx-auto mb-6 w-1/2 rounded-full shadow landscape:w-1/4"
					alt=""
				/>
			{/if}
			{#if data.about2}
				<p>
					{data.about2}
				</p>
			{/if}
			<h2 id="gallery" class="mt-6">Gallery</h2>
			<div class="mt-6 flex justify-center">
				<Button class="transition-all active:scale-95">View Full Gallery</Button>
			</div>
			<div class="grid grid-cols-2 gap-2 pt-6 md:grid-cols-3 md:gap-4 portrait:-mx-2">
				{#each Array.from({ length: data.photos }) as _, i}
					<div class="inline-block min-h-40 overflow-hidden">
						<img
							class="h-full w-full rounded-lg object-cover"
							src={`${data.src}/${i + 1}.jpg`}
							alt=""
						/>
					</div>
				{/each}
			</div>
		</SuperCard>
		<SuperCard>
			<h2 id="details">Details</h2>
			{#if data.quote}
				<blockquote class="mt-6 border-l-2 pl-6">
					{data.quote.text}
					<cite class="mt-2 block text-right">
						- {data.quote.author}
					</cite>
				</blockquote>
			{/if}
			<ul class="my-6 ml-6 list-disc [&>li]:mt-2">
				{#each data.lists as list}
					<li class="font-bold">{list[0]}</li>
					<ul class="ml-6 list-disc [&>li]:mt-2">
						{#each list[1] as item}
							<li>{item}</li>
						{/each}
					</ul>
				{/each}
			</ul>
		</SuperCard>
		<SuperCard>
			<h2 id="reviews">Reviews</h2>
			<div class="mb-36">
				{#each data.reviews as review}
					<div class="mt-6">
						<blockquote class="mt-6 border-l-2 pl-6">
							⭐⭐⭐⭐⭐
							<br />
							{review.quote}
							<cite class="mt-2 block text-right">
								- {review.author}
							</cite>
						</blockquote>
					</div>
				{/each}
			</div>
		</SuperCard>
	</div>
{/if}
