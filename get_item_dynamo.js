import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);



async function myFunction() {

    const command = new GetCommand({
      TableName: "the_test_table",
      Key: {
        testid: "0ddc8c84-e81c-4eb7-a4a5-87255937cfec",
      },
    });

    const response = await docClient.send(command);
    console.log(response);
    return response;
    
};


myFunction();



