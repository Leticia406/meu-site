let listaProva: string [] = []




function handleToDo(){
    let input: HTMLInputElement | null = 
    document.querySelector('#tarefa')!;

    if(input.value !== ""){
        let lista: HTMLUListElement | null =
        document.querySelector('ul')!;

        let li: HTMLLIElement = 
        document.createElement('li');
         
        let div : HTMLDivElement =
        document.createElement('div')

        let card: HTMLElement =
        document.createElement('article');

        let texto = 
        document.createTextNode(input.value);

        li.appendChild(card);
        card.appendChild(texto);
        card.appendChild(div)

        lista.appendChild(li);

        listaProva.push(input.value)

    
    }
    input.value="";
    console.log(listaProva);

    listaProva.push(input.value);
       
        input.value = "";
        console.log(listaProva);

    }
    


