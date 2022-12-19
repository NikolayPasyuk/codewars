function Dog(breed) {
    this.breed = breed;

    this.bark = () => {
        return "Woof";
    };
}

const snoopy = new Dog("Beagle");

const scoobydoo = new Dog("Great Dane");
