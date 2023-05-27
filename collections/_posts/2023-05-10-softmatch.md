---
layout: post
title: "SoftMatch: Measuring gaze"
date: 2023-05-15T05:22:42Z
authors: ["Rob Newport"]
categories: ["Eye Tracking", "Neuroscience"]
description: "An innovative way to examine bottom-up sensory influencers."
thumbnail: "/assets/images/gen/blog/eyeballs.jpg"
image: "/assets/images/gen/blog/eyeballs.jpg"
---

### What is eye-tracking?

Eye tracking is a technology that involves monitoring and analyzing the movements and positions of a person's eyes to gain insights into their visual attention and cognitive processes. By using specialized hardware and software, such as eye trackers, infrared cameras, and algorithms, eye tracking systems can accurately track and record the direction, duration, and frequency of eye movements. This data can be used to study various aspects of human behavior, including gaze patterns, visual perception, attention allocation, reading behavior, user interactions with digital interfaces, and even neurological disorders. Eye tracking has applications in fields like psychology, market research, user experience design, gaming, medical diagnostics, and assistive technology, enabling researchers and professionals to better understand human visual behavior and improve the effectiveness and efficiency of visual communication and interaction.

### String Edit Methods

String edit methods in eye tracking refer to techniques used to manipulate and modify textual content based on eye movement data. These methods involve analyzing the gaze patterns of individuals as they read or interact with text, and then making appropriate edits to the string based on the observed eye movements. Examples of string edit methods in eye tracking include determining the areas of interest or points of fixation within a text, identifying reading difficulties or errors, and suggesting revisions to improve readability or comprehension. These methods aim to enhance the user experience by leveraging eye tracking data to optimize the presentation and delivery of textual information.

### Abstract

Recent studies matching eye gaze patterns with those of others contain research that is heavily reliant on string editing methods borrowed from early work in bioinformatics. Previous studies have shown string editing methods to be susceptible to false negative results when matching mutated genes or unordered regions of interest in scanpaths. Even as new methods have emerged for matching amino acids using novel combinatorial techniques, scanpath matching is still limited by a traditional collinear approach. 

This approach reduces the ability to discriminate between free viewing scanpaths of two people looking at the same stimulus due to the heavy weight placed on linearity. To overcome this limitation, we here introduce a new method called SoftMatch to compare pairs of scanpaths. SoftMatch diverges from traditional scanpath matching in two different ways: firstly, by preserving locality using fractal curves to reduce dimensionality from 2D Cartesian (x,y) coordinates into 1D (h) Hilbert distances, and secondly by taking a combinatorial approach to fixation matching using discrete Fréchet distance measurements between segments of scanpath fixation sequences. 

These matching "sequences of fixations over time" are a loose acronym for SoftMatch. Results indicate high degrees of statistical and substantive significance when scoring matches between scanpaths made during free-form viewing of unfamiliar stimuli. Applications of this method can be used to better understand bottom up perceptual processes extending to scanpath outlier detection, expertise analysis, pathological screening, and salience prediction.

To view a published paper on this topic, please see:  
__Newport RA, Russo C, Liu S, Suman AA, Di Ieva A.__ _SoftMatch: Comparing Scanpaths Using Combinatorial Spatio-Temporal Sequences with Fractal Curves._ Sensors (Basel). 2022 Sep 30;22(19):7438. doi: 10.3390/s22197438.
[https://pubmed.ncbi.nlm.nih.gov/36236535/](https://pubmed.ncbi.nlm.nih.gov/36236535/)
