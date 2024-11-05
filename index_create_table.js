import { CreateTableCommand, DynamoDBClient } from "@aws-sdk/client-dynamodb";

async function myFunction() {
    //const currentDateTime = getCurrentDateTime();
    const client = new DynamoDBClient({});
   // const docClient = DynamoDBDocumentClient.from(client);

    //const uuid = generateUUID();
    const command = new CreateTableCommand({
        TableName: "the_test_table",

        AttributeDefinitions: [
          {
            AttributeName: "testid",
            AttributeType: "S",
          },
        ],
       // "S" for string
       // "N" for number
      //  "B" for binary
        KeySchema: [
          {
            AttributeName: "testid",
            KeyType: "HASH",
          },
        ],

      //  AttributeName: The attribute that is part of the key schema.
      //  KeyType: Indicates whether the attribute is a HASH or RANGE key:
      //  HASH: Known as the partition key, it uniquely identifies each item in the table. Required in every key schema.
      // RANGE: Known as the sort key, it can be optionally added to form a composite key along with the partition key.

        ProvisionedThroughput: {
          ReadCapacityUnits: 1,
          WriteCapacityUnits: 1,
        },

       // ReadCapacityUnits: Specifies the number of strongly consistent reads per second that DynamoDB can handle for the table. Setting it to 1 is minimal, which helps keep costs low.
       // WriteCapacityUnits: Specifies the number of writes per second that DynamoDB can handle for the table. This is also set to 1 here for minimal cost.
      });
    
      const response = await client.send(command);
      console.log(response);
      return response;
    
};


myFunction();



