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

console.log(listaMammiferi);