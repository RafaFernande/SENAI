package view;

import java.io.IOException;
import java.io.PrintWriter;

import controll.ChamadoControll;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import model.ChamadoModel;

@WebServlet("/chamados")
public class chamados extends HttpServlet {

	public void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		int id = Integer.parseInt(req.getParameter("id"));

		PrintWriter pw = resp.getWriter();
				
		ChamadoControll cc = new ChamadoControll();
		
		String data = cc.listar();
		
		pw.write(data);

	}

	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		PrintWriter pw = resp.getWriter();
		
		int id = Integer.parseInt(req.getParameter("id"));
		String data = req.getParameter("data");
		String status = req.getParameter("status");
		String responsavel = req.getParameter("responsavel");
		float valor = Float.parseFloat(req.getParameter("valor"));
		
		ChamadoModel cm = new ChamadoModel(id, data, status, responsavel, valor);
		
		ChamadoControll cc = new ChamadoControll();
		
		String ret = cc.cadastrar(cm);
		
		if(ret.equals("")) {
			resp.setStatus(400);
		}else {
			resp.setStatus(201);
		}
		
		pw.write(ret);

	}

	protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		PrintWriter pw = resp.getWriter();

		pw.write("Requisicao delete");

	}

	protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		PrintWriter pw = resp.getWriter();

		pw.write("Requisicao put");
	}

}
