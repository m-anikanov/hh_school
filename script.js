	days = Array();
	today = new Date();
	selected_day = new Object();
	selected_year = today.getFullYear();
	selected_month = today.getMonth()+1;



$(document).ready(function(){




//��������� ����������� ���� "��������"

	$('#wrap_buttonAdd').append('<div class="popup_createNew" id="popup_createNew" ><div class="daw"></div><div class="cross"></div><input type="text" placeholder="5 �����, 14:00, ���� ��������"><button>�������</button></div>');


//����� ����� ����
	$('#add_button').click(function(){popup_createNew_init(); popup_controller($('#popup_createNew'),$('#add_button')); });
	$('.cross').click(function(){popup_controller($('#popup_createNew'),$('#add_button'))});




//�����
	$('#search').append('<div class="popup_search" id="popup_search"><div class="daw"></div><div class="finded_elements"><div class="element"><a class="inner"><div class="name">������ �� ��������</div><div class="date">6 �������</div></a></div><div class="element"><a class="inner"><div class="name">������ �� ��������</div><div class="date">6 �������</div></a></div><div class="element"><a class="inner"><div class="name">������ �� ��������</div><div class="date">6 �������</div></a></div><div class="element"><a class="inner"><div class="name">������ �� ��������</div><div class="date">6 �������</div></a></div><div class="element"><a class="inner"><div class="name">������ �� ��������</div><div class="date">6 �������</div></a></div><div class="element"><a class="inner"><div class="name">������ �� ��������</div><div class="date">6 �������</div></a></div><div class="element"><a class="inner"><div class="name">������ �� ��������</div><div class="date">6 �������</div></a></div></div></div>');

	$('#input_search').focus(function(){popup_controller($('#popup_search'),$('#input_search'))});
	$('#input_search').blur(function(){popup_controller($('#popup_search'),$('#input_search'))});


//������� �� �������
	$('#nav button.left').click(function(){go_priviusMonth()});
	$('#nav button.right').click(function(){go_nextMonth()});

	$('#nav button.today').click(function(){go_today()});


//!!!!!!!!!!!!!!!!�������
$('#calendar .inner').prop("day",6);
$('#calendar .inner').prop("month",12);


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
	$('#popup_createNew input').attr('placeholder', selected_day.day+' '+month_name(2,selected_day.month)+', 14:00, ���� ��������');
}


function month_name(mode,month){
	var result;
	if (mode==2)
	{
		switch (month) {
			case 1:
		      result="������";
			break;
			case 2:
		      result="�������";
			break;
			case 3:
		      result="�����";
			break;
			case 4:
		      result="������";
			break;
			case 5:
		      result="���";
			break;
			case 6:
		      result="����";
			break;
			case 7:
		      result="����";
			break;
			case 8:
		      result="�������";
			break;
			case 9:
		      result="��������";
			break;
			case 10:
		      result="�������";
			break;
			case 11:
		      result="������";
			break;
			case 12:
		      result="�������";
			break;
			default:
		      result="���";
		}

	}
	if (mode==1)
	{
		switch (month) {
			case 1:
		      result="������";
			break;
			case 2:
		      result="�������";
			break;
			case 3:
		      result="����";
			break;
			case 4:
		      result="������";
			break;
			case 5:
		      result="���";
			break;
			case 6:
		      result="����";
			break;
			case 7:
		      result="����";
			break;
			case 8:
		      result="������";
			break;
			case 9:
		      result="��������";
			break;
			case 10:
		      result="�������";
			break;
			case 11:
		      result="������";
			break;
			case 12:
		      result="�������";
			break;
			default:
		      result="���";
		}

	}
return result;
}


function day_name(day){
	var result;
	
	
		switch (day) {
			case 0:
		      result="�����������";
			break;
			case 1:
		      result="�������";
			break;
			case 2:
		      result="�����";
			break;
			case 3:
		      result="�������";
			break;
			case 4:
		      result="�������";
			break;
			case 5:
		      result="�������";
			break;
			case 6:
		      result="�����������";
			break;
			
			default:
		      result="���";
		

	}
return result;
}

function add_event(day,month,year,ar_title,members,discribe){
	day[day+'.'+month+'.'+year]=Object();
	day[day+'.'+month+'.'+year].day=day;
	day[day+'.'+month+'.'+year].month=month;
	day[day+'.'+month+'.'+year].year=year;
	day[day+'.'+month+'.'+year].ar_title=ar_title;
	day[day+'.'+month+'.'+year].members=members;
	day[day+'.'+month+'.'+year].discribe=discribe;
	day[day+'.'+month+'.'+year].is=1;

}



function draw_popup_editDay(td_element){



	$('#popup_editDay').remove();


td_element.parent().parent().prepend('<div class="popup_editDay" id="popup_editDay"><div class="daw"></div><div class="cross"></div><input type="text" placeholder="�������"><input type="text" placeholder="����, �����, ���"><input type="text" placeholder="����� ����������"><textarea placeholder="��������"></textarea><button>�������</button><button>�������</button></div>');



$('#popup_editDay .cross').click(function(){$('#popup_editDay').remove();});
}


function light_day(element){
	$('#calendar .inner').removeClass('active');
	element.addClass('active');
	
	selected_day.day=element.attr("date");
	selected_day.month=selected_month;
	selected_day.element=element;

	draw_popup_editDay(element);

}



//��������� ����� ��� ��������� ���������� ���� � ������.
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
			  calendarHtml+='<td><a class="IE_hover"><div date="'+calendarArray[element].date+'" class="inner'+calendarArray[element].date_class+'">';
			  if(j==0){calendarHtml+=capitaliseFirstLetter(day_name(calendarArray[element].day))+', ';}
			  calendarHtml+=calendarArray[element].date+'</div></a></td>';
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