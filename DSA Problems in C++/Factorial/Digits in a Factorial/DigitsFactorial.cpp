 class Solution {
  public:
    int digitsInFactorial(int n) {
        // code here
        double digits = 0;
        
        for(int i = 1; i<=n;i++)
        {
            //digits = digits + log10(i);
        }
    
        
        //return (floor(digits + 1));
    }
};


/*
    To count digits in n!:

    - Direct computation of factorial becomes huge for large n.
    - Number of digits of any integer x = floor(log10(x)) + 1
    - For factorial: (log10(m*n) = log10m + log10n; )
          log10(n!) = log10(1) + log10(2) + ... + log10(n)
      => digits in n! = floor( Σ log10(i) from i=1 to n ) + 1
    - We use log base 10 because we want digits in decimal (base-10) system.
    - Advantage: avoids overflow by converting multiplication into addition.
*/
