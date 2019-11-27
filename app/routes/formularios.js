
module.exports = function(app){

	app.get('/formularios',function(req,res){
		app.app.controllers.formularios.formularios(app, req, res);
	});



	app.get('/formulario',function(req,res){
		app.app.controllers.formularios.formulario(app, req, res);
	});

	app.post('/busca', function(req,res){
		app.app.controllers.formularios.busca(app, req, res);

	});

	app.get('/excluir', function(req,res){
		app.app.controllers.formularios.excluir(app, req, res);
	});




}

