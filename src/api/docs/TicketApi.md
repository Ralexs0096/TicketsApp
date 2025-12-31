# TicketApi

All URIs are relative to _http://localhost:8080_

| Method                                              | HTTP request     | Description                |
| --------------------------------------------------- | ---------------- | -------------------------- |
| [**fetchAllTickets**](TicketApi.md#fetchalltickets) | **GET** /tickets | Fetch All existing tickets |

## fetchAllTickets

> FetchAllTicketsReply fetchAllTickets(ticketNumber, limit, date)

Fetch All existing tickets

### Example

```ts
import { Configuration, TicketApi } from '';
import type { FetchAllTicketsRequest } from '';

async function example() {
  console.log('🚀 Testing  SDK...');
  const api = new TicketApi();

  const body = {
    // string | Filter tickets by ticket number (optional)
    ticketNumber: ticketNumber_example,
    // number | Maximum number of tickets to return. (optional)
    limit: 8.14,
    // Date | Filter tickets by date (YYYY-MM-DD)  (optional)
    date: 2013 - 10 - 20,
  } satisfies FetchAllTicketsRequest;

  try {
    const data = await api.fetchAllTickets(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

| Name             | Type     | Description                          | Notes                                |
| ---------------- | -------- | ------------------------------------ | ------------------------------------ |
| **ticketNumber** | `string` | Filter tickets by ticket number      | [Optional] [Defaults to `undefined`] |
| **limit**        | `number` | Maximum number of tickets to return. | [Optional] [Defaults to `25`]        |
| **date**         | `Date`   | Filter tickets by date (YYYY-MM-DD)  | [Optional] [Defaults to `undefined`] |

### Return type

[**FetchAllTicketsReply**](FetchAllTicketsReply.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

### HTTP response details

| Status code | Description                                                      | Response headers |
| ----------- | ---------------------------------------------------------------- | ---------------- |
| **200**     | Default Response                                                 | -                |
| **404**     | Invalid or missing data.                                         | -                |
| **500**     | An unknown error occurred while attempting to retrieve the data. | -                |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
