Titanium.include("js/directoryreader.js");
Titanium.include("js/card.js");
Titanium.include("js/cardcreator.js");

Titanium.UI.setBackgroundColor('#fff');

var mainWindow = Titanium.UI.createWindow({
    title:'Inception Cards',
    backgroundImage:"cards/1-Whats-an-Inception.png"
});

var images = new DirectoryReader("cards").getListOfFiles();
var cards = new CardCreator(images).getCards();


for (cardIndex in cards) {
    var card = cards[cardIndex];
    var view = card.getView();
    mainWindow.add(view);
}

mainWindow.open();