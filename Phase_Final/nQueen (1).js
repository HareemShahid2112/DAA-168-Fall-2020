var taSol1, taSol2, taSol3;
var btnRun;

window.onload = function() {
	console.log("Hooray! Its working");
	taSol1 = document.getElementById('ta_sol1');
	taSol2 = document.getElementById('ta_sol2');
	taSol3 = document.getElementById('ta_sol3');
	btnRun = document.getElementById('btnRun');
} //end window.onload

function runEmAll(){
	console.log("Running All Solutions")
	taSol1.value = ""; 	taSol2.value = ""; 	taSol3.value = "";
	var start;
	var end;
	var n=4;
	for (var k = 4; k <= 16; k++) {
		//Runs each solution and measures performance in microseconds
		console.log("In Forloop: Line 18, k = "+k+"\n");
		start = performance.now();
		sol1(n);
		end = performance.now();
		taSol1.value+= ""+n+", "+(end-start)*1000+"\n";

		start = performance.now();
		sol2(n);
		end = performance.now();
		taSol2.value+= ""+n+", "+(end-start)*1000+"\n";

		start = performance.now();
		sol3(n);
		end = performance.now();
		taSol3.value+= ""+n+", "+(end-start)*1000+"\n";
		n = n * 2;
		}//end for
	
	
	
	
	
	
	

}//end runEmAll

function sol1(n){
	//Implement your brute-force solution here

	//--This is garbage code: Remove this--//
	for (var i = 1; i <= n; i++) {
		for (var j = 1; j <= n ; j=j*2) {
			for(var k=0;k<50;k++);
		}//end for j
	}//end for i
	//-- End of garbage code --//

	//Mention reference where you got the solution
	//Ref: http://
	//Ref: If you found any paper
}//end sol1

function sol2(n){
	//Implement your recursive back-tracking solution here

	//--This is garbage code: Remove this--//
	for (var i = 1; i <= n; i++) {
		for (var j = 1; j <= n; j++) {
			for(var k=0;k<50;k++);
		}//end for i
	}//end for j
	//-- End of garbage code --//

	//Mention reference where you got the solution
	//Ref: http://
	//Ref: If you found any paper
}//end sol2

function sol3(n){
	//Implement your dynammic programming solution here

	//--This is garbage code: Remove this--//
	import java.util.io*;
import java.util.Scanner*;


public class NQueen {
    public static void main(String[] args) throws Expection {

        Scanner sc = new Scanner(System.in);
        int size = sc.nextInt();

        int[][] chess = new int[size][size];
	     printNQueen(chess, "" ,0);
	}
	 public static void printNQueen(int[][] chess, String qsf, int row);{
        if(row == chess.length)
		{
	system.out.print(qsf + ".");
	return;
		}

		for (int row = 0; row < size; row++) {
            for (int col = 0; col < size; col++) {
				if(isItasafeplaceForTheQueen(chess, row,col)== true){
                chess[row][col] = 1;
			printNQueen(chess,qsf + row + "-" + col + "," , row + 1)
			 chess[row][col] =0;
            }

        }
	}
    public static boolean isItasafeplaceForTheQueen(int[][] chess, int col, int row){

        for(int i = row -1 , j = col; i>= 0; i--)

        if (chess[i][j] == 1) {
            return false;
        }
    }
	for(int i = row -1 , j = col - 1; i >= 0 && j>= 0; i-- ; j--)

        if (chess[i][j] == 1) {
            return false;
        }
    }
	for(int i = row -1 , j = col + 1; i >= 0 && j < chess.length; i-- ; j++)

        if (chess[i][j] == 1) {
            return false;
        }
    }

	return true;
}
}

    //end for j
	//--End of Garbage Code--//

	//Mention reference where you got the solution
	//Ref: http://https://www.cs.cornell.edu/~rdz/Papers/RZ-IPL92.pdf
	//Ref: If you found any paper
}//end sol3





/////////////******graph dynamic programming*******//////////////
 var tracedp = {
        type: 'bar',
        x: xArraydp,
        y: yArraydp,
        marker: {
            color: '#C8A2C8',
            line: {
                width: 2.2
            }
        }
      };
      
      var DP = [ DP ];
      
      var layoutDP = { 
        title: 'DYNAMIC PROGRAMMING Algorithm',
        font: {size: 10}
      };
      
      var configDP = {responsive: true}
      
      Plotly.newPlot('dynamicProgramming', dataDP, layoutDP, configDP );
    
    
}

function sol3(n){
    var i = 0;
    var columns=[];
    queens(columns, i, n)
}
