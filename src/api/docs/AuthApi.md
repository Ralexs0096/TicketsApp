# AuthApi

All URIs are relative to _http://localhost:8080_

| Method                                 | HTTP request    | Description                    |
| -------------------------------------- | --------------- | ------------------------------ |
| [**login**](AuthApi.md#loginoperation) | **POST** /login | Allow a user to start session. |

## login

> LoginReply login(loginRequest)

Allow a user to start session.

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { LoginOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthApi();

  const body = {
    // LoginRequest
    loginRequest: ...,
  } satisfies LoginOperationRequest;

  try {
    const data = await api.login(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

| Name             | Type                            | Description | Notes |
| ---------------- | ------------------------------- | ----------- | ----- |
| **loginRequest** | [LoginRequest](LoginRequest.md) |             |       |

### Return type

[**LoginReply**](LoginReply.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

### HTTP response details

| Status code | Description                | Response headers |
| ----------- | -------------------------- | ---------------- |
| **200**     | Default Response           | -                |
| **404**     | User not found.            | -                |
| **500**     | An unknown error occurred. | -                |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
