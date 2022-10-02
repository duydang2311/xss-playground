<form method="post" action="/">
	<label for="comment"> Bình luận </label>
	<textarea name="comment" id="comment" placeholder="Nhập bình luận..." spellcheck="false" />
	<button type="submit">Submit</button>
</form>

<style>
	form,
	textarea {
		width: 400px;
		box-sizing: border-box;
	}
	textarea {
		font-family: monospace;
		font-weight: 500;
		resize: none;
		margin: 0;
		outline: none;
		height: 150px;
	}
</style>
