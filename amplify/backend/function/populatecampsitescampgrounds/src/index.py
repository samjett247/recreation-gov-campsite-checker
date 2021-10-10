import json
from fetch_aws_secret import fetch_aws_secret
def handler(event, context):
  print('received event:')
  print(event)
  print("My Secret Key: ", fetch_aws_secret)
  
  return {
      'statusCode': 200,
      'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
      'body': json.dumps('Hello from your new Amplify Python lambda!')
  }