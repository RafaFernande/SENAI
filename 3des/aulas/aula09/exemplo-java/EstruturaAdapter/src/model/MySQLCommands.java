package model;

///* 
//* Exemplo de uma Classe DAO que n�o implementa
//* a Interface Adapter, pois possui m�todos
//* com nomes diferentes.
//* Nomes espec�ficos MySQL neste exemplo
//* */

public class MySQLCommands {
	
	public String insertMySQL() {
		return "M�todo INSERT enviado com sucesso para o SGBD MySQL";
	}

	public String updateMySQL() {
		return "M�todo INSERT enviado com sucesso para o SGBD MySQL";
	}

	public String deleteMySQL() {
		return "M�todo INSERT enviado com sucesso para o SGBD MySQL";
	}

}
