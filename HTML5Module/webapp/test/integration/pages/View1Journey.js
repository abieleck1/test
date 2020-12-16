sap.ui.define([
    "sap/ui/test/opaQunit",
    "./pages/View1"
], function (opaTest){
    "use strict";

    QUnit.module("Customer List Journey");

    opaTest("Should see the initial page of the app", function(Given, When, Then){

        Given.isStartMyApp();

        Then.onTheCustomersList.isShouldSeeTheCarousel();

        Then.itTeardownMyApp();
    });
});