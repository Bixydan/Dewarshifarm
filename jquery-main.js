$(document).ready(function()
{
	var count=2;
	$(".image-holder .1").fadeIn(1000).delay(3000).fadeOut(1000);
	setInterval(function()
	{
		$(".image-holder ."+count).fadeIn(1000).delay(3000).fadeOut(1000);
		count++;
		if(count==6)
		{
			count=1;
		}
	},5000);
});