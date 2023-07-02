var ListReport = function() {

const viewName = "sap.suite.ui.generic.template.ListReport.view.ListReport";

this.clickCreateFromLR = async function(type, metadata, id) {
    if (type === "button") {
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
}

module.exports = new ListReport();