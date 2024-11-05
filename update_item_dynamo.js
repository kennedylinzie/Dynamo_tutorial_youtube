import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, UpdateCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);



async function myFunction() {

  const currentDateTime = new Date().toISOString();
  const client = new DynamoDBClient({});
  const docClient = DynamoDBDocumentClient.from(client);

  let testid = "3a7bc85a-43ff-4d8b-96a2-83fd940af027"
  let newName = "malawi"
  let  newLastname = "east africa"

  const command = new UpdateCommand({
      TableName: "the_test_table",

      Key: {
          testid: testid,  
      },
      UpdateExpression: "SET #name = :name, #lastname = :lastname, #date = :date",
      ExpressionAttributeNames: {
          "#name": "name",     
          "#lastname": "lastname",
          "#date": "Date"
      },
      ExpressionAttributeValues: {
          ":name": newName,
          ":lastname": newLastname,
          ":date": currentDateTime
      },
      ReturnValues: "ALL_NEW"   
  });

  try {
      const response = await docClient.send(command);
      console.log("Item updated successfully:", response.Attributes);
      return { success: true, message: "Item updated successfully.", data: response.Attributes };
  } catch (error) {
      console.error("Error updating item:", error);
      return { success: false, message: "Error updating item.", error: error };
  }
    
};


myFunction();



