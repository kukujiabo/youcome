//{ "_id" : ObjectId("541ab397a7ed5f5cf4a57485"), "name" : "奥丁格系列", "imagePath" : "/images/product/Oettinger.jpg", "desc" : "", "content" : "", "active" : 1 }
//{ "_id" : ObjectId("541ab397a7ed5f5cf4a57486"), "name" : "梅塞尔系列", "imagePath" : "/images/product/Maisel.jpg", "desc" : "", "content" : "", "active" : 1 }
//{ "_id" : ObjectId("541ab397a7ed5f5cf4a57487"), "name" : "菲汀斯系列", "imagePath" : "/images/product/Feitingsi.jpg", "desc" : "", "content" : "", "active" : 1 }
//{ "_id" : ObjectId("541ab397a7ed5f5cf4a57488"), "name" : "麦汀格系列", "imagePath" : "/images/product/Maitingge.jpg", "desc" : "", "content" : "", "active" : 1 }
//{ "_id" : ObjectId("541ab397a7ed5f5cf4a57489"), "name" : "麦汀格黑麦汁", "imagePath" : "/images/product/MaitinggeHeimaizi.jpg", "desc" : "", "content" : "", "active" : 1 }
 //} } } } }
db.products.update(
{"_id": ObjectId('54434d1342dffe76d767cf83')},
{$set: {desc: '凯撒西蒙起源语1522年德国巴伐利亚州，纽伦堡市。巴伐利亚小麦啤酒香味独特，具有较高的蛋白质含量，和良好的泡持力。小麦黑啤酒有非常细腻且浑厚的白色泡沫层，酒液浑浊呈琥珀色，入口口味浑厚，沙口感适中；小麦白啤泡沫稠密细腻，高比例的小麦麦芽及蛋白质含量使其口感圆润，并具有浓烈的小麦香气。'}});
