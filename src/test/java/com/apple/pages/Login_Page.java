package com.apple.pages;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

public class Login_Page {

	
	public static void loginApplication() {
		DesiredCapabilities capabilities = new DesiredCapabilities();
		capabilities.setCapability("marionette", true);
		System.setProperty("webdriver.gecko.driver", "Resources/geckodriver");
		@SuppressWarnings("deprecation")
		WebDriver driver=new FirefoxDriver(capabilities);
		driver.manage().timeouts().pageLoadTimeout(3, TimeUnit.MINUTES);
		driver.get("https://www.flipkart.com");
	}

}
