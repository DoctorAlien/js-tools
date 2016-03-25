//禁止右键
if (window.Event)
document.captureEvents(Event.MOUSEUP);
function nocontextmenu()
	{
		event.cancelBubble = true
		event.returnValue = false;
		return false;
	}
function norightclick(e)
	{
		if (window.Event)
			{
				if (e.which == 2 || e.which == 3)
				return false;
			}
		else
		if (event.button == 2 || event.button == 3)
			{
				event.cancelBubble = true
				event.returnValue = false;
				return false;
			}
	}
document.oncontextmenu = nocontextmenu; // for IE5+
document.onmousedown = norightclick; // for all others
//禁止F12
document.onkeydown=function(event)
{
	if(window.event.keyCode == 123)
	{
			return false;
	}
}
