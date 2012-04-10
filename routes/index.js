
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'mktwo:node.js' })
};

exports.hello = function(req, res){
  res.render('hello', { title: 'Hey' })
};

exports.twitter = function(req, res){
  res.render('twitter', { title: 'Twitter feed' })
};

exports.dos = function(req, res){
  res.render('dos', { layout: false, title: 'JS-DOS' })
};

exports.dosinstall = function(req, res){
  res.render('dos-install', { layout: false, title: 'JS-DOS' })
};

exports.dosdone = function(req, res){
  res.render('dos-done', { layout: false, title: 'JS-DOS' })
};