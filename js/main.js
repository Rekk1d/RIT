const item = document.querySelectorAll('.table_item'),
      block = document.querySelector('.block'),
      max = document.querySelector('.max'),
      min = document.querySelector('.min');

function setLetter () {
    item.forEach(i => {
        i.addEventListener('click', () => {
            let value = i.innerHTML;
            block.append(value);
        });
    });
}
setLetter();

const obj={
    a0:{aa:[3,9], bb:2, cc:{aaa:4,bbb:-5}},
    a1:{aa:[0,8], bb:-7, cc:{aaa:8,bbb:7}},
    a2:{aa:[9,-4], bb:1, cc:{aaa:-1,bbb:8}},
    a3:{aa:[8,-1], bb:7, cc:{aaa:3,bbb:0}},
    a4:{aa:[-4,-2], bb:-2, cc:{aaa:8,bbb:9}}
};

function getNumFromStr(numStr) {
    let regexp = numStr.match(/-?\d+/g);
    return regexp;
}

let arr = [];

for(let i in obj) {
    arr = arr.concat(getNumFromStr(JSON.stringify(obj[i])));
}

function printMaxMin() {
    let maxNum = Math.max.apply(null, arr),
        minNum = Math.min.apply(null, arr);
    
    min.append(`Min value = ${minNum}`);
    max.append(`Max value = ${maxNum}`);
}
printMaxMin();