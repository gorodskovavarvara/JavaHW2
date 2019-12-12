function showMaxitems(array, num)
{
	for(var i = 0; i < array.length; i++)
	{
		if(array[i][2] > num)
		{
            alert(array[i] );
            
		}
	}
	
}

var rows = 4; 
var cols = 4;  

var items = new Array();
for(var i = 0; i < rows; i++)
{
	items[i] = new Array();
}
items[0] [0] = "Вася";
items[0] [1] = "Іванов";
items[0] [2] = "13";
items[0] [3] = "Інформатика";

items[1] [0] = "Маша";
items[1] [1] = "Грушовець";
items[1] [2] = "14";
items[1] [3] = "Малювання";

items[2] [0] = "Саша";
items[2] [1] = "Миронець";
items[2] [2] = "13";
items[2] [3] = "Алгебра";

items[3] [0] = "Губницька";
items[3] [1] = "Ольга";
items[3] [2] = "15";
items[3] [3] = "Укр. мова";
showMaxitems(items, 14);
console.log(items);