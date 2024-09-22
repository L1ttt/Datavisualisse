function init(){
        var w = 500;
        var h = 100;
        d3.csv("lab2_4_dataset.csv").then(function(data){
            console.log(data);
            wombatSightings = data;
            barChart(wombatSightings);
        });


function barChart(){
        var svg = d3.select("#chart")
        .append("svg")
        .attr("width", w)
        .attr("height",h)

        svg.selectAll("rect")
        .data(wombatSightings)
        .enter()
        .append("rect")
        .attr("x",function(d,i){return i* (w/wombatSightings.length);})
        .attr("y",function(d){
            return 100 - (d.wombats*3);
        })
        .attr("width",20)
        .attr("height", function(d){
            return d.wombats *3;
        });
    };
}
window.onload = init;
    