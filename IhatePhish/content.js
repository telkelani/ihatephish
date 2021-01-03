
var inputs = document.querySelectorAll("input[type=password]");
var passwords = []
inputs.forEach(function(item){
	if (item.type.toLowerCase()=="password" ){
		passwords.push(item)
	}

})


if (passwords.length!=0){
	//This element will be an invisible box to place over the website
	// position: absolute
	var div_overlay = document.createElement("div");
	div_overlay.classList.add("overlay");
	document.body.appendChild(div_overlay);

	//This element will be the modal box ( overlay > modal_box)
	//position: relative 
	var modal_box = document.createElement("div");
	modal_box.classList.add("modal_box");
	div_overlay.appendChild(modal_box);

	//Video that appears

	var vid_container = document.createElement("div")
	vid_container.id = "vid_container"
	modal_box.appendChild(vid_container)

	var video = document.createElement("video")
	video.id = "video"
	video.autoplay = true
	video.src = chrome.extension.getURL("videos/holup.mp4")
	vid_container.appendChild(video)


	//This element will be the content inside the modal box (modal_box > content)
	//position: absolute
	var content = document.createElement("p");
	content.id = "modal_text"
	content.innerHTML = `HOL UP, WAIT A MINUTE<br>
	It seems like you are about to enter your credentials.<br>
	Please check the URL bar before you enter your account details.<br>`

	//Image of url bar (to inform users what it is)
	var url_img = document.createElement("img");
	url_img.id = "url_img"
	url_img.src = "https://i.imgur.com/4tv7Ixb.png";

	var caption = document.createElement("p");
	caption.style.color = "blue"
	caption.textContent = "You can find the url bar at the top of the screen, and it looks like above."
	modal_box.appendChild(content)
	modal_box.appendChild(url_img)
	modal_box.appendChild(caption)

	//Remove div_overlay from DOM when closed
	function delete_overlay(){
		div_overlay.remove()
	}


	//Close button

	//Have to make a tag first 
	var close_button_link = document.createElement("a");
	close_button_link.id = "link"
	function close_modal() {
		modal_box.style.animation = 'close-modal 2s forwards'
		setTimeout(delete_overlay,2000)

	}
	close_button_link.onclick = close_modal
	window.onclick = function(event){
		var children = modal_box.children
		console.log(children)
		for (var i = 0; i < children.length; i++){
			if (event.target == children[i]){
				return
			}
		}
		close_modal()
	}

	modal_box.appendChild(close_button_link)


	var close_button = document.createElement("img");
	close_button.id = "close_button"
	var imgUrl = chrome.extension.getURL("images/close.png");
	close_button.src = imgUrl
	close_button_link.appendChild(close_button);

}