function FormulariosDAO(connection){
	this._connection = connection;
}
	FormulariosDAO.prototype.getFormularios = function(callback){
		this._connection.query('select * from formularios ORDER BY data_criacao DESC', callback);
	}


	FormulariosDAO.prototype.getFormulario = function(id_formulario, callback){
	this._connection.query('select * from formularios where id_formulario = ' + id_formulario.id_formulario, callback);
    }

	FormulariosDAO.prototype.salvarFormulario = function(formulario, img_name, callback){
		this._connection.query("insert formularios set resposta1 = '" + formulario.resposta1 +"', resposta2 = '" + formulario.resposta2 + "', resposta3 = '" + formulario.resposta3 + "', resposta4 = '" + formulario.resposta4 + "',resposta5 = '" + formulario.resposta5 + "',resposta6 = '" + formulario.resposta6 + "',resposta7 = '" + formulario.resposta7 + "',resposta8 = '" + formulario.resposta8 + "',resposta9 = '" + formulario.resposta9 + "',resposta10 = '" + formulario.resposta10 + "',resposta11 = '" + formulario.resposta11 + "', imagem='" + img_name + "'", callback);
	}

	FormulariosDAO.prototype.get5UltimasFormularios = function(callback){
	this._connection.query('select * from formularios order by data_criacao ', callback);
    }

    FormulariosDAO.prototype.buscaFormularios = function(pesquisa, callback){
	this._connection.query('select * from formularios where resposta1 like ?', '%' + pesquisa + '%', callback);
    }

    FormulariosDAO.prototype.excluiFormulario = function(id_formulario, callback){
	this._connection.query('delete from formularios where id_formulario = '+ id_formulario.id_formulario, callback);
    }

    
    FormulariosDAO.prototype.mostraFormulario = function(id_formulario, callback){
	this._connection.query('select * from formularios where id_formulario = ' + id_formulario, callback);
    }
    
module.exports = function(){
return FormulariosDAO;
}
