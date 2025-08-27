class Solution {
  public:
    vector<int> quadraticRoots(int a, int b, int c) {
        // code here
        double det = sqrt(b*b - 4*a*c);
        
        vector<int> ans;
        
        
        if(det >= 0) {
            
            double root1 = floor((-b + det)/(2 * a));
            double root2 = floor((-b - det)/(2 * a));
            
            if(root1 >= root2)
            {
                ans.push_back((int)root1);
                ans.push_back((int)root2);
            }
            
            else {
                
                ans.push_back((int)root2);
                ans.push_back((int)root1); 
            }
        }
        
        else {
            ans.push_back(-1);
        }
        
        return ans;
    }
};