import '../css/03-feedback.css';
import '../css/common.css'
import throttle from 'lodash.throttle';
// import { localecompare } from 'caniuse-lite/data/features';



const STORAGE_KEY = "feedback-form-state";
const formRef = document.querySelector('form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');

const formData = {};

inputFromLocalstorage();


formRef.addEventListener('input', throttle(listenInput,500));

function listenInput(evt){
    formData[evt.target.name] = evt.target.value;
    const stringifiedData = JSON.stringify(formData);
    localStorage.setItem(STORAGE_KEY, stringifiedData);
}

function inputFromLocalstorage(){
    const sthDecent = JSON.parse(localStorage.getItem(STORAGE_KEY));
        if(sthDecent===null){
            return;
        }else{
            message.value = sthDecent['message'];
            email.value = sthDecent['email'];
        }
}


formRef.addEventListener('submit',(evt)=>{
    evt.preventDefault();
    evt.currentTarget.reset();
    const properObj = JSON.parse(localStorage.getItem(STORAGE_KEY));
    console.log(properObj);
    localStorage.removeItem(STORAGE_KEY);

})

