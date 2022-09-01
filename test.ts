function rotate(nums: number[], k: number): number[] {
    let result = nums.slice(nums.length - k, nums.length).concat(nums.slice(0, nums.length - k));
    nums = result;
    return nums;
};

console.log(rotate([1,2,3,4,5,6,7],3));