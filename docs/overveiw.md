---
title: "Overview"
description: "An overview of what Sriracha is and hopes to accomplish."
---

## Overview

### Style Props and Maps

Sriracha UI comes with some unique style props and maps that make laying out and editing you page very easy.

Style props need to be given a value and the associated style maps edit default values by adding them to a component.

Style props, work like so:

```jsx
/*
  The prop "sqr" adjusts the width and height
  simultaneously to make a square div. The bg prop
  adjusts the background color.
*/
<Box sqr="5rem" bg={theme.colors.red5} />
```

Style maps work a little different. By adding a
single prop, you can change the default value(s)
of certain properties.

```jsx
/*
  Adding jcCenter is the same as adding
  justify="center" to the component. Adding
  stretch adjusts the width to 100%.
*/
<Flex jcCenter stretch />
```

Most of the components in Sriracha use similar
"bases". Below I'll break down each of these bases.
Different components have different combinations of
these bases, and sometimes the bases will contain
default values that are different from one another
in order the help each component maintain a level of
uniqueness. In all cases, these values can easily be
modified.

## Flex-base

### Flex Props

| CSS Property Name | Prop Name |
| ----------------- | --------- |
| flex-direction    | direction |
| justify-content   | justify   |
| align-items       | align     |
| align-content     | content   |

Example:

```jsx
<Flex direction="column" align="center">
  ...
</Flex>
```

### Flex Style Maps

| CSS Property Name | Style Prop | Property Value |
| ----------------- | ---------- | -------------- |
| flex-wrap         | wrap       | wrap           |
| flex-direction    | col        | column         |
| flex-direction    | revrow     | row-reverse    |
| flex-direction    | revcol     | column-reverse |
| justify-content   | jcEnd      | center         |
| justify-content   | jcCenter   | space-between  |
| justify-content   | jcBetween  | space-around   |
| justify-content   | jcAround   | space-evenly   |
| justify-content   | jcEvenly   | flex-start     |
| align-items       | aiCenter   | center         |
| align-items       | aiStart    | flex-start     |
| align-items       | aiEnd      | flex-end       |
| align-items       | aiStretch  | stretch        |
| align-content     | acCenter   | center         |
| align-content     | acStart    | flex-start     |
| align-content     | acEnd      | flex-end       |
| align-content     | acBetween  | space-between  |
| align-content     | acAround   | space-around   |
| align-content     | acEvenly   | space-evenly   |
| flex-direction    | drape      | column         |
| align-items       | drape      | center         |

Example:

```jsx
/*
  `col` changes flex-direction to column
  `aiCenter` changes align items to center
*/
<Flex col aiCenter>...</Flex>
// `drape` changes flex-direction to column and align-items to center
<Flex drape>...</Flex>
```

## Size Base

### Size Props

| CSS Property Name | Prop Name |
| ----------------- | --------- |
| width && height   | sqr       |
| height            | h         |
| width             | w         |
| margin            | m         |
| padding           | p         |
| min-height        | minH      |
| max-width         | maxW      |
| min-width         | minW      |
| max-height        | maxH      |
| box-sizing        | boxSize   |

### Size Style Maps

| CSS Property Name | Style Prop | Property Value |
| ----------------- | ---------- | -------------- |
| width             | stretch    | 100%           |
| margin            | xsm        | 1rem           |
| margin            | sm         | 2rem           |
| margin            | mm         | 3rem           |
| margin            | lm         | 4rem           |
| margin            | xlm        | 5rem           |
| padding           | xsp        | 1rem           |
| padding           | sp         | 2rem           |
| padding           | mp         | 3rem           |
| padding           | lp         | 4rem           |
| padding           | xlp        | 5rem           |
| box-sizing        | cbox       | content-box    |
| box-sizing        | init       | initial        |
| box-sizing        | inherit    | inherit        |

## Style-base

### Style Props

| CSS Property Name | Prop Name |
| ----------------- | --------- |
| border-radius     | radius    |
| border            | border    |
| opacity           | opacity   |
| box-shadow        | shadow    |
| background        | bg        |
| color             | color     |
| overflow          | overflow  |
| font-family       | font      |
| font-size         | fontSize  |
| font-weight       | weight    |
| clip-path         | clip      |

### Style Maps

| CSS Property Name  | Style Prop | Property Value   |
| ------------------ | ---------- | ---------------- |
| box-shadow         | shade      | theme.shadows[5] |
| box-shadow         | sink       | theme.shadows[5] |
| (hover) box-shadow | sink       | theme.shadows[2] |
| overflow           | visible    | visible          |
| overflow           | scroll     | scroll           |
| overflow           | auto       | auto             |

## Background-base

### Background Props

| CSS Property Name   | Prop Name     |
| ------------------- | ------------- |
| background-size     | bgSize        |
| background-attach   | bgSize        |
| background-position | bgSize        |
| background-size     | sizeLen       |
| background-size     | sizeCover     |
| background-size     | sizeContain   |
| background-size     | sizeInitial   |
| background-size     | sizeInherit   |
| background-size     | sizeAuto      |
| background-attach   | attachFix     |
| background-attach   | attachLocal   |
| background-attach   | attachInherit |
| background-attach   | attachInitial |
| background-attach   | attachScroll  |

## Font-base

### Font Props

| CSS Property Name | Style Prop | Property Value |
| ----------------- | ---------- | -------------- |
| font-size         | xsf        | 0.6rem         |
| font-size         | sf         | 1rem           |
| font-size         | mf         | 1.4rem         |
| font-size         | lf         | 2rem           |
| font-size         | xlf        | 3rem           |

### Font Maps

| CSS Property Name | Style Prop | Property Value |
| ----------------- | ---------- | -------------- |
| text-align        | taRight    | right          |
| text-align        | taLeft     | left           |
| text-align        | taCenter   | center         |
| text-align        | taJustify  | justify        |
| text-align        | taAll      | justify-all    |
| text-align        | taStart    | start          |
| text-align        | taEnd      | end            |
| font-size         | xsf        | 0.6rem         |
| font-size         | sf         | 1rem           |
| font-size         | mf         | 1.4rem         |
| font-size         | lf         | 2rem           |
| font-size         | xlf        | 3rem           |
