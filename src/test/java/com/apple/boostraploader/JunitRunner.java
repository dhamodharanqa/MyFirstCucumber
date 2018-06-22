package com.apple.boostraploader;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features={"src/test/resources"},
		glue={"com/apple/stepdefinition/"},
		tags={},
		format= {"pretty","junit:test/cucumber-reports","html:test/html-report"},
		monochrome=true)
public class JunitRunner {

}
