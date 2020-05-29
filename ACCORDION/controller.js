let accs = document.getElementsByClassName("accordion");
for(let acc of accs)
{
	acc.addEventListener("click",function()
		{
			this.classList.toggle("active");
			let penel = this.nextElementSibling;
			if(penel.style.maxHeight)
			{
				penel.style.maxHeight = null;
			}
			else
			{
				penel.style.maxHeight = penel.scrollHeight + "px"; 
			}
		});
}

