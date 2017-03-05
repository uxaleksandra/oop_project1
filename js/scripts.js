function Telefon(marka, cena, kolor, waga) {
	this.marka = marka; 
	this.cena = cena;
	this.kolor = kolor;
	this.waga = waga;
}

Telefon.prototype.printInfo = function() {
		console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", a cena to " + this.cena + ", waga " + this.waga + ".");
}

var SamsungGalaxyS6 = new Telefon("Samsung", 3250, "biały", "500g");
var iPhone6S = new Telefon("Apple", 2250, "srebrny", "350g");
var OnePlusOne = new Telefon("OnePlus", 1250, "biały", "650g");


SamsungGalaxyS6.printInfo();
iPhone6S.printInfo();
OnePlusOne.printInfo();