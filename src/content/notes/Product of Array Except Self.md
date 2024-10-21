---
tags:
  - leetcode
created: Fri Sep 22 2023 18:01:39 GMT-0600 (Mountain Daylight Saving Time)
lastModified: Fri Sep 22 2023 20:03:20 GMT-0600 (Mountain Daylight Saving Time)
---

This question is providing us with an array of integers `nums` something like `nums = [1,2,3,4]`

It wants a result where the new array is of the same size, say it's called `answer`, and it wants it so that `answer[i]` is equivalent to the product of every value in `nums` EXCEPT for `nums[i]`

So first we can just make an array that's of the same size as `nums` by just doing `[1] * len(nums)`

Afterwards though, you could get the product of all the numbers first with a reduce, and then for each value in `nums`, you just divide that number out and then add it into `answer`.
Sounds good, just 2 for loops I believe.

Also need to check for 0s, if there are 2 0s, then everything will just be 0 in the end.

