# 📘 Complete HTML Guide for Beginners to Advanced

This `README.md` file is a complete HTML learning resource. It starts with the basics and goes up to advanced concepts, including real-life examples. It is perfect for students and self-learners.

---

## 📌 What is HTML?

**HTML (HyperText Markup Language)** is used to create the structure of web pages.

```html
<!DOCTYPE html>
<html>
<head>
  <title>My First Page</title>
</head>
<body>
  <h1>Welcome to My Website</h1>
</body>
</html>
```

---

## 🧱 Basic HTML Structure

| Tag               | Purpose                   |
| ----------------- | ------------------------- |
| `<!DOCTYPE html>` | Declares HTML5 version    |
| `<html>`          | Root of the HTML document |
| `<head>`          | Metadata, links, title    |
| `<body>`          | Visible content           |

---

## 🔤 Text Formatting Tags

| Tag              | Description      |
| ---------------- | ---------------- |
| `<h1>` to `<h6>` | Headings         |
| `<p>`            | Paragraph        |
| `<br>`           | Line break       |
| `<strong>`       | Bold text        |
| `<em>`           | Italic text      |
| `<u>`            | Underline        |
| `<span>`         | Inline container |
| `<div>`          | Block container  |

### Example:

```html
<h1>This is a Heading</h1>
<p>This is a <strong>bold</strong> word.</p>
```

---

## 🔗 Links & 🖼️ Images

### Anchor Tag

```html
<a href="https://example.com" target="_blank">Visit Site</a>
```

### Image Tag

```html
<img src="image.jpg" alt="Description" width="200">
```

---

## 📋 Lists

### Ordered List:

```html
<ol>
  <li>Item One</li>
  <li>Item Two</li>
</ol>
```

### Unordered List:

```html
<ul>
  <li>Item A</li>
  <li>Item B</li>
</ul>
```

### Description List:

```html
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
</dl>
```

---

## 📦 Tables

```html
<table border="1">
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Ali</td>
    <td>22</td>
  </tr>
</table>
```

---

## 📝 Forms

```html
<form action="/submit" method="post">
  <label>Name:</label>
  <input type="text" name="name"><br>
  <input type="submit" value="Submit">
</form>
```

### Common Input Types:

* text
* number
* email
* checkbox
* radio
* password
* submit

---

## 🎨 HTML Attributes

* `href`, `src`, `alt`, `width`, `height`, `class`, `id`, `style`

```html
<p style="color:red;">This is red text</p>
```

---

## 💡 Semantic Tags

* `<header>`
* `<nav>`
* `<main>`
* `<section>`
* `<article>`
* `<aside>`
* `<footer>`

```html
<header>
  <h1>My Website</h1>
</header>
```

---

## 🧠 Advanced Concepts

### 📁 File Paths

```html
<img src="images/logo.png">
```

* Relative: `images/logo.png`
* Absolute: `https://example.com/images/logo.png`

### 🏷️ Meta Tags

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### 🎬 Video & Audio

```html
<video controls>
  <source src="video.mp4" type="video/mp4">
</video>
```

```html
<audio controls>
  <source src="audio.mp3" type="audio/mp3">
</audio>
```

### 🧩 Iframe

```html
<iframe src="https://example.com" width="300" height="200"></iframe>
```

---

## ⚙️ Best Practices

* Use semantic HTML.
* Always close tags properly.
* Use `alt` attributes for images.
* Structure your document with `<header>`, `<main>`, and `<footer>`.
* Use indentation for readability.

---

## 🔄 HTML vs HTML5

| Feature             | HTML    | HTML5                              |
| ------------------- | ------- | ---------------------------------- |
| Doctype             | Complex | Simple: `<!DOCTYPE html>`          |
| Audio/Video Support | No      | Yes                                |
| Semantic Tags       | No      | Yes                                |
| Offline Storage     | No      | Yes (localStorage, sessionStorage) |

---

## ✅ Final Tips for Students

* Practice regularly.
* Start with small projects (portfolio, resume site).
* Use free tools like [codepen.io](https://codepen.io), [jsfiddle.net](https://jsfiddle.net), or VS Code.

---

## 🧾 Mini Project Idea

```html
- Create a Portfolio Page:
  - Include your name, image, contact form, project links
  - Use semantic tags and proper formatting
```

---

## 🎉 You're Ready!

HTML is your first step into the web world. Master it before moving to CSS and JavaScript.

> 💡 Keep exploring. Web development is creative and powerful.

Happy Coding! 🧑‍💻
