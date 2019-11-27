
module.exports.formularios = function(app, req, res){

	var connection = app.config.dbConnection();
	var formulariosModel = new app.app.models.FormulariosDAO(connection);
	
	formulariosModel.getFormularios(function(error, result){
		res.render('formularios/formularios',{formularios:result});
	});
		
}

module.exports.formulario = function(app, req, res){
	  
	   var connection = app.config.dbConnection();
	   var formulariosModel = new app.app.models.FormulariosDAO(connection);

	   if (req.query.id_formulario){
	   		   var id_formulario = req.query; //id recebe o parâmetro enviado pelas views,
	         //que contém o id da  a ser exibida
	   } else{
	   		res.redirect('/formularios');
	  	 	return;
	   }


	   formulariosModel.getFormulario(id_formulario,function(error, result){
	       res.render('formularios/formulario',{formulario:result});
		});

}

module.exports.busca = function(app, req, res){
	var pesquisa = req.body.pesquisa;
	var connection = app.config.dbConnection();
	var formulariosModel = new app.app.models.FormulariosDAO(connection);

	formulariosModel.buscaFormularios(pesquisa, function(error, result){
		res.render('formularios/formularios',{ formularios : result });
		
	});
}

module.exports.excluir = function(app,req,res){
	var pesquisa = req.body.pesquisa;
	var connection = app.config.dbConnection();
	var formulariosModel = new app.app.models.FormulariosDAO(connection);

	if (req.query.id_formulario){
		var id_formulario = req.query;
	}
	else{
		res.redirect('/formularios');
		return;
	}
	formulariosModel.excluiFormulario(id_formulario, function (error, result){
		res.redirect('/formularios');
	});
}



	
		