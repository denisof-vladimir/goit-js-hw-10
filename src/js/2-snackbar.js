// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


const SelForm = document.querySelector('.js-form');

SelForm.addEventListener('submit', event => {
   event.preventDefault();
   
    
    const delayValue = SelForm.elements.delay.value;
    const stateValue = SelForm.elements.state.value;
     
    const promise = new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (stateValue =='fulfilled') {  resolve('Yes !!');}
            else {  reject('YOU have No !!');}
        },parseInt(delayValue));
    })
    
    promise.then(rezult =>{
        iziToast.show({
            title: 'Yes',
            color: 'red',
            position:'center',
            message: '✅ Fulfilled promise in '+delayValue+'ms'
        });
       
    })
    .catch(err =>{
        iziToast.show({
            title: 'No !!',
            color: 'red',
            position:'center',
            message: '❌ Rejected promise in '+delayValue+'ms '
        });
    })
});



