sap.ui.define([
		"sap/ui/core/mvc/Controller"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller) {
		"use strict";

		return Controller.extend("ns.HTML5Module.controller.CustomerController", {
			onInit: function () {

            },
            createCustomer: function(){
                debugger
                var sId = this.byId("CustomerID").getValue();
                var sName = this.byId("CustomerName").getValue();
                this.getView().getModel().create("/Customers",{
                    CustomerID: sId,
                    CompanyName: sName
                })

            }
		});
	});
