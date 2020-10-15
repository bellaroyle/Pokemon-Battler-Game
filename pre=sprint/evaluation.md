# Object creation patterns

## Post lecture evaluation

---

&nbsp;

### Task 1

```js
function addToStorage(item) {
  this.storage.push(item);
}

function createStack() {
  const stack = {};

  stack.storage = {};
  stack.quantity = 0;
  stack.addToStorage = addToStorage;

  return stack;
}

const testStack = createStack();
testStack.addToStorage('piano');
```

a) Work out what happens when `testStack.addToStorage` is invoked in order to add the "piano" to storage

Will throw an error because push function isn't defined

---

&nbsp;

### Task 2

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const firstPerson = Person('Alice', 500);
const secondPerson = new Person('Alice', 500);
```

a) What value does `firstPerson` store ?</br>
 undefined because we are not using the new key word 

b) What value does `secondPerson` store ?</br>
{name:'Alice', age: 500}

c) What does `this` point to when `Person` is invoked with the `new` keyword.

the object created by the constructor 

---

&nbsp;

### Task 3

```js
function Account(name) {
  this.name = name;
  this.basket = [];
}

Account.prototype.addToBasket = function (item) {
  this.basket.push(item);
};

const testAccount = new Account('Jane');
```

For each of the following expressions below, identify whether they will evaluate to **true** or **false**.</br>
You must also try and provide justifications for your answers - feel free to lookup methods and operators online to help you work out your answers.

a) `testAccount.hasOwnProperty('Jane');`false</br> 
b) `testAccount.hasOwnProperty('name');`true</br>
c) `'name' in testAccount` true</br>
d) `testAccount.hasOwnProperty('addToBasket')` false </br>
e) `'addToBasket' in testAccount` true</br>
f) `testAccount.addToBasket === Account.prototype.addToBasket` true </br>
g) `Object.getPrototypeOf(testAccount) === Account` false</br>
h) `Object.getPrototypeOf(testAccount) === Account.prototype` true

Once you've had a go at answer these you can run the code with `node` to see if you were right.

&nbsp;

### Task 3

Write a **test case (or test cases) only** below to assert that an `Animal` constructor returns an object with a name and species defined when the constructor is invoked. See below:

```js
const sammy = new Animal('Samuel', 'snake');

// sammy should be an object with the following form:
// {
//   name: 'Samuel',
//   species: 'snake;
//  }

describe('sammy', () => {
    test('has property name', () => {
        expect(sammy).toHaveProperty('name')
    })
    test('snake is called Samuel', () => {
        expect(sammy.name).toBe('Samuel')
    })
    test('has property species', () => {
        expect(sammy).toHaveProperty('species')
    })
    test('sammy is a snake ', () => {
        expect(sammy.species).toBe('snake')
    })
})
```
