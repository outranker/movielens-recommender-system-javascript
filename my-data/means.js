const means = [
  4224195.827515626, 2.920196219077415, 11211403.424179066, 93.48135839422484, 5.613055726736187, 109.91718020952548,
  1987.9372964169381, 0.00017607183730962233, 0.8272075006602694, 0.7083370014966106, 0.07676732106699534,
  0.050818734043489744, 0.04243331279161898, 0.44532969451536225, 0.10273791707016462, 0.144995158024474, 0.2899683070692843,
  0.030746544590192798, 0.02293335680957831, 0.16757637115943305, 0.0946826305132494, 0.08625319130205124,
  0.06684127123866537, 0.05416409895237257, 0.035148340522933356, 0.14807641517739237, 0.06085482877013822,
  0.02909587111541509, 0.03561052909587112, 0.016836869442732636, 0.025684479267541156, 0.0630557267365085,
  0.04201514217800863, 0.025222290694603397, 0.07359802799542213, 0.0433576899374945, 0.03085658948851131,
  0.03831763359450656, 0.02722510784400035, 0.11418258649529008, 0.1457654723127036, 0.03285940663790827,
  0.023527599260498282, 0.03175895765472313, 0.05506646711858438, 0.034356017255040054, 0.10830618892508144,
  0.02414385069108196, 0.04595474953781143, 0.057707544678228716, 0.0355004841975526, 0.030812571529183905,
  0.030944625407166124, 0.024011796813099746, 0.034796196848314115, 0.14327845761070518, 0.02033629720926138,
  0.014922088211990493, 0.018905713531120697, 0.058741966722422746, 0.019654018839686593, 0.020688440883880624,
  0.05922616427502421, 0.02247116823664055, 0.0891363676379963, 0.018201426181882207, 0.017233031076679284,
  0.02020424333127916, 0.04960824016198609, 0.027621269477947002, 0.039484109516682804, 0.035522493177216306,
  0.021898934765384275, 0.12985298001584647, 0.018597587815828858, 0.055264547935557705, 0.021502773131437627,
  0.028413592745840304, 0.06173518795668633, 0.022030988643366493, 0.023879742935117527, 0.015098160049300114,
  0.029315960912052116, 0.11096927546438948, 0.10273791707016462, 0.016154591073157847, 0.04868386301611057,
  0.030328373976582446, 0.016044546174839334, 0.04613082137512105, 0.09342811867241835, 0.04692314464301435,
  0.04315960912052117, 0.020996566599172463, 0.01648472576811339, 0.01795932740558148, 0.03292543357689937,
  0.035698565014525924, 0.017607183730962234, 0.029998239281626905, 0.04282947442556563, 0.020226252310942865,
  0.04668104586671362, 0.07995862311823224, 0.016770842503741525, 0.05097279690113566, 0.030394400915573553,
  0.025750506206532266, 0.020688440883880624, 0.025640461308213753, 0.026938991108372216, 0.03252927194295272,
  0.019940135575314728, 0.0394180825776917, 0.06644510960471872, 0.13269213839246413, 0.0181353992428911,
  0.027577251518619596, 0.08006866801655076, 0.03343164010916454, 0.05535258385421252, 0.03257328990228013,
  0.02176688088740206, 0.02255920415529536, 0.026476802535434458, 0.043335680957830795, 0.0685799806320979,
  0.05618892508143322, 0.04212518707632714, 0.10421251870763272, 0.11405053261730787, 0.017299058015670395,
  0.04454617483933445, 0.03459811603134079, 0.09155735540100361, 0.03358570296681046, 0.1080200721894533,
  0.04109076503213311, 0.09408838806232943, 0.057993661413856853, 0.04489831851395369, 0.0244519764063738,
  0.018267453120873318, 0.02586055110485078, 0.020710449863544325, 0.016616779646095606, 0.06171317897702262,
  0.016022537195175632, 0.01648472576811339, 0.01641869882912228, 0.06063473897350119, 0.04216920503565455,
  0.027005018047363324, 0.05330574874548816, 0.021854916806056873, 0.053657892420107406, 0.023527599260498282,
  0.016352671890131173, 0.03596267277049036, 0.016286644951140065, 0.022977374768905715, 0.05130293159609121,
  0.026674883352407783, 0.017629192710625935, 0.01822343516154591, 0.0772295096399331, 0.019037767409102915,
  0.019984153534642134, 0.02729113478299146, 0.036072717668808874, 0.018333480059864425, 0.021282683334800597,
  0.01846553393784664, 0.04175103442204419, 0.041971124218681224, 0.04007835196760278, 0.029778149484989875,
  0.017233031076679284, 0.015890483317193414, 0.022185051501012413, 0.02412184171141826, 0.025090236816621182,
  0.13225195879919008, 0.02194295272471168, 0.026542829474425565, 0.06089884672946562, 0.05031252751122458,
  0.031362796020776476, 0.025816533145523374, 0.0197200457786777, 0.046416938110749185, 0.04804560260586319,
  0.01800334536490888, 0.018399506998855533, 0.031076679285148342, 0.11964081345188837, 0.016660797605423012,
  0.016528743727440797, 0.013051324940575756, 0.042961528303547845, 0.028149484989875868, 0.0204903600669073,
  0.017144995158024475, 0.03415793643806673, 0.019103794348094023, 0.03842767849282507, 0.016594770666431904,
  0.04087067523549608, 0.03519235848226076, 0.019213839246412536, 0.016572761686768203, 0.017849282507262962,
  0.06631305572673651, 0.026432784576107052, 0.07276168676820143, 0.04087067523549608, 0.038889867065762834,
  0.03294744255656308, 0.01624262699181266, 0.021436746192446517, 0.03899991196408135, 0.02194295272471168,
  0.02396777885377234, 0.04285148340522933, 0.05559468263051325, 0.02498019191830267, 0.016616779646095606,
  0.03585262787217185, 0.038779822167444314, 0.026608856413416673, 0.015538339642574171, 0.019191830266748835,
  0.016286644951140065, 0.03290342459723567, 0.01886169557179329, 0.018509551897174046, 0.021502773131437627,
  0.023791707016462715, 0.017012941280042257, 0.02082049476186284, 0.0338938286821023, 0.0291839070340699,
  0.02674091029139889, 0.036160753587463686, 0.03420195439739414, 0.015450303723919359, 0.04751738709393433,
  0.024231886609736773, 0.015802447398538602, 0.019345893124394754, 0.016462716788449686, 0.03349766704815565,
  0.034796196848314115, 0.015670393520556387, 0.016176600052821552, 0.03996830706928427, 0.022207060480676114,
  0.016374680869794878, 0.02264724007395017, 0.03182498459371424, 0.02572849722686856, 0.016506734747777092,
  0.015340258825600845, 0.023527599260498282, 0.019918126595651026, 0.05453825160665551, 0.045712650761510695,
  0.01837749801919183, 0.01853156087683775, 0.016506734747777092, 0.0283915837661766, 0.03281538867858086,
  0.017144995158024475, 0.03673298705871996, 0.019587991900695483, 0.026784928250726297, 0.02350559028083458,
  0.017012941280042257, 0.014547935557707545, 0.024914164979311558, 0.019345893124394754, 0.01795932740558148,
  0.0197200457786777, 0.01901575842943921, 0.02042433312791619, 0.03195703847169645, 0.045404525046218856,
  0.017629192710625935, 0.02625671273879743, 0.0354784752178889, 0.016286644951140065, 0.021898934765384275,
  0.031186724183466855, 0.02104058455849987, 0.016176600052821552, 0.013733603310150541, 0.026212694779470025,
  0.01639668984945858, 0.016880887402060042, 0.02420987763007307, 0.01633066291046747, 0.01956598292103178,
  0.01611057311383044, 0.01648472576811339, 0.017893300466590368, 0.015802447398538602, 0.02420987763007307,
  0.032705343780262346, 0.015736420459547495, 0.01947794700237697, 0.02665287437274408, 0.017056959239369663,
  0.03290342459723567, 0.016594770666431904, 0.01782727352759926, 0.015472312703583062, 0.01941192006338586,
  0.016528743727440797, 0.016990932300378556, 0.015582357601901575, 0.023197464565542742, 0.01782727352759926,
  0.019191830266748835, 0.024165859670745665, 0.017629192710625935, 0.01844352495818294, 0.020556387005898406,
  0.015890483317193414, 0.027467206620301082, 0.022449159256976846, 0.015340258825600845, 0.016462716788449686,
  0.017387093934325203, 0.01710097719869707, 0.016880887402060042, 0.01749713883264372, 0.026784928250726297,
  0.015670393520556387, 0.018487542917510345, 0.015736420459547495, 0.016220618012148958, 0.010872435953869178,
  0.017321066995334096, 0.04344572585614931, 0.005788361651553834, 0.022030988643366493, 0.009485870235055902,
  0.006382604102473809, 0.0027731314376265516, 0.006096487366845673, 0.004005634298793908, 0.0020908530680517653,
  0.018267453120873318, 0.0017387093934325205, 0.0024429967426710096, 0.0020248261290606567, 0.001672682454441412,
  0.006140505326173078, 0.0023329518443524957, 0.0022669249053613874, 0.0017167004137688176, 0.0018487542917510343,
  0.0028831763359450655, 0.018399506998855533, 0.0017167004137688176, 0.00986002288933885, 0.0023329518443524957,
  0.00433576899374945, 0.0027071044986354434, 0.0020468351087243597, 0.0031032661325820937, 0.0018487542917510343,
  0.001980808169733251, 0.0021348710273791705, 0.0019147812307421428, 0.0025750506206532265, 0.0022669249053613874,
  0.0025750506206532265, 0.002112862047715468, 0.004137688176776125, 0.009573906153710714, 0.0018487542917510343,
  0.00189277225107844, 0.02751122457962849, 0.001672682454441412, 0.002619068579980632, 0.002112862047715468,
  0.023637644158816796, 0.004952020424333128, 0.0019367902104058456, 0.0017387093934325205, 0.00189277225107844,
  0.0021348710273791705, 0.003565454705519852, 0.00457786777005018, 0.005832379610881239, 0.005106083281979048,
  0.0039396073598028, 0.006734747777093054, 0.00567831675323532, 0.005832379610881239, 0.0034113918478739327,
  0.004930011444669425, 0.012214983713355049, 0.007659124922968571, 0.0038295624614842856, 0.0033893828682102296,
  0.00378554450215688, 0.00402764327845761, 0.004863984505678317, 0.005106083281979048, 0.006690729817765648,
  0.014944097191654194, 0.0037635355224931773, 0.0033233559292191214, 0.004908002465005722, 0.00512809226164275,
  0.006822783695747865, 0.01800334536490888, 0.004313760014085747, 0.0037195175631657717, 0.006140505326173078,
  0.003895589400475394, 0.003367373888546527, 0.005194119200633859, 0.003477418786865041, 0.006602693899110838,
  0.008583502068844088, 0.004181706136103531, 0.00448983185139537, 0.013843648208469055, 0.00378554450215688,
  0.004863984505678317, 0.003543445725856149, 0.01595651025618452, 0.003367373888546527, 0.0059204155295360505,
  0.003961616339466502, 0.013491504533849811, 0.00402764327845761, 0.004269742054758341, 0.005568271854916806,
  0.008891627784135927, 0.011774804120080994, 0.00448983185139537, 0.00992604982832996, 0.003675499603838366,
  0.006910819614402677, 0.004225724095430936, 0.009507879214719605, 0.0041156791971124216, 0.012435073509992076,
  0.003675499603838366, 0.004291751034422044, 0.003895589400475394, 0.007681133902632274, 0.0034334008275376353,
  0.013601549432168325, 0.028259529888194385, 0.004996038383660533, 0.012787217184611321, 0.006096487366845673,
  0.0036314816445109604, 0.0037635355224931773, 0.04212518707632714, 0.0034554098072013383, 0.0053261730786160755,
  0.004599876749713883, 0.003873580420811691, 0.003807553481820583, 0.0047319306276961, 0.006360595122810107,
  0.003675499603838366, 0.005810370631217537, 0.004445813892067964, 0.0035214367461924466, 0.0037195175631657717,
  0.005260146139624967, 0.004841975526014614, 0.004313760014085747, 0.003807553481820583, 0.004841975526014614,
  0.009551897174047011, 0.0053041640989523724, 0.00402764327845761, 0.0034554098072013383, 0.014239809842415706,
  0.0078792147196056, 0.0047099216480323974, 0.006382604102473809, 0.0053481820582797785, 0.003807553481820583,
  0.006690729817765648, 0.004005634298793908, 0.004269742054758341, 0.005084074302315345, 0.009683951052029228,
  0.06681926225900167, 0.006646711858438243, 0.005502244915925698, 0.005700325732899023,
];