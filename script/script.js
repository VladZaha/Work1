function mouselog(event, id) {
	if (id == 'zone2') {
		if (event.type == 'mouseover') {
			Zone1();
		}
		else if (event.type == 'mouseout') {
			Clear();
		}
	}
	if (id == 'zone3') {
		if (event.type == 'mouseover') {
			Zone1();
			Zone2();
		}
		else if (event.type == 'mouseout') {
			Clear();
		}
	}
	if (id == 'zone4') {
		if (event.type == 'mouseover') {
			Zone1();
			Zone2();
			Zone3();
		}
		else if (event.type == 'mouseout') {
			Clear();
		}
	}
}
function Zone1()
{
	document.getElementById('zone1').style.width = '88px';
	document.getElementById('contrast__blok1').style.width = '88px';
	document.getElementById('hover__zone1').style.width = '88px';
	document.getElementById('text__info1').style.opacity = "0";
	document.getElementById('text__info1_3').style.opacity = "1";
}
function Zone2()
{
	document.getElementById('zone2').style.width = '88px';
	document.getElementById('contrast__blok2').style.width = '88px';
	document.getElementById('hover__zone2').style.width = '88px';
	document.getElementById('text__info2').style.opacity = "0";
	document.getElementById('text__info2_3').style.opacity = "1";
}
function Zone3()
{
	document.getElementById('zone3').style.width = '88px';
	document.getElementById('contrast__blok3').style.width = '88px';
	document.getElementById('hover__zone3').style.width = '88px';
	document.getElementById('text__info3').style.opacity = "0";
	document.getElementById('text__info3_3').style.opacity = "1";
}
function Clear()
{
	document.getElementById('zone1').style.width = '';
	document.getElementById('contrast__blok1').style.width = '';
	document.getElementById('hover__zone1').style.width = '';
	document.getElementById('text__info1').style.opacity = "";
	document.getElementById('text__info1_3').style.opacity = "";
	document.getElementById('zone2').style.width = '';
	document.getElementById('contrast__blok2').style.width = '';
	document.getElementById('hover__zone2').style.width = '';
	document.getElementById('text__info2').style.opacity = "";
	document.getElementById('text__info2_3').style.opacity = "";		
	document.getElementById('zone3').style.width = '';
	document.getElementById('contrast__blok3').style.width = '';
	document.getElementById('hover__zone3').style.width = '';
	document.getElementById('text__info3').style.opacity = "";
	document.getElementById('text__info3_3').style.opacity = "";
}