sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "ns/HTML5Module/model/formatter"
],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Formatter) {
        "use strict";

        return Controller.extend("ns.HTML5Module.controller.Performance", {
            formatter: Formatter,


            onInit: function () {

            },
            handleNavButtonPress: function () {

                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("RouteView1");
            },

            onMotivate: function (oEvent) {
                var oSource = oEvent.getSource();
                $.ajax({
                    url: "/Evilinsult/generate_insult.php",
                    data: {
                        lang: "en",
                        type: "json"
                    },

                    success: function (oResponse) {
                        debugger
                        var oEmployee = oSource.getBindingContext().getObject();
                        var sEmail = oEmployee.FirstName + "." + oEmployee.LastName + "@aniatest.com";
                        var sSubject = "Good job!";
                        var sBody = oResponse.insult;
                        sap.m.URLHelper.triggerEmail(sEmail, sSubject, sBody);
                    }
                })
            }
        });
    });
