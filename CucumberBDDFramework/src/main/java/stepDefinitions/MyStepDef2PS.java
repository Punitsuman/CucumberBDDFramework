package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class MyStepDef2PS {
	
	@Given("^User should be able to upload new doc$")
	public void user_should_be_able_to_upload_new_doc() {
	    System.out.println("Third scenario of same file but step is in another file...");
	    System.out.println("****@Given tag is used instead of @Then but it's working fine****");
	}

	@Given("^Search any claim$")
	public void search_any_claim() {
	    System.out.println("Test step def of 2nd feature");
	}

	@Given("^User should be navigate to View Claim Documents page$")
	public void user_should_be_navigate_to_View_Claim_Documents_page()  {
		System.out.println("Test step def of 2nd feature");
}
	
	@When("^Login to application$")
	public void login_to_application() {
		System.out.println("Test step def of 2nd feature");
	}

	@Given("^Login to application with user \"([^\"]*)\" and \"([^\"]*)\"$")
	public void login_to_application_with_user_and(String username, String password){
	   System.out.println("Username :"+username + " Password :"+ password);
	}

	
}