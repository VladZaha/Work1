function mouselog(event, id) {
	if (event.type == 'mouseover') {
		document.getElementById('zone1').style.width = '88px';
		document.getElementById('hover__zone1').style.width = '88px';
		document.getElementById('text__info1').style.flexDirection = "column-reverse";
		document.getElementById('text1_1').style.writingMode = 'vertical-rl';
		document.getElementById('text1_1').style.transform = 'rotate(-180deg)';
		document.getElementById('text1_1').style.marginRight = '26px';
		document.getElementById('text2_1').style.marginBottom = '12px';
		document.getElementById('text2_1').style.marginRight = '33px';
		document.getElementById('zone2').style.width = '88px';
		document.getElementById('hover__zone2').style.width = '88px';
		document.getElementById('text__info2').style.flexDirection = "column-reverse";
		document.getElementById('text1_2').style.writingMode = 'vertical-rl';
		document.getElementById('text1_2').style.transform = 'rotate(180deg)';
		document.getElementById('text1_2').style.marginRight = '26px';
		document.getElementById('text2_2').style.marginBottom = '12px';
		document.getElementById('text2_2').style.marginRight = '33px';
		document.getElementById('zone3').style.width = '88px';
		document.getElementById('hover__zone3').style.width = '88px';
		document.getElementById('text__info3').style.flexDirection = "column-reverse";
		document.getElementById('text1_3').style.writingMode = 'vertical-rl';
		document.getElementById('text1_3').style.transform = 'rotate(180deg)';
		document.getElementById('text1_3').style.marginRight = '26px';
		document.getElementById('text2_3').style.marginBottom = '12px';
		document.getElementById('text2_3').style.marginRight = '33px';
		if (id == 'zone2') {
			document.getElementById('text1_2').style.writingMode = '';
			document.getElementById('text1_2').style.transform = '';
			document.getElementById('text__info3').style.flexDirection = 'column-reverse';
		}
		if (id == 'zone3') {
			document.getElementById('text1_2').style.writingMode = 'vertical-rl';
			document.getElementById('text1_2').style.transform = 'rotate(180deg)';
			document.getElementById('text1_3').style.writingMode = '';
			document.getElementById('text1_3').style.transform = '';
			document.getElementById('text__info3').style.flexDirection = 'column';
		}
		if (id == 'zone4') {
			document.getElementById('text1_2').style.writingMode = 'vertical-rl';
			document.getElementById('text1_2').style.transform = 'rotate(180deg)';
			document.getElementById('text1_3').style.writingMode = 'vertical-rl';
			document.getElementById('text1_3').style.transform = 'rotate(180deg)';
			document.getElementById('text__info3').style.flexDirection = 'column-reverse';
		}
	}
	else if (event.type == 'mouseout') {
		Clear();
	}
}
function Clear() {
	document.getElementById('zone1').style.width = '';
	document.getElementById('hover__zone1').style.width = '';
	document.getElementById('text__info1').style.flexDirection = "";
	document.getElementById('text1_1').style.writingMode = '';
	document.getElementById('text1_1').style.transform = '';
	document.getElementById('text1_1').style.margin = '';
	document.getElementById('text2_1').style.margin = '';
	document.getElementById('zone2').style.width = '';
	document.getElementById('hover__zone2').style.width = '';
	document.getElementById('text__info2').style.flexDirection = "";
	document.getElementById('text1_2').style.writingMode = '';
	document.getElementById('text1_2').style.transform = '';
	document.getElementById('text1_2').style.margin = '';
	document.getElementById('text2_2').style.margin = '';
	document.getElementById('zone3').style.width = '';
	document.getElementById('hover__zone3').style.width = '';
	document.getElementById('text__info3').style.flexDirection = "";
	document.getElementById('text1_3').style.writingMode = '';
	document.getElementById('text1_3').style.transform = '';
	document.getElementById('text1_3').style.margin = '';
	document.getElementById('text2_3').style.margin = '';
}