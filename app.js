var date = Number(prompt('Введите день рождения'))
var month = prompt('Введите месяц рождения')

if(date >= 21 && date <=31 && month=== 'март' || date <=20 && month === 'апрель' ){
    console.log('ваш знак зодиака овен');
}
else if(date >= 21 && date <=31 && month=== 'май' || date <=21 && month === 'июнь' ){
    console.log('ваш знак зодиака Близнецы');
}
else if(date >= 22 && date <=31 && month=== 'июнь' || date <=22 && month === 'июль' ){
    console.log('ваш знак зодиака Рак');
}
else if(date >= 23 && date <=31 && month=== 'июль' || date <=23 && month === 'август' ){
    console.log('ваш знак зодиака Лев');
}
else if(date >= 24 && date <=31 && month=== 'октябрь' || date <=22 && month === 'ноябрь' ){
    console.log('ваш знак зодиака овен');
}else{
    console.error('error')
}











