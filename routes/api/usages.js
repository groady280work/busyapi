module.exports = function(app, mongoose){

    var UsageSchema = new mongoose.Schema({
        usageId: String
    });

    var UsageModel = mongoose.model('Usage', UsageSchema);

    app.post('/api/usages', function(req, res){

        var usage = new UsageModel({
            usageId: request.usageId
        });
        // Store the supplied usage data
        usage.save( function (err) {
            if(!err) {
                //Success
                return res.send(usage);
            } else {
                //Fail
                return res.send('ERROR');
            }
        })

        var usageId = app.usages.length;
        // console.log('Stored usage count: ' + usageId); we should switch this to debugger in a production setting and not log

        res.status(201).json({'id':usageId});
    });
}
