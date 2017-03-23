function Tablice() {
    console.log("tablice")
	var plansza = [
		[
			{ typ: "woda", flaga: "", statki: 0 }, 
			{ typ: "woda", flaga: "", przyrost: 1, statki: 0  }
		],
		[
			{ typ: "wyspa", flaga: "yellow", nazwa: "w1" }, 
			{ typ: "woda", flaga: "yellow", statki: 1 }, 
			{ typ: "woda", flaga: "", statki: 0 }
		],
		[
			{ typ: "woda", flaga: "", statki: 0 }, 
			{ typ: "woda", flaga: "", statki: 0 }, 
			{ typ: "wyspa", flaga: "black", nazwa: "w2" }, 
			{ typ: "wyspa", flaga: "", nazwa: "w2" }
		],
		[
			{ typ: "woda", flaga: "", statki: 0 },
			{ typ: "wyspa", flaga: "", nazwa: "w3" },
			{ typ: "woda", flaga: "", statki: 0 },
			{ typ: "woda", flaga: "black", statki: 0 },
			{ typ: "woda", flaga: "", statki: 0 }
		],
		[
			{ typ: "woda", flaga: "", statki: 0 },
			{ typ: "woda", flaga: "", statki: 0 },
			{ typ: "wyspa", flaga: "", nazwa: "w3" },
			{ typ: "woda", flaga: "", statki: 0 },
			{ typ: "wyspa", flaga: "", nazwa: "w4" },
			{ typ: "woda", flaga: "", statki: 0 }
		],
		[
			{ typ: "woda", flaga: "", przyrost: 1, statki: 0  },
			{ typ: "wyspa", flaga: "", nazwa: "w5" },
			{ typ: "woda", flaga: "", statki: 0 },
			{ typ: "woda", flaga: "", statki: 0 },
			{ typ: "woda", flaga: "", statki: 0 },
			{ typ: "woda", flaga: "yellow", statki: 1 },
			{ typ: "woda", flaga: "", przyrost: 1, statki: 0  }
		],
		[
			{ typ: "wyspa", flaga: "", nazwa: "w5" },
			{ typ: "wyspa", flaga: "", nazwa: "w5" },
			{ typ: "woda", flaga: "", statki: 0 },
			{ typ: "wyspa", flaga: "", nazwa: "w6" },
			{ typ: "woda", flaga: "", statki: 0 },
			{ typ: "wyspa", flaga: "yellow", nazwa: "w7" }
		],
		[
			{ typ: "woda", flaga: "", statki: 0 },
			{ typ: "woda", flaga: "", statki: 0 },
			{ typ: "woda", flaga: "", statki: 0 },
			{ typ: "woda", flaga: "", statki: 0 },
			{ typ: "wyspa", flaga: "yellow", nazwa: "w7" }
		],	
		[
			{ typ: "wyspa", flaga: "yellow", nazwa: "w8" },
			{ typ: "woda", flaga: "", statki: 0 },
			{ typ: "woda", flaga: "", statki: 0 },
			{ typ: "wyspa", flaga: "yellow", nazwa: "w7" }
		],
		[
			{ typ: "wyspa", flaga: "yellow", nazwa: "w8" },
			{ typ: "woda", flaga: "", statki: 0 },
			{ typ: "wyspa", flaga: "yellow", nazwa: "w7" }
		],
		[
			{ typ: "wyspa", flaga: "yellow", nazwa: "w8" },
			{ typ: "woda", flaga: "", statki: 0 }
		]
	]
	var wyspy = {
	    w1: {
	        flaga: "yellow",
	        wojska: 1,
	        przyrost: 2,
	        budynki: [0],
	        bestia: 0,
	    },
	    w2: {
	        flaga: "black",
	        wojska: 1,
	        przyrost: 1,
	        budynki: [0, 0],
	        bestia: 0,
	    },
	    w3: {
	        flaga: "",
	        wojska: 0,
	        przyrost: 1,
	        budynki: [0, 0],
	        bestia: 0,
	    },
	    w4: {
	        flaga: "",
	        wojska: 0,
	        przyrost: 2,
	        budynki: [0],
	        bestia: 0,
	    },
	    w5: {
	        flaga: "",
	        wojska: 0,
	        przyrost: 0,
	        budynki: [0, 0, 0],
	        bestia: 0,
	    },
	    w6: {
	        flaga: "",
	        wojska: 0,
	        przyrost: 2,
	        budynki: [0],
	        bestia: 0,
	    },
	    w7: {
	        flaga: "yellow",
	        wojska: 1,
	        przyrost: 1,
	        budynki: [0, 0, 0, 0],
	        bestia: 0,
	    },
	    w8: {
	        flaga: "black",
	        wojska: 1,
	        przyrost: 1,
	        budynki: [0, 0, 0],
	        bestia: 0,
	    },
	}
	this.getPlansza = function(){
		return plansza;
	}
}