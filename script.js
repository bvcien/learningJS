function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function() {
        return `${firstName} ${lastName} - ${avatar}`
    }
}

var author = new User('Chiến', 'Bùi', 'Avatar');
var user = new User('Kim', 'Oanh', 'Avatar')

author.title = 'Heloo ae';
user.cmt = 'Xin chao mn';

console.log(author.getName());
console.log(user.getName());

//in ra thoi gian hien tai
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
var hours = date.getHours();
var minutes = date.getMinutes();
var second = date.getSeconds();

console.log(`${day}/${month}/${year} - ${hours}:${minutes}:${second}`);

//in ra ten ngau nhien
let item = [
    "Chiến",
    'Oanh',
    'Hương',
    'Thơm',
    'Đô'
];

for (let i=0; i<item.length; i++) {
    console.log(item[i]);
}

function getRandomItem(list) {
    return list[Math.floor(Math.random() * list.length)];
}
console.log(getRandomItem(item)); 

// in ra length so ngau nhien trong khoang min max
function getRandNumbers(min, max, length) {
    let result = [];
    for (let i = 1; i <= length; i++) {
        let ramdom = Math.floor(Math.random() * (max - min) + min);
        result.push(ramdom);
    }
    return result;
}
console.log(getRandNumbers(10, 50, 5));

//in ra so ngau nhien trong khoang 100 va lam tron
console.log(Math.floor(Math.random() * 100));

function run(object) {
    let arr = [];
    for (let key in object) {
        arr.push(`Thuộc tính ${key} có giá trị ${object[key]}`);
    }
    return arr;
}

console.log(run({ name: 'Nguyen Van A', age: 16 }));

//loai bo gia tri trung nhau
function removeDuplicates(array) {
    return [...new Set(array)];
}

const arr = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(arr)); // [1, 2, 3, 4, 5]

//tinh luy thua, giaithua khong de quy
function luythua(x, n) {
    let kq=1;
    for(let i=0; i<n; i++) {
        kq *=x;
    }
    return kq;
}

console.log(luythua(3, 4))

function giaithua(num) {
    // if (num<0) return "Không có giai thừa cho số âm"
    let kq = 1;
    for(let i=num; i>0; i--) {
        kq *=i;
    }
    return kq;
}

console.log(giaithua(3))

//giaithua dung dequy
function giaithua(num) {
    if(num > 0) {
        return num * giaithua(num -1);
    }
    return 1;
}
console.log(giaithua(3))


// array filter()
let list = [
    {
        id: 1,
        name: 'chien',
        coin: 199
    },
    {
        id: 2,
        name: 'van',
        coin: 100
    },
    {
        id: 3,
        name: 'bui',
        coin: 100
    }
];

function timkiem(list) {
    return list.filter(list => list.coin > 0)
}

console.log(timkiem(list))

//array map()
let khoahoc = [
    {
        id: 1,
        name: 'HTML, CSS',
        price: 100
    },
    {
        id: 2,
        name: 'Javascript',
        price: 100
    },
    {
        id: 3,
        name: 'Node JS',
        price: 100
    }
];

function khoahocHandle(khoahoc) {
    // return {
    //     id: `Bai so: ${khoahoc.id}`,
    //     name: `Ky nang: ${khoahoc.name}`,
    //     price: `Gia: ${khoahoc.price}`
    // }
    return khoahoc.name;
}

let newKhoaHoc = khoahoc.map(khoahocHandle);

console.log(newKhoaHoc);


//callback Filter()

Array.prototype.filter2 = function(callback) {
    let output = [];
    for( let index in this) {
        if(this.hasOwnProperty(index)) {
            let result = callback(this[index], index, this);
            if (result) {
                output.push(this[index]);
            }
        }
    }
    return output;
}

// Array.prototype.filter2 = function (callback) {
//     let output = [];
//     for (let index in this) {
//         if (this.hasOwnProperty(index) && callback(this[index], index, this)) {
//                 output.push(this[index]);
//         }
//     }
//     return output;
// }

let quanaos = [
    {
        name: 'Áo phông nam',
        price: 190
    },
    {
        name: 'Quần bò',
        price: 20
    },
    {
        name: 'Quần lót',
        price: 3
    }
];

let filterQuanaos = quanaos.filter2(function(quanao, index, array) {
    return quanao.price > 20
})

console.log(filterQuanaos)





