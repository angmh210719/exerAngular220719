
function Person(name, age, password, gender, car, bike){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.car = car;
        this.bike = bike;
}


class PersonClass {
    constructor(name, age, password, gender, car, bike) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.car = car;
        this.bike = bike;
        this.toString = () => {
            return '${name} ,${age} ,${password},${gender},${car},${bike}';
        }
    }
}