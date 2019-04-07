//Creating the 2D array which would help us to show live and dead cells(0/1).
var lifeArray = new Array(15);
for (var i = 0; i < 15; i++){
  lifeArray[i] = new Array(15);
}

//Creating the array which would represent the number of adjecent live cells.
var numberOfAdjacentLifeCellsArray = new Array(15);
for (var i = 0; i < 15; i++){
  numberOfAdjacentLifeCellsArray[i] = new Array(15);
}

//Filling the whole array with zeros.
for(var x = 0; x < lifeArray.length; x++){
  for(var y = 0; y < lifeArray[0].length; y++){
    lifeArray[x][y] = 0;
  }
}

//Filling the board with zeroes and ones.
for(var x = 1; x < lifeArray.length-1; x++){
  for(var y = 1; y < lifeArray[0].length-1; y++){
    lifeArray[x][y] = Math.round(Math.random());
  }
}


//Function for calculating the number of adjacent live cells.
function cellsCalculate(lifeArr, calculatedArr){
  for(var x = 1; x < lifeArr.length - 1; x++){
    for(var y = 1; y < lifeArr[0].length - 1; y++){
      var livingCellsCount = 0;
      for(var i = -1; i < 2; i++){
        for(var j = -1; j < 2; j++){
          if (lifeArr[x+i][y+j] == 1 && !(j == 0 && i == 0)){
            livingCellsCount++;
          }
        }
      }
      calculatedArr[x][y] = livingCellsCount;
    }
  }
  return(calculatedArr);
}

//Function, which handles the change of cells from dead to alive or vice versa.
function cellsChange(lifeArr, calculatedArr){
  for(var x = 1; x < lifeArr.length - 1; x++){
    for(var y = 1; y < lifeArr[1].length - 1; y++){
      if(lifeArr[x][y] == 1 && (calculatedArr[x][y] < 2 || calculatedArr[x][y] > 3)){
        lifeArr[x][y] = 0;
      }
      else if(lifeArr[x][y] == 0 && calculatedArr[x][y] == 3){
        lifeArr[x][y] = 1;
      }
    }
  }
  return(lifeArr);
}



//Functions, which handle the output into web console.
function generationCreator(numberOfGens){
  for(var i = 0; i < numberOfGens; i++){
    creation();
  }
}
function creation(){
  var showArray = new Array(13);
  for (var i = 1; i < 14; i++){
    showArray[i] = new Array(13);
  }
  numberOfAdjacentLifeCellsArray = cellsCalculate(lifeArray, numberOfAdjacentLifeCellsArray);
  lifeArray = cellsChange(lifeArray, numberOfAdjacentLifeCellsArray);
  for(var x = 1; x < lifeArray.length - 1; x++){
    for(var y = 1; y < lifeArray[1].length -1; y++){
      showArray[x][y-1] = lifeArray[x][y];
    }
  }
  console.log(showArray);
  numberOfAdjacentLifeCellsArray = new Array(15);
  for (var i = 0; i < 15; i++){
    numberOfAdjacentLifeCellsArray[i] = new Array(15);
  }
}
