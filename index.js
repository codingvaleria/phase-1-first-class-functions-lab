// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);

}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
    return function (fare) {
        return integer * fare;
    }
}

function multipyBy(x) {
    return function (y) {
        return x * y;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, fn) {

    return fn(drivers);

}

