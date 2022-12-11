/*
    *
   / \
  +   c
 / \
a   b
Input: root
Output: "(a+b)*c"

      *
     / \
    -   d
   / \
  *   c
 / \
a   b
Output = "((a*b)-c)*d"

// output = "";
// recursive function
// 1. If left exists, add parenthesis to output and invoke recursive function on left node
// 2. concatenate value to output
// 3. If right exists, close parenthesis to output and invoke recursive function on right node
*/