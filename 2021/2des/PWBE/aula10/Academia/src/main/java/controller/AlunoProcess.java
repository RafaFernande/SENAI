package controller;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import model.Aluno;

public class AlunoProcess {

	private Connection con;
	private ResultSet rs;

	public AlunoProcess() {
		this.con = new ConnectionDB().getConnection();
	}

	public JSONArray readAll() {
		JSONArray arr = new JSONArray();
		String query = "SELECT * FROM aluno";
		try {
			PreparedStatement ps = con.prepareStatement(query);
			rs = ps.executeQuery();
			while (rs.next()) {
				JSONObject obj = new JSONObject();
				obj.put("id", rs.getInt(1));
				obj.put("nome", rs.getString(2));
				obj.put("peso", rs.getFloat(3));
				obj.put("altura", rs.getFloat(4));
				obj.put("nascimento", rs.getInt(5));
				arr.put(obj);
			}
			con.close();
		} catch (SQLException e) {
			e.printStackTrace();
		} catch (JSONException e) {
			e.printStackTrace();
		}
		return arr;
	}

	public boolean create(Aluno aluno) {
		String query = "insert into aluno values (default, ?, ?, ?, ?);";

		try {

			PreparedStatement ps = con.prepareStatement(query, Statement.RETURN_GENERATED_KEYS);

			ps.setString(1, aluno.getNome());
			ps.setFloat(2, aluno.getPeso());
			ps.setFloat(3, aluno.getAltura());
			ps.setInt(4, aluno.getNascimento());

			if (ps.executeUpdate() > 0) {
				rs = ps.getGeneratedKeys();
				rs.next();
				aluno.setId(rs.getInt(1));
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

	public String update(Aluno aluno) {

		String query = "update aluno set nome = ?, altura = ?, peso = ?, nascimento = ? where id = ?;";

		try {
			PreparedStatement ps = con.prepareStatement(query);

			ps.setString(1, aluno.getNome());
			ps.setFloat(2, aluno.getPeso());
			ps.setFloat(3, aluno.getAltura());
			ps.setInt(4, aluno.getNascimento());
			ps.setInt(5, aluno.getId());

			if (ps.executeUpdate() > 0) {
				con.close();
				return "Sucesso";
			}

			con.close();
		} catch (SQLException e) {
			return e.toString();
			//e.printStackTrace();
		}
		return "Falha ao atualizar cadastro";
	}


	public boolean delete (int id) {
		
		String query = "delete from aluno where id = ?;";
		
		try {
			PreparedStatement ps = con.prepareStatement(query);
			ps.setInt(1,  id);
			
			if(ps.executeUpdate() > 0) {
				con.close();
				return true;
			}
			con.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		return false;
	}
	
}
