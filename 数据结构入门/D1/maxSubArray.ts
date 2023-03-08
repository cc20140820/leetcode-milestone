// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
// 子数组 是数组中的一个连续部分。

// Tip:
// 1. 初始子序列是[nums[0]]；
// 2. 对于任意一个连续子序列，如果前面i-1个数的和为负，那么就舍弃前i-1个数的和，第i个数作为新序列的起点
// 3. 否则，A就作为序列的中间结点，加进结果
// 4. 遍历数组, 每次遍历结束，更新max

function maxSubArray(nums: number[]): number {
  let sum = nums[0];
  let max = nums[0];
  if (nums.length === 1) return max;
  for (let i = 1; i < nums.length; i++) {
    if (sum > 0) {
      sum += nums[i];
    } else {
      sum = nums[i];
    }
    max = Math.max(max, sum);
  }
  return max;
}
