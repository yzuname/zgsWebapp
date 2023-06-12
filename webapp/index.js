sap.ui.define([
        "sap/ui/core/ComponentContainer"
    ], function (ComponentContainer) {
        "use strict";

        new ComponentContainer({
            name: "zgsWebapp",
            settings: { id: "zgsWebapp" },
            async: true
        }).placeAt("content");
});