function Cats(name, age, param) {
    this.myName = name;
    this.myAge = age;
    this.hunger = 100;
    this.hp = 100;

    this.selector = document.getElementById(param);
    this.cat = this.selector.querySelector('#cat');
    this.buttonFeed = this.selector.querySelector('#buttonFeed');
    this.buttonSay = this.selector.querySelector('#buttonSay');
    this.display = this.selector.querySelector('#display');

    this.startStrave = setInterval(this.starve.bind(this), 500)

    this.buttonSay.addEventListener('click', this.say.bind(this));
    this.buttonFeed.addEventListener('click', this.feedTheCat.bind(this));


    this.cat.innerHTML = `
    Имя: ${this.myName}<br>
    Возраст: ${this.myAge}<br>
    Голод: ${this.hunger}<br>
    Здоровье: ${this.hp}

`;

}

Cats.prototype.say = function () {

    this.display.innerHTML = `Привет, меня зовут ${this.myName}`;

}

Cats.prototype.starve = function () {

    this.hunger--;

    this.cat.innerHTML = `
    Имя: ${this.myName}<br>
    Возраст: ${this.myAge}<br>
    Голод: ${this.hunger}<br>
    Здоровье: ${this.hp}
    
`;
    if (this.hunger == 90) {
        this.display.innerHTML = `${this.myName}: не забудь меня покормить`;
    } else if (this.hunger == 80) {
        this.display.innerHTML = `${this.myName}: что бы меня покормить нажми на кнопку "Покормить"`;
    } else if (this.hunger == 50) {
        this.display.innerHTML = `${this.myName}: я уже немного голоден`;
    } else if (this.hunger == 0) {
        this.display.innerHTML = `${this.myName}: эй пора кушать!`;
        clearTimeout(this.startStrave);
        this.startHp = setInterval(this.takeAwayHp.bind(this), 500);
    }
}

Cats.prototype.takeAwayHp = function () {

    this.hp--

    this.cat.innerHTML = `
    Имя: ${this.myName}<br>
    Возраст: ${this.myAge}<br>
    Голод: ${this.hunger}<br>
    Здоровье: ${this.hp}

`;

    if (this.hp == 0) {

        clearTimeout(this.startHp);
    }
}

Cats.prototype.feedTheCat = function () {

    this.hunger += 5;
}