var ObjectPage = function () {

    const viewName = "sap.suite.ui.generic.template.ObjectPage.view.Details";

    // enter data field
    this.fillInFields = async function (type, metadata, id, value, index, bindingContextPath = null) {
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

            let elementProps = {
                "viewName": viewName,
                "metadata": `${metadata}`,
                "id": `*${id}*`
            };

            if(bindingContextPath != null) {
                console.log(`Pre binding: ${bindingContextPath}`);

                console.log("Index", index);
                elementProps.bindingContextPath = `${bindingContextPath}${index}'*`;
                console.log(`After binding: ${elementProps.bindingContextPath}`);

                index = 0;
            }

            const selector = {
                "elementProperties": elementProps
            };

            await ui5.userInteraction.selectComboBox(selector, value, index);
        }
        else if (type === "Item") {

            let elProps = {
                "viewName": viewName,
                "metadata": `${metadata}`,
                "value": [{
                "path": `*${id}*`
                }]
            };
            if(bindingContextPath != null) {
                console.log(`Pre binding: ${bindingContextPath}`);
                console.log("Index", index);
                elProps.bindingContextPath = `${bindingContextPath}${index}'*`;
                console.log(`After binding: ${elProps.bindingContextPath}`);
            }
            const selector = {
                "elementProperties": elProps
            };
            await ui5.userInteraction.clearAndFill(selector, value);
            await common.userInteraction.pressEnter();
        }

    };


    this.AddItem = async function (metadata, id) {

        const selector = {
            "elementProperties": {
                "viewName": viewName,
                "metadata": `${metadata}`,
                "id": `*${id}*`
            }
        };
        await ui5.userInteraction.click(selector);

    }


    this.CreateInFooter = async function (metadata, id) {

        const selector = {
            "elementProperties": {
                "viewName": viewName,
                "metadata": `${metadata}`,
                "id": `*${id}*`
            }
        };
        await ui5.userInteraction.click(selector);

    }

    this.navigateToItems = async function (metadata, id) {

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

// this.navigateToItems = async function(metadata, id) {

//     const selector = {
//         "elementProperties": {
//             "viewName": viewName,
//             "metadata": `${metadata}`,
//             "id": `*${id}*`
//         }
//     };
//     await ui5.userInteraction.click(selector);    

// };

module.exports = new ObjectPage();