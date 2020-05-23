function $(id)
{
    return document.getElementById(id);
}

var expression="";
var result = null;

function Add()
{
    if(beforeInput())
        return;
    var temp=$('t1').value+" + ";
    $('expr').innerHTML+=temp;
    expression+=temp;
    afterInput();
}

function Sub()
{
    if(beforeInput())
        return;
    var temp=$('t1').value+" - ";
    $('expr').innerHTML+=temp;
    expression+=temp;
    afterInput();
}

function Mul()
{
    if(beforeInput())
        return;
    var temp=$('t1').value+" * ";
    $('expr').innerHTML+=temp;
    expression+=temp;
    afterInput();
}

function Div()
{
    if(beforeInput())
        return;
    var temp=$('t1').value+" / ";
    $('expr').innerHTML+=temp;
    expression+=temp;
    afterInput();
}

function Res()
{
    if($('t1').value.length==0)
    {
        if(expression.length!=0)
        {
            expression=expression.substring(0,expression.length-3);
            result=eval(expression);
            $('expr').innerHTML=result;
            expression="";
            return;
        }
        else
            return;
    }
       
    var temp = $('t1').value;
    $('expr').innerHTML+=temp;
    expression+=temp;
    result=eval(expression);
    $('expr').innerHTML=result;
    expression="";
    afterInput();
}

function Clr()
{
    $('ans').innerHTML="";
    $('expr').innerHTML="";
}
function afterInput()
{
    $('t1').value=null;
    $('t1').focus();
}

function beforeInput()
{
    if($('t1').value.length==0)
        return true;
    
    if(result!=null)
        {
            result=null;
            $('expr').innerHTML="";
            return false;
        }
}