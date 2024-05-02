// Type Annotations Challenge

let firsName: string = 'Kris';
firsName = firsName.toUpperCase();
console.log(firsName);
//firsName = 20 // Error: Type 'number' is not assignable to type 'string'

let number: number = 10;
number = number * number;
console.log(number);
//number = '10' // Error: Type 'string' is not assignable to type 'number'

let isMale: boolean = false;
isMale = true;
console.log(isMale);
//isMale = 'true'; // Error: Type 'string' is not assignable to type 'boolean'

// Union Type Challenge

let orderStatus: 'processing' | 'shipped' | 'delivered' = 'processing';
orderStatus = 'shipped';
orderStatus = 'delivered';

let discount: number | string = 20;
discount = '20%';

// Arrays Challenge

let temperatures: number[] = [20, 22, 25];
//temperatures.push('27'); // Error: Argument of type 'string' is not assignable to parameter of type 'number'

let colors: string[] = ['Purple', 'Red', 'Green', 'Yellow'];
//colors.push(true); // Error: Argument of type 'boolean' is not assignable to parameter of type 'string'

let mixedArray: (number | string)[] = [1, 'two', 3, 'four'];
//mixedArray.push(false); // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'

// Object - Fundamentals Challenge

let bike: { brand: string; year: number } = { brand: 'Yamaha', year: 2010 };
//bike.year = '2012'; // Error: Type 'string' is not assignable to type 'number'

//let laptop: {brand: string, year: number} = {brand: 'Lenovo'};
// Error: Property 'year' is missing in type '{brand: string;}' but required in type '{brand: string; year: number}'

const product1 = { title: 'Apple', price: 0.25 };
const product2 = { title: 'Milk' };
let products: { title: string; price?: number }[] = [product1, product2];
//products.push({title: 'Lemon', price: '0.5'}) // Error: Type 'string' is not assignable to type 'number'

// Functions - Fundamentals Challenge

let names: string[] = ['Kris', 'Susan', 'Bob'];

function isNameInArray(name: string): boolean {
  return names.includes(name);
}

console.log(isNameInArray('Kris'));
console.log(isNameInArray('Linda'));

function processInput(input: number | string) {
  if (typeof input === 'number') {
    console.log(input * 2);
  } else {
    console.log(input.toUpperCase());
  }
}

processInput(2);
processInput('Kris');

// Challenge

function processData(
  input: string | number,
  config: { reverse: boolean } = { reverse: false }
): string | number {
  if (typeof input === 'number') {
    return input * input;
  } else {
    return config.reverse
      ? input.toUpperCase().split('').reverse().join('')
      : input.toUpperCase();
  }
}

console.log(processData(2));
console.log(processData('Bob'));
console.log(processData('Kris', { reverse: true }));

// Type Alias Challenge

type Employee = {
  id: number;
  name: string;
  department: string;
};

type Manager = {
  id: number;
  name: string;
  employees: Employee[];
};

type Staff = Employee | Manager;

function printStaffDetails(staff: Staff): void {
  if ('employees' in staff) {
    console.log(
      `${staff.name} is a Manager of ${staff.employees.length} employees`
    );
  } else {
    console.log(
      `${staff.name} is an employee and belongs to ${staff.department} department`
    );
  }
}

const alice: Employee = {
  id: 1,
  name: 'Alice',
  department: 'Accountancy',
};

const steve: Employee = {
  id: 2,
  name: 'Steve',
  department: 'Accountancy',
};

const bob: Manager = {
  id: 3,
  name: 'Bob',
  employees: [alice, steve],
};

printStaffDetails(alice);
printStaffDetails(bob);

// Interface Method Challenge

interface Computer {
  readonly id: number;
  brand: string;
  ram: number;
  storage?: number;
  upgradeRam: (increase: number) => number;
}

const computer: Computer = {
  id: 1,
  brand: 'Lenovo',
  ram: 16,
  upgradeRam(amount: number) {
    this.ram += amount;
    return this.ram;
  },
};

computer.upgradeRam(16);
console.log(`Computers ram is upgraded to ${computer.ram}`);

// Interface Method 2nd Challenge

interface Person {
  name: string;
}

interface DogOwner extends Person {
  dogName: string;
}

interface IManager extends Person {
  managePeople(): void;
  delegateTasks(): void;
}

const employee: Person | DogOwner | IManager = getEmployee();

function getEmployee(): Person | DogOwner | IManager {
  const random = Math.random();

  if (random < 0.33) {
    return {
      name: 'John',
    };
  } else if (random < 0.66) {
    return {
      name: 'Bob',
      dogName: 'Rex',
    };
  } else {
    return {
      name: 'Jane',
      managePeople: () => console.log('Managing people...'),
      delegateTasks: () => console.log('Deleting tasks...'),
    };
  }
}

function isManager(obj: Person | DogOwner | IManager): obj is IManager {
  return 'managePeople' in obj;
}

if (isManager(employee)) {
  employee.delegateTasks();
}

//console.log(employee);
console.log(isManager(employee));
