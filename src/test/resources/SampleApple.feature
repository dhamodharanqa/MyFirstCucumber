Feature: Creating A Store

@Login
Scenario: Login to SFO application 
	Given Open the SFO URL 
	And Enter valid username and password 
	|dhamu|gbb198|
	Then Verify Login to the home page 
	

@addstore
Scenario Outline: Add Store	
	Given Click add new Store
	And enter Apple id as "<AppleId>"
	And enter Store id as "<StoreId>"
	
	Examples:
	
	|AppleId | StoreId |
	|1001    | 5001    |
	|1002    | 5002    |
	
Scenario Outline: Add Program
	Given Click add new program
	And Enter program id "ProgramID"
	And Enter Program Name "ProgramName"
	Examples:

	|ProgramID|ProgramName|
	|5345|53453|