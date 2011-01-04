function CardCreator(fileList) {

    var files = fileList;
    var defaultFolder = "cards/"


    function getImageFileList() {
        var imageFiles = [];
        for (var fileIndex in files) {
            if (isImageFile(files[fileIndex])) {
                imageFiles.push(files[fileIndex]);
            }

        }
        return imageFiles;
    }

    function isImageFile(fileName) {
        var fileExtension = fileName.substring(fileName.indexOf(".")).toLowerCase();
        if (fileExtension == ".jpg" ||
                fileExtension == ".gif" ||
                fileExtension == ".jpeg" ||
                fileExtension == ".png") {
            return true;
        }
        return false;
    }

    this.getCards = function() {
        var imageFiles = getImageFileList();
        var cards = [];
        var index = 1;
        for(fileIndex in imageFiles) {
            var fileRef = defaultFolder + imageFiles[fileIndex];
            var card = new Card(fileRef, index);
            cards.push(card);
            index++;
        }
        return cards;
    }
}