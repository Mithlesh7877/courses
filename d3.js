// 1.function d3update() {
//   d3.select('li:nth-child(3)').text("Hello World").style('color','blue').classed('big',true);
// };


// 2.var arr=[10,20,30,40,30,50]
// var li=d3.select('body').selectAll('.items li').data(arr).text(function(d){
//     return d;
// })
// li.enter().append('li').text(function(d){
//     return d;
// })
// d3.selectAll('.items li').data(arr).style('font-size',function(d){
//     return d+'px';
// })

// 3.Static chart
// var styles=[
//     {
//     'background':'red',
//     'color':'blue',
//     'width':'40'
// },
// {
//     'background':'green',
//     'color':'black',
//     'width':'30'
// },
// {
//     'background':'blue',
//     'color':'white',
//     'width':'20'
// }
// ];
// var li=d3.selectAll('.items li').data(styles)
// li.style('font-size','10px')
// li.style('padding','6px')
// li.style('margin','4px')
// li.style('list-style','none')
// li.style('width',function(d){
//     return d.width+'%';
// })
// li.style('color',function(d){
//     return d.color;
// })
// li.style('background',function(d){
//     return d.background;
// })
// 4. SVG
// d3.select('body').append('svg').attr('width',400).attr('height',400).style('background','#f4f4f4').append('rect').attr('width',300).attr('height',300).attr('x',50).attr('y',50).style('fill','black').style('stroke','white').attr('stroke-width',3);
// d3.select('svg').append('circle').attr('cx',200).attr('cy',200).attr('r',50).style('fill','green')    
  
// 5.Bar Chart --------------learn viewbox also-------what is enter and exit 
// var arr=[200,300,33,400]
// var height=400;
// var width=200;
// var barwidth=35;
// var baroffset=5;
// var mychart=d3.select('#element')
//             .append('svg').attr('height',height)
//             .attr('width',width)
//             .style('background','#f4f4f4')
//             .selectAll('rect').data(arr)
//             .enter().append('rect')
//           .style('fill','lightgreen')
//           .attr('width',barwidth)
//           .attr('height',function(d){
//             return d;
//           }).attr('x',function(d,i){
//               return i*(barwidth+baroffset);})
//               .attr('y',function(d){return height-d;})


// scaling
// var arr=[200,300,400]
// var height=300;
// var width=200;
// var tooltip=d3.select('body').append('div')
// .style('position','absolute')
// .style('background','#f4f4f4')
// .style('padding','5 15px')
// .style('border','1px #333 solid')
// .style('bordder-radius','5px')
// .style('opacity','0')
// // var barwidth=35;
// // var baroffset=5;
// var yscale=d3.scaleLinear().domain([0,d3.max(arr)])
// .range([0,height])
// var xscale=d3.scaleBand().domain(d3.range(0,arr.length))
// .range([0,width])
// var color=d3.scaleLinear().domain([0,arr.length]).range(['#90ee90','#30c230'])
// d3.select('#element')
//             .append('svg').attr('height',height)
//             .attr('width',width)
//             .style('background','#f4f4f4')
//             .selectAll('rect').data(arr)
//             .enter().append('rect')
//           .style('fill',function(d,i){return color(i);})
//           .attr('width',xscale.bandwidth())
//           .attr('height',function(d){
//             return yscale(d);
//           }).attr('x',function(d,i){
//               return xscale(i);})
//               .attr('y',function(d){return height-yscale(d);})
//               .on('mouseover',function(d){
//                 tooltip.transition().style('opacity',1)
//                 tooltip.html(d).style('left',(event.pageX)+'px')
//                 .style('top',(event.pageY)+'px')
//                 d3.select(this).style('opacity',0.5)
//               }).on('mouseout',function(d){
//                 tooltip.transition().style('opacity',0)
//                 d3.select(this).style('opacity',1)

//               })

// ==================================
// var arr=[200,300,400]
// var height=300;
// var anim=700;
// var del=30;
// var width=200;
// var tooltip=d3.select('body').append('div')
// .style('position','absolute')
// .style('background','#f4f4f4')
// .style('padding','5 15px')
// .style('border','1px #333 solid')
// .style('bordder-radius','5px')
// .style('opacity','0')
// // var barwidth=35;
// // var baroffset=5;
// var yscale=d3.scaleLinear().domain([0,d3.max(arr)])
// .range([0,height])
// var xscale=d3.scaleBand().domain(d3.range(0,arr.length))
// .range([0,width])
// var color=d3.scaleLinear().domain([0,arr.length]).range(['#90ee90','#30c230'])
// var mychart=d3.select('#element')
//             .append('svg').attr('height',height)
//             .attr('width',width)
//             .style('background','#f4f4f4')
//             .selectAll('rect').data(arr)
//             .enter().append('rect')
//           .style('fill',function(d,i){return color(i);})
//           .attr('width',xscale.bandwidth())
//           .attr('x',function(d,i){
//               return xscale(i);})
//               .attr('y',height)
//               .on('mouseover',function(d){
//                 tooltip.transition().style('opacity',1)
//                 tooltip.html(d).style('left',(event.pageX)+'px')
//                 .style('top',(event.pageY)+'px')
//                 d3.select(this).style('opacity',0.5)
//               }).on('mouseout',function(d){
//                 tooltip.transition().style('opacity',0)
//                 d3.select(this).style('opacity',1)

//               })

// mychart.transition().attr('height',function(d){
//   return yscale(d);
// }).attr('y',function(d){
//   return height-yscale(d);
// }).duration(anim)
// .delay(function(d,i){
//   return i*del;
// })

// 6----------------------------path

// var canvas =d3.select('body').append('svg').attr('height',500).attr('width',500);
// var data =[
//   {x:10,y:20},{x:30,y:40},{x:50,y:60}
// ];
// var group=canvas.append('g').attr('transform','translate(100,100)');
// var line=d3.line().x(function(d){return d.x;}).y(function(d){return d.y;});
// group.selectAll('path').data([data]).enter()
// .append('path').attr('d',line).attr('fill','none').attr('stroke','#000').attr('stroke-width',10)

var data=[
  {
    "name": "johns",
    "age": 24
  },
  {
    "name": "liyani",
    "age": 23
  },
  {
    "name": "yadu",
    "age": 24
  },
  {
    "name": "jaya",
    "age": 28
  },
  {
    "name": "mac",
    "age": 31
  }
];





  var canvas = d3.select('body').append('svg')
      .attr('width', 500)
      .attr('height', 500);

  canvas.selectAll('rect')
      .data(data)
      .enter()
          .append('rect')
          .attr('width',function (d) { return d.age * 10; })
          .attr('height', 48)
          .attr('y', function (d, i) { return i * 50; })
          .attr('fill', 'blue');

  canvas.selectAll('text')
      .data(data)
      .enter()
           .append('text')
           .attr('fill','white')
           .attr('y', function (d, i) {
               return i* 50 + 24;
           })
      .text(function (d) {
          return d.name;
      })
































// const class12 = [
//   {
//    name: 'Tessy',
//    percentage: 89,
//    price: 0
//   },
//   {
//    name: 'Tim',
//    percentage: 92,
//    price: 0
//   },
//   {
//    name: 'Jessy',
//    percentage: 93,
//    price: 0
//   },
//   {
//    name: 'John',
//    percentage: 94,
//    price: 0
//   }
//  ];
// let obj1 = (x) => {
//   for(i=0;i<x.length;i++){
//   if (x[i].percentage>90){
//     m=x[i].percentage;
//     x[i].price=(m-90)*1000;
//     console.log(x[i].price);
//   }
//   else{
//     x[i].price=0;
//   }
// }
// x= x.filter(item => (item.price > 3));
//    return console.log(x)
// }
// obj1(class12);

// -----------------------------------------------------------------------------------------------------------------------



d3.select("p").text("Hello World");
d3.selectAll("h1").style("color", "#40E0D0");
// var canvas=d3.select('body').append('svg').attr('width',500).attr('height',500);
// var group=canvas.append('g').attr('transform','translate(200,200)');
// var r = 100;
// var p = Math.PI * 2;
// // var arc = d3.arc()
// // 				.innerRadius(r- 20)
// // 				.outerRadius(r)
// // 				.startAngle(0)
// // 				.endAngle(p-1);
// // group.append("path").attr("d", arc);


// var group=canvas.append('g').attr('transform','translate(200,200)');
// var data=[10,30,20];
// var rad=100;
// var color=d3.scaleBand().range(['red','orange','pink'])
// var arc=d3.arc().innerRadius(50).outerRadius(rad);
// var pie=d3.pie().value(function(d){
//     return d;
// });
// var arcs=group.selectAll('.arc').data(pie(data)).enter().append('g').attr('class','arc');
// arcs.append('path').attr('d',arc).attr('fill',function(d){return color(d.data);});














// Symbol// let email = Symbol();
// let Employee = {
//     name:'rajesh',
//     phone:9800000000,
//     [email]:"rajesh@gmail.com"
// };

// let allKeys = Reflect.ownKeys(Employee);
// let privateKeys =  Object.getOwnPropertySymbols(Employee);
// let publicKeys = Object.getOwnPropertyNames(Employee);
// console.log(allKeys);
// console.log(privateKeys);
// console.log(publicKeys);


// var start=0;
// var even=50;
// var odd=51;
// var end=100;
// var x=0;
// function test(){
//     console.log(start);
//     console.log(start+1);
//     m=(x%2==0)?even:odd;
//     console.log(m);
//     (m==even)?even--:odd++;
//     console.log(end-1);
//     console.log(end);
//     start += 2;
//     end   -= 2;
//     x     += 1;
// }


// 0 1 50 99 100 
// 2 3 51 97 98 
// 4 5 49 95 96
// 6 7 52 93 94
// 8 9 48 91 92