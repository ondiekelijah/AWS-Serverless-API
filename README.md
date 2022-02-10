# AWS-Serverless-API
A serverless AWS expense tracker API.

1. AWS Lambda functions
2. API gateway
3. Dynamodb

## Endpoints

**[Create a new expense](https://553y9ozxl7.execute-api.us-west-2.amazonaws.com/expenses): Method: `POST`**


**Body format**: JSON

sample body request.

```Json
{
 "description": "Car servicing",
 "amount": "540"
}
```

**[Get all expenses](https://553y9ozxl7.execute-api.us-west-2.amazonaws.com/expenses): Method: `GET`**

sample response.

```Json
[
    {
        "amount": "5000",
        "description": "Medical bills",
        "id": "eda2769d-3d97-4082-bc9f-97c52b9a9274"
    },
    {
        "amount": "540",
        "description": "Car servicing",
        "id": "eedb412d-ad57-4a62-b4b1-3ff734a7ba76"
    }
]
```

**[Get an expense](https://553y9ozxl7.execute-api.us-west-2.amazonaws.com/expenses/eda2769d-3d97-4082-bc9f-97c52b9a9274): Method: `GET`**

Endpoint : https://553y9ozxl7.execute-api.us-west-2.amazonaws.com/expenses/{expenseID}

sample response.

```Json

{
    "amount": "540",
    "description": "Car servicing",
    "id": "eedb412d-ad57-4a62-b4b1-3ff734a7ba76"
}

```


