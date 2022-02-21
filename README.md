# Sistema de Gerenciamento de Tarefas

Um sistema capaz de gerenciar tarefas. Produzido com o framework Angular e In Memory DB para simular o backend.

## Execução

Para executar localmente, abra um terminal e dentro do diretório do projeto, execute o comando `ng serve --open`.

## Explicação

Na página inicial do sistema encontra-se um componente com uma tabela onde são listadas as tarefas cadastradas que ainda estão em andamento e acima, outro componente que permite a pesquisa de tarefas através de seu título. Caso desejado, o usuário é capaz de marcar uma tarefa como concluída, e ainda, alterar o conteúdo da tabela para exibir as tarefas concluídas. Além disso, ainda para cada tarefa, o usuário tem a capacidade de editar ou excluir cada uma, e ainda, adicionar novas tarefas. Cada tarefa possui como seus dados: um identificador, título, descrição, responsável, nível de prioridade que varia entre alto, médio e baixo, deadline e o estado da tarefa que pode ser em andamento ou concluída.