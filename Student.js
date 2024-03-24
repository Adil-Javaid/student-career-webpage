$(function(){
    $("#searchbtn").click(displayCareer);
})

function displayCareer(){
    var searchCareer = $("#searchInput").val();
    if(searchCareer.trim() === ""){
        $("#careerdisplay").html("<p>Please enter career</p>");
    }
    else{
        showCareer(searchCareer);
    }
}

function showCareer(careerTitle){
    $.ajax({
        url: "http://localhost:3000/careers?title=" + careerTitle,
        method: "GET",
        success: function(respnose){
            showInHtml(respnose);
        }
    })
}

function showInHtml(careerAssessmentDetial){
    var showInDiv = $("#careerdisplay");
    showInDiv.empty();
    if(careerAssessmentDetial.length === 0){
        showInDiv.html("<p>No result found</p>")
    }
    else{
        for(var i=0; i<careerAssessmentDetial.length; i++){
            var career = careerAssessmentDetial[i];
            $("#careerdisplay").append(`<div class="card" id="career"><h5>${career.title}</h5><p>${career.description} ${career.salary}</p></div>`)
        }
    }
}