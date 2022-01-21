import * as fs from 'fs';
import { ParsedDocument, Parser } from 'psl-parser';

export function parseFile(sourcePath: string): Promise<ParsedDocument> {
	return new Promise((resolve, reject) => {
		fs.readFile(sourcePath, (err, data) => {
			if (err) {
				reject(err);
			}
			else {
				const parser = new Parser();
				resolve(parser.parseDocument(data.toString()));
			}
		});
	});
}

export function parseText(sourceText: string): ParsedDocument {
	const parser = new Parser();
	return parser.parseDocument(sourceText);
}
