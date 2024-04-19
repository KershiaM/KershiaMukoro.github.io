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

`This is code`

```
This is a
piece of code
in a block
```

```
This too
```

This is a table.

| Name     | Age |
| -------- | --- |
| John Doe | 30  |
| Jane Doe | 25  |

This is a horizontal rule.

---

const name = 'John Doe';

**This is a bold text.**

_This is an italic text._



```html wrap
<p>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
	incididunt ut labore et dolore magna aliqua.
</p>
```

<center> Your text here </center>

....
Add Caption below image
![Amazon Rainforest](/path/to/image)

<figcaption>The Amazon Rainforest contains a multitude of species.</figcaption>
....

<!-- Add caption below image

<p>
	<img src="/path/to/image" alt="Amazon Rainforest">
	<em>The Amazon Rainforest contains a multitude of species.</em>
</p> -->

Adding Blank Lines

To add a single extra line after a paragraph, add two extra spaces ( ) at the end of the text.
To add an extra line of space between paragraphs, add the HTML non-breaking space (&nbsp;) code, followed by two extra spaces (e.g. &nbsp; ).
To add an extra line in between elements which automatically join together (such as lists, you must use the following HTML notation:

<p>&nbsp;</p>

Text placement beside image
<br clear="left"/>
<br clear="right"/>
<br clear="both"/>
For example:

<img align="left" src="imagepath">
<img src={graystorreys2} alt="graystorreys2" style={{width: 450}} hspace='10'/>

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

:::note (grey)
This guide assumes that you are familiar with Asana's basic operations and functions.
:::

:::tip (green)

:::info (blue)

:::warning (yellow)

:::danger (red)

---

How to Add Cards to a md page:

import DocCardList from '@theme/DocCardList';
<DocCardList />

---

import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

:::tip[Use tabs in admonitions]

<Tabs>
  <TabItem value="apple" label="Apple">This is an apple 🍎</TabItem>
  <TabItem value="orange" label="Orange">This is an orange 🍊</TabItem>
  <TabItem value="banana" label="Banana">This is a banana 🍌</TabItem>
</Tabs>

:::

----
create diff colored tab headings

import styles from './styles.module.css';

<Tabs>
  <TabItem value="apple" label="Apple" attributes={{className: styles.red}}>
    This is an apple 🍎
  </TabItem>
  <TabItem value="orange" label="Orange" attributes={{className: styles.orange}}>
    This is an orange 🍊
  </TabItem>
  <TabItem value="banana" label="Banana" attributes={{className: styles.yellow}}>
    This is a banana 🍌
  </TabItem>
</Tabs>
