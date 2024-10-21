---
isObsidianImport: true
created: Sat Sep 23 2023 17:17:33 GMT-0600 (Mountain Daylight Saving Time)
lastModified: Sat Sep 23 2023 18:28:16 GMT-0600 (Mountain Daylight Saving Time)
---
You're given an unsorted array of integers called `nums` and you need to find the longest consecutive sequence of integers.
So `nums = [100,4,200,1,3,2]` would give `4` because of `1 2 3 4`

So you could make a hash table and then go through the list of numbers, and then see if the number before or after exists, and then for those values you would write the number after if it exists, or false otherwise maybe?

And then somehow you would just run the for loop again or something and then every time count up until it's done, and have a variable that keeps track of the largest count number that exists.

And then also delete all the values that have been counted already or something.

alright so the second for loop that's made after that checks if the values are in the dict is not `O(n)` so I created another dict that checks if the value has already been counted, and then just use that count instead of continuously going upwards and just counting it again when it's already been counted.

This submitted, but the runtime and memory are terrible.

So after that, I coded something where it creates a set, and then it loop until the set is empty, and the way that happens is that it will pop from the set, and then it will check if there are larger values and count those, and then it will check if there are smaller values and count those, and it will remove them when it finds them.

That was ostensibly too complicated though, so then I changed the code so that it would just check if there's a number - 1 of a given number in a for loop, and if it isn't, then it's assumed its the smallest number in a sequence and starts counting up until it doesn't stop.