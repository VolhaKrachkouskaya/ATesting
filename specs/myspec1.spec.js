require('dotenv').config();
var StandardZPO = require("../data/StandardZPO.json");
var ObjectPage = require("../module/ObjectPage.js");
var elementsData = require("../data/elementsData.json");
var generalData = require("../data/generalData.json");
var ListReport = require("../module/ListReport.js");

describe("create a new purchase order", function () {

    it("Step 01: Navigate to the system and open MPO app", async function () {
        await ui5.navigation.navigateToApplication(generalData.AppName)

    });


    it("Step 02: Log in", async function () {
        await ui5.session.login(process.env.USER, process.env.PASSWORD);
    });



    it("Step 03: Click Create PO", async function () {
        await ListReport.clickCreateFromLR(
            "button",
            elementsData.button.createNewPO.metadata,
            elementsData.button.createNewPO.id
        );

    });

    it("Step 04: Select Purchase Order Type: Standard Z-PO (ZNB)", async function () {
        await ObjectPage.fillInFields(
            elementsData.ComboBox.purchaseOrderType.type,
            elementsData.ComboBox.purchaseOrderType.metadata,
            elementsData.ComboBox.purchaseOrderType.id,
            StandardZPO.GeneralInformation.PurchaseOrderType
        );
    });

    it("Step 05: Choose Supplier: 50000040", async function () {
        await ObjectPage.fillInFields(
            elementsData.field.supplier.type,
            elementsData.field.supplier.metadata,
            elementsData.field.supplier.id,
            StandardZPO.GeneralInformation.Supplier
        );

    });

    it("Step 06: Choose Currency: EUR", async function () {

        await ObjectPage.fillInFields(
            elementsData.field.currency.type,
            elementsData.field.currency.metadata,
            elementsData.field.currency.id,
            StandardZPO.GeneralInformation.Currency
        );

    });

    it("Step 07: Choose Purchasing Group: 001", async function () {
        await ObjectPage.fillInFields(
            elementsData.field.purchasingGroup.type,
            elementsData.field.purchasingGroup.metadata,
            elementsData.field.purchasingGroup.id,
            StandardZPO.GeneralInformation.PurchasingGroup
        );

    });

    it("Step 08: Choose Purchasing Organization: 1010", async function () {
        await ObjectPage.fillInFields(
            elementsData.field.purchasingOrganization.type,
            elementsData.field.purchasingOrganization.metadata,
            elementsData.field.purchasingOrganization.id,
            StandardZPO.GeneralInformation.PurchasingOrganization
        );

    });

    it("Step 09: Choose Company Code: 1010", async function () {
        await ObjectPage.fillInFields(
            elementsData.field.companyCode.type,
            elementsData.field.companyCode.metadata,
            elementsData.field.companyCode.id,
            StandardZPO.GeneralInformation.CompanyCode
        );
        // await common.userInteraction.pressEnter();

    });

    it("Step 10: Navigate to the Items", async function () {
        await ObjectPage.navigateToItems(
            elementsData.button.navigate.metadata,
            elementsData.button.navigate.id
        );
    });

    var ItemArr = StandardZPO.Items
    for (let [ItemIndex, itemValue] of ItemArr.entries()) {


        it("Item" + itemValue.Item + "Add item - Click Create item", async function () {
            await ObjectPage.AddItem(
                elementsData.button.createNewItem.metadata,
                elementsData.button.createNewItem.id
            );
            await new Promise(r => setTimeout(r, 2000));
        });

        it("Item" + itemValue.Item + "Select Item Category" + itemValue.ItemCategory, async function () {
            await ObjectPage.fillInFields(
                elementsData.ComboBox.itemCategory.type,
                elementsData.ComboBox.itemCategory.metadata,
                elementsData.ComboBox.itemCategory.path,
                itemValue.ItemCategory,
                itemValue.Item,
                elementsData.ComboBox.itemCategory.bindingContextPath
            );
        });

        it("Item" + itemValue.Item + "Fill in Material" + itemValue.Material, async function () {
            await ObjectPage.fillInFields(
                elementsData.field.itemMaterial.type,
                elementsData.field.itemMaterial.metadata,
                elementsData.field.itemMaterial.path,
                itemValue.Material,
                itemValue.Item,
                elementsData.field.itemMaterial.bindingContextPath
            );

            await new Promise(r => setTimeout(r, 2000));
            await common.userInteraction.pressEnter();
            await new Promise(r => setTimeout(r, 5000));
        });


        it("Item" + itemValue.Item + "Enter Plant" + itemValue.Plant, async function () {
            await ObjectPage.fillInFields(
                elementsData.field.plant.type,
                elementsData.field.plant.metadata,
                elementsData.field.plant.path,
                itemValue.Plant,
                itemValue.Item,
                elementsData.field.plant.bindingContextPath
            );
            await new Promise(r => setTimeout(r, 2000));
        });

        it("Item" + itemValue.Item + "Enter Order Quantity" + itemValue.OrderQuantity, async function () {
            await ObjectPage.fillInFields(
                elementsData.field.itemQuantity.type,
                elementsData.field.itemQuantity.metadata,
                elementsData.field.itemQuantity.path,
                itemValue.OrderQuantity,
                itemValue.Item,
                elementsData.field.itemQuantity.bindingContextPath
            );
            await new Promise(r => setTimeout(r, 2000));
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
    }


    it("Step 15: Click Create in footer", async function () {
        await ObjectPage.CreateInFooter(elementsData.button.createPOinFooter.metadata, elementsData.button.createPOinFooter.id);

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

});
