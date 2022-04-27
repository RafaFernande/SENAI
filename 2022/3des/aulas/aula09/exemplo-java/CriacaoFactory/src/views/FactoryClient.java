package views;

import models.OSFactory;
import models.SistemaOperacional;

///* 
//* Exemplo do Design Pattern de Cria��o Factory
//* https://www.youtube.com/watch?v=pt1IbV1aSZ4
//* Exemplo com JavaScript por Filipe Deschamps
//* https://www.youtube.com/watch?v=arAz2Ff8s88
//* */

public class FactoryClient {

	//Classe que garante a cria��o do objeto de acordo com o par�metro escolhido
	private static OSFactory osf = new OSFactory(); 	
	
	public static void main(String[] args) {
		
		SistemaOperacional os;
		
		//Apenas um objeto pode ter comportamento das tr�s classes
		os = osf.getInstance("Aberto");
		System.out.println(os.getTipo());
		os = osf.getInstance("Fechado");
		System.out.println(os.getTipo());
		os = osf.getInstance("Outro");
		System.out.println(os.getTipo());
		
		//Utilizando o Factory alocamos mem�ria para apenas um objeto

	}

}
