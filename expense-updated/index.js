const AWS = require('aws-sdk')
AWS.config.update({ region: "us-west-2" })

const dynamoDb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {

    const body = JSON.parse(event.body);

    const params = {
        TableName: "expenses",
        Key: {
            id: event.pathParameters.id
        },
        UpdateExpression: "set description = :d, amount = :a",
        ExpressionAttributeValues: {
            ":d": body.description,
            ":a": body.amount
        },
        ReturnValues: "ALL_NEW"

    }

    try {

        const updatedExpense = await dynamoDb.update(params).promise();
        // console.log(updatedExpense)

        const response = {
            statusCode: 200,
            body: JSON.stringify(updatedExpense.Attributes),
        };
        return response;

    }
    catch (e) {
        console.log(e)
    }

};
