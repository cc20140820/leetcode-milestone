// 给你一个整数数组 nums 。如果任一值在数组中出现 至少两次 ，返回 true ；如果数组中每个元素互不相同，返回 false

// 利用Set数据结构的特性:
// Sets: Collections of unique values where a value may only occur once.

function containsDuplicate(nums: number[]): boolean {
  const arr = [...new Set(nums)];
  return arr.length !== nums.length;
}
