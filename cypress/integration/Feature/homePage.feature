Feature: Pinterst Main Page

  I want to login Pinterst
  
  Background: Opening Pinterst in browser
    Given I open Pinterst page
    When User click on login
    And User enter email address
    And User enter password
    Then User click on login button
    
  @smoke
  Scenario: Click on bell
    Given I click on bell icon

