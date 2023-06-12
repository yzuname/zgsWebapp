/*Global QUnit*/

sap.ui.define([
    "zgsWebapp/model/formatter",
    "sap/ui/model/resource/ResourceModel"
], function (formatter, ResourceModel) {
    "use strict";

    QUnit.module("Formatting functions", {
        beforeEach: function () {
            this._oResourceModule = new ResourceModel({
                bundleUrl: sap.ui.require.toUrl("zgsWebapp") + "/i18n/i18n_en.properties"                
            });
            console.log(this._oResourceModule);
        },
        afterEach: function () {
            this._oResourceModule.destroy();
        }
    });

    QUnit.test("Should return the translated texts", function (assert) {
        alert("Hello from unit test");

        var oModel = this.stub();
        oModel.withArgs("i18n").returns(this._oResourceModule);

        var oViewStub = {
            getModel: oModel
        };

        var oControllerStub = {
            getView: this.stub().returns(oViewStub),
            getOwnerComponent: this.stub().returns(oViewStub)
        };

        console.log(formatter);
        console.log(formatter.statusText);

        var fnIsolatedFormatter = formatter.statusText.bind(oControllerStub);

        console.log(fnIsolatedFormatter("A"));

        assert.strictEqual(fnIsolatedFormatter("A"), "New", "The long text for status A is correct");
        assert.strictEqual(fnIsolatedFormatter("B"), "In progress", "The long text for status B is correct");
        assert.strictEqual(fnIsolatedFormatter("C"), "Done", "The long text for status C is correct");
        assert.strictEqual(fnIsolatedFormatter("Foo"), "Foo", "The long text for status A is correct");

    });
});