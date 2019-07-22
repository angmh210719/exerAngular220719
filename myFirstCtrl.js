module.controller("myFirstCtrl", MyFirstCtrl)


// DI dependency injection - IOC
function MyFirstCtrl($scope) {
    //alert("hello from time controller")
    
    $scope.time = new Date();
    $scope.increaseTime = function() {
        $scope.time;
    }

    $scope.name="mhari";
    $scope.res="";
    $scope.reverseName = function() {  
        for(var i=$scope.name.length-1; i>=0;i--) {     
        $scope.res+=$scope.name.charAt(i);
        }
        $scope.name=$scope.res;
    }

    $scope.person = new PersonClass('','','','','','')

}

class PersonClass {
    constructor(name, age, password, gender, car, bike) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.car = car;
        this.bike = bike;        
    }
}