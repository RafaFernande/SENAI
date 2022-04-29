package model;

///* 
//* Exemplo de uma Classe DAO qie implementa a Interface Adapter
//* para executar comandos CRUD no SGBD Oracle
//* */

public class OracleCommands implements DbAdapter {

	@Override
	public String insert() {
		return "M�todo INSERT enviado com sucesso para o SGBD oracle";
	}

	@Override
	public String update() {
		return "M�todo UPDATE enviado com sucesso para o SGBD oracle";
	}

	@Override
	public String delete() {
		return "M�todo DELETE enviado com sucesso para o SGBD oracle";
	}

}
