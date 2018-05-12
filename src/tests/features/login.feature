Feature: login and get token
  I want to login with test account and get token

  Scenario: view HomePage
    When I login with test account
    Then I should receive a jwt token
