require('dotenv').config();
var StandardZPO = require("../data/StandardZPO.json");
var ObjectPage = require("../module/ObjectPage.js");
var elementsData = require("../data/elementsData.json");
var generalData = require("../data/generalData.json");
// var ListReport = require("../module/ListReport.js");

describe("create a new purchase order", function () {

    it("Step 01: Navigate to the system and open MPO app", async function () {
    await ui5.navigation.navigateToApplication(generalData.AppName)
     
});

    it("Step 02: Log in", async function () {
    await ui5.session.login(process.env.USER, process.env.PASSWORD);
   });


   // doesn't work!
    it("Step 03: Click Create PO", async function () {
    //    await ListReport.clickCreateFromLR(
    //     elementsData.button.createNewPO.metadata,
    //     elementsData.button.createNewPO.id
    //    );
            const selector = {
     "elementProperties": {
         "viewName": "sap.suite.ui.generic.template.ListReport.view.ListReport",
         "metadata": "sap.m.Button",
         "id": "*addEntry"
     }
     };    
     await ui5.userInteraction.click(selector);


    });

    it("Step 04: Select Purchase Order Type: Standard Z-PO (ZNB)", async function () {
        await ObjectPage.fillInFields(
            elementsData.ComboBox.purchaseOrderType.type,
            elementsData.ComboBox.purchaseOrderType.metadata,
            elementsData.ComboBox.purchaseOrderType.id,
            StandardZPO.GeneralInformation.PurchaseOrderType
        );
    // const selector = {
    // "elementProperties": {
    // "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
    // "metadata": "sap.m.ComboBox",
    // "id": "*PurchaseOrderType::Field-comboBoxEdit"
    //         }
    //         };  
    //await ui5.userInteraction.selectComboBox(selector, StandardZPO.GeneralInformation.PurchaseOrderType);

    });

    it("Step 05: Choose Supplier: 50000040", async function () {
        await ObjectPage.fillInFields(
            elementsData.field.supplier.type,
            elementsData.field.supplier.metadata,
            elementsData.field.supplier.id,
            StandardZPO.GeneralInformation.Supplier            
        );

        // const selector = {
        // "elementProperties": {
        // "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
        // "metadata": "sap.m.Input",
        // "id": "*GeneralInformationFacet1::Supplier::Field-input"
        // }
        // };    
        // await ui5.userInteraction.clearAndFill(selector, StandardZPO.GeneralInformation.Supplier);
        // await common.userInteraction.pressEnter();
       });

    it("Step 06: Choose Currency: EUR", async function () {
 
        await ObjectPage.fillInFields(
            elementsData.field.currency.type,
            elementsData.field.currency.metadata,
            elementsData.field.currency.id,
            StandardZPO.GeneralInformation.Currency
        );
        // const selector = {
        // "elementProperties": {
        // "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
        // "metadata": "sap.m.Input",
        // "id": "*GeneralInformationFacet1::DocumentCurrency::Field-input"
        // }
        // };    
        // await ui5.userInteraction.clearAndFill(selector, StandardZPO.GeneralInformation.Currency);
        // await common.userInteraction.pressEnter();
    });
    
    it("Step 07: Choose Purchasing Group: 001", async function () {
        await ObjectPage.fillInFields(
            elementsData.field.purchasingGroup.type,
            elementsData.field.purchasingGroup.metadata,
            elementsData.field.purchasingGroup.id,
            StandardZPO.GeneralInformation.PurchasingGroup
        );
        // const selector = {
        // "elementProperties": {
        // "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
        // "metadata": "sap.m.Input",
        // "id": "*GeneralInformationFacet2::PurchasingGroup::Field-input"
        // }
        // };    
        // await ui5.userInteraction.clearAndFill(selector, StandardZPO.GeneralInformation.PurchasingGroup);
        // await common.userInteraction.pressEnter();

     });

     it("Step 08: Choose Purchasing Organization: 1010", async function () {
        await ObjectPage.fillInFields(
            elementsData.field.purchasingOrganization.type,
            elementsData.field.purchasingOrganization.metadata,
            elementsData.field.purchasingOrganization.id,
            StandardZPO.GeneralInformation.PurchasingOrganization
        );
        // const selector = {
        // "elementProperties": {
        // "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
        // "metadata": "sap.m.Input",
        // "id": "*GeneralInformationFacet2::PurchasingOrganization::Field-input"
        // }
        // };    
        // await ui5.userInteraction.clearAndFill(selector, StandardZPO.GeneralInformation.PurchasingOrganization);
        // await common.userInteraction.pressEnter();

        });

    it("Step 09: Choose Company Code: 1010", async function () {
        await ObjectPage.fillInFields(
            elementsData.field.companyCode.type,
            elementsData.field.companyCode.metadata,
            elementsData.field.companyCode.id,
            StandardZPO.GeneralInformation.CompanyCode
        );
   // const selector = {
    // "elementProperties": {
    // "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
    // "metadata": "sap.m.Input",
    // "id": "*GeneralInformationFacet2::CompanyCode::Field-input"
    // }
    // };    
    
    // await ui5.userInteraction.clearAndFill(selector, StandardZPO.GeneralInformation.CompanyCode);
    // await common.userInteraction.pressEnter();
      
    });
///NAVIGATE IS NOT PRESENT 
    it("Step 10: Navigate to the Items", async function () {
        await ObjectPage.navigateToItems(
        elementsData.section.Items
        );
        // const selector = {
        // "elementProperties": {
        //     "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
        //     "metadata": "sap.m.Button",
        //     "id": "*ItemsFacet::Section-anchor"
        // }
        // };    
        // await ui5.userInteraction.click(selector);

    });
    
    var ItemArr = StandardZPO.Items
    for (let [ItemIndex, itemValue] of ItemArr.entries()) {

    
    it("Item" + itemValue.Item + "Add item - Click Create item", async function () {
        await ObjectPage.AddItem(
            elementsData.button.createNewItem.metadata,
            elementsData.button.createNewItem.id
        );
        
        // const selector = {
        // "elementProperties": {
        // "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
        // "metadata": "sap.m.Button",
        // "id": "*ItemsFacet::addEntry"
        // }
        // };    
        // await ui5.userInteraction.click(selector);
           });	 

   it("Item" + itemValue.Itemtem + "Select Item Category" + itemValue.ItemCategory, async function () {
    await ObjectPage.fillInFields(
        elementsData.field.itemCategory.type,
        elementsData.field.itemCategory.metadata,
        elementsData.field.itemCategory.path,
        itemValue.ItemCategory,
        itemValue.item
    );
        //const selector = {
    // "elementProperties": {
    // "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
    // "metadata": "sap.m.ComboBox",
    // "bindingContextPath": "/C_PurchaseOrderItemTP*PurchaseOrder=''*PurchaseOrderItem='00010'*",
   // "value": [{
    //"path": "PurOrdExternalItemCategory"
    // was not added initially by me
  // }]
    //  }
    //  };
   });
     
    //  actualValue = "Standard"  
    //      await ui5.userInteraction.selectComboBox(selector, actualValue);

    //    await ui5.userInteraction.selectComboBox(selector, StandardZPO.Items[00010].ItemCategory);
    //     await ObjectPage.fillInFields(elementsData.field.itemCategory.type,
    //       elementsData.field.itemCategory.metadata,
    //       elementsData.field.itemCategory.path,
    //       StandardZPO.Items[00010].ItemCategory);
                     
       
    it("Item" + itemValue.item + "Fill in Material" + itemValue.Material, async function () {
        await ObjectPage.fillInFields(
            elementsData.field.itemMaterial.type,
            elementsData.field.itemMaterial.metadata,
            elementsData.field.itemMaterial.path,
            itemValue.itemMaterial,
            itemValue.item
        );

        // const selector = {
        // "elementProperties": {
        // "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
        // "metadata": "sap.m.Input",
        // "bindingContextPath": "/C_PurchaseOrderItemTP*PurchaseOrder=''*PurchaseOrderItem='00010'*",
       // "value": [{
       //  "path": "ManufacturerMaterial"  was not added initially by me
       // }]
        // }
        // };
        // actualValue = "WM-D03"
        // await ui5.userInteraction.clearAndFill(selector, actualValue);

      //  await ui5.userInteraction.clearAndFill(selector, StandardZPO.Items[`00010`].Material);
       //await common.userInteraction.pressEnter();
       // doesn't always fills in other fields, like Plant 
        });  

    it("Item" + itemValue.item + "Enter Order Quantity" + itemValue.OrderQuantity, async function () {
        await ObjectPage.fillInFields(
            elementsData.field.itemQuantity.type,
            elementsData.field.itemQuantity.metadata,
            elementsData.field.itemQuantity.path,
            itemValue.itemQuantity,
            itemValue.Item
        );

        // const selector = {
        // "elementProperties": {
        // "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
        // "metadata": "sap.m.Input",
        // "bindingContextPath": "/C_PurchaseOrderItemTP*PurchaseOrder=''*PurchaseOrderItem='00010'*",
        // "value": [{
        //     "path": "OrderQuantity"
        // }]
        // }
        // };    
        // actualValue = "10"
        // await ui5.userInteraction.clearAndFill(selector, actualValue);

     //   await ui5.userInteraction.clearAndFill(selector, StandardZPO.Items[`00010`].OrderQuantity);
        
    });

    //absent

    it("Step 14_1: Open created Item", async function () {
        const selector = {
        "elementProperties": {
            "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
            "metadata": "sap.ui.core.Icon",
            "bindingContextPath": "/C_PurchaseOrderItemTP*PurchaseOrder=''*PurchaseOrderItem='00010'*",
            "src": "sap-icon://slim-arrow-right"
        
        }
        };
        await ui5.userInteraction.click(selector);


    });

    //absent
    it("Step 14_2: Click Apply", async function () {
        const selector = {
        "elementProperties": {
        "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
        "metadata": "sap.m.Button",
        "id": "*footerObjectPageBackTo"
        }
        };    
        await ui5.userInteraction.click(selector);
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
        util.console.log(PurchaseOrderID);
        const userData = {
            "purchaseOrder": PurchaseOrderID
        };
        browser.config.params.export.PurchaseOrder = userData;

  // use reference      

        const references = browser.config.params.import.data["references"];
        references.purchaseOrderNumber = PurchaseOrderID;
        });        

    it("Step 17: log out", async function () {
    await ui5.session.logout();

    });      
} 
});
