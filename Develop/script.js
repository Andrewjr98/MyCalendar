var dayPlanned = [{
    id: "0",
    hour: "09",
    time: "09",
    meridiem: "am",
    reminder: "",
},
{
    id: "1",
    hour: "10",
    time: "10",
    meridiem: "am",
    reminder: "",
},
{
    id: "2",
    hour: "11",
    time: "11",
    meridiem: "am",
    reminder: "",
},
{
    id: "3",
    hour: "12",
    time: "12",
    meridiem: "pm",
    reminder: "",
},
{
    id: "4",
    hour: "01",
    time: "01",
    meridiem: "pm",
    reminder: "",
},
{
    id: "5",
    hour: "02",
    time: "02",
    meridiem: "pm",
    reminder: "",
},
{
    id: "6",
    hour: "03",
    time: "03",
    meridiem: "pm",
    reminder: "",
},
{
    id: "7",
    hour: "04",
    time: "04",
    meridiem: "pm",
    reminder: "",
},
{
    id: "8",
    hour: "05",
    time: "05",
    meridiem: "pm",
    reminder: "",
},

]
function headerData(){
    var currentDate= moment().format('dddd,MMMM Do');
    $("#currentDay").text(currentDate);
}
function saveData(){
    localStorage.setItem("dayPlanned",JSON.stringify(dayPlanned));
}
function displayData(){
    dayPlanned.forEach(funtion(_thisHour) {
        $(`#${_thisHour.id}`).val(_thisHour.reminder);
    })
}
function init(){
    var storedData = JSON.parse(localStorage.getitem("dayPlanned"));
    if (storedData){
        dayPlanned = storedData;
    }
    saveData();
    displayData();
}
headerData();

dayPlanned.forEach(function(thisHour){
    var hour
})