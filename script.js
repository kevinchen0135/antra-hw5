const data = [
    {region: 'US', model: 'A', sales: 150},
    {region: 'US', model: 'B', sales: 120},
    {region: 'US', model: 'C', sales: 350},
    {region: 'EU', model: 'A', sales: 200},
    {region: 'EU', model: 'B', sales: 100},
    {region: 'EU', model: 'C', sales: 250},
    {region: 'CA', model: 'A', sales: 200},
    {region: 'CA', model: 'B', sales: 100},
    {region: 'CA', model: 'C', sales: 230},
    {region: 'CA', model: 'D', sales: 400},
];

var region=[]
var model=[]
var sales=[]
var salesSum=[]
var xregion=[]
function dataSort(){
    for(let x in data){
        region.push(data[x].region)
        model.push(data[x].model)
        sales.push(data[x].sales)
        if(!xregion.includes(data[x].region)){
            xregion.push(data[x].region)
        }
       
    }

}
function sumSales(){

    for(let i=0;i<xregion.length;i++){
        let reg=xregion[i]
        let sum=0
        for( let x in data){
         if(data[x].region==reg){
            sum=sum+data[x].sales
         }
        }
        salesSum.push(sum)
    }

}

function tableMake(){
    for(let i=0;i<xregion.length;i++){
        let tab=document.getElementById("myTable")
        let newRow=document.createElement("tr")
        newRow.innerHTML=`<td>${xregion[i]}</td><td>sum</td><td>${salesSum[i]}</td>`
        tab.appendChild(newRow)
        for(let x in data){
            if(data[x].region==xregion[i]){
                let newData=document.createElement("tr")
                newData.innerHTML=`<td>${xregion[i]}</td><td>${data[x].model}</td><td>${data[x].sales}</td>`
                tab.appendChild(newData)


            }

        }

    }
}
function load() {
    dataSort();
    sumSales();
    tableMake();
 }

