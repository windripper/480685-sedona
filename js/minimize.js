var button=document.querySelector(".button-search-form-show"),form=document.querySelector(".search-form"),inputIn=form.querySelector(".appointment-item-in input"),inputOut=form.querySelector(".appointment-item-out input"),minusAdult=form.querySelector(".button-adults-minus"),plusAdult=form.querySelector(".button-adults-plus"),minusChild=form.querySelector(".button-children-minus"),plusChild=form.querySelector(".button-children-plus"),numAdult=form.querySelector("#search-form-adults").value,numChild=form.querySelector("#search-form-children").value;button.addEventListener("click",function(e){e.preventDefault(),form.classList.contains("search-form-show")&&(form.classList.remove("search-form-error"),form.classList.remove("search-form-show"),form.offsetWidth=form.offsetWidth,form.classList.add("search-form-show")),setTimeout(function(){form.classList.toggle("search-form-show")},300)}),form.addEventListener("submit",function(e){inputIn.value&&inputOut.value||(e.preventDefault(),form.classList.add("search-form-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&form.classList.contains("search-form-show")&&form.classList.remove("search-form-show")}),minusAdult.addEventListener("click",function(e){e.preventDefault(),0<numAdult&&(numAdult--,document.querySelector("#search-form-adults").value=numAdult)}),plusAdult.addEventListener("click",function(e){e.preventDefault(),numAdult++,document.querySelector("#search-form-adults").value=numAdult}),minusChild.addEventListener("click",function(e){e.preventDefault(),0<numChild&&(numChild--,document.querySelector("#search-form-children").value=numChild)}),plusChild.addEventListener("click",function(e){e.preventDefault(),numChild++,document.querySelector("#search-form-children").value=numChild});
