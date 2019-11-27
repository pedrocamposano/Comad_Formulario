module.exports.formulario_inclusao_formulario = function(app, req, res){
			res.render('admin/form_add_formulario', {validacao:{}, formulario:{}});
}

module.exports.formularios_salvar = function(app, req, res){
		var formulario = req.body;

		req.assert('', 'Título é obrigatório').notEmpty();
		req.assert('', 'Resumo é obrigatório').notEmpty();
		req.assert('', 'Resumo deve conter entre 10 e 100 caracteres').len(10,100);
		req.assert('','Autor é obrigatório').notEmpty();
		req.assert('', 'Data é obrigatório').notEmpty();
		req.assert('', 'Notícia é obrigatório').notEmpty();


		var erros = req.validationErrors();	
		if (erros){
			console.log(erros);
			res.render("admin/form_add_formulario",{validacao: erros, formulario: formulario});
			// faz voltar à pagina de inclusão de 
			return; //o return faz com que não continue o processo seguinte
		}



		
		var file = req.files.uploaded_image;


		var img_name=file.name; 



		file.mv('app/public/images/upload_images/'+img_name, function(err){

			    var connection = app.config.dbConnection();
		        var formulariosModel= new app.app.models.FormulariosDAO(connection);
				formulariosModel.salvarFormulario(formulario, img_name, function(error, result){
				res.redirect('admin/form_add_formulario');
		        });


		});

		
}


