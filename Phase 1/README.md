## DAA-168-Fall-2020 : PHASE-1 ##
## N-Queen Problem Solution by Backtracking Algorithm ##
N Queens Problem is a famous puzzle in which n-queens are to be placed on an nxn chessboard such that no two queens are in the same row, column, or diagonal. In this algorithm, I  have implemented a 4*4 matrix to place 4 queens. 

Time Complexity in N-Queen= O(n!).
## RECURSIVE BACKTRACKING ALGO ##
Backtracking is an algorithmic-procedure for tackling issues recursively by attempting to manufacture an answer gradually, each piece in turn, eliminating those arrangements that neglect to fulfill the correct arrangement.

## ALGORRITHM IN STEPS ##
1) Start in the leftmost column
2) If all queens are placed
    return true
3) Try all rows in the current column.  Do following
   for every tried row.
    a) If the queen can be placed safely in this row
       then mark this [row, column] as part of the 
       solution and recursively check if placing  
       queen here leads to a solution.
    b) If placing queen in [row, column] leads to a
       solution then return true.
    c) If placing queen doesn't lead to a solution 
       then unmark this [row, column] (Backtrack) 
       and go to step (a) to try other rows.
3) If all rows have been tried and nothing worked, 
   return false to trigger backtracking.


## Research Paper ##
1. https://see.stanford.edu/materials/icspacs106b/H19-RecBacktrackExamples.pdf


