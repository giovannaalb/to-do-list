document.addEventListener('DOMContentLoaded', () => {
    let tarefa = document.getElementById('nome-da-tarefa');
    let adicionar = document.getElementById('adicionar');
    let fazer = document.querySelector('#a-fazer');
    let fazendo = document.querySelector('#fazendo');
    let concluido = document.querySelector('#concluido');

    adicionar.addEventListener('click', adicionarTarefa);

    function adicionarTarefa() {
        let texto = tarefa.value;
        if (texto == '') return;

        let item = document.createElement('li');
        item.innerText = texto;

        let botaoFazendo = document.createElement('button');
        botaoFazendo.innerText = 'Fazendo';
        botaoFazendo.addEventListener('click', () => fazendoTarefa(item));

        let apagarTarefa = document.createElement('button')
        apagarTarefa.innerText = 'Excluir'
        apagarTarefa.addEventListener('click', () => excluirTarefa(item))
        item.appendChild(apagarTarefa)

        item.appendChild(botaoFazendo);

        fazer.appendChild(item);
        tarefa.value = '';
    }

    function fazendoTarefa(task) {
        task.querySelectorAll('button').forEach(btn => btn.remove());
        fazendo.appendChild(task);

        let concluirTarefa = document.createElement('button');
        concluirTarefa.textContent = 'Concluir';
        concluirTarefa.addEventListener('click', () => tarefaFeita(task));
        task.appendChild(concluirTarefa);

        let btn = document.createElement('button')
        btn.innerText = 'Excluir'
        btn.addEventListener('click', () => excluirTarefa(task))
        task.appendChild(btn)
    }

    function tarefaFeita(task) {
        task.querySelectorAll('button').forEach(btn => btn.remove());
        concluido.appendChild(task);
    }

    function excluirTarefa(item){
        item.querySelectorAll('button').forEach(btn => item.remove());
    }
});



