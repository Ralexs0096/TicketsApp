# InternalError

An unknown error occurred while attempting to retrieve the data.

## Properties

| Name    | Type                                        |
| ------- | ------------------------------------------- |
| `error` | [InternalErrorError](InternalErrorError.md) |

## Example

```typescript
import type { InternalError } from '';

// TODO: Update the object below with actual values
const example = {
  error: null,
} satisfies InternalError;

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InternalError;
console.log(exampleParsed);
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
