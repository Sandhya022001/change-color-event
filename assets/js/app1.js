
 
 var cl=console.log;
 
 const  selectColor = document.getElementById("selectColor");
 
 const all =  Array.from(document.querySelectorAll(".all"));
  // const orange =  Array.from(document.querySelectorAll(".orange"));
   // const yellowgreen =  Array.from(document.querySelectorAll(".yellowgreen"));
    // const red =  Array.from(document.querySelectorAll(".red"));
	 // const blueviolet =  Array.from(document.querySelectorAll(".blueviolet"));
	 
	 const onChangeColor = (eve) => {
		 let getCOlor = "."+eve.target.value;
		 cl(getCOlor);
		 all.forEach(div => div.classList.add('d-none'));
		 
		 let getDivs = Array.from(document.querySelectorAll(getCOlor));
		 getDivs.forEach(div => div.classList.remove('d-none'));
	 }
	 
	
	 
	 
	 
	 selectColor.addEventListener('change',onChangeColor);