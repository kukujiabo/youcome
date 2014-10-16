//{ "_id" : ObjectId("541ab397a7ed5f5cf4a57485"), "name" : "奥丁格系列", "imagePath" : "/images/product/Oettinger.jpg", "desc" : "", "content" : "", "active" : 1 }
//{ "_id" : ObjectId("541ab397a7ed5f5cf4a57486"), "name" : "梅塞尔系列", "imagePath" : "/images/product/Maisel.jpg", "desc" : "", "content" : "", "active" : 1 }
//{ "_id" : ObjectId("541ab397a7ed5f5cf4a57487"), "name" : "菲汀斯系列", "imagePath" : "/images/product/Feitingsi.jpg", "desc" : "", "content" : "", "active" : 1 }
//{ "_id" : ObjectId("541ab397a7ed5f5cf4a57488"), "name" : "麦汀格系列", "imagePath" : "/images/product/Maitingge.jpg", "desc" : "", "content" : "", "active" : 1 }
//{ "_id" : ObjectId("541ab397a7ed5f5cf4a57489"), "name" : "麦汀格黑麦汁", "imagePath" : "/images/product/MaitinggeHeimaizi.jpg", "desc" : "", "content" : "", "active" : 1 }
 //} } } } }
db.products.update({"_id": ObjectId('543e4c62efb39948d5ab2f73')},
    {$set: {desc: '什么是从棕啤酒？棕啤酒略微酸甜，酒精度含量5度左右，起源于比利时的佛兰德斯地区，又称为”佛兰德斯布朗“啤酒。它的特点是上层发酵，酒液呈棕红色。早起酿造需经过一年或更长时间的熟化后尚与尚未熟化的啤酒混合。（介于黑啤和白啤之间的类型）'}});
