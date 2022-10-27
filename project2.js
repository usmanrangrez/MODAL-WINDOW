'use strict'

// Using classList is a convenient alternative to accessing an element's list of classes as a space-delimited string via element.className.

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

for(let i=0;i<btnsOpenModal.length;i++)
{
    btnsOpenModal[i].addEventListener('click',Open_function);
}

function Open_function()
{
        //Better way..

        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');

        //OR

        // modal.style.display='block';            //if you write then => same COMBO
        // overlay.style.display='block';
}

btnCloseModal.addEventListener('click',Close_function);
overlay.addEventListener('click',Close_function);

function Close_function()
{
    //Better way..


    modal.classList.add('hidden');
    overlay.classList.add('hidden');


    //OR

    // modal.style.display='none';              //if you write then => same COMBO
    // overlay.style.display='none'; 
}


//USING ESC-KEY TO CLOSE MODAL.

//Keyboard events are class as global events.
//The parameter e that you are asking about is an Event object, and it represents the event being fired which caused your function to be executed. It doesnt really have to be e, you can name it anything you want just like all other function parameters.


document.addEventListener('keydown',esc_func);

function esc_func(e)
{
    if(e.key=== 'Escape')
    {
        //SIMPLY
        // modal.classList.add('hidden');
        // overlay.classList.add('hidden');
        
        //OR
        if(!modal.classList.contains('hidden'))
        {
            Close_function();
        }
    }
}