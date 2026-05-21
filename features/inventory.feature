Feature:Inventory Page
Scenario:Verify invertory items count for different users
Given User is on application loginpage
When User logs in with username "<username>" and password "<password>"
Then User should see "<result>"
And Inventory items count should "<count>"

Examples:
    |username        |password      |result          |count|
    |standard_user   |secret_sauce  |Inventory Page  |6    |
    |problem_user    |secret_sauce  |Inventory Page  |6    |
    |locked_out_user |secret_sauce  |Error Message   |0    |