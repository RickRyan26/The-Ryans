<script lang="ts">
	import Section from '$lib/components/custom/Section.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Quote from '$lib/components/custom/Quote.svelte';
	import Image from '$lib/components/custom/Image.svelte';
	import { onMount } from 'svelte';

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
		debra_img_1,
		debra_img_2,
		debra_img_3,
		debra_img_4,
		debra_img_5,
		debra_img_6,
		debra_img_7,
		debra_img_8,
		debra_img_9
	];

	const hilltopPortfolio = [
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

	export let { data } = $$props;

	let scrollY = 0;
	let bannerHeight = 0;

	$: isScrolled = scrollY > 30;

	const contactTrigger = () => {
		const contactTrigger = document.getElementById('contactTrigger');
		if (contactTrigger) {
			contactTrigger.click();
		}
	};

	// let i = 0;
	// let speed = 15;
	// let aboutEl: HTMLParagraphElement;
	// function typeWriter() {
	// 	if (i < data.about.length) {
	// 		aboutEl.innerHTML += data.about.charAt(i);
	// 		i++;
	// 		setTimeout(typeWriter, speed);
	// 	}
	// }

	// onMount(() => {
	// 	typeWriter();
	// });
</script>

<svelte:window bind:scrollY />
<div class="">
	<Section isTop={true}>
		<h2 class="mt-6">{data.quote.title}</h2>
		<p>{data.about}</p>
		{#if data?.quote?.text}
			<Image>
				<blockquote class="mx-auto mt-10 max-w-screen-md border-l-2 pl-6">
					{data.quote.text}
					<cite class="mt-2 block text-right">
						- {data.quote.author}
					</cite>
				</blockquote>
			</Image>
		{/if}
	</Section>
	<Section isTop={!data?.quote} isEven={!data?.quote}>
		<div id="portfolio" class="flex justify-center">
			<a href={data.portfolio} target="_blank">
				<Button class="rounded-full px-8 py-6 text-xl font-bold transition-all active:scale-95"
					>View Full Portfolio</Button
				>
			</a>
		</div>
		<div class="-mx-4 grid gap-2 pt-6 md:-mx-2 md:grid-cols-3 md:gap-4">
			{#if data.src === 'debra'}
				{#each debraPortfolio as photo}
					<Image>
						<div class="inline-block min-h-40 overflow-hidden">
							<enhanced:img
								class="aspect-square h-full w-full rounded-lg object-cover"
								src={photo}
								alt=""
								sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px"
							/>
						</div>
					</Image>
				{/each}
			{:else}
				{#each hilltopPortfolio as photo}
					<Image>
						<div class="inline-block min-h-40 overflow-hidden">
							<enhanced:img
								class="aspect-square h-full w-full rounded-lg object-cover"
								src={photo}
								alt=""
								sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px"
							/>
						</div>
					</Image>
				{/each}
			{/if}
		</div>
		<div class="mt-6 flex justify-center">
			<a href={data.portfolio} target="_blank">
				<Button class="rounded-full px-8 py-6 text-xl font-bold transition-all active:scale-95"
					>View Full Portfolio</Button
				>
			</a>
		</div>
	</Section>
	<Section isEven={data?.quote}>
		<Image>
			<h2 id="services">Services</h2>
			{#if data.about2}
				<p>
					{data.about2}
				</p>
			{/if}
		</Image>
		<ul class="mx-auto mb-6 mt-10 max-w-screen-sm">
			{#each data?.lists || [] as list}
				<Image>
					<li class="playfair-display-text mt-8 text-2xl font-bold">{list[0]}</li>
					<ul class="ml-6 list-disc [&>li]:mt-2">
						{#each list[1] as item}
							<li>{item}</li>
						{/each}
					</ul>
				</Image>
			{/each}
		</ul>
	</Section>
	<Section isEven={!data?.quote}>
		<h2 id="reviews">Reviews</h2>
		{#each data.reviews as review}
			<Quote>
				<div class="mx-auto mt-6 max-w-screen-md">
					<blockquote class:border-neutral-500={data.src === 'debra'} class="mt-6 border-l-2 pl-6">
						⭐⭐⭐⭐⭐
						<br />
						{review.quote}
						<cite class="mt-2 block text-right">
							- {review.author}
						</cite>
					</blockquote>
				</div>
			</Quote>
		{/each}
	</Section>
	<Section isEven={data?.quote}>
		<div class="flex justify-center">
			<Button
				on:click={contactTrigger}
				class="rounded-full px-8 py-10 text-4xl font-bold transition-all active:scale-95"
				>{data.cta}</Button
			>
		</div>
	</Section>
	<!-- <SiteFooter /> -->
</div>
