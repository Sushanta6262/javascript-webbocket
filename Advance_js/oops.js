/*
    oops concept -->
    There are certain features or mechanish which make the language object oriented.
    1.Object-->
        As object is a unique entity that contain properties and methods,
        The objects can be created in two ways in javascript
        1.object loteral -->
            let person = {
                first_Name:"Sushant",
                last_Name:"Ojha",
                getFunction:function(){
                    return  (`The name of the person is ${person.first_Name}${person.last_Name}`)
                },
                phone_Number: {
                    mobile : '872368128',
                    lant_line : '12713746'
                }
            }
            console.log(person.getFunction());
            console.log(person.phone_Number);

        2.object constructor
            function person(first_Name,last_Name){
                this.first_Name=first_Name;
                this.last_Name=last_Name;
            }

            let person1 = new person('Sushant','Ojha');
            let person2 = new person('Rahul','Sharma');
            console.log(person1.first_Name);
            console.log(`${person2.first_Name} ${person2.last_Name}`);

    2.Class-->
            class is blueprint of object. A class have many objects because the class is 
            template while objects are instance of the class or the concrete implementation.

            class vehicle{
                constructor(name,maker,engine){
                    this.name=name;
                    this.maker=maker;
                    this.engine=engine;
                }
                getDetails(){
                    return (`The name of the bike is ${this.name}`);
                }
            }
            let bike1 = new vehicle('hayabhusa','suzuki','1340cc');
            let bike2 = new vehicle('Ninja','H2r','1000cc');

            console.log(bike1.name);
            console.log(bike2.engine);
            console.log(bike1.getDetails());

    3.Inheritance -->

    Inheritance is a property in which in in herit the property of parent class
    to child class through extend keyword.

    class person {
        constructor(name){
            this.name = name;
        }
        toString(){//method to return string
             return (`Name of person: ${this.name}`)
        }
    }
    class student extends person {
        constructor(name,id){
            super(name);
            this.id = id;
        }
        toString(){//method to return the string
            return (`${super.toString()},student ID : ${this.id}`);
        }
    }
    let student1 = new student ('Sushant',22);// creating objects and give value.
    console.log(student1.toString());


    4.Encapsulation-->

        The process of wrapping properties and function within a single unit in know as encapsulation.
    5.Polimorphism
    6.Abstraction
*/
class person{
    constructor(name,id){
        this.name = name;
        this.id = id;
    }
    add_Adress(add){
        this.add =add;
    }
    getDetails(){
        console.log(`name is ${this.name},address is : ${this.add}`);
    }
}
let person1 = new person (`sushant`,21);
person1.add_Adress('BBSR');
person1.getDetails();