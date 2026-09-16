# HTML Tags Cheatsheet

## Document Structure
| Tag | Purpose |
|---|---|
| `<!DOCTYPE html>` | Declares HTML5 document type |
| `<html>` | Root element |
| `<head>` | Metadata container (not visible) |
| `<body>` | Visible page content |
| `<title>` | Page title (tab name) |
| `<meta>` | Metadata (charset, viewport, description) |
| `<link>` | Links external resources (CSS, favicon) |
| `<script>` | Embeds/links JavaScript |
| `<style>` | Embeds CSS |

## Text Content
| Tag | Purpose |
|---|---|
| `<h1>`–`<h6>` | Headings (h1 = most important) |
| `<p>` | Paragraph |
| `<br>` | Line break |
| `<hr>` | Horizontal rule/divider |
| `<span>` | Inline generic container |
| `<div>` | Block-level generic container |
| `<strong>` | Important text (bold) |
| `<em>` | Emphasized text (italic) |
| `<b>` | Bold (no semantic meaning) |
| `<i>` | Italic (no semantic meaning) |
| `<small>` | Smaller text |
| `<mark>` | Highlighted text |
| `<sub>` / `<sup>` | Subscript / superscript |
| `<blockquote>` | Long quotation |
| `<q>` | Inline quotation |
| `<abbr>` | Abbreviation (with title tooltip) |
| `<code>` | Inline code |
| `<pre>` | Preformatted text (preserves whitespace) |

## Lists
| Tag | Purpose |
|---|---|
| `<ul>` | Unordered list |
| `<ol>` | Ordered list |
| `<li>` | List item |
| `<dl>` | Description list |
| `<dt>` | Term in description list |
| `<dd>` | Description of term |

## Links & Media
| Tag | Purpose |
|---|---|
| `<a href="">` | Hyperlink |
| `<img src="" alt="">` | Image |
| `<video>` | Video player |
| `<audio>` | Audio player |
| `<source>` | Media source (for video/audio/picture) |
| `<iframe>` | Embedded external page |
| `<picture>` | Responsive image container |
| `<figure>` | Self-contained media + caption wrapper |
| `<figcaption>` | Caption for `<figure>` |

## Tables
| Tag | Purpose |
|---|---|
| `<table>` | Table container |
| `<tr>` | Table row |
| `<th>` | Header cell |
| `<td>` | Data cell |
| `<thead>` | Table header group |
| `<tbody>` | Table body group |
| `<tfoot>` | Table footer group |
| `<caption>` | Table caption |

## Forms
| Tag | Purpose |
|---|---|
| `<form>` | Form container |
| `<input>` | Input field (type=text/email/password/checkbox/radio/etc.) |
| `<textarea>` | Multi-line text input |
| `<button>` | Clickable button |
| `<select>` | Dropdown list |
| `<option>` | Option in a select |
| `<optgroup>` | Groups options in a select |
| `<label>` | Label for a form control |
| `<fieldset>` | Groups related form fields |
| `<legend>` | Caption for `<fieldset>` |
| `<datalist>` | Autocomplete suggestions for input |

## Semantic Layout (HTML5)
| Tag | Purpose |
|---|---|
| `<header>` | Introductory content/nav for a page or section |
| `<nav>` | Navigation links |
| `<main>` | Main unique content of the page |
| `<section>` | Thematic grouping of content |
| `<article>` | Self-contained, reusable content |
| `<aside>` | Tangential/sidebar content |
| `<footer>` | Footer for page or section |
| `<details>` | Collapsible content widget |
| `<summary>` | Visible heading for `<details>` |
| `<dialog>` | Dialog box/modal |

## Common `<meta>` Tags
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Page description for SEO">
```

## Common Global Attributes
| Attribute | Purpose |
|---|---|
| `id` | Unique identifier |
| `class` | CSS/JS hook, reusable |
| `style` | Inline CSS |
| `title` | Tooltip text |
| `data-*` | Custom data attributes |
| `alt` | Alternative text (images) |
| `href` | Link target |
| `src` | Resource source |
| `target` | Where to open a link (`_blank`, etc.) |
| `rel` | Relationship to linked resource (e.g. `noopener`) |

## Void Elements (no closing tag)
`<br>` `<hr>` `<img>` `<input>` `<meta>` `<link>` `<source>` `<track>` `<wbr>` `<area>` `<base>` `<col>` `<embed>`

## Boilerplate Starter
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

</body>
</html>
```

---
**Reference:** for the authoritative, always-up-to-date list, use [MDN's HTML element reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).
