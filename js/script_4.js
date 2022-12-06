const animali = [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' }, 
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
    { nome: 'orso', famiglia: 'orsidi', classe: 'mammiferi' },
    { nome: 'tigre', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'aquila', famiglia: 'uccelidi', classe: 'uccelli' },
    { nome: 'ragno', famiglia: 'ragnidi', classe: 'insetti' },
    { nome: 'serpente', famiglia: 'serpentidi', classe: 'rettili' },
    { nome: 'lontra', famiglia: 'lontridi', classe: 'pesci' }
]

const listaMammiferi = animali.filter((tipo) => {
    if (tipo.classe === 'mammiferi'){
        return true;
    }
    else{
        return false;
    }
});

const nameToUppercase = animali.map((name) => {
    return name.nome.charAt(0) + name.nome.substring(1).toUpperCase()
});

console.log(nameToUppercase)

console.log(listaMammiferi);
