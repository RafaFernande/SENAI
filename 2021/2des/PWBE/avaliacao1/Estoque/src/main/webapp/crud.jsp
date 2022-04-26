<%@page import="vo.Produto"%>
<%@page import="ctr.ProdutoProcess"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Estoque</title>
</head>
<body>
	<%
	String id = request.getParameter("id");
	String nome = request.getParameter("nome");
	String descricao = request.getParameter("descricao");
	String valor = request.getParameter("valor");
	String quantidade = request.getParameter("quantidade");
	ProdutoProcess.abrir();
	%>
	<form>
		<label>Id</label><input type="number" name="id" required/>
		<label>Nome</label><input type="text" name="nome" required/>
		<label>Decrição</label><input type="text"	name="descricao" required/>
		<label>Valor</label><input type="number" step="any" name="valor" required/>
		<label>Quantidade</label><input type="number" name="quantidade" required/>
		<button type="submit">Cadastrar produto</button>
	</form>
	<div class="msg">
		<%
		if (id != null && nome != null && descricao != null && valor != null && quantidade != null) {
			Produto produto = new Produto(id, nome, descricao, valor, quantidade); 
			if(ProdutoProcess.produtos.contains(produto)){ 
				out.print("Id já existente"); 
			}else{
				ProdutoProcess.produtos.add(produto); 
				ProdutoProcess.salvar();
				response.sendRedirect("crud.jsp");
			}
		} else {
			if(id != null){
				ProdutoProcess.produtos.remove(new Produto(id)); 
				ProdutoProcess.salvar();
				response.sendRedirect("crud.jsp");
			}else{
				out.print("Aguardando requisições");
			}
		}
		%>
	</div>
	<table>
		<tr>
			<th>Id</th>
			<th>Nome</th>
			<th>Descrição</th>
			<th>Valor</th>
			<th>Quantidade</th>
			<th>Ações</th>
		</tr>
		<%
		//Listar todos
		for (Produto l : ProdutoProcess.produtos) {
			out.print("<tr>");
			out.print("<form>");
			out.print(l.toHTML());
			out.print("<td>");
			out.print("<input type='hidden' name='id' value='"+l.getId()+"'/>");
			out.print("<button type='submit'>Del</button>");
			out.print("</td>");
			out.print("</form>");
			out.print("</tr>");
		}