
let stateCheck = setInterval(() => {
  if (document.readyState === 'complete') {
    clearInterval(stateCheck);
    getData();
  }
}, 100);

function getData(){
	
	minAjax({
		url:"http://localhost:3000/users/nir",
		type:"POST",
		data:{
		  name:"batman",
		  profession:"detective",
		  worth:"Rich",
		  company:"Wayne Enterprises"
		},
		success: function(data){
		  alert(data);
		}
	});
};
