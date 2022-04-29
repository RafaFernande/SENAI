package view;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.stream.Collectors;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import controller.ClienteProcess;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import model.Cliente;

@WebServlet("/clientes")
public class ClienteHttp extends HttpServlet {

	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		PrintWriter pw = resp.getWriter();
		ClienteProcess ap = new ClienteProcess();
		JSONArray arr = ap.readAll();
		pw.write(arr.toString());
	}

	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		PrintWriter pw = resp.getWriter();
		String body = req.getReader().lines().collect(Collectors.joining(System.lineSeparator()));

		try {
			JSONObject obj = new JSONObject(body);

			String nome = obj.getString("nome");
			float valor = (float) obj.getDouble("valor");
			String status = obj.getString("status");

			Cliente c = new Cliente();
			c.setNome(nome);
			c.setValor(valor);
			c.setStatus(status);

			ClienteProcess ap = new ClienteProcess();

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

	protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		PrintWriter pw = resp.getWriter();
		String body = req.getReader().lines().collect(Collectors.joining(System.lineSeparator()));
		JSONObject retJson = new JSONObject();

		try {
			JSONObject obj = new JSONObject(body);

			Cliente c = new Cliente();
			c.setId(obj.getInt("id"));
			c.setNome(obj.getString("nome"));
			c.setValor((float) obj.getDouble("valor"));
			c.setStatus(obj.getString("status"));

			ClienteProcess cp = new ClienteProcess();

			String ret = cp.update(c);

			if (ret.equals("Sucesso")) {
				pw.write(obj.toString());
			} else {
				resp.setStatus(401);
				retJson.put("err", ret);
				pw.write(retJson.toString());
			}
		} catch (JSONException e) {
			resp.setStatus(401);
			pw.write("{err:'" + e.toString() + "'}");
		}

	}

	protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		PrintWriter pw = resp.getWriter();

		String cliId = req.getParameter("id");
		int id = Integer.parseInt(cliId);
		
		ClienteProcess cp = new ClienteProcess();
		
		if(cp.delete(id) == true) {
			pw.write("{\"id\":" + id + "}");
		}else {
			resp.setStatus(401);
		}
	}
}