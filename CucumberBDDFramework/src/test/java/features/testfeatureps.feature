Feature: My first feature file

Scenario: My first scenario

Given Launch the browser
When Navigate to application 
Then Enter name and password
Then User should be able to login

Scenario: My second scenario in same feature file

Given User is already logged in
When User should be able to login
Then View Claim Documents page should be displayed

Scenario: My third scenario in same feature file

Given User should be able to login
When User is already logged in
Then User should be able to upload new doc

Scenario: My fourth scenario in same feature file without any given when and then

* User should be able to upload new doc
* User should be able to login
* Navigate to Claim history page

