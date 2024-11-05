import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, DeleteCommand } from "@aws-sdk/lib-dynamodb";


const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);



async function myFunction() {

      const command = new DeleteCommand({
        TableName: "the_test_table",
        Key: {
          testid: "93937f39-cce3-4aa8-8f7d-e4c916ce3eaa",
        },
      });

      const response = await docClient.send(command);
      console.log(response);
      return response;
    
};


myFunction();



