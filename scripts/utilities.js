function forEach(pointsArray, callbackPoint) {
    for ( var i = 0; i < pointsArray.length; i++) {
        var point = pointsArray[i];
        callbackPoint(point);
    }
}
    
    
