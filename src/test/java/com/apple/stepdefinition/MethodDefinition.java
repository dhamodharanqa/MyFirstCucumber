package com.apple.stepdefinition;

import java.util.List;

import org.apache.log4j.Logger;
import org.apache.log4j.spi.LoggerFactory;

import com.apple.pages.Login_Page;

import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;

public class MethodDefinition {

	Logger log = Logger.getLogger("dest1");
	
	@Given("^Open the SFO URL$")
	public void open_the_SFO_URL() throws Throwable {
	  //Login_Page.loginApplication();
		System.out.println(1);
		log.info("Logger 1");
	}
	
	
	@Given("^Enter valid username and password$")
	public void enter_valid_username_and_password(DataTable arg1) throws Throwable {
	    
	    List<List<String>> data=arg1.raw();
	    System.out.println(data.get(0).get(0)); 
	    System.out.println(data.get(0).get(1));
	    log.info("Logger 1");
	}

	@Given("^Verify Login to the home page$")
	public void verify_Login_to_the_home_page() throws Throwable {
		System.out.println(3); 
		log.info("Logger 1");
	}
	
	@Given("^Click add new Store$")
	public void click_add_new_Store() throws Throwable {
		log.info("Logger 1");
	}

	@Given("^enter Apple id as \"([^\"]*)\"$")
	public void enter_Apple_id_as(String arg1) throws Throwable {
	   System.out.println(arg1);
	}

@Given("^enter Store id as \"([^\"]*)\"$")
public void enter_Store_id_as(String arg1) throws Throwable {
	System.out.println(arg1);
}

@Given("^Click add new program$")
public void click_add_new_program() throws Throwable {
    
}

@Given("^Enter program id \"([^\"]*)\"$")
public void enter_program_id(String arg1) throws Throwable {
    
}

@Given("^Enter Program Name \"([^\"]*)\"$")
public void enter_Program_Name(String arg1) throws Throwable {
    
}

}
