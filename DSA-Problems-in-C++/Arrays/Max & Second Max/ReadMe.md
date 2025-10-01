# Max and Second Max

## 📌 Problem

```text
Given an array arr[] of positive integers which may have duplicates. 
The task is to find the maximum and second maximum from the array, 
and both of them should be different from each other. 

If no second maximum exists, then the second maximum will be -1.

Examples:

Input: arr[] = [2, 1, 2]
Output: [2, 1]
Explanation: In the given array elements, 2 is the maximum and 1 is the second maximum.

Input: arr[] = [3, 3, 3]
Output: [3, -1]
Explanation: In the given array, 3 is the maximum, and since no distinct smaller element exists, the second maximum is -1.

Constraints:
1 ≤ arr.size() ≤ 10^5
1 ≤ arr[i] ≤ 10^6
