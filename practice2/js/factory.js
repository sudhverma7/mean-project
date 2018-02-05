app.factory("myfactory",($http,$q)=>{
var Object = {
	getJSON(JSONurl){
	var deferobject = $q.defer();
	$http.get(JSONurl).then((data)=>{
	  deferobject.resolve(data);						
  },(err)=>{
	  deferobject.reject(err);
  });
	return deferobject.promise;
	}
};
return Object;	
});