	days = Array();
	selected_day = new Object();


$(document).ready(function(){




//Добавляем всплывающие окно "Добавить"

	$('#wrap_buttonAdd').append('<div class="popup_createNew" id="popup_createNew" ><div class="daw"></div><div class="cross"></div><input type="text" placeholder="5 марта, 14:00, День рождение"><button>Создать</button></div>');


//Вызов этого окна
	$('#add_button').click(function(){popup_createNew_init(); popup_controller($('#popup_createNew'),$('#add_button')); });
	$('.cross').click(function(){popup_controller($('#popup_createNew'),$('#add_button'))});


//подсветка ячеек
$('#calendar .inner').click(function(){light_day($(this));});

//поиск
	$('#search').append('<div class="popup_search" id="popup_search"><div class="daw"></div><div class="finded_elements"><div class="element"><a class="inner"><div class="name">Митинг на болотной</div><div class="date">6 августа</div></a></div><div class="element"><a class="inner"><div class="name">Митинг на болотной</div><div class="date">6 августа</div></a></div><div class="element"><a class="inner"><div class="name">Митинг на болотной</div><div class="date">6 августа</div></a></div><div class="element"><a class="inner"><div class="name">Митинг на болотной</div><div class="date">6 августа</div></a></div><div class="element"><a class="inner"><div class="name">Митинг на болотной</div><div class="date">6 августа</div></a></div><div class="element"><a class="inner"><div class="name">Митинг на болотной</div><div class="date">6 августа</div></a></div><div class="element"><a class="inner"><div class="name">Митинг на болотной</div><div class="date">6 августа</div></a></div></div></div>');

	$('#input_search').focus(function(){popup_controller($('#popup_search'),$('#input_search'))});
	$('#input_search').blur(function(){popup_controller($('#popup_search'),$('#input_search'))});




//!!!!!!!!!!!!!!!!костыль
$('#calendar .inner').prop("day",6);
$('#calendar .inner').prop("monse",12);






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
	$('#popup_createNew input').attr('placeholder', selected_day.day+' '+monse(2,selected_day.monse)+', 14:00, День рождение');
}


function monse(mode,monse){
	var result;
	if (mode==2)
	{
		switch (monse) {
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
return result;
}


function add_event(day,monse,year,ar_title,members,discribe){
	day[day+'.'+monse+'.'+year]=Object();
	day[day+'.'+monse+'.'+year].day=day;
	day[day+'.'+monse+'.'+year].monse=monse;
	day[day+'.'+monse+'.'+year].year=year;
	day[day+'.'+monse+'.'+year].ar_title=ar_title;
	day[day+'.'+monse+'.'+year].members=members;
	day[day+'.'+monse+'.'+year].discribe=discribe;
	day[day+'.'+monse+'.'+year].is=1;

}



function draw_popup_editDay(td_element){



	$('#popup_editDay').remove();


td_element.parent().parent().prepend('<div class="popup_editDay" id="popup_editDay"><div class="daw"></div><div class="cross"></div><input type="text" placeholder="Сооытие"><input type="text" placeholder="День, месяц, год"><input type="text" placeholder="Имена участников"><textarea placeholder="Описание"></textarea><button>Создать</button><button>Удалить</button></div>');



$('#popup_editDay .cross').click(function(){$('#popup_editDay').remove();});
}


function light_day(element){
	$('#calendar .inner').removeClass('active');
	element.addClass('active');
	
	selected_day.day=element.prop("day");
	selected_day.monse=element.prop("monse");

selected_day.element=element;
	draw_popup_editDay(element);

}

