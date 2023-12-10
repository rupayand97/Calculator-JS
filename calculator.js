function typeValue()
{
    let tag = event.target;
    let inp = document.getElementById("display");
    inp.value = inp.value + tag.innerText;
}

function findValue()
{
    let inp = document.getElementById("display");
    inp.value = eval(inp.value);
}

function clr()
{
    let inp = document.getElementById("display");
    inp.value = inp.value.substring(0, inp.value.length-1)
}

function allClear()
{
    let inp = document.getElementById("display");
    inp.value="";
}