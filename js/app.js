$(function() {
	$(":file").change(function () {
        if (this.files && this.files[0]) 
        {
            var reader = new FileReader();
            reader.onload = imageIsLoaded;
            reader.readAsDataURL(this.files[0]);
        }
    });




});



function imageIsLoaded(e) {
		var result = "<h1 id='result'>YOUR UCLA DOPPELGÄNGER IS... GENE BLOCK</h1>";
		var myImage = "<img class='myImage' src='#' />";
		var mix = "<div id='transparent'><img class='myImage2' src='#' /></div>";
		var geneB = "<img id='geneB' src='images/gene-block.jpg' />";
		var html = myImage+mix+geneB;
		$('#title').remove();
		$("#container").prepend(result);
		$("#pictureHolder").empty();
		$("#pictureHolder").html(html);
		$('.myImage, .myImage2').attr('src', e.target.result);
}