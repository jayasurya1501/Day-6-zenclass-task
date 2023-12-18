class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
        console.log(`Movie created - Title: ${title}, Studio: ${studio}, Rating: ${rating}`);
    }
    static getPG(movies) {
        const pgMovies = movies.filter(movie => movie.rating === "PG");
        console.log("PG Movies:", pgMovies.map(movie => movie.title));
        return pgMovies;
    }
}
const movie1 = new Movie("Casino Royale", "Eon Productions", "PG-13");


class Circle {
    constructor(radius) {
        this.radius = radius;
        console.log(`Circle created with radius: ${radius}`);
    }
    getRadius() {
        return this.radius;
    }
    setRadius(radius) {
        this.radius = radius;
        console.log(`Radius updated to: ${radius}`);
    }
    calculateArea() {
        const area = Math.PI * this.radius * this.radius;
        console.log(`Area calculated: ${area}`);
        return area;
    }
    calculateCircumference() {
        const circumference = 2 * Math.PI * this.radius;
        console.log(`Circumference calculated: ${circumference}`);
        return circumference;
    }
}
const initialRadius = 5;
const myCircle = new Circle(initialRadius);
console.log("Initial Radius:", myCircle.getRadius());
myCircle.calculateArea();
myCircle.calculateCircumference();
const updatedRadius = 7;
myCircle.setRadius(updatedRadius);
console.log("Updated Radius:", myCircle.getRadius());
myCircle.calculateArea();
myCircle.calculateCircumference();
