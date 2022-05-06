function getNumberString(breakpoint: number, number: number, suffix: string) {
    if (number >= breakpoint) {
        let kNumber = number / breakpoint
        return `${kNumber.toFixed(1)}${suffix}`
    }
}

const numberList = [
    {
        breakpoint: 1000000000,
        suffix: "B",
    },
    {
        breakpoint: 1000000,
        suffix: "M",
    },
    {
        breakpoint: 1000,
        suffix: "k",
    },

]

export default function Number({number}: { number: number }) {
    let string;
    for (const {breakpoint, suffix} of numberList) {
        string = getNumberString(breakpoint, number, suffix);
    }
    string = string !== undefined ? string : number.toString();
    return <>{string}</>
}