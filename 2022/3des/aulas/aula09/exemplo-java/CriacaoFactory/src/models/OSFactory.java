	package models;

public class OSFactory {

	//Metodo que define a cria��o do objeto a partir do par�metro tipo
	public SistemaOperacional getInstance(String tipo) {
		//Dependendo do tipo informado o objeto assumir� uma classe
		if (tipo.equals("Aberto")) {
			return new Android();
		} else if (tipo.equals("Fechado")) {
			return new IOS();
		} else {
			return new Windows();
		}
	}
}
