const request = require("request");
const cheerio = require("cheerio");
const mongoose = require("fs");

// const URL = "https://www.flipkart.com/search?q=mobiles";
const URL =
	"https://www.google.com/search?client=safari&rls=en&q=current+stock+price+of+apple&ie=UTF-8&oe=UTF-8";

request(URL, function (err, res, body) {
	if (err) {
		console.log(err, "error occurred while hitting URL");
	} else {
		console.log(body);
		let $ = cheerio.load(body);

		$(
			"#knowledge-finance-wholepage__entity-summary > div.aviV4d > g-card-section > div > g-card-section > div.wGt0Bc > div.PZPZlf > span:nth-child(1) > span > span.IsqQVc.NprOob.wT3VGc"
		).text();

		// $("._2kHMtA").each(function(index, elem){
		//     // console.log(elem)
		//     const data = $(this).find('._4rR01T').text();
		//     console.log(data)
		// })
	}
});
