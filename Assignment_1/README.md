## BRUTE FORCE ALGORITHM - N-QUEEN PROBLEM ##
## **BASIC IDEA** ## 
The basic idea of the brute force algorithm is to place the queens on all possible positions and check each time if the queens cannot capture each other. If not then it has found a solution. Because of the vast amount of possible positions (NN for a table of size N while each row has 1 queen), this algorithm is not practical even for small table sizes (like N=12).
 
 
 
## **ADVANTAGES OVER THE METHOD** ##
 
Probably none. The brute force algorithm is only mentined to point out the superiority of the other algorithms, as a brute force approach is the last resort, when every other attempt failed.
 
 
 
## **OTHER THOUGHTS** ## 
But after "forcing" the algorithm to place only one queen on each row and one on each column the number of posible valid positions decreases to N! (N!=1*2*3....*(N-1)*N). Using this algorithm we can found a solution for larger table sizes compared to the previous method (like N=17).
 
I will not present an actual brute force algorithm here because it is not practical (has exremely low speed due to the enormous amount of resources-calculations required).

## **REFRENCE** ##

https://sites.google.com/site/nqueensolver/home/algorithms/1brute-force-algorithm
