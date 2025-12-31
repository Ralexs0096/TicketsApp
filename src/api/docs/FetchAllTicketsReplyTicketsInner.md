# FetchAllTicketsReplyTicketsInner

## Properties

| Name        | Type                                                                                                     |
| ----------- | -------------------------------------------------------------------------------------------------------- |
| `id`        | number                                                                                                   |
| `cutNumber` | number                                                                                                   |
| `brand`     | string                                                                                                   |
| `style`     | string                                                                                                   |
| `createdAt` | Date                                                                                                     |
| `areas`     | [Array&lt;FetchAllTicketsReplyTicketsInnerAreasInner&gt;](FetchAllTicketsReplyTicketsInnerAreasInner.md) |

## Example

```typescript
import type { FetchAllTicketsReplyTicketsInner } from '';

// TODO: Update the object below with actual values
const example = {
  id: null,
  cutNumber: null,
  brand: null,
  style: null,
  createdAt: null,
  areas: null,
} satisfies FetchAllTicketsReplyTicketsInner;

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(
  exampleJSON
) as FetchAllTicketsReplyTicketsInner;
console.log(exampleParsed);
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
