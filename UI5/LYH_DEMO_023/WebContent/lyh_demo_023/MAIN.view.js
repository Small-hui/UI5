sap.ui.jsview("lyh_demo_023.MAIN", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf lyh_demo_023.MAIN
	*/ 
	getControllerName : function() {
		return "lyh_demo_023.MAIN";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf lyh_demo_023.MAIN
	*/ 
	createContent : function(oController) {
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.loadData("json/week.json");
		
		var oTable = new sap.ui.table.Table({
			title: "Comment this week",
			visibleRowCount: 7,
			firstVisibleRow: 0
		});
		
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.m.Label({text:"day"}),
			template: new sap.m.Text().bindProperty("text","we_day"),
			width: "150px"
		}));
		
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.m.Label({text:"Comment"}),
			template: new sap.m.Text().bindProperty("text","we_comment"),
			width: "300px"
		}));
		
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.m.Label({text:"Rating"}),
			template: new sap.m.RatingIndicator().bindProperty("value","we_rating"),
			width: "300px"
		}));
		
		oTable.setModel(oModel);
		oTable.bindRows("/week");
		
 		return new sap.m.Page({
			title: "JSON Model rating",
			content: [
				oTable
			]
		});
	}

});