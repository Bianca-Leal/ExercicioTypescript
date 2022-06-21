
 /* EXERCÍCIOS 
 * 1- */
    interface pessoas{ 
        nome: string;
        profissao: string;
        idade: number;
        assuntosDeInteresse: string[];
    }

/* 2 - */
    const pessoa:pessoas = {

        nome:"Bianca",
        profissao: "Analista",
        idade: 26,
        assuntosDeInteresse: ["programar", "jogar", "viajar"]
    }

 /* 3 - */
    function retornarAssuntosDeInteresse (pessoa:pessoas) {

        return pessoa.assuntosDeInteresse;
    }

 /* 4 - */
    function retornarAssuntosDeInteresses(pessoa:pessoas):string[] {

        return pessoa.assuntosDeInteresse;
    }

 /* 5 - */
    enum materias {
        angular = "angular",
        typescript = "typescript",
        git = "git"
    }
 
 /* 6 - */
    interface professores {
        nome: string;
        materias: materias[];
    }

 /* 7 - */
     const nathan: professores = {
        nome: "Nathan",
        materias:[
            materias.angular,
            materias.git
        ]
    }
    const alan: professores = {
        nome: "Alan",
        materias:[
            materias.angular,
            materias.git,
            materias.typescript
        ]
    }


 /* 8 - */
    const teacher: professores[]=[
       nathan,alan
    ]

 /* 9 - */
    function nomeDosProfessores(teacher:professores[]) {

        return teacher.map(professores => professores.nome);
    }   

 /* 10 - */
    function materiasdosProfessores(professorArray: professores[]):materias[] {
    const materiasComDuplicatas = professorArray.map(professorArray => professorArray.materias).reduce<materias[]>((acumulator, materias)=> {
      return acumulator.concat(materias);
    },[])
  
    const materiasSemDuplicatasSet = new Set(materiasComDuplicatas)
    return Array.from(materiasSemDuplicatasSet);
     }

 /* 11 -*/
    function encontrePrimeiroProfessorTypescript(teachers:professores[]): professores | undefined {
        return teacher.find(professores => professores.materias.includes(materias.typescript))
    }

