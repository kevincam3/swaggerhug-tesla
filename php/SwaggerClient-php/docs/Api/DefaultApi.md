# Swagger\Client\DefaultApi

All URIs are relative to *https://virtserver.swaggerhub.com/kevincam3/Tesla-ModelS-API/0.0.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**vehicleGet**](DefaultApi.md#vehicleGet) | **GET** /vehicle | Details about owned vehicle


# **vehicleGet**
> \Swagger\Client\Model\InlineResponse200 vehicleGet()

Details about owned vehicle

Get the details about the vehicle

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\Api\DefaultApi();

try {
    $result = $api_instance->vehicleGet();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->vehicleGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**\Swagger\Client\Model\InlineResponse200**](../Model/InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

