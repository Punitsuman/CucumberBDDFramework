$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/testfeature2ps.feature");
formatter.feature({
  "line": 2,
  "name": "My second feature file",
  "description": "",
  "id": "my-second-feature-file",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@First"
    }
  ]
});
formatter.before({
  "duration": 292961,
  "status": "passed"
});
formatter.before({
  "duration": 136683,
  "status": "passed"
});
formatter.before({
  "duration": 55513,
  "status": "passed"
});
formatter.before({
  "duration": 55980,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "scenario without any annotation",
  "description": "",
  "id": "my-second-feature-file;scenario-without-any-annotation",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Second"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Login to application",
  "keyword": "* "
});
formatter.step({
  "line": 8,
  "name": "Search any claim",
  "keyword": "* "
});
formatter.step({
  "line": 9,
  "name": "User should be navigate to View Claim Documents page",
  "keyword": "* "
});
formatter.step({
  "line": 10,
  "name": "Login to application with user \"username\" and \"password\"",
  "keyword": "* "
});
formatter.match({
  "location": "MyStepDef2PS.login_to_application()"
});
formatter.result({
  "duration": 142245964,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef2PS.search_any_claim()"
});
formatter.result({
  "duration": 66243,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef2PS.user_should_be_navigate_to_View_Claim_Documents_page()"
});
formatter.result({
  "duration": 176803,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 32
    },
    {
      "val": "password",
      "offset": 47
    }
  ],
  "location": "MyStepDef2PS.login_to_application_with_user_and(String,String)"
});
formatter.result({
  "duration": 3259422,
  "status": "passed"
});
formatter.after({
  "duration": 208992,
  "status": "passed"
});
formatter.after({
  "duration": 187066,
  "status": "passed"
});
formatter.after({
  "duration": 77439,
  "status": "passed"
});
formatter.after({
  "duration": 74173,
  "status": "passed"
});
});