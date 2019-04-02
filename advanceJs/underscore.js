var array = [
    {id: 1, value: '1', parent_id: null},
    {id: 2, value: '2', parent_id: null},
    {id: 3, value: '1-1', parent_id: 1},
    {id: 4, value: '1-2', parent_id: 1},
    {id: 5, value: '2-1', parent_id: 2},
    {id: 6, value: '2-2', parent_id: 2},
];

// var x = _.groupBy([1.3, 2.1, 2.4,3.0], function(num){ return Math.floor(num); });
// console.log(x);
function convert(array) {
    let listGroupByParentId = _.groupBy(array, 'parent_id'),
        result = listGroupByParentId['null'].map(root => {
            root.children = _.map(listGroupByParentId[root.id], child => {
                child.children = null
                delete child.parent_id
                return child
            })
            delete root.parent_id
            return root
        })
    return result
}
convert(array)
function convert(array) {
    let listGroupByParentId = _.groupBy(array,'parent_id'),
    result = listGroupByParentId['null'].map(root=>{
        root.children = _.map(listGroupByParentId[root.id],child=>{
            child.children =null
            delete  child.parent_id
            return child
        })
        delete root.parent_id
        return root
    })
    return result
}
