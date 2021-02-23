---
title: 'Using Sass for the very first time'
excerpt: "My first meet with Sass technology. What is it and how to use it? You can read it in this post!"
coverImage: '/assets/blog/dynamic-routing/sass.png'
date: '2021-02-22T20:22:53.402Z'
author:
  name: Ewelina Lichocka
  picture: '/assets/blog/authors/Ewelina.png'
ogImage:
  url: '/assets/blog/dynamic-routing/sass.png'
--- 

**Hello everyone!**  
Today is the first week since i started learning HTML. How's the progress? I'm still fightning and not giving up. I feel better watching videotutorials about coding pages and the tags used in the video don't scare me because I already know what they are for. For example, when i see the tag &lt;tr&gt; i think: Oh, it's used to specify a table row. I see a little progress in my learning so I'm happy. But okay, let's get to the point. Today I'm gonna tell you about Sass.

## What is Sass ##
Sass is a CSS preprocessor that allows you to work with stylesheets more easily.
Unlike regular CSS, Sass has options that enables you to use variables, nested rules, inline imports and more. I personally like that the code written in Sass is "clean". It doesn't have a curly brackets! But you need to know one thing. Browsers don't understand code written in this language. Browsers expect information about a page's appearance in CSS lang so what to do? Scss* format (Sass file) are fully compatible with CSS libraries so after saving the file it's compiled to CSS format.

## Installation ##
It's really simple, trust me. I'm using Node.js so I install it by using command:  
**npm install -g sass**    
We need to download Sass syntax extension for Visual Studio Code and Live Sass Compiler (change sass files into css). And that's all. Should be work for you.
Let's start and see how Sass works. Open VSC and create there a new document index.html with basic code. Also create a folder named "styles"and inside it file named: style.scss. Now we need to link our stylsheet in our HTML code. So,go to header section and type  
**<p style="color:blue;"> &lt;link rel="stylesheet" href=".styles/styles.css"&gt;</p>** 
Why css and not css? As I mentioned before, the browsers can't read scss file extension. Our correct file will be generated automatically. If you already have the Live Sass compiler plugin on the bottom bar you will find the option "Watch Sass." Click on it and you'll see the generated files:
- style.css
- style.css.map 

First file is your convert file. But you will be working on style.scss.
Actually I'm just learning Sass and CSS so I decided to periodically update this post and share my progress with you.






