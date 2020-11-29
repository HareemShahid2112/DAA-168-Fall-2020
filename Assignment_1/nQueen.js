var taSol1, taSol2, taSol3;
var btnRun;

window.onload = function() {
    console.log("Hooray! Its working");
    taSol1 = document.getElementById('ta_sol1');
    // taSol2 = document.getElementById('ta_sol2');
    // taSol3 = document.getElementById('ta_sol3');
    // btnRun = document.getElementById('btnRun');
} //end window.onload

function runEmAll(){
    console.log("Running All Solutions")
	taSol1.value = "";
	//   taSol2.value = ""; 
	//    taSol3.value = "";
    var start;
    var end;
    var n=4;
    var xArrayBrute = [];
    var yArrayBrute = [];
    for (var k = 4; k <= 16; k++) {
        //Runs each solution and measures performance in microseconds
        console.log("In Forloop: Line 18, k = "+k+"\n");
        start = performance.now();
        sol1(n);
        
        end = performance.now();
        taSol1.value+= ""+n+", "+(end-start)*1000+"\n";
        xArrayBrute.push(n);
        yArrayBrute.push((end - start) * 1000);
        // start = performance.now();
        // sol2(n);
        // end = performance.now();
        // taSol2.value+= ""+n+", "+(end-start)*1000+"\n";
        
        // start = performance.now();
        // sol3(n);
        // end = performance.now();
        // taSol3.value+= ""+n+", "+(end-start)*1000+"\n";
        n = n + 1;  
    }//end for
    ///////////////////////////////////////////////********************Graph For Brute Force***********************////////////////////////////////////////////////////////
    var traceBruteForce = {
        type: 'bar',
        x: xArrayBrute,
        y: yArrayBrute,
        marker: {
            color: '#C8A2C8',
            line: {
                width: 2.5
            }
        }
      };
      
      var dataBruteForce = [ traceBruteForce ];
      
      var layoutBruteForce = { 
        title: 'Brute Force Algorithm',
        font: {size: 11}
      };
      
      var configBruteForce = {responsive: true}
      
      Plotly.newPlot('bruteForce', dataBruteForce, layoutBruteForce, configBruteForce );
    ///////////////////////////////////////////////********************Graph End For Brute Force***********************////////////////////////////////////////////////////////

    
}//end runEmAll

function sol1(n){
    var i = 0;
    var columns=[];
    //Implement your brute-force solution here
    queens(columns, i, n)
}

      
/////////////////////////////////// ***************   Brute Force  *************** //////////////////////////////////////////////////////
   function noConflicts(columns, i) {
    for (var j=0; j<i; j++) {
        // same row
        if (columns[j] === columns[i]) {
            return false;
        }
        //document.writeln(columns)
        // diagonal
        if (i-j === Math.abs(columns[j]-columns[i])) {
            return false;
        }
    }
    return true;
}

// recursively solves the n-queens problem by brute force
function queens(columns, i, n) {
    // we have a complete solution
    if (i === n) {
        return columns;
    }
    
    // try placing the next queen on every row
    for (var j=0; j<n; j++) {
        columns[i] = j;
        if (noConflicts(columns, i)) {
            var solution = queens(columns, i+1, n);
            if (solution) {
                //document.writeln(solution);
                return solution;
            }
        }
    }
    //columns.pop();
    
    return false;
}

// returns an array that records the queens' position in each column
// or false if no solution is found
solution = queens([], 0, 8);
/////////////////////////////////// ***************   End Of Brute Force *************** ////////////////////////////////////////