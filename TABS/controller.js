function openCity(event, name)
{
	//ẩn content đang được hiện
	let contents = document.getElementsByClassName("content");
	for(let content of contents)
	{
		content.style.display = "none";
	}
	let tabs = document.getElementsByClassName("tablink");
	for(let tab of tabs)
	{
		// tab.className = tab.className.replace(" active","");
		tab.classList.remove("active");
	}
	
	//hiện content có id được click
	document.getElementById(name).style.display = "block";

	//in đậm button vừa được click
	//event.currentTarget.className += " active"; 
	event.currentTarget.classList.add("active");

}