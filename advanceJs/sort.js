/**
 * 1.冒泡排序：两两摸头法
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
 * 2.选择排序:一指禅法Selection Sort
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
 * 3.插入排序:扑克牌法Insertion Sort
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
 * 4.计数排序（强迫症收扑克牌法）
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
 * 5.快速排序Quick Sort
 * 确定pivot,设置left:[] right:[]
 * @param arr
 * @returns {*}
 */
function quickSort(arr) {
    if(arr.length<1) return arr;
    let pivotIndex = Math.floor(arr.length/2)
    let pivot = arr.splice(pivotIndex,1)[0];//splice改变原数组,返回改变值组成的数组
    let left=[],right=[];
    for(let i=0;i<arr.length;i++){
        arr[i]<pivot?left.push(arr[i]):right.push(arr[i])
    }
    return quickSort(left).concat([pivot]).concat(right)
}

let arr4 =[4,5,2,1,6,45,89,23,0,41];
quickSort(arr4)
console.log(arr4)


/**
 * 6.归并排序Merge Sort
 * @param arr
 * @returns {*}
 */
function mergeSort(arr){//采用自上而下的递归方法
    if(arr.length<2)return arr
    let middle = Math.floor(arr.length/2),
        left = arr.slice(0,middle),
        right = arr.slice(middle);
    return merge(mergeSort(left),mergeSort(right))
}

function merge(left,right){
    let result = [];
    while (left.length > 0 && right.length > 0) {
        left[0]<right[0]?result.push(left.shift()):result.push(right.shift())
    }
    while (left.length) result.push(left.shift())
    while (right.length) result.push(right.shift())
    return result
}
let arr5 =[4,5,2,1,6,45,89,23,0,41];
mergeSort(arr5)
console.log(arr5)



/**
 * 堆排序Heap Sort
 * @param arr
 */
let len;    //因为声明的多个函数都需要数据长度，所以把len设置成为全局变量
function buildMaxHeap(arr) {   //建立大顶堆
    len = arr.length;
    for (let i = Math.floor(len/2); i >= 0; i--) {
        heapify(arr, i);
    }
}

function heapify(arr, i) {     //堆调整
    let left = 2 * i + 1,
        right = 2 * i + 2,
        largest = i;

    if (left < len && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < len && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest != i) {
        swap(arr, i, largest);
        heapify(arr, largest);
    }
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function heapSort(arr) {
    buildMaxHeap(arr);

    for (let i = arr.length-1; i > 0; i--) {
        swap(arr, 0, i);
        len--;
        heapify(arr, 0);
    }
    return arr;
}