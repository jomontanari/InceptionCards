function Card(fileRef, idx) {

    var file = fileRef;
    var index = idx;

    this.getView = function() {
        var view = Titanium.UI.createImageView({
            image:file,
            width:100,
            height:150
        });

        view.addEventListener('click', function(e) {

            var cardWindow = Titanium.UI.createWindow({
                backgroundImage:fileRef
            });

            cardWindow.open({transition:Ti.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT});

            cardWindow.addEventListener('click', function(e){
               cardWindow.close({transition:Ti.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT}); 
            });

        });

        if (calculateLeft()) {
            view.left = 3;
        }

        if (calculateRight()) {
            view.right = 3;
        }

        view.top = calculateTop();

        return view;
    }

    function calculateLeft() {
        var remainder = index % 3;
        Titanium.API.info(remainder);
        if (remainder == 1) {
            return true;
        } else {
            return false;
        }
    }

    function calculateRight() {
        var remainder = index % 3;
        Titanium.API.info(remainder);
        
        if (remainder == 0) {
            return true;
        } else {
            return false;
        }
    }

    function calculateTop() {
        var row = Math.floor((index-1)/3);
        return (row*156) + 3;
    }


}