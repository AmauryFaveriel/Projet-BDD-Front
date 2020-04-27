Feature: Contact

Scenario: User conacting Ottolenghi
    Given I am a user attempting to contact Ottolenghi
    When I type "Elon" as name
    Then submit button should still be disabled
    When I type "Musk" as surname
    Then submit button should still be disabled
    When I type "elon" as email
    Then error should appear on field email
    When I type "elon.musk@gmail.com" as email
    Then submit button should still be disabled
    And error should be disabled
    When I type "My message" as message
    Then submit button should be enabled
    When I click the submit button
    Then name field should be empty
    And surname field should be empty
    And email field should be empty
    And message field should be empty