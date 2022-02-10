const AWS = require('aws-sdk')
AWS.config.update({ region: "us-west-2" })

const dynamoDb = new AWS.DynamoDB.DocumentClient();

// AWS for some reasons does not autogenerate an Id so, we grab the request id
// from the context, since it's unique for each ,so we use it as our id

exports.handler = async (event, context) => {

    const body = JSON.parse(event.body);

    const params = {
        TableName: "expenses",
        Item: {
            "id": context.awsRequestId,
            // use the spread operator
            ...body
        }
    }

    // const params = {
    //     TableName: "expenses",
    //     Item: {
    //         "id": context.awsRequestId,
    //         "description": "student loan",
    //         "amount": "500"
    //     }
    // }

    try {

        const newExpense = await dynamoDb.put(params).promise();

        const response = {
            statusCode: 201,
            body: JSON.stringify(params.Item),
        };
        return response;

    }
    catch (e) {
        console.log(e)
    }

};
