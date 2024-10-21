---
tags:
  - leetcode
created: Fri Sep 22 2023 15:12:47 GMT-0600 (Mountain Daylight Saving Time)
lastModified: Fri Sep 22 2023 18:01:16 GMT-0600 (Mountain Daylight Saving Time)
---

This problem provides an array of integers `nums` such as `nums = [1,1,1,2,2,3]`, and it asks us to provide the `k`th largest elements, and they provide this value.

So what we would need is to figure out what amount of an integer would be considered the `k`th largest, and then to return the integers that are equivalent to that or larger.

First thought that comes to mind is to just create a dict, and then go through the array and count the occurrences of each. And then afterwards, 
- If the size of the dict is just 1 then we can just return `nums[0]`
- Otherwise, we could create a set that stores all the values of the dict (`set(dict.keys()`), and then from there
	- If `k` is the same as the set size, then we can just return everything (`dict.keys()`)
	- or else we'd have to probably sort it but then it won't be faster than O(nlogn) because all sorting means are O(nlogn) or slower.

I just did this because apparently [[Quickselect]] is how you make it faster which I had no idea about before, and it's supposedly not worth the time and effort to implement and figure out for me right now.