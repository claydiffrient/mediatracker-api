/**
 * Media routes
 */

exports.getMedia = function(req, res){
   require('mongodb').connect(mongourl, function(err, conn){
     conn.collection('locations', function(err, coll){
       coll.find(function(err, cursor) {
         cursor.toArray(function(err, items) {
            res.writeHead(200, {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*"
            });
            res.end(JSON.stringify(items));
         });
       });
     });
   });

  }

//Technically a post for media currently....
exports.getMedia = function(req, res){
   require('mongodb').connect(mongourl, function(err, conn){
     conn.collection('locations', function(err, coll){
       coll.insert( req.body, {safe:true}, function(err){
         res.writeHead(200, {
           "Content-Type": "application/json",
           "Access-Control-Allow-Origin": "*"
         });
         res.end(JSON.stringify(req.body));
       });
     });
   });