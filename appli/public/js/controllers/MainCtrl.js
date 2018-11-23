angular.module('MainCtrl', []).controller('MainController', function($scope) {

	var liste = {"1":{"c":"Your company","q":"In which sector of activity is your company active? (linked with your APE code)","n":"single","t":"l","a":{"Industry":"2","Business":"2","Information and communication":"2","Other services activity":"2","Construction ":"2","Public sector":"2","Real estate":"2","Specialized, Scientific and Technical or Administrative and Support Services Activities":"2","All other activities (financial, agricultural activities ...)":"2"}},"2":{"c":"Your company","q":"What is the number of employees in your company on 18/12/31 ?","n":"single","t":"l","a":{"0":"3","1 to 2":"3","3 to 9":"3","10 to 49":"3","50 to 249":"3","250 to 4999":"3","Real estate":"3","More than 5000":"3"}},"3":{"c":"Your company","q":"What is the turnover of your company in the last fiscal year? (or annual budget for Public sector)","n":"single","t":"l","a":{"0 to 100K €":"4","100 to 500 K€":"4","500 to 2 M €":"4","2 to 10 M€":"4","10 to 50 M€ ":"4","Public sector":"4","Real estate":"4","Specialized, Scientific and Technical or Administrative and Support Services Activities":"4","All other activities (financial, agricultural activities ...)":"4"}},"4":{"c":"Your company","q":"Do you develop digital services for internal or external use (sales to customers)?","n":"single","t":"rb","a":{"Yes":"5","No":"12"}},"5":{"c":"Your company","q":"What is the number of users of your digital services?","n":"text","t":"t","a":{"text":"6"}},"6":{"c":"Your company","sc":"Ecoconception good practice","q":"Do you apply the rules and best practices for digital accessibility?","n":"single","t":"rb","a":{"Yes":"7","No":"7","I don't know":"7"}},"7":{"c":"Your company","sc":"Ecoconception good practice","q":"Have you optimized the states and printouts in your application tools? (reduced number of pages when printing, ink consumption ...)","n":"single","t":"rb","a":{"Yes":"8","No":"8","I don't know":"8"}},"8":{"c":"Your company","sc":"Ecoconception good practice","q":"Do you integrate the principles of the ecodesign of digital services?","n":"single","t":"rb","a":{"Yes":"9","No":"9","I don't know":"9"}},"9":{"c":"Your company","sc":"Ecoconception good practice","q":"Do you use a modular application architecture?","n":"single","t":"rb","a":{"Yes":"10","No":"10","I don't know":"10"}},"10":{"c":"Your company","sc":"Ecoconception good practice","q":"Do you do a design review at the end of your application's development?","n":"single","t":"rb","a":{"Yes":"11","No":"11","I don't know":"11"}},"11":{"c":"Information system","q":"What is the overall storage volume of your corporate data (centralized on external hard drives, centralized server, NAS, SAN ...) in Terabytes (TB) useful?","n":"single","t":"special2","a":{"I don't know":"12","I don't want to answer":"12","TB":"12"}},"12":{"c":"Information system","q":"Do you have a server or do you only work with one or more workstations?","n":"single","t":"rb","a":{"We work with workstation (s), without centralized physical server":"51","We have (at least) a centralized physical server":"13"}},"13":{"c":"Information system","q":"Do you have a dedicated room, simple room or cupboard with bay dedicated to your IT infrastructure?","n":"single","t":"rb","a":{"A closet or a room without any specific system":"31","A dedicated room":"14"}},"14":{"c":"Information system","sc":"Server/Computer room","q":"Is your computer room in house or at a host?","n":"single","t":"rb","a":{"Internal":"15","Host Member of the European Code of Conduct for Datacenters":"15","Non-adhering Host of the European Code of Conduct for Data Centers":"15"}},"15":{"c":"Information system","sc":"Server/Computer room","q":"What is the total area of your computer rooms (excluding technical infrastructure *)? (in m2)","n":"single","t":"special2","a":{"M²":"16","I don't know":"16","I don't want to answer":"16"}},"16":{"c":"Information system","sc":"Server/Computer room","q":"Do you know the PUE * of your Data Center?","n":"single","t":"rb","a":{"Less than 1,6":"17","Between 1,6 and 2,1":"17","More than 2,1":"17","I don't know":"17"}},"17":{"c":"Information system","sc":"Server/Computer room","q":"What is the rate of charge or energy use of your computer rooms?","n":"single","t":"rb","a":{"100% - 90%":"19","90% - 60%":"19","Less than 60%":"19","I don't know":"19"}},"19":{"c":"Information system","sc":"Datacenter optimisation process : Have you led or are you planning actions to optimize your infrastructure?","q":"Especially: The purchase of non-IT equipment from IT rooms (air conditioning, air treatment, inverters, etc.) according to energy efficiency criteria","n":"single","t":"rb","a":{"Yes":"20","No":"20","I don't know":"20"}},"20":{"c":"Information system","sc":"Datacenter optimisation process : Have you led or are you planning actions to optimize your infrastructure?","q":"Especially: Implementing the good practices of the <European Code of Conduct for DataCenter>?","n":"single","t":"rb","a":{"Yes":"21","No":"21","I don't know":"21"}},"21":{"c":"Information system","sc":"Datacenter optimisation process : Have you led or are you planning actions to optimize your infrastructure?","q":"Especially: Data center PUE tracking","n":"single","t":"rb","a":{"Yes":"22","No":"22","I don't know":"22"}},"22":{"c":"Information system","sc":"Datacenter optimisation process : Have you led or are you planning actions to optimize your infrastructure?","q":"Especially: Regular monitoring of environmental indicators of computer rooms","n":"single","t":"rb","a":{"Yes":"23","No":"23","I don't know":"23"}},"23":{"c":"Information system","sc":"Datacenter optimisation process : Have you led or are you planning actions to optimize your infrastructure?","q":"Optimization: Environmental impact analysis of the datacenter in life cycle approach","n":"single","t":"rb","a":{"Yes":"24","No":"24","I don't know":"24"}},"24":{"c":"Information system","sc":"Datacenter optimisation process : Have you led or are you planning actions to optimize your infrastructure?","q":"Especially: Optimizing the architecture and layout of rooms","n":"single","t":"rb","a":{"Yes":"25","No":"25","I don't know":"25"}},"25":{"c":"Information system","sc":"Datacenter optimisation process : Have you led or are you planning actions to optimize your infrastructure?","q":"Especially: The urbanization of halls in hot / cold aisles","n":"single","t":"rb","a":{"Yes":"26","No":"26","I don't know":"26"}},"26":{"c":"Information system","sc":"Datacenter optimisation process : Have you led or are you planning actions to optimize your infrastructure?","q":"Especially: Containment of air flows (corridors)","n":"single","t":"rb","a":{"Yes":"27","No":"27","I don't know":"27"}},"27":{"c":"Information system","sc":"Datacenter optimisation process : Have you led or are you planning actions to optimize your infrastructure?","q":"Especially: The use of natural cooling sources (freecooling)","n":"single","t":"rb","a":{"Yes":"28","No":"28","I don't know":"28"}},"28":{"c":"Information system","sc":"Datacenter optimisation process : Have you led or are you planning actions to optimize your infrastructure?","q":"Especially: Implementation of a heat recovery system for computer rooms (heating)","n":"single","t":"rb","a":{"Yes":"29","No":"29","I don't know":"29"}},"29":{"c":"Information system","sc":"Datacenter optimisation process : Have you led or are you planning actions to optimize your infrastructure?","q":"Especially: The set temperature in the cold corridor remains higher than 24°C","n":"single","t":"rb","a":{"Yes":"30","No":"30","I don't know":"30"}},"30":{"c":"Information system","sc":"Datacenter optimisation process : Have you led or are you planning actions to optimize your infrastructure?","q":"Especially: The choice of a modular datacenter architecture","n":"single","t":"rb","a":{"Yes":"32","No":"32","I don't know":"32"}},"32":{"c":"IT infrastructure","sc":"Have you led or are you planning actions to optimize your infrastructure?","q":"Especially: Suspending network equipment","n":"single","t":"rb","a":{"Yes":"33","No":"33","I don't know":"33"}},"33":{"c":"IT infrastructure","sc":"Have you led or are you planning actions to optimize your infrastructure?","q":"Especially: Pooling physical equipment","n":"single","t":"rb","a":{"Yes":"34","No":"34","I don't know":"34"}},"34":{"c":"IT infrastructure","sc":"Have you led or are you planning actions to optimize your infrastructure?","q":"Especially: Uninstalling unnecessary infrastructure","n":"single","t":"rb","a":{"Yes":"35","No":"35","I don't know":"35"}},"35":{"c":"IT infrastructure","sc":"Have you led or are you planning actions to optimize your infrastructure?","q":"Especially: Traceability of material elements (CMDB)","n":"single","t":"rb","a":{"Yes":"36","No":"36","I don't know":"36"}},"36":{"c":"IT infrastructure","sc":"Have you led or are you planning actions to optimize your infrastructure?","q":"Especially: The correct sizing of the servers in relation to their use","n":"single","t":"rb","a":{"Yes":"37","No":"37","I don't know":"37"}},"37":{"c":"IT infrastructure","sc":"Have you led or are you planning actions to optimize your infrastructure?","q":"Especially: Give priority to ASHRAE 2 compatible equipment","n":"single","t":"rb","a":{"Yes":"38","No":"38","I don't know":"38"}},"38":{"c":"IT infrastructure","sc":"Have you led or are you planning actions to optimize your infrastructure?","q":"Especially: A procedure for provisioning and de-provisioning data-processing equipment in datacenters","n":"single","t":"rb","a":{"Yes":"39","No":"39","I don't know":"39"}},"39":{"c":"IT infrastructure","q":"Do you know the number of physical servers and virtual servers in your company?","n":"single","t":"rb","a":{"Yes":"40","No":"42","I don't want to answer":"42"}},"40":{"c":"IT infrastructure","sc":"Number of server","q":"How many physical servers do you have?","n":"text","t":"t","a":{"text":"41"}},"41":{"c":"IT infrastructure","sc":"Number of server","q":"How many virtual servers do you have?","n":"text","t":"t","a":{"text":"42"}},"42":{"c":"IT infrastructure","sc":"Evolution of the need in server","q":"What will be the evolution of your number of physical servers for 2019? (in% or quantity)","n":"single","t":"special3","a":{"In %":"43","In quantity":"43","I do not want to answer":"43","I don't know":"43"}},"43":{"c":"IT infrastructure","sc":"Evolution of the need in server","q":"What will be the evolution of your number of virtual servers for 2019? (in% or quantity)","n":"single","t":"special3","a":{"In %":"44","In quantity":"44","I do not want to answer":"44","I don't know":"44"}},"44":{"c":"Management","q":"Has your company appointed a Green IT Manager / Digital Manager?","n":"single","t":"rb","a":{"Yes":"45","No":"45","I don't know":"45"}},"45":{"c":"Management","q":"Do you have a responsible digital strategy broken down into an action plan?","n":"single","t":"rb","a":{"Yes":"46","No":"46","I don't know":"46"}},"46":{"c":"Management","q":"Is Green IT a topic integrated into your CSR strategy?","n":"single","t":"rb","a":{"Yes":"47","No":"47","I don't know":"47"}},"47":{"c":"Management","q":"Do you regularly evaluate the environmental impacts of your information system?","n":"single","t":"rb","a":{"Yes partially, including only equipment present in the company":"48","Yes totally, including our internal equipment and services hosted by third parties":"48","No":"48","I don't know":"48"}},"48":{"c":"Management","q":"Do you have a team of competent referees on the topics of Green IT?","n":"single","t":"rb","a":{"Yes":"49","No":"49","I don't know":"49"}},"49":{"c":"Management","q":"Have you integrated Green IT into your business strategy","n":"single","t":"rb","a":{"Yes":"51","No":"51","I don't know":"51"}},"51":{"c":"Your IT","sc":"Do you have those equipments in your compagny:","q":"Fixed stations, workstations","n":"single","t":"rb","a":{"Used":"52","Not use functional":"52","Neither used nor functional":"52"}},"52":{"c":"Your IT","sc":"Do you have those equipments in your compagny:","q":"Laptops, digital tablets","n":"single","t":"rb","a":{"Used":"53","Not use functional":"53","Neither used nor functional":"53"}},"53":{"c":"Your IT","sc":"Do you have those equipments in your compagny:","q":"Small printers (<15kg, potentially used by a household)","n":"single","t":"rb","a":{"Used":"54","Not use functional":"54","Neither used nor functional":"54"}},"54":{"c":"Your IT","sc":"Do you have those equipments in your compagny:","q":"Flat screen monitors","n":"single","t":"rb","a":{"Used":"55","Not use functional":"55","Neither used nor functional":"55"}},"55":{"c":"Your IT","sc":"Do you have those equipments in your compagny:","q":"Other flat screens (TV, projection screen, digital board ...)","n":"single","t":"rb","a":{"Used":"56","Not use functional":"56","Neither used nor functional":"56"}},"56":{"c":"Your IT","sc":"Do you have those equipments in your compagny:","q":"CRT monitors (monitors or other)","n":"single","t":"rb","a":{"Used":"57","Not use functional":"57","Neither used nor functional":"57"}},"57":{"c":"Your IT","sc":"Do you have those equipments in your compagny:","q":"Video projectors","n":"single","t":"rb","a":{"Used":"58","Not use functional":"58","Neither used nor functional":"58"}},"58":{"c":"Your IT","sc":"Do you have those equipments in your compagny:","q":"Mobile phones","n":"single","t":"rb","a":{"Used":"59","Not use functional":"59","Neither used nor functional":"59"}},"59":{"c":"Your IT","sc":"Do you have those equipments in your compagny:","q":"Fixed telephones (standalone not connected to such a standard)","n":"single","t":"rb","a":{"Used":"60","Not use functional":"60","Neither used nor functional":"60"}},"60":{"c":"Your IT","sc":"Do you have those equipments in your compagny:","q":"Digital cameras","n":"single","t":"rb","a":{"Used":"61","Not use functional":"61","Neither used nor functional":"61"}},"61":{"c":"Your IT","sc":"Do you have those equipments in your compagny:","q":"Hard Disk Devices, Storage, Backup","n":"single","t":"rb","a":{"Used":"62","Not use functional":"62","Neither used nor functional":"62"}},"62":{"c":"Your IT","q":"Do you have other devices in your company? (accesories like mouse, keyboard, etc)","n":"single","t":"rb","a":{"Yes":"64","No":"70"}},"64":{"c":"Your IT","sc":"Regarding other devices, do you have in your company:","q":"Keyboards","n":"single","t":"rb","a":{"Used":"65","Not use functional":"65","Neither used nor functional":"65"}},"65":{"c":"Your IT","sc":"Regarding other devices, do you have in your company:","q":"Mouse","n":"single","t":"rb","a":{"Used":"66","Not use functional":"66","Neither used nor functional":"66"}},"66":{"c":"Your IT","sc":"Regarding other devices, do you have in your company:","q":"Graphic tablets","n":"single","t":"rb","a":{"Used":"67","Not use functional":"67","Neither used nor functional":"67"}},"67":{"c":"Your IT","sc":"Regarding other devices, do you have in your company:","q":"Scanners","n":"single","t":"rb","a":{"Used":"68","Not use functional":"68","Neither used nor functional":"68"}},"68":{"c":"Your IT","sc":"Regarding other devices, do you have in your company:","q":"Speakers","n":"single","t":"rb","a":{"Used":"69","Not use functional":"69","Neither used nor functional":"69"}},"69":{"c":"Your IT","sc":"Regarding other devices, do you have in your company:","q":"Office automation","n":"single","t":"rb","a":{"Used":"70","Not use functional":"70","Neither used nor functional":"70"}},"70":{"c":"Energy consumption","q":"Do you know the consumption of your workstation in kWh per year?","n":"single","t":"special1","a":{"Yes (please specify how much in kWh / year) ":"71","No":"71"}},"71":{"c":"Energy consumption","q":"Do you track the energy consumption of your compagny activities?","n":"single","t":"rb","a":{"Yes":"72","No":"72","I don't know":"72"}},"72":{"c":"Energy consumption","q":"Do you know the share of IT and IT equipment in your company's total energy consumption?","n":"single","t":"special1","a":{"Yes (please specify how much in %)":"73","No":"73"}},"73":{"c":"Energy consumption","q":"Have you set up a power management system? (automatic shutdown / shutdown of workstations)","n":"single","t":"rb","a":{"Yes":"74","No":"74","I don't know":"74"}},"74":{"c":"Printing","q":"Do you use copiers from a repackaging industry (second-hand / second-hand)?","n":"single","t":"rb","a":{"Yes":"75","No":"75","I don't know":"75"}},"75":{"c":"Printing","q":"Do you consolidate individual printers to shared printers?","n":"single","t":"rb","a":{"Yes":"76","No":"76","I don't know":"76"}},"76":{"c":"Printing","q":"Have you set up an identification system on printers (to trigger printing)?","n":"single","t":"rb","a":{"Yes":"77","No":"77","I don't know":"77"}},"77":{"c":"Printing","q":"What is the average life of your professional copier / Multi fonction printer ?","n":"single","t":"special2","a":{"Years":"79","Don't want to answer":"79","I don't know":"79"}},"79":{"c":"Printing","sc":"Are your printers set by default in eco mode? Especially :","q":"Energy saving (Automatic standby)","n":"single","t":"rb","a":{"Yes":"80","No":"80","I don't know":"80"}},"80":{"c":"Printing","sc":"Are your printers set by default in eco mode? Especially :","q":"Black and white by default","n":"single","t":"rb","a":{"Yes":"81","No":"81","I don't know":"81"}},"81":{"c":"Printing","sc":"Are your printers set by default in eco mode? Especially :","q":"Default duplex","n":"single","t":"rb","a":{"Yes":"82","No":"82","I don't know":"82"}},"82":{"c":"Printing","sc":"Are your printers set by default in eco mode? Especially :","q":"Default draft mode","n":"single","t":"rb","a":{"Yes":"83","No":"83","I don't know":"83"}},"83":{"c":"Printing","sc":"Consumables","q":"What is the number of pages printed / day / employee? (A4 equivalent)","n":"single","t":"l","a":{"Less than 10":"84","From 10 to 20":"84","From 20 to 30":"84","More than 30":"84","I don't know":"84"}},"84":{"c":"Printing","sc":"Consumables","q":"Can you specify the number of cartridges / toners:","n":"text","t":"t","a":{"Cartridges used a year":"85","Cartridges stored in the average business":"85","Toners used a year":"85","Toners stored in the average business":"85"}},"85":{"c":"Printing","sc":"Consumables","q":"Do you organize the separate collection of waste cartridges / toners?","n":"single","t":"rb","a":{"Yes, to a repackaging industry":"86","Yes, towards a recycling channel (destruction)":"86","No no separate collection device is planned":"86"}},"86":{"c":"Printing","sc":"Consumables","q":"Do you prefer the use of recycled paper?","n":"multi","t":"cb","a":{"Yes, our paper is made from virgin paste":"87","Yes, mixed paper":"87","Yes, 100% recycled":"87","I'm not paying attention":"87"}},"87":{"c":"Printing","sc":"Consumables","q":"Do you choose certified paper?","n":"multi","t":"special4","a":{"Yes, FSC":"88","Yes, PEFC":"88","Yes, Blue Angel":"88","Yes, European Label":"88","Yes, other":"88","I'm not paying attention":"88"}},"88":{"c":"Printing","sc":"Consumables","q":"Do you organize the separate collection of waste paper for recycling?","n":"single","t":"rb","a":{"Yes":"89","No":"89","I don't know":"89"}}};
	console.log(liste);

	$scope.theEnd = false;

	function ChangQuestion (numQuestion) {
		$scope.numQuestion = numQuestion;
		$scope.hist = ""+$scope.numQuestion;

		//current element
		console.log("numQuestion = "+$scope.numQuestion);
		$scope.current = liste[$scope.numQuestion];
		console.log($scope.current);

		$scope.category = $scope.current.c;
		$scope.question = $scope.current.q;
		//liste avec les réponse et la question vers la quelle elle pointe
		$scope.answers = $scope.current.a;
		$scope.typeSel = $scope.current.t;
		$scope.numAns = $scope.current.n;

		console.log($scope.answers);

		//mise en place des var pour les ng-if
 		$scope.l = false;
    	$scope.rb = false;
    	$scope.t = false;
    	$scope.cb = false;
    	$scope.rtf = false;
    	$scope.ctf = false;

    	if ($scope.typeSel == "l") {
    		$scope.l = true;
    	}
    	else if ($scope.typeSel == "rb") {
       	 	$scope.rb = true;
    	}
    	else if ($scope.typeSel == "t") {
       	 	$scope.t = true;
    	}
    	else if ($scope.typeSel == "cb") {
        	$scope.cb = true;
    	}
    	else if ($scope.typeSel == "rtf") {
        	$scope.rtf = true;
    	}
    	else if ($scope.typeSel == "ctf") {
        	$scope.ctf = true;
    	}
    	else if ($scope.typeSel == "special2") {
    		$scope.spe2 = true;
    	}
    	else if ($scope.typeSel == "special1") {
    		$scope.spe1 = true;
    	}

    	//recuperation de la liste de réponse
		$scope.listeAnswers = Object.keys($scope.answers);
    	
	}

	ChangQuestion(1);

	$scope.fin = function () {
		$scope.question = "texte de conclu";
		$scope.theEnd = true;
		document.getElementById("s").style.display = "none";
		document.getElementById("n").style.display = "none";
		document.getElementById("p").style.display = "none";
	}

	$scope.sendData = function () {
		//send data to db
	}

	//function pour quand on passe a la question suivante
	$scope.next = function () {

		//recuperation des données selectionnées
		console.log($scope.blabla);
		//sauvegarde de la donnée dans un fichier json
		$scope.storage += [$scope.numQuestion, $scope.blabla];
		console.log($scope.storage);

		if ($scope.t == true) {

			ChangQuestion($scope.answers["text"]);
		}
		else {
			//recuperer la question suivante
			ChangQuestion($scope.answers[$scope.blabla]);	
		}	
	}

	$scope.previous = function() {
		$scope.cpt -=1;
		console.log($scope.cpt);
		console.log("previous");
		console.log($scope.current);
		console.log($scope.current.q);
	}



/* MODAL CONTAINER */
	$scope.go = function(){
		console.log("share url");
		// Get the modal
		var modal = document.getElementById('myModal');

		// Get the button that opens the modal
		var btn = document.getElementById("s");

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

		if (modal.style.display = "none"){
			modal.style.display = "block";
		}


		// When the user clicks on <span> (x), close the modal
		span.onclick = function() {
		    modal.style.display = "none";
		}

		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
		    if (event.target == modal) {
		        modal.style.display = "none";
		    }
		}

	}





});
