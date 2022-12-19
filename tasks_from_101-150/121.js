function Warrior(n) {
    let name = n;
    this.name = function (n) {
        if (n) name = n;
        return name;
    }
}

Warrior.prototype.toString = function () {
    return "Hi! my name's " + this.name();
}

let albert = new Warrior("Al")
let boris = new Warrior("Boris")

albert.toString()
