## DAA-168-Fall-2020 : **FINAL PROJECT** ##
## N-Queen Problem Solution by Dynamic programming ##
N Queens Problem is a famous puzzle in which n-queens are to be placed on an nxn chessboard such that no two queens are in the same row, column, or diagonal. In this algorithm, I  have implemented a 4*4 matrix to place 4 queens. 
**DYNAMIC TIME COMPLIXCITY**
	
	n rows
	n columns
	T(n) can be computed in time O(f(n)16”) and space O(n*16”). 
	Q(n) can be computed in time O(f(nI64”) and space O(n264”).

**Time complexity of the Search Method**

	Total time complexity: Ο(n^2 f(n) 2^(6n-2))
	During each iteration, we decrease the number of swaps by at least 1
	During each iteration, we consider 𝑛^2  pairs of queens
	Maximum steps to find the solution: 𝑛^3
	Experimental results show an average of Ο(𝑛 log(𝑛)) steps, even if multiple initial positions are needed

 



**ALGORITHM** Queens
1)      [Initialization] Set QUEUE to {(PI, 1)).
2)      [Square selection] Choose an unexamined
         square. Let T be the set of four lines containing this square.
3)      [Iteration] For every tuple (S, i) E QUEUE
         such that S n T = 0 do the following.
3.1    [Compaction] If (S U T, j) E QUEUE for
         some j, replace j by i + j.
3.2     [Creation] Otherwise, add (S U T, i> to
          QUEUE.
4)       [Termination] If an unexamined square remains, go to step 2. Otherwise, terminate.
          determine the number of solutions from QUEUE.
          First, define A4 to be the set of 2n lines that are
          At the end of this algorithm we can easily 


-------------------------------------------------
Arrangement of Matrix for Solution# 3
-------------------------------------------------
1 0 0 0
0 0 1 0
0 1 0 0
0 0 0 1

Number of ways to place 4 queens :1
