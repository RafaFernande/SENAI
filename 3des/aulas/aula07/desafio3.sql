-- crie um gatilho que após inserir um iten no pedido atualize o valor total deste pedido,
--  coloque o nome de "tr_atualiza_valor_pedido".

insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(28,1,1, (select valor from Pizzas where pizza_id = 1));
drop trigger if exists tr_atualiza_valor_pedido;
create trigger tr_atualiza_valor_pedido after insert on itens_pedido
for each row
update pedidos set valor = (select sum(quantidade * valor) from itens_pedido where pedido_id = new.pedido_id) where pedido_id = new.pedido_id;
SHOW TRIGGERS;