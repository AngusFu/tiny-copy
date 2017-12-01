# tiny-copy

A tiny tool to copy text content.

## Install

```bash
npm install --save tiny-copy

# or
yarn add tiny-copy
```

Or just add a `script` tag in you html:

```html
<script src="https://unpkg.com/tiny-copy"></script>
```

## Usage

```js
const tinyCopy = require('tiny-copy')

// Copy from an HTML element
tinyCopy(document.getElementById('my-rich-text'))

// Copy custom text content (raw text)
tinyCopy('some text...')
```