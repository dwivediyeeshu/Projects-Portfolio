class Solution {
  public:
    int factorial(int n) {
        // code here
      if(n == 1 || n == 0)
      {
          return 1;
      }
      
      else
      
      return (n*factorial(n-1));
    }
};

// not recommended - for large values it may throw runtime error.