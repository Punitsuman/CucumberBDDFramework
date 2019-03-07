@First
Feature: My second feature file

@Second
Scenario: scenario without any annotation

* Login to application
* Search any claim
* User should be navigate to View Claim Documents page
* Login to application with user "username" and "password" 
# this line and below outline scenario line will call same step definition having 2 String arguments.



Scenario Outline: scenario outline with examples

Given Login to application with user "<username>" and "<password>"
When Search any claim
Then User should be navigate to View Claim Documents page
Examples:
	| username | password | 
	| naveenk  | test@123 |
	| punit  | temp@456 |	