package model;

///* 
//* Esta � a implementa��o do Pattern Adapter
//* Para que os m�todos do MySQL tamb�m
//* Possam chamar-se de insert, update e delete
//* Assim como no OracleCommands
//* */

public class MySQLAdapter implements DbAdapter {

	//Atributo do tipo MySQLCommands
	private MySQLCommands mysql;

	//Construtor
	public MySQLAdapter(MySQLCommands mysql) {
		this.mysql = mysql;
	}

	@Override
	public String insert() {
		return mysql.insertMySQL();
	}

	@Override
	public String update() {
		return mysql.updateMySQL();
	}

	@Override
	public String delete() {
		return mysql.deleteMySQL();
	}

}
