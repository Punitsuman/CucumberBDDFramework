package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyStepDefPS {
	
	@Given("^Launch the browser$")
	public void launch_the_browser()  {
		System.out.println("Test Step def..");
	    
	}

	@When("^Navigate to application$")
	public void navigate_to_application()  {
		System.out.println("Test Step def..");
	}

	@Then("^Enter name and password$")
	public void enter_name_and_password()  {
		System.out.println("Test Step def..");
	}

	@Then("^User should be able to login$")
	public void user_should_be_able_to_login()   {
		System.out.println("Test Step def..");
	}

	
	@Given("^User is already logged in$")
	public void user_is_already_logged_in()  {
		System.out.println("Test Step def..scenario2 of same file in same step def");
	}

	@Then("^View Claim Documents page should be displayed$")
	public void view_Claim_Documents_page_should_be_displayed()  {
		System.out.println("Test Step def..scenario2 of same file in same step def");
	}



}
