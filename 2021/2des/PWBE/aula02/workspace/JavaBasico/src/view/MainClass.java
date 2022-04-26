package view;

import java.awt.Color;

import javax.swing.JFrame;
import javax.swing.JPanel;

public class MainClass extends JFrame{

	private static final long serialVersionUID = 1L;
	private JPanel panel;
	
	MainClass(){
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		setTitle("Aplica��o Desktop com JFrame");
		setBounds(100, 100, 950, 660);
		panel = new JPanel();
		panel.setBackground(Color.WHITE);
		setContentPane(panel);
		setLayout(null);
	}
	
	public static void main(String[] args) {
		new MainClass().setVisible(true);
	}

}
