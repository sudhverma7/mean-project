app.controller("myctrl",function($scope, myfactory, aboutCompanyURL){
	var Promise = myfactory.getJSON(aboutCompanyURL);
	Promise.then((data)=>{
				 var aboutcompanydata = data;
				 $scope.results = aboutcompanydata.data;
				 },(err)=>{
		console.log("error in controller");
	});
});