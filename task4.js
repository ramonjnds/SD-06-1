// Type your code below this line!

function Journey(start,end) {
    this.start = start
    this.end = end
}

const from = process.argv[2]
const to = process.argv[3]

console.log("from", from)
console.log("to", to)

// Type your code above this line!

const travel = new Journey(from, to)

console.log("Booking a taxi from " + travel.start + " to " + travel.end + ".")
