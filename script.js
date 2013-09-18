	days = Array();
	today = new Date();
	selected_day = new Object();
	selected_year = today.getFullYear();
	selected_month = today.getMonth()+1;
	days[2013]=Array();
	days[2013][09]=Array();
	days[2013][09][17]=Object();
	days[2013][09][17].exist=1;
	days[2013][09][17].event_title="Напиться!";
	days[2013][09][17].participants="Витя Костин, Петр Михайлов!";
	days[2013][09][17].descript="23:00";




$(document).ready(function(){




//Добавляем всплывающие окно "Добавить"

	$('#wrap_buttonAdd').append('<div class="popup_createNew" id="popup_createNew" ><div class="daw"></div><div class="cross"></div><input type="text" id="createString" placeholder="5 марта, 14:00, День рождение"><div class="error" id="error"></div><button>Создать</button></div>');


//Вызов этого окна
	$('#add_button').click(function(){popup_createNew_init(); popup_controller($('#popup_createNew'),$('#add_button')); });
	$('#edit_button').click(function(){draw_popup_editDay(selected_day.element);});

	$('.cross').click(function(){popup_controller($('#popup_createNew'),$('#add_button'))});




//поиск
	$('#search').append('<div class="popup_search" id="popup_search"><div class="daw"></div><div class="finded_elements"><div class="element"><a class="inner"><div class="name">Митинг на болотной</div><div class="date">6 августа</div></a></div><div class="element"><a class="inner"><div class="name">Митинг на болотной</div><div class="date">6 августа</div></a></div><div class="element"><a class="inner"><div class="name">Митинг на болотной</div><div class="date">6 августа</div></a></div><div class="element"><a class="inner"><div class="name">Митинг на болотной</div><div class="date">6 августа</div></a></div><div class="element"><a class="inner"><div class="name">Митинг на болотной</div><div class="date">6 августа</div></a></div><div class="element"><a class="inner"><div class="name">Митинг на болотной</div><div class="date">6 августа</div></a></div><div class="element"><a class="inner"><div class="name">Митинг на болотной</div><div class="date">6 августа</div></a></div></div></div>');

	$('#input_search').focus(function(){popup_controller($('#popup_search'),$('#input_search'))});
	$('#input_search').blur(function(){popup_controller($('#popup_search'),$('#input_search'))});


//Переход по месяцам
	$('#nav button.left').click(function(){go_priviusMonth()});
	$('#nav button.right').click(function(){go_nextMonth()});

	$('#nav button.today').click(function(){go_today()});

 	


go_today();



})



function popup_controller(popup_object,button_object){

	if(popup_object.css( "display")=='none'){
		popup_object.css( "display", "block" );
		button_object.addClass('active');
	}
	else{
		popup_object.css( "display", "none" );
		button_object.removeClass('active');
	}


}




function popup_createNew_init()
{


	$('#popup_editDay').remove();
	$('#popup_createNew input').attr('placeholder', selected_day.day+' '+month_name(2,selected_month)+' '+selected_year+', Новое событие');
	$('#popup_createNew button').click(function(){do_addEvent_string()});
}

function do_addEvent_string(){
	var string= $('#popup_createNew #createString').val();
	if(string==""){string=$('#popup_createNew input').attr('placeholder');}
	var addEventArr = string.split(", ");

	var date=validate_dateString(addEventArr[0]);
	
	if(date.valid==1){
		go_date(date.year,date.month,date.date);
		if(days[date.year][date.month][date.date].exist==1){
			$('#add_button').click();
			$('#popup_createNew #error').html("В этот день уже запланировано событие");
		}
		else{
			

			draw_popup_editDay(selected_day.element);
			if(addEventArr[1]!= undefined){
				$('#popup_editDay #title').val(addEventArr[1]);
			}
		}
	}
	else{
		$('#popup_createNew #error').html("Некорректная дата");
	}
}

function month_name(mode,month){
	var result;
		if (mode==3)
	{
		switch (month) {
			case "января":
		      result=1;
			break;
			case "февраля":
		      result=2;
			break;
			case "марта":
		      result=3;
			break;
			case "апреля":
		      result=4;
			break;
			case "мая":
		      result=5;
			break;
			case "июня":
		      result=6;
			break;
			case "июля":
		      result=7;
			break;
			case "августа":
		      result=8;
			break;
			case "сентября":
		      result=9;
			break;
			case "октября":
		      result=10;
			break;
			case "ноября":
		      result=11;
			break;
			case "декабря":
		      result=12;
			break;
			default:
		      result="нет";
		}

	}
	if (mode==2)
	{
		switch (month) {
			case 1:
		      result="января";
			break;
			case 2:
		      result="февраля";
			break;
			case 3:
		      result="марта";
			break;
			case 4:
		      result="апреля";
			break;
			case 5:
		      result="мая";
			break;
			case 6:
		      result="июня";
			break;
			case 7:
		      result="июля";
			break;
			case 8:
		      result="августа";
			break;
			case 9:
		      result="сентября";
			break;
			case 10:
		      result="октября";
			break;
			case 11:
		      result="ноября";
			break;
			case 12:
		      result="декабря";
			break;
			default:
		      result="нет";
		}

	}
	if (mode==1)
	{
		switch (month) {
			case 1:
		      result="январь";
			break;
			case 2:
		      result="февраль";
			break;
			case 3:
		      result="март";
			break;
			case 4:
		      result="апрель";
			break;
			case 5:
		      result="май";
			break;
			case 6:
		      result="июнь";
			break;
			case 7:
		      result="июль";
			break;
			case 8:
		      result="август";
			break;
			case 9:
		      result="сентябрь";
			break;
			case 10:
		      result="октябрь";
			break;
			case 11:
		      result="ноябрь";
			break;
			case 12:
		      result="декабрь";
			break;
			default:
		      result="нет";
		}

	}
return result;
}


function day_name(day){
	var result;
	
	
		switch (day) {
			case 0:
		      result="понедельник";
			break;
			case 1:
		      result="вторник";
			break;
			case 2:
		      result="среда";
			break;
			case 3:
		      result="четверг";
			break;
			case 4:
		      result="пятница";
			break;
			case 5:
		      result="суббота";
			break;
			case 6:
		      result="воскресенье";
			break;
			
			default:
		      result="нет";
		

	}
return result;
}


function close_all_popups(){

		$('#popup_createNew').css( "display", "none" );
		$('#add_button').removeClass('active');
		$('#popup_editDay').remove();
}

function draw_popup_viewDay(td_element){


close_all_popups();



var popup_html='<div class="popup_editDay" id="popup_editDay"><div class="daw"></div><div class="cross"></div><div class="title">'+days[selected_year][selected_month][selected_day.day].event_title+'</div><div class="date" >'+selected_day.day+' '+month_name(2,selected_month)+' '+selected_year+'</div>';
if(days[selected_year][selected_month][selected_day.day].participants!=''){popup_html+='<div class="section">Участники:</div><div class="participants">'+days[selected_year][selected_month][selected_day.day].participants+'</div>'};
if(days[selected_year][selected_month][selected_day.day].descript!=''){popup_html+='<div class="section">Описание:</div><div class="description">'+days[selected_year][selected_month][selected_day.day].descript+'</div>'};

popup_html+='<button id="delete">Удалить</button></div>';
td_element.parent().parent().prepend(popup_html);


$('#popup_editDay .cross').click(function(){$('#popup_editDay').remove();});
$('#popup_editDay #delete').click(function(){delete_event(selected_year,selected_month,selected_day.day); go_date(selected_year,selected_month,selected_day.day);});
}

function draw_popup_editDay(td_element){


close_all_popups();

$('#popup_editDay').remove();
pave_path(selected_year,selected_month,selected_day.day);


var popup_html='<div class="popup_editDay" id="popup_editDay"><div class="daw"></div><div class="cross"></div><input type="text" value="'+days[selected_year][selected_month][selected_day.day].event_title+'" id="title" placeholder="Событие"><input type="text" value="'+selected_day.day+' '+month_name(2,selected_month)+' '+selected_year+'" placeholder="День месяц год" id="date"><input type="text" value="'+days[selected_year][selected_month][selected_day.day].participants+'" id="participants" placeholder="Имена участников"><textarea placeholder="Описание" id="descript">'+days[selected_year][selected_month][selected_day.day].descript+'</textarea><div class="error" id="error"></div><button id="done">Готово</button>';
if(days[selected_year][selected_month][selected_day.day].exist==1){popup_html+= '<button id="delete">Удалить</button>';}
popup_html+='</div>';
td_element.parent().parent().prepend(popup_html);

$('#popup_editDay .cross').click(function(){$('#popup_editDay').remove();});
$('#popup_editDay #delete').click(function(){delete_event(selected_year,selected_month,selected_day.day); go_date(selected_year,selected_month,selected_day.day);});


$('#popup_editDay #done').click(function(){update_event(selected_year,selected_month,selected_day.day)});

}


function pave_path(year,month,date){



if(days[year]===undefined){days[year]=Array();}
if(days[year][month]===undefined){days[year][month]=Array();}
if(!(typeof days[year][month][date]== "object"&&days[year][month][date]!==null)){days[year][month][date]=Object();


	days[year][month][date].exist=0;
	days[year][month][date].event_title="";
	days[year][month][date].participants="";
	days[year][month][date].descript="";
}

}


function update_event(year,month,date){

	var title=$('#popup_editDay #title').val();
	var participants=$('#popup_editDay #participants').val();
	var descript=$('#popup_editDay #descript').val();
	var date=validate_dateString($('#popup_editDay #date').val());

	

		if(title==""){$('#popup_editDay #error').html("Некорректное название");}
		else{
			if (date.valid!=1){$('#popup_editDay #error').html("Некорректная дата");$('#popup_editDay #date').val(selected_day.day+' '+month_name(2,selected_month)+' '+selected_year);}
			else{
			pave_path(date.year,date.month,date.date);

			days[date.year][date.month][date.date].exist=1;
			if(title!==undefined){days[date.year][date.month][date.date].event_title=title;}
			if(participants!==undefined){days[date.year][date.month][date.date].participants=participants;}
			if(descript!==undefined){days[date.year][date.month][date.date].descript=descript;}
			
			go_date(date.year,date.month,date.date)
		}
		}
	}
function validate_dateString(dateString){
var dateArr=dateString.split(" ");
var result=Object();
result.valid=0;
if(dateArr.length==3){
	var date=parseInt(dateArr[0]);
	var month=dateArr[1];
	var year=parseInt(dateArr[2]);

	if(year>0&&year<10000){
		

		if(month_name(3,month)!="нет"&&date>0){
			var test_date=new Date(year,month_name(3,month),1).getDaysInMonth();
			
			if(date<= test_date){
			result.date=date;
			result.month=month_name(3,month);
			result.year=year;
			result.valid=1;
			}
		}


	}

}

return result;
}


function light_day(element){
	close_all_popups();
	$('#calendar .inner').removeClass('active');
	element.addClass('active');
	
	selected_day.day=element.attr("date");
	selected_day.element=element;



	$('#popup_editDay').remove();

	if(does_event_exist(selected_year,selected_month,selected_day.day)){
		
					draw_popup_viewDay(element);
				
	}
	
	

}



//добавляем метод для получения количества дней в месяце.
Date.prototype.isLeapYear = function()
{
    var y = this.getFullYear();
    return y % 4 == 0 && y % 100 != 0 || y % 400 == 0;
};

Date.prototype.getDaysInMonth = function()
{
    return arguments.callee[this.isLeapYear() ? 'L' : 'R'][this.getMonth()];
};


Date.prototype.getDaysInMonth.R = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
Date.prototype.getDaysInMonth.L = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function does_event_exist(year,month,day){
	var result=0;
if(days[year]!= undefined){
		if(days[year][month]!= undefined){
			if(typeof days[year][month][day] == "object"&&days[year][month][day] !== null){
				if(days[year][month][day].exist==1){
					 result=1;
				}
			}
		}
	}
return result;
}

function get_calendarArray(month,year)
{

var select_month=new Date(year,month-1,1);
var pre_select_month=new Date(year,month-2,1); pre_select_month=new Date(year,month-2,pre_select_month.getDaysInMonth());


var calendar=Array();
var day=select_month.getDay(); if(day==0){day=7;} day--;
var pre_day=pre_select_month.getDay(); if(pre_day==0){pre_day=7;} pre_day--;


var date=pre_select_month.getDaysInMonth();
for(var i=day-1;i>=0;i--){
 calendar[i]=Object();
 calendar[i].date=date;
 calendar[i].day=pre_day; 
 calendar[i].date_class=" previus";
 pre_day--;
date--;


}




i=day;
for(date=1;date<=select_month.getDaysInMonth();date++){
 calendar[i]=Object();
 calendar[i].date=date;
 calendar[i].day=day;
 calendar[i].date_class=" curent";
 calendar[i].today=0;
 calendar[i].has_event=0;
  calendar[i].td_class="";
 if(date==today.getDate()&&month==today.getMonth()+1&&year==today.getFullYear()){ calendar[i].td_class+=" today";}

 if ( does_event_exist(year,month,date)==1){
 

 calendar[i].event_title=days[year][month][date].event_title;

calendar[i].participants=days[year][month][date].participants;
 calendar[i].td_class+=" has_event"; 
 calendar[i].has_event=1;


 }


 day++;
 if (day>6){day=0;}
 i++;
}



date=1;
for(day;day<=6;day++){
 calendar[i]=Object();
 calendar[i].date=date;
 calendar[i].day=day;
 calendar[i].date_class=" next";
 date++;
 i++;
}
return calendar;
}



function draw_calendar(month,year){
	var calendarArray = get_calendarArray(month,year);
    var element = 0;
    var calendarHtml='<tbody>';

	for (var j = 0; j < calendarArray.length/7; j++) {
		calendarHtml+='<tr>';
			for (var i = 0; i < 7; i++) {
			  calendarHtml+='<td class="'+calendarArray[element].td_class+'"';
			  calendarHtml+='><a class="IE_hover"><div date="'+calendarArray[element].date+'" class="inner'+calendarArray[element].date_class+'"><span class="date_label">';
			  if(j==0){calendarHtml+=capitaliseFirstLetter(day_name(calendarArray[element].day))+', ';}
			  calendarHtml+=calendarArray[element].date+'</span>';
			  if( calendarArray[element].has_event==1){
			  	calendarHtml+= '<br><b>'+calendarArray[element].event_title+'</b><br><span class="participants">' + calendarArray[element].participants+'</span>';
			  }
			  calendarHtml+='</div></a></td>';
			  element++;
			}
		calendarHtml+='</tr>';
	}
	calendarHtml+='</tbody>';

	$('#calendar').html(calendarHtml);
	$('#calendar .inner.curent').click(function(){light_day($(this));});
	$('#calendar .inner.previus').click(function(){go_dayInPreviusMonth($(this));});
	$('#calendar .inner.next').click(function(){go_dayInNextMonth($(this));});


	$('#nav span').html(capitaliseFirstLetter(month_name(1,month))+' '+year);

	selected_month=month;
	selected_year=year;

}


function capitaliseFirstLetter(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}



function go_priviusMonth(){
	var previusMonth=selected_month-1;
	var priviusYear=selected_year;
	if(previusMonth<1){previusMonth=12; priviusYear--;}


	draw_calendar(previusMonth,priviusYear);
}


function go_nextMonth(){
	var nextMonth=selected_month+1;
	var nextYear=selected_year;
	if(nextMonth>12){nextMonth=1; nextYear++;}


	draw_calendar(nextMonth,nextYear);
}


function go_dayInPreviusMonth(element){
	
	var date=element.attr("date");
	go_priviusMonth();
	$('#calendar .inner.curent[date="'+date+'"]').click();

}

function go_dayInNextMonth(element){
	
	var date=element.attr("date");
	go_nextMonth();
	$('#calendar .inner.curent[date="'+date+'"]').click();

}


function go_today(){
	draw_calendar(today.getMonth()+1,today.getFullYear());

	$('#calendar .inner.curent[date="'+today.getDate()+'"]').click();
}

function go_date(year,month,date){
	draw_calendar(month,year);

	$('#calendar .inner.curent[date="'+date+'"]').click();
}




function delete_event(year,monse,day){
	days[year][monse][day]=null;

}









