module.exports.generateTestData = function() {
    var data = [];

    for (var i=0; i<24; i++)
    {
        var sampleTile = {
            picture: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190430-cheesy-bacon-ranch-chicken-226-1556829090.jpg",
            title: Math.random().toString(36).substring(2, 15)
        }
        data.push(sampleTile);
    }
    return data;
}