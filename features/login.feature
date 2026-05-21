#tags @smoke>>make a
Feature:Login Functionality
Scenario:Login with valid Credentials
Given User is on Login Page
When User enters valid username and valid Password
And  clicks on Login Button
Then User should navigate to Home Page
@smoke
Scenario:Login with invalid Credentials
Given User is on Login Page
When User enters valid username "problem_user" and invalid Password "secret_sauce1"
And  clicks on Login Button
Then User should see Error Message

