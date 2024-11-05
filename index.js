
import { DynamoDBClient }  from "@aws-sdk/client-dynamodb";
import { PutCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
async function myFunction() {
    const currentDateTime = getCurrentDateTime();
    const client = new DynamoDBClient({});
    const docClient = DynamoDBDocumentClient.from(client);

    const uuid = generateUUID();
            const command = new PutCommand({
                TableName: "the_test_table",
                Item: {
                    testid: uuid,
                    name: "jame",
                    lastname: "japan",
                    Date: currentDateTime,
                },
            });

            await docClient.send(command);
        console.log("All items processed successfully.");
        return { success: true, message: "All items processed successfully." };
    
};
function generateUUID() {
    return crypto.randomUUID();
}

function formatNumberWithLeadingZero(number) {
    return number.toString().padStart(2, '0');
}

function getCurrentDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = formatNumberWithLeadingZero(now.getMonth() + 1); 
    const day = formatNumberWithLeadingZero(now.getDate());
    const hours = formatNumberWithLeadingZero(now.getHours());
    const minutes = formatNumberWithLeadingZero(now.getMinutes());
    const seconds = formatNumberWithLeadingZero(now.getSeconds());

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

myFunction();



