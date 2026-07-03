Feature: User Registration Tests
 Background: 
      Given User navigates to the application
      And User click on the myAccount link
      And User click on the Register link

  Scenario: Register should be success
     And User enters the firstname as "tests"
     And User enters the lastname as "data"
     And User enters the email as "testdatu@gmail.com"
     And User enters the telephone as "1234533123"
     And User enters the password as "Testsss123"
     And User enters the confirmPassword as "Testsss123"
     When User click the policycheckbox
     When User click on the register button
     Then Register should be successful

  Scenario: Register should not be  success
      And User enters the firstname as "Subha"
     And User enters the lastname as "Shree"
     And User enters the email as "sdfg@fg"
     And User enters the telephone as "9080533443"
     And User enters the password as "Subhashree123"
     And User enters the confirmPassword as "Subhashree123"
     When User click the policycheckbox
     When User click on the register button
     Then Register should  not be successful
