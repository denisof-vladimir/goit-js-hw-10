import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as o}from"./assets/vendor-BbbuE1sJ.js";const s=document.querySelector(".js-form");s.addEventListener("submit",i=>{i.preventDefault();const e=s.elements.delay.value,r=s.elements.state.value;new Promise((t,l)=>{setTimeout(()=>{r=="fulfilled"?t("Yes !!"):l("YOU have No !!")},parseInt(e))}).then(t=>{o.show({title:"Yes",color:"red",position:"center",message:"✅ Fulfilled promise in "+e+"ms"})}).catch(t=>{o.show({title:"No !!",color:"red",position:"center",message:"❌ Rejected promise in "+e+"ms "})})});
//# sourceMappingURL=2-snackbar.js.map
