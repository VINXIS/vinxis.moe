---
tags:
  - leetcode
created: Sat Sep 23 2023 16:08:26 GMT-0600 (Mountain Daylight Saving Time)
lastModified: Sat Sep 23 2023 17:17:13 GMT-0600 (Mountain Daylight Saving Time)
---

Given a 9x9 sudoku board. Determine if it's valid. The input looks like this:
```py
board = 
	[["5","3",".",".","7",".",".",".","."]
	,["6",".",".","1","9","5",".",".","."]
	,[".","9","8",".",".",".",".","6","."]
	,["8",".",".",".","6",".",".",".","3"]
	,["4",".",".","8",".","3",".",".","1"]
	,["7",".",".",".","2",".",".",".","6"]
	,[".","6",".",".",".",".","2","8","."]
	,[".",".",".","4","1","9",".",".","5"]
	,[".",".",".",".","8",".",".","7","9"]]
```

So in order to determine if it's valid, every value must appear once in it's row, column, and square.

So what could be done is that we have hashes for each square from 1 to 9, with the first square being the top left, and the ninth being the bottom right going left to right.

And then also have hashes for rows and columns that check as well.

For the squares you would want to create some math function based off of the row and column that it's in. So that rows and columns 3 would still be in square 1.

So for columns it would be `floor(col/3)` and then for rows it'd be `floor(row/3) * 3`

Apparently this is the best way to do it so I don't feel stupid this time nice