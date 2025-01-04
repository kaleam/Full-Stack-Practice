function get(objectParam, pathParam, defaultValue) {
    // TODO: Convert path to an array if it's a string
    // TODO: Initialize index, length, and reference to the object
    // TODO: Traverse the object step-by-step
    // TODO: Determine the final value and return
    let pathSplit = pathParam.split(".");
    let i = 0;
    while (i < pathSplit.length) {
        if (!objectParam || !objectParam[pathSplit[i]]) {
            return defaultValue;
        }
        objectParam = objectParam[pathSplit[i]];
        i++;
    }
    return objectParam;
}

const carol = {
    details: {
        personal: { firstName: "Carol", lastName: "Smith" },
        age: 25,
        city: "New York",
    },
};

const dave = {
    details: {
        age: 30,
        city: "San Francisco",
    },
};

console.log(get(carol, "details.personal.firstName")); // 'Carol'
console.log(get(carol, "details.city")); // 'New York'
console.log(get(dave, "details.personal.firstName")); // undefined
console.log(get({ a: [{ b: { c: 42 } }] }, "a.0.b.c")); // 42