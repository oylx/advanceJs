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
function insertionSort(arr) {
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
insertionSort(arr2);
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
 * 5.桶排序
 * 桶排序须知：
 * 桶排序是计数排序的升级版。它利用了函数的映射关系，高效与否的关键就在于这个映射函数的确定。为了使桶排序更加高效，我们需要做到这两点：
 * 在额外空间充足的情况下，尽量增大桶的数量
 * 使用的映射函数能够将输入的N个数据均匀的分配到K个桶中
 * 同时，对于桶中元素的排序，选择何种比较排序算法对于性能的影响至关重要。
 * 什么时候最快（Best Cases）：
 * 当输入的数据可以均匀的分配到每一个桶中
 * 什么时候最慢（Worst Cases）：
 * 当输入的数据被分配到了同一个桶中
 * @param arr
 * @param bucketSize
 * @returns {*}
 */
function bucketSort(arr, bucketSize) {
    if (arr.length === 0)  return arr;
    let i,
        minValue = maxValue =arr[0];
    for (i = 1; i < arr.length; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i];                //输入数据的最小值
        } else if (arr[i] > maxValue) {
            maxValue = arr[i];                //输入数据的最大值
        }
    }

    //桶的初始化
    let DEFAULT_BUCKET_SIZE = 5;            //设置桶的默认数量为5
    bucketSize = bucketSize || DEFAULT_BUCKET_SIZE;
    let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    let buckets = new Array(bucketCount);
    for (i = 0; i < buckets.length; i++) {
        buckets[i] = [];
    }

    //利用映射函数将数据分配到各个桶中
    for (i = 0; i < arr.length; i++) {
        buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i]);
    }

    arr.length = 0;
    for (i = 0; i < buckets.length; i++) {
                           //对每个桶进行排序，这里使用了插入排序
        for (let j = 0; j < buckets[i].length; j++) {
            arr.push(buckets[i][j]);
        }
    }

    return arr;
}

let arr6 = [13,13,5,6,5,0];
bucketSort(arr6,13);
console.log(arr6)


let counter = [];
/**
 * 6.基数排序
 * @param arr
 * @param maxDigit
 * @returns {*}
 */
function radixSort(arr, maxDigit) {
    let mod = 10;
    let dev = 1;
    for (let i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
        for(let j = 0; j < arr.length; j++) {
            let bucket = parseInt((arr[j] % mod) / dev);
            if(counter[bucket]==null) {
                counter[bucket] = [];
            }
            counter[bucket].push(arr[j]);
        }
        let pos = 0;
        for(let j = 0; j < counter.length; j++) {
            let value = null;
            if(counter[j]!=null) {
                while ((value = counter[j].shift()) != null) {
                    arr[pos++] = value;
                }
            }
        }
    }
    return arr;
}
/**
 * 7.快速排序Quick Sort
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
 * 8.归并排序Merge Sort
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
 * 9.堆排序Heap Sort
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