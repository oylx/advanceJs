/**
 * 冒泡排序：两两摸头法
 * 从小到大，最值浮至最后
 * @param arr
 */
function sort(arr) {
    for(let i=0;i<arr.length-1;i++){//n-1趟排序（array.length-2-0+1）
        for(let j=0;j<arr.length-i-1;j++){//j边界由代入i=0求的，从0比较到array.length-1(最后一个)
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            }
        }
    }
}
let arr=[1,3,5,2,4,6,9,8,7];
sort(arr);
console.log(arr)

/**
 * 选择排序:一指禅法
 * 从元素中指定最小值下标minIndex = i，每趟比较获取最小值并交换
 * @param arr
 */
function fn(arr) {
    let len = arr.length
    let minIndex;
    for(let i=0;i<len-1;i++){//指定最小值下标由0到n-1
        minIndex =i;
        for(let j =i+1;j<len;j++){//从j=i+1开始比较
            if(arr[j]<arr[minIndex]){
                minIndex = j
            }
        }
        [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]];
    }
}
let arr1 = [2,4,6,8,1,3,4,7];
fn(arr1);
console.log(arr1)


/**
 * 插入排序:扑克牌法
 * 从第一个元素开始，该元素可以认为已经被排序
 * @param arr
 */
function fn2(arr) {
    let len = arr.length;
    let preIndex,current;
    for (let i = 1; i < len; i++) {//
        preIndex = i - 1;
        current = arr[i];
        while(preIndex >= 0 && arr[preIndex] > current) {//依次挪动prev大于current的元素
            arr[preIndex+1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex+1] = current;//直到腾出最小的位置给current
    }
}
let arr2 = [60,40,20,80,10,30,40,70];
fn2(arr2);
console.log(arr2)

/**
 * 计数排序（强迫症收扑克牌法）
 * 将输入的数据值转化为键存储在额外开辟的数组空间中
 * 强迫症：输入的数据必须是有确定范围的整数
 * @param arr
 * @param maxValue
 * @returns {*}
 */
function fn3(arr, maxValue) {
    let bucket = new Array(maxValue+1),
        sortedIndex = 0;
        arrLen = arr.length,
        bucketLen = maxValue + 1;

    for (let i = 0; i < arrLen; i++) {
        if (!bucket[arr[i]]) {
            bucket[arr[i]] = 0;
        }
        bucket[arr[i]]++;
    }

    for (let j = 0; j < bucketLen; j++) {
        while(bucket[j] > 0) {
            arr[sortedIndex++] = j;
            bucket[j]--;
        }
    }

    return arr;
}
let arr3 = [13,13,5,6,5,0];
fn3(arr3,13);
console.log(arr3)

/**
 * 快速排序
 * @param arr
 * @param left
 * @param right
 * @returns {*}
 */
function quickSort(arr, left, right) {
    var len = arr.length,
        partitionIndex,
        left = typeof left != 'number' ? 0 : left,
        right = typeof right != 'number' ? len - 1 : right;

    if (left < right) {
        partitionIndex = partition(arr, left, right);
        quickSort(arr, left, partitionIndex-1);
        quickSort(arr, partitionIndex+1, right);
    }
    return arr;
}

function partition(arr, left ,right) {     //分区操作
    var pivot = left,                      //设定基准值（pivot）
        index = pivot + 1;
    for (var i = index; i <= right; i++) {
        if (arr[i] < arr[pivot]) {
            [arr[i],arr[index]] = [arr[index],arr[i]]
            index++;
        }
    }
    [arr[index-1],arr[pivot]]=[arr[pivot],arr[index-1]]
    return index-1;
}
let arr4 =[4,5,2,1,6,45,89,23,0,41];
quickSort(arr4)
console.log(arr4)
