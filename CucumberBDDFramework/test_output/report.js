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
  "duration": 657762,
  "status": "passed"
});
formatter.before({
  "duration": 472563,
  "status": "passed"
});
formatter.before({
  "duration": 164674,
  "status": "passed"
});
formatter.before({
  "duration": 155343,
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
  "duration": 135744382,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef2PS.search_any_claim()"
});
formatter.result({
  "duration": 69041,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef2PS.user_should_be_navigate_to_View_Claim_Documents_page()"
});
formatter.result({
  "duration": 60645,
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
  "duration": 2806918,
  "status": "passed"
});
formatter.after({
  "duration": 65310,
  "status": "passed"
});
formatter.after({
  "duration": 57380,
  "status": "passed"
});
formatter.after({
  "duration": 78838,
  "status": "passed"
});
formatter.after({
  "duration": 73241,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 11,
      "value": "# this line and below outline scenario line will call same step definition having 2 String arguments."
    }
  ],
  "line": 15,
  "name": "scenario outline with examples",
  "description": "",
  "id": "my-second-feature-file;scenario-outline-with-examples",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "Login to application with user \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "Search any claim",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User should be navigate to View Claim Documents page",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "my-second-feature-file;scenario-outline-with-examples;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 21,
      "id": "my-second-feature-file;scenario-outline-with-examples;;1"
    },
    {
      "cells": [
        "naveenk",
        "test@123"
      ],
      "line": 22,
      "id": "my-second-feature-file;scenario-outline-with-examples;;2"
    },
    {
      "cells": [
        "punit",
        "temp@456"
      ],
      "line": 23,
      "id": "my-second-feature-file;scenario-outline-with-examples;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 149745,
  "status": "passed"
});
formatter.before({
  "duration": 91900,
  "status": "passed"
});
formatter.before({
  "duration": 49915,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "scenario outline with examples",
  "description": "",
  "id": "my-second-feature-file;scenario-outline-with-examples;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@First"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "Login to application with user \"naveenk\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "Search any claim",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User should be navigate to View Claim Documents page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "naveenk",
      "offset": 32
    },
    {
      "val": "test@123",
      "offset": 46
    }
  ],
  "location": "MyStepDef2PS.login_to_application_with_user_and(String,String)"
});
formatter.result({
  "duration": 193596,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef2PS.search_any_claim()"
});
formatter.result({
  "duration": 61577,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef2PS.user_should_be_navigate_to_View_Claim_Documents_page()"
});
formatter.result({
  "duration": 54580,
  "status": "passed"
});
formatter.after({
  "duration": 51315,
  "status": "passed"
});
formatter.after({
  "duration": 74640,
  "status": "passed"
});
formatter.after({
  "duration": 69508,
  "status": "passed"
});
formatter.before({
  "duration": 146480,
  "status": "passed"
});
formatter.before({
  "duration": 92833,
  "status": "passed"
});
formatter.before({
  "duration": 55514,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "scenario outline with examples",
  "description": "",
  "id": "my-second-feature-file;scenario-outline-with-examples;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@First"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "Login to application with user \"punit\" and \"temp@456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "Search any claim",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User should be navigate to View Claim Documents page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "punit",
      "offset": 32
    },
    {
      "val": "temp@456",
      "offset": 44
    }
  ],
  "location": "MyStepDef2PS.login_to_application_with_user_and(String,String)"
});
formatter.result({
  "duration": 190798,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef2PS.search_any_claim()"
});
formatter.result({
  "duration": 58312,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef2PS.user_should_be_navigate_to_View_Claim_Documents_page()"
});
formatter.result({
  "duration": 54114,
  "status": "passed"
});
formatter.after({
  "duration": 49916,
  "status": "passed"
});
formatter.after({
  "duration": 79772,
  "status": "passed"
});
formatter.after({
  "duration": 86768,
  "status": "passed"
});
});