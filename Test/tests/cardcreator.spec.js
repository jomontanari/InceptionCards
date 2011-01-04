describe('CardCreator', function() {

   it('should create cards only for files that are jpg, jpeg, png or gif', function() {

       var filelist = [];
       filelist.push(".DSStore");
       filelist.push("1.png");
       filelist.push("2.jpg");
       filelist.push("3.pdf");
       filelist.push("4.jpeg");
       filelist.push("5.gif");

       var cardCreator = new CardCreator(filelist);

       var cards = cardCreator.getCards();

       cards.length.should.be(4);

   });

});