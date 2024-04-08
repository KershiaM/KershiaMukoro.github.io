---
title: Basic Markdown
sidebar_position: 1
---

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

This is a paragraph. Keep reading.

This is a [link](https://www.google.com).

![alt text](https://picsum.photos/600/400)

This is a list.

- Item 1
- Item 2
- Item 3

This is a numbered list.

1. Item 1
2. Item 2
3. Item 3

> This is a blockquote.

This is a code block.
js
const name = 'John Doe';
console.log(name);
This is a table.

| Name     | Age |
| -------- | --- |
| John Doe | 30  |
| Jane Doe | 25  |

This is a horizontal rule.

---

const name = 'John Doe';

**This is a bold text.**

This is an italic text.

```html wrap
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
```
<center> Your text here </center>

....
Add Caption below image
![Amazon Rainforest](/path/to/image)

<figcaption>The Amazon Rainforest contains a multitude of species.</figcaption>
....

Add caption below image
<p>
	<img src="/path/to/image" alt="Amazon Rainforest">
	<em>The Amazon Rainforest contains a multitude of species.</em>
</p>

Adding Blank Lines

To add a single extra line after a paragraph, add two extra spaces (  ) at the end of the text.
To add an extra line of space between paragraphs, add the HTML non-breaking space (&nbsp;) code, followed by two extra spaces (e.g. &nbsp;  ).
To add an extra line in between elements which automatically join together (such as lists, you must use the following HTML notation:
<p>&nbsp;</p>


Text placement beside image 
<br clear="left"/>
<br clear="right"/>
<br clear="both"/>
For example:

<img align="left" src="imagepath">

some text aligned to the right of the image

<br clear="left"/>

and some text that is below the image (without an obnoxious number of <br /> tags).

Gap - Vertical (Stacked) Image Placement (align=same for all imgs)

<p>
    <img src="https://picsum.photos/500/100" >
    <p>
    <img src="https://picsum.photos/500/100" >
    <p>
    <img src="https://picsum.photos/500/100" >
</p>

Gap - Horizontal (side-by-side) (align=same for all imgs)
With hspace property you can set horizontal (left and right) padding for an image.

<p>
    <img src="https://picsum.photos/100/100" hspace="10" >
    <img src="https://picsum.photos/100/100" hspace="10" >
</p>

---
How to add admonitions

:::note
This guide assumes that you are familiar with Asana's basic operations and functions.
:::

---
How to Add Cards to a md page:

import DocCardList from '@theme/DocCardList';
<DocCardList />
---