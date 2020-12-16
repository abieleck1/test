sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "ns/HTML5Module/model/formatter"
],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Formatter) {
        "use strict";

        return Controller.extend("ns.HTML5Module.controller.CustomerDetails", {
            formatter: Formatter,

            onInit: function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("CustomerDetails").attachPatternMatched(this._onPatternMatched, this);

            },
            _onPatternMatched: function (oEvent) {
                // var oArgs, oView;
                // oArgs = oEvent.getParameter("arguments");s
                // oView = this.getView();
                // oView.bindElement({
                //     path: "/Customers('" + oArgs.CustomerID + "')"
                // });
                this.getView().bindElement({
                    path: "/Customers('" + oEvent.getParameter("arguments").CustomerID + "')",
                    parameters: {
                        expand: "Orders, Orders/Employee"
                    }
                });
            },

            handleNavButtonPress: function () {

                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("RouteView1");
            },
            _getDialog: function () {
                if (!this._oDialog) {
                    this._oDialog = sap.ui.xmlfragment("ns.HTML5Module.view.ContactInfoDialog",this);
                    this.getView().addDependent(this._oDialog);
                }
                return this._oDialog;
            },
            onPress: function () {
                this._getDialog().open();
            },

            onCloseDialog: function () {
               this._getDialog().close();
            }
        });


    });
