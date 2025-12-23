
# TicketJson


## Properties

Name | Type
------------ | -------------
`id` | number
`cutNumber` | number
`brand` | string
`style` | string

## Example

```typescript
import type { TicketJson } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "cutNumber": null,
  "brand": null,
  "style": null,
} satisfies TicketJson

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TicketJson
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


