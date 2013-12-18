exports.index = function(req, res){
    articleProvider.findAll( function(error,docs){
        res.render('index.jade', {
            title: 'a simple blog',
            articles:docs
        });
    });
};