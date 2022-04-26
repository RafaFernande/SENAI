package controller;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import org.json.JSONArray;
import org.json.JSONObject;

import model.Cliente;

public class ClienteProcess {

	private Connection con;
	private ResultSet rs;

	public ClienteProcess() {
		this.con = new ConnectionDB().getConnection();
	}

	public JSONArray readAll() {
		JSONArray arr = new JSONArray();
		String query = "select * from clientes;";
		try {
			PreparedStatement ps = con.prepareStatement(query);
			rs = ps.executeQuery();
			while (rs.next()) {
				JSONObject obj = new JSONObject();
				obj.put("id", rs.getInt(1));
				obj.put("nome", rs.getString(2));
				obj.put("valor", rs.getFloat(3));
				obj.put("status", rs.getString(4));
				arr.put(obj);
			}
			con.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}

		return arr;

	}

	public boolean create(Cliente cliente) {
		String query = "insert into clientes values(default, ?, ?, ?);";

		try {
			PreparedStatement ps = con.prepareStatement(query, Statement.RETURN_GENERATED_KEYS);

			ps.setString(1, cliente.getNome());
			ps.setFloat(2, cliente.getValor());
			ps.setString(3, cliente.getStatus());

			if (ps.executeUpdate() > 0) {
				rs = ps.getGeneratedKeys();
				rs.next();
				cliente.setId(rs.getInt(1));
				con.close();
				return true;
			} else {
				con.close();
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return false;
	}

	public String update(Cliente cliente) {

		String query = "update clientes set nome = ?, valor = ?, status = ? where id = ?;";

		try {
			PreparedStatement ps = con.prepareStatement(query);

			ps.setString(1, cliente.getNome());
			ps.setFloat(2, cliente.getValor());
			ps.setString(3, cliente.getStatus());
			ps.setInt(4, cliente.getId());

			if (ps.executeUpdate() > 0) {
				con.close();
				return "Atualizado com sucesso";
			}
			con.close();
		} catch (SQLException e) {
			return e.toString();
		}
		return "Falha ao atualizar";
	}

	public boolean delete (int id) {
		
		String query = "delete from clientes where id= ?;";
		
		try {
			PreparedStatement ps = con.prepareStatement(query);
			ps.setInt(1, id);
			
			if(ps.executeUpdate() > 0) {
				con.close();
				return true;
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return false;
	}
	
}