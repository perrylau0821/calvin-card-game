import csvToJson from "convert-csv-to-json";
import fs from "fs";

const csvInput = "./data/魔塔之都 - 工作表1.csv";
const json = csvToJson.fieldDelimiter(",").getJsonFromCsv(csvInput);

const jsonOutput = json.map((card) => {
	let newCard = {};
	Object.keys(card).map((key) => {
		const ele = card[key] !== "-" ? card[key] : "";
		newCard = { ...newCard, [key]: ele };
	});
	return newCard;
});

// for (let i = 0; i < 3; i++) {
// 	console.log(cleanJson[i]);
// }

const content = JSON.stringify(jsonOutput);
const outputPath = "./data/cleanJson/cleanData.json";
fs.writeFile(outputPath, content, (err) => {
	if (err) {
		console.error(err);
	}
	console.log(`file written to ${outputPath}`);
});
