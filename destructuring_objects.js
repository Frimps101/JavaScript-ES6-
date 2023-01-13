const info = {
    firstName: "Josephine",
    lastName: "Kwakye",
    city: "Accra",
    region: "Greater Accra Region",
    zipCode: 00233
};

const {firstName, lastName} = info;

// To rename the keys
const {firstName: fn, lastName: ln} = info;

console.log(`${fn} ${ln}`)