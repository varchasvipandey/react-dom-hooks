# React DOM Hooks

![react-dom-hooks banner image](https://github.com/varchasvipandey/images/blob/master/react-dom-hooks%20varchasvi%20pandey.jpg?raw=true)

![Npm](https://img.shields.io/npm/v/react-dom-hooks?logo=npm&style=for-the-badge)
![GitHub](https://img.shields.io/github/license/varchasvipandey/react-dom-hooks?style=for-the-badge)
![Npm](https://img.shields.io/npm/dm/react-dom-hooks?style=for-the-badge)

A collection of React Hooks carrying complex JavaScript queries for handling awesome DOM events. The package is written in TypeScript to support all modern needs.

&nbsp;

## About

React DOM Hooks provides a set of UI functionalities that makes it a UI supporting library. APIs provided by each hook can be connected to any UI element. This makes achieving complex UI functionalities easier without restricting the idea to a particular design making it totally unopinionated.

&nbsp;

## Attention

React DOM Hooks manipulates the DOM. Hooks provided in this package work on HTML IDs and classes more than React refs. If you are facing major performance issues after using any of the provided hooks from this package, we would recommend you to switch to a different library or package. But in most cases, this does not impact the performance at all. All the hooks available in this package got tested on multiple applications of different sizes and proficiency levels.

&nbsp;

## Getting started

```shell
npm install react-dom-hooks
```

&nbsp;



# List of Hooks

### useHorizontalScroll

```typescript
import {useHorizontalScroll} from "react-dom-hooks"
```

#### useHorizontalScroll Props

| Name   |      Type      |         Description      |  
|:----------|:-------------|:-------------------------|
| containerId |  string | Unique ID of the container |

#### useHorizontalScroll Handlers and Options

| Name   |      Type      |         Description      |  
|:----------|:-------------|:-------------------------|
| handleScroll |  function | Takes scroll direction as "left" or "right" |

[Demo for useHorizontalScroll](https://codesandbox.io/s/react-dom-hooks-ud2pf?file=/src/HorizontalScroll/HorizontalScroll.tsx)

&nbsp;

____

&nbsp;

### useVerticalScroll

```typescript
import {useVerticalScroll} from "react-dom-hooks"
```

#### useVerticalScroll Props

| Name   |      Type      |         Description      |  
|:----------|:-------------|:-------------------------|
| containerId |  string | Unique ID of the container |

#### useVerticalScroll Handlers and Options

| Name   |      Type      |         Description      |  
|:----------|:-------------|:-------------------------|
| handleScroll |  function | Takes scroll direction as "up" or "down" |

[Demo for useVerticalScroll](https://codesandbox.io/s/react-dom-hooks-ud2pf?file=/src/VerticalScroll/VerticalScroll.tsx)

&nbsp;

____

&nbsp;

### useHorizontalAutoLoopScroll

```typescript
import {useHorizontalAutoLoopScroll} from "react-dom-hooks"
```

#### useHorizontalAutoLoopScroll Props

| Name   |      Type      |         Description      |  
|:----------|:-------------|:-------------------------|
| containerId |  string | Unique ID of the parent container |
| childClass |  string | Class assigned to all the children |
| loopSpeed |  number (optional) | Unique ID of the container |

#### useHorizontalAutoLoopScroll Handlers and Options

| Name   |      Type      |         Description      |  
|:----------|:-------------|:-------------------------|
| pauseLoop |  function | Pauses the loop |
| resumeLoop |  function | Resumes the loop |

[Demo for useHorizontalAutoLoopScroll](https://codesandbox.io/s/react-dom-hooks-ud2pf?file=/src/HorizontalAutoLoopScroll/HorizontalAutoLoopScroll.tsx)

&nbsp;

____

&nbsp;

### useCarousel

```typescript
import {useCarousel} from "react-dom-hooks"
```

#### useCarousel Props

| Name   |      Type      |         Description      |  
|:----------|:-------------|:-------------------------|
| containerRef |  React.RefObject < HTMLDivElement > | ref to the parent container |
| loop |  boolean (optional) | Loop slides on reaching the end |

#### useCarousel Handlers and Options

| Name   |      Type      |         Description      |  
|:----------|:-------------|:-------------------------|
| totalSlides |  number | Total number of slides |
| activeSlide |  number | Indexed to 1 |
| changeSlide |  function | Takes direction as "prev" or "next" |

[Demo for useCarousel](https://codesandbox.io/s/react-dom-hooks-ud2pf?file=/src/Carousel/Carousel.tsx)

&nbsp;

____

&nbsp;

### useHorizontalAutoSnapScroll

```typescript
import {useHorizontalAutoSnapScroll} from "react-dom-hooks"
```

#### useHorizontalAutoSnapScroll Props

| Name         | Type   | Description                                                |
| :----------- | :----- | :--------------------------------------------------------- |
| scrollLeftBy | number | Should match (approximately) with the child width          |
| snapDelay    | number | (in ms), i.e. 2000 = 2 seconds. Controls auto-scroll delay |

#### useHorizontalAutoSnapScroll  Handlers and Options

| Name         | Type                                           | Description                                   |
| :----------- | :--------------------------------------------- | :-------------------------------------------- |
| containerRef | React.MutableRefObject<HTMLDivElement \| null> | ref to be applied on the scrollable container |

[Demo for useHorizontalAutoSnapScroll](https://codesandbox.io/s/react-dom-hooks-ud2pf?file=/src/HorizontalAutoSnapScroll/HorizontalAutoSnapScroll.tsx)
