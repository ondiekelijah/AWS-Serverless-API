const AWS = require('aws-sdk')
AWS.config.update({ region: "us-west-2" })

const dynamoDb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {

    const params = {
        TableName: "expenses",
        Key: {
            id: event.pathParameters.id
        }
    }

    try {
        const expense = await dynamoDb.get(params).promise();
        const response = {
            statusCode: 200,
            body: JSON.stringify(expense.Item),
        };
        return response;

    } catch (e) {
        console.log(e)
    }


};
// AWSLambdaBasicExecutionRole