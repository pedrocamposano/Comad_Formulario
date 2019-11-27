module.exports.index = function(app, req, res){

	var connection = app.config.dbConnection();
	var formulariosModel = new app.app.models.FormulariosDAO(connection);


	formulariosModel.get5UltimasFormularios(function(error, result){


		res.render("home/index", {formularios: result});
	});
	
}