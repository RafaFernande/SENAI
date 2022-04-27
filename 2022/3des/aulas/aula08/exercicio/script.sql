-- escreva um select para mostrar o nome do funcionario que mais fez solicitações (em Reais).
-- Então, você deverá mostrar o nome do funcionario e seu respectivo valor total, e Reais.

create view vw_solicitacoes as
select sol.num_sol, sol.cod_func, itens.cod_produto, itens.qtde, itens.valor
from solicitacao sol inner join itenssolicitacao itens on sol.num_sol = itens.num_sol
order by valor desc;
select nome_func from funcionarios where cod_func = (select cod_func from vw_solicitacoes limit 1);