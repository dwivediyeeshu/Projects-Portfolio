class Solution {
  public:
    int factorial(int n) {
        
       long long int res = 1;
        
        for(int i = 2; i<=n ; i++)
        {
            res = res * i;
        }
        
        return res;
    }
};