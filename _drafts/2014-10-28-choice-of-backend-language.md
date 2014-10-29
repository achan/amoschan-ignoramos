---
title: Choice of Back-End Language
timestamp: 2014-10-28T00:10:16-04:00
tags: redditcomments
---

Lots of interesting insight in this thread:

> while Node.js may out-benchmark Python in some tests, its still on the same
> order of magnitude in terms of performance. being 2 to 3 times faster doesn't
> really matter that much. if you're choosing a language based on performance
> metrics you should be looking at Java or Go. Either of those will be more than
> 10 times (and possibly much more than 10 times) faster than Python, PHP, or
> Node.

and

> Having worked with both NodeJS and Java as a backend language for different
> non-trivial projects, I can say that NodeJS pretty much always outperforms any
> Java application in the real world. The main reason for this is not that NodeJS
> is faster (it isn't), but it's concurrency model allows for much faster
> processing of request than most major Java frameworks will do (which you will
> use in practice).

In the end, I think it depends on what the goal is.

If you're rushing to complete an MVP: Go with what you know.

If you're working on a hobby: Go with what you want to learn.

If you're dealing with many concurrent users, you might want to look
in to Node due to its asynchronous nature.
