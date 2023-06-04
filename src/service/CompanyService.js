import { count } from "../util/number-functions.js";
import { getRandomInt } from "../util/random.js";
const minId = 100000;
const maxId = 1000000;
//TODO by using setTimeout update the CompanyService code that
//each public method returns Promise that after some timeout moves
//in the resolved state
export default class CompanyService {
    #employees;
   
    constructor() {
        this.#employees = {};
        

    }
    addEmployee(employee) {
        const id = this.#getId();
        this.#employees[id] = {...employee, id};
        return getPromise(this.#employees[id], 150);

    }
    #getId() {
        let id;
        do {
            id = getRandomInt(minId, maxId);
        }while(this.#employees[id]);
        return id;
    }
    getStatistics(field, interval) {
        let array = Object.values(this.#employees);
        const currentYear = new Date().getFullYear();
        
        if (field == 'birthYear') {
            array = array.map(e => ({'age': currentYear - e.birthYear}));
            field = 'age';
        }
        const statisticsObj = count(array, field, interval);
        return getPromise(Object.entries(statisticsObj).map(e => {
            const min = e[0] * interval;
            const max = min + interval - 1;
            return {min, max, count: e[1]};
        }), 1000)
    }
    getAllEmployees() {
        return getPromise(Object.values(this.#employees), 1000)
    }
    getEmployee(id) {
        return getPromise(this.#employees[id], 20);
    }
    removeEmployee(id) {

        delete this.#employees[id];
        return getPromise({}, 20);

    }
    updateEmployee(employee) {
        let res = {};
        const id = employee.id;
        if (this.#employees[id]) {
            this.#employees[id] = employee;
            res = this.#employees[id];
        }
        return getPromise(res, 50);
    }
}
function getPromise(state, timeout) {
    return new Promise(resolve => setTimeout(() => resolve(state), timeout))
}