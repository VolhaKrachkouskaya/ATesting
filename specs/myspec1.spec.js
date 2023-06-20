require('dotenv').config();
describe("create a new purchase order", function () {

    it("Step 01: Navigate to the system and open MPO app", async function () {
    await ui5.navigation.navigateToApplication("PurchaseOrder-manage")
});

    it("Step 02: Log in", async function () {
    await ui5.session.login(process.env.USER, process.env.PASSWORD);
   });

    it("Step 03: Click Create PO", async function () {
    const selector = {
    "elementProperties": {
        "viewName": "sap.suite.ui.generic.template.ListReport.view.ListReport",
        "metadata": "sap.m.Button",
        "id": "*addEntry"
    }
    };    
    await ui5.userInteraction.click(selector);
   

    });

    it("Step 04: Fill in Purchase Order Type: Standard Z-PO (ZNB)", async function () {
    const selector = {
    "elementProperties": {
    "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
    "metadata": "sap.m.ComboBox",
    "id": "*PurchaseOrderType::Field-comboBoxEdit"
            }
            };  
            actualValue = "Standard Z-PO (ZNB)"  
            await ui5.userInteraction.selectComboBox(selector, actualValue);

    });

    it("Step 05: Choose Supplier: 50000040", async function () {
        const selector = {
        "elementProperties": {
        "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
        "metadata": "sap.m.Input",
        "id": "*GeneralInformationFacet1::Supplier::Field-input"
        }
        };    
        actualValue = "50000040"
        await ui5.userInteraction.clearAndFill(selector, actualValue);
        await common.userInteraction.pressEnter();


        });

    it("Step 06: Choose Currency: EUR", async function () {
    const selector = {
        "elementProperties": {
        "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
        "metadata": "sap.m.Input",
        "id": "*GeneralInformationFacet1::DocumentCurrency::Field-input"
        }
        };    
        actualValue = "EUR"
        await ui5.userInteraction.clearAndFill(selector, actualValue);
        await common.userInteraction.pressEnter();
    });
    
    it("Step 07: Choose Purchasing Group: 001", async function () {
        const selector = {
        "elementProperties": {
        "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
        "metadata": "sap.m.Input",
        "id": "*GeneralInformationFacet2::PurchasingGroup::Field-input"
        }
        };    
        actualValue = "001"
        await ui5.userInteraction.clearAndFill(selector, actualValue);
        await common.userInteraction.pressEnter();

     });

     it("Step 08: Choose Purchasing Organization: 1010", async function () {
        const selector = {
        "elementProperties": {
        "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
        "metadata": "sap.m.Input",
        "id": "*GeneralInformationFacet2::PurchasingOrganization::Field-input"
        }
        };    
        actualValue = "1010"
        await ui5.userInteraction.clearAndFill(selector, actualValue);
        await common.userInteraction.pressEnter();


        });

    it("Step 09: Choose Company Code: 1010", async function () {
    const selector = {
    "elementProperties": {
    "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
    "metadata": "sap.m.Input",
    "id": "*GeneralInformationFacet2::CompanyCode::Field-input"
    }
    };    
    actualValue = "1010"
    await ui5.userInteraction.clearAndFill(selector, actualValue);
    await common.userInteraction.pressEnter();
      
    });

    it("Step 10: Navigate to the Items", async function () {
        const selector = {
        "elementProperties": {
            "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
            "metadata": "sap.m.Button",
            "id": "*ItemsFacet::Section-anchor"
        }
        };    
        await ui5.userInteraction.click(selector);

    });

    it("Step 11: Add item line - Click Create item", async function () {
        const selector = {
        "elementProperties": {
        "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
        "metadata": "sap.m.Button",
        "id": "*ItemsFacet::addEntry"
        }
        };    
        await ui5.userInteraction.click(selector);
           });	 

    it("Step 12: Select Item Category: Standard", async function () {
    const selector = {
    "elementProperties": {
    "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
    "metadata": "sap.m.ComboBox",
    "bindingContextPath": "/C_PurchaseOrderItemTP*PurchaseOrder=''*PurchaseOrderItem='00010'*"
  //  "value": [{
  //      path: "PurOrdExternalItemCategory"
  //  }]
     }
     };  
         actualValue = "Standard"  
         await ui5.userInteraction.selectComboBox(selector, actualValue);
 
    });
    
    it("Step 13: Fill in Material: WM-DO3", async function () {
        const selector = {
        "elementProperties": {
        "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
        "metadata": "sap.m.Input",
        "bindingContextPath": "/C_PurchaseOrderItemTP*PurchaseOrder=''*PurchaseOrderItem='00010'*",
       // "value": [{
       //     path: "ManufacturerMaterial"
       // }]
        }
        };    
        actualValue = "WM-D03"
        await ui5.userInteraction.clearAndFill(selector, actualValue);
        //await common.userInteraction.pressEnter();
       // doesn't always fills in other fields, like Plant 
        });  

    it("Step 14: Enter Order Quantity: 10", async function () {
        const selector = {
        "elementProperties": {
        "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
        "metadata": "sap.m.Input",
        "bindingContextPath": "/C_PurchaseOrderItemTP*PurchaseOrder=''*PurchaseOrderItem='00010'*",
        "value": [{
            "path": "OrderQuantity"
        }]
        }
        };    
        actualValue = "10"
        await ui5.userInteraction.clearAndFill(selector, actualValue);
        
    });
    it("Step 15: Click Create in footer", async function () {
        const selector = {
        "elementProperties": {
        "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
        "metadata": "sap.m.Button",
        "id": "*activate"
        }
        };    
        await ui5.userInteraction.click(selector);
        });

       
        it("Step 16: get purchase order id", async function () {
        const selector = {
        "elementProperties": {
        "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
        "metadata": "sap.m.Title",
        "id": "*template::ObjectPage::ObjectPageDynamicHeaderTitle"
        }
        };    
        const PurchaseOrderID = await ui5.element.getPropertyValue(selector, "text");
         
// use reference
        const references = browser.config.params.import.data["references"];
        references.purchaseOrderNumber = PurchaseOrderID;
        });        

    it("Step 17: log out", async function () {
    await ui5.session.logout();

    });      

});