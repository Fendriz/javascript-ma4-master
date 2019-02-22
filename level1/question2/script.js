
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(function (result) {
    	return result.json();
    	})
    .then(function(res){
  		//console.log(res);
  		return todocards(res);
  		})
    .catch(function(error) {
		console.log(error)
	})


function todocards (result){


	for (var i = 0; i < result.length; i++) {

		var details = document.getElementById('cardDetails');
		var insert = document.createElement( 'div' );
		insert.setAttribute("id", "id"+(i+1));
		insert.setAttribute("class", "cards");
		var cards = details.appendChild(insert);
		cards.innerHTML+= "<span><b>USERID:</b> " + result[i].userId + "</span>";
		cards.innerHTML += "<span><b>ID:</b> " + result[i].id + "</span>";
		cards.innerHTML += "<span><b>TITLE:</b> " + result[i].title + "</span>";

		if(result[i].completed===true)
		{
			var thumbsUp=document.createElement('i');
			thumbsUp.setAttribute("class", "fas fa-thumbs-up");
			cards.appendChild(thumbsUp);
			insert.style.backgroundColor =  "#BAFF99";
		}
		else
		{
			var thumbsDown=document.createElement('i');
			thumbsDown.setAttribute("class", "fas fa-thumbs-down");
			cards.appendChild(thumbsDown);
			insert.style.backgroundColor =  "#FFBCA3";
		}
	}
}