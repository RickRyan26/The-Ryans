<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.data.title}</title>
	<meta name="description" content={$page.data.marquee} />
	<!-- <meta name="keywords" content={$page.data.keywords} /> -->
	<meta name="author" content="RickRyan26" />
	<!-- <meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content={$page.data.url} />
	<meta name="twitter:title" content={$page.data.title} />
	<meta name="twitter:description" content={$page.data.description} />
	<meta name="twitter:image" content="https://shadcn-svelte.com/og.png" />
	<meta name="twitter:image:alt" content={$page.data.name} />
	<meta name="twitter:creator" content="huntabyte" /> -->
	<meta property="og:title" content={$page.data.title} />
	<meta property="og:type" content="article" />
	<meta property="og:url" content={$page.url.origin + $page.url.pathname} />
	<meta property="og:locale" content="EN_US" />
<!-- 
	<meta property="og:image" content="https://shadcn-svelte.com/og.png" />
	<meta property="og:image:alt" content={$page.data.name} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:description" content={$page.data.description} />
	<meta property="og:site_name" content={$page.data.name} /> -->
	<!-- <link rel="shortcut icon" href="/favicon-16x16.png" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" /> -->
	<link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>{$page.data.favicon}</text></svg>">
</svelte:head>
