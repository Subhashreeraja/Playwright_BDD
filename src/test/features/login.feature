Feature: User Authentication tests
 Background: 
      Given Users navigates to the application 
      And the User clicks My Account
      And User click on the login link

  Scenario: Login should be success
     And User enters the email in loginpage as "testdatassss@gmail.com"
     And User enters the password in loginpage as "Testsss123"
     When User click on the login button
     Then Login should be successful

  Scenario: Login should not be success
     And User enters the email in loginpage as "subha"
     And User enters the password in loginpage as "Subhashree123"
     When User click on the login button
     Then Login should not  be successful
