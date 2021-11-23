const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];
console.log(icons);

let codeHTML = "";
let menu = document.getElementById('tipi_icone');
let menuIndex = menu.selectedIndex;

if(menu.options[menuIndex].text == "All"){
	icons.forEach((element) => {
		codeHTML += `
		<div class="icon icon-show">
			<i class="${element.family} ${element.prefix}${element.name} ${element.type}"></i>
			<span class="icon-name">${element.name}</span>
		</div>
		`
	});
}
if(menu.options[menuIndex].text == "Animal"){
	for(let i = 0; i < icons.length; i++){
		if(icons[i].type == "animal"){
			codeHTML += `
			<div class="icon icon-show">
				<i class="${icons[i].family} ${icons[i].prefix}${icons[i].name} ${icons[i].type}"></i>
				<span class="icon-name">${icons[i].name}</span>
			</div>
			`
		}
	}
}
if(menu.options[menuIndex].text == "Vegetable"){
	for(let i = 0; i < icons.length; i++){
		if(icons[i].type == "vegetable"){
			codeHTML += `
			<div class="icon icon-show">
				<i class="${icons[i].family} ${icons[i].prefix}${icons[i].name} ${icons[i].type}"></i>
				<span class="icon-name">${icons[i].name}</span>
			</div>
			`
		}
	}
}
if(menu.options[menuIndex].text == "User"){
	for(let i = 0; i < icons.length; i++){
		if(icons[i].type == "user"){
			codeHTML += `
			<div class="icon icon-show">
				<i class="${icons[i].family} ${icons[i].prefix}${icons[i].name} ${icons[i].type}"></i>
				<span class="icon-name">${icons[i].name}</span>
			</div>
			`
		}
	}
}
document.querySelector("main").innerHTML = codeHTML;