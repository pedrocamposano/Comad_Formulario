module.exports = function(app){
	app.get('/formulario_inclusao_formulario', function(req,res){
		app.app.controllers.admin.formulario_inclusao_formulario(app,req,res);
	});

	app.post('/formularios/salvar', function(req,res){
		app.app.controllers.admin.formularios_salvar(app,req,res);
	});

	
}