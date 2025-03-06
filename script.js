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

var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
var hours = date.getHours();
var minutes = date.getMinutes();
var second = date.getSeconds();

console.log(`${day}/${month}/${year} - ${hours}:${minutes}:${second}`);

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

// js
function getRandNumbers(min, max, length) {
    let result = [];
    for (let i = 1; i < length; i++) {
        let ramdom = Math.floor(Math.random() * (max - min) + min);
        result.push(ramdom);
    }
    return result;
}
console.log(getRandNumbers(10, 50, 5));

console.log(Math.floor(Math.random() * 100));

function run(object) {
    let arr = [];
    for (let key in object) {
        arr.push(`Thuộc tính ${key} có giá trị ${object[key]}`);
    }
    return arr;
}

// Expected results:
console.log(run({ name: 'Nguyen Van A', age: 16 }));


















