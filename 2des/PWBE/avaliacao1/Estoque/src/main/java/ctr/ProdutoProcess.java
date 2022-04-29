package ctr;

import java.util.ArrayList;

import vo.Produto;
import vo.dao.ProdutoDAO;

public class ProdutoProcess {

	public static ArrayList<Produto> produtos;
	public static ProdutoDAO ld = new ProdutoDAO();
	
	public static void testes() {
		
	}
	
	public static void abrir() {
		produtos = ld.ler();
	}
	
	public static void salvar() {
		ld.escrever(produtos);
	}
	
}