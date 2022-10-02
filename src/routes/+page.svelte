<script lang="ts">
	import { circIn, circOut } from 'svelte/easing';
	import CommentForm from './CommentForm.svelte';
	import Comment from './Comment.svelte';
	import Spinner from '$lib/Spinner.svelte';
	import { fly } from 'svelte/transition';
	async function fetchComments() {
		return JSON.parse((await (await fetch('/comments')).text()) || '[]') as string[];
	}
</script>

<svelte:head>
	<title>Stored XSS Playground</title>
	<meta name="description" content="Stored XSS Playground" />
</svelte:head>

<section>
	<h1>Stored XSS Playground</h1>
	<CommentForm />
	{#await fetchComments()}
		<section transition:fly={{ y: 40, easing: circIn, duration: 300 }} class="spinner-section">
			<Spinner />
		</section>
	{:then comments}
		<ol transition:fly={{ y: 20, delay: 300, duration: 300, easing: circOut }}>
			{#each comments.slice().reverse() as comment, i (i)}
				<li>
					<Comment text={comment} />
				</li>
			{/each}
		</ol>
	{/await}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
	}

	ol {
		margin-block-start: 0vh;
		max-width: 50%;
	}

	.spinner-section {
		/* position: absolute; */
		top: 120%;
	}
</style>
