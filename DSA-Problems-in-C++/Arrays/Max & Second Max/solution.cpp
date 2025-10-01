class Solution {
  public:
    vector<int> largestAndSecondLargest(vector<int> &arr) {
        vector<int> result;
        int res = -1;       // index of second largest
        int largest = 0;    // index of largest
        int n = arr.size();
        
        // Special case: if array has only one element
        if(n == 1) {
            result.push_back(arr[largest]);
            result.push_back(-1);  
            return result;
        }
        
      
        for(int i = 0; i < n; i++) {
            if(arr[i] > arr[largest]) {
                res = largest;
                largest = i;
            }
            else if(arr[i] != arr[largest]) {
                if(res == -1 || arr[i] > arr[res]) {
                    res = i;
                }
            }
        }
        

        result.push_back(arr[largest]);
        result.push_back(arr[res]);  
        
        return result;
    }
};
