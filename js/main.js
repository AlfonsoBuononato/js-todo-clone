/* Rifare la todo list come vista insieme a lezione:
1.popolando gli elementi della lista con JavaScript
2.inserendo un nuovo todo con un input testuale e gli eventi da tastiera
3.Rimozione todo con click su icona
4.Cliccando sul testo compare uno sbarramento a indicarne il completamento */



$(document).ready(function(){
    // 1.popolando gli elementi della lista con JavaScript
    
    var taskItem = [
        {
            text: "fare la spesa",
            completed: true,
        },
        {
            text: "pagare le bollette",
            completed: true,
        },
        {
            text: "scendere il cane",
            completed: false,
        },
        {
            text: "cucinare",
            completed: true,
        },
        {
            text: "mangiare",
            completed: true,
        },
        {
            text: "programmare",
            completed: false,
        }
    ];

    //REFERENZE
    var taskList = $(".todo-list .tasks")
    var addTask = $(".todo-list .add-task");
    var template = $(".template li");


    for(  i = 0; i < taskItem.length; i++){
        var task = taskItem[i];
        
        //template   
        var list = template.clone(); 
        list.find(".text").text(task.text);

        //validazione se la task è stata completata o meno
        if(task.completed){ 
            list.find(".text").addClass("elimina");
        }
        
        //andiamo ad aggiungere l oggetto all html.
        taskList.append(list);
    };

    // 2.inserendo un nuovo todo con un input testuale e gli eventi da tastiera
     
    addTask.keyup(function(event){
        if(event.which === 13){

            var text = addTask.val().trim();
            //validazione nel caso in cui l input dovesse contenere solo spazi vuoti
            if(text !== ""){
                var list = template.clone();
                list.find(".text").text(text);
                taskList.append(list);
                //reset del testo input
                addTask.val("")
            }
        }
    });

    // 3.Rimozione todo con click su icona
    $("body").on("click", ".tasks li i", function(){
        $(this).parent().remove();
    });

    // 4.Cliccando sul testo compare uno sbarramento a indicarne il completamento
    $("body").on("click", ".tasks .text", function(){
        $(this).toggleClass("elimina"); 
    });



    //End doc ready
})