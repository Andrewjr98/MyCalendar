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
    dayPlanned.forEach(function(thisHour){
        $("#thisHour").val(thisHour.reminder)
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
    var hour = $("<form>").attr({
        "class": "row"
    });
    $(".container").append(hour);
    var hourContainer = $("<div>")
    .text($(thisHour.hour).$(thisHour.meridiem)
    .attr({
        "class": "col-md-2 hour"
    }));
    var hourText = $("<div>")
    .attr({
        "class": "col-md-8 desciption p-0"
    });
   var plan= $("<textarea>");
   hourText.append(plan)
   plan.attr("id", thisHour.id)
   if (thisHour.time< moment().format("HH")){
    plan.attr({
        "class": "past"
    })
   } else if (thisHour.time === moment().format("HH")){
    plan.attr({
        "class": "present"
    })
   }else if (thisHour.time > moment().format("HH")){
    plan.attr({
        "class": "future"
    });
  }
    var saveButton = $("<i class='far fa-save fa-lg'></i>")
   savePlanner = $("<button>")
   .attr({
    "class": "col-md-1 saveBtn"
   });
savePlanner.append(saveButton);
hour.append(hourContainer, hourText, savePlanner);
}) 

init();

$(".saveBtn").on("click", function(event){
    event.preventDefault();
    var save = $(this).siblings("description").children(".future").attr("id");
    dayPlanned[save].reminder = $(this).siblings(".description").children(".future").val();
    console.log(save);
    saveData();
    displayData();
})