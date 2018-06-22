$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SampleApple.feature");
formatter.feature({
  "line": 1,
  "name": "Creating A Store",
  "description": "",
  "id": "creating-a-store",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Login to SFO application",
  "description": "",
  "id": "creating-a-store;login-to-sfo-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open the SFO URL",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter valid username and password",
  "rows": [
    {
      "cells": [
        "dhamu",
        "gbb198"
      ],
      "line": 7
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Verify Login to the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "MethodDefinition.open_the_SFO_URL()"
});
formatter.result({
  "duration": 159231951,
  "status": "passed"
});
formatter.match({
  "location": "MethodDefinition.enter_valid_username_and_password(DataTable)"
});
formatter.result({
  "duration": 1054250,
  "status": "passed"
});
formatter.match({
  "location": "MethodDefinition.verify_Login_to_the_home_page()"
});
formatter.result({
  "duration": 250268,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Add Store",
  "description": "",
  "id": "creating-a-store;add-store",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@addstore"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "Click add new Store",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "enter Apple id as \"\u003cAppleId\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "enter Store id as \"\u003cStoreId\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "creating-a-store;add-store;",
  "rows": [
    {
      "cells": [
        "AppleId",
        "StoreId"
      ],
      "line": 19,
      "id": "creating-a-store;add-store;;1"
    },
    {
      "cells": [
        "1001",
        "5001"
      ],
      "line": 20,
      "id": "creating-a-store;add-store;;2"
    },
    {
      "cells": [
        "1002",
        "5002"
      ],
      "line": 21,
      "id": "creating-a-store;add-store;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "Add Store",
  "description": "",
  "id": "creating-a-store;add-store;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@addstore"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "Click add new Store",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "enter Apple id as \"1001\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "enter Store id as \"5001\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "MethodDefinition.click_add_new_Store()"
});
formatter.result({
  "duration": 112735,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1001",
      "offset": 19
    }
  ],
  "location": "MethodDefinition.enter_Apple_id_as(String)"
});
formatter.result({
  "duration": 5233833,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5001",
      "offset": 19
    }
  ],
  "location": "MethodDefinition.enter_Store_id_as(String)"
});
formatter.result({
  "duration": 285373,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Add Store",
  "description": "",
  "id": "creating-a-store;add-store;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@addstore"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "Click add new Store",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "enter Apple id as \"1002\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "enter Store id as \"5002\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "MethodDefinition.click_add_new_Store()"
});
formatter.result({
  "duration": 31966,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1002",
      "offset": 19
    }
  ],
  "location": "MethodDefinition.enter_Apple_id_as(String)"
});
formatter.result({
  "duration": 727247,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5002",
      "offset": 19
    }
  ],
  "location": "MethodDefinition.enter_Store_id_as(String)"
});
formatter.result({
  "duration": 484358,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 23,
  "name": "Add Program",
  "description": "",
  "id": "creating-a-store;add-program",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "Click add new program",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Enter program id \"ProgramID\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Enter Program Name \"ProgramName\"",
  "keyword": "And "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "creating-a-store;add-program;",
  "rows": [
    {
      "cells": [
        "ProgramID",
        "ProgramName"
      ],
      "line": 29,
      "id": "creating-a-store;add-program;;1"
    },
    {
      "cells": [
        "5345",
        "53453"
      ],
      "line": 30,
      "id": "creating-a-store;add-program;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 30,
  "name": "Add Program",
  "description": "",
  "id": "creating-a-store;add-program;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "Click add new program",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Enter program id \"ProgramID\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Enter Program Name \"ProgramName\"",
  "keyword": "And "
});
formatter.match({
  "location": "MethodDefinition.click_add_new_program()"
});
formatter.result({
  "duration": 30850,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ProgramID",
      "offset": 18
    }
  ],
  "location": "MethodDefinition.enter_program_id(String)"
});
formatter.result({
  "duration": 55342,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ProgramName",
      "offset": 20
    }
  ],
  "location": "MethodDefinition.enter_Program_Name(String)"
});
formatter.result({
  "duration": 50886,
  "status": "passed"
});
});