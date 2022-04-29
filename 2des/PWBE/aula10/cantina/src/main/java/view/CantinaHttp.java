package view;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.stream.Collectors;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import controller.CantinaProcess;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import model.Cantina;

@WebServlet("/clientes")
public class CantinaHttp extends HttpServlet {
	
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		PrintWriter pw = resp.getWriter();
		CantinaProcess ap = new CantinaProcess();
		JSONArray arr = ap.readAll();
		pw.write(arr.toString());	}
	
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		PrintWriter pw = resp.getWriter();		
		String body = req.getReader().lines().collect(Collectors.joining(System.lineSeparator()));
		
		try {
			JSONObject obj = new JSONObject(body);

			String nome = obj.getString("nome");
			float valor = (float) obj.getDouble("valor");
			String status = obj.getString("status");

			Cantina c = new Cantina();
			c.setNome(nome);
			c.setValor(valor);
			c.setStatus(status);

			CantinaProcess ap = new CantinaProcess();

			if (ap.create(c) == true) {
				obj.put("id", c.getId());
				pw.write(obj.toString());
			} else {
				resp.setStatus(401);
			}

		} catch (JSONException e) {
			e.printStackTrace();
		}
	}
}
