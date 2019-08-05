---
layout: post
categories: [bookshelf]
title: "The Effective Engineer — E. Lau"
cover: "/assets/journal/effective-engineer/cover.jpg"
---

# {{ page.title }}

![Book cover](/assets/journal/effective-engineer/cover_photo.jpg)

## Quotes

About order-of-magnitude leverage estimation of new ideas:

> ... we systematically went though every idea and estimated its percentage impact (0.1%, 1%, 10%, or 100%) on our growth metrics as well as the time it would take to implement (hours, days, weeks, or months).

About main user happiness metric of Google search:

> ... Google/s best indication of user happiness is the "long click." This occurs when someone clicks a search result and doesn't return to the result page for a long time. A long click means that Google has successfully displayed a result that the user has been searching for. On the other hand, a "short click" -- occurring when someone follows link only to return immediately to the results page to try another one -- indicates unhappiness with the result. Unhappy users also tend to change their queries or go to the next page of search results.

Argument against gross metrics:

> When growing a product's user base, it's tempting to track gross numbers of total registered users and be content with seeing those metrics move up ant to the right. Unfortunately, those numbers don't indicate whether you're sustainably increasing growth. A good press article might spark a one-time bump to growth number but not have much long-term impact. On the other hand, measuring growth in terms of your weekly growth rate (for example, the ratio of new registered users in a week over total registered users), whether growth is slowing down.

About long-term engagement tracking:

> When tracking user engagement, the number of weekly active uses doesn't provide a complete picture. In fact, that number might increase temporarily even if product changes actually reducing engagement over time. Users could be signing up as a result of prior momentum, before there is time for the long-term effects of the changes to be reflected in the gross numbers. And they might be more likely to churn and abandon the product after signing up than before. An alternative and more accurate metric would be the weekly active rate by age of cohort. In other words, measure the fraction of users who are still weekly actives the nth week after signing up, and track how that number changes over time. This metric provides more actionable insight into how product changes have affected the engagement of newer cohorts of users as compared to older ones.

About responsiveness and robustness of metrics:

> A responsive metric updates quickly enough to give feedback about whether a given change was positive or negative, so that your team can learn where to apply future efforts. It is a leading indicator of how your team is currently doing. A metric that measures active users in the past week is more responsive than the one that tracks active users in the past month, since the latter requires a month after any change to fully capture the effects. However, a metric also needs to be robust enough that external factors outside of the team's control don't lead to significant noise. Trying to track performance improvements with per-minute response time metric would be difficult because of their high variance. However, tracking the response times averaged over an hour or a day would make the metric more robust to noise and allow trends to be detected more easily. Responsiveness needs to be balanced with robustness.

About importance of staying in scope of a project:

> While we were rewriting the analytics module in Ooyala's video player, we knew we would eventually switch to more extensible logging format. So why rebuild a module on top of the old format, given that it would soon be replaced? It would be less work in the long run to make the change up front, or so the argument went. Unfortunately, a series of well-intentioned decisions like this one created costly delays for our project.

> In the middle of a long project, it's easy for someone to disappear down a rabbit hole for a week, rewriting some code library or building a partially-related feature. From the perspective of each individual engineer, taking a small detour won't slow the schedule down that much, and tasks like cleaning up the codebase may even reduce work in the long-term. Many of the benefits from local engineering trade-offs, however don't materialize until after the project finishes, whereas increasing the total work inside a project's time window introduces delays. The cost of these delays depend on the project, and building alignments helps ensure that team members internalize those costs and make consistent tradeoffs. Otherwise, what ensues is a classic tragedy of the commons, where each individual tradeoff is rational but translates into an unacceptable delay in the aggregate. A well-defined scope makes it easier for team members to check on each other and ask, "Does what you're doing contribute to the main goal?"

About incremental rewrites:

> Engineers who successfully rewrite systems tend to do so by converting a large rewrite project into a series of smaller projects. They rewrite a software system incrementally, in more controlled phases. They adopt the mindset that Martin Fowler advocates in Refactoring: engineers should use a series of incremental, behavior-preserving transformations to refactor code. "By doing them in small steps you reduce the risk of introducing errors," Fowler advices. "You also avoid having the system broken while you are carrying out the restructuring -- which allows you to gradually refactor a system over an extended period of time."

About rewrite of Google Docs:

> They spent a week running the codebase through a series of regular expressions to convert large batches of code to Java and then painstakingly fixed up tens to hundreds of thousands of compile errors. But as a result of their disciplined two-step approach, their four-person team completed the rewrite in just 12 weeks, setting the record for fastest team to port into Google infrastructure as an acquisition and paving the way for the growth of Google Docs.

Single machine instead of a cluster:

> If you're processing large amount of data, consider whether the data is actually large enough such that you need a distributed cluster, o whether single, beefy machine will suffice. Clusters are harder to manage and debug than single machines.

On automating mechanics vs. automating decision-making.

> Automation can produce diminishing returns as you move from automating mechanics to automating decision-making. Given your finite time, focus first on automating mechanics. Simplify a complicated chain of 12 commands into a single script that unambiguously does what you want. Only after you've picked all the low-hanging fruit should you try to address the much harder problem of automating smart decisions.

About good vs. bad interview questions:

> As an interviewer, your goal is to optimize for questions with high signal-to-noise ratios -- questions that reveal a large amount of useful information (signal) about the candidate per minute spent, with little irrelevant or useless data (noise). Good, well-executed questions let you confidently differentiate among candidates of varying abilities; bad, poorly managed questions leave you unsure whether to hire the candidate.

About what defines a good engineering culture:

> Based on my hundreds of interviews and conversations, I've found that great engineering cultures:
> 1. Optimize for iteration speed.
> 2. Push relentlessly towards automation.
> 3. Build the right software abstractions.
> 4. Focus on high code quality by using code reviews.
> 5. Maintain a respectful work environment.
> 6. Build shared ownership of code.
> 7. Invest in automated testing.
> 8. Allot experimentation time, either through 20% or hackathons.
> 9. Foster a culture of learning and continuous improvement.
> 10. Hire the best.
