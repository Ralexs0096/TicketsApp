# AreaApi

All URIs are relative to _http://localhost:8080_

| Method                                        | HTTP request          | Description                                   |
| --------------------------------------------- | --------------------- | --------------------------------------------- |
| [**createArea**](AreaApi.md#createarea)       | **POST** /area        | Create a new Area.                            |
| [**deleteArea**](AreaApi.md#deletearea)       | **DELETE** /area/{id} | Delete an Area or some Areas at the same time |
| [**fetchAllAreas**](AreaApi.md#fetchallareas) | **GET** /area         | Fetch All Areas                               |
| [**updateArea**](AreaApi.md#updatearea)       | **PUT** /area/{id}    | Update an Area.                               |

## createArea

> createArea(createArea)

Create a new Area.

### Example

```ts
import {
  Configuration,
  AreaApi,
} from '';
import type { CreateAreaRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AreaApi();

  const body = {
    // CreateArea
    createArea: ...,
  } satisfies CreateAreaRequest;

  try {
    const data = await api.createArea(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

| Name           | Type                        | Description | Notes |
| -------------- | --------------------------- | ----------- | ----- |
| **createArea** | [CreateArea](CreateArea.md) |             |       |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

### HTTP response details

| Status code | Description                   | Response headers |
| ----------- | ----------------------------- | ---------------- |
| **200**     | Default Response              | -                |
| **500**     | Invalid or missing Area data. | -                |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

## deleteArea

> Area deleteArea(id, area)

Delete an Area or some Areas at the same time

### Example

```ts
import {
  Configuration,
  AreaApi,
} from '';
import type { DeleteAreaRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AreaApi();

  const body = {
    // string | Unique identifier for the area.
    id: id_example,
    // Area
    area: ...,
  } satisfies DeleteAreaRequest;

  try {
    const data = await api.deleteArea(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

| Name     | Type            | Description                     | Notes                     |
| -------- | --------------- | ------------------------------- | ------------------------- |
| **id**   | `string`        | Unique identifier for the area. | [Defaults to `undefined`] |
| **area** | [Area](Area.md) |                                 |                           |

### Return type

[**Area**](Area.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

### HTTP response details

| Status code | Description                                            | Response headers |
| ----------- | ------------------------------------------------------ | ---------------- |
| **201**     | Default Response                                       | -                |
| **404**     | Invalid or missing Area data.                          | -                |
| **500**     | An unknown error occurred when trying to delete areas. | -                |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

## fetchAllAreas

> FetchAllAreasReply fetchAllAreas()

Fetch All Areas

### Example

```ts
import { Configuration, AreaApi } from '';
import type { FetchAllAreasRequest } from '';

async function example() {
  console.log('🚀 Testing  SDK...');
  const api = new AreaApi();

  try {
    const data = await api.fetchAllAreas();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**FetchAllAreasReply**](FetchAllAreasReply.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

### HTTP response details

| Status code | Description                                                      | Response headers |
| ----------- | ---------------------------------------------------------------- | ---------------- |
| **201**     | Default Response                                                 | -                |
| **500**     | An unknown error occurred while attempting to retrieve the data. | -                |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

## updateArea

> Area updateArea(id, area)

Update an Area.

### Example

```ts
import {
  Configuration,
  AreaApi,
} from '';
import type { UpdateAreaRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AreaApi();

  const body = {
    // string | Unique identifier for the area.
    id: id_example,
    // Area
    area: ...,
  } satisfies UpdateAreaRequest;

  try {
    const data = await api.updateArea(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

| Name     | Type            | Description                     | Notes                     |
| -------- | --------------- | ------------------------------- | ------------------------- |
| **id**   | `string`        | Unique identifier for the area. | [Defaults to `undefined`] |
| **area** | [Area](Area.md) |                                 |                           |

### Return type

[**Area**](Area.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

### HTTP response details

| Status code | Description                   | Response headers |
| ----------- | ----------------------------- | ---------------- |
| **201**     | Default Response              | -                |
| **404**     | Invalid or missing Area data. | -                |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
