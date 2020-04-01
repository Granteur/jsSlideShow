var slideshow = {
	photoList: ['pic1', 'pic2', 'pic3', 'pic4', 'pic5'],

 	currentPhotoIndex: 0,

 	nextPhoto: function(){
 		if (this.currentPhotoIndex < (this.photoList.length-1)){
 			this.currentPhotoIndex = this.currentPhotoIndex + 1;
 			console.log(this.photoList[this.currentPhotoIndex]);
 		} else {
 			console.log("End of slideshow");
 			this.pause();
 		}
 	},

 	prevPhoto: function(){
 		if (this.currentPhotoIndex > 0){
 			this.currentPhotoIndex = this.currentPhotoIndex - 1;
 			console.log(this.photoList[this.currentPhotoIndex]);
 		} else {
 			console.log("End of slideshow");
 		}
 	},

 	getCurrentPhoto: function(){
 		return this.photoList[this.currentPhotoIndex];
 	},

 	//[this.currentPhotoIndex]

 	play: function(){
 		this.getCurrentPhoto();
 		console.log(this.getCurrentPhoto());
 		let playing = this;
 		this.playInterval = setInterval(function(){
 			playing.nextPhoto();
 			//playing.prevPhoto();
 		}, 2000);
 	},

 	 

 	// function(){
 	// 	playInterval = setInterval(nextPhoto, 2000)
 	// },

	 pause: function(){
	 clearInterval(this.playInterval);
	 }
	}

	slideshow.play();
 
 	


 	/*play: function(){ 

      	setInterval(play, 2000);
      	if (this.currentPhotoIndex < this.photoList.length) {
       		return this.currentPhotoIndex[this.currentPhotoIndex]
       		this.currentPhotoIndex++;
   		} else {				
       		clearInterval(currentPhotoIndex);
       		console.log('paused');
 		}*/
