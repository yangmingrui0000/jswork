function bubbleSort(str) {
    let arr = str.split(',')
    let sortLog = []
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - 1; j++) {
            sortLog.push([arr.concat(),[j, j + 1]])
            sortLog.push([arr.concat(),[j, j + 1]])
            sortLog.push([arr.concat(),[j, j + 1]])
            if (arr[j] > arr[j + 1]) {
                [arr[j],arr[j + 1]] = [arr[j + 1],arr[j]]
                sortLog.push([arr.concat(),[j, j + 1]])
            }
        }
    }
    sortLog.push([arr.concat(),[-1, -1]])
    return arr
}
function showLog(logValues, showElement) {
    let str = ''
    let {
        done,
        value: [row, pos]
    } = logValues.next()
    for (const key in row) {
        let color = pos.indeOf(Number(key)) > -1 ? 'color:red;' : ''
        str += '<span style="font-size:' + row[key] * 20 + 'px;' +
                color + '">' + row[key] + '</span>'
}

function insertSort(str) {
}