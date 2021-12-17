# WunderFlats_Testcases

* Clone the project in local directory from github
* Open console with the path to your project folder
* Run command "npm install" in your console to install all dependencies
* After installing the depedencies run command "npx cypress open" Or "npm run test" to run the tests.
* If you will run "npm run test" command you will see the reports in the reports folder of cypress created through "Mocha Reports"

## Test Case Strategy: 

I have put my all test cases in one file and tried to keep the code as simple as I can. I couldn't use the sign in functionality[reason explained in the techincal Questions area].

I have created commands for sign in. Because we can reuse them in different test cases with different fucntion parameters(credentials). 

I have created each functionality a separate function in the Fixtures folder so that we can look reuse them in future with different parameters.

I have kept the test data in the data.js and elements selectors in  selectors.js in the Fixture folder. The idea behind this is to keep the code clean and reusable. 

## Out of scope : 

1. Sign Up and Change Email

I have not implemented the Sign up and change email functionality. As both requires a token to confirm the action from email. 

There are two options to resolve that.

* Option1: 
We can achieve that by using a sample company email address and then use a random funtion to generate and add a number in the original email. e.g (test+123@wunderflats.com)
Then we can create a Oauth token and secrect key from google api and use that to access the gmail inbox and get the intended url and hit it to confirm the account. 

* Option 2: 

Getting the confirmation_url directly from the Api response which is generating the confirmation_url. We can confirm the email address. 

2. Verify Documents

I have not implemented the documents verification, as that need either mobile collaboration or camera of the laptop. 


