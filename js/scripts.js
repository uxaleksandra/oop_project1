function Phone(brand, price, colour, weight) {
	this.brand = brand; 
	this.price = price;
	this.colour = colour;
	this.weight = weight;
}

Phone.prototype.printInfo = function() {
		console.log("Marka telefonu to " + this.brand + ", kolor to " + this.colour + ", a cena to " + this.price + ", waga " + this.weight + ".");
}

var SamsungGalaxyS6 = new Phone("Samsung", 3250, "biały", "500g");
var iPhone6S = new Phone("Apple", 2250, "srebrny", "350g");
var OnePlusOne = new Phone("OnePlus", 1250, "biały", "650g");


SamsungGalaxyS6.printInfo();
iPhone6S.printInfo();
OnePlusOne.printInfo();