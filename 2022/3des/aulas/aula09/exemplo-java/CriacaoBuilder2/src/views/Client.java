package views;

/*
 * Exemplo do Design Pattern de Cria��o Builder
 * https://www.youtube.com/watch?v=KbIdk5BRn0w
 * */

import models.Phone;
import models.PhoneBuilder;

public class Client {

	public static void main(String[] args) {
			
		//N�o � poss�vel criar com construtor vazio
		//Phone telefone = new Phone();		
		//Cria��o padr�o de um Objeto, com todos os par�metros preenchidos
		Phone telefone = new Phone("IOs","Intel",5,465,13);
		System.out.println(telefone);
		
		//Construtor de objeto, configurando todos os par�metros com valor padr�o
		PhoneBuilder builder = new PhoneBuilder();		
		Phone p = builder.getPhone();
		System.out.println(p);

	}

}
