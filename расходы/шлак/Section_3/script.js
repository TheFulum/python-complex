function getResponse() {
    var rightRes = 0;
    var resultInPercents = 0;

    var input1_1 = document.getElementById("input1_1"); //1
    var input1_2 = document.getElementById("input1_2"); //1
    var input1_3 = document.getElementById("input1_3"); //1

    var input2 = document.getElementById("input2"); //2

    var select1_1 = document.getElementById("select1_1")//3
    var select1_2 = document.getElementById("select1_2")//3
    var select1_3 = document.getElementById("select1_3")//3
    var select1_4 = document.getElementById("select1_4")//3
    var select1_5 = document.getElementById("select1_5")//3

    var input3_1 = document.getElementById("input3_1");//4
    var input3_2 = document.getElementById("input3_2");//4
    var input3_3 = document.getElementById("input3_3");//4

    var input4_1 = document.getElementById("input4_1");//5
    var input4_2 = document.getElementById("input4_2");//5
    var input4_3 = document.getElementById("input4_3");//5

    var input5_1 = document.getElementById("input5_1");//6
    var input5_2 = document.getElementById("input5_2");//6
    var input5_3 = document.getElementById("input5_3");//6

    var input6_1 = document.getElementById("input6_1");//7
    var input6_2 = document.getElementById("input6_2");//7
    var input6_3 = document.getElementById("input6_3");//7
    var input6_4 = document.getElementById("input6_4");//7

    var select2 = document.getElementById("select2")//8

    var input7_1 = document.getElementById("input7_1");//9
    var input7_2 = document.getElementById("input7_2");//9
    var input7_3 = document.getElementById("input7_3");//9
    var input7_4 = document.getElementById("input7_4");//9
    var input7_5 = document.getElementById("input7_5");//9

    var input8_1 = document.getElementById("input8_1");//10
    var input8_2 = document.getElementById("input8_2");//10
    var input8_3 = document.getElementById("input8_3");//10
    var input8_4 = document.getElementById("input8_4");//10

    var select3_1 = document.getElementById("select3_1")//11
    var select3_2 = document.getElementById("select3_2")//11
    var select3_3 = document.getElementById("select3_3")//11

    var select4_1 = document.getElementById("select4_1")//12
    var select4_2 = document.getElementById("select4_2")//12
    var select4_3 = document.getElementById("select4_3")//12
    var select4_4 = document.getElementById("select4_4")//12

    var input9= document.getElementById("input9");//13

    var input10_1 = document.getElementById("input10_1");//14
    var input10_2 = document.getElementById("input10_2");//14
    var input10_3 = document.getElementById("input10_3");//14

    var input11_1 = document.getElementById("input11_1");//15
    var input11_2 = document.getElementById("input11_2");//15
    var input11_3 = document.getElementById("input11_3");//15
    var input11_4 = document.getElementById("input11_4");//15
    var input11_5 = document.getElementById("input11_5");//15

    var input12_1 = document.getElementById("input12_1");//16
    var input12_2 = document.getElementById("input12_2");//16
    var input12_3 = document.getElementById("input12_3");//16
    var input12_4 = document.getElementById("input12_4");//16
    var input12_5 = document.getElementById("input12_5");//16

    var input13_1 = document.getElementById("input13_1");//17
    var input13_2 = document.getElementById("input13_2");//17
    var input13_3 = document.getElementById("input13_3");//17

    var input14_1 = document.getElementById("input14_1"); //18
    var input14_2 = document.getElementById("input14_2"); //18
    var input14_3 = document.getElementById("input14_3"); //18
    var input14_4 = document.getElementById("input14_4"); //18

    var input15_1 = document.getElementById("input15_1"); //19
    var input15_2 = document.getElementById("input15_2"); //19
    var input15_3 = document.getElementById("input15_3"); //19
    var input15_4 = document.getElementById("input15_4"); //19

    var input16_1 = document.getElementById("input16_1"); //20
    var input16_2 = document.getElementById("input16_2"); //20
    var input16_3 = document.getElementById("input16_3"); //20
   
    var res1 = "1 - Неверно";
    var res2 = "2 - Неверно";
    var res3 = "3 - Неверно";
    var res4 = "4 - Неверно";
    var res5 = "5 - Неверно";
    var res6 = "6 - Неверно";
    var res7 = "7 - Неверно";
    var res8 = "8 - Неверно";
    var res9 = "9 - Неверно";
    var res10 = "10 - Неверно";
    var res11 = "11 - Неверно";
    var res12 = "12 - Неверно";
    var res13 = "13 - Неверно";
    var res14 = "14 - Неверно";
    var res15 = "15 - Неверно";
    var res16 = "16 - Неверно";
    var res17 = "17 - Неверно";
    var res18 = "18 - Неверно";
    var res19 = "19 - Неверно";
    var res20 = "20 - Неверно";

    if (!input1_1.checked & !input1_2.checked & input1_3.checked) { //1
        rightRes++;
        res1 = " 1 - Верно";
    }

    if (input2.value == "датчики") { //2
        rightRes++;
        res2 = " 2 - Верно";
    }

    if (select1_1.value == "2" & select1_2.value == "5" & select1_3.value == "1" & select1_4.value == "3" & select1_5.value == "4") { //3
        rightRes++;
        res3 = " 3 - Верно";
    }

    if (input3_1.value == "информации" & input3_2.value == "электрические" & input3_3.value == "программы") { //4
        rightRes++;
        res4 = " 4 - Верно";
    }

    if (input4_1.value == "лентопротяжный" & input4_2.value == "перфоленте" & input4_3.value == "колодки") { //5
        rightRes++;
        res5 = " 5 - Верно";
    }

    if (input5_1.value == "сигналы" & input5_2.value == "фотосчитывателя" & input5_3.value == "механизма") { //6
        rightRes++;
        res6 = " 6 - Верно";
    }

    if (!input6_1.checked & !input6_2.checked & input6_3.checked & !input6_4.checked) { //7
        rightRes++;
        res7 = " 7 - Верно";
    }

    if(select2.value == "1") { //8
        rightRes++;
        res8 = " 8 - Верно";
    }

    if (input7_1.checked & !input7_2.checked & input7_3.checked & input7_4.checked & input7_5.checked) { //9
        rightRes++;
        res9 = " 9 - Верно";
    }

    if (!input8_1.checked & input8_2.checked & !input8_3.checked & input8_4.checked) { //10
        rightRes++;
        res10 = " 10 - Верно";
    }

    if (select3_1.value == "2" & select3_2.value == "1" & select3_3.value == "3") { //11
        rightRes++;
        res11 = " 11 - Верно";
    }

    if (select4_1.value == "4" & select4_2.value == "2" & select4_3.value == "1" & select4_4.value == "3") { //12
        rightRes++;
        res12 = " 12 - Верно";
    }

    if (input9.value == "индикации") { //13
        rightRes++;
        res13 = " 13 - Верно";
    }

    if (input10_1.value == "преобразователь" & input10_2.value == "активные" & input10_3.value == "пассивные") { //14
        rightRes++;
        res14 = " 14 - Верно";
    }

    if (!input11_1.checked & input11_2.checked & input11_3.checked & input11_4.checked & input11_5.checked) { //15
        rightRes++;
        res15 = " 15 - Верно";
    }

    if (input12_1.checked & input12_2.checked & input12_3.checked & !input12_4.checked & input12_5.checked) { //16
        rightRes++;
        res16 = " 16 - Верно";
    }

    if (input13_1.value == "индикации" & input13_2.value == "дисплеи" & input13_3.value == "цифровых") { //17
        rightRes++;
        res17 = " 17 - Верно";
    }

    if (!input14_1.checked & input14_2.checked & !input14_3.checked & !input14_4.checked) { //18
        rightRes++;
        res18 = " 18 - Верно";
    }

    if (input15_1.checked & input15_2.checked & !input15_3.checked & input15_4.checked) { //19
        rightRes++;
        res19 = " 19 - Верно";
    }

    if (!input16_1.checked & !input16_2.checked & input16_3.checked) { //20
        rightRes++;
        res20 = " 20 - Верно";
    }


    resultInPercents = (rightRes / 20) * 100

    alert('Вы прошли тест на ' + resultInPercents + ' %.'
    + '\n Результаты: ' 
    + '\n' + res1
    + '\n' + res2
    + '\n' + res3
    + '\n' + res4
    + '\n' + res5
    + '\n' + res6
    + '\n' + res7
    + '\n' + res8
    + '\n' + res9
    + '\n' + res10
    + '\n' + res11
    + '\n' + res12
    + '\n' + res13
    + '\n' + res14
    + '\n' + res15
    + '\n' + res16
    + '\n' + res17
    + '\n' + res18
    + '\n' + res19
    + '\n' + res20
    + '\n Правильных ответов: ' + rightRes + ' из 20\n' 
    );
}

// 1. 3 
// 2. датчики 
// 3. 1-Б, 2-Д, 3-А, 4-В, 5-Г 
// 4. информации электрические программы
// 5. лентопротяжный перфоленте колодки
// 6. сигналы фотосчитывателя механизма
// 7. 3
// 8. 1
// 9. 1 3 4 5
// 10. 2 4
// 11. 1-Б, 2-А, 3-В. 
// 12. 1-Г, 2-Б, 3-А, 4-В.
// 13. индикации
// 14. преобразователь активные пассивные
// 15. 2,3,4,5 