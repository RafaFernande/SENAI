package view;

///* 
//* Exemplo de uma Cliente que implementa os
//* Objetos que v�o efetivamente utilizar os
//* recursos de CRUD nos dois SGBDs
//* https://www.youtube.com/watch?v=5AiiHFizQWY
//* */

import javax.swing.JOptionPane;

import model.MySQLAdapter;
import model.MySQLCommands;
import model.OracleCommands;

public class Client {

	static OracleCommands oracle;
	static MySQLAdapter mysql;

	public static void main(String[] args) {
		
		//Utiliza��o direta, sem o Patter Adapter
		oracle = new OracleCommands();
		JOptionPane.showMessageDialog(null, oracle.insert());
		
		//Utiliza��o com o Patter Adapter, MySQLAdapter
		mysql = new MySQLAdapter(new MySQLCommands());
		JOptionPane.showMessageDialog(null, mysql.insert());
	}

}
