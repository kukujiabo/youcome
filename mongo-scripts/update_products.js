//{ "_id" : ObjectId("541ab397a7ed5f5cf4a57485"), "name" : "奥丁格系列", "imagePath" : "/images/product/Oettinger.jpg", "desc" : "", "content" : "", "active" : 1 }
//{ "_id" : ObjectId("541ab397a7ed5f5cf4a57486"), "name" : "梅塞尔系列", "imagePath" : "/images/product/Maisel.jpg", "desc" : "", "content" : "", "active" : 1 }
//{ "_id" : ObjectId("541ab397a7ed5f5cf4a57487"), "name" : "菲汀斯系列", "imagePath" : "/images/product/Feitingsi.jpg", "desc" : "", "content" : "", "active" : 1 }
//{ "_id" : ObjectId("541ab397a7ed5f5cf4a57488"), "name" : "麦汀格系列", "imagePath" : "/images/product/Maitingge.jpg", "desc" : "", "content" : "", "active" : 1 }
//{ "_id" : ObjectId("541ab397a7ed5f5cf4a57489"), "name" : "麦汀格黑麦汁", "imagePath" : "/images/product/MaitinggeHeimaizi.jpg", "desc" : "", "content" : "", "active" : 1 }
 //} } } } }
db.products.update({"_id": '541ab397a7ed5f5cf4a57485'}, {$set: {hot: 0, ord: 10, type: 1}});
db.products.update({"_id": '541ab397a7ed5f5cf4a57486'}, {$set: {hot: 0, ord: 20, type: 1}});
db.products.update({"_id": '541ab397a7ed5f5cf4a57487'}, {$set: {hot: 0, ord: 30, type: 1}});
db.products.update({"_id": '541ab397a7ed5f5cf4a57488'}, {$set: {hot: 0, ord: 40, type: 1}});
db.products.update({"_id": '541ab397a7ed5f5cf4a57489'}, {$set: {hot: 0, ord: 50, type: 1}});
