var marks = [30, 40, 20, 45];
console.log(marks);

var sum = marks[0] + marks[1] + marks[2] + marks[3];
console.log(sum);

var avg = sum/marks.length;
console.log(avg);

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}