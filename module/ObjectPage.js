var ObjectPage = function() {

    const viewName = "sap.suite.ui.generic.template.ObjectPage.view.Details";

    // enter data field
    this.fillInFields = async function(type, metadata, id, value, index) {
            if (type === "ID") {
                const selector = {
                    "elementProperties": {
                        "viewName": viewName,
                        "metadata": `${metadata}`,
                        "id": `*${id}*`
                    }
                };
                await ui5.userInteraction.clearAndFill(selector, value, index);
                await common.userInteraction.pressEnter();

            }
            else if (type === "ComboBox") {
                const selector = {
                    "elementProperties": {
                        "viewName": viewName,
                        "metadata": `${metadata}`,
                        "id": `*${id}*`
             }
            };
                await ui5.userInteraction.selectComboBox(selector, value, index);      
}
            else if (type === "Item") {
            const selector = {
            "elementProperties": {
            "viewName": viewName,
            "metadata": `${metadata}`,
            "bindingContextPath": "/C_PurchaseOrderItemTP*PurchaseOrder=''*PurchaseOrderItem='${index}'*",
            "value": [{
            "path": `*${id}*`
        }]        
    }
};
            await ui5.userInteraction.clearAndFill(selector, value);      
}

}; 


this.AddItem = async function(metadata, id) {
  
        const selector = {
            "elementProperties": {
                "viewName": viewName,
                "metadata": `${metadata}`,
                "id": `*${id}*`
            }
        };
        await ui5.userInteraction.click(selector);    

}
};

this.navigateToItems = async function(metadata, id) {
  
    const selector = {
        "elementProperties": {
            "viewName": viewName,
            "metadata": `${metadata}`,
            "id": `*${id}*`
        }
    };
    await ui5.userInteraction.click(selector);    

};

    module.exports = new ObjectPage();