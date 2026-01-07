const alunos = [
    {nome: 'Joao', nota: 8},
    {nome: 'Maria', nota: 10},
    {nome: 'Eduardo', nota: 3},
    {nome: 'Gabriel', nota: 3},
    {nome: 'Ana', nota: 5},
    {nome: 'Amanda', nota: 10}
]

const Aprovados = alunos.filter(aprovados => aprovados.nota >= 6)
const Reprovados = alunos.filter(reprovados => reprovados.nota <= 6)

Aprovados.forEach(alunos => console.log(`${alunos.nome} foi aprovado(a)`))
Reprovados.forEach(alunos => console.log(`${alunos.nome} foi reprovado(a)`))