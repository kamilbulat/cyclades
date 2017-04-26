function Tablice() {
    console.log("tablice")
	var plansza = [
		[
			{ typ: "woda", flaga: "", statki: 0 }, 
			{ typ: "woda", flaga: "", przyrost: 1, statki: 0  }
		],
		[
			{ typ: "wyspa", nazwa: 0 }, 
			{ typ: "woda", flaga: "yellow", statki: 1 }, 
			{ typ: "woda", flaga: "", statki: 0 }
		],
		[
			{ typ: "woda", flaga: "", statki: 0 }, 
			{ typ: "woda", flaga: "", statki: 0 }, 
			{ typ: "wyspa", nazwa: 1 }, 
			{ typ: "wyspa", nazwa: 1 }
		],
		[
			{ typ: "woda", flaga: "", statki: 0 },
			{ typ: "wyspa", nazwa: 2 },
			{ typ: "woda", flaga: "", statki: 0 },
			{ typ: "woda", flaga: "black", statki: 0 },
			{ typ: "woda", flaga: "", statki: 0 }
		],
		[
			{ typ: "woda", flaga: "", statki: 0 },
			{ typ: "woda", flaga: "", statki: 0 },
			{ typ: "wyspa", nazwa: 2 },
			{ typ: "woda", flaga: "", statki: 0 },
			{ typ: "wyspa", nazwa: 3 },
			{ typ: "woda", flaga: "", statki: 0 }
		],
		[
			{ typ: "woda", flaga: "", przyrost: 1, statki: 0  },
			{ typ: "wyspa", nazwa: 4 },
			{ typ: "woda", flaga: "", statki: 0 },
			{ typ: "woda", flaga: "", statki: 0 },
			{ typ: "woda", flaga: "", statki: 0 },
			{ typ: "woda", flaga: "yellow", statki: 1 },
			{ typ: "woda", flaga: "", przyrost: 1, statki: 0  }
		],
		[
			{ typ: "wyspa", nazwa: 4 },
			{ typ: "wyspa", nazwa: 4 },
			{ typ: "woda", flaga: "", statki: 0 },
			{ typ: "wyspa", nazwa: 5 },
			{ typ: "woda", flaga: "", statki: 0 },
			{ typ: "wyspa", nazwa: 6 }
		],
		[
			{ typ: "woda", flaga: "", statki: 0 },
			{ typ: "woda", flaga: "", statki: 0 },
			{ typ: "woda", flaga: "", statki: 0 },
			{ typ: "woda", flaga: "", statki: 0 },
			{ typ: "wyspa", nazwa: 6 }
		],	
		[
			{ typ: "wyspa", nazwa: 7 },
			{ typ: "woda", flaga: "", statki: 0 },
			{ typ: "woda", flaga: "", statki: 0 },
			{ typ: "wyspa", nazwa: 6 }
		],
		[
			{ typ: "wyspa", nazwa: 7 },
			{ typ: "woda", flaga: "", statki: 0 },
			{ typ: "wyspa", nazwa: 6 }
		],
		[
			{ typ: "wyspa", nazwa: 7 },
			{ typ: "woda", flaga: "", statki: 0 }
		]
	]
	var wyspy = [
	    {
	        flaga: "yellow",
	        wojska: 1,
	        przyrost: 2,
	        budynki: [0],
	        bestia: 0,
	    },
	    {
	        flaga: "black",
	        wojska: 1,
	        przyrost: 1,
	        budynki: [0, 0],
	        bestia: 0,
	    },
	    {
	        flaga: "",
	        wojska: 0,
	        przyrost: 1,
	        budynki: [0, 0],
	        bestia: 0,
	    },
	    {
	        flaga: "",
	        wojska: 0,
	        przyrost: 2,
	        budynki: [0],
	        bestia: 0,
	    },
	    {
	        flaga: "",
	        wojska: 0,
	        przyrost: 0,
	        budynki: [0, 0, 0],
	        bestia: 0,
	    },
	    {
	        flaga: "",
	        wojska: 0,
	        przyrost: 2,
	        budynki: [0],
	        bestia: 0,
	    },
	    {
	        flaga: "yellow",
	        wojska: 1,
	        przyrost: 1,
	        budynki: [0, 0, 0, 0],
	        bestia: 0,
	    },
	    {
	        flaga: "black",
	        wojska: 1,
	        przyrost: 1,
	        budynki: [0, 0, 0],
	        bestia: 0,
	    },
	]
	this.getPlansza = function(){
		return plansza;
	}
	this.getWyspy = function () {
	    return wyspy;
	}
}