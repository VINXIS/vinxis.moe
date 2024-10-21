---
tags:
  - leetcode
created: Wed Sep 20 2023 14:34:59 GMT-0600 (Mountain Daylight Saving Time)
lastModified: Wed Sep 20 2023 15:33:22 GMT-0600 (Mountain Daylight Saving Time)
---

So this question is to group anagrams from an array of strings together called `strs`.

`strs` length can be 1 so we can add an exception to that immediately.

Let's start with example 1 which is `strs = ["eat","tea","tan","ate","nat","bat"]`.

The first thought that comes to mind is that you could create a new list, and then iterating over strs, you check if it fits in any of the sublists or not, and if it doesn't fit in any, then append a new list into the list.

I'm not sure if that's the greatest solution though, but it might be. I believe this method should be O(nlogn) since you have to iterate through `strs` this way, but you would then also have to iterate through the new list for each item in `strs`, and that list gradually grows bigger each time.

Another way I suppose would be to create a dict that contains the length of the strings, and then the addition of all string unicodes combined and then seeing if that key is in the dict, and if not, create a new dict value and have each dict value be a list essentially. This could probably work, let me try coding it.

This didn't work out. For `strs = ["cab","tin","pew","duh","may","ill","buy","bar","max","doc"]` it grouped `["duh","ill"]`

I suppose if I use this key method I'd need to change it to put every unicode int into the string but that would require some form of sorting which would drastically reduce the performance.

The primary issue is to properly key the values in order to avoid issues like these without having to deal with sorting and the like.

So I changed the key generation to make it so that it turns a 26 size array into a string with each value separated by a comma, but the runtime is way too slow apparently since you have to for loop for each of the strings and then reducing it into string so it's probably like O(n^3).

Nevermind apparently the only change was just to change it from a string to a tuple instead after adding the numbers into the 26 size array. Oh my god. Also better to not put that in its own function apparently Idk what python's issue is.

Good to know that you can't hash with anything aside for a tuple for whatever reason.