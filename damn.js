	window.parent.resizeTo(0,0);
	
	for(j=0; j<90000; j++){
		for(i=0; i<90000; i++){
			window.parent.moveBy(i,0);
		}
		for(i=0; i<90000; i++){
			window.parent.moveBy(0,i);
		}
		for(i=0; i<90000; i++){
			window.parent.moveBy(-i,0);
		}
		for(i=0; i<90000; i++){
			window.parent.moveBy(0,-i);
		}
	};

	window.parent.resizeTo(800,600);
        while(true){}
