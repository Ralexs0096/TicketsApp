# BrandApi

All URIs are relative to _http://localhost:8080_

| Method                                           | HTTP request           | Description         |
| ------------------------------------------------ | ---------------------- | ------------------- |
| [**createBrand**](BrandApi.md#createbrand)       | **POST** /brand        | Create a new Brand. |
| [**deleteBrand**](BrandApi.md#deletebrand)       | **DELETE** /brand/{id} | Delete a Brand      |
| [**fetchAllBrands**](BrandApi.md#fetchallbrands) | **GET** /brand         | Fetch All Brands    |
| [**updateBrand**](BrandApi.md#updatebrand)       | **PUT** /brand/{id}    | Update a Brand.     |

## createBrand

> any createBrand(createBrand)

Create a new Brand.

Endpoint for creating new brands. Expects an array of brand names in the request body.

### Example

```ts
import {
  Configuration,
  BrandApi,
} from '';
import type { CreateBrandRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new BrandApi();

  const body = {
    // CreateBrand
    createBrand: ...,
  } satisfies CreateBrandRequest;

  try {
    const data = await api.createBrand(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

| Name            | Type                          | Description | Notes |
| --------------- | ----------------------------- | ----------- | ----- |
| **createBrand** | [CreateBrand](CreateBrand.md) |             |       |

### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

### HTTP response details

| Status code | Description                                              | Response headers |
| ----------- | -------------------------------------------------------- | ---------------- |
| **201**     | Brand(s) successfully created                            | -                |
| **500**     | An unknown error occurred when trying to create a Brand. | -                |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

## deleteBrand

> deleteBrand(id)

Delete a Brand

Endpoint for deleting a brand.

### Example

```ts
import { Configuration, BrandApi } from '';
import type { DeleteBrandRequest } from '';

async function example() {
  console.log('🚀 Testing  SDK...');
  const api = new BrandApi();

  const body = {
    // string | Unique identifier for the brand.
    id: id_example,
  } satisfies DeleteBrandRequest;

  try {
    const data = await api.deleteBrand(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

| Name   | Type     | Description                      | Notes                     |
| ------ | -------- | -------------------------------- | ------------------------- |
| **id** | `string` | Unique identifier for the brand. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

### HTTP response details

| Status code | Description                                              | Response headers |
| ----------- | -------------------------------------------------------- | ---------------- |
| **404**     | Invalid or missing Brand.                                | -                |
| **500**     | An unknown error occurred when trying to delete a brand. | -                |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

## fetchAllBrands

> fetchAllBrands()

Fetch All Brands

### Example

```ts
import { Configuration, BrandApi } from '';
import type { FetchAllBrandsRequest } from '';

async function example() {
  console.log('🚀 Testing  SDK...');
  const api = new BrandApi();

  try {
    const data = await api.fetchAllBrands();
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

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

### HTTP response details

| Status code | Description                                            | Response headers |
| ----------- | ------------------------------------------------------ | ---------------- |
| **404**     | Invalid or missing Brand data.                         | -                |
| **500**     | An unknown error occurred when trying to fetch brands. | -                |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

## updateBrand

> Brand updateBrand(id, brand)

Update a Brand.

### Example

```ts
import {
  Configuration,
  BrandApi,
} from '';
import type { UpdateBrandRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new BrandApi();

  const body = {
    // string | Unique identifier for the brand.
    id: id_example,
    // Brand
    brand: ...,
  } satisfies UpdateBrandRequest;

  try {
    const data = await api.updateBrand(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

| Name      | Type              | Description                      | Notes                     |
| --------- | ----------------- | -------------------------------- | ------------------------- |
| **id**    | `string`          | Unique identifier for the brand. | [Defaults to `undefined`] |
| **brand** | [Brand](Brand.md) |                                  |                           |

### Return type

[**Brand**](Brand.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

### HTTP response details

| Status code | Description                                             | Response headers |
| ----------- | ------------------------------------------------------- | ---------------- |
| **200**     | Default Response                                        | -                |
| **404**     | Invalid or missing Brand data.                          | -                |
| **500**     | An unknown error occurred when trying to update brands. | -                |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
