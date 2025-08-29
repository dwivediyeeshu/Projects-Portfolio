class Solution {
  public:
    int factorial(int n) {

       long long int res = 1;

       if (n==0 || n==1)
       {
        return res;
       }
        
        for(int i = 2; i<=n ; i++)
        {
            res = res * i;
        }
        
        return res;
    }
};