class Solution {
public:
    int searchInsert(vector<int>& nums, int target) {

        int result = -1;
        int n = nums.size();

        for (int i = 0; i < n; i++) {
            if (nums[i] == target) {
                result = i;
            }
        }

        if (result == -1) {
            nums.push_back(target);

            sort(nums.begin(), nums.end());

            int size = nums.size();

            for (int i = 0; i < size; i++) {
                if (nums[i] == target) {
                    result = i;
                }
            }
        }

        return result;
    }
};