<svg
	class="relative z-10 h-12 w-full overflow-hidden"
	viewBox="0 0 1200 120"
	preserveAspectRatio="none"
>
	<path
		d={'M600 115 L0 0 0 120 1200 120 1200 0 600 115z'}
		class="!fill-slate-50 dark:!fill-slate-900"
	></path>
</svg>
<div class="card relative z-10 h-full min-h-64 w-full px-4">
	<div class="mx-auto max-w-screen-md py-6">
		<slot />
	</div>
</div>
<svg class="relative z-10 h-12 w-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
	<path d="M0 0 L1200 0 L600 115 Z" class="!fill-slate-50 dark:!fill-slate-900"></path>
</svg>
