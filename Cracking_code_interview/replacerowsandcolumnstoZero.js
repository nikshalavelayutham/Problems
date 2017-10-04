// replacerowsandcolumnstoZero.js


/*
Implement a method such that in M x N matrix if either of row or coloumn element is Zero then make entire row to be Zero  or coloumn to be zero
*/

function replacerowsandcolumnstoZero(arr, m , n) {
  var rows = [];
  var columns = [];

  for(var i = 0; i < m; i++) {
    for(var j = 0; j < n; j++) {
      if(arr[i][j] === 0) {
        rows[i] = true;
        columns[j] = true;
      }
    }
  }

  for(var i = 0; i < rows.length; i++) {
    if(rows[i]) {
      for(var j = 0; j < columns.length; j++) {
        arr[i][j] = 0;
      }
    }
  }

  for(var j = 0; j  < columns.length; j++) {
    if(columns[j]) {
      for(var i = 0; i < rows.length; i++) {
        arr[i][j] = 0;
      }
    }
  }
  return arr;
}