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
        await dynamoDb.delete(params).promise();
        const response = {
            statusCode: 204,
            body: JSON.stringify({ "status": "success" }),
        };
        return response;

    }
    catch (e) {
        console.log(e)
    }


};
