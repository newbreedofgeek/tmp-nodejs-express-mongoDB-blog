exports.new = function(req, res){
    res.render('blog_new.jade', {
        title: 'New Post'
    });
};

exports.newSave = function(req, res){
    articleProvider.save({
        title: req.param('title'),
        body: req.param('body')
    }, function( error, docs) {
        res.redirect('/');
    });
};

exports.getBlogPost = function(req, res){
    articleProvider.findById(req.params.id, function(error, article) {
        res.render('blog_show.jade', {
            title: article.title,
            article:article
        });
    });
};

exports.addComment = function(req, res){
    articleProvider.addCommentToArticle(req.param('_id'), {
        person: req.param('person'),
        comment: req.param('comment'),
        created_at: new Date()
    } , function( error, docs) {
        res.redirect('/blog/' + req.param('_id'))
    });
};

