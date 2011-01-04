function DirectoryReader(directoryName) {
    var name = directoryName;

    this.getListOfFiles = function() {
        var dir = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory + "/" + directoryName);
        return dir.getDirectoryListing();
    };
}