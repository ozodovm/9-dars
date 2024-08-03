// 1 - misol
// const staff = [
//     {
//     id: 0,
//     name: "Ali",
//     age: 27,
//     salary: 2300
//     },
//     {
//     id: 1,
//     name: "Vali",
//     age: 20,
//     salary: 950
//     },
//     {
//     id: 2,
//     name: "Mike",
//     age: 33,
//     salary: 3100
//     },
// ];
// const getSalariesSumAndArray = (staff) => {
//     const salaries = staff.map(employee => employee.salary);
//     const totalSalary = salaries.reduce((sum, salary) => sum + salary, 0);
//     return { totalSalary, salaries };
// };
// const res = getSalariesSumAndArray(staff);
// console.log(res); 

// 2 - misol
// const staff = [
//     {
//     id: 0,
//     name: "Ali",
//     age: 27,
//     salary: 2300
//     },
//     {
//     id: 1,
//     name: "Vali",
//     age: 20,
//     salary: 950
//     },
//     {
//     id: 2,
//     name: "Mike",
//     age: 33,
//     salary: 3100
//     },
// ];
// const getMaxSalaryEmployee = (staff) => {
//     return staff.reduce((prev, current) => (prev.salary > current.salary ? prev : current));
// };
// const maxSalaryEmployee = getMaxSalaryEmployee(staff);
// console.log(maxSalaryEmployee.name); 

// 3 - misol
// const staff = [
//     {
//     id: 0,
//     name: "Ali",
//     age: 27,
//     salary: 2300
//     },
//     {
//     id: 1,
//     name: "Vali",
//     age: 20,
//     salary: 950
//     },
//     {
//     id: 2,
//     name: "Mike",
//     age: 33,
//     salary: 3100
//     },
// ];
// const myFunc = (staff) => {
//     return staff.sort((a, b) => a.salary - b.salary);
// };
// const sortedArr = myFunc([...staff]);
// console.log(sortedArr);

// 4 - misol
// const arr = [43, 12, 76, 23, 97, 28, 11];
// arr1.sort((a, b) => a - b);
// console.log(arr); 

// 5 - misol
// const minVal = Math.min(...arr1);
// console.log(minVal); 

// 6 - misol
// sal qiyinroq ekan. ishlay olmadm 

// 7 - misol
// const staff = [
//     {
//     id: 0,
//     name: "Ali",
//     age: 27,
//     salary: 2300
//     },
//     {
//     id: 1,
//     name: "Vali",
//     age: 20,
//     salary: 950
//     },
//     {
//     id: 2,
//     name: "Mike",
//     age: 33,
//     salary: 3100
//     },
// ];
// const findEmployeeById = (staff, id) => {
//     const index = staff.findIndex(employee => employee.id === id);
//     return index !== -1 ? { index, employee: staff[index] } : null;
// };
// const employeeData = findEmployeeById(staff, 1);
// console.log(employeeData); 
