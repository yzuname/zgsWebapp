sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel"
], function (UIComponent, JSONModel) {
    "use strict";

    return UIComponent.extend("zgsWebapp.Component", {
            metadata: {
                "interfaces": ["sap.ui.core.IAsyncContentCreation"],
                "manifest": "json"
            },  
            init: function () {
                //Call the init function of the parent
                UIComponent.prototype.init.apply(this, arguments);
                //Set data model
                var oData = {
                    recipient: {
                        name: "World"
                    }
                };
                var oModel = new JSONModel(oData);
                this.setModel(oModel);

                this.getRouter().initialize(); //create the views based on the url/hash
        }
    });
});