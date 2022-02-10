const AWS = require('aws-sdk')
AWS.config.update({ region: "us-west-2" })

const dynamoDb = new AWS.DynamoDB.DocumentClient();


exports.handler = async (event) => {
    // TODO implement
    const params = {
        TableName: "expenses"
    }

    try {
        const results = await dynamoDb.scan(params).promise();


        const response = {
            statusCode: 200,
            body: JSON.stringify(results.Items),
        };
        return response;
    } catch (e) {
        console.log(e)

    }

};
