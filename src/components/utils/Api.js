export function getMedicine() {
  let medicine = [
    {
      "price": 0.0197,
      "strength": "20 mg/ml",
      "name": "Abacavir",
      "form": "solution",
      "id": 0
    },
    {
      "price": 0.2342,
      "strength": "300 mg",
      "name": "Abacavir",
      "form": "tab-cap",
      "id": 1
    },
    {
      "price": 0.0943,
      "strength": "60 mg",
      "name": "Abacavir Sulfate",
      "form": "tab-cap",
      "id": 2
    },
    {
      "price": 0.0917,
      "strength": "60mg+30mg",
      "name": "Abacavir+Lamivudine",
      "form": "tab-cap",
      "id": 3
    },
    {
      "price": 0.5074,
      "strength": "600 mg+300mg",
      "name": "Abacavir+Lamivudine",
      "form": "tab-cap",
      "id": 4
    },
    {
      "price": 0.07,
      "strength": "60mg+30mg",
      "name": "Abacavir+Lamivudine",
      "form": "tab-cap",
      "id": 5
    },
    {
      "price": 0.033,
      "strength": "250 mg",
      "name": "Acetazolamide",
      "form": "tab-cap",
      "id": 6
    },
    {
      "price": 0.0033,
      "strength": "500 mg",
      "name": "Acetylsalicylic Acid",
      "form": "tab-cap",
      "id": 7
    },
    {
      "price": 0.0074,
      "strength": "100 mg",
      "name": "Acetylsalicylic Acid",
      "form": "tab-cap",
      "id": 8
    },
    {
      "price": 0.0074,
      "strength": "75 mg",
      "name": "Acetylsalicylic Acid",
      "form": "tab-cap",
      "id": 9
    },
    {
      "price": 0.0133,
      "strength": "300 mg",
      "name": "Acetylsalicylic Acid",
      "form": "tab-cap",
      "id": 10
    },
    {
      "price": 0.0352,
      "strength": "200 mg",
      "name": "Aciclovir",
      "form": "tab-cap",
      "id": 11
    },
    {
      "price": 0.036,
      "strength": "5%",
      "name": "Aciclovir",
      "form": "cream",
      "id": 12
    },
    {
      "price": 0.0392,
      "strength": "400 mg",
      "name": "Aciclovir",
      "form": "tab-cap",
      "id": 13
    },
    {
      "price": 0.0459,
      "strength": "200 mg",
      "name": "Aciclovir",
      "form": "tab-cap",
      "id": 14
    },
    {
      "price": 0.1664,
      "strength": "200 mg/5 ml",
      "name": "Aciclovir",
      "form": "suspen",
      "id": 15
    },
    {
      "price": 2.7292,
      "strength": "3%",
      "name": "Aciclovir",
      "form": "opht oint",
      "id": 16
    },
    {
      "price": 5.6372,
      "strength": "250 mg",
      "name": "Aciclovir",
      "form": "vial",
      "id": 17
    },
    {
      "price": 2.5816,
      "strength": "3 mg/ml",
      "name": "Adenosine",
      "form": "ampoule",
      "id": 18
    },
    {
      "price": 0.02,
      "strength": "400 mg",
      "name": "Albendazole",
      "form": "tab-cap",
      "id": 19
    },
    {
      "price": 0.0275,
      "strength": "100 mg/5 ml",
      "name": "Albendazole",
      "form": "suspen",
      "id": 20
    },
    {
      "price": 0.029,
      "strength": "200 mg/5 ml",
      "name": "Albendazole",
      "form": "suspen",
      "id": 21
    },
    {
      "price": 0.0394,
      "strength": "200 mg",
      "name": "Albendazole",
      "form": "tab-cap",
      "id": 22
    },
    {
      "price": 0.0182,
      "strength": "200 mg",
      "name": "Albendazole",
      "form": "tab-cap",
      "id": 23
    },
    {
      "price": 0.0248,
      "strength": "400 mg",
      "name": "Albendazole",
      "form": "tab-cap",
      "id": 24
    },
    {
      "price": 0.5632,
      "strength": "20-25%",
      "name": "Albumin, Human Normal",
      "form": "vial",
      "id": 25
    },
    {
      "price": 0.004,
      "strength": "95-96%",
      "name": "Alcohol",
      "form": "liquid",
      "id": 26
    },
    {
      "price": 0.005,
      "strength": "95-96%",
      "name": "Alcohol, Denatured",
      "form": "liquid",
      "id": 27
    },
    {
      "price": 0.005,
      "strength": "70%",
      "name": "Alcohol, Denatured",
      "form": "liquid",
      "id": 28
    },
    {
      "price": 0.0014,
      "strength": "70%",
      "name": "Alcohol, Isopropyl",
      "form": "liquid",
      "id": 29
    },
    {
      "price": 0.0606,
      "strength": "10 mg",
      "name": "Alendronate",
      "form": "tab-cap",
      "id": 30
    },
    {
      "price": 0.0273,
      "strength": "100 mg",
      "name": "Allopurinol",
      "form": "tab-cap",
      "id": 31
    },
    {
      "price": 0.0545,
      "strength": "300 mg",
      "name": "Allopurinol",
      "form": "tab-cap",
      "id": 32
    },
    {
      "price": 0.0084,
      "strength": "0.25 mg",
      "name": "Alprazolam",
      "form": "tab-cap",
      "id": 33
    },
    {
      "price": 0.0672,
      "strength": "0.5 mg",
      "name": "Alprazolam",
      "form": "tab-cap",
      "id": 34
    },
    {
      "price": 0.0039,
      "strength": "250+120 mg",
      "name": "Aluminium Hydr.+ Magnesium Hydr.",
      "form": "tab-cap",
      "id": 35
    },
    {
      "price": 0.012,
      "strength": "500 mg",
      "name": "Aluminium Hydroxide",
      "form": "tab-cap",
      "id": 36
    },
    {
      "price": 0.0061,
      "strength": "500 mg",
      "name": "Aluminium Hydroxide",
      "form": "tab-cap",
      "id": 37
    },
    {
      "price": 0.2744,
      "strength": "76%",
      "name": "Amidotrizoate",
      "form": "ampoule",
      "id": 38
    },
    {
      "price": 0.1908,
      "strength": "250 mg/ml",
      "name": "Amikacin Sulfate",
      "form": "vial",
      "id": 39
    },
    {
      "price": 0.2393,
      "strength": "50 mg/ml",
      "name": "Amikacin Sulfate",
      "form": "ampoule",
      "id": 40
    },
    {
      "price": 0.0058,
      "strength": "100 mg",
      "name": "Aminophylline",
      "form": "tab-cap",
      "id": 41
    },
    {
      "price": 0.048,
      "strength": "25 mg/ml",
      "name": "Aminophylline",
      "form": "ampoule",
      "id": 42
    },
    {
      "price": 0.0711,
      "strength": "200 mg",
      "name": "Amiodarone",
      "form": "tab-cap",
      "id": 43
    },
    {
      "price": 0.4431,
      "strength": "50 mg/ml",
      "name": "Amiodarone",
      "form": "vial",
      "id": 44
    },
    {
      "price": 0.0226,
      "strength": "10 mg",
      "name": "Amitriptyline",
      "form": "tab-cap",
      "id": 45
    },
    {
      "price": 0.0288,
      "strength": "25 mg",
      "name": "Amitriptyline",
      "form": "tab-cap",
      "id": 46
    },
    {
      "price": 0.033,
      "strength": "50 mg",
      "name": "Amitriptyline",
      "form": "tab-cap",
      "id": 47
    },
    {
      "price": 0.0094,
      "strength": "5 mg",
      "name": "Amlodipine",
      "form": "tab-cap",
      "id": 48
    },
    {
      "price": 0.0102,
      "strength": "10 mg",
      "name": "Amlodipine",
      "form": "tab-cap",
      "id": 49
    },
    {
      "price": 0.0086,
      "strength": "50 mg/5 ml",
      "name": "Amodiaquine",
      "form": "suspen",
      "id": 50
    },
    {
      "price": 0.0121,
      "strength": "150-200 mg",
      "name": "Amodiaquine",
      "form": "tab-cap",
      "id": 51
    },
    {
      "price": 0.0063,
      "strength": "250 mg/5 ml",
      "name": "Amoxicillin",
      "form": "suspen",
      "id": 52
    },
    {
      "price": 0.009,
      "strength": "125 mg/5 ml",
      "name": "Amoxicillin",
      "form": "suspen",
      "id": 53
    },
    {
      "price": 0.0207,
      "strength": "250 mg",
      "name": "Amoxicillin",
      "form": "tab-cap",
      "id": 54
    },
    {
      "price": 0.0228,
      "strength": "250 mg",
      "name": "Amoxicillin",
      "form": "tab-cap",
      "id": 55
    },
    {
      "price": 0.032,
      "strength": "500 mg",
      "name": "Amoxicillin",
      "form": "tab-cap",
      "id": 56
    },
    {
      "price": 0.0167,
      "strength": "125 MG",
      "name": "AMOXICILLIN",
      "form": "tab-cap",
      "id": 57
    },
    {
      "price": 0.0136,
      "strength": "",
      "name": "Amoxicillin+Clavulanic Acid",
      "form": "suspen",
      "id": 58
    },
    {
      "price": 0.0161,
      "strength": "",
      "name": "Amoxicillin+Clavulanic Acid",
      "form": "suspen",
      "id": 59
    },
    {
      "price": 0.1291,
      "strength": "875mg+125mg",
      "name": "Amoxicillin+Clavulanic Acid",
      "form": "tab-cap",
      "id": 60
    },
    {
      "price": 0.1503,
      "strength": "250mg+125mg",
      "name": "Amoxicillin+Clavulanic Acid",
      "form": "tab-cap",
      "id": 61
    },
    {
      "price": 0.1529,
      "strength": "500mg+125mg",
      "name": "Amoxicillin+Clavulanic Acid",
      "form": "tab-cap",
      "id": 62
    },
    {
      "price": 1.37,
      "strength": "1000+200 mg",
      "name": "Amoxicillin+Clavulanic Acid",
      "form": "vial",
      "id": 63
    },
    {
      "price": 1.5027,
      "strength": "500mg+100mg",
      "name": "Amoxicillin+Clavulanic Acid",
      "form": "vial",
      "id": 64
    },
    {
      "price": 14.1045,
      "strength": "50 mg",
      "name": "Amphotericin B",
      "form": "vial",
      "id": 65
    },
    {
      "price": 0.02,
      "strength": "500 mg",
      "name": "Ampicillin",
      "form": "tab-cap",
      "id": 66
    },
    {
      "price": 0.272,
      "strength": "1 g",
      "name": "Ampicillin",
      "form": "vial",
      "id": 67
    },
    {
      "price": 0.3313,
      "strength": "500 mg",
      "name": "Ampicillin",
      "form": "vial",
      "id": 68
    },
    {
      "price": 0.5294,
      "strength": "250 mg",
      "name": "Ampicillin",
      "form": "vial",
      "id": 69
    },
    {
      "price": 0.6358,
      "strength": "1000mg+500mg",
      "name": "Ampicillin+Sulbactam",
      "form": "vial",
      "id": 70
    },
    {
      "price": 0.5457,
      "strength": "1 mg",
      "name": "Anastrozole",
      "form": "tab-cap",
      "id": 71
    },
    {
      "price": 0.47,
      "strength": "",
      "name": "Antihaemorrhoidal",
      "form": "suppos",
      "id": 72
    },
    {
      "price": 0.0658,
      "strength": "",
      "name": "Antihaemorrhoidal",
      "form": "ointment",
      "id": 73
    },
    {
      "price": 20.37,
      "strength": "",
      "name": "Antivenom Serum",
      "form": "vial",
      "id": 74
    },
    {
      "price": 0.66,
      "strength": "20 mg/ml",
      "name": "Artemether",
      "form": "ampoule",
      "id": 75
    },
    {
      "price": 1.09,
      "strength": "80 mg/ml",
      "name": "Artemether",
      "form": "ampoule",
      "id": 76
    },
    {
      "price": 0.1472,
      "strength": "20 mg+120 mg",
      "name": "Artemether+Lumefantrine",
      "form": "tab-cap",
      "id": 77
    },
    {
      "price": 0.0708,
      "strength": "15+90mg/5ml",
      "name": "Artemether+Lumefantrine",
      "form": "suspen",
      "id": 78
    },
    {
      "price": 0.0942,
      "strength": "20 mg+120 mg",
      "name": "Artemether+Lumefantrine",
      "form": "tab-cap",
      "id": 79
    },
    {
      "price": 0.6152,
      "strength": "20 mg+120 mg",
      "name": "Artemether+Lumefantrine",
      "form": "tab-cap",
      "id": 80
    },
    {
      "price": 1.2188,
      "strength": "20 mg+120 mg",
      "name": "Artemether+Lumefantrine",
      "form": "tab-cap",
      "id": 81
    },
    {
      "price": 1.6802,
      "strength": "20 mg+120 mg",
      "name": "Artemether+Lumefantrine",
      "form": "tab-cap",
      "id": 82
    },
    {
      "price": 2.1163,
      "strength": "20 mg+120 mg",
      "name": "Artemether+Lumefantrine",
      "form": "tab-cap",
      "id": 83
    },
    {
      "price": 2.3022,
      "strength": "60 mg",
      "name": "Artesunate",
      "form": "vial",
      "id": 84
    },
    {
      "price": 0.2434,
      "strength": "50 mg+153 mg",
      "name": "Artesunate+Amodiaquine",
      "form": "tab-cap",
      "id": 85
    },
    {
      "price": 0.3906,
      "strength": "25mg+67.5mg",
      "name": "Artesunate+Amodiaquine",
      "form": "tab-cap",
      "id": 86
    },
    {
      "price": 0.45,
      "strength": "50 mg+153 mg",
      "name": "Artesunate+Amodiaquine",
      "form": "tab-cap",
      "id": 87
    },
    {
      "price": 0.563,
      "strength": "50 mg+153 mg",
      "name": "Artesunate+Amodiaquine",
      "form": "tab-cap",
      "id": 88
    },
    {
      "price": 0.6363,
      "strength": "50 mg+135 mg",
      "name": "Artesunate+Amodiaquine",
      "form": "tab-cap",
      "id": 89
    },
    {
      "price": 0.928,
      "strength": "100mg+270mg",
      "name": "Artesunate+Amodiaquine",
      "form": "tab-cap",
      "id": 90
    },
    {
      "price": 1.038,
      "strength": "50 mg+153 mg",
      "name": "Artesunate+Amodiaquine",
      "form": "tab-cap",
      "id": 91
    },
    {
      "price": 1.5,
      "strength": "100mg+270mg",
      "name": "Artesunate+Amodiaquine",
      "form": "tab-cap",
      "id": 92
    },
    {
      "price": 1.9284,
      "strength": "100+500/25mg",
      "name": "Artesunate+Sulfadoxine/Pyrimethamine",
      "form": "tab-cap",
      "id": 93
    },
    {
      "price": 4.2,
      "strength": "1,000 IU/ml",
      "name": "Asparaginase",
      "form": "ampoule",
      "id": 94
    },
    {
      "price": 14.7075,
      "strength": "10,000 IU/ml",
      "name": "Asparaginase",
      "form": "vial",
      "id": 95
    },
    {
      "price": 0.2622,
      "strength": "150 mg",
      "name": "Atazanavir",
      "form": "tab-cap",
      "id": 96
    },
    {
      "price": 0.7105,
      "strength": "300+100 mg",
      "name": "Atazanavir+Ritonavir",
      "form": "tab-cap",
      "id": 97
    },
    {
      "price": 0.0062,
      "strength": "50 mg",
      "name": "Atenolol",
      "form": "tab-cap",
      "id": 98
    },
    {
      "price": 0.0217,
      "strength": "100 mg",
      "name": "Atenolol",
      "form": "tab-cap",
      "id": 99
    },
    {
      "price": 0.0439,
      "strength": "20 mg",
      "name": "Atorvastatin",
      "form": "tab-cap",
      "id": 100
    },
    {
      "price": 0.0533,
      "strength": "10 mg",
      "name": "Atorvastatin",
      "form": "tab-cap",
      "id": 101
    },
    {
      "price": 3.2494,
      "strength": "40 mg",
      "name": "Atorvastatin",
      "form": "tab-cap",
      "id": 102
    },
    {
      "price": 3.1742,
      "strength": "250mg+100mg",
      "name": "Atovaquone+Proguanil",
      "form": "tab-cap",
      "id": 103
    },
    {
      "price": 0.712,
      "strength": "10 mg/ml",
      "name": "Atracurium",
      "form": "ampoule",
      "id": 104
    },
    {
      "price": 0.0671,
      "strength": "0.25 mg/ml",
      "name": "Atropine Sulfate",
      "form": "ampoule",
      "id": 105
    },
    {
      "price": 0.1067,
      "strength": "1 mg/ml",
      "name": "Atropine Sulfate",
      "form": "ampoule",
      "id": 106
    },
    {
      "price": 0.1588,
      "strength": "0.5 mg/ml",
      "name": "Atropine Sulfate",
      "form": "ampoule",
      "id": 107
    },
    {
      "price": 0.615,
      "strength": "1%",
      "name": "Atropine Sulfate",
      "form": "opht drop",
      "id": 108
    },
    {
      "price": 0.0848,
      "strength": "50 mg",
      "name": "Azathioprine",
      "form": "tab-cap",
      "id": 109
    },
    {
      "price": 0.0177,
      "strength": "200 mg/5 ml",
      "name": "Azithromycin",
      "form": "suspen",
      "id": 110
    },
    {
      "price": 0.2375,
      "strength": "250 mg",
      "name": "Azithromycin",
      "form": "tab-cap",
      "id": 111
    },
    {
      "price": 0.3777,
      "strength": "500 mg",
      "name": "Azithromycin",
      "form": "tab-cap",
      "id": 112
    },
    {
      "price": 0.0299,
      "strength": "",
      "name": "Balanced Salt Solution",
      "form": "solution",
      "id": 113
    },
    {
      "price": 79.3269,
      "strength": "",
      "name": "Barium Sulfate",
      "form": "powder",
      "id": 114
    },
    {
      "price": 0.0127,
      "strength": "50 mcg",
      "name": "Beclometasone",
      "form": "nasal",
      "id": 115
    },
    {
      "price": 0.0131,
      "strength": "50 mcg/dose",
      "name": "Beclometasone",
      "form": "inhaler",
      "id": 116
    },
    {
      "price": 0.016,
      "strength": "100 mcg/dose",
      "name": "Beclometasone",
      "form": "inhaler",
      "id": 117
    },
    {
      "price": 0.017,
      "strength": "250 mcg/dose",
      "name": "Beclometasone",
      "form": "inhaler",
      "id": 118
    },
    {
      "price": 0.0071,
      "strength": "2.5 mg",
      "name": "Bendroflumethiazide",
      "form": "tab-cap",
      "id": 119
    },
    {
      "price": 0.0114,
      "strength": "5 mg",
      "name": "Bendroflumethiazide",
      "form": "tab-cap",
      "id": 120
    },
    {
      "price": 0.0346,
      "strength": "2 mg",
      "name": "Benzatropine Mesilate",
      "form": "tab-cap",
      "id": 121
    },
    {
      "price": 2.65,
      "strength": "1 mg/ml",
      "name": "Benzatropine Mesilate",
      "form": "ampoule",
      "id": 122
    },
    {
      "price": 0.0095,
      "strength": "6% + 3%",
      "name": "Benzoic & Salicylic Acid",
      "form": "ointment",
      "id": 123
    },
    {
      "price": 0.0031,
      "strength": "25%",
      "name": "Benzyl Benzoate",
      "form": "lotion",
      "id": 124
    },
    {
      "price": 0.0108,
      "strength": "90%",
      "name": "Benzyl Benzoate",
      "form": "solution",
      "id": 125
    },
    {
      "price": 0.186,
      "strength": "0.1%",
      "name": "Betamethasone",
      "form": "opht drop",
      "id": 126
    },
    {
      "price": 0.7276,
      "strength": "4 mg/ml",
      "name": "Betamethasone",
      "form": "ampoule",
      "id": 127
    },
    {
      "price": 0.0516,
      "strength": "0.1%",
      "name": "Betamethasone Valerate",
      "form": "cream",
      "id": 128
    },
    {
      "price": 0.0687,
      "strength": "0.1%",
      "name": "Betamethasone Valerate",
      "form": "ointment",
      "id": 129
    },
    {
      "price": 159.635,
      "strength": "25 mg/ml",
      "name": "Bevacizumab",
      "form": "vial",
      "id": 130
    },
    {
      "price": 0.3981,
      "strength": "50 mg",
      "name": "Bicalutamide",
      "form": "tab-cap",
      "id": 131
    },
    {
      "price": 0.0101,
      "strength": "2 mg",
      "name": "Biperiden",
      "form": "tab-cap",
      "id": 132
    },
    {
      "price": 0.0193,
      "strength": "5 mg",
      "name": "Bisacodyl",
      "form": "tab-cap",
      "id": 133
    },
    {
      "price": 0.1022,
      "strength": "10 mg",
      "name": "Bisacodyl",
      "form": "suppos",
      "id": 134
    },
    {
      "price": 0.066,
      "strength": "5 mg",
      "name": "Bisoprolol",
      "form": "tab-cap",
      "id": 135
    },
    {
      "price": 16.715,
      "strength": "15 IU",
      "name": "Bleomycin",
      "form": "vial",
      "id": 136
    },
    {
      "price": 0.2024,
      "strength": "2.5 mg",
      "name": "Bromocriptine Mesilate",
      "form": "tab-cap",
      "id": 137
    },
    {
      "price": 0.007,
      "strength": "100 mcg/dose",
      "name": "Budesonide",
      "form": "inhaler",
      "id": 138
    },
    {
      "price": 0.0272,
      "strength": "200 mcg/dose",
      "name": "Budesonide",
      "form": "inhaler",
      "id": 139
    },
    {
      "price": 0.0315,
      "strength": "0.5%",
      "name": "Bupivacaine HCl",
      "form": "ampoule",
      "id": 140
    },
    {
      "price": 0.105,
      "strength": "0.25%",
      "name": "Bupivacaine HCl",
      "form": "ampoule",
      "id": 141
    },
    {
      "price": 0.08,
      "strength": "0.5% + 8%",
      "name": "Bupivacaine HCl + Dextrose",
      "form": "ampoule",
      "id": 142
    },
    {
      "price": 0.0793,
      "strength": "",
      "name": "Bupivacaine HCl + Epinephrine",
      "form": "vial",
      "id": 143
    },
    {
      "price": 0.0051,
      "strength": "",
      "name": "Calamine",
      "form": "lotion",
      "id": 144
    },
    {
      "price": 1.3307,
      "strength": "15 mg",
      "name": "Calcium Folinate",
      "form": "tab-cap",
      "id": 145
    },
    {
      "price": 2.3861,
      "strength": "50 mg",
      "name": "Calcium Folinate",
      "form": "vial",
      "id": 146
    },
    {
      "price": 0.0431,
      "strength": "100 mg/ml",
      "name": "Calcium Gluconate",
      "form": "ampoule",
      "id": 147
    },
    {
      "price": 0.0168,
      "strength": "250-300 mg",
      "name": "Calcium Lactate",
      "form": "tab-cap",
      "id": 148
    },
    {
      "price": 0.0216,
      "strength": "10%",
      "name": "Camphor",
      "form": "ointment",
      "id": 149
    },
    {
      "price": 0.5194,
      "strength": "150 mg",
      "name": "Capecitabine",
      "form": "tab-cap",
      "id": 150
    },
    {
      "price": 1.4212,
      "strength": "500 mg",
      "name": "Capecitabine",
      "form": "tab-cap",
      "id": 151
    },
    {
      "price": 8.387,
      "strength": "1 g",
      "name": "Capreomycin",
      "form": "vial",
      "id": 152
    },
    {
      "price": 2.99,
      "strength": "0.5 g",
      "name": "Capreomycin",
      "form": "vial",
      "id": 153
    },
    {
      "price": 3.99,
      "strength": "0.75 g",
      "name": "Capreomycin",
      "form": "vial",
      "id": 154
    },
    {
      "price": 0.0089,
      "strength": "25 mg",
      "name": "Captopril",
      "form": "tab-cap",
      "id": 155
    },
    {
      "price": 0.0175,
      "strength": "12.5 mg",
      "name": "Captopril",
      "form": "tab-cap",
      "id": 156
    },
    {
      "price": 0.1276,
      "strength": "50 mg",
      "name": "Captopril",
      "form": "tab-cap",
      "id": 157
    },
    {
      "price": 0.0223,
      "strength": "200 mg",
      "name": "Carbamazepine",
      "form": "tab-cap",
      "id": 158
    },
    {
      "price": 0.0339,
      "strength": "100 mg/5 ml",
      "name": "Carbamazepine",
      "form": "suspen",
      "id": 159
    },
    {
      "price": 0.197,
      "strength": "200 mg",
      "name": "Carbamazepine",
      "form": "tab-cap",
      "id": 160
    },
    {
      "price": 0.0534,
      "strength": "5 mg",
      "name": "Carbimazole",
      "form": "tab-cap",
      "id": 161
    },
    {
      "price": 13.5103,
      "strength": "150 mg",
      "name": "Carboplatin",
      "form": "vial",
      "id": 162
    },
    {
      "price": 35.35,
      "strength": "450 mg",
      "name": "Carboplatin",
      "form": "vial",
      "id": 163
    },
    {
      "price": 0.03,
      "strength": "6.25 mg",
      "name": "Carvedilol",
      "form": "tab-cap",
      "id": 164
    },
    {
      "price": 0.0317,
      "strength": "12.5 mg",
      "name": "Carvedilol",
      "form": "tab-cap",
      "id": 165
    },
    {
      "price": 0.0448,
      "strength": "25 mg",
      "name": "Carvedilol",
      "form": "tab-cap",
      "id": 166
    },
    {
      "price": 0.0181,
      "strength": "250 mg/5 ml",
      "name": "Cefadroxil",
      "form": "suspen",
      "id": 167
    },
    {
      "price": 0.0696,
      "strength": "500 mg",
      "name": "Cefadroxil Monohydrate",
      "form": "tab-cap",
      "id": 168
    },
    {
      "price": 0.0097,
      "strength": "250 mg/5 ml",
      "name": "Cefalexin",
      "form": "suspen",
      "id": 169
    },
    {
      "price": 0.0098,
      "strength": "125 mg/5 ml",
      "name": "Cefalexin",
      "form": "suspen",
      "id": 170
    },
    {
      "price": 0.047,
      "strength": "250 mg",
      "name": "Cefalexin",
      "form": "tab-cap",
      "id": 171
    },
    {
      "price": 0.0621,
      "strength": "500 mg",
      "name": "Cefalexin",
      "form": "tab-cap",
      "id": 172
    },
    {
      "price": 0.006,
      "strength": "125 mg/ml",
      "name": "Cefalexin",
      "form": "suspen",
      "id": 173
    },
    {
      "price": 0.4342,
      "strength": "1 g",
      "name": "Cefazolin",
      "form": "vial",
      "id": 174
    },
    {
      "price": 0.5412,
      "strength": "500 mg",
      "name": "Cefazolin",
      "form": "ampoule",
      "id": 175
    },
    {
      "price": 1.6796,
      "strength": "1 g",
      "name": "Cefepime",
      "form": "vial",
      "id": 176
    },
    {
      "price": 0.2106,
      "strength": "200 mg",
      "name": "Cefixime",
      "form": "tab-cap",
      "id": 177
    },
    {
      "price": 1.3371,
      "strength": "400 mg",
      "name": "Cefixime",
      "form": "tab-cap",
      "id": 178
    },
    {
      "price": 0.0467,
      "strength": "100 mg/5 ml",
      "name": "Cefixime",
      "form": "suspen",
      "id": 179
    },
    {
      "price": 0.6004,
      "strength": "500 mg",
      "name": "Cefotaxime",
      "form": "vial",
      "id": 180
    },
    {
      "price": 0.8323,
      "strength": "1 g",
      "name": "Cefotaxime",
      "form": "vial",
      "id": 181
    },
    {
      "price": 1.11,
      "strength": "1 g",
      "name": "Ceftazidime",
      "form": "vial",
      "id": 182
    },
    {
      "price": 1.6128,
      "strength": "250 mg",
      "name": "Ceftazidime",
      "form": "vial",
      "id": 183
    },
    {
      "price": 0.4192,
      "strength": "1 g",
      "name": "Ceftriaxone",
      "form": "vial",
      "id": 184
    },
    {
      "price": 0.461,
      "strength": "500 mg",
      "name": "Ceftriaxone",
      "form": "vial",
      "id": 185
    },
    {
      "price": 0.5726,
      "strength": "250 mg",
      "name": "Ceftriaxone",
      "form": "vial",
      "id": 186
    },
    {
      "price": 0.0532,
      "strength": "125 mg/5 ml",
      "name": "Cefuroxime",
      "form": "suspen",
      "id": 187
    },
    {
      "price": 0.1886,
      "strength": "250 mg",
      "name": "Cefuroxime",
      "form": "tab-cap",
      "id": 188
    },
    {
      "price": 0.5503,
      "strength": "500 mg",
      "name": "Cefuroxime",
      "form": "tab-cap",
      "id": 189
    },
    {
      "price": 1.5775,
      "strength": "750 mg",
      "name": "Cefuroxime",
      "form": "vial",
      "id": 190
    },
    {
      "price": 2.4997,
      "strength": "1.5 g",
      "name": "Cefuroxime",
      "form": "vial",
      "id": 191
    },
    {
      "price": 0.0049,
      "strength": "5 mg/5 ml",
      "name": "Cetirizine",
      "form": "syrup",
      "id": 192
    },
    {
      "price": 0.0086,
      "strength": "10 mg",
      "name": "Cetirizine",
      "form": "tab-cap",
      "id": 193
    },
    {
      "price": 0.0038,
      "strength": "15%+1.5%",
      "name": "Cetrimide+Chlorhexidine Gluconate",
      "form": "solution",
      "id": 194
    },
    {
      "price": 0.0161,
      "strength": "125 mg",
      "name": "Charcoal, Activated",
      "form": "tab-cap",
      "id": 195
    },
    {
      "price": 1.2433,
      "strength": "2 mg",
      "name": "Chlorambucil",
      "form": "tab-cap",
      "id": 196
    },
    {
      "price": 0.0155,
      "strength": "500 mg",
      "name": "Chloramine",
      "form": "tab-cap",
      "id": 197
    },
    {
      "price": 0.0102,
      "strength": "125 mg/5 ml",
      "name": "Chloramphenicol",
      "form": "suspen",
      "id": 198
    },
    {
      "price": 0.0241,
      "strength": "0.5%",
      "name": "Chloramphenicol",
      "form": "opht drop",
      "id": 199
    },
    {
      "price": 0.0455,
      "strength": "250 mg",
      "name": "Chloramphenicol",
      "form": "tab-cap",
      "id": 200
    },
    {
      "price": 0.0455,
      "strength": "500 mg",
      "name": "Chloramphenicol",
      "form": "tab-cap",
      "id": 201
    },
    {
      "price": 0.1544,
      "strength": "5%",
      "name": "Chloramphenicol",
      "form": "otic drop",
      "id": 202
    },
    {
      "price": 0.2956,
      "strength": "1%",
      "name": "Chloramphenicol",
      "form": "opht oint",
      "id": 203
    },
    {
      "price": 0.483,
      "strength": "1 g",
      "name": "Chloramphenicol",
      "form": "vial",
      "id": 204
    },
    {
      "price": 0.0888,
      "strength": "10 mcg",
      "name": "Chloramphenicol",
      "form": "disc",
      "id": 205
    },
    {
      "price": 0.3301,
      "strength": "250 mg/ml",
      "name": "Chloramphenicol In Oil",
      "form": "ampoule",
      "id": 206
    },
    {
      "price": 0.2042,
      "strength": "0.5%+0.1%",
      "name": "Chloramphenicol+Dexamethasone",
      "form": "opht drop",
      "id": 207
    },
    {
      "price": 0.0336,
      "strength": "1%",
      "name": "Chlorhexidine",
      "form": "cream",
      "id": 208
    },
    {
      "price": 0.0041,
      "strength": "5%",
      "name": "Chlorhexidine Gluconate",
      "form": "solution",
      "id": 209
    },
    {
      "price": 0.0106,
      "strength": "20%",
      "name": "Chlorhexidine Gluconate",
      "form": "solution",
      "id": 210
    },
    {
      "price": 0.0059,
      "strength": "4%",
      "name": "Chlorhexidine Surgical Scrub",
      "form": "liquid",
      "id": 211
    },
    {
      "price": 0.024,
      "strength": "50 mg/5 ml",
      "name": "Chloroquine (Base)",
      "form": "syrup",
      "id": 212
    },
    {
      "price": 0.0359,
      "strength": "150 mg",
      "name": "Chloroquine (Base)",
      "form": "tab-cap",
      "id": 213
    },
    {
      "price": 0.0084,
      "strength": "100 mg",
      "name": "Chloroquine (Base)",
      "form": "tab-cap",
      "id": 214
    },
    {
      "price": 0.0062,
      "strength": "4.8%",
      "name": "Chloroxylenol",
      "form": "solution",
      "id": 215
    },
    {
      "price": 0.0034,
      "strength": "4 mg",
      "name": "Chlorphenamine Maleate",
      "form": "tab-cap",
      "id": 216
    },
    {
      "price": 0.0047,
      "strength": "2 mg/5 ml",
      "name": "Chlorphenamine Maleate",
      "form": "elixir",
      "id": 217
    },
    {
      "price": 0.1424,
      "strength": "10 mg/ml",
      "name": "Chlorphenamine Maleate",
      "form": "ampoule",
      "id": 218
    },
    {
      "price": 0.0117,
      "strength": "25 mg",
      "name": "Chlorpromazine HCl",
      "form": "tab-cap",
      "id": 219
    },
    {
      "price": 0.0286,
      "strength": "100 mg",
      "name": "Chlorpromazine HCl",
      "form": "tab-cap",
      "id": 220
    },
    {
      "price": 0.0387,
      "strength": "50 mg",
      "name": "Chlorpromazine Hcl",
      "form": "tab-cap",
      "id": 221
    },
    {
      "price": 0.138,
      "strength": "25 mg/ml",
      "name": "Chlorpromazine HCl",
      "form": "ampoule",
      "id": 222
    },
    {
      "price": 0.0367,
      "strength": "250 mg",
      "name": "Chlorpropamide",
      "form": "tab-cap",
      "id": 223
    },
    {
      "price": 0.0375,
      "strength": "50 mg",
      "name": "Chlorthalidone",
      "form": "tab-cap",
      "id": 224
    },
    {
      "price": 0.3555,
      "strength": "25 mg",
      "name": "Ciclosporin",
      "form": "tab-cap",
      "id": 225
    },
    {
      "price": 1.4207,
      "strength": "100 mg",
      "name": "Ciclosporin",
      "form": "tab-cap",
      "id": 226
    },
    {
      "price": 1.5669,
      "strength": "100 mg/ml",
      "name": "Ciclosporin",
      "form": "solution",
      "id": 227
    },
    {
      "price": 0.0167,
      "strength": "200 mg",
      "name": "Cimetidine",
      "form": "tab-cap",
      "id": 228
    },
    {
      "price": 0.0273,
      "strength": "400 mg",
      "name": "Cimetidine",
      "form": "tab-cap",
      "id": 229
    },
    {
      "price": 0.205,
      "strength": "100 mg/ml",
      "name": "Cimetidine",
      "form": "vial",
      "id": 230
    },
    {
      "price": 0.0105,
      "strength": "2 mg/ml",
      "name": "Ciprofloxacin",
      "form": "vial",
      "id": 231
    },
    {
      "price": 0.0379,
      "strength": "500 mg",
      "name": "Ciprofloxacin",
      "form": "tab-cap",
      "id": 232
    },
    {
      "price": 0.0395,
      "strength": "250 mg",
      "name": "Ciprofloxacin",
      "form": "tab-cap",
      "id": 233
    },
    {
      "price": 0.141,
      "strength": "250 mg/5 ml",
      "name": "Ciprofloxacin",
      "form": "suspen",
      "id": 234
    },
    {
      "price": 0.2437,
      "strength": "3 mg/ml",
      "name": "Ciprofloxacin",
      "form": "opht drop",
      "id": 235
    },
    {
      "price": 1.416,
      "strength": "2 mg/ml",
      "name": "Cisatracurium",
      "form": "ampoule",
      "id": 236
    },
    {
      "price": 0.171,
      "strength": "10 mg",
      "name": "Cisplatin",
      "form": "vial",
      "id": 237
    },
    {
      "price": 0.3497,
      "strength": "1 mg/ml",
      "name": "Cisplatin",
      "form": "vial",
      "id": 238
    },
    {
      "price": 6.7713,
      "strength": "50 mg",
      "name": "Cisplatin",
      "form": "vial",
      "id": 239
    },
    {
      "price": 0.14,
      "strength": "20 mg",
      "name": "Citalopram",
      "form": "tab-cap",
      "id": 240
    },
    {
      "price": 0.0431,
      "strength": "250 mg/5 ml",
      "name": "Clarithromycin",
      "form": "suspen",
      "id": 241
    },
    {
      "price": 0.14,
      "strength": "500 mg",
      "name": "Clarithromycin",
      "form": "tab-cap",
      "id": 242
    },
    {
      "price": 0.15,
      "strength": "250 mg",
      "name": "Clarithromycin",
      "form": "tab-cap",
      "id": 243
    },
    {
      "price": 0.0528,
      "strength": "125 mg/5 ml",
      "name": "Clarithromycin",
      "form": "suspen",
      "id": 244
    },
    {
      "price": 0.07,
      "strength": "300 mg",
      "name": "Clindamycin",
      "form": "tab-cap",
      "id": 245
    },
    {
      "price": 0.0816,
      "strength": "150 mg",
      "name": "Clindamycin (Base)",
      "form": "tab-cap",
      "id": 246
    },
    {
      "price": 0.083,
      "strength": "150 mg/ml",
      "name": "Clindamycin (Base)",
      "form": "vial",
      "id": 247
    },
    {
      "price": 0.0462,
      "strength": "0.05%",
      "name": "Clobetasol Proprionate",
      "form": "cream",
      "id": 248
    },
    {
      "price": 0.667,
      "strength": "50 mg",
      "name": "Clofazimine",
      "form": "tab-cap",
      "id": 249
    },
    {
      "price": 1.2672,
      "strength": "100 mg",
      "name": "Clofazimine",
      "form": "tab-cap",
      "id": 250
    },
    {
      "price": 0.2717,
      "strength": "50 mg",
      "name": "Clomifene",
      "form": "tab-cap",
      "id": 251
    },
    {
      "price": 0.0538,
      "strength": "25 mg",
      "name": "Clomipramine",
      "form": "tab-cap",
      "id": 252
    },
    {
      "price": 0.0326,
      "strength": "0.5 mg",
      "name": "Clonazepam",
      "form": "tab-cap",
      "id": 253
    },
    {
      "price": 0.0326,
      "strength": "2 mg",
      "name": "Clonazepam",
      "form": "tab-cap",
      "id": 254
    },
    {
      "price": 0.4589,
      "strength": "2.5 mg/ml",
      "name": "Clonazepam",
      "form": "drops",
      "id": 255
    },
    {
      "price": 0.0775,
      "strength": "75 mg",
      "name": "Clopidogrel Bisulfate",
      "form": "tab-cap",
      "id": 256
    },
    {
      "price": 0.0125,
      "strength": "1%",
      "name": "Clotrimazole",
      "form": "cream",
      "id": 257
    },
    {
      "price": 0.0575,
      "strength": "1%",
      "name": "Clotrimazole",
      "form": "cream",
      "id": 258
    },
    {
      "price": 0.0977,
      "strength": "100 mg",
      "name": "Clotrimazole",
      "form": "pessary",
      "id": 259
    },
    {
      "price": 0.19,
      "strength": "500 mg",
      "name": "Clotrimazole",
      "form": "pessary",
      "id": 260
    },
    {
      "price": 0.0079,
      "strength": "125 mg/5 ml",
      "name": "Cloxacillin Sodium",
      "form": "suspen",
      "id": 261
    },
    {
      "price": 0.0217,
      "strength": "250 mg",
      "name": "Cloxacillin Sodium",
      "form": "tab-cap",
      "id": 262
    },
    {
      "price": 0.034,
      "strength": "500 mg",
      "name": "Cloxacillin Sodium",
      "form": "tab-cap",
      "id": 263
    },
    {
      "price": 0.8327,
      "strength": "250 mg",
      "name": "Cloxacillin Sodium",
      "form": "vial",
      "id": 264
    },
    {
      "price": 0.8864,
      "strength": "500 mg",
      "name": "Cloxacillin Sodium",
      "form": "vial",
      "id": 265
    },
    {
      "price": 0.0994,
      "strength": "100 mg",
      "name": "Clozapine",
      "form": "tab-cap",
      "id": 266
    },
    {
      "price": 0.1055,
      "strength": "25 mg",
      "name": "Clozapine",
      "form": "tab-cap",
      "id": 267
    },
    {
      "price": 0.2889,
      "strength": "30 mg",
      "name": "Codeine",
      "form": "tab-cap",
      "id": 268
    },
    {
      "price": 0.036,
      "strength": "0.5-0.6 mg",
      "name": "Colchicine",
      "form": "tab-cap",
      "id": 269
    },
    {
      "price": 0.7421,
      "strength": "",
      "name": "Condom, Female",
      "form": "condom",
      "id": 270
    },
    {
      "price": 0.0341,
      "strength": "",
      "name": "Condoms (Lubricated)",
      "form": "condom",
      "id": 271
    },
    {
      "price": 0.0059,
      "strength": "",
      "name": "Cough Preparation",
      "form": "syrup",
      "id": 272
    },
    {
      "price": 0.169,
      "strength": "2%",
      "name": "Cromoglicic Acid",
      "form": "opht drop",
      "id": 273
    },
    {
      "price": 0.3337,
      "strength": "1%",
      "name": "Cyclopentolate",
      "form": "opht drop",
      "id": 274
    },
    {
      "price": 0.3,
      "strength": "50 mg",
      "name": "Cyclophosphamide",
      "form": "tab-cap",
      "id": 275
    },
    {
      "price": 6.3952,
      "strength": "500 mg",
      "name": "Cyclophosphamide",
      "form": "vial",
      "id": 276
    },
    {
      "price": 10.1261,
      "strength": "1 g",
      "name": "Cyclophosphamide",
      "form": "vial",
      "id": 277
    },
    {
      "price": 2.31,
      "strength": "200 mg",
      "name": "Cyclophosphamide",
      "form": "vial",
      "id": 278
    },
    {
      "price": 0.4887,
      "strength": "250 mg",
      "name": "Cycloserine",
      "form": "tab-cap",
      "id": 279
    },
    {
      "price": 0.2271,
      "strength": "50 mg",
      "name": "Cyproterone Acetate",
      "form": "tab-cap",
      "id": 280
    },
    {
      "price": 4.2004,
      "strength": "100 mg",
      "name": "Cytarabine",
      "form": "vial",
      "id": 281
    },
    {
      "price": 5.3864,
      "strength": "500 mg",
      "name": "Cytarabine",
      "form": "vial",
      "id": 282
    },
    {
      "price": 12.8428,
      "strength": "200 mg",
      "name": "Dacarbazine",
      "form": "vial",
      "id": 283
    },
    {
      "price": 24.733,
      "strength": "500 mcg",
      "name": "Dactinomycin",
      "form": "vial",
      "id": 284
    },
    {
      "price": 0.9402,
      "strength": "200 mg",
      "name": "Danazol",
      "form": "tab-cap",
      "id": 285
    },
    {
      "price": 0.25,
      "strength": "100 mg",
      "name": "Dapsone",
      "form": "tab-cap",
      "id": 286
    },
    {
      "price": 0.5475,
      "strength": "300 mg",
      "name": "Darunavir",
      "form": "tab-cap",
      "id": 287
    },
    {
      "price": 21.4896,
      "strength": "20 mg",
      "name": "Daunorubicin",
      "form": "vial",
      "id": 288
    },
    {
      "price": 6.7579,
      "strength": "500 mg",
      "name": "Deferoxamine Mesilate",
      "form": "ampoule",
      "id": 289
    },
    {
      "price": 0.0328,
      "strength": "",
      "name": "Determine Chase Buffer",
      "form": "vial",
      "id": 290
    },
    {
      "price": 0.03,
      "strength": "0.5 mg",
      "name": "Dexamethasone",
      "form": "tab-cap",
      "id": 291
    },
    {
      "price": 0.0825,
      "strength": "5 mg/ml",
      "name": "Dexamethasone",
      "form": "ampoule",
      "id": 292
    },
    {
      "price": 0.1695,
      "strength": "4 mg/ml",
      "name": "Dexamethasone",
      "form": "ampoule",
      "id": 293
    },
    {
      "price": 0.2206,
      "strength": "0.1%",
      "name": "Dexamethasone",
      "form": "opht drop",
      "id": 294
    },
    {
      "price": 0.0101,
      "strength": "",
      "name": "Dextran 70 6% In Sod. Chloride 0.9%",
      "form": "solution",
      "id": 295
    },
    {
      "price": 0.0013,
      "strength": "",
      "name": "Dextrose 10% In Water",
      "form": "solution",
      "id": 296
    },
    {
      "price": 0.0018,
      "strength": "",
      "name": "Dextrose 2.5% In Sod. Chloride 0.45%",
      "form": "solution",
      "id": 297
    },
    {
      "price": 0.0009,
      "strength": "",
      "name": "Dextrose 4.3-5% In Water",
      "form": "solution",
      "id": 298
    },
    {
      "price": 0.0009,
      "strength": "",
      "name": "Dextrose 5% In Sodium Chloride 0.45%",
      "form": "solution",
      "id": 299
    },
    {
      "price": 0.0011,
      "strength": "",
      "name": "Dextrose 5% In Sodium Chloride 0.9%",
      "form": "solution",
      "id": 300
    },
    {
      "price": 0.001,
      "strength": "",
      "name": "Dextrose 5% In Water",
      "form": "solution",
      "id": 301
    },
    {
      "price": 0.0082,
      "strength": "",
      "name": "Dextrose 50% In Water",
      "form": "solution",
      "id": 302
    },
    {
      "price": 0.0036,
      "strength": "1.5%",
      "name": "Dialysis Sol. Peritoneal W/ Dextrose",
      "form": "solution",
      "id": 303
    },
    {
      "price": 0.01,
      "strength": "10 mg",
      "name": "Diazepam",
      "form": "tab-cap",
      "id": 304
    },
    {
      "price": 0.0235,
      "strength": "5 mg",
      "name": "Diazepam",
      "form": "tab-cap",
      "id": 305
    },
    {
      "price": 0.0876,
      "strength": "5 mg/ml",
      "name": "Diazepam",
      "form": "ampoule",
      "id": 306
    },
    {
      "price": 0.0063,
      "strength": "1.8 mg/ml",
      "name": "Diclofenac",
      "form": "suspen",
      "id": 307
    },
    {
      "price": 0.007,
      "strength": "1%",
      "name": "Diclofenac",
      "form": "ointment",
      "id": 308
    },
    {
      "price": 0.23,
      "strength": "12.5 mg",
      "name": "Diclofenac",
      "form": "suppos",
      "id": 309
    },
    {
      "price": 0.1152,
      "strength": "100 mg",
      "name": "Diclofenac",
      "form": "suppos",
      "id": 310
    },
    {
      "price": 0.0086,
      "strength": "25 mg",
      "name": "Diclofenac Sodium",
      "form": "tab-cap",
      "id": 311
    },
    {
      "price": 0.0095,
      "strength": "50 mg",
      "name": "Diclofenac Sodium",
      "form": "tab-cap",
      "id": 312
    },
    {
      "price": 0.0153,
      "strength": "75 mg",
      "name": "Diclofenac Sodium",
      "form": "tab-cap",
      "id": 313
    },
    {
      "price": 0.0345,
      "strength": "25 mg/ml",
      "name": "Diclofenac Sodium",
      "form": "ampoule",
      "id": 314
    },
    {
      "price": 0.1759,
      "strength": "0.1%",
      "name": "Diclofenac Sodium",
      "form": "opht drop",
      "id": 315
    },
    {
      "price": 0.06,
      "strength": "500 mg",
      "name": "Dicloxacillin",
      "form": "tab-cap",
      "id": 316
    },
    {
      "price": 0.064,
      "strength": "250 mg",
      "name": "Dicloxacillin",
      "form": "tab-cap",
      "id": 317
    },
    {
      "price": 1.07,
      "strength": "500 mg",
      "name": "Dicloxacillin",
      "form": "vial",
      "id": 318
    },
    {
      "price": 0.0709,
      "strength": "25 mg",
      "name": "Didanosine",
      "form": "tab-cap",
      "id": 319
    },
    {
      "price": 0.0924,
      "strength": "50 mg",
      "name": "Didanosine",
      "form": "tab-cap",
      "id": 320
    },
    {
      "price": 0.1183,
      "strength": "100 mg",
      "name": "Didanosine",
      "form": "tab-cap",
      "id": 321
    },
    {
      "price": 0.2329,
      "strength": "250 mg",
      "name": "Didanosine",
      "form": "tab-cap",
      "id": 322
    },
    {
      "price": 0.3717,
      "strength": "400 mg",
      "name": "Didanosine",
      "form": "tab-cap",
      "id": 323
    },
    {
      "price": 0.6764,
      "strength": "400 mg",
      "name": "Didanosine",
      "form": "tab-cap",
      "id": 324
    },
    {
      "price": 2.2386,
      "strength": "400 mg",
      "name": "Didanosine",
      "form": "tab-cap",
      "id": 325
    },
    {
      "price": 0.2392,
      "strength": "200 mg",
      "name": "Didanosine",
      "form": "tab-cap",
      "id": 326
    },
    {
      "price": 0.2975,
      "strength": "125 mg",
      "name": "Didanosine",
      "form": "tab-cap",
      "id": 327
    },
    {
      "price": 0.385,
      "strength": "200 mg",
      "name": "Didanosine",
      "form": "tab-cap",
      "id": 328
    },
    {
      "price": 0.4463,
      "strength": "200 mg",
      "name": "Didanosine",
      "form": "tab-cap",
      "id": 329
    },
    {
      "price": 0.5085,
      "strength": "250 mg",
      "name": "Didanosine",
      "form": "tab-cap",
      "id": 330
    },
    {
      "price": 6.6098,
      "strength": "10 mg/ml",
      "name": "Didanosine",
      "form": "powder",
      "id": 331
    },
    {
      "price": 0.0057,
      "strength": "50 mg",
      "name": "Diethylcarbamazine Citrate",
      "form": "tab-cap",
      "id": 332
    },
    {
      "price": 0.0318,
      "strength": "0.125 mg",
      "name": "Digoxin",
      "form": "tab-cap",
      "id": 333
    },
    {
      "price": 0.0482,
      "strength": "0.25 mg",
      "name": "Digoxin",
      "form": "tab-cap",
      "id": 334
    },
    {
      "price": 0.1127,
      "strength": "0.05 mg/ml",
      "name": "Digoxin",
      "form": "solution",
      "id": 335
    },
    {
      "price": 0.3788,
      "strength": "0.25 mg/ml",
      "name": "Digoxin",
      "form": "ampoule",
      "id": 336
    },
    {
      "price": 0.4009,
      "strength": "40 + 320 mg",
      "name": "Dihydroartemisinin + Piperaquine",
      "form": "tab-cap",
      "id": 337
    },
    {
      "price": 0.0812,
      "strength": "30 mg",
      "name": "Dihydrocodeine",
      "form": "tab-cap",
      "id": 338
    },
    {
      "price": 0.0599,
      "strength": "60 mg",
      "name": "Diltiazem HCl",
      "form": "tab-cap",
      "id": 339
    },
    {
      "price": 0.01,
      "strength": "50 mg",
      "name": "Dimenhydrinate",
      "form": "tab-cap",
      "id": 340
    },
    {
      "price": 0.213,
      "strength": "50 mg/ml",
      "name": "Dimenhydrinate",
      "form": "vial",
      "id": 341
    },
    {
      "price": 0.01,
      "strength": "25 mg",
      "name": "Diphenhydramine",
      "form": "tab-cap",
      "id": 342
    },
    {
      "price": 0.0848,
      "strength": "12.5 mg/ml",
      "name": "Dobutamine",
      "form": "vial",
      "id": 343
    },
    {
      "price": 10.83,
      "strength": "20 mg",
      "name": "Docetaxel",
      "form": "vial",
      "id": 344
    },
    {
      "price": 27.89,
      "strength": "80 mg",
      "name": "Docetaxel",
      "form": "vial",
      "id": 345
    },
    {
      "price": 108,
      "strength": "40 mg",
      "name": "Docetaxel",
      "form": "vial",
      "id": 346
    },
    {
      "price": 0.0625,
      "strength": "40 mg/ml",
      "name": "Dopamine HCl",
      "form": "ampoule",
      "id": 347
    },
    {
      "price": 1.534,
      "strength": "2%",
      "name": "Dorzolamide Chlorhydrate",
      "form": "opht drop",
      "id": 348
    },
    {
      "price": 0.0913,
      "strength": "4 mg",
      "name": "Doxazosin",
      "form": "tab-cap",
      "id": 349
    },
    {
      "price": 2.55,
      "strength": "10 mg",
      "name": "Doxorubicin HCl",
      "form": "vial",
      "id": 350
    },
    {
      "price": 6.0044,
      "strength": "50 mg",
      "name": "Doxorubicin HCl",
      "form": "vial",
      "id": 351
    },
    {
      "price": 0.0191,
      "strength": "100 mg",
      "name": "Doxycycline",
      "form": "tab-cap",
      "id": 352
    },
    {
      "price": 0.535,
      "strength": "2.5 mg/ml",
      "name": "Droperidol",
      "form": "ampoule",
      "id": 353
    },
    {
      "price": 0.0391,
      "strength": "50 mg",
      "name": "Efavirenz",
      "form": "tab-cap",
      "id": 354
    },
    {
      "price": 0.0461,
      "strength": "200 mg",
      "name": "Efavirenz",
      "form": "tab-cap",
      "id": 355
    },
    {
      "price": 0.1414,
      "strength": "600 mg",
      "name": "Efavirenz",
      "form": "tab-cap",
      "id": 356
    },
    {
      "price": 0.0989,
      "strength": "30 mg/ml",
      "name": "Efavirenz",
      "form": "syrup",
      "id": 357
    },
    {
      "price": 0.154,
      "strength": "100 mg",
      "name": "Efavirenz",
      "form": "tab-cap",
      "id": 358
    },
    {
      "price": 0.4151,
      "strength": "",
      "name": "Efavirenz+Emtricitabine+Tenofovir DF",
      "form": "tab-cap",
      "id": 359
    },
    {
      "price": 0.3857,
      "strength": "",
      "name": "Efavirenz+Lamivudine+Tenofovir Disop.",
      "form": "tab-cap",
      "id": 360
    },
    {
      "price": 0.0059,
      "strength": "10 mg",
      "name": "Enalapril",
      "form": "tab-cap",
      "id": 361
    },
    {
      "price": 0.0095,
      "strength": "5 mg",
      "name": "Enalapril",
      "form": "tab-cap",
      "id": 362
    },
    {
      "price": 0.0097,
      "strength": "20 mg",
      "name": "Enalapril",
      "form": "tab-cap",
      "id": 363
    },
    {
      "price": 3.21,
      "strength": "20 mg",
      "name": "Enoxaparin",
      "form": "syringe",
      "id": 364
    },
    {
      "price": 3.34,
      "strength": "40 mg",
      "name": "Enoxaparin",
      "form": "syringe",
      "id": 365
    },
    {
      "price": 3.4119,
      "strength": "60 mg",
      "name": "Enoxaparin",
      "form": "syringe",
      "id": 366
    },
    {
      "price": 4.0318,
      "strength": "100 mg",
      "name": "Enoxaparin",
      "form": "syringe",
      "id": 367
    },
    {
      "price": 6.4507,
      "strength": "80 mg",
      "name": "Enoxaparin",
      "form": "syringe",
      "id": 368
    },
    {
      "price": 0.0329,
      "strength": "0.5%",
      "name": "Ephedrine",
      "form": "nasal",
      "id": 369
    },
    {
      "price": 0.975,
      "strength": "30 mg/ml",
      "name": "Ephedrine",
      "form": "vial",
      "id": 370
    },
    {
      "price": 0.0066,
      "strength": "30 mg",
      "name": "Ephedrine HCl",
      "form": "tab-cap",
      "id": 371
    },
    {
      "price": 1.9501,
      "strength": "50 mg/ml",
      "name": "Ephedrine Sulfate",
      "form": "ampoule",
      "id": 372
    },
    {
      "price": 0.2531,
      "strength": "1 mg/ml",
      "name": "Epinephrine",
      "form": "ampoule",
      "id": 373
    },
    {
      "price": 7.23,
      "strength": "10 mg",
      "name": "Epirubicin",
      "form": "vial",
      "id": 374
    },
    {
      "price": 42,
      "strength": "50 mg",
      "name": "Epirubicin",
      "form": "vial",
      "id": 375
    },
    {
      "price": 1.844,
      "strength": "2000 IU",
      "name": "Epoetin Alpha",
      "form": "vial",
      "id": 376
    },
    {
      "price": 6.5629,
      "strength": "4000 IU",
      "name": "Epoetin Alpha",
      "form": "vial",
      "id": 377
    },
    {
      "price": 149.6,
      "strength": "50,000 IU",
      "name": "Epoetin Beta",
      "form": "vial",
      "id": 378
    },
    {
      "price": 0.2777,
      "strength": "0.2 mg/ml",
      "name": "Ergometrine Maleate",
      "form": "ampoule",
      "id": 379
    },
    {
      "price": 0.6345,
      "strength": "0.5 mg/ml",
      "name": "Ergometrine Maleate",
      "form": "ampoule",
      "id": 380
    },
    {
      "price": 0.0119,
      "strength": "0.5 mg",
      "name": "Ergometrine Maleate",
      "form": "tab-cap",
      "id": 381
    },
    {
      "price": 0.0129,
      "strength": "0.2 mg",
      "name": "Ergometrine Maleate",
      "form": "tab-cap",
      "id": 382
    },
    {
      "price": 0.2688,
      "strength": "1+100 mg",
      "name": "Ergotamine+Caffeine",
      "form": "tab-cap",
      "id": 383
    },
    {
      "price": 0.0092,
      "strength": "125 mg/5 ml",
      "name": "Erythromycin",
      "form": "suspen",
      "id": 384
    },
    {
      "price": 0.0141,
      "strength": "250 mg/5 ml",
      "name": "Erythromycin",
      "form": "suspen",
      "id": 385
    },
    {
      "price": 0.0428,
      "strength": "250 mg",
      "name": "Erythromycin",
      "form": "tab-cap",
      "id": 386
    },
    {
      "price": 0.0738,
      "strength": "500 mg",
      "name": "Erythromycin",
      "form": "tab-cap",
      "id": 387
    },
    {
      "price": 0.0888,
      "strength": "15 mcg",
      "name": "Erythromycin",
      "form": "disc",
      "id": 388
    },
    {
      "price": 16.815,
      "strength": "500 mg",
      "name": "Erythromycin Lactobionate",
      "form": "vial",
      "id": 389
    },
    {
      "price": 0.2281,
      "strength": "0.625 mg",
      "name": "Estrogens, Conjugated",
      "form": "tab-cap",
      "id": 390
    },
    {
      "price": 0.0358,
      "strength": "400 mg",
      "name": "Ethambutol",
      "form": "tab-cap",
      "id": 391
    },
    {
      "price": 0.036,
      "strength": "100 mg",
      "name": "Ethambutol",
      "form": "tab-cap",
      "id": 392
    },
    {
      "price": 0.0288,
      "strength": "400mg+150 mg",
      "name": "Ethambutol+Isoniazid",
      "form": "tab-cap",
      "id": 393
    },
    {
      "price": 0.0094,
      "strength": "",
      "name": "Ether, Anaesthetic",
      "form": "solution",
      "id": 394
    },
    {
      "price": 0.7245,
      "strength": "0.03+0.15mg",
      "name": "Ethinylestradiol+Desogestrel",
      "form": "tab-cap",
      "id": 395
    },
    {
      "price": 0.2167,
      "strength": "0.03+0.15 mg",
      "name": "Ethinylestradiol+Levonorgestrel",
      "form": "tab-cap",
      "id": 396
    },
    {
      "price": 0.2741,
      "strength": "0.05+0.5 mg",
      "name": "Ethinylestradiol+Norgestrel",
      "form": "tab-cap",
      "id": 397
    },
    {
      "price": 0.1513,
      "strength": "250 mg",
      "name": "Ethionamide",
      "form": "tab-cap",
      "id": 398
    },
    {
      "price": 0.1118,
      "strength": "125 mg",
      "name": "Ethionamide",
      "form": "tab-cap",
      "id": 399
    },
    {
      "price": 0.1845,
      "strength": "250 mg",
      "name": "Ethosuximide",
      "form": "tab-cap",
      "id": 400
    },
    {
      "price": 0.3655,
      "strength": "2 mg/ml",
      "name": "Etomidate",
      "form": "ampoule",
      "id": 401
    },
    {
      "price": 10.0172,
      "strength": "68 mg/rod",
      "name": "Etonogestrel",
      "form": "rod",
      "id": 402
    },
    {
      "price": 0.78,
      "strength": "20 mg/ml",
      "name": "Etoposide",
      "form": "vial",
      "id": 403
    },
    {
      "price": 0.2981,
      "strength": "100 mg",
      "name": "Etravirine",
      "form": "tab-cap",
      "id": 404
    },
    {
      "price": 1154.8958,
      "strength": "100,000 U",
      "name": "Factor VIIa",
      "form": "vial",
      "id": 405
    },
    {
      "price": 75.8056,
      "strength": "300 IU",
      "name": "Factor VIII",
      "form": "vial",
      "id": 406
    },
    {
      "price": 238.9703,
      "strength": "1000 IU",
      "name": "Factor VIII",
      "form": "vial",
      "id": 407
    },
    {
      "price": 308.5571,
      "strength": "500 IU",
      "name": "Factor VIII",
      "form": "vial",
      "id": 408
    },
    {
      "price": 0.0062,
      "strength": "20 mg",
      "name": "Famotidine",
      "form": "tab-cap",
      "id": 409
    },
    {
      "price": 0.0217,
      "strength": "40 mg",
      "name": "Famotidine",
      "form": "tab-cap",
      "id": 410
    },
    {
      "price": 0.3675,
      "strength": "50 mcg/ml",
      "name": "Fentanyl Citrate",
      "form": "vial",
      "id": 411
    },
    {
      "price": 0.0109,
      "strength": "200 mg",
      "name": "Ferrous Salt",
      "form": "tab-cap",
      "id": 412
    },
    {
      "price": 0.0944,
      "strength": "20 mg/ml",
      "name": "Ferrous Salt",
      "form": "suspen",
      "id": 413
    },
    {
      "price": 0.0471,
      "strength": "40 mg/ml",
      "name": "Ferrous Salt",
      "form": "solution",
      "id": 414
    },
    {
      "price": 0.0052,
      "strength": "200+0.25 mg",
      "name": "Ferrous Salt+Folic Acid",
      "form": "tab-cap",
      "id": 415
    },
    {
      "price": 0.034,
      "strength": "200 mg+0.4mg",
      "name": "Ferrous Salt+Folic Acid",
      "form": "tab-cap",
      "id": 416
    },
    {
      "price": 0.0167,
      "strength": "125 mg/ml",
      "name": "Ferrous Sulfate",
      "form": "drops",
      "id": 417
    },
    {
      "price": 3.9523,
      "strength": "300 mcg/ml",
      "name": "Filgrastim",
      "form": "vial",
      "id": 418
    },
    {
      "price": 62.8625,
      "strength": "480mcg/0.8ml",
      "name": "Filgrastim",
      "form": "syringe",
      "id": 419
    },
    {
      "price": 94.6576,
      "strength": "480mcg/1.6ml",
      "name": "Filgrastim",
      "form": "vial",
      "id": 420
    },
    {
      "price": 0.0415,
      "strength": "250 mg",
      "name": "Flucloxacillin",
      "form": "tab-cap",
      "id": 421
    },
    {
      "price": 0.0463,
      "strength": "2 mg/ml",
      "name": "Fluconazole",
      "form": "vial",
      "id": 422
    },
    {
      "price": 0.0565,
      "strength": "50 mg",
      "name": "Fluconazole",
      "form": "tab-cap",
      "id": 423
    },
    {
      "price": 0.0662,
      "strength": "200 mg",
      "name": "Fluconazole",
      "form": "tab-cap",
      "id": 424
    },
    {
      "price": 0.1285,
      "strength": "150 mg",
      "name": "Fluconazole",
      "form": "tab-cap",
      "id": 425
    },
    {
      "price": 0.0182,
      "strength": "50 mg/5 ml",
      "name": "Fluconazole",
      "form": "suspen",
      "id": 426
    },
    {
      "price": 0.0472,
      "strength": "100 mg",
      "name": "Fluconazole",
      "form": "tab-cap",
      "id": 427
    },
    {
      "price": 54.2553,
      "strength": "50 mg",
      "name": "Fludarabine Phosphate",
      "form": "vial",
      "id": 428
    },
    {
      "price": 1.4565,
      "strength": "0.1 mg/ml",
      "name": "Flumazenil",
      "form": "vial",
      "id": 429
    },
    {
      "price": 0.0813,
      "strength": "0.025%",
      "name": "Fluocinolone",
      "form": "cream",
      "id": 430
    },
    {
      "price": 2.4498,
      "strength": "100 mg/ml",
      "name": "Fluorescein",
      "form": "ampoule",
      "id": 431
    },
    {
      "price": 0.1522,
      "strength": "",
      "name": "Fluorescein Sodium",
      "form": "opht strp",
      "id": 432
    },
    {
      "price": 0.2839,
      "strength": "50 mg/ml",
      "name": "Fluorouracil",
      "form": "ampoule",
      "id": 433
    },
    {
      "price": 1.1392,
      "strength": "25 mg/ml",
      "name": "Fluorouracil",
      "form": "vial",
      "id": 434
    },
    {
      "price": 0.0168,
      "strength": "20 mg",
      "name": "Fluoxetine",
      "form": "tab-cap",
      "id": 435
    },
    {
      "price": 1.7279,
      "strength": "25 mg/ml",
      "name": "Fluphenazine Decanoate",
      "form": "ampoule",
      "id": 436
    },
    {
      "price": 0.099,
      "strength": "250 mg",
      "name": "Flutamide",
      "form": "tab-cap",
      "id": 437
    },
    {
      "price": 0.0035,
      "strength": "5 mg",
      "name": "Folic Acid",
      "form": "tab-cap",
      "id": 438
    },
    {
      "price": 0.017,
      "strength": "1 mg",
      "name": "Folic Acid",
      "form": "tab-cap",
      "id": 439
    },
    {
      "price": 0.007,
      "strength": "40%",
      "name": "Formaldehyde",
      "form": "liquid",
      "id": 440
    },
    {
      "price": 0.0083,
      "strength": "40 mg",
      "name": "Furosemide",
      "form": "tab-cap",
      "id": 441
    },
    {
      "price": 0.0742,
      "strength": "10 mg/ml",
      "name": "Furosemide",
      "form": "ampoule",
      "id": 442
    },
    {
      "price": 0.2009,
      "strength": "10 mg/ml",
      "name": "Furosemide",
      "form": "solution",
      "id": 443
    },
    {
      "price": 0.1302,
      "strength": "2%",
      "name": "Fusidic Acid",
      "form": "cream",
      "id": 444
    },
    {
      "price": 0.06,
      "strength": "300 mg",
      "name": "Gabapentin",
      "form": "tab-cap",
      "id": 445
    },
    {
      "price": 0.1282,
      "strength": "100 mg",
      "name": "Gabapentin",
      "form": "tab-cap",
      "id": 446
    },
    {
      "price": 0.2956,
      "strength": "400 mg",
      "name": "Gabapentin",
      "form": "tab-cap",
      "id": 447
    },
    {
      "price": 48,
      "strength": "500 mg",
      "name": "Ganciclovir",
      "form": "vial",
      "id": 448
    },
    {
      "price": 16.6145,
      "strength": "200 mg",
      "name": "Gemcitabine",
      "form": "vial",
      "id": 449
    },
    {
      "price": 25.8472,
      "strength": "1 g",
      "name": "Gemcitabine",
      "form": "vial",
      "id": 450
    },
    {
      "price": 0.1,
      "strength": "600 mg",
      "name": "Gemfibrozil",
      "form": "tab-cap",
      "id": 451
    },
    {
      "price": 0.187,
      "strength": "0.3%",
      "name": "Gentamicin",
      "form": "opht drop",
      "id": 452
    },
    {
      "price": 0.099,
      "strength": "10 mcg",
      "name": "Gentamicin",
      "form": "disc",
      "id": 453
    },
    {
      "price": 0.0802,
      "strength": "40 mg/ml",
      "name": "Gentamicin Sulfate",
      "form": "ampoule",
      "id": 454
    },
    {
      "price": 0.0942,
      "strength": "10 mg/ml",
      "name": "Gentamicin Sulfate",
      "form": "ampoule",
      "id": 455
    },
    {
      "price": 0.0208,
      "strength": "",
      "name": "Gentian Violet",
      "form": "powder",
      "id": 456
    },
    {
      "price": 0.0083,
      "strength": "5 mg",
      "name": "Glibenclamide",
      "form": "tab-cap",
      "id": 457
    },
    {
      "price": 0.035,
      "strength": "30 mg",
      "name": "Gliclazide",
      "form": "tab-cap",
      "id": 458
    },
    {
      "price": 0.0455,
      "strength": "80 mg",
      "name": "Gliclazide",
      "form": "tab-cap",
      "id": 459
    },
    {
      "price": 0.04,
      "strength": "2 mg",
      "name": "Glimepiride",
      "form": "tab-cap",
      "id": 460
    },
    {
      "price": 0.0469,
      "strength": "4 mg",
      "name": "Glimepiride",
      "form": "tab-cap",
      "id": 461
    },
    {
      "price": 25.7458,
      "strength": "1 mg",
      "name": "Glucagon",
      "form": "vial",
      "id": 462
    },
    {
      "price": 0.0074,
      "strength": "2%",
      "name": "Glutaraldehyde",
      "form": "solution",
      "id": 463
    },
    {
      "price": 0.1058,
      "strength": "2 g",
      "name": "Glycerin",
      "form": "suppos",
      "id": 464
    },
    {
      "price": 0.1075,
      "strength": "4 g",
      "name": "Glycerin",
      "form": "suppos",
      "id": 465
    },
    {
      "price": 0.2051,
      "strength": "1 g",
      "name": "Glycerin",
      "form": "suppos",
      "id": 466
    },
    {
      "price": 0.0298,
      "strength": "0.4 mg/dose",
      "name": "Glyceryl Trinitrate",
      "form": "nasal spr",
      "id": 467
    },
    {
      "price": 0.1634,
      "strength": "0.5 mg",
      "name": "Glyceryl Trinitrate",
      "form": "tab-cap",
      "id": 468
    },
    {
      "price": 0.7436,
      "strength": "5 mg/ml",
      "name": "Glyceryl Trinitrate",
      "form": "ampoule",
      "id": 469
    },
    {
      "price": 0.1582,
      "strength": "1 mg",
      "name": "Granisetron",
      "form": "tab-cap",
      "id": 470
    },
    {
      "price": 6.5,
      "strength": "1 mg/ml",
      "name": "Granisetron",
      "form": "ampoule",
      "id": 471
    },
    {
      "price": 0.0231,
      "strength": "125 mg",
      "name": "Griseofulvin",
      "form": "tab-cap",
      "id": 472
    },
    {
      "price": 0.1201,
      "strength": "500 mg",
      "name": "Griseofulvin",
      "form": "tab-cap",
      "id": 473
    },
    {
      "price": 0.0358,
      "strength": "250 mg",
      "name": "Griseofulvin",
      "form": "tab-cap",
      "id": 474
    },
    {
      "price": 0.0155,
      "strength": "10 mg",
      "name": "Haloperidol",
      "form": "tab-cap",
      "id": 475
    },
    {
      "price": 0.02,
      "strength": "5 mg",
      "name": "Haloperidol",
      "form": "tab-cap",
      "id": 476
    },
    {
      "price": 0.026,
      "strength": "1.5-2 mg",
      "name": "Haloperidol",
      "form": "tab-cap",
      "id": 477
    },
    {
      "price": 0.0311,
      "strength": "2 mg/ml",
      "name": "Haloperidol",
      "form": "syrup",
      "id": 478
    },
    {
      "price": 0.0894,
      "strength": "0.5 mg",
      "name": "Haloperidol",
      "form": "tab-cap",
      "id": 479
    },
    {
      "price": 0.4723,
      "strength": "5 mg/ml",
      "name": "Haloperidol",
      "form": "ampoule",
      "id": 480
    },
    {
      "price": 0.1855,
      "strength": "",
      "name": "Halothane",
      "form": "liquid",
      "id": 481
    },
    {
      "price": 0.2159,
      "strength": "1000 IU/ml",
      "name": "Heparin",
      "form": "ampoule",
      "id": 482
    },
    {
      "price": 0.448,
      "strength": "5000 IU/ml",
      "name": "Heparin",
      "form": "ampoule",
      "id": 483
    },
    {
      "price": 11.8309,
      "strength": "5000 IU",
      "name": "Human Chorionic Gonadotrophin",
      "form": "ampoule",
      "id": 484
    },
    {
      "price": 17.5,
      "strength": "75 IU",
      "name": "Human Menopausal Gonadotrophin",
      "form": "vial",
      "id": 485
    },
    {
      "price": 0.0475,
      "strength": "25 mg",
      "name": "Hydralazine",
      "form": "tab-cap",
      "id": 486
    },
    {
      "price": 0.0557,
      "strength": "50 mg",
      "name": "Hydralazine",
      "form": "tab-cap",
      "id": 487
    },
    {
      "price": 4.16,
      "strength": "20 mg",
      "name": "Hydralazine",
      "form": "ampoule",
      "id": 488
    },
    {
      "price": 0.0041,
      "strength": "50 mg",
      "name": "Hydrochlorothiazide",
      "form": "tab-cap",
      "id": 489
    },
    {
      "price": 0.0087,
      "strength": "12.5 mg",
      "name": "Hydrochlorothiazide",
      "form": "tab-cap",
      "id": 490
    },
    {
      "price": 0.0094,
      "strength": "25 mg",
      "name": "Hydrochlorothiazide",
      "form": "tab-cap",
      "id": 491
    },
    {
      "price": 0.021,
      "strength": "25 mg+50 mg",
      "name": "Hydrochlorothiazide+Triamterene",
      "form": "tab-cap",
      "id": 492
    },
    {
      "price": 0.0529,
      "strength": "1%",
      "name": "Hydrocortisone",
      "form": "cream",
      "id": 493
    },
    {
      "price": 0.0903,
      "strength": "10 mg",
      "name": "Hydrocortisone",
      "form": "tab-cap",
      "id": 494
    },
    {
      "price": 0.1003,
      "strength": "1%",
      "name": "Hydrocortisone",
      "form": "ointment",
      "id": 495
    },
    {
      "price": 0.5517,
      "strength": "100 mg",
      "name": "Hydrocortisone",
      "form": "vial",
      "id": 496
    },
    {
      "price": 0.0988,
      "strength": "1%",
      "name": "Hydrocortisone",
      "form": "opht drop",
      "id": 497
    },
    {
      "price": 0.0012,
      "strength": "6%",
      "name": "Hydrogen Peroxide",
      "form": "solution",
      "id": 498
    },
    {
      "price": 0.0023,
      "strength": "3%",
      "name": "Hydrogen Peroxide",
      "form": "solution",
      "id": 499
    },
    {
      "price": 0.118,
      "strength": "500 mg",
      "name": "Hydroxycarbamide",
      "form": "tab-cap",
      "id": 500
    },
    {
      "price": 0.3532,
      "strength": "300 mg",
      "name": "Hydroxychloroquine",
      "form": "tab-cap",
      "id": 501
    },
    {
      "price": 0.124,
      "strength": "200 mg",
      "name": "Hydroxychloroquine Sulfate",
      "form": "tab-cap",
      "id": 502
    },
    {
      "price": 0.0073,
      "strength": "25 mg",
      "name": "Hydroxyzine",
      "form": "tab-cap",
      "id": 503
    },
    {
      "price": 0.0093,
      "strength": "10 mg/5 ml",
      "name": "Hydroxyzine",
      "form": "syrup",
      "id": 504
    },
    {
      "price": 0.0344,
      "strength": "10 mg",
      "name": "Hyoscine Butylbromide",
      "form": "tab-cap",
      "id": 505
    },
    {
      "price": 0.1207,
      "strength": "10 mg/ml",
      "name": "Hyoscine Butylbromide",
      "form": "ampoule",
      "id": 506
    },
    {
      "price": 0.1835,
      "strength": "20 mg/ml",
      "name": "Hyoscine Butylbromide",
      "form": "ampoule",
      "id": 507
    },
    {
      "price": 0.0644,
      "strength": "20 mg",
      "name": "Hyoscine Butylbromide",
      "form": "tab-cap",
      "id": 508
    },
    {
      "price": 0.117,
      "strength": "0.3%",
      "name": "Hypromellose",
      "form": "opht drop",
      "id": 509
    },
    {
      "price": 0.0107,
      "strength": "100 mg/5 ml",
      "name": "Ibuprofen",
      "form": "suspen",
      "id": 510
    },
    {
      "price": 0.0148,
      "strength": "400 mg",
      "name": "Ibuprofen",
      "form": "tab-cap",
      "id": 511
    },
    {
      "price": 0.0193,
      "strength": "200 mg",
      "name": "Ibuprofen",
      "form": "tab-cap",
      "id": 512
    },
    {
      "price": 0.0398,
      "strength": "600 mg",
      "name": "Ibuprofen",
      "form": "tab-cap",
      "id": 513
    },
    {
      "price": 0.0374,
      "strength": "20%",
      "name": "Ichthammol",
      "form": "ointment",
      "id": 514
    },
    {
      "price": 83.0288,
      "strength": "10 mg",
      "name": "Idarubicin",
      "form": "vial",
      "id": 515
    },
    {
      "price": 140,
      "strength": "5 mg",
      "name": "Idarubicin",
      "form": "vial",
      "id": 516
    },
    {
      "price": 8.595,
      "strength": "1 g",
      "name": "Ifosfamide",
      "form": "vial",
      "id": 517
    },
    {
      "price": 25.0054,
      "strength": "500 mg",
      "name": "Ifosfamide",
      "form": "vial",
      "id": 518
    },
    {
      "price": 39.0245,
      "strength": "2 g",
      "name": "Ifosfamide",
      "form": "vial",
      "id": 519
    },
    {
      "price": 0.7446,
      "strength": "100 mg",
      "name": "Imatinib",
      "form": "tab-cap",
      "id": 520
    },
    {
      "price": 28.1493,
      "strength": "400 mg",
      "name": "Imatinib",
      "form": "tab-cap",
      "id": 521
    },
    {
      "price": 5.1105,
      "strength": "500mg+500mg",
      "name": "Imipenem+Cilastatin",
      "form": "vial",
      "id": 522
    },
    {
      "price": 0.0217,
      "strength": "10 mg",
      "name": "Imipramine HCl",
      "form": "tab-cap",
      "id": 523
    },
    {
      "price": 0.0309,
      "strength": "25 mg",
      "name": "Imipramine HCl",
      "form": "tab-cap",
      "id": 524
    },
    {
      "price": 32.72,
      "strength": "200 U",
      "name": "Immunoglobulin, Anti-Hepatitis B",
      "form": "ampoule",
      "id": 525
    },
    {
      "price": 29.28,
      "strength": "250 IU",
      "name": "Immunoglobulin, Anti-Tetanus",
      "form": "vial",
      "id": 526
    },
    {
      "price": 125.65,
      "strength": "125 IU/ml",
      "name": "Immunoglobulin, Varicella Zoster",
      "form": "vial",
      "id": 527
    },
    {
      "price": 0.2917,
      "strength": "400 mg",
      "name": "Indinavir",
      "form": "tab-cap",
      "id": 528
    },
    {
      "price": 0.0076,
      "strength": "25 mg",
      "name": "Indometacin",
      "form": "tab-cap",
      "id": 529
    },
    {
      "price": 0.0995,
      "strength": "100 mg",
      "name": "Indometacin",
      "form": "suppos",
      "id": 530
    },
    {
      "price": 0.26,
      "strength": "40 IU/ml",
      "name": "Insulin, Isophane",
      "form": "vial",
      "id": 531
    },
    {
      "price": 0.3603,
      "strength": "100 IU/ml",
      "name": "Insulin, Isophane",
      "form": "vial",
      "id": 532
    },
    {
      "price": 0.3603,
      "strength": "100 IU/ml",
      "name": "Insulin, Neut. Sol/Isophane 30/70",
      "form": "vial",
      "id": 533
    },
    {
      "price": 0.26,
      "strength": "40 IU/ml",
      "name": "Insulin, Neutral Soluble",
      "form": "vial",
      "id": 534
    },
    {
      "price": 0.4919,
      "strength": "100 IU/ml",
      "name": "Insulin, Neutral Soluble",
      "form": "vial",
      "id": 535
    },
    {
      "price": 1.114,
      "strength": "100 IU/ml",
      "name": "Insulin, Zinc Susp",
      "form": "vial",
      "id": 536
    },
    {
      "price": 0.2198,
      "strength": "350 mg/ml",
      "name": "Iohexol",
      "form": "vial",
      "id": 537
    },
    {
      "price": 0.0328,
      "strength": "20 mcg/dose",
      "name": "Ipratropium Bromide",
      "form": "inhaler",
      "id": 538
    },
    {
      "price": 0.4086,
      "strength": "250 mcg/ml",
      "name": "Ipratropium Bromide",
      "form": "respsol",
      "id": 539
    },
    {
      "price": 0.24,
      "strength": "150 mg",
      "name": "Irbesartan",
      "form": "tab-cap",
      "id": 540
    },
    {
      "price": 1.4261,
      "strength": "50 mg/ml",
      "name": "Iron Dextran",
      "form": "ampoule",
      "id": 541
    },
    {
      "price": 0.2182,
      "strength": "",
      "name": "Isoflurane",
      "form": "liquid",
      "id": 542
    },
    {
      "price": 0.0139,
      "strength": "100 mg",
      "name": "Isoniazid",
      "form": "tab-cap",
      "id": 543
    },
    {
      "price": 0.0319,
      "strength": "50 mg/5 ml",
      "name": "Isoniazid",
      "form": "elixir",
      "id": 544
    },
    {
      "price": 0.0472,
      "strength": "300 mg",
      "name": "Isoniazid",
      "form": "tab-cap",
      "id": 545
    },
    {
      "price": 0.0093,
      "strength": "100 mg",
      "name": "Isoniazid",
      "form": "tab-cap",
      "id": 546
    },
    {
      "price": 0.0263,
      "strength": "10 mg",
      "name": "Isosorbide Dinitrate",
      "form": "tab-cap",
      "id": 547
    },
    {
      "price": 0.0407,
      "strength": "5 mg",
      "name": "Isosorbide Dinitrate",
      "form": "tab-cap",
      "id": 548
    },
    {
      "price": 0.0707,
      "strength": "20 mg",
      "name": "Isosorbide Dinitrate",
      "form": "tab-cap",
      "id": 549
    },
    {
      "price": 0.0771,
      "strength": "5 mg",
      "name": "Isosorbide Dinitrate",
      "form": "tab-cap",
      "id": 550
    },
    {
      "price": 0.1769,
      "strength": "20 mg",
      "name": "Isosorbide Mononitrate",
      "form": "tab-cap",
      "id": 551
    },
    {
      "price": 0.1606,
      "strength": "100 mg",
      "name": "Itraconazole",
      "form": "tab-cap",
      "id": 552
    },
    {
      "price": 3,
      "strength": "",
      "name": "IUD (Copper)",
      "form": "iud",
      "id": 553
    },
    {
      "price": 122.46,
      "strength": "52 mg",
      "name": "IUD (Levonorgestrel)",
      "form": "iud",
      "id": 554
    },
    {
      "price": 1.1851,
      "strength": "1 g",
      "name": "Kanamycin Sulfate",
      "form": "vial",
      "id": 555
    },
    {
      "price": 0.1654,
      "strength": "50 mg/ml",
      "name": "Ketamine",
      "form": "vial",
      "id": 556
    },
    {
      "price": 0.2206,
      "strength": "10 mg/ml",
      "name": "Ketamine",
      "form": "vial",
      "id": 557
    },
    {
      "price": 0.0354,
      "strength": "2%",
      "name": "Ketoconazole",
      "form": "cream",
      "id": 558
    },
    {
      "price": 0.0421,
      "strength": "200 mg",
      "name": "Ketoconazole",
      "form": "tab-cap",
      "id": 559
    },
    {
      "price": 0.117,
      "strength": "5 mg/ml",
      "name": "Labetalol",
      "form": "ampoule",
      "id": 560
    },
    {
      "price": 0.0118,
      "strength": "3.35 g/5 ml",
      "name": "Lactulose",
      "form": "solution",
      "id": 561
    },
    {
      "price": 0.0099,
      "strength": "10 mg/ml",
      "name": "Lamivudine",
      "form": "solution",
      "id": 562
    },
    {
      "price": 0.0569,
      "strength": "150 mg",
      "name": "Lamivudine",
      "form": "tab-cap",
      "id": 563
    },
    {
      "price": 0.0587,
      "strength": "300 mg",
      "name": "Lamivudine",
      "form": "tab-cap",
      "id": 564
    },
    {
      "price": 0.1811,
      "strength": "150/300+600m",
      "name": "Lamivudine/Zidovudine + Efavirenz",
      "form": "tab-cap",
      "id": 565
    },
    {
      "price": 0.1446,
      "strength": "150/300+200m",
      "name": "Lamivudine/Zidovudine + Nevirapine",
      "form": "tab-cap",
      "id": 566
    },
    {
      "price": 0.3894,
      "strength": "",
      "name": "Lamivudine/Zidovudine+Abacavir",
      "form": "tab-cap",
      "id": 567
    },
    {
      "price": 0.0332,
      "strength": "30 mg+6 mg",
      "name": "Lamivudine+Stavudine",
      "form": "tab-cap",
      "id": 568
    },
    {
      "price": 0.0577,
      "strength": "60+12 mg",
      "name": "Lamivudine+Stavudine",
      "form": "tab-cap",
      "id": 569
    },
    {
      "price": 0.073,
      "strength": "150 mg+30 mg",
      "name": "Lamivudine+Stavudine",
      "form": "tab-cap",
      "id": 570
    },
    {
      "price": 0.1584,
      "strength": "150 mg+40 mg",
      "name": "Lamivudine+Stavudine",
      "form": "tab-cap",
      "id": 571
    },
    {
      "price": 0.1533,
      "strength": "150+30+200mg",
      "name": "Lamivudine+Stavudine+Nevirapine",
      "form": "tab-cap",
      "id": 572
    },
    {
      "price": 0.0399,
      "strength": "30+6+50 mg",
      "name": "Lamivudine+Stavudine+Nevirapine",
      "form": "tab-cap",
      "id": 573
    },
    {
      "price": 0.0752,
      "strength": "60+12+100 mg",
      "name": "Lamivudine+Stavudine+Nevirapine",
      "form": "tab-cap",
      "id": 574
    },
    {
      "price": 0.2949,
      "strength": "150+40+200mg",
      "name": "Lamivudine+Stavudine+Nevirapine",
      "form": "tab-cap",
      "id": 575
    },
    {
      "price": 0.1759,
      "strength": "300+300 mg",
      "name": "Lamivudine+Tenofovir Df",
      "form": "tab-cap",
      "id": 576
    },
    {
      "price": 0.0471,
      "strength": "30 mg+60 mg",
      "name": "Lamivudine+Zidovudine",
      "form": "tab-cap",
      "id": 577
    },
    {
      "price": 0.1412,
      "strength": "150mg+300mg",
      "name": "Lamivudine+Zidovudine",
      "form": "tab-cap",
      "id": 578
    },
    {
      "price": 0.0362,
      "strength": "30+60 mg",
      "name": "Lamivudine+Zidovudine",
      "form": "tab-cap",
      "id": 579
    },
    {
      "price": 0.4486,
      "strength": "",
      "name": "Lamivudine+Zidovudine+Abacavir",
      "form": "tab-cap",
      "id": 580
    },
    {
      "price": 0.3157,
      "strength": "3TC+AZT+NVP",
      "name": "Lamivudine+Zidovudine+Nevirapine",
      "form": "tab-cap",
      "id": 581
    },
    {
      "price": 0.0643,
      "strength": "30+60+50 mg",
      "name": "Lamivudine+Zidovudine+Nevirapine",
      "form": "tab-cap",
      "id": 582
    },
    {
      "price": 0.0653,
      "strength": "30+60+50 mg",
      "name": "Lamivudine+Zidovudine+Nevirapine",
      "form": "tab-cap",
      "id": 583
    },
    {
      "price": 0.0096,
      "strength": "25 mg",
      "name": "Lamotrigine",
      "form": "tab-cap",
      "id": 584
    },
    {
      "price": 0.0385,
      "strength": "100 mg",
      "name": "Lamotrigine",
      "form": "tab-cap",
      "id": 585
    },
    {
      "price": 0.1462,
      "strength": "50 mg",
      "name": "Lamotrigine",
      "form": "tab-cap",
      "id": 586
    },
    {
      "price": 0.0171,
      "strength": "",
      "name": "Lancet, Blood",
      "form": "each",
      "id": 587
    },
    {
      "price": 0.8965,
      "strength": "0.005%",
      "name": "Latanoprost",
      "form": "opht drop",
      "id": 588
    },
    {
      "price": 3.53,
      "strength": "2.5 mg",
      "name": "Letrozole",
      "form": "tab-cap",
      "id": 589
    },
    {
      "price": 0.0106,
      "strength": "50 mg",
      "name": "Levamisole",
      "form": "tab-cap",
      "id": 590
    },
    {
      "price": 0.0157,
      "strength": "40 mg",
      "name": "Levamisole",
      "form": "tab-cap",
      "id": 591
    },
    {
      "price": 0.078,
      "strength": "100+25 mg",
      "name": "Levodopa+Carbidopa",
      "form": "tab-cap",
      "id": 592
    },
    {
      "price": 0.1,
      "strength": "250+25 mg",
      "name": "Levodopa+Carbidopa",
      "form": "tab-cap",
      "id": 593
    },
    {
      "price": 0.0087,
      "strength": "5 mg/ml",
      "name": "Levofloxacin",
      "form": "vial",
      "id": 594
    },
    {
      "price": 0.0867,
      "strength": "500 mg",
      "name": "Levofloxacin",
      "form": "tab-cap",
      "id": 595
    },
    {
      "price": 0.2357,
      "strength": "250 mg",
      "name": "Levofloxacin",
      "form": "tab-cap",
      "id": 596
    },
    {
      "price": 0.8062,
      "strength": "0.03 mg",
      "name": "Levonorgestrel",
      "form": "tab-cap",
      "id": 597
    },
    {
      "price": 1.6485,
      "strength": "1.5 mg",
      "name": "Levonorgestrel",
      "form": "tab-cap",
      "id": 598
    },
    {
      "price": 4.792,
      "strength": "75 mg/rod",
      "name": "Levonorgestrel",
      "form": "rod",
      "id": 599
    },
    {
      "price": 0.2341,
      "strength": "0.75 mg",
      "name": "Levonorgestrel",
      "form": "tab-cap",
      "id": 600
    },
    {
      "price": 0.0138,
      "strength": "50 mcg",
      "name": "Levothyroxine",
      "form": "tab-cap",
      "id": 601
    },
    {
      "price": 0.0194,
      "strength": "100 mcg",
      "name": "Levothyroxine",
      "form": "tab-cap",
      "id": 602
    },
    {
      "price": 0.02,
      "strength": "200 mcg",
      "name": "Levothyroxine",
      "form": "tab-cap",
      "id": 603
    },
    {
      "price": 0.0272,
      "strength": "2%",
      "name": "Lidocaine HCl",
      "form": "vial",
      "id": 604
    },
    {
      "price": 0.0288,
      "strength": "1%",
      "name": "Lidocaine HCl",
      "form": "vial",
      "id": 605
    },
    {
      "price": 0.1639,
      "strength": "2%",
      "name": "Lidocaine HCl",
      "form": "gel",
      "id": 606
    },
    {
      "price": 0.2334,
      "strength": "2%+1:80000",
      "name": "Lidocaine HCl + Epinephrine Dental",
      "form": "crtdgs",
      "id": 607
    },
    {
      "price": 3.68,
      "strength": "",
      "name": "Lidocaine HCl 5% (In Dextrose 7.5%)",
      "form": "vial",
      "id": 608
    },
    {
      "price": 0.0424,
      "strength": "2%+1:100000",
      "name": "Lidocaine+Epinephrine",
      "form": "vial",
      "id": 609
    },
    {
      "price": 0.0973,
      "strength": "1%+1:100000",
      "name": "Lidocaine+Epinephrine",
      "form": "vial",
      "id": 610
    },
    {
      "price": 0.1035,
      "strength": "2 mg/ml",
      "name": "Linezolid",
      "form": "vial",
      "id": 611
    },
    {
      "price": 6.9,
      "strength": "600 mg",
      "name": "Linezolid",
      "form": "tab-cap",
      "id": 612
    },
    {
      "price": 0.0353,
      "strength": "10 mg",
      "name": "Lisinopril",
      "form": "tab-cap",
      "id": 613
    },
    {
      "price": 0.06,
      "strength": "5 mg",
      "name": "Lisinopril",
      "form": "tab-cap",
      "id": 614
    },
    {
      "price": 0.0707,
      "strength": "20 mg",
      "name": "Lisinopril",
      "form": "tab-cap",
      "id": 615
    },
    {
      "price": 0.041,
      "strength": "300 mg",
      "name": "Lithium Carbonate",
      "form": "tab-cap",
      "id": 616
    },
    {
      "price": 0.0275,
      "strength": "2 mg",
      "name": "Loperamide HCl",
      "form": "tab-cap",
      "id": 617
    },
    {
      "price": 0.08,
      "strength": "100 mg+25 mg",
      "name": "Lopinavir+Ritonavir",
      "form": "tab-cap",
      "id": 618
    },
    {
      "price": 0.0846,
      "strength": "80+20 mg/ml",
      "name": "Lopinavir+Ritonavir",
      "form": "solution",
      "id": 619
    },
    {
      "price": 0.207,
      "strength": "200 mg+50 mg",
      "name": "Lopinavir+Ritonavir",
      "form": "tab-cap",
      "id": 620
    },
    {
      "price": 0.2398,
      "strength": "133.3+33.3mg",
      "name": "Lopinavir+Ritonavir",
      "form": "tab-cap",
      "id": 621
    },
    {
      "price": 0.0073,
      "strength": "5 mg/5 ml",
      "name": "Loratadine",
      "form": "syrup",
      "id": 622
    },
    {
      "price": 0.011,
      "strength": "10 mg",
      "name": "Loratadine",
      "form": "tab-cap",
      "id": 623
    },
    {
      "price": 0.0085,
      "strength": "2 mg",
      "name": "Lorazepam",
      "form": "tab-cap",
      "id": 624
    },
    {
      "price": 0.0815,
      "strength": "1 mg",
      "name": "Lorazepam",
      "form": "tab-cap",
      "id": 625
    },
    {
      "price": 0.0202,
      "strength": "50 mg",
      "name": "Losartan",
      "form": "tab-cap",
      "id": 626
    },
    {
      "price": 0.0156,
      "strength": "20 mg",
      "name": "Lovastatin",
      "form": "tab-cap",
      "id": 627
    },
    {
      "price": 0.0145,
      "strength": "",
      "name": "Lubricating Jelly",
      "form": "ointment",
      "id": 628
    },
    {
      "price": 0.4305,
      "strength": "0.5 mg",
      "name": "Lynestrenol",
      "form": "tab-cap",
      "id": 629
    },
    {
      "price": 0.0015,
      "strength": "",
      "name": "Magnesium Sulfate",
      "form": "powder",
      "id": 630
    },
    {
      "price": 0.0186,
      "strength": "20%",
      "name": "Magnesium Sulfate",
      "form": "vial",
      "id": 631
    },
    {
      "price": 0.291,
      "strength": "50%",
      "name": "Magnesium Sulfate",
      "form": "vial",
      "id": 632
    },
    {
      "price": 0.0053,
      "strength": "",
      "name": "Magnesium Trisilicate Compound",
      "form": "tab-cap",
      "id": 633
    },
    {
      "price": 0.0057,
      "strength": "20%",
      "name": "Mannitol",
      "form": "solution",
      "id": 634
    },
    {
      "price": 0.0103,
      "strength": "100 mg/5 ml",
      "name": "Mebendazole",
      "form": "suspen",
      "id": 635
    },
    {
      "price": 0.0117,
      "strength": "100 mg",
      "name": "Mebendazole",
      "form": "tab-cap",
      "id": 636
    },
    {
      "price": 0.2355,
      "strength": "500 mg",
      "name": "Mebendazole",
      "form": "tab-cap",
      "id": 637
    },
    {
      "price": 0.0067,
      "strength": "100 mg",
      "name": "Mebendazole",
      "form": "tab-cap",
      "id": 638
    },
    {
      "price": 0.0334,
      "strength": "500 mg",
      "name": "Mebendazole",
      "form": "tab-cap",
      "id": 639
    },
    {
      "price": 0.0888,
      "strength": "5 mg",
      "name": "Medroxyprogesterone",
      "form": "tab-cap",
      "id": 640
    },
    {
      "price": 0.1997,
      "strength": "10 mg",
      "name": "Medroxyprogesterone",
      "form": "tab-cap",
      "id": 641
    },
    {
      "price": 0.7912,
      "strength": "150 mg/ml",
      "name": "Medroxyprogesterone Acetate",
      "form": "vial",
      "id": 642
    },
    {
      "price": 0.0184,
      "strength": "500 mg",
      "name": "Mefenamic Acid",
      "form": "tab-cap",
      "id": 643
    },
    {
      "price": 0.023,
      "strength": "250 mg",
      "name": "Mefenamic Acid",
      "form": "tab-cap",
      "id": 644
    },
    {
      "price": 0.899,
      "strength": "250 mg",
      "name": "Mefloquine",
      "form": "tab-cap",
      "id": 645
    },
    {
      "price": 0.864,
      "strength": "30-45%",
      "name": "Meglumine Antimonate",
      "form": "ampoule",
      "id": 646
    },
    {
      "price": 0.0146,
      "strength": "7.5 mg",
      "name": "Meloxicam",
      "form": "tab-cap",
      "id": 647
    },
    {
      "price": 1.7313,
      "strength": "2 mg",
      "name": "Melphalan",
      "form": "tab-cap",
      "id": 648
    },
    {
      "price": 47.1707,
      "strength": "50 mg",
      "name": "Melphalan",
      "form": "vial",
      "id": 649
    },
    {
      "price": 1.943,
      "strength": "50 mg",
      "name": "Mercaptopurine",
      "form": "tab-cap",
      "id": 650
    },
    {
      "price": 6.7545,
      "strength": "500 mg",
      "name": "Meropenem",
      "form": "vial",
      "id": 651
    },
    {
      "price": 9.255,
      "strength": "1 g",
      "name": "Meropenem",
      "form": "vial",
      "id": 652
    },
    {
      "price": 0.48,
      "strength": "100 mg/ml",
      "name": "Mesna",
      "form": "ampoule",
      "id": 653
    },
    {
      "price": 3.4976,
      "strength": "400 mg",
      "name": "Mesna",
      "form": "ampoule",
      "id": 654
    },
    {
      "price": 0.014,
      "strength": "850 mg",
      "name": "Metformin HCl",
      "form": "tab-cap",
      "id": 655
    },
    {
      "price": 0.0262,
      "strength": "500 mg",
      "name": "Metformin HCl",
      "form": "tab-cap",
      "id": 656
    },
    {
      "price": 5,
      "strength": "5 mg",
      "name": "Methadone",
      "form": "tab-cap",
      "id": 657
    },
    {
      "price": 0.069,
      "strength": "2.5 mg",
      "name": "Methotrexate Sodium",
      "form": "tab-cap",
      "id": 658
    },
    {
      "price": 2.9775,
      "strength": "25 mg/ml",
      "name": "Methotrexate Sodium",
      "form": "vial",
      "id": 659
    },
    {
      "price": 0.0436,
      "strength": "250 mg",
      "name": "Methyldopa",
      "form": "tab-cap",
      "id": 660
    },
    {
      "price": 0.12,
      "strength": "500 mg",
      "name": "Methyldopa",
      "form": "tab-cap",
      "id": 661
    },
    {
      "price": 0.186,
      "strength": "0.2 mg/ml",
      "name": "Methylergometrine Maleate",
      "form": "ampoule",
      "id": 662
    },
    {
      "price": 0.0543,
      "strength": "10 mg",
      "name": "Methylphenidate Hydrochloride",
      "form": "tab-cap",
      "id": 663
    },
    {
      "price": 5.8527,
      "strength": "500 mg",
      "name": "Methylprednisolone",
      "form": "vial",
      "id": 664
    },
    {
      "price": 12.6473,
      "strength": "1 g",
      "name": "Methylprednisolone",
      "form": "vial",
      "id": 665
    },
    {
      "price": 1.559,
      "strength": "40 mg",
      "name": "Methylprednisolone Acetate",
      "form": "vial",
      "id": 666
    },
    {
      "price": 0.0083,
      "strength": "5 mg/5 ml",
      "name": "Metoclopramide HCl",
      "form": "syrup",
      "id": 667
    },
    {
      "price": 0.0174,
      "strength": "10 mg",
      "name": "Metoclopramide HCl",
      "form": "tab-cap",
      "id": 668
    },
    {
      "price": 0.0497,
      "strength": "5 mg/ml",
      "name": "Metoclopramide HCl",
      "form": "ampoule",
      "id": 669
    },
    {
      "price": 0.0982,
      "strength": "4 mg/ml",
      "name": "Metoclopramide HCl",
      "form": "drops",
      "id": 670
    },
    {
      "price": 0.02,
      "strength": "100 mg",
      "name": "Metoprolol",
      "form": "tab-cap",
      "id": 671
    },
    {
      "price": 0.0045,
      "strength": "5 mg/ml",
      "name": "Metronidazole",
      "form": "vial",
      "id": 672
    },
    {
      "price": 0.0053,
      "strength": "200-250 mg",
      "name": "Metronidazole",
      "form": "tab-cap",
      "id": 673
    },
    {
      "price": 0.0069,
      "strength": "200 mg/5 ml",
      "name": "Metronidazole",
      "form": "syrup",
      "id": 674
    },
    {
      "price": 0.017,
      "strength": "400-500 mg",
      "name": "Metronidazole",
      "form": "tab-cap",
      "id": 675
    },
    {
      "price": 0.2054,
      "strength": "500 mg",
      "name": "Metronidazole",
      "form": "suppos",
      "id": 676
    },
    {
      "price": 0.6624,
      "strength": "1 g",
      "name": "Metronidazole",
      "form": "suppos",
      "id": 677
    },
    {
      "price": 0.0069,
      "strength": "125 mg/5 ml",
      "name": "Metronidazole",
      "form": "syrup",
      "id": 678
    },
    {
      "price": 0.0344,
      "strength": "500 mg",
      "name": "Metronidazole",
      "form": "pessary",
      "id": 679
    },
    {
      "price": 0.0991,
      "strength": "25 mg/ml",
      "name": "Miconazole",
      "form": "oral gel",
      "id": 680
    },
    {
      "price": 0.0077,
      "strength": "2%",
      "name": "Miconazole Nitrate",
      "form": "cream",
      "id": 681
    },
    {
      "price": 0.2491,
      "strength": "10 mg",
      "name": "Miconazole Nitrate",
      "form": "tab-cap",
      "id": 682
    },
    {
      "price": 0.0614,
      "strength": "1 mg/ml",
      "name": "Midazolam",
      "form": "ampoule",
      "id": 683
    },
    {
      "price": 0.22,
      "strength": "5 mg/ml",
      "name": "Midazolam",
      "form": "ampoule",
      "id": 684
    },
    {
      "price": 0.2922,
      "strength": "15 mg",
      "name": "Midazolam",
      "form": "tab-cap",
      "id": 685
    },
    {
      "price": 0.4696,
      "strength": "10 mg",
      "name": "Minoxidil",
      "form": "tab-cap",
      "id": 686
    },
    {
      "price": 0.2269,
      "strength": "200 mcg",
      "name": "Misoprostol",
      "form": "tab-cap",
      "id": 687
    },
    {
      "price": 0.2046,
      "strength": "100 mcg",
      "name": "Misoprostol",
      "form": "tab-cap",
      "id": 688
    },
    {
      "price": 21.5,
      "strength": "5 mg",
      "name": "Mitomycin",
      "form": "vial",
      "id": 689
    },
    {
      "price": 0.1513,
      "strength": "10 mg",
      "name": "Morphine",
      "form": "tab-cap",
      "id": 690
    },
    {
      "price": 0.44,
      "strength": "30 mg",
      "name": "Morphine Sulfate",
      "form": "tab-cap",
      "id": 691
    },
    {
      "price": 0.5103,
      "strength": "60 mg",
      "name": "Morphine Sulfate",
      "form": "tab-cap",
      "id": 692
    },
    {
      "price": 0.618,
      "strength": "15 mg/ml",
      "name": "Morphine Sulfate",
      "form": "ampoule",
      "id": 693
    },
    {
      "price": 0.8054,
      "strength": "100 mg",
      "name": "Morphine Sulfate",
      "form": "tab-cap",
      "id": 694
    },
    {
      "price": 1.063,
      "strength": "10 mg/ml",
      "name": "Morphine Sulfate",
      "form": "ampoule",
      "id": 695
    },
    {
      "price": 0.9302,
      "strength": "10 mg",
      "name": "Morphine Sulfate",
      "form": "tab-cap",
      "id": 696
    },
    {
      "price": 6.1654,
      "strength": "",
      "name": "Mosquito Net, 1-Person, LLIN",
      "form": "net",
      "id": 697
    },
    {
      "price": 5.394,
      "strength": "",
      "name": "Mosquito Net, 2-Person, Impregnated",
      "form": "net",
      "id": 698
    },
    {
      "price": 3.4036,
      "strength": "",
      "name": "Mosquito Net, 2-Person, LLIN",
      "form": "net",
      "id": 699
    },
    {
      "price": 5.343,
      "strength": "",
      "name": "Mosquito Net, Family, Impregnated",
      "form": "net",
      "id": 700
    },
    {
      "price": 6.9,
      "strength": "",
      "name": "Mosquito Net, Family, LLIN",
      "form": "net",
      "id": 701
    },
    {
      "price": 1.14,
      "strength": "",
      "name": "Mosquito Net, Family, Non-Impreg.",
      "form": "net",
      "id": 702
    },
    {
      "price": 4.485,
      "strength": "",
      "name": "Mosquito Net, Impregnated",
      "form": "net",
      "id": 703
    },
    {
      "price": 5.46,
      "strength": "",
      "name": "Mosquito Net, Impregnated",
      "form": "net",
      "id": 704
    },
    {
      "price": 5.0879,
      "strength": "",
      "name": "Mosquito Net, LLIN",
      "form": "net",
      "id": 705
    },
    {
      "price": 1.6423,
      "strength": "400 mg",
      "name": "Moxifloxacin",
      "form": "tab-cap",
      "id": 706
    },
    {
      "price": 0.1448,
      "strength": "2%",
      "name": "Mupirocin",
      "form": "cream",
      "id": 707
    },
    {
      "price": 0.1673,
      "strength": "2%",
      "name": "Mupirocin",
      "form": "ointment",
      "id": 708
    },
    {
      "price": 0.3521,
      "strength": "250 mg",
      "name": "Mycophenolate Mofetil",
      "form": "tab-cap",
      "id": 709
    },
    {
      "price": 0.98,
      "strength": "10 mg/ml",
      "name": "Nalbufine Chlorhydrate",
      "form": "vial",
      "id": 710
    },
    {
      "price": 0.1215,
      "strength": "500 mg",
      "name": "Nalidixic Acid",
      "form": "tab-cap",
      "id": 711
    },
    {
      "price": 0.1903,
      "strength": "0.02 mg/ml",
      "name": "Naloxone HCl",
      "form": "vial",
      "id": 712
    },
    {
      "price": 0.7039,
      "strength": "0.4 mg/ml",
      "name": "Naloxone HCl",
      "form": "ampoule",
      "id": 713
    },
    {
      "price": 0.0557,
      "strength": "250 mg",
      "name": "Naproxen",
      "form": "tab-cap",
      "id": 714
    },
    {
      "price": 0.0873,
      "strength": "500 mg",
      "name": "Naproxen",
      "form": "tab-cap",
      "id": 715
    },
    {
      "price": 4.8903,
      "strength": "50 mg/ml",
      "name": "Natamycin",
      "form": "opht drop",
      "id": 716
    },
    {
      "price": 0.8,
      "strength": "250 mg",
      "name": "Nelfinavir",
      "form": "tab-cap",
      "id": 717
    },
    {
      "price": 0.2956,
      "strength": "50 mg/g",
      "name": "Nelfinavir",
      "form": "powder",
      "id": 718
    },
    {
      "price": 0.0414,
      "strength": "5mg+500IU/g",
      "name": "Neomycin+Bacitracin",
      "form": "ointment",
      "id": 719
    },
    {
      "price": 0.1978,
      "strength": "0.5 mg/ml",
      "name": "Neostigmine Methylsulfate",
      "form": "ampoule",
      "id": 720
    },
    {
      "price": 1.3942,
      "strength": "2.5 mg/ml",
      "name": "Neostigmine Methylsulfate",
      "form": "ampoule",
      "id": 721
    },
    {
      "price": 0.0054,
      "strength": "50 mg/5 ml",
      "name": "Nevirapine",
      "form": "suspen",
      "id": 722
    },
    {
      "price": 0.0487,
      "strength": "200 mg",
      "name": "Nevirapine",
      "form": "tab-cap",
      "id": 723
    },
    {
      "price": 0.029,
      "strength": "500 mg",
      "name": "Niclosamide",
      "form": "tab-cap",
      "id": 724
    },
    {
      "price": 0.0607,
      "strength": "500 mg",
      "name": "Niclosamide",
      "form": "tab-cap",
      "id": 725
    },
    {
      "price": 0.0294,
      "strength": "10 mg",
      "name": "Nifedipine",
      "form": "tab-cap",
      "id": 726
    },
    {
      "price": 0.0297,
      "strength": "20 mg",
      "name": "Nifedipine",
      "form": "tab-cap",
      "id": 727
    },
    {
      "price": 0.0387,
      "strength": "20 mg",
      "name": "Nifedipine",
      "form": "tab-cap",
      "id": 728
    },
    {
      "price": 0.0629,
      "strength": "30 mg",
      "name": "Nifedipine",
      "form": "tab-cap",
      "id": 729
    },
    {
      "price": 0.0142,
      "strength": "10 mg",
      "name": "Nifedipine",
      "form": "tab-cap",
      "id": 730
    },
    {
      "price": 0.0285,
      "strength": "30 mg",
      "name": "Nimodipine",
      "form": "tab-cap",
      "id": 731
    },
    {
      "price": 0.0084,
      "strength": "25 mg/5 ml",
      "name": "Nitrofurantoin",
      "form": "suspen",
      "id": 732
    },
    {
      "price": 0.0285,
      "strength": "50 mg",
      "name": "Nitrofurantoin",
      "form": "tab-cap",
      "id": 733
    },
    {
      "price": 0.072,
      "strength": "100 mg",
      "name": "Nitrofurantoin",
      "form": "tab-cap",
      "id": 734
    },
    {
      "price": 0.0391,
      "strength": "0.2%",
      "name": "Nitrofurazone",
      "form": "ointment",
      "id": 735
    },
    {
      "price": 0.2093,
      "strength": "1 mg/ml",
      "name": "Norepinephrine",
      "form": "vial",
      "id": 736
    },
    {
      "price": 0.1996,
      "strength": "5 mg",
      "name": "Norethisterone",
      "form": "tab-cap",
      "id": 737
    },
    {
      "price": 4.5131,
      "strength": "200 mg/ml",
      "name": "Norethisterone",
      "form": "ampoule",
      "id": 738
    },
    {
      "price": 4.39,
      "strength": "50mg+5mg/ml",
      "name": "Norethisterone+Estradiol Cypionate",
      "form": "vial",
      "id": 739
    },
    {
      "price": 0.0261,
      "strength": "400 mg",
      "name": "Norfloxacin",
      "form": "tab-cap",
      "id": 740
    },
    {
      "price": 0.0294,
      "strength": "15 mg",
      "name": "Noscapine",
      "form": "tab-cap",
      "id": 741
    },
    {
      "price": 0.0346,
      "strength": "100000 IU/ml",
      "name": "Nystatin",
      "form": "suspen",
      "id": 742
    },
    {
      "price": 0.0805,
      "strength": "500,000 IU",
      "name": "Nystatin",
      "form": "tab-cap",
      "id": 743
    },
    {
      "price": 0.0992,
      "strength": "100,000 IU/g",
      "name": "Nystatin",
      "form": "ointment",
      "id": 744
    },
    {
      "price": 0.1,
      "strength": "100,000 IU",
      "name": "Nystatin",
      "form": "pessary",
      "id": 745
    },
    {
      "price": 0.0231,
      "strength": "100,000 IU/g",
      "name": "Nystatin",
      "form": "cream",
      "id": 746
    },
    {
      "price": 0.0319,
      "strength": "100,000 IU",
      "name": "Nystatin",
      "form": "tab-cap",
      "id": 747
    },
    {
      "price": 9.769,
      "strength": "0.1 mg/ml",
      "name": "Octreotide",
      "form": "ampoule",
      "id": 748
    },
    {
      "price": 0.309,
      "strength": "0.3%",
      "name": "Ofloxacin",
      "form": "opht drop",
      "id": 749
    },
    {
      "price": 0.058,
      "strength": "200 mg",
      "name": "Ofloxacin",
      "form": "tab-cap",
      "id": 750
    },
    {
      "price": 0.109,
      "strength": "400 mg",
      "name": "Ofloxacin",
      "form": "tab-cap",
      "id": 751
    },
    {
      "price": 0.12,
      "strength": "5 mg",
      "name": "Olanzapine",
      "form": "tab-cap",
      "id": 752
    },
    {
      "price": 0.43,
      "strength": "10 mg",
      "name": "Olanzapine",
      "form": "tab-cap",
      "id": 753
    },
    {
      "price": 0.0191,
      "strength": "20 mg",
      "name": "Omeprazole",
      "form": "tab-cap",
      "id": 754
    },
    {
      "price": 0.1249,
      "strength": "10 mg",
      "name": "Omeprazole",
      "form": "tab-cap",
      "id": 755
    },
    {
      "price": 0.4534,
      "strength": "40 mg",
      "name": "Omeprazole",
      "form": "vial",
      "id": 756
    },
    {
      "price": 0.1771,
      "strength": "2 mg/ml",
      "name": "Ondansetron",
      "form": "ampoule",
      "id": 757
    },
    {
      "price": 0.2537,
      "strength": "4 mg",
      "name": "Ondansetron",
      "form": "tab-cap",
      "id": 758
    },
    {
      "price": 1.4247,
      "strength": "8 mg",
      "name": "Ondansetron",
      "form": "tab-cap",
      "id": 759
    },
    {
      "price": 0.05,
      "strength": "1 PKT/1 l",
      "name": "Oral Rehydration Salts",
      "form": "powder",
      "id": 760
    },
    {
      "price": 0.0532,
      "strength": "1 pkt/500 ml",
      "name": "Oral Rehydration Salts",
      "form": "powder",
      "id": 761
    },
    {
      "price": 0.45,
      "strength": "2 ORS+20 mg",
      "name": "ORS+Zinc Co-Pack",
      "form": "each",
      "id": 762
    },
    {
      "price": 0.58,
      "strength": "1 ORS+20 mg",
      "name": "ORS+Zinc Co-Pack",
      "form": "each",
      "id": 763
    },
    {
      "price": 0.8,
      "strength": "2 ORS+20 mg",
      "name": "ORS+Zinc Co-Pack",
      "form": "each",
      "id": 764
    },
    {
      "price": 0.504,
      "strength": "4 ORS+20 mg",
      "name": "ORS+Zinc Co-Pack",
      "form": "each",
      "id": 765
    },
    {
      "price": 2.133,
      "strength": "75 mg",
      "name": "Oseltamivir",
      "form": "tab-cap",
      "id": 766
    },
    {
      "price": 0.2049,
      "strength": "500 mg",
      "name": "Oxacillin",
      "form": "ampoule",
      "id": 767
    },
    {
      "price": 0.6472,
      "strength": "1 g",
      "name": "Oxacillin",
      "form": "vial",
      "id": 768
    },
    {
      "price": 0.198,
      "strength": "1 mcg",
      "name": "Oxacillin",
      "form": "disc",
      "id": 769
    },
    {
      "price": 37.5858,
      "strength": "50 mg",
      "name": "Oxaliplatin",
      "form": "vial",
      "id": 770
    },
    {
      "price": 59.0858,
      "strength": "100 mg",
      "name": "Oxaliplatin",
      "form": "vial",
      "id": 771
    },
    {
      "price": 0.3953,
      "strength": "0.4%",
      "name": "Oxybuprocaine",
      "form": "opht drop",
      "id": 772
    },
    {
      "price": 0.0819,
      "strength": "5 mg",
      "name": "Oxybutynin",
      "form": "tab-cap",
      "id": 773
    },
    {
      "price": 0.1252,
      "strength": "10 IU",
      "name": "Oxytocin",
      "form": "ampoule",
      "id": 774
    },
    {
      "price": 0.4946,
      "strength": "5 IU",
      "name": "Oxytocin",
      "form": "ampoule",
      "id": 775
    },
    {
      "price": 0.9491,
      "strength": "6 mg/ml",
      "name": "Paclitaxel",
      "form": "vial",
      "id": 776
    },
    {
      "price": 10.2734,
      "strength": "100 mg",
      "name": "Paclitaxel",
      "form": "vial",
      "id": 777
    },
    {
      "price": 2.7516,
      "strength": "4 g",
      "name": "P-Aminosalicylic Acid (PAS)",
      "form": "powder",
      "id": 778
    },
    {
      "price": 0.1249,
      "strength": "60% w/w",
      "name": "P-Aminosalicylic Acid (PAS)",
      "form": "granules",
      "id": 779
    },
    {
      "price": 1.15,
      "strength": "9.2 g",
      "name": "P-Aminosalicylic Acid (PAS)",
      "form": "granules",
      "id": 780
    },
    {
      "price": 1.37,
      "strength": "5.52 g",
      "name": "P-Aminosalicylic Acid (PAS)",
      "form": "powder",
      "id": 781
    },
    {
      "price": 0.6727,
      "strength": "2 mg/ml",
      "name": "Pancuronium Bromide",
      "form": "ampoule",
      "id": 782
    },
    {
      "price": 0.0042,
      "strength": "120 mg/5 ml",
      "name": "Paracetamol",
      "form": "suspen",
      "id": 783
    },
    {
      "price": 0.0051,
      "strength": "500 mg",
      "name": "Paracetamol",
      "form": "tab-cap",
      "id": 784
    },
    {
      "price": 0.0231,
      "strength": "100 mg/ml",
      "name": "Paracetamol",
      "form": "suspen",
      "id": 785
    },
    {
      "price": 0.2103,
      "strength": "125 mg",
      "name": "Paracetamol",
      "form": "suppos",
      "id": 786
    },
    {
      "price": 0.23,
      "strength": "250 mg",
      "name": "Paracetamol",
      "form": "suppos",
      "id": 787
    },
    {
      "price": 2.132,
      "strength": "500 mg",
      "name": "Paracetamol",
      "form": "suppos",
      "id": 788
    },
    {
      "price": 0.002,
      "strength": "100 mg",
      "name": "Paracetamol",
      "form": "tab-cap",
      "id": 789
    },
    {
      "price": 0.07,
      "strength": "100 mg",
      "name": "Paracetamol",
      "form": "suppos",
      "id": 790
    },
    {
      "price": 0.0089,
      "strength": "",
      "name": "Paraffin, Liquid",
      "form": "liquid",
      "id": 791
    },
    {
      "price": 0.0029,
      "strength": "",
      "name": "Paraffin, White Soft",
      "form": "ointment",
      "id": 792
    },
    {
      "price": 0.4381,
      "strength": "250 mg",
      "name": "Penicillamine",
      "form": "tab-cap",
      "id": 793
    },
    {
      "price": 0.2155,
      "strength": "1.2M IU",
      "name": "Penicillin, Benzathine Benzyl",
      "form": "powder",
      "id": 794
    },
    {
      "price": 0.276,
      "strength": "2.4M IU",
      "name": "Penicillin, Benzathine Benzyl",
      "form": "powder",
      "id": 795
    },
    {
      "price": 0.3238,
      "strength": "1M IU",
      "name": "Penicillin, Benzyl",
      "form": "powder",
      "id": 796
    },
    {
      "price": 0.68,
      "strength": "5M IU",
      "name": "Penicillin, Benzyl",
      "form": "powder",
      "id": 797
    },
    {
      "price": 0.0069,
      "strength": "125 mg/5 ml",
      "name": "Penicillin, Phenoxymethyl",
      "form": "suspen",
      "id": 798
    },
    {
      "price": 0.0071,
      "strength": "250 mg/5 ml",
      "name": "Penicillin, Phenoxymethyl",
      "form": "syrup",
      "id": 799
    },
    {
      "price": 0.02,
      "strength": "250 mg",
      "name": "Penicillin, Phenoxymethyl",
      "form": "tab-cap",
      "id": 800
    },
    {
      "price": 0.1801,
      "strength": "1M IU",
      "name": "Penicillin, Procaine Benzyl",
      "form": "powder",
      "id": 801
    },
    {
      "price": 0.233,
      "strength": "4M IU",
      "name": "Penicillin, Procaine Benzyl",
      "form": "powder",
      "id": 802
    },
    {
      "price": 0.2164,
      "strength": "3M IU",
      "name": "Penicillin, Procaine Benzyl",
      "form": "powder",
      "id": 803
    },
    {
      "price": 0.2987,
      "strength": "3M IU+1M IU",
      "name": "Penicillin, Procaine+Benzyl",
      "form": "vial",
      "id": 804
    },
    {
      "price": 0.1485,
      "strength": "30 mg/ml",
      "name": "Pentazocine",
      "form": "ampoule",
      "id": 805
    },
    {
      "price": 0.0355,
      "strength": "5%",
      "name": "Permethrin",
      "form": "cream",
      "id": 806
    },
    {
      "price": 0.0275,
      "strength": "1%",
      "name": "Permethrin",
      "form": "lotion",
      "id": 807
    },
    {
      "price": 0.0416,
      "strength": "2.5%",
      "name": "Permethrin",
      "form": "ointment",
      "id": 808
    },
    {
      "price": 0.1631,
      "strength": "10%",
      "name": "Permethrin",
      "form": "solution",
      "id": 809
    },
    {
      "price": 0.2734,
      "strength": "50 mg",
      "name": "Pethidine",
      "form": "tab-cap",
      "id": 810
    },
    {
      "price": 0.2634,
      "strength": "50 mg/ml",
      "name": "Pethidine HCl",
      "form": "ampoule",
      "id": 811
    },
    {
      "price": 0.0043,
      "strength": "20 mg/5 ml",
      "name": "Phenobarbital",
      "form": "elixir",
      "id": 812
    },
    {
      "price": 0.0099,
      "strength": "30 mg",
      "name": "Phenobarbital",
      "form": "tab-cap",
      "id": 813
    },
    {
      "price": 0.02,
      "strength": "100 mg",
      "name": "Phenobarbital",
      "form": "tab-cap",
      "id": 814
    },
    {
      "price": 0.0472,
      "strength": "50-60 mg",
      "name": "Phenobarbital",
      "form": "tab-cap",
      "id": 815
    },
    {
      "price": 0.0762,
      "strength": "15 mg/5 ml",
      "name": "Phenobarbital",
      "form": "elixir",
      "id": 816
    },
    {
      "price": 1.008,
      "strength": "100 mg/ml",
      "name": "Phenobarbital",
      "form": "ampoule",
      "id": 817
    },
    {
      "price": 3.283,
      "strength": "200 mg/ml",
      "name": "Phenobarbital",
      "form": "vial",
      "id": 818
    },
    {
      "price": 0.0279,
      "strength": "125 mg/5 ml",
      "name": "Phenytoin",
      "form": "suspen",
      "id": 819
    },
    {
      "price": 0.0359,
      "strength": "100 mg",
      "name": "Phenytoin",
      "form": "tab-cap",
      "id": 820
    },
    {
      "price": 0.3866,
      "strength": "50 mg/ml",
      "name": "Phenytoin",
      "form": "ampoule",
      "id": 821
    },
    {
      "price": 0.228,
      "strength": "1%",
      "name": "Pilocarpine",
      "form": "opht drop",
      "id": 822
    },
    {
      "price": 0.381,
      "strength": "2%",
      "name": "Pilocarpine",
      "form": "opht drop",
      "id": 823
    },
    {
      "price": 0.573,
      "strength": "4%",
      "name": "Pilocarpine",
      "form": "opht drop",
      "id": 824
    },
    {
      "price": 4.1276,
      "strength": "4 g+500 mg",
      "name": "Piperacillin+Tazobactam",
      "form": "vial",
      "id": 825
    },
    {
      "price": 0.0252,
      "strength": "20 mg",
      "name": "Piroxicam",
      "form": "tab-cap",
      "id": 826
    },
    {
      "price": 0.0239,
      "strength": "3.5%",
      "name": "Polygeline",
      "form": "solution",
      "id": 827
    },
    {
      "price": 0.0224,
      "strength": "15%",
      "name": "Potassium Chloride",
      "form": "vial",
      "id": 828
    },
    {
      "price": 0.0385,
      "strength": "600 mg",
      "name": "Potassium Chloride",
      "form": "tab-cap",
      "id": 829
    },
    {
      "price": 0.0987,
      "strength": "600 mg",
      "name": "Potassium Chloride",
      "form": "tab-cap",
      "id": 830
    },
    {
      "price": 0.0439,
      "strength": "10%",
      "name": "Potassium Chloride",
      "form": "vial",
      "id": 831
    },
    {
      "price": 0.0106,
      "strength": "",
      "name": "Potassium Permanganate",
      "form": "powder",
      "id": 832
    },
    {
      "price": 0.0059,
      "strength": "10%",
      "name": "Povidone Iodine",
      "form": "solution",
      "id": 833
    },
    {
      "price": 0.0107,
      "strength": "7.5%",
      "name": "Povidone Iodine",
      "form": "liquid",
      "id": 834
    },
    {
      "price": 0.0133,
      "strength": "10%",
      "name": "Povidone Iodine",
      "form": "ointment",
      "id": 835
    },
    {
      "price": 0.3174,
      "strength": "600 mg",
      "name": "Praziquantel",
      "form": "tab-cap",
      "id": 836
    },
    {
      "price": 0.0157,
      "strength": "5 mg",
      "name": "Prednisolone",
      "form": "tab-cap",
      "id": 837
    },
    {
      "price": 0.039,
      "strength": "25 mg",
      "name": "Prednisolone",
      "form": "tab-cap",
      "id": 838
    },
    {
      "price": 0.1,
      "strength": "1 mg",
      "name": "Prednisolone",
      "form": "tab-cap",
      "id": 839
    },
    {
      "price": 0.3796,
      "strength": "1%",
      "name": "Prednisolone",
      "form": "opht drop",
      "id": 840
    },
    {
      "price": 0.0305,
      "strength": "15 mg/5 ml",
      "name": "Prednisolone (Base)",
      "form": "syrup",
      "id": 841
    },
    {
      "price": 0.01,
      "strength": "5 mg",
      "name": "Prednisone",
      "form": "tab-cap",
      "id": 842
    },
    {
      "price": 0.0837,
      "strength": "50 mg",
      "name": "Prednisone",
      "form": "tab-cap",
      "id": 843
    },
    {
      "price": 2.8256,
      "strength": "20 mg",
      "name": "Prednisone",
      "form": "tab-cap",
      "id": 844
    },
    {
      "price": 0.0554,
      "strength": "15 mg",
      "name": "Primaquine",
      "form": "tab-cap",
      "id": 845
    },
    {
      "price": 0.02,
      "strength": "5 mg",
      "name": "Prochlorperazine",
      "form": "tab-cap",
      "id": 846
    },
    {
      "price": 0.252,
      "strength": "100 mg",
      "name": "Proguanil",
      "form": "tab-cap",
      "id": 847
    },
    {
      "price": 0.0043,
      "strength": "25 mg",
      "name": "Promethazine HCl",
      "form": "tab-cap",
      "id": 848
    },
    {
      "price": 0.0055,
      "strength": "5 mg/5 ml",
      "name": "Promethazine HCl",
      "form": "suspen",
      "id": 849
    },
    {
      "price": 0.2493,
      "strength": "25 mg/ml",
      "name": "Promethazine HCl",
      "form": "ampoule",
      "id": 850
    },
    {
      "price": 0.342,
      "strength": "0.5%",
      "name": "Proparacaine",
      "form": "opht drop",
      "id": 851
    },
    {
      "price": 0.0708,
      "strength": "10 mg/ml",
      "name": "Propofol",
      "form": "vial",
      "id": 852
    },
    {
      "price": 10.8,
      "strength": "1 mg/ml",
      "name": "Propranolol",
      "form": "ampoule",
      "id": 853
    },
    {
      "price": 0.0106,
      "strength": "40 mg",
      "name": "Propranolol HCl",
      "form": "tab-cap",
      "id": 854
    },
    {
      "price": 0.0246,
      "strength": "10 mg",
      "name": "Propranolol HCl",
      "form": "tab-cap",
      "id": 855
    },
    {
      "price": 0.0795,
      "strength": "80 mg",
      "name": "Propranolol HCl",
      "form": "tab-cap",
      "id": 856
    },
    {
      "price": 0.0604,
      "strength": "50 mg",
      "name": "Propylthiouracil",
      "form": "tab-cap",
      "id": 857
    },
    {
      "price": 1.4811,
      "strength": "10 mg/ml",
      "name": "Protamine Sulfate",
      "form": "ampoule",
      "id": 858
    },
    {
      "price": 0.1293,
      "strength": "250 mg",
      "name": "Protionamide",
      "form": "tab-cap",
      "id": 859
    },
    {
      "price": 0.0429,
      "strength": "500 mg",
      "name": "Pyrazinamide",
      "form": "tab-cap",
      "id": 860
    },
    {
      "price": 0.0276,
      "strength": "400 mg",
      "name": "Pyrazinamide",
      "form": "tab-cap",
      "id": 861
    },
    {
      "price": 0.0461,
      "strength": "750 mg",
      "name": "Pyrazinamide",
      "form": "tab-cap",
      "id": 862
    },
    {
      "price": 0.282,
      "strength": "60 mg",
      "name": "Pyridostigmine Bromide",
      "form": "tab-cap",
      "id": 863
    },
    {
      "price": 0.35,
      "strength": "200 mg",
      "name": "Quinidine Sulfate",
      "form": "tab-cap",
      "id": 864
    },
    {
      "price": 0.4987,
      "strength": "250-300mg/ml",
      "name": "Quinine Dihydrochloride",
      "form": "ampoule",
      "id": 865
    },
    {
      "price": 0.0446,
      "strength": "100 mg/5 ml",
      "name": "Quinine Dihydrochloride",
      "form": "syrup",
      "id": 866
    },
    {
      "price": 0.243,
      "strength": "125-150mg/ml",
      "name": "Quinine Dihydrochloride",
      "form": "ampoule",
      "id": 867
    },
    {
      "price": 0.12,
      "strength": "300 mg/ml",
      "name": "Quinine Hydrochloride",
      "form": "ampoule",
      "id": 868
    },
    {
      "price": 0.0911,
      "strength": "300 mg",
      "name": "Quinine Sulfate",
      "form": "tab-cap",
      "id": 869
    },
    {
      "price": 0.0086,
      "strength": "50 mg/5 ml",
      "name": "Quinine Sulfate",
      "form": "syrup",
      "id": 870
    },
    {
      "price": 0.0112,
      "strength": "100 mg/5 ml",
      "name": "Quinine Sulfate",
      "form": "syrup",
      "id": 871
    },
    {
      "price": 0.0398,
      "strength": "200-250 mg",
      "name": "Quinine Sulfate",
      "form": "tab-cap",
      "id": 872
    },
    {
      "price": 0.0645,
      "strength": "500 mg",
      "name": "Quinine Sulfate",
      "form": "tab-cap",
      "id": 873
    },
    {
      "price": 0.8364,
      "strength": "400 mg",
      "name": "Raltegravir",
      "form": "tab-cap",
      "id": 874
    },
    {
      "price": 0.0194,
      "strength": "300 mg",
      "name": "Ranitidine",
      "form": "tab-cap",
      "id": 875
    },
    {
      "price": 0.0204,
      "strength": "150 mg",
      "name": "Ranitidine",
      "form": "tab-cap",
      "id": 876
    },
    {
      "price": 0.1736,
      "strength": "25 mg/ml",
      "name": "Ranitidine",
      "form": "ampoule",
      "id": 877
    },
    {
      "price": 1,
      "strength": "150 mg",
      "name": "Rifabutin",
      "form": "tab-cap",
      "id": 878
    },
    {
      "price": 0.0756,
      "strength": "",
      "name": "Rifamp.+Isoniazid+Pyrazin.+Ethambut.",
      "form": "tab-cap",
      "id": 879
    },
    {
      "price": 0.0841,
      "strength": "150 mg",
      "name": "Rifampicin",
      "form": "tab-cap",
      "id": 880
    },
    {
      "price": 0.1193,
      "strength": "300 mg",
      "name": "Rifampicin",
      "form": "tab-cap",
      "id": 881
    },
    {
      "price": 0.1265,
      "strength": "600 mg",
      "name": "Rifampicin",
      "form": "tab-cap",
      "id": 882
    },
    {
      "price": 0.1386,
      "strength": "100 mg/5 ml",
      "name": "Rifampicin",
      "form": "syrup",
      "id": 883
    },
    {
      "price": 0.0445,
      "strength": "60 mg+60 mg",
      "name": "Rifampicin+Isoniazid",
      "form": "tab-cap",
      "id": 884
    },
    {
      "price": 0.0629,
      "strength": "150+75 mg",
      "name": "Rifampicin+Isoniazid",
      "form": "tab-cap",
      "id": 885
    },
    {
      "price": 0.0837,
      "strength": "300+150 mg",
      "name": "Rifampicin+Isoniazid",
      "form": "tab-cap",
      "id": 886
    },
    {
      "price": 0.0175,
      "strength": "60 mg+30 mg",
      "name": "Rifampicin+Isoniazid",
      "form": "tab-cap",
      "id": 887
    },
    {
      "price": 0.0343,
      "strength": "150mg+150mg",
      "name": "Rifampicin+Isoniazid",
      "form": "tab-cap",
      "id": 888
    },
    {
      "price": 0.0729,
      "strength": "150+75+275mg",
      "name": "Rifampicin+Isoniazid+Ethambutol",
      "form": "tab-cap",
      "id": 889
    },
    {
      "price": 0.0255,
      "strength": "60+30+150 mg",
      "name": "Rifampicin+Isoniazid+Pyrazinamide",
      "form": "tab-cap",
      "id": 890
    },
    {
      "price": 0.0182,
      "strength": "0.5 mg",
      "name": "Risperidone",
      "form": "tab-cap",
      "id": 891
    },
    {
      "price": 0.02,
      "strength": "2 mg",
      "name": "Risperidone",
      "form": "tab-cap",
      "id": 892
    },
    {
      "price": 0.0268,
      "strength": "1 mg",
      "name": "Risperidone",
      "form": "tab-cap",
      "id": 893
    },
    {
      "price": 0.0906,
      "strength": "3 mg",
      "name": "Risperidone",
      "form": "tab-cap",
      "id": 894
    },
    {
      "price": 0.5978,
      "strength": "1 mg/ml",
      "name": "Risperidone",
      "form": "solution",
      "id": 895
    },
    {
      "price": 0.063,
      "strength": "80 mg/ml",
      "name": "Ritonavir",
      "form": "solution",
      "id": 896
    },
    {
      "price": 0.1288,
      "strength": "100 mg",
      "name": "Ritonavir",
      "form": "tab-cap",
      "id": 897
    },
    {
      "price": 15.9293,
      "strength": "10 mg/ml",
      "name": "Rituximab",
      "form": "ampoule",
      "id": 898
    },
    {
      "price": 0.6595,
      "strength": "50 mg/5 ml",
      "name": "Rocuronium Bromide",
      "form": "vial",
      "id": 899
    },
    {
      "price": 0.0037,
      "strength": "2 mg/5 ml",
      "name": "Salbutamol",
      "form": "syrup",
      "id": 900
    },
    {
      "price": 0.0068,
      "strength": "4 mg",
      "name": "Salbutamol",
      "form": "tab-cap",
      "id": 901
    },
    {
      "price": 0.0078,
      "strength": "100 mcg/dose",
      "name": "Salbutamol",
      "form": "inhaler",
      "id": 902
    },
    {
      "price": 0.047,
      "strength": "0.5%",
      "name": "Salbutamol",
      "form": "respsol",
      "id": 903
    },
    {
      "price": 1.983,
      "strength": "0.5 mg/ml",
      "name": "Salbutamol",
      "form": "ampoule",
      "id": 904
    },
    {
      "price": 0.0026,
      "strength": "2 mg",
      "name": "Salbutamol",
      "form": "tab-cap",
      "id": 905
    },
    {
      "price": 0.1456,
      "strength": "0.2%",
      "name": "Salbutamol",
      "form": "respsol",
      "id": 906
    },
    {
      "price": 0.0568,
      "strength": "",
      "name": "Salmeterol+Fluticasone",
      "form": "inhaler",
      "id": 907
    },
    {
      "price": 0.244,
      "strength": "200 mg",
      "name": "Saquinavir",
      "form": "tab-cap",
      "id": 908
    },
    {
      "price": 1.1308,
      "strength": "500 mg",
      "name": "Saquinavir",
      "form": "tab-cap",
      "id": 909
    },
    {
      "price": 0.0112,
      "strength": "7.5 mg",
      "name": "Senna",
      "form": "tab-cap",
      "id": 910
    },
    {
      "price": 0.0382,
      "strength": "50 mg",
      "name": "Sertraline",
      "form": "tab-cap",
      "id": 911
    },
    {
      "price": 0.4105,
      "strength": "",
      "name": "Sevoflurane",
      "form": "solution",
      "id": 912
    },
    {
      "price": 0.0247,
      "strength": "1%",
      "name": "Silver Sulfadiazine",
      "form": "cream",
      "id": 913
    },
    {
      "price": 0.0245,
      "strength": "20 mg",
      "name": "Simvastatin",
      "form": "tab-cap",
      "id": 914
    },
    {
      "price": 0.0658,
      "strength": "10 mg",
      "name": "Simvastatin",
      "form": "tab-cap",
      "id": 915
    },
    {
      "price": 0.4725,
      "strength": "76%",
      "name": "Sodium Amidotrizoate",
      "form": "vial",
      "id": 916
    },
    {
      "price": 0.014,
      "strength": "8.4%",
      "name": "Sodium Bicarbonate",
      "form": "solution",
      "id": 917
    },
    {
      "price": 0.001,
      "strength": "0.9%",
      "name": "Sodium Chloride In Water",
      "form": "solution",
      "id": 918
    },
    {
      "price": 0.0011,
      "strength": "0.45%",
      "name": "Sodium Chloride In Water",
      "form": "solution",
      "id": 919
    },
    {
      "price": 0.0445,
      "strength": "1.67 g",
      "name": "Sodium Dichloroisocyanurate",
      "form": "tab-cap",
      "id": 920
    },
    {
      "price": 0.0295,
      "strength": "8.5 mg",
      "name": "Sodium Dichloroisocyanurate",
      "form": "tab-cap",
      "id": 921
    },
    {
      "price": 0.0007,
      "strength": "",
      "name": "Sodium Lactate Compound",
      "form": "solution",
      "id": 922
    },
    {
      "price": 0.3218,
      "strength": "33%",
      "name": "Sodium Stibogluconate",
      "form": "vial",
      "id": 923
    },
    {
      "price": 0.0447,
      "strength": "250 mg/5 ml",
      "name": "Sodium Valproate",
      "form": "suspen",
      "id": 924
    },
    {
      "price": 0.1702,
      "strength": "500 mg",
      "name": "Sodium Valproate",
      "form": "tab-cap",
      "id": 925
    },
    {
      "price": 0.0704,
      "strength": "200 mg",
      "name": "Sodium Valproate",
      "form": "tab-cap",
      "id": 926
    },
    {
      "price": 4.8,
      "strength": "2 g",
      "name": "Spectinomycin",
      "form": "vial",
      "id": 927
    },
    {
      "price": 0.0597,
      "strength": "25 mg",
      "name": "Spironolactone",
      "form": "tab-cap",
      "id": 928
    },
    {
      "price": 0.0692,
      "strength": "100 mg",
      "name": "Spironolactone",
      "form": "tab-cap",
      "id": 929
    },
    {
      "price": 0.0062,
      "strength": "1 mg/ml",
      "name": "Stavudine",
      "form": "solution",
      "id": 930
    },
    {
      "price": 0.0206,
      "strength": "15 mg",
      "name": "Stavudine",
      "form": "tab-cap",
      "id": 931
    },
    {
      "price": 0.0233,
      "strength": "20 mg",
      "name": "Stavudine",
      "form": "tab-cap",
      "id": 932
    },
    {
      "price": 0.0409,
      "strength": "30 mg",
      "name": "Stavudine",
      "form": "tab-cap",
      "id": 933
    },
    {
      "price": 0.0606,
      "strength": "40 mg",
      "name": "Stavudine",
      "form": "tab-cap",
      "id": 934
    },
    {
      "price": 50.085,
      "strength": "1,500,000 IU",
      "name": "Streptokinase",
      "form": "vial",
      "id": 935
    },
    {
      "price": 4.391,
      "strength": "1 g",
      "name": "Streptomycin Sulfate",
      "form": "vial",
      "id": 936
    },
    {
      "price": 0.2946,
      "strength": "10%",
      "name": "Sulfacetamide Sodium",
      "form": "opht drop",
      "id": 937
    },
    {
      "price": 0.0529,
      "strength": "500 mg",
      "name": "Sulfadiazine",
      "form": "tab-cap",
      "id": 938
    },
    {
      "price": 0.0782,
      "strength": "250+12mg/5ml",
      "name": "Sulfadoxine+Pyrimethamine",
      "form": "suspen",
      "id": 939
    },
    {
      "price": 0.106,
      "strength": "500 mg+25 mg",
      "name": "Sulfadoxine+Pyrimethamine",
      "form": "tab-cap",
      "id": 940
    },
    {
      "price": 0.0048,
      "strength": "200+40mg/5ml",
      "name": "Sulfamethoxazole+Trimethoprim",
      "form": "suspen",
      "id": 941
    },
    {
      "price": 0.0127,
      "strength": "400 mg+80 mg",
      "name": "Sulfamethoxazole+Trimethoprim",
      "form": "tab-cap",
      "id": 942
    },
    {
      "price": 0.0274,
      "strength": "800 mg+160mg",
      "name": "Sulfamethoxazole+Trimethoprim",
      "form": "tab-cap",
      "id": 943
    },
    {
      "price": 0.0501,
      "strength": "80+16 mg/ml",
      "name": "Sulfamethoxazole+Trimethoprim",
      "form": "ampoule",
      "id": 944
    },
    {
      "price": 0.0051,
      "strength": "100 mg+20 mg",
      "name": "Sulfamethoxazole+Trimethoprim",
      "form": "tab-cap",
      "id": 945
    },
    {
      "price": 0.0085,
      "strength": "100 mg+20 mg",
      "name": "Sulfamethoxazole+Trimethoprim",
      "form": "tab-cap",
      "id": 946
    },
    {
      "price": 0.0133,
      "strength": "200 mg+40 mg",
      "name": "Sulfamethoxazole+Trimethoprim",
      "form": "tab-cap",
      "id": 947
    },
    {
      "price": 0.1673,
      "strength": "500 mg",
      "name": "Sulfasalazine",
      "form": "tab-cap",
      "id": 948
    },
    {
      "price": 0.2156,
      "strength": "500+25 mg",
      "name": "Sulphametopyrazine-Pyrimethamine",
      "form": "tab-cap",
      "id": 949
    },
    {
      "price": 0.4067,
      "strength": "20 mg/ml",
      "name": "Suxamethonium Cl",
      "form": "vial",
      "id": 950
    },
    {
      "price": 0.4485,
      "strength": "50 mg/ml",
      "name": "Suxamethonium Cl",
      "form": "ampoule",
      "id": 951
    },
    {
      "price": 0.9307,
      "strength": "1 mg",
      "name": "Tacrolimus",
      "form": "tab-cap",
      "id": 952
    },
    {
      "price": 0.0417,
      "strength": "10 mg",
      "name": "Tamoxifen Citrate",
      "form": "tab-cap",
      "id": 953
    },
    {
      "price": 0.16,
      "strength": "20 mg",
      "name": "Tamoxifen Citrate",
      "form": "tab-cap",
      "id": 954
    },
    {
      "price": 0.0471,
      "strength": "0.4 mg",
      "name": "Tamsulosin",
      "form": "tab-cap",
      "id": 955
    },
    {
      "price": 46.424,
      "strength": "100 mg",
      "name": "Temozolomide",
      "form": "tab-cap",
      "id": 956
    },
    {
      "price": 0.2251,
      "strength": "300 mg+200mg",
      "name": "Tenofovir DF+Emtricitabine",
      "form": "tab-cap",
      "id": 957
    },
    {
      "price": 0.2178,
      "strength": "300mg+300mg",
      "name": "Tenofovir DF+Lamivudine",
      "form": "tab-cap",
      "id": 958
    },
    {
      "price": 0.5411,
      "strength": "300 mg",
      "name": "Tenofovir Disoproxil Fumerate (TDF)",
      "form": "tab-cap",
      "id": 959
    },
    {
      "price": 0.0692,
      "strength": "20 mg",
      "name": "Tenoxicam",
      "form": "tab-cap",
      "id": 960
    },
    {
      "price": 0.11,
      "strength": "1%",
      "name": "Terbinafine",
      "form": "cream",
      "id": 961
    },
    {
      "price": 0.7117,
      "strength": "250 mg",
      "name": "Terizidone",
      "form": "tab-cap",
      "id": 962
    },
    {
      "price": 0.1853,
      "strength": "",
      "name": "Test, Bloodgroup Anti-A, Monoclonal",
      "form": "test",
      "id": 963
    },
    {
      "price": 0.2651,
      "strength": "",
      "name": "Test, Bloodgroup Anti-A/B, Monoclonal",
      "form": "test",
      "id": 964
    },
    {
      "price": 0.1853,
      "strength": "",
      "name": "Test, Bloodgroup, Anti-B, Monoclonal",
      "form": "test",
      "id": 965
    },
    {
      "price": 0.3307,
      "strength": "",
      "name": "Test, Bloodgroup, Anti-D, Monoclonal",
      "form": "test",
      "id": 966
    },
    {
      "price": 0.1897,
      "strength": "",
      "name": "Test, Brucella Melitensis Antigen",
      "form": "test",
      "id": 967
    },
    {
      "price": 0.0702,
      "strength": "",
      "name": "Test, Glucose In Urine",
      "form": "test",
      "id": 968
    },
    {
      "price": 19.353,
      "strength": "",
      "name": "Test, Glucose Meter",
      "form": "each",
      "id": 969
    },
    {
      "price": 53.8583,
      "strength": "",
      "name": "Test, Glucose Meter",
      "form": "each",
      "id": 970
    },
    {
      "price": 0.3042,
      "strength": "",
      "name": "Test, Glucose Meter Strips",
      "form": "test",
      "id": 971
    },
    {
      "price": 0.3793,
      "strength": "",
      "name": "Test, Glucose Meter Strips",
      "form": "each",
      "id": 972
    },
    {
      "price": 1.997,
      "strength": "",
      "name": "Test, Hepatitis B HBsAg Elisa",
      "form": "test",
      "id": 973
    },
    {
      "price": 1.2854,
      "strength": "",
      "name": "Test, Hepatitis B, HBsAg, Determine",
      "form": "test",
      "id": 974
    },
    {
      "price": 0.5313,
      "strength": "",
      "name": "Test, Hepatitis BsAg",
      "form": "test",
      "id": 975
    },
    {
      "price": 3.3638,
      "strength": "",
      "name": "Test, Hepatitis C Elisa",
      "form": "test",
      "id": 976
    },
    {
      "price": 2.6333,
      "strength": "",
      "name": "Test, Hepatitis C, HCVScan (TM)",
      "form": "test",
      "id": 977
    },
    {
      "price": 1.8755,
      "strength": "",
      "name": "Test, HIV 1+2 Instantchek (TM)",
      "form": "test",
      "id": 978
    },
    {
      "price": 1.68,
      "strength": "",
      "name": "Test, HIV 1+2 SD Bioline 3.0 (TM)",
      "form": "test",
      "id": 979
    },
    {
      "price": 2.7854,
      "strength": "",
      "name": "Test, HIV 1+2 Stat Pak (TM)",
      "form": "test",
      "id": 980
    },
    {
      "price": 0.5916,
      "strength": "",
      "name": "Test, HIV 1+2, Intec",
      "form": "test",
      "id": 981
    },
    {
      "price": 2.7061,
      "strength": "",
      "name": "Test, HIV 1+2+O Ag/Ab Murex (TM)",
      "form": "test",
      "id": 982
    },
    {
      "price": 0.9828,
      "strength": "",
      "name": "Test, HIV, Capillus HIV-1/2 (TM)",
      "form": "test",
      "id": 983
    },
    {
      "price": 1.0699,
      "strength": "",
      "name": "Test, HIV, Determine HIV-1/2 (TM)",
      "form": "test",
      "id": 984
    },
    {
      "price": 3.3696,
      "strength": "",
      "name": "Test, HIV, Unigold I/II (TM)",
      "form": "test",
      "id": 985
    },
    {
      "price": 0.8915,
      "strength": "",
      "name": "Test, Malaria P. Falciparum",
      "form": "test",
      "id": 986
    },
    {
      "price": 0.6203,
      "strength": "",
      "name": "Test, Malaria, P. Falciparum",
      "form": "test",
      "id": 987
    },
    {
      "price": 1.7126,
      "strength": "",
      "name": "Test, Malaria, P. Falciparum",
      "form": "test",
      "id": 988
    },
    {
      "price": 0.616,
      "strength": "",
      "name": "Test, Malaria, P. Falciparum/P. Ovale",
      "form": "test",
      "id": 989
    },
    {
      "price": 0.9947,
      "strength": "",
      "name": "Test, Malaria, P. Falciparum+P. Pan",
      "form": "test",
      "id": 990
    },
    {
      "price": 1.0614,
      "strength": "",
      "name": "Test, Malaria, P.Falciparum, P.Vivax",
      "form": "test",
      "id": 991
    },
    {
      "price": 1.0036,
      "strength": "",
      "name": "Test, Malaria, SD-Bioline",
      "form": "test",
      "id": 992
    },
    {
      "price": 0.069,
      "strength": "",
      "name": "Test, Pregnancy",
      "form": "test",
      "id": 993
    },
    {
      "price": 0.1506,
      "strength": "",
      "name": "Test, Syphilis",
      "form": "test",
      "id": 994
    },
    {
      "price": 1.9032,
      "strength": "",
      "name": "Test, Syphilis",
      "form": "bott",
      "id": 995
    },
    {
      "price": 1.75,
      "strength": "",
      "name": "Test, Syphilis Determine (TM)",
      "form": "test",
      "id": 996
    },
    {
      "price": 0.125,
      "strength": "",
      "name": "Test, Syphilis RPR (TM)",
      "form": "test",
      "id": 997
    },
    {
      "price": 0.9987,
      "strength": "",
      "name": "Test, Syphilis SD Bioline 3.0 (TM)",
      "form": "test",
      "id": 998
    },
    {
      "price": 0.043,
      "strength": "",
      "name": "Test, Urine Glucose/Protein Strip",
      "form": "test",
      "id": 999
    },
    {
      "price": 1.25,
      "strength": "1500 IU",
      "name": "Tetanus Antitoxin",
      "form": "ampoule",
      "id": 1000
    },
    {
      "price": 0.1514,
      "strength": "0.5%",
      "name": "Tetracaine",
      "form": "opht drop",
      "id": 1001
    },
    {
      "price": 0.036,
      "strength": "500 mg",
      "name": "Tetracycline",
      "form": "tab-cap",
      "id": 1002
    },
    {
      "price": 0.0457,
      "strength": "3%",
      "name": "Tetracycline",
      "form": "ointment",
      "id": 1003
    },
    {
      "price": 0.0128,
      "strength": "250 mg",
      "name": "Tetracycline HCl",
      "form": "tab-cap",
      "id": 1004
    },
    {
      "price": 0.069,
      "strength": "1%",
      "name": "Tetracycline HCl",
      "form": "opht oint",
      "id": 1005
    },
    {
      "price": 0.0512,
      "strength": "1%",
      "name": "Tetracycline HCl",
      "form": "ointment",
      "id": 1006
    },
    {
      "price": 0.4168,
      "strength": "100 mg",
      "name": "Thalidomide",
      "form": "tab-cap",
      "id": 1007
    },
    {
      "price": 0.024,
      "strength": "200 mg",
      "name": "Theophylline",
      "form": "tab-cap",
      "id": 1008
    },
    {
      "price": 1.375,
      "strength": "500 mg",
      "name": "Thiopental Sodium",
      "form": "vial",
      "id": 1009
    },
    {
      "price": 2.03,
      "strength": "1 g",
      "name": "Thiopental Sodium",
      "form": "vial",
      "id": 1010
    },
    {
      "price": 0.0617,
      "strength": "500 mg",
      "name": "Tiabendazole",
      "form": "tab-cap",
      "id": 1011
    },
    {
      "price": 0.1066,
      "strength": "500 mg",
      "name": "Tiabendazole",
      "form": "tab-cap",
      "id": 1012
    },
    {
      "price": 0.1814,
      "strength": "0.25%",
      "name": "Timolol Maleate",
      "form": "opht drop",
      "id": 1013
    },
    {
      "price": 0.1932,
      "strength": "0.5%",
      "name": "Timolol Maleate",
      "form": "opht drop",
      "id": 1014
    },
    {
      "price": 0.0675,
      "strength": "500 mg",
      "name": "Tinidazole",
      "form": "tab-cap",
      "id": 1015
    },
    {
      "price": 7.0688,
      "strength": "40 mg",
      "name": "Tioguanine",
      "form": "tab-cap",
      "id": 1016
    },
    {
      "price": 0.0243,
      "strength": "25 mg",
      "name": "Topiramate",
      "form": "tab-cap",
      "id": 1017
    },
    {
      "price": 0.0546,
      "strength": "100 mg",
      "name": "Topiramate",
      "form": "tab-cap",
      "id": 1018
    },
    {
      "price": 0.0218,
      "strength": "50 mg",
      "name": "Tramadol Hydrochloride",
      "form": "tab-cap",
      "id": 1019
    },
    {
      "price": 0.0766,
      "strength": "100 mg/ml",
      "name": "Tramadol Hydrochloride",
      "form": "solution",
      "id": 1020
    },
    {
      "price": 0.209,
      "strength": "50 mg/ml",
      "name": "Tramadol Hydrochloride",
      "form": "ampoule",
      "id": 1021
    },
    {
      "price": 0.0559,
      "strength": "100 mg/ml",
      "name": "Tramadol Hydrochloride",
      "form": "ampoule",
      "id": 1022
    },
    {
      "price": 1.1599,
      "strength": "100 mg/ml",
      "name": "Tranexamic Acid",
      "form": "ampoule",
      "id": 1023
    },
    {
      "price": 1877.355,
      "strength": "440 mg",
      "name": "Trastuzumab",
      "form": "vial",
      "id": 1024
    },
    {
      "price": 0.9628,
      "strength": "10 mg/ml",
      "name": "Triamcinolone Acetonide",
      "form": "ampoule",
      "id": 1025
    },
    {
      "price": 0.0815,
      "strength": "5 mg",
      "name": "Trifluoperazine",
      "form": "tab-cap",
      "id": 1026
    },
    {
      "price": 0.022,
      "strength": "2 mg",
      "name": "Trihexyphenidyl",
      "form": "tab-cap",
      "id": 1027
    },
    {
      "price": 0.023,
      "strength": "5 mg",
      "name": "Trihexyphenidyl",
      "form": "tab-cap",
      "id": 1028
    },
    {
      "price": 0.2914,
      "strength": "1%",
      "name": "Tropicamide",
      "form": "opht drop",
      "id": 1029
    },
    {
      "price": 0.374,
      "strength": "0.5%",
      "name": "Tropicamide",
      "form": "opht drop",
      "id": 1030
    },
    {
      "price": 0.218,
      "strength": "5 IU",
      "name": "Tuberculin",
      "form": "vial",
      "id": 1031
    },
    {
      "price": 4.914,
      "strength": "76%",
      "name": "Urographin",
      "form": "solution",
      "id": 1032
    },
    {
      "price": 0.1564,
      "strength": "",
      "name": "Vaccine, BCG",
      "form": "powder",
      "id": 1033
    },
    {
      "price": 0.5593,
      "strength": "",
      "name": "Vaccine, Diphtheria-Tetanus",
      "form": "vial",
      "id": 1034
    },
    {
      "price": 1.1209,
      "strength": "",
      "name": "Vaccine, Hepatitis B",
      "form": "vial",
      "id": 1035
    },
    {
      "price": 94.5,
      "strength": "",
      "name": "Vaccine, HPV",
      "form": "vial",
      "id": 1036
    },
    {
      "price": 5.2592,
      "strength": "0.5 ml",
      "name": "Vaccine, Influenza",
      "form": "ampoule",
      "id": 1037
    },
    {
      "price": 0.7016,
      "strength": "",
      "name": "Vaccine, Measles",
      "form": "vial",
      "id": 1038
    },
    {
      "price": 0.237,
      "strength": "",
      "name": "Vaccine, Measles-Mumps-Rubella",
      "form": "vial",
      "id": 1039
    },
    {
      "price": 10.7708,
      "strength": "",
      "name": "Vaccine, Meningococcal",
      "form": "vial",
      "id": 1040
    },
    {
      "price": 15.4111,
      "strength": "",
      "name": "Vaccine, Pentavalent",
      "form": "vial",
      "id": 1041
    },
    {
      "price": 16.9838,
      "strength": "",
      "name": "Vaccine, Pneumococcal",
      "form": "vial",
      "id": 1042
    },
    {
      "price": 0.2465,
      "strength": "",
      "name": "Vaccine, Polio",
      "form": "vial",
      "id": 1043
    },
    {
      "price": 15.6334,
      "strength": "",
      "name": "Vaccine, Rabies",
      "form": "vial",
      "id": 1044
    },
    {
      "price": 6.9614,
      "strength": "",
      "name": "Vaccine, Rotavirus",
      "form": "vial",
      "id": 1045
    },
    {
      "price": 0.6526,
      "strength": "",
      "name": "Vaccine, Tetanus Toxoid",
      "form": "vial",
      "id": 1046
    },
    {
      "price": 4.4352,
      "strength": "",
      "name": "Vaccine, Typhoid",
      "form": "vial",
      "id": 1047
    },
    {
      "price": 21.2817,
      "strength": "",
      "name": "Vaccine, Yellow Fever",
      "form": "vial",
      "id": 1048
    },
    {
      "price": 0.625,
      "strength": "500 mg",
      "name": "Valaciclovir",
      "form": "tab-cap",
      "id": 1049
    },
    {
      "price": 20.5755,
      "strength": "450 mg",
      "name": "Valganciclovir",
      "form": "tab-cap",
      "id": 1050
    },
    {
      "price": 0.0333,
      "strength": "200 mg/5 ml",
      "name": "Valproic Acid",
      "form": "syrup",
      "id": 1051
    },
    {
      "price": 0.1755,
      "strength": "200 mg",
      "name": "Valproic Acid",
      "form": "tab-cap",
      "id": 1052
    },
    {
      "price": 0.31,
      "strength": "500 mg",
      "name": "Valproic Acid",
      "form": "tab-cap",
      "id": 1053
    },
    {
      "price": 0.0822,
      "strength": "150 mg",
      "name": "Valproic Acid",
      "form": "tab-cap",
      "id": 1054
    },
    {
      "price": 1.75,
      "strength": "500 mg",
      "name": "Vancomycin",
      "form": "vial",
      "id": 1055
    },
    {
      "price": 2.805,
      "strength": "",
      "name": "VDRL Carbon Antigen",
      "form": "solution",
      "id": 1056
    },
    {
      "price": 0.8512,
      "strength": "4 mg",
      "name": "Vecuronium",
      "form": "vial",
      "id": 1057
    },
    {
      "price": 0.1425,
      "strength": "75 mg",
      "name": "Venlafaxine",
      "form": "tab-cap",
      "id": 1058
    },
    {
      "price": 0.0247,
      "strength": "80 mg",
      "name": "Verapamil HCl",
      "form": "tab-cap",
      "id": 1059
    },
    {
      "price": 0.0448,
      "strength": "40 mg",
      "name": "Verapamil HCl",
      "form": "tab-cap",
      "id": 1060
    },
    {
      "price": 0.0879,
      "strength": "240 mg",
      "name": "Verapamil HCl",
      "form": "tab-cap",
      "id": 1061
    },
    {
      "price": 1.4905,
      "strength": "2.5 mg/ml",
      "name": "Verapamil HCl",
      "form": "vial",
      "id": 1062
    },
    {
      "price": 15.575,
      "strength": "10 mg",
      "name": "Vinblastine",
      "form": "vial",
      "id": 1063
    },
    {
      "price": 3.2783,
      "strength": "1 mg",
      "name": "Vincristine",
      "form": "vial",
      "id": 1064
    },
    {
      "price": 8.6146,
      "strength": "10 mg/1 ml",
      "name": "Vinorelbine",
      "form": "vial",
      "id": 1065
    },
    {
      "price": 30.4579,
      "strength": "50 mg/5 ml",
      "name": "Vinorelbine",
      "form": "vial",
      "id": 1066
    },
    {
      "price": 0.0376,
      "strength": "30 mg",
      "name": "Vitamin A",
      "form": "tab-cap",
      "id": 1067
    },
    {
      "price": 0.039,
      "strength": "7.5 mg",
      "name": "Vitamin A",
      "form": "tab-cap",
      "id": 1068
    },
    {
      "price": 0.0451,
      "strength": "15 mg",
      "name": "Vitamin A",
      "form": "tab-cap",
      "id": 1069
    },
    {
      "price": 0.0558,
      "strength": "60 mg",
      "name": "Vitamin A",
      "form": "tab-cap",
      "id": 1070
    },
    {
      "price": 0.0374,
      "strength": "3 mg",
      "name": "Vitamin A",
      "form": "tab-cap",
      "id": 1071
    },
    {
      "price": 0.0037,
      "strength": "",
      "name": "Vitamin B Complex",
      "form": "syrup",
      "id": 1072
    },
    {
      "price": 0.0052,
      "strength": "",
      "name": "Vitamin B Complex",
      "form": "tab-cap",
      "id": 1073
    },
    {
      "price": 0.0669,
      "strength": "",
      "name": "Vitamin B Complex",
      "form": "ampoule",
      "id": 1074
    },
    {
      "price": 0.0221,
      "strength": "100 mg",
      "name": "Vitamin B1",
      "form": "tab-cap",
      "id": 1075
    },
    {
      "price": 0.217,
      "strength": "100 mg/ml",
      "name": "Vitamin B1",
      "form": "ampoule",
      "id": 1076
    },
    {
      "price": 0.0067,
      "strength": "50 mg",
      "name": "Vitamin B1",
      "form": "tab-cap",
      "id": 1077
    },
    {
      "price": 0.6915,
      "strength": "1 mg/ml",
      "name": "Vitamin B12",
      "form": "ampoule",
      "id": 1078
    },
    {
      "price": 0.0059,
      "strength": "25 mg",
      "name": "Vitamin B6",
      "form": "tab-cap",
      "id": 1079
    },
    {
      "price": 0.0179,
      "strength": "50 mg",
      "name": "Vitamin B6",
      "form": "tab-cap",
      "id": 1080
    },
    {
      "price": 0.4384,
      "strength": "50 mg/ml",
      "name": "Vitamin B6",
      "form": "ampoule",
      "id": 1081
    },
    {
      "price": 0.0062,
      "strength": "100 mg",
      "name": "Vitamin C",
      "form": "tab-cap",
      "id": 1082
    },
    {
      "price": 0.0071,
      "strength": "250 mg",
      "name": "Vitamin C",
      "form": "tab-cap",
      "id": 1083
    },
    {
      "price": 0.02,
      "strength": "500 mg",
      "name": "Vitamin C",
      "form": "tab-cap",
      "id": 1084
    },
    {
      "price": 0.3407,
      "strength": "0.25 mcg",
      "name": "Vitamin D",
      "form": "tab-cap",
      "id": 1085
    },
    {
      "price": 0.0713,
      "strength": "10,000 IU/ml",
      "name": "Vitamin D3",
      "form": "drops",
      "id": 1086
    },
    {
      "price": 0.2702,
      "strength": "10 mg",
      "name": "Vitamin K1",
      "form": "tab-cap",
      "id": 1087
    },
    {
      "price": 0.3612,
      "strength": "10 mg/ml",
      "name": "Vitamin K1",
      "form": "ampoule",
      "id": 1088
    },
    {
      "price": 0.3738,
      "strength": "1 mg/ml",
      "name": "Vitamin K1",
      "form": "ampoule",
      "id": 1089
    },
    {
      "price": 0.0101,
      "strength": "",
      "name": "Vitamin, Multi",
      "form": "syrup",
      "id": 1090
    },
    {
      "price": 0.0166,
      "strength": "",
      "name": "Vitamin, Multi",
      "form": "tab-cap",
      "id": 1091
    },
    {
      "price": 0.0274,
      "strength": "",
      "name": "Vitamin, Multi",
      "form": "drops",
      "id": 1092
    },
    {
      "price": 0.0575,
      "strength": "",
      "name": "Vitamin, Multi + Iron",
      "form": "tab-cap",
      "id": 1093
    },
    {
      "price": 0.02,
      "strength": "",
      "name": "Vitamin, Multi + Minerals",
      "form": "tab-cap",
      "id": 1094
    },
    {
      "price": 0.0336,
      "strength": "3 mg",
      "name": "Warfarin Sodium",
      "form": "tab-cap",
      "id": 1095
    },
    {
      "price": 0.04,
      "strength": "1 mg",
      "name": "Warfarin Sodium",
      "form": "tab-cap",
      "id": 1096
    },
    {
      "price": 0.0453,
      "strength": "5 mg",
      "name": "Warfarin Sodium",
      "form": "tab-cap",
      "id": 1097
    },
    {
      "price": 0.0458,
      "strength": "2 mg",
      "name": "Warfarin Sodium",
      "form": "tab-cap",
      "id": 1098
    },
    {
      "price": 0.0399,
      "strength": "5 ml",
      "name": "Water For Injection",
      "form": "ampoule",
      "id": 1099
    },
    {
      "price": 0.0584,
      "strength": "10 ml",
      "name": "Water For Injection",
      "form": "ampoule",
      "id": 1100
    },
    {
      "price": 0.85,
      "strength": "100 ml",
      "name": "Water For Injection",
      "form": "vial",
      "id": 1101
    },
    {
      "price": 0.0747,
      "strength": "0.05%",
      "name": "Xylometazoline",
      "form": "nasal",
      "id": 1102
    },
    {
      "price": 0.0103,
      "strength": "50 mg/5 ml",
      "name": "Zidovudine",
      "form": "solution",
      "id": 1103
    },
    {
      "price": 0.0662,
      "strength": "100 mg",
      "name": "Zidovudine",
      "form": "tab-cap",
      "id": 1104
    },
    {
      "price": 0.1888,
      "strength": "300 mg",
      "name": "Zidovudine",
      "form": "tab-cap",
      "id": 1105
    },
    {
      "price": 0.012,
      "strength": "10%",
      "name": "Zinc Oxide",
      "form": "ointment",
      "id": 1106
    },
    {
      "price": 0.0019,
      "strength": "10 mg/5 ml",
      "name": "Zinc Sulfate",
      "form": "syrup",
      "id": 1107
    },
    {
      "price": 0.0025,
      "strength": "20 mg/5 ml",
      "name": "Zinc Sulfate",
      "form": "syrup",
      "id": 1108
    },
    {
      "price": 0.0072,
      "strength": "10 mg",
      "name": "Zinc Sulfate",
      "form": "tab-cap",
      "id": 1109
    },
    {
      "price": 0.011,
      "strength": "20 mg",
      "name": "Zinc Sulfate",
      "form": "tab-cap",
      "id": 1110
    },
    {
      "price": 0.0452,
      "strength": "20 mg",
      "name": "Zinc Sulfate",
      "form": "tab-cap",
      "id": 1111
    },
    {
      "price": 29.38,
      "strength": "4 mg/5 ml",
      "name": "Zoledronic Acid",
      "form": "vial",
      "id": 1112
    }
  ];
  return medicine;
}
