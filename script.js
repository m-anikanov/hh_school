	days = Array();
	selected_day = new Object();


$(document).ready(function(){




//��������� ����������� ���� "��������"

	$('#wrap_buttonAdd').append('<div class="popup_createNew" id="popup_createNew" ><div class="daw"></div><div class="cross"></div><input type="text" placeholder="5 �����, 14:00, ���� ��������"><button>�������</button></div>');


//����� ����� ����
	$('#add_button').click(function(){popup_createNew_init(); popup_controller($('#popup_createNew'),$('#add_button')); });
	$('.cross').click(function(){popup_controller($('#popup_createNew'),$('#add_button'))});


//��������� �����
$('#calendar .inner').click(function(){light_day($(this));});

//�����
	$('#search').append('<div class="popup_search" id="popup_search"><div class="daw"></div><div class="finded_elements"><div class="element"><a class="inner"><div class="name">������ �� ��������</div><div class="date">6 �������</div></a></div><div class="element"><a class="inner"><div class="name">������ �� ��������</div><div class="date">6 �������</div></a></div><div class="element"><a class="inner"><div class="name">������ �� ��������</div><div class="date">6 �������</div></a></div><div class="element"><a class="inner"><div class="name">������ �� ��������</div><div class="date">6 �������</div></a></div><div class="element"><a class="inner"><div class="name">������ �� ��������</div><div class="date">6 �������</div></a></div><div class="element"><a class="inner"><div class="name">������ �� ��������</div><div class="date">6 �������</div></a></div><div class="element"><a class="inner"><div class="name">������ �� ��������</div><div class="date">6 �������</div></a></div></div></div>');

	$('#input_search').focus(function(){popup_controller($('#popup_search'),$('#input_search'))});
	$('#input_search').blur(function(){popup_controller($('#popup_search'),$('#input_search'))});




//!!!!!!!!!!!!!!!!�������
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
	$('#popup_createNew input').attr('placeholder', selected_day.day+' '+monse(2,selected_day.monse)+', 14:00, ���� ��������');
}


function monse(mode,monse){
	var result;
	if (mode==2)
	{
		switch (monse) {
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


td_element.parent().parent().prepend('<div class="popup_editDay" id="popup_editDay"><div class="daw"></div><div class="cross"></div><input type="text" placeholder="�������"><input type="text" placeholder="����, �����, ���"><input type="text" placeholder="����� ����������"><textarea placeholder="��������"></textarea><button>�������</button><button>�������</button></div>');



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

