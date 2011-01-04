describe("Card", function() {

    Titanium = new TitaniumStub();

    it('should create a view that is the correct size', function() {

        var card = new Card("thefile.png");
        var view = card.getView();

        view.width.should.be(100);
        view.height.should.be(150);

    });

    it('should assign the correct image to the view', function() {

        var card = new Card("thefile.png");
        var view = card.getView();

        view.image.should.be("thefile.png");
    });

    it('should calculate its position based on its index', function() {

        var card = new Card("thefile.png", 1);
        var view = card.getView();

        view.top.should.be(3);
        view.left.should.be(3);
        view.right.should.be(undefined);

        var card = new Card("thefile.png", 2);
        var view = card.getView();

        view.top.should.be(3);
        view.left.should.be(undefined);
        view.right.should.be(undefined);

        var card = new Card("thefile.png", 3);
        var view = card.getView();

        view.top.should.be(3);
        view.right.should.be(3);
        view.left.should.be(undefined);

        var card = new Card("thefile.png", 4);
        var view = card.getView();

        view.top.should.be(159);
        view.left.should.be(3);
        view.right.should.be(undefined);

        var card = new Card("thefile.png", 10);
        var view = card.getView();

        view.top.should.be(471);
        view.left.should.be(3);
        view.right.should.be(undefined);

    });

    it('should assign an event listener to the view', function() {

        var card = new Card("thefile.png");
        var view = card.getView();

        Titanium.UI.should.receive("createWindow");

        view.click();
    });

})