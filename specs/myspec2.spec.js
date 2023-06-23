require('dotenv').config();
describe("find created purchase order", function () {

    it("Step 01: Navigate to the system and open MPO app", async function () {
    await ui5.navigation.navigateToApplication("PurchaseOrder-manage")
});

    it("Step 02: Log in", async function () {
    await ui5.session.login(process.env.USER, process.env.PASSWORD);
   });

    it("Step 03: Enter Purchase Order in the PO field", async function () {
    const selector = {
        "elementProperties": {
        "viewName": "sap.suite.ui.generic.template.ListReport.view.ListReport",
        "metadata": "sap.ui.comp.smartfilterbar.SFBMultiInput",
        "id": "*listReportFilter-filterItemControl_BASIC-PurchaseOrder"
        }
        };    
             
        const references = browser.config.params.import.data["references"];
        common.assertion.expectDefined(references);
        await common.assertion.expectDefined(references.purchaseOrderNumber);
        const POnumber = references.purchaseOrderNumber;
        util.console.log(references.purchaseOrderNumber);
        await ui5.userInteraction.clearAndFill(selector, POnumber);
        
    });

    it("Step 04: Click Go to check the PO", async function () {
        const selector = {
        "elementProperties": {
            "viewName": "sap.suite.ui.generic.template.ListReport.view.ListReport",
            "metadata": "sap.m.Button",
            "id": "*listReportFilter-btnGo"
        }
        };    
        await ui5.userInteraction.click(selector);
    });

        it("Step 05: Open created PO", async function () {
        const references = browser.config.params.import.data["references"];
        common.assertion.expectDefined(references);
        await common.assertion.expectDefined(references.purchaseOrderNumber);

        const selector = {
        "elementProperties": {
            "viewName": "sap.suite.ui.generic.template.ListReport.view.ListReport",
            "metadata": "sap.ui.core.Icon",
            "bindingContextPath": `*${references.purchaseOrderNumber}*`
        }
        };    
        await ui5.userInteraction.click(selector);
    });

  it("Step 06: Compare the PO number", async function () {
        const selector = {
        "elementProperties": {
        "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
        "metadata": "sap.m.Title",
        "id": "*template::ObjectPage::ObjectPageDynamicHeaderTitle"
        }
        };    
    
     
// use reference
        const references = browser.config.params.import.data["references"];
        common.assertion.expectDefined(references);
        await common.assertion.expectDefined(references.purchaseOrderNumber);
        await ui5.assertion.expectAttributeToBe(selector,"text", references.purchaseOrderNumber);
        
        });  

        it("Step 07: log out", async function () {
            await ui5.session.logout();
    
        });  
});