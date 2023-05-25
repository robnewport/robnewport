---
layout: post
title: "Top 3 stat mistakes"
date: 2023-05-25T05:22:42Z
authors: ["Rob Newport"]
categories: ["Statistics", "Science"]
description: "Top 3 statistics white lies and how you can avoid them."
thumbnail: "/assets/images/gen/blog/stat1.jpg"
image: "/assets/images/gen/blog/stat2.jpg"
---

Research, as a deliverable, is increasingly finding its way into industry as big data becomes common place and executive decision-making requires more than just a gut feeling. But beyond looking at averages, medians, and variances, how do we know the statistics we look at aren’t lying to us?

Even in scientific research, omission of certain details could amount to “white lies” about results. But in a peer review setting, there’s always the opportunity to call out these omissions with a rebuttal for more detail. But what happens in an industrial presentation when dubious data is found in a PowerPoint slide? Or what if a client disagrees with an observation and counters with their own ad hoc point of view?

These questions have persuaded me to assemble Top 3 statistics “white lies” and how you can avoid them. This will not only make your statistical assertions more robust, it can also make the decisions based on your data more defensible.

### 1. Standard deviations can hide fluctuations in averages.

Consider the following claim by Company A and B: “Our software is on average able to increase productivity 90% of the time.”

'''
Company A [97, 85, 77, 95, 94, 87, 88, 94, 97, 86]
Company B [89, 89, 90, 90, 90, 92, 88, 89, 91, 92]
'''

Without a standard deviation value, both Company A and B appear to have the same claim. However, with standard deviation, Company A is 90% ±6.5 whereas Company B is 90% ±1.3. This means that there is more confidence in Company B’s claim because the changes of each value from the average are lower. This can be seen in Company B’s results staying very close to 90 while Company A fluctuates wildly between a low point at 77 and a high of 97. Wild fluctuations may be due to problems in the test, which can be sneakily hidden through non-reporting of standard deviations. This is why showing your standard deviations whenever reporting an average can make your claims more defensible. If someone questions the average, you have an immediate measure of how confident it is by using the standard deviation.

### 2. The wrong type of t-test can inflate a p-value.

One way a statistical test can be used is to present the hypothesis that there is no significant difference between two or more data groups. It does this is by measuring how far a particular distribution is from being normal. A simple way to understand this is to visualise a health attribute of everyone at your school or company, e.g., cholesterol. There will be a small handful of low and high cholesterol values, but most will fall within an average range. Now imagine we have developed medication that makes cholesterol go down. To test the efficacy of our medication, we ask 60 people to be a part of our test. Thirty of them take our cholesterol medication, and another 30 take a pill with something harmless and neutral in it. At the end of the trial, we again measure their cholesterol. The following results are found, in mg/dL:

'''
Before [209 222 181 212 207 190 199 207 239 231]
After [175 219 196 188 196 186 187 203 203 203]
'''

To measure how well out experiment worked, we conduct a t-test to “reject the null hypothesis” — in other words, to reject that our new measurements are not significantly different to our original ones. This is where many experiments may misrepresent their findings. A p-value from a t-test can be artificially inflated if it is erroneously run as being paired. For example, in our cholesterol test, the paired t-test p-value is 0.0222, whereas the unpaired p-value is 0.0530. If this were a paired test, the results would indicate a solid rebuke of the null hypothesis. But if it were unpaired, there would be no finding of statistical difference. So what attribute does our experiment need to be paired? It needs to show a before and after state of the same participant, such that measurements taken in one state reflect the changes of the same attribute in its altered state. This requirement fits our particular cholesterol experiment, so we are entitled to use paired t-tests to measure statistical significance. A p-value which lacks an explicit description of the type of test used to make it diminishes trust in that value, and raises some questions about how it was made.

### 3. Using outliers to exclude undesired data

Sometimes data collection has “bugs” in the process where a mechanical failure, human error, or a software glitch records something that just doesn’t fit in with the rest of a set. This could manifest as something obvious like clipping, where all values are either max or min within a range, like a row of all zeros or Int(max). Other times, it could be values that don’t logically fit an experimental framework, like an active human heart rate of 0 bpm, or a new experiment with a date set to January 1, 1970. These are all clear examples of bad data that should be excluded. However, what if the data is not abnormal, but very different from other values in the data set? For example:

'''
Set A: 3815, 7655, 7951, 1868, 4897, 4455, 6463, 7093, 7546, 12760
'''

Let’s imaging these values represent monthly mortgages. The plain average of these values is $6450.30, which doesn’t truely represent the data because of the $12,760.00 mortgage on the end. However, do we just remove this value and pretend it was never there? Do we keep plugging it into statistical packages until we get a significance value that meets our preconceptions? No, this would be akin to lying, and is bad science. There are many methods to help identify outliers, e.g., H-spread, Tukey method, Dixon’s Q test, but a solid reason for the exclusion should be presented, other than the actual separation value itself. For example, we could use the interquartile range (IQR) to find that $12,760.00 is indeed an outlier, and then investigate that mortgage value to discover that it may be close to the boundary between our study area and an area nearby with significantly higher home values. Depending on our study details, this may warrant exclusion of the data based on a map boundary error that is not fully reaslised until after data collection. A footnote may be added, identifying the exclusion of the value, while maintaining the integrity of the data collected.

These three issues bring up a larger, overarching issue of decreasing barriers between data collection and analysis. How much separation should be between those who collect data, and those who analyse it? Are the results of data being driven too much by the processes used to analyse them? In other words, if my methodology is focused on a specific range of values, will I only collect data sensitive to the range I am expecting? These are questions that will be increasingly asked as statistical claims become more common place. A great way to make these claims more defensible is with truth, transparency, and good science.

