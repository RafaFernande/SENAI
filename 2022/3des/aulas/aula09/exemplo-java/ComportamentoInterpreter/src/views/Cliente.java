package views;

import javax.swing.JFrame;
import javax.swing.JOptionPane;

import controlls.Conversao;
import models.*;

/*
 * Design Patterns Comportamental Interpreter
 * pouco utilizado, somente em casos espec�ficos
 * onda interpreta��o ou convers�o de tipos de dados
 * se faz necess�ria
 * Este exemplo converte gal�es americanos de gasolina
 * em litros, copos e MLs:
 * https://www.youtube.com/watch?v=6CVymSJQuJE
 *
 * */

public class Cliente {

	private static JFrame tela;
	private static Conversao frase;
	private static Contexto contexto;
	private static String de;
	private static String para;
	private static String resultado;
	private static double quantidade;

	public static String getConversao(String para, Contexto con) {
		switch (para) {
		case "galoes":
			return con.galoes(quantidade);
		case "litros":
			return con.litros(quantidade);
		case "copos":
			return con.copos(quantidade);
		case "mls":
			return con.mls(quantidade);
		default:
			return null;
		}
	}

	public static void main(String[] args) {

		tela = new JFrame();
		tela.setBounds(100,100,640,480);
		tela.setLayout(null);
		tela.setTitle("Convers�o de volumes");
		tela.setVisible(true);
		frase = new Conversao(
				JOptionPane.showInputDialog(tela, "Digite uma frase para conversao ex: 2 galoes em litros"));
		de = frase.getDe();
		para = frase.getPara();
		quantidade = frase.getQuantidade();

		switch (de) {
		case "Galoes":
			contexto = new Galoes();
			resultado = getConversao(para, contexto);
			break;
		case "Litros":
			contexto = new Litros();
			resultado = getConversao(para, contexto);
			break;
		case "Copos":
			contexto = new Copos();
			resultado = getConversao(para, contexto);
			break;
		case "Mls":
			contexto = new Mls();
			resultado = getConversao(para, contexto);
			break;
		default:
			resultado = "Frase inv�lida.";
			break;
		}

		JOptionPane.showMessageDialog(tela, frase.getResposta() + resultado + " " + para);
		tela.dispose();
	}

}
