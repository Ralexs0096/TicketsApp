# UserApi

All URIs are relative to _http://localhost:8080_

| Method                                        | HTTP request          | Description                                                    |
| --------------------------------------------- | --------------------- | -------------------------------------------------------------- |
| [**createUser**](UserApi.md#createuser)       | **POST** /user        | Create a new User                                              |
| [**deleteUser**](UserApi.md#deleteuser)       | **DELETE** /user/{id} | Delete a User                                                  |
| [**fetchAllUsers**](UserApi.md#fetchallusers) | **GET** /user         | Fetch All Users                                                |
| [**fetchUser**](UserApi.md#fetchuser)         | **GET** /u/{userId}   | Returns a user by ID or the user currently logged in.          |
| [**updateUser**](UserApi.md#updateuser)       | **PUT** /user/{id}    | Allows you to update the properties of a user specified by ID. |

## createUser

> any createUser(createUser)

Create a new User

### Example

```ts
import {
  Configuration,
  UserApi,
} from '';
import type { CreateUserRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UserApi();

  const body = {
    // CreateUser
    createUser: ...,
  } satisfies CreateUserRequest;

  try {
    const data = await api.createUser(body);
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
| **createUser** | [CreateUser](CreateUser.md) |             |       |

### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

### HTTP response details

| Status code | Description                                                      | Response headers |
| ----------- | ---------------------------------------------------------------- | ---------------- |
| **201**     | User(s) successfully created                                     | -                |
| **500**     | An unknown error occurred while attempting to retrieve the data. | -                |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

## deleteUser

> any deleteUser(id)

Delete a User

Endpoint for deleting an user.

### Example

```ts
import { Configuration, UserApi } from '';
import type { DeleteUserRequest } from '';

async function example() {
  console.log('🚀 Testing  SDK...');
  const api = new UserApi();

  const body = {
    // string | Unique identifier for the user.
    id: id_example,
  } satisfies DeleteUserRequest;

  try {
    const data = await api.deleteUser(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

| Name   | Type     | Description                     | Notes                     |
| ------ | -------- | ------------------------------- | ------------------------- |
| **id** | `string` | Unique identifier for the user. | [Defaults to `undefined`] |

### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

### HTTP response details

| Status code | Description              | Response headers |
| ----------- | ------------------------ | ---------------- |
| **204**     | Default Response         | -                |
| **404**     | Invalid or missing data. | -                |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

## fetchAllUsers

> FetchAllUsers fetchAllUsers()

Fetch All Users

### Example

```ts
import { Configuration, UserApi } from '';
import type { FetchAllUsersRequest } from '';

async function example() {
  console.log('🚀 Testing  SDK...');
  const api = new UserApi();

  try {
    const data = await api.fetchAllUsers();
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

[**FetchAllUsers**](FetchAllUsers.md)

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

## fetchUser

> FetchUserReply fetchUser(userId)

Returns a user by ID or the user currently logged in.

### Example

```ts
import { Configuration, UserApi } from '';
import type { FetchUserRequest } from '';

async function example() {
  console.log('🚀 Testing  SDK...');
  const api = new UserApi();

  const body = {
    // string | The unique identifier for a User.
    userId: userId_example,
  } satisfies FetchUserRequest;

  try {
    const data = await api.fetchUser(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

| Name       | Type     | Description                       | Notes                     |
| ---------- | -------- | --------------------------------- | ------------------------- |
| **userId** | `string` | The unique identifier for a User. | [Defaults to `undefined`] |

### Return type

[**FetchUserReply**](FetchUserReply.md)

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

## updateUser

> User updateUser(id, user)

Allows you to update the properties of a user specified by ID.

### Example

```ts
import {
  Configuration,
  UserApi,
} from '';
import type { UpdateUserRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UserApi();

  const body = {
    // string | Unique identifier for the user.
    id: id_example,
    // User
    user: ...,
  } satisfies UpdateUserRequest;

  try {
    const data = await api.updateUser(body);
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
| **id**   | `string`        | Unique identifier for the user. | [Defaults to `undefined`] |
| **user** | [User](User.md) |                                 |                           |

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

### HTTP response details

| Status code | Description              | Response headers |
| ----------- | ------------------------ | ---------------- |
| **200**     | Default Response         | -                |
| **404**     | Invalid or missing data. | -                |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
