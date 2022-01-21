# psl-parser

TypeScript implementation of a PSL parser.

## Usage

```typescript
import { parseText } from 'psl-parser';

const parsedPsl = parseText(/* PSL source text */);

parsedPsl.methods.forEach(method => {
	console.log(method.id.value);
})
```
