let str = "";
let str_res_output = "";
let operations = '+-*÷%';
function fun(t) // Получить номер экрана дисплея
{
    str_res_output += document.getElementById(t).value;
    str += document.getElementById(t).value;
    document.getElementById("area2").value = str_res_output;
    if (str.includes('√') && operations.includes(document.getElementById(t).value)) {
        sqrt_calc();
    }
}

function result() // результат вычисления знака равенства
{// Используется, если судить, что формат вывода операции всех последовательных символов ввода неверен
    if ((str.indexOf('..') != - 1) || (str.indexOf('++') != - 1) || (str.indexOf('--') != - 1)
        || (str.indexOf('**') != - 1) || (str.indexOf('÷÷') != - 1)) // Исключить неверный формат последовательного ввода двух операторов
    {
        document.getElementById("area1").value = "Error!"
        document.getElementById("area2").value = null;
        str = "";
        str_res_output = "";
    }
    else {
        str_res_output = document.getElementById("area2").value;
        if (str.includes('÷'))
            str = str.replace(/÷/, '/');
        if (str.includes('%'))
            str = str.replace(/%/, '/100');
        if (str.includes('√')) {
            sqrt_calc();
        }
        document.getElementById("area2").value = eval(str);
        // if (str.includes('/100'))
        //     str = str.replace(/\/100/, '%');
        // if (str.includes('/'))
        //     str = str.replace(/\//, '÷');
        document.getElementById("area1").value = str_res_output;
        str = eval(str);
    }
}

function sqrt_calc() {
    let num = 0;
    let i_pos = 0;
    for (var i = str.indexOf('√') + 1; Number.isInteger(Number(str[i])); i++) {
        num = num * 10 + Number(str[i]);
        i_pos = i;
    }
    if (str[i_pos] != '.') {
        num = Math.pow(num, 0.5);
        temp = str.substring(str.indexOf('√'), i_pos + 1);
        // console.log(temp);
        str = str.replace(temp, String(num));
    }
    else {
        str = "";
        str_res_output = "";
        document.getElementById("area2").value = "Not an integer value for square root";
        document.getElementById("area1").value = "";
    }

}

function sqrt_btn(action) {
    if (action == 'sqrt') {
        if (document.getElementById("area2").value == '0') {
            str = '√';
            str_res_output = '√';
            document.getElementById("area2").value = str_res_output;
        } else {
            str += '√';
            str_res_output += '√';
            document.getElementById("area2").value = str_res_output;
        }
    } else if (action == 'degree') {
        if (str.includes('√')) {
            sqrt_calc();
        }
        let num = 0;
        let i_pos;
        for (var i = str.length - 1, j = 0; !operations.includes(str[i]) && i >= 0; i--, j++) {
            num = num + Number(str[i]) * Math.pow(10, j);
            i_pos = i;
        }
        num = Math.pow(num, 2);

        //console.log(i_pos);
        let temp = str.substring(i_pos, str.length);
        str = str.replace(temp, String(num));
        document.getElementById("area2").value = str_res_output + '^2';
        str_res_output += '^2';
        //console.log(temp);
    }
}

function factorial() {
    if (str.includes('√')) {
        sqrt_calc();
    }
    let num = 0;
    let i_pos;
    for (var i = str.length - 1, j = 0; !operations.includes(str[i]) && i >= 0; i--, j++) {
        num = num + Number(str[i]) * Math.pow(10, j);
        i_pos = i;
    }
    let res = 1;
    for (var i = 1; i <= num; i++) {
        res *= i;
    }
    //console.log(i_pos);
    let temp = str.substring(i_pos, str.length);
    str = str.replace(temp, String(res));
    document.getElementById("area2").value = str_res_output + '!';
    str_res_output += '!';
    //console.log(temp);

}

function result2() // Обратное число
{
    let num = 0;
    let i_pos = 0;
    for (var i = str.length - 1, j = 0; !operations.includes(str[i]) && i >= 0; i--, j++) {
        num = num + Number(str[i]) * Math.pow(10, j);
        i_pos = i;
    }
    //str = "";
    
    if (i_pos == 0) {
        str = "(" + str + ")";
        str_res_output = "(" + str_res_output + ")";
        str = "-" + str;
        str_res_output = "-" + str_res_output;
    } else {
        let temp = str.substring(i_pos-1, i_pos);
        console.log(i_pos-1);
        console.log(temp);
        if (temp == "+") {
            let temp1 = str.substring(i_pos, str.length);
            str = str.substring(0, i_pos-1) + '-' + temp1;//"(" + str + ")";
            temp1 = str_res_output.substring(i_pos, str.length);
            str_res_output = str_res_output.substring(0, i_pos-1) + '-' + temp1;
            //str = str.replace(temp, "-");
        }
        else if (temp == "-") {
            str = str.replace(temp, "+");
        }
    }


    document.getElementById("area2").value = str_res_output;
    console.log(document.getElementById("area2").value);
}

function cle() // Очистить AC
{
    document.getElementById("area1").value = null;
    document.getElementById("area2").value = null;
    document.getElementById("area2").value = "0";
    str = "";
    str_res_output = "";
}
function del() // Удаляем предыдущий
{
    for (var i = 0; i < str_res_output.length; i++) {
        document.getElementById("area2").value = str_res_output.substring(0, str_res_output.length - 1)
    }
    str_res_outputs = document.getElementById("area2").value;
}
