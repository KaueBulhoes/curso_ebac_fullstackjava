let listaAlunos = [
    { nome: 'João', nota: 7 },
    { nome: 'Maria', nota: 5 },
    { nome: 'Pedro', nota: 8 },
    { nome: 'Ana', nota: 6 },
    { nome: 'Carlos', nota: 4 }
];

function filtrarlistaAlunosPorNota(arraylistaAlunos, notaMinima) {
    let listaAlunosFiltrados = arraylistaAlunos.filter(aluno => aluno.nota >= notaMinima);
    return listaAlunosFiltrados;
}

let listaAlunosAprovados = filtrarlistaAlunosPorNota(listaAlunos, 6);
console.log(listaAlunosAprovados);