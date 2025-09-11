class Solution {
public:
    int trailingZeroes(int n) {
        int res = 0;

        for(int i = 5; i<=n ; i = i*5)
        {
            res = res + n/i;
        }

        return res;
    }
};


        // Count factors of 5 in n! (every 5 with a 2 makes a trailing zero)
        // Keep dividing n by 5, 25, 125... to include higher powers of 5