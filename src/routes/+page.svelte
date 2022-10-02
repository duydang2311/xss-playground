<script lang="ts">
	import type { PageData } from './$types';
	import CommentForm from './CommentForm.svelte';
	import Comment from './Comment.svelte';
	import Spinner from '$lib/Spinner.svelte';
	async function fetchComments() {
		return (await fetch('/comments')).json();
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
		<Spinner />
	{:then comments}
		{#if comments && comments.length}
			<ol>
				{#each comments.slice().reverse() as comment, i (i)}
					<li>
						<Comment text={comment} />
					</li>
				{/each}
			</ol>
		{/if}
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
</style>
