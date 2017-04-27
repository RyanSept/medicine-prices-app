export function getMedicine() {
  let medicine = [
    {
      "name": "Abacavir",
      "form": "solution",
      "strength": "20 mg/ml",
      "price": 0.0197
    },
    {
      "name": "Abacavir",
      "form": "tab-cap",
      "strength": "300 mg",
      "price": 0.2342
    },
    {
      "name": "Abacavir Sulfate",
      "form": "tab-cap",
      "strength": "60 mg",
      "price": 0.0943
    },
    {
      "name": "Abacavir+Lamivudine",
      "form": "tab-cap",
      "strength": "60mg+30mg",
      "price": 0.0917
    },
    {
      "name": "Abacavir+Lamivudine",
      "form": "tab-cap",
      "strength": "600 mg+300mg",
      "price": 0.5074
    },
    {
      "name": "Abacavir+Lamivudine",
      "form": "tab-cap",
      "strength": "60mg+30mg",
      "price": 0.07
    },
    {
      "name": "Acetazolamide",
      "form": "tab-cap",
      "strength": "250 mg",
      "price": 0.033
    },
    {
      "name": "Acetylsalicylic Acid",
      "form": "tab-cap",
      "strength": "500 mg",
      "price": 0.0033
    },
    {
      "name": "Acetylsalicylic Acid",
      "form": "tab-cap",
      "strength": "100 mg",
      "price": 0.0074
    },
    {
      "name": "Acetylsalicylic Acid",
      "form": "tab-cap",
      "strength": "75 mg",
      "price": 0.0074
    },
    {
      "name": "Acetylsalicylic Acid",
      "form": "tab-cap",
      "strength": "300 mg",
      "price": 0.0133
    },
    {
      "name": "Aciclovir",
      "form": "tab-cap",
      "strength": "200 mg",
      "price": 0.0352
    },
    {
      "name": "Aciclovir",
      "form": "cream",
      "strength": "5%",
      "price": 0.036
    },
    {
      "name": "Aciclovir",
      "form": "tab-cap",
      "strength": "400 mg",
      "price": 0.0392
    },
    {
      "name": "Aciclovir",
      "form": "tab-cap",
      "strength": "200 mg",
      "price": 0.0459
    },
    {
      "name": "Aciclovir",
      "form": "suspen",
      "strength": "200 mg/5 ml",
      "price": 0.1664
    },
    {
      "name": "Aciclovir",
      "form": "opht oint",
      "strength": "3%",
      "price": 2.7292
    },
    {
      "name": "Aciclovir",
      "form": "vial",
      "strength": "250 mg",
      "price": 5.6372
    },
    {
      "name": "Adenosine",
      "form": "ampoule",
      "strength": "3 mg/ml",
      "price": 2.5816
    },
    {
      "name": "Albendazole",
      "form": "tab-cap",
      "strength": "400 mg",
      "price": 0.02
    },
    {
      "name": "Albendazole",
      "form": "suspen",
      "strength": "100 mg/5 ml",
      "price": 0.0275
    },
    {
      "name": "Albendazole",
      "form": "suspen",
      "strength": "200 mg/5 ml",
      "price": 0.029
    },
    {
      "name": "Albendazole",
      "form": "tab-cap",
      "strength": "200 mg",
      "price": 0.0394
    },
    {
      "name": "Albendazole",
      "form": "tab-cap",
      "strength": "200 mg",
      "price": 0.0182
    },
    {
      "name": "Albendazole",
      "form": "tab-cap",
      "strength": "400 mg",
      "price": 0.0248
    },
    {
      "name": "Albumin, Human Normal",
      "form": "vial",
      "strength": "20-25%",
      "price": 0.5632
    },
    {
      "name": "Alcohol",
      "form": "liquid",
      "strength": "95-96%",
      "price": 0.004
    },
    {
      "name": "Alcohol, Denatured",
      "form": "liquid",
      "strength": "95-96%",
      "price": 0.005
    },
    {
      "name": "Alcohol, Denatured",
      "form": "liquid",
      "strength": "70%",
      "price": 0.005
    },
    {
      "name": "Alcohol, Isopropyl",
      "form": "liquid",
      "strength": "70%",
      "price": 0.0014
    },
    {
      "name": "Alendronate",
      "form": "tab-cap",
      "strength": "10 mg",
      "price": 0.0606
    },
    {
      "name": "Allopurinol",
      "form": "tab-cap",
      "strength": "100 mg",
      "price": 0.0273
    },
    {
      "name": "Allopurinol",
      "form": "tab-cap",
      "strength": "300 mg",
      "price": 0.0545
    },
    {
      "name": "Alprazolam",
      "form": "tab-cap",
      "strength": "0.25 mg",
      "price": 0.0084
    },
    {
      "name": "Alprazolam",
      "form": "tab-cap",
      "strength": "0.5 mg",
      "price": 0.0672
    },
    {
      "name": "Aluminium Hydr.+ Magnesium Hydr.",
      "form": "tab-cap",
      "strength": "250+120 mg",
      "price": 0.0039
    },
    {
      "name": "Aluminium Hydroxide",
      "form": "tab-cap",
      "strength": "500 mg",
      "price": 0.012
    },
    {
      "name": "Aluminium Hydroxide",
      "form": "tab-cap",
      "strength": "500 mg",
      "price": 0.0061
    },
    {
      "name": "Amidotrizoate",
      "form": "ampoule",
      "strength": "76%",
      "price": 0.2744
    },
    {
      "name": "Amikacin Sulfate",
      "form": "vial",
      "strength": "250 mg/ml",
      "price": 0.1908
    },
    {
      "name": "Amikacin Sulfate",
      "form": "ampoule",
      "strength": "50 mg/ml",
      "price": 0.2393
    },
    {
      "name": "Aminophylline",
      "form": "tab-cap",
      "strength": "100 mg",
      "price": 0.0058
    },
    {
      "name": "Aminophylline",
      "form": "ampoule",
      "strength": "25 mg/ml",
      "price": 0.048
    },
    {
      "name": "Amiodarone",
      "form": "tab-cap",
      "strength": "200 mg",
      "price": 0.0711
    },
    {
      "name": "Amiodarone",
      "form": "vial",
      "strength": "50 mg/ml",
      "price": 0.4431
    },
    {
      "name": "Amitriptyline",
      "form": "tab-cap",
      "strength": "10 mg",
      "price": 0.0226
    },
    {
      "name": "Amitriptyline",
      "form": "tab-cap",
      "strength": "25 mg",
      "price": 0.0288
    },
    {
      "name": "Amitriptyline",
      "form": "tab-cap",
      "strength": "50 mg",
      "price": 0.033
    },
    {
      "name": "Amlodipine",
      "form": "tab-cap",
      "strength": "5 mg",
      "price": 0.0094
    },
    {
      "name": "Amlodipine",
      "form": "tab-cap",
      "strength": "10 mg",
      "price": 0.0102
    },
    {
      "name": "Amodiaquine",
      "form": "suspen",
      "strength": "50 mg/5 ml",
      "price": 0.0086
    },
    {
      "name": "Amodiaquine",
      "form": "tab-cap",
      "strength": "150-200 mg",
      "price": 0.0121
    },
    {
      "name": "Amoxicillin",
      "form": "suspen",
      "strength": "250 mg/5 ml",
      "price": 0.0063
    },
    {
      "name": "Amoxicillin",
      "form": "suspen",
      "strength": "125 mg/5 ml",
      "price": 0.009
    },
    {
      "name": "Amoxicillin",
      "form": "tab-cap",
      "strength": "250 mg",
      "price": 0.0207
    },
    {
      "name": "Amoxicillin",
      "form": "tab-cap",
      "strength": "250 mg",
      "price": 0.0228
    },
    {
      "name": "Amoxicillin",
      "form": "tab-cap",
      "strength": "500 mg",
      "price": 0.032
    },
    {
      "name": "AMOXICILLIN",
      "form": "tab-cap",
      "strength": "125 MG",
      "price": 0.0167
    },
    {
      "name": "Amoxicillin+Clavulanic Acid",
      "form": "suspen",
      "strength": "",
      "price": 0.0136
    },
    {
      "name": "Amoxicillin+Clavulanic Acid",
      "form": "suspen",
      "strength": "",
      "price": 0.0161
    },
    {
      "name": "Amoxicillin+Clavulanic Acid",
      "form": "tab-cap",
      "strength": "875mg+125mg",
      "price": 0.1291
    },
    {
      "name": "Amoxicillin+Clavulanic Acid",
      "form": "tab-cap",
      "strength": "250mg+125mg",
      "price": 0.1503
    },
    {
      "name": "Amoxicillin+Clavulanic Acid",
      "form": "tab-cap",
      "strength": "500mg+125mg",
      "price": 0.1529
    },
    {
      "name": "Amoxicillin+Clavulanic Acid",
      "form": "vial",
      "strength": "1000+200 mg",
      "price": 1.37
    },
    {
      "name": "Amoxicillin+Clavulanic Acid",
      "form": "vial",
      "strength": "500mg+100mg",
      "price": 1.5027
    },
    {
      "name": "Amphotericin B",
      "form": "vial",
      "strength": "50 mg",
      "price": 14.1045
    },
    {
      "name": "Ampicillin",
      "form": "tab-cap",
      "strength": "500 mg",
      "price": 0.02
    },
    {
      "name": "Ampicillin",
      "form": "vial",
      "strength": "1 g",
      "price": 0.272
    },
    {
      "name": "Ampicillin",
      "form": "vial",
      "strength": "500 mg",
      "price": 0.3313
    },
    {
      "name": "Ampicillin",
      "form": "vial",
      "strength": "250 mg",
      "price": 0.5294
    },
    {
      "name": "Ampicillin+Sulbactam",
      "form": "vial",
      "strength": "1000mg+500mg",
      "price": 0.6358
    },
    {
      "name": "Anastrozole",
      "form": "tab-cap",
      "strength": "1 mg",
      "price": 0.5457
    },
    {
      "name": "Antihaemorrhoidal",
      "form": "suppos",
      "strength": "",
      "price": 0.47
    },
    {
      "name": "Antihaemorrhoidal",
      "form": "ointment",
      "strength": "",
      "price": 0.0658
    },
    {
      "name": "Antivenom Serum",
      "form": "vial",
      "strength": "",
      "price": 20.37
    },
    {
      "name": "Artemether",
      "form": "ampoule",
      "strength": "20 mg/ml",
      "price": 0.66
    },
    {
      "name": "Artemether",
      "form": "ampoule",
      "strength": "80 mg/ml",
      "price": 1.09
    },
    {
      "name": "Artemether+Lumefantrine",
      "form": "tab-cap",
      "strength": "20 mg+120 mg",
      "price": 0.1472
    },
    {
      "name": "Artemether+Lumefantrine",
      "form": "suspen",
      "strength": "15+90mg/5ml",
      "price": 0.0708
    },
    {
      "name": "Artemether+Lumefantrine",
      "form": "tab-cap",
      "strength": "20 mg+120 mg",
      "price": 0.0942
    },
    {
      "name": "Artemether+Lumefantrine",
      "form": "tab-cap",
      "strength": "20 mg+120 mg",
      "price": 0.6152
    },
    {
      "name": "Artemether+Lumefantrine",
      "form": "tab-cap",
      "strength": "20 mg+120 mg",
      "price": 1.2188
    },
    {
      "name": "Artemether+Lumefantrine",
      "form": "tab-cap",
      "strength": "20 mg+120 mg",
      "price": 1.6802
    },
    {
      "name": "Artemether+Lumefantrine",
      "form": "tab-cap",
      "strength": "20 mg+120 mg",
      "price": 2.1163
    },
    {
      "name": "Artesunate",
      "form": "vial",
      "strength": "60 mg",
      "price": 2.3022
    },
    {
      "name": "Artesunate+Amodiaquine",
      "form": "tab-cap",
      "strength": "50 mg+153 mg",
      "price": 0.2434
    },
    {
      "name": "Artesunate+Amodiaquine",
      "form": "tab-cap",
      "strength": "25mg+67.5mg",
      "price": 0.3906
    },
    {
      "name": "Artesunate+Amodiaquine",
      "form": "tab-cap",
      "strength": "50 mg+153 mg",
      "price": 0.45
    },
    {
      "name": "Artesunate+Amodiaquine",
      "form": "tab-cap",
      "strength": "50 mg+153 mg",
      "price": 0.563
    },
    {
      "name": "Artesunate+Amodiaquine",
      "form": "tab-cap",
      "strength": "50 mg+135 mg",
      "price": 0.6363
    },
    {
      "name": "Artesunate+Amodiaquine",
      "form": "tab-cap",
      "strength": "100mg+270mg",
      "price": 0.928
    },
    {
      "name": "Artesunate+Amodiaquine",
      "form": "tab-cap",
      "strength": "50 mg+153 mg",
      "price": 1.038
    },
    {
      "name": "Artesunate+Amodiaquine",
      "form": "tab-cap",
      "strength": "100mg+270mg",
      "price": 1.5
    },
    {
      "name": "Artesunate+Sulfadoxine/Pyrimethamine",
      "form": "tab-cap",
      "strength": "100+500/25mg",
      "price": 1.9284
    },
    {
      "name": "Asparaginase",
      "form": "ampoule",
      "strength": "1,000 IU/ml",
      "price": 4.2
    },
    {
      "name": "Asparaginase",
      "form": "vial",
      "strength": "10,000 IU/ml",
      "price": 14.7075
    },
    {
      "name": "Atazanavir",
      "form": "tab-cap",
      "strength": "150 mg",
      "price": 0.2622
    },
    {
      "name": "Atazanavir+Ritonavir",
      "form": "tab-cap",
      "strength": "300+100 mg",
      "price": 0.7105
    },
    {
      "name": "Atenolol",
      "form": "tab-cap",
      "strength": "50 mg",
      "price": 0.0062
    },
    {
      "name": "Atenolol",
      "form": "tab-cap",
      "strength": "100 mg",
      "price": 0.0217
    },
    {
      "name": "Atorvastatin",
      "form": "tab-cap",
      "strength": "20 mg",
      "price": 0.0439
    },
    {
      "name": "Atorvastatin",
      "form": "tab-cap",
      "strength": "10 mg",
      "price": 0.0533
    },
    {
      "name": "Atorvastatin",
      "form": "tab-cap",
      "strength": "40 mg",
      "price": 3.2494
    },
    {
      "name": "Atovaquone+Proguanil",
      "form": "tab-cap",
      "strength": "250mg+100mg",
      "price": 3.1742
    },
    {
      "name": "Atracurium",
      "form": "ampoule",
      "strength": "10 mg/ml",
      "price": 0.712
    },
    {
      "name": "Atropine Sulfate",
      "form": "ampoule",
      "strength": "0.25 mg/ml",
      "price": 0.0671
    },
    {
      "name": "Atropine Sulfate",
      "form": "ampoule",
      "strength": "1 mg/ml",
      "price": 0.1067
    },
    {
      "name": "Atropine Sulfate",
      "form": "ampoule",
      "strength": "0.5 mg/ml",
      "price": 0.1588
    },
    {
      "name": "Atropine Sulfate",
      "form": "opht drop",
      "strength": "1%",
      "price": 0.615
    },
    {
      "name": "Azathioprine",
      "form": "tab-cap",
      "strength": "50 mg",
      "price": 0.0848
    },
    {
      "name": "Azithromycin",
      "form": "suspen",
      "strength": "200 mg/5 ml",
      "price": 0.0177
    },
    {
      "name": "Azithromycin",
      "form": "tab-cap",
      "strength": "250 mg",
      "price": 0.2375
    },
    {
      "name": "Azithromycin",
      "form": "tab-cap",
      "strength": "500 mg",
      "price": 0.3777
    },
    {
      "name": "Balanced Salt Solution",
      "form": "solution",
      "strength": "",
      "price": 0.0299
    },
    {
      "name": "Barium Sulfate",
      "form": "powder",
      "strength": "",
      "price": 79.3269
    },
    {
      "name": "Beclometasone",
      "form": "nasal",
      "strength": "50 mcg",
      "price": 0.0127
    },
    {
      "name": "Beclometasone",
      "form": "inhaler",
      "strength": "50 mcg/dose",
      "price": 0.0131
    },
    {
      "name": "Beclometasone",
      "form": "inhaler",
      "strength": "100 mcg/dose",
      "price": 0.016
    },
    {
      "name": "Beclometasone",
      "form": "inhaler",
      "strength": "250 mcg/dose",
      "price": 0.017
    },
    {
      "name": "Bendroflumethiazide",
      "form": "tab-cap",
      "strength": "2.5 mg",
      "price": 0.0071
    },
    {
      "name": "Bendroflumethiazide",
      "form": "tab-cap",
      "strength": "5 mg",
      "price": 0.0114
    },
    {
      "name": "Benzatropine Mesilate",
      "form": "tab-cap",
      "strength": "2 mg",
      "price": 0.0346
    },
    {
      "name": "Benzatropine Mesilate",
      "form": "ampoule",
      "strength": "1 mg/ml",
      "price": 2.65
    },
    {
      "name": "Benzoic & Salicylic Acid",
      "form": "ointment",
      "strength": "6% + 3%",
      "price": 0.0095
    },
    {
      "name": "Benzyl Benzoate",
      "form": "lotion",
      "strength": "25%",
      "price": 0.0031
    },
    {
      "name": "Benzyl Benzoate",
      "form": "solution",
      "strength": "90%",
      "price": 0.0108
    },
    {
      "name": "Betamethasone",
      "form": "opht drop",
      "strength": "0.1%",
      "price": 0.186
    },
    {
      "name": "Betamethasone",
      "form": "ampoule",
      "strength": "4 mg/ml",
      "price": 0.7276
    },
    {
      "name": "Betamethasone Valerate",
      "form": "cream",
      "strength": "0.1%",
      "price": 0.0516
    },
    {
      "name": "Betamethasone Valerate",
      "form": "ointment",
      "strength": "0.1%",
      "price": 0.0687
    },
    {
      "name": "Bevacizumab",
      "form": "vial",
      "strength": "25 mg/ml",
      "price": 159.635
    },
    {
      "name": "Bicalutamide",
      "form": "tab-cap",
      "strength": "50 mg",
      "price": 0.3981
    },
    {
      "name": "Biperiden",
      "form": "tab-cap",
      "strength": "2 mg",
      "price": 0.0101
    },
    {
      "name": "Bisacodyl",
      "form": "tab-cap",
      "strength": "5 mg",
      "price": 0.0193
    },
    {
      "name": "Bisacodyl",
      "form": "suppos",
      "strength": "10 mg",
      "price": 0.1022
    },
    {
      "name": "Bisoprolol",
      "form": "tab-cap",
      "strength": "5 mg",
      "price": 0.066
    },
    {
      "name": "Bleomycin",
      "form": "vial",
      "strength": "15 IU",
      "price": 16.715
    },
    {
      "name": "Bromocriptine Mesilate",
      "form": "tab-cap",
      "strength": "2.5 mg",
      "price": 0.2024
    },
    {
      "name": "Budesonide",
      "form": "inhaler",
      "strength": "100 mcg/dose",
      "price": 0.007
    },
    {
      "name": "Budesonide",
      "form": "inhaler",
      "strength": "200 mcg/dose",
      "price": 0.0272
    },
    {
      "name": "Bupivacaine HCl",
      "form": "ampoule",
      "strength": "0.5%",
      "price": 0.0315
    },
    {
      "name": "Bupivacaine HCl",
      "form": "ampoule",
      "strength": "0.25%",
      "price": 0.105
    },
    {
      "name": "Bupivacaine HCl + Dextrose",
      "form": "ampoule",
      "strength": "0.5% + 8%",
      "price": 0.08
    },
    {
      "name": "Bupivacaine HCl + Epinephrine",
      "form": "vial",
      "strength": "",
      "price": 0.0793
    },
    {
      "name": "Calamine",
      "form": "lotion",
      "strength": "",
      "price": 0.0051
    },
    {
      "name": "Calcium Folinate",
      "form": "tab-cap",
      "strength": "15 mg",
      "price": 1.3307
    },
    {
      "name": "Calcium Folinate",
      "form": "vial",
      "strength": "50 mg",
      "price": 2.3861
    },
    {
      "name": "Calcium Gluconate",
      "form": "ampoule",
      "strength": "100 mg/ml",
      "price": 0.0431
    },
    {
      "name": "Calcium Lactate",
      "form": "tab-cap",
      "strength": "250-300 mg",
      "price": 0.0168
    },
    {
      "name": "Camphor",
      "form": "ointment",
      "strength": "10%",
      "price": 0.0216
    },
    {
      "name": "Capecitabine",
      "form": "tab-cap",
      "strength": "150 mg",
      "price": 0.5194
    },
    {
      "name": "Capecitabine",
      "form": "tab-cap",
      "strength": "500 mg",
      "price": 1.4212
    },
    {
      "name": "Capreomycin",
      "form": "vial",
      "strength": "1 g",
      "price": 8.387
    },
    {
      "name": "Capreomycin",
      "form": "vial",
      "strength": "0.5 g",
      "price": 2.99
    },
    {
      "name": "Capreomycin",
      "form": "vial",
      "strength": "0.75 g",
      "price": 3.99
    },
    {
      "name": "Captopril",
      "form": "tab-cap",
      "strength": "25 mg",
      "price": 0.0089
    },
    {
      "name": "Captopril",
      "form": "tab-cap",
      "strength": "12.5 mg",
      "price": 0.0175
    },
    {
      "name": "Captopril",
      "form": "tab-cap",
      "strength": "50 mg",
      "price": 0.1276
    },
    {
      "name": "Carbamazepine",
      "form": "tab-cap",
      "strength": "200 mg",
      "price": 0.0223
    },
    {
      "name": "Carbamazepine",
      "form": "suspen",
      "strength": "100 mg/5 ml",
      "price": 0.0339
    },
    {
      "name": "Carbamazepine",
      "form": "tab-cap",
      "strength": "200 mg",
      "price": 0.197
    },
    {
      "name": "Carbimazole",
      "form": "tab-cap",
      "strength": "5 mg",
      "price": 0.0534
    },
    {
      "name": "Carboplatin",
      "form": "vial",
      "strength": "150 mg",
      "price": 13.5103
    },
    {
      "name": "Carboplatin",
      "form": "vial",
      "strength": "450 mg",
      "price": 35.35
    },
    {
      "name": "Carvedilol",
      "form": "tab-cap",
      "strength": "6.25 mg",
      "price": 0.03
    },
    {
      "name": "Carvedilol",
      "form": "tab-cap",
      "strength": "12.5 mg",
      "price": 0.0317
    },
    {
      "name": "Carvedilol",
      "form": "tab-cap",
      "strength": "25 mg",
      "price": 0.0448
    },
    {
      "name": "Cefadroxil",
      "form": "suspen",
      "strength": "250 mg/5 ml",
      "price": 0.0181
    },
    {
      "name": "Cefadroxil Monohydrate",
      "form": "tab-cap",
      "strength": "500 mg",
      "price": 0.0696
    },
    {
      "name": "Cefalexin",
      "form": "suspen",
      "strength": "250 mg/5 ml",
      "price": 0.0097
    },
    {
      "name": "Cefalexin",
      "form": "suspen",
      "strength": "125 mg/5 ml",
      "price": 0.0098
    },
    {
      "name": "Cefalexin",
      "form": "tab-cap",
      "strength": "250 mg",
      "price": 0.047
    },
    {
      "name": "Cefalexin",
      "form": "tab-cap",
      "strength": "500 mg",
      "price": 0.0621
    },
    {
      "name": "Cefalexin",
      "form": "suspen",
      "strength": "125 mg/ml",
      "price": 0.006
    },
    {
      "name": "Cefazolin",
      "form": "vial",
      "strength": "1 g",
      "price": 0.4342
    },
    {
      "name": "Cefazolin",
      "form": "ampoule",
      "strength": "500 mg",
      "price": 0.5412
    },
    {
      "name": "Cefepime",
      "form": "vial",
      "strength": "1 g",
      "price": 1.6796
    },
    {
      "name": "Cefixime",
      "form": "tab-cap",
      "strength": "200 mg",
      "price": 0.2106
    },
    {
      "name": "Cefixime",
      "form": "tab-cap",
      "strength": "400 mg",
      "price": 1.3371
    },
    {
      "name": "Cefixime",
      "form": "suspen",
      "strength": "100 mg/5 ml",
      "price": 0.0467
    },
    {
      "name": "Cefotaxime",
      "form": "vial",
      "strength": "500 mg",
      "price": 0.6004
    },
    {
      "name": "Cefotaxime",
      "form": "vial",
      "strength": "1 g",
      "price": 0.8323
    },
    {
      "name": "Ceftazidime",
      "form": "vial",
      "strength": "1 g",
      "price": 1.11
    },
    {
      "name": "Ceftazidime",
      "form": "vial",
      "strength": "250 mg",
      "price": 1.6128
    },
    {
      "name": "Ceftriaxone",
      "form": "vial",
      "strength": "1 g",
      "price": 0.4192
    },
    {
      "name": "Ceftriaxone",
      "form": "vial",
      "strength": "500 mg",
      "price": 0.461
    },
    {
      "name": "Ceftriaxone",
      "form": "vial",
      "strength": "250 mg",
      "price": 0.5726
    },
    {
      "name": "Cefuroxime",
      "form": "suspen",
      "strength": "125 mg/5 ml",
      "price": 0.0532
    },
    {
      "name": "Cefuroxime",
      "form": "tab-cap",
      "strength": "250 mg",
      "price": 0.1886
    },
    {
      "name": "Cefuroxime",
      "form": "tab-cap",
      "strength": "500 mg",
      "price": 0.5503
    },
    {
      "name": "Cefuroxime",
      "form": "vial",
      "strength": "750 mg",
      "price": 1.5775
    },
    {
      "name": "Cefuroxime",
      "form": "vial",
      "strength": "1.5 g",
      "price": 2.4997
    },
    {
      "name": "Cetirizine",
      "form": "syrup",
      "strength": "5 mg/5 ml",
      "price": 0.0049
    },
    {
      "name": "Cetirizine",
      "form": "tab-cap",
      "strength": "10 mg",
      "price": 0.0086
    },
    {
      "name": "Cetrimide+Chlorhexidine Gluconate",
      "form": "solution",
      "strength": "15%+1.5%",
      "price": 0.0038
    },
    {
      "name": "Charcoal, Activated",
      "form": "tab-cap",
      "strength": "125 mg",
      "price": 0.0161
    },
    {
      "name": "Chlorambucil",
      "form": "tab-cap",
      "strength": "2 mg",
      "price": 1.2433
    },
    {
      "name": "Chloramine",
      "form": "tab-cap",
      "strength": "500 mg",
      "price": 0.0155
    },
    {
      "name": "Chloramphenicol",
      "form": "suspen",
      "strength": "125 mg/5 ml",
      "price": 0.0102
    },
    {
      "name": "Chloramphenicol",
      "form": "opht drop",
      "strength": "0.5%",
      "price": 0.0241
    },
    {
      "name": "Chloramphenicol",
      "form": "tab-cap",
      "strength": "250 mg",
      "price": 0.0455
    },
    {
      "name": "Chloramphenicol",
      "form": "tab-cap",
      "strength": "500 mg",
      "price": 0.0455
    },
    {
      "name": "Chloramphenicol",
      "form": "otic drop",
      "strength": "5%",
      "price": 0.1544
    },
    {
      "name": "Chloramphenicol",
      "form": "opht oint",
      "strength": "1%",
      "price": 0.2956
    },
    {
      "name": "Chloramphenicol",
      "form": "vial",
      "strength": "1 g",
      "price": 0.483
    },
    {
      "name": "Chloramphenicol",
      "form": "disc",
      "strength": "10 mcg",
      "price": 0.0888
    },
    {
      "name": "Chloramphenicol In Oil",
      "form": "ampoule",
      "strength": "250 mg/ml",
      "price": 0.3301
    },
    {
      "name": "Chloramphenicol+Dexamethasone",
      "form": "opht drop",
      "strength": "0.5%+0.1%",
      "price": 0.2042
    },
    {
      "name": "Chlorhexidine",
      "form": "cream",
      "strength": "1%",
      "price": 0.0336
    },
    {
      "name": "Chlorhexidine Gluconate",
      "form": "solution",
      "strength": "5%",
      "price": 0.0041
    },
    {
      "name": "Chlorhexidine Gluconate",
      "form": "solution",
      "strength": "20%",
      "price": 0.0106
    },
    {
      "name": "Chlorhexidine Surgical Scrub",
      "form": "liquid",
      "strength": "4%",
      "price": 0.0059
    },
    {
      "name": "Chloroquine (Base)",
      "form": "syrup",
      "strength": "50 mg/5 ml",
      "price": 0.024
    },
    {
      "name": "Chloroquine (Base)",
      "form": "tab-cap",
      "strength": "150 mg",
      "price": 0.0359
    },
    {
      "name": "Chloroquine (Base)",
      "form": "tab-cap",
      "strength": "100 mg",
      "price": 0.0084
    },
    {
      "name": "Chloroxylenol",
      "form": "solution",
      "strength": "4.8%",
      "price": 0.0062
    },
    {
      "name": "Chlorphenamine Maleate",
      "form": "tab-cap",
      "strength": "4 mg",
      "price": 0.0034
    },
    {
      "name": "Chlorphenamine Maleate",
      "form": "elixir",
      "strength": "2 mg/5 ml",
      "price": 0.0047
    },
    {
      "name": "Chlorphenamine Maleate",
      "form": "ampoule",
      "strength": "10 mg/ml",
      "price": 0.1424
    },
    {
      "name": "Chlorpromazine HCl",
      "form": "tab-cap",
      "strength": "25 mg",
      "price": 0.0117
    },
    {
      "name": "Chlorpromazine HCl",
      "form": "tab-cap",
      "strength": "100 mg",
      "price": 0.0286
    },
    {
      "name": "Chlorpromazine Hcl",
      "form": "tab-cap",
      "strength": "50 mg",
      "price": 0.0387
    },
    {
      "name": "Chlorpromazine HCl",
      "form": "ampoule",
      "strength": "25 mg/ml",
      "price": 0.138
    },
    {
      "name": "Chlorpropamide",
      "form": "tab-cap",
      "strength": "250 mg",
      "price": 0.0367
    },
    {
      "name": "Chlorthalidone",
      "form": "tab-cap",
      "strength": "50 mg",
      "price": 0.0375
    },
    {
      "name": "Ciclosporin",
      "form": "tab-cap",
      "strength": "25 mg",
      "price": 0.3555
    },
    {
      "name": "Ciclosporin",
      "form": "tab-cap",
      "strength": "100 mg",
      "price": 1.4207
    },
    {
      "name": "Ciclosporin",
      "form": "solution",
      "strength": "100 mg/ml",
      "price": 1.5669
    },
    {
      "name": "Cimetidine",
      "form": "tab-cap",
      "strength": "200 mg",
      "price": 0.0167
    },
    {
      "name": "Cimetidine",
      "form": "tab-cap",
      "strength": "400 mg",
      "price": 0.0273
    },
    {
      "name": "Cimetidine",
      "form": "vial",
      "strength": "100 mg/ml",
      "price": 0.205
    },
    {
      "name": "Ciprofloxacin",
      "form": "vial",
      "strength": "2 mg/ml",
      "price": 0.0105
    },
    {
      "name": "Ciprofloxacin",
      "form": "tab-cap",
      "strength": "500 mg",
      "price": 0.0379
    },
    {
      "name": "Ciprofloxacin",
      "form": "tab-cap",
      "strength": "250 mg",
      "price": 0.0395
    },
    {
      "name": "Ciprofloxacin",
      "form": "suspen",
      "strength": "250 mg/5 ml",
      "price": 0.141
    },
    {
      "name": "Ciprofloxacin",
      "form": "opht drop",
      "strength": "3 mg/ml",
      "price": 0.2437
    },
    {
      "name": "Cisatracurium",
      "form": "ampoule",
      "strength": "2 mg/ml",
      "price": 1.416
    },
    {
      "name": "Cisplatin",
      "form": "vial",
      "strength": "10 mg",
      "price": 0.171
    },
    {
      "name": "Cisplatin",
      "form": "vial",
      "strength": "1 mg/ml",
      "price": 0.3497
    },
    {
      "name": "Cisplatin",
      "form": "vial",
      "strength": "50 mg",
      "price": 6.7713
    },
    {
      "name": "Citalopram",
      "form": "tab-cap",
      "strength": "20 mg",
      "price": 0.14
    },
    {
      "name": "Clarithromycin",
      "form": "suspen",
      "strength": "250 mg/5 ml",
      "price": 0.0431
    },
    {
      "name": "Clarithromycin",
      "form": "tab-cap",
      "strength": "500 mg",
      "price": 0.14
    },
    {
      "name": "Clarithromycin",
      "form": "tab-cap",
      "strength": "250 mg",
      "price": 0.15
    },
    {
      "name": "Clarithromycin",
      "form": "suspen",
      "strength": "125 mg/5 ml",
      "price": 0.0528
    },
    {
      "name": "Clindamycin",
      "form": "tab-cap",
      "strength": "300 mg",
      "price": 0.07
    },
    {
      "name": "Clindamycin (Base)",
      "form": "tab-cap",
      "strength": "150 mg",
      "price": 0.0816
    },
    {
      "name": "Clindamycin (Base)",
      "form": "vial",
      "strength": "150 mg/ml",
      "price": 0.083
    },
    {
      "name": "Clobetasol Proprionate",
      "form": "cream",
      "strength": "0.05%",
      "price": 0.0462
    },
    {
      "name": "Clofazimine",
      "form": "tab-cap",
      "strength": "50 mg",
      "price": 0.667
    },
    {
      "name": "Clofazimine",
      "form": "tab-cap",
      "strength": "100 mg",
      "price": 1.2672
    },
    {
      "name": "Clomifene",
      "form": "tab-cap",
      "strength": "50 mg",
      "price": 0.2717
    },
    {
      "name": "Clomipramine",
      "form": "tab-cap",
      "strength": "25 mg",
      "price": 0.0538
    },
    {
      "name": "Clonazepam",
      "form": "tab-cap",
      "strength": "0.5 mg",
      "price": 0.0326
    },
    {
      "name": "Clonazepam",
      "form": "tab-cap",
      "strength": "2 mg",
      "price": 0.0326
    },
    {
      "name": "Clonazepam",
      "form": "drops",
      "strength": "2.5 mg/ml",
      "price": 0.4589
    },
    {
      "name": "Clopidogrel Bisulfate",
      "form": "tab-cap",
      "strength": "75 mg",
      "price": 0.0775
    },
    {
      "name": "Clotrimazole",
      "form": "cream",
      "strength": "1%",
      "price": 0.0125
    },
    {
      "name": "Clotrimazole",
      "form": "cream",
      "strength": "1%",
      "price": 0.0575
    },
    {
      "name": "Clotrimazole",
      "form": "pessary",
      "strength": "100 mg",
      "price": 0.0977
    },
    {
      "name": "Clotrimazole",
      "form": "pessary",
      "strength": "500 mg",
      "price": 0.19
    },
    {
      "name": "Cloxacillin Sodium",
      "form": "suspen",
      "strength": "125 mg/5 ml",
      "price": 0.0079
    },
    {
      "name": "Cloxacillin Sodium",
      "form": "tab-cap",
      "strength": "250 mg",
      "price": 0.0217
    },
    {
      "name": "Cloxacillin Sodium",
      "form": "tab-cap",
      "strength": "500 mg",
      "price": 0.034
    },
    {
      "name": "Cloxacillin Sodium",
      "form": "vial",
      "strength": "250 mg",
      "price": 0.8327
    },
    {
      "name": "Cloxacillin Sodium",
      "form": "vial",
      "strength": "500 mg",
      "price": 0.8864
    },
    {
      "name": "Clozapine",
      "form": "tab-cap",
      "strength": "100 mg",
      "price": 0.0994
    },
    {
      "name": "Clozapine",
      "form": "tab-cap",
      "strength": "25 mg",
      "price": 0.1055
    },
    {
      "name": "Codeine",
      "form": "tab-cap",
      "strength": "30 mg",
      "price": 0.2889
    },
    {
      "name": "Colchicine",
      "form": "tab-cap",
      "strength": "0.5-0.6 mg",
      "price": 0.036
    },
    {
      "name": "Condom, Female",
      "form": "condom",
      "strength": "",
      "price": 0.7421
    },
    {
      "name": "Condoms (Lubricated)",
      "form": "condom",
      "strength": "",
      "price": 0.0341
    },
    {
      "name": "Cough Preparation",
      "form": "syrup",
      "strength": "",
      "price": 0.0059
    },
    {
      "name": "Cromoglicic Acid",
      "form": "opht drop",
      "strength": "2%",
      "price": 0.169
    },
    {
      "name": "Cyclopentolate",
      "form": "opht drop",
      "strength": "1%",
      "price": 0.3337
    },
    {
      "name": "Cyclophosphamide",
      "form": "tab-cap",
      "strength": "50 mg",
      "price": 0.3
    },
    {
      "name": "Cyclophosphamide",
      "form": "vial",
      "strength": "500 mg",
      "price": 6.3952
    },
    {
      "name": "Cyclophosphamide",
      "form": "vial",
      "strength": "1 g",
      "price": 10.1261
    },
    {
      "name": "Cyclophosphamide",
      "form": "vial",
      "strength": "200 mg",
      "price": 2.31
    },
    {
      "name": "Cycloserine",
      "form": "tab-cap",
      "strength": "250 mg",
      "price": 0.4887
    },
    {
      "name": "Cyproterone Acetate",
      "form": "tab-cap",
      "strength": "50 mg",
      "price": 0.2271
    },
    {
      "name": "Cytarabine",
      "form": "vial",
      "strength": "100 mg",
      "price": 4.2004
    },
    {
      "name": "Cytarabine",
      "form": "vial",
      "strength": "500 mg",
      "price": 5.3864
    },
    {
      "name": "Dacarbazine",
      "form": "vial",
      "strength": "200 mg",
      "price": 12.8428
    },
    {
      "name": "Dactinomycin",
      "form": "vial",
      "strength": "500 mcg",
      "price": 24.733
    },
    {
      "name": "Danazol",
      "form": "tab-cap",
      "strength": "200 mg",
      "price": 0.9402
    },
    {
      "name": "Dapsone",
      "form": "tab-cap",
      "strength": "100 mg",
      "price": 0.25
    },
    {
      "name": "Darunavir",
      "form": "tab-cap",
      "strength": "300 mg",
      "price": 0.5475
    },
    {
      "name": "Daunorubicin",
      "form": "vial",
      "strength": "20 mg",
      "price": 21.4896
    },
    {
      "name": "Deferoxamine Mesilate",
      "form": "ampoule",
      "strength": "500 mg",
      "price": 6.7579
    },
    {
      "name": "Determine Chase Buffer",
      "form": "vial",
      "strength": "",
      "price": 0.0328
    },
    {
      "name": "Dexamethasone",
      "form": "tab-cap",
      "strength": "0.5 mg",
      "price": 0.03
    },
    {
      "name": "Dexamethasone",
      "form": "ampoule",
      "strength": "5 mg/ml",
      "price": 0.0825
    },
    {
      "name": "Dexamethasone",
      "form": "ampoule",
      "strength": "4 mg/ml",
      "price": 0.1695
    },
    {
      "name": "Dexamethasone",
      "form": "opht drop",
      "strength": "0.1%",
      "price": 0.2206
    },
    {
      "name": "Dextran 70 6% In Sod. Chloride 0.9%",
      "form": "solution",
      "strength": "",
      "price": 0.0101
    },
    {
      "name": "Dextrose 10% In Water",
      "form": "solution",
      "strength": "",
      "price": 0.0013
    },
    {
      "name": "Dextrose 2.5% In Sod. Chloride 0.45%",
      "form": "solution",
      "strength": "",
      "price": 0.0018
    },
    {
      "name": "Dextrose 4.3-5% In Water",
      "form": "solution",
      "strength": "",
      "price": 0.0009
    },
    {
      "name": "Dextrose 5% In Sodium Chloride 0.45%",
      "form": "solution",
      "strength": "",
      "price": 0.0009
    },
    {
      "name": "Dextrose 5% In Sodium Chloride 0.9%",
      "form": "solution",
      "strength": "",
      "price": 0.0011
    },
    {
      "name": "Dextrose 5% In Water",
      "form": "solution",
      "strength": "",
      "price": 0.001
    },
    {
      "name": "Dextrose 50% In Water",
      "form": "solution",
      "strength": "",
      "price": 0.0082
    },
    {
      "name": "Dialysis Sol. Peritoneal W/ Dextrose",
      "form": "solution",
      "strength": "1.5%",
      "price": 0.0036
    },
    {
      "name": "Diazepam",
      "form": "tab-cap",
      "strength": "10 mg",
      "price": 0.01
    },
    {
      "name": "Diazepam",
      "form": "tab-cap",
      "strength": "5 mg",
      "price": 0.0235
    },
    {
      "name": "Diazepam",
      "form": "ampoule",
      "strength": "5 mg/ml",
      "price": 0.0876
    },
    {
      "name": "Diclofenac",
      "form": "suspen",
      "strength": "1.8 mg/ml",
      "price": 0.0063
    },
    {
      "name": "Diclofenac",
      "form": "ointment",
      "strength": "1%",
      "price": 0.007
    },
    {
      "name": "Diclofenac",
      "form": "suppos",
      "strength": "12.5 mg",
      "price": 0.23
    },
    {
      "name": "Diclofenac",
      "form": "suppos",
      "strength": "100 mg",
      "price": 0.1152
    },
    {
      "name": "Diclofenac Sodium",
      "form": "tab-cap",
      "strength": "25 mg",
      "price": 0.0086
    },
    {
      "name": "Diclofenac Sodium",
      "form": "tab-cap",
      "strength": "50 mg",
      "price": 0.0095
    },
    {
      "name": "Diclofenac Sodium",
      "form": "tab-cap",
      "strength": "75 mg",
      "price": 0.0153
    },
    {
      "name": "Diclofenac Sodium",
      "form": "ampoule",
      "strength": "25 mg/ml",
      "price": 0.0345
    },
    {
      "name": "Diclofenac Sodium",
      "form": "opht drop",
      "strength": "0.1%",
      "price": 0.1759
    },
    {
      "name": "Dicloxacillin",
      "form": "tab-cap",
      "strength": "500 mg",
      "price": 0.06
    },
    {
      "name": "Dicloxacillin",
      "form": "tab-cap",
      "strength": "250 mg",
      "price": 0.064
    },
    {
      "name": "Dicloxacillin",
      "form": "vial",
      "strength": "500 mg",
      "price": 1.07
    },
    {
      "name": "Didanosine",
      "form": "tab-cap",
      "strength": "25 mg",
      "price": 0.0709
    },
    {
      "name": "Didanosine",
      "form": "tab-cap",
      "strength": "50 mg",
      "price": 0.0924
    },
    {
      "name": "Didanosine",
      "form": "tab-cap",
      "strength": "100 mg",
      "price": 0.1183
    },
    {
      "name": "Didanosine",
      "form": "tab-cap",
      "strength": "250 mg",
      "price": 0.2329
    },
    {
      "name": "Didanosine",
      "form": "tab-cap",
      "strength": "400 mg",
      "price": 0.3717
    },
    {
      "name": "Didanosine",
      "form": "tab-cap",
      "strength": "400 mg",
      "price": 0.6764
    },
    {
      "name": "Didanosine",
      "form": "tab-cap",
      "strength": "400 mg",
      "price": 2.2386
    },
    {
      "name": "Didanosine",
      "form": "tab-cap",
      "strength": "200 mg",
      "price": 0.2392
    },
    {
      "name": "Didanosine",
      "form": "tab-cap",
      "strength": "125 mg",
      "price": 0.2975
    },
    {
      "name": "Didanosine",
      "form": "tab-cap",
      "strength": "200 mg",
      "price": 0.385
    },
    {
      "name": "Didanosine",
      "form": "tab-cap",
      "strength": "200 mg",
      "price": 0.4463
    },
    {
      "name": "Didanosine",
      "form": "tab-cap",
      "strength": "250 mg",
      "price": 0.5085
    },
    {
      "name": "Didanosine",
      "form": "powder",
      "strength": "10 mg/ml",
      "price": 6.6098
    },
    {
      "name": "Diethylcarbamazine Citrate",
      "form": "tab-cap",
      "strength": "50 mg",
      "price": 0.0057
    },
    {
      "name": "Digoxin",
      "form": "tab-cap",
      "strength": "0.125 mg",
      "price": 0.0318
    },
    {
      "name": "Digoxin",
      "form": "tab-cap",
      "strength": "0.25 mg",
      "price": 0.0482
    },
    {
      "name": "Digoxin",
      "form": "solution",
      "strength": "0.05 mg/ml",
      "price": 0.1127
    },
    {
      "name": "Digoxin",
      "form": "ampoule",
      "strength": "0.25 mg/ml",
      "price": 0.3788
    },
    {
      "name": "Dihydroartemisinin + Piperaquine",
      "form": "tab-cap",
      "strength": "40 + 320 mg",
      "price": 0.4009
    },
    {
      "name": "Dihydrocodeine",
      "form": "tab-cap",
      "strength": "30 mg",
      "price": 0.0812
    },
    {
      "name": "Diltiazem HCl",
      "form": "tab-cap",
      "strength": "60 mg",
      "price": 0.0599
    },
    {
      "name": "Dimenhydrinate",
      "form": "tab-cap",
      "strength": "50 mg",
      "price": 0.01
    },
    {
      "name": "Dimenhydrinate",
      "form": "vial",
      "strength": "50 mg/ml",
      "price": 0.213
    },
    {
      "name": "Diphenhydramine",
      "form": "tab-cap",
      "strength": "25 mg",
      "price": 0.01
    },
    {
      "name": "Dobutamine",
      "form": "vial",
      "strength": "12.5 mg/ml",
      "price": 0.0848
    },
    {
      "name": "Docetaxel",
      "form": "vial",
      "strength": "20 mg",
      "price": 10.83
    },
    {
      "name": "Docetaxel",
      "form": "vial",
      "strength": "80 mg",
      "price": 27.89
    },
    {
      "name": "Docetaxel",
      "form": "vial",
      "strength": "40 mg",
      "price": 108
    },
    {
      "name": "Dopamine HCl",
      "form": "ampoule",
      "strength": "40 mg/ml",
      "price": 0.0625
    },
    {
      "name": "Dorzolamide Chlorhydrate",
      "form": "opht drop",
      "strength": "2%",
      "price": 1.534
    },
    {
      "name": "Doxazosin",
      "form": "tab-cap",
      "strength": "4 mg",
      "price": 0.0913
    },
    {
      "name": "Doxorubicin HCl",
      "form": "vial",
      "strength": "10 mg",
      "price": 2.55
    },
    {
      "name": "Doxorubicin HCl",
      "form": "vial",
      "strength": "50 mg",
      "price": 6.0044
    },
    {
      "name": "Doxycycline",
      "form": "tab-cap",
      "strength": "100 mg",
      "price": 0.0191
    },
    {
      "name": "Droperidol",
      "form": "ampoule",
      "strength": "2.5 mg/ml",
      "price": 0.535
    },
    {
      "name": "Efavirenz",
      "form": "tab-cap",
      "strength": "50 mg",
      "price": 0.0391
    },
    {
      "name": "Efavirenz",
      "form": "tab-cap",
      "strength": "200 mg",
      "price": 0.0461
    },
    {
      "name": "Efavirenz",
      "form": "tab-cap",
      "strength": "600 mg",
      "price": 0.1414
    },
    {
      "name": "Efavirenz",
      "form": "syrup",
      "strength": "30 mg/ml",
      "price": 0.0989
    },
    {
      "name": "Efavirenz",
      "form": "tab-cap",
      "strength": "100 mg",
      "price": 0.154
    },
    {
      "name": "Efavirenz+Emtricitabine+Tenofovir DF",
      "form": "tab-cap",
      "strength": "",
      "price": 0.4151
    },
    {
      "name": "Efavirenz+Lamivudine+Tenofovir Disop.",
      "form": "tab-cap",
      "strength": "",
      "price": 0.3857
    },
    {
      "name": "Enalapril",
      "form": "tab-cap",
      "strength": "10 mg",
      "price": 0.0059
    },
    {
      "name": "Enalapril",
      "form": "tab-cap",
      "strength": "5 mg",
      "price": 0.0095
    },
    {
      "name": "Enalapril",
      "form": "tab-cap",
      "strength": "20 mg",
      "price": 0.0097
    },
    {
      "name": "Enoxaparin",
      "form": "syringe",
      "strength": "20 mg",
      "price": 3.21
    },
    {
      "name": "Enoxaparin",
      "form": "syringe",
      "strength": "40 mg",
      "price": 3.34
    },
    {
      "name": "Enoxaparin",
      "form": "syringe",
      "strength": "60 mg",
      "price": 3.4119
    },
    {
      "name": "Enoxaparin",
      "form": "syringe",
      "strength": "100 mg",
      "price": 4.0318
    },
    {
      "name": "Enoxaparin",
      "form": "syringe",
      "strength": "80 mg",
      "price": 6.4507
    },
    {
      "name": "Ephedrine",
      "form": "nasal",
      "strength": "0.5%",
      "price": 0.0329
    },
    {
      "name": "Ephedrine",
      "form": "vial",
      "strength": "30 mg/ml",
      "price": 0.975
    },
    {
      "name": "Ephedrine HCl",
      "form": "tab-cap",
      "strength": "30 mg",
      "price": 0.0066
    },
    {
      "name": "Ephedrine Sulfate",
      "form": "ampoule",
      "strength": "50 mg/ml",
      "price": 1.9501
    },
    {
      "name": "Epinephrine",
      "form": "ampoule",
      "strength": "1 mg/ml",
      "price": 0.2531
    },
    {
      "name": "Epirubicin",
      "form": "vial",
      "strength": "10 mg",
      "price": 7.23
    },
    {
      "name": "Epirubicin",
      "form": "vial",
      "strength": "50 mg",
      "price": 42
    },
    {
      "name": "Epoetin Alpha",
      "form": "vial",
      "strength": "2000 IU",
      "price": 1.844
    },
    {
      "name": "Epoetin Alpha",
      "form": "vial",
      "strength": "4000 IU",
      "price": 6.5629
    },
    {
      "name": "Epoetin Beta",
      "form": "vial",
      "strength": "50,000 IU",
      "price": 149.6
    },
    {
      "name": "Ergometrine Maleate",
      "form": "ampoule",
      "strength": "0.2 mg/ml",
      "price": 0.2777
    },
    {
      "name": "Ergometrine Maleate",
      "form": "ampoule",
      "strength": "0.5 mg/ml",
      "price": 0.6345
    },
    {
      "name": "Ergometrine Maleate",
      "form": "tab-cap",
      "strength": "0.5 mg",
      "price": 0.0119
    },
    {
      "name": "Ergometrine Maleate",
      "form": "tab-cap",
      "strength": "0.2 mg",
      "price": 0.0129
    },
    {
      "name": "Ergotamine+Caffeine",
      "form": "tab-cap",
      "strength": "1+100 mg",
      "price": 0.2688
    },
    {
      "name": "Erythromycin",
      "form": "suspen",
      "strength": "125 mg/5 ml",
      "price": 0.0092
    },
    {
      "name": "Erythromycin",
      "form": "suspen",
      "strength": "250 mg/5 ml",
      "price": 0.0141
    },
    {
      "name": "Erythromycin",
      "form": "tab-cap",
      "strength": "250 mg",
      "price": 0.0428
    },
    {
      "name": "Erythromycin",
      "form": "tab-cap",
      "strength": "500 mg",
      "price": 0.0738
    },
    {
      "name": "Erythromycin",
      "form": "disc",
      "strength": "15 mcg",
      "price": 0.0888
    },
    {
      "name": "Erythromycin Lactobionate",
      "form": "vial",
      "strength": "500 mg",
      "price": 16.815
    },
    {
      "name": "Estrogens, Conjugated",
      "form": "tab-cap",
      "strength": "0.625 mg",
      "price": 0.2281
    },
    {
      "name": "Ethambutol",
      "form": "tab-cap",
      "strength": "400 mg",
      "price": 0.0358
    },
    {
      "name": "Ethambutol",
      "form": "tab-cap",
      "strength": "100 mg",
      "price": 0.036
    },
    {
      "name": "Ethambutol+Isoniazid",
      "form": "tab-cap",
      "strength": "400mg+150 mg",
      "price": 0.0288
    },
    {
      "name": "Ether, Anaesthetic",
      "form": "solution",
      "strength": "",
      "price": 0.0094
    },
    {
      "name": "Ethinylestradiol+Desogestrel",
      "form": "tab-cap",
      "strength": "0.03+0.15mg",
      "price": 0.7245
    },
    {
      "name": "Ethinylestradiol+Levonorgestrel",
      "form": "tab-cap",
      "strength": "0.03+0.15 mg",
      "price": 0.2167
    },
    {
      "name": "Ethinylestradiol+Norgestrel",
      "form": "tab-cap",
      "strength": "0.05+0.5 mg",
      "price": 0.2741
    },
    {
      "name": "Ethionamide",
      "form": "tab-cap",
      "strength": "250 mg",
      "price": 0.1513
    },
    {
      "name": "Ethionamide",
      "form": "tab-cap",
      "strength": "125 mg",
      "price": 0.1118
    },
    {
      "name": "Ethosuximide",
      "form": "tab-cap",
      "strength": "250 mg",
      "price": 0.1845
    },
    {
      "name": "Etomidate",
      "form": "ampoule",
      "strength": "2 mg/ml",
      "price": 0.3655
    },
    {
      "name": "Etonogestrel",
      "form": "rod",
      "strength": "68 mg/rod",
      "price": 10.0172
    },
    {
      "name": "Etoposide",
      "form": "vial",
      "strength": "20 mg/ml",
      "price": 0.78
    },
    {
      "name": "Etravirine",
      "form": "tab-cap",
      "strength": "100 mg",
      "price": 0.2981
    },
    {
      "name": "Factor VIIa",
      "form": "vial",
      "strength": "100,000 U",
      "price": 1154.8958
    },
    {
      "name": "Factor VIII",
      "form": "vial",
      "strength": "300 IU",
      "price": 75.8056
    },
    {
      "name": "Factor VIII",
      "form": "vial",
      "strength": "1000 IU",
      "price": 238.9703
    },
    {
      "name": "Factor VIII",
      "form": "vial",
      "strength": "500 IU",
      "price": 308.5571
    },
    {
      "name": "Famotidine",
      "form": "tab-cap",
      "strength": "20 mg",
      "price": 0.0062
    },
    {
      "name": "Famotidine",
      "form": "tab-cap",
      "strength": "40 mg",
      "price": 0.0217
    },
    {
      "name": "Fentanyl Citrate",
      "form": "vial",
      "strength": "50 mcg/ml",
      "price": 0.3675
    },
    {
      "name": "Ferrous Salt",
      "form": "tab-cap",
      "strength": "200 mg",
      "price": 0.0109
    },
    {
      "name": "Ferrous Salt",
      "form": "suspen",
      "strength": "20 mg/ml",
      "price": 0.0944
    },
    {
      "name": "Ferrous Salt",
      "form": "solution",
      "strength": "40 mg/ml",
      "price": 0.0471
    },
    {
      "name": "Ferrous Salt+Folic Acid",
      "form": "tab-cap",
      "strength": "200+0.25 mg",
      "price": 0.0052
    },
    {
      "name": "Ferrous Salt+Folic Acid",
      "form": "tab-cap",
      "strength": "200 mg+0.4mg",
      "price": 0.034
    },
    {
      "name": "Ferrous Sulfate",
      "form": "drops",
      "strength": "125 mg/ml",
      "price": 0.0167
    },
    {
      "name": "Filgrastim",
      "form": "vial",
      "strength": "300 mcg/ml",
      "price": 3.9523
    },
    {
      "name": "Filgrastim",
      "form": "syringe",
      "strength": "480mcg/0.8ml",
      "price": 62.8625
    },
    {
      "name": "Filgrastim",
      "form": "vial",
      "strength": "480mcg/1.6ml",
      "price": 94.6576
    },
    {
      "name": "Flucloxacillin",
      "form": "tab-cap",
      "strength": "250 mg",
      "price": 0.0415
    },
    {
      "name": "Fluconazole",
      "form": "vial",
      "strength": "2 mg/ml",
      "price": 0.0463
    },
    {
      "name": "Fluconazole",
      "form": "tab-cap",
      "strength": "50 mg",
      "price": 0.0565
    },
    {
      "name": "Fluconazole",
      "form": "tab-cap",
      "strength": "200 mg",
      "price": 0.0662
    },
    {
      "name": "Fluconazole",
      "form": "tab-cap",
      "strength": "150 mg",
      "price": 0.1285
    },
    {
      "name": "Fluconazole",
      "form": "suspen",
      "strength": "50 mg/5 ml",
      "price": 0.0182
    },
    {
      "name": "Fluconazole",
      "form": "tab-cap",
      "strength": "100 mg",
      "price": 0.0472
    },
    {
      "name": "Fludarabine Phosphate",
      "form": "vial",
      "strength": "50 mg",
      "price": 54.2553
    },
    {
      "name": "Flumazenil",
      "form": "vial",
      "strength": "0.1 mg/ml",
      "price": 1.4565
    },
    {
      "name": "Fluocinolone",
      "form": "cream",
      "strength": "0.025%",
      "price": 0.0813
    },
    {
      "name": "Fluorescein",
      "form": "ampoule",
      "strength": "100 mg/ml",
      "price": 2.4498
    },
    {
      "name": "Fluorescein Sodium",
      "form": "opht strp",
      "strength": "",
      "price": 0.1522
    },
    {
      "name": "Fluorouracil",
      "form": "ampoule",
      "strength": "50 mg/ml",
      "price": 0.2839
    },
    {
      "name": "Fluorouracil",
      "form": "vial",
      "strength": "25 mg/ml",
      "price": 1.1392
    },
    {
      "name": "Fluoxetine",
      "form": "tab-cap",
      "strength": "20 mg",
      "price": 0.0168
    },
    {
      "name": "Fluphenazine Decanoate",
      "form": "ampoule",
      "strength": "25 mg/ml",
      "price": 1.7279
    },
    {
      "name": "Flutamide",
      "form": "tab-cap",
      "strength": "250 mg",
      "price": 0.099
    },
    {
      "name": "Folic Acid",
      "form": "tab-cap",
      "strength": "5 mg",
      "price": 0.0035
    },
    {
      "name": "Folic Acid",
      "form": "tab-cap",
      "strength": "1 mg",
      "price": 0.017
    },
    {
      "name": "Formaldehyde",
      "form": "liquid",
      "strength": "40%",
      "price": 0.007
    },
    {
      "name": "Furosemide",
      "form": "tab-cap",
      "strength": "40 mg",
      "price": 0.0083
    },
    {
      "name": "Furosemide",
      "form": "ampoule",
      "strength": "10 mg/ml",
      "price": 0.0742
    },
    {
      "name": "Furosemide",
      "form": "solution",
      "strength": "10 mg/ml",
      "price": 0.2009
    },
    {
      "name": "Fusidic Acid",
      "form": "cream",
      "strength": "2%",
      "price": 0.1302
    },
    {
      "name": "Gabapentin",
      "form": "tab-cap",
      "strength": "300 mg",
      "price": 0.06
    },
    {
      "name": "Gabapentin",
      "form": "tab-cap",
      "strength": "100 mg",
      "price": 0.1282
    },
    {
      "name": "Gabapentin",
      "form": "tab-cap",
      "strength": "400 mg",
      "price": 0.2956
    },
    {
      "name": "Ganciclovir",
      "form": "vial",
      "strength": "500 mg",
      "price": 48
    },
    {
      "name": "Gemcitabine",
      "form": "vial",
      "strength": "200 mg",
      "price": 16.6145
    },
    {
      "name": "Gemcitabine",
      "form": "vial",
      "strength": "1 g",
      "price": 25.8472
    },
    {
      "name": "Gemfibrozil",
      "form": "tab-cap",
      "strength": "600 mg",
      "price": 0.1
    },
    {
      "name": "Gentamicin",
      "form": "opht drop",
      "strength": "0.3%",
      "price": 0.187
    },
    {
      "name": "Gentamicin",
      "form": "disc",
      "strength": "10 mcg",
      "price": 0.099
    },
    {
      "name": "Gentamicin Sulfate",
      "form": "ampoule",
      "strength": "40 mg/ml",
      "price": 0.0802
    },
    {
      "name": "Gentamicin Sulfate",
      "form": "ampoule",
      "strength": "10 mg/ml",
      "price": 0.0942
    },
    {
      "name": "Gentian Violet",
      "form": "powder",
      "strength": "",
      "price": 0.0208
    },
    {
      "name": "Glibenclamide",
      "form": "tab-cap",
      "strength": "5 mg",
      "price": 0.0083
    },
    {
      "name": "Gliclazide",
      "form": "tab-cap",
      "strength": "30 mg",
      "price": 0.035
    },
    {
      "name": "Gliclazide",
      "form": "tab-cap",
      "strength": "80 mg",
      "price": 0.0455
    },
    {
      "name": "Glimepiride",
      "form": "tab-cap",
      "strength": "2 mg",
      "price": 0.04
    },
    {
      "name": "Glimepiride",
      "form": "tab-cap",
      "strength": "4 mg",
      "price": 0.0469
    },
    {
      "name": "Glucagon",
      "form": "vial",
      "strength": "1 mg",
      "price": 25.7458
    },
    {
      "name": "Glutaraldehyde",
      "form": "solution",
      "strength": "2%",
      "price": 0.0074
    },
    {
      "name": "Glycerin",
      "form": "suppos",
      "strength": "2 g",
      "price": 0.1058
    },
    {
      "name": "Glycerin",
      "form": "suppos",
      "strength": "4 g",
      "price": 0.1075
    },
    {
      "name": "Glycerin",
      "form": "suppos",
      "strength": "1 g",
      "price": 0.2051
    },
    {
      "name": "Glyceryl Trinitrate",
      "form": "nasal spr",
      "strength": "0.4 mg/dose",
      "price": 0.0298
    },
    {
      "name": "Glyceryl Trinitrate",
      "form": "tab-cap",
      "strength": "0.5 mg",
      "price": 0.1634
    },
    {
      "name": "Glyceryl Trinitrate",
      "form": "ampoule",
      "strength": "5 mg/ml",
      "price": 0.7436
    },
    {
      "name": "Granisetron",
      "form": "tab-cap",
      "strength": "1 mg",
      "price": 0.1582
    },
    {
      "name": "Granisetron",
      "form": "ampoule",
      "strength": "1 mg/ml",
      "price": 6.5
    },
    {
      "name": "Griseofulvin",
      "form": "tab-cap",
      "strength": "125 mg",
      "price": 0.0231
    },
    {
      "name": "Griseofulvin",
      "form": "tab-cap",
      "strength": "500 mg",
      "price": 0.1201
    },
    {
      "name": "Griseofulvin",
      "form": "tab-cap",
      "strength": "250 mg",
      "price": 0.0358
    },
    {
      "name": "Haloperidol",
      "form": "tab-cap",
      "strength": "10 mg",
      "price": 0.0155
    },
    {
      "name": "Haloperidol",
      "form": "tab-cap",
      "strength": "5 mg",
      "price": 0.02
    },
    {
      "name": "Haloperidol",
      "form": "tab-cap",
      "strength": "1.5-2 mg",
      "price": 0.026
    },
    {
      "name": "Haloperidol",
      "form": "syrup",
      "strength": "2 mg/ml",
      "price": 0.0311
    },
    {
      "name": "Haloperidol",
      "form": "tab-cap",
      "strength": "0.5 mg",
      "price": 0.0894
    },
    {
      "name": "Haloperidol",
      "form": "ampoule",
      "strength": "5 mg/ml",
      "price": 0.4723
    },
    {
      "name": "Halothane",
      "form": "liquid",
      "strength": "",
      "price": 0.1855
    },
    {
      "name": "Heparin",
      "form": "ampoule",
      "strength": "1000 IU/ml",
      "price": 0.2159
    },
    {
      "name": "Heparin",
      "form": "ampoule",
      "strength": "5000 IU/ml",
      "price": 0.448
    },
    {
      "name": "Human Chorionic Gonadotrophin",
      "form": "ampoule",
      "strength": "5000 IU",
      "price": 11.8309
    },
    {
      "name": "Human Menopausal Gonadotrophin",
      "form": "vial",
      "strength": "75 IU",
      "price": 17.5
    },
    {
      "name": "Hydralazine",
      "form": "tab-cap",
      "strength": "25 mg",
      "price": 0.0475
    },
    {
      "name": "Hydralazine",
      "form": "tab-cap",
      "strength": "50 mg",
      "price": 0.0557
    },
    {
      "name": "Hydralazine",
      "form": "ampoule",
      "strength": "20 mg",
      "price": 4.16
    },
    {
      "name": "Hydrochlorothiazide",
      "form": "tab-cap",
      "strength": "50 mg",
      "price": 0.0041
    },
    {
      "name": "Hydrochlorothiazide",
      "form": "tab-cap",
      "strength": "12.5 mg",
      "price": 0.0087
    },
    {
      "name": "Hydrochlorothiazide",
      "form": "tab-cap",
      "strength": "25 mg",
      "price": 0.0094
    },
    {
      "name": "Hydrochlorothiazide+Triamterene",
      "form": "tab-cap",
      "strength": "25 mg+50 mg",
      "price": 0.021
    },
    {
      "name": "Hydrocortisone",
      "form": "cream",
      "strength": "1%",
      "price": 0.0529
    },
    {
      "name": "Hydrocortisone",
      "form": "tab-cap",
      "strength": "10 mg",
      "price": 0.0903
    },
    {
      "name": "Hydrocortisone",
      "form": "ointment",
      "strength": "1%",
      "price": 0.1003
    },
    {
      "name": "Hydrocortisone",
      "form": "vial",
      "strength": "100 mg",
      "price": 0.5517
    },
    {
      "name": "Hydrocortisone",
      "form": "opht drop",
      "strength": "1%",
      "price": 0.0988
    },
    {
      "name": "Hydrogen Peroxide",
      "form": "solution",
      "strength": "6%",
      "price": 0.0012
    },
    {
      "name": "Hydrogen Peroxide",
      "form": "solution",
      "strength": "3%",
      "price": 0.0023
    },
    {
      "name": "Hydroxycarbamide",
      "form": "tab-cap",
      "strength": "500 mg",
      "price": 0.118
    },
    {
      "name": "Hydroxychloroquine",
      "form": "tab-cap",
      "strength": "300 mg",
      "price": 0.3532
    },
    {
      "name": "Hydroxychloroquine Sulfate",
      "form": "tab-cap",
      "strength": "200 mg",
      "price": 0.124
    },
    {
      "name": "Hydroxyzine",
      "form": "tab-cap",
      "strength": "25 mg",
      "price": 0.0073
    },
    {
      "name": "Hydroxyzine",
      "form": "syrup",
      "strength": "10 mg/5 ml",
      "price": 0.0093
    },
    {
      "name": "Hyoscine Butylbromide",
      "form": "tab-cap",
      "strength": "10 mg",
      "price": 0.0344
    },
    {
      "name": "Hyoscine Butylbromide",
      "form": "ampoule",
      "strength": "10 mg/ml",
      "price": 0.1207
    },
    {
      "name": "Hyoscine Butylbromide",
      "form": "ampoule",
      "strength": "20 mg/ml",
      "price": 0.1835
    },
    {
      "name": "Hyoscine Butylbromide",
      "form": "tab-cap",
      "strength": "20 mg",
      "price": 0.0644
    },
    {
      "name": "Hypromellose",
      "form": "opht drop",
      "strength": "0.3%",
      "price": 0.117
    },
    {
      "name": "Ibuprofen",
      "form": "suspen",
      "strength": "100 mg/5 ml",
      "price": 0.0107
    },
    {
      "name": "Ibuprofen",
      "form": "tab-cap",
      "strength": "400 mg",
      "price": 0.0148
    },
    {
      "name": "Ibuprofen",
      "form": "tab-cap",
      "strength": "200 mg",
      "price": 0.0193
    },
    {
      "name": "Ibuprofen",
      "form": "tab-cap",
      "strength": "600 mg",
      "price": 0.0398
    },
    {
      "name": "Ichthammol",
      "form": "ointment",
      "strength": "20%",
      "price": 0.0374
    },
    {
      "name": "Idarubicin",
      "form": "vial",
      "strength": "10 mg",
      "price": 83.0288
    },
    {
      "name": "Idarubicin",
      "form": "vial",
      "strength": "5 mg",
      "price": 140
    },
    {
      "name": "Ifosfamide",
      "form": "vial",
      "strength": "1 g",
      "price": 8.595
    },
    {
      "name": "Ifosfamide",
      "form": "vial",
      "strength": "500 mg",
      "price": 25.0054
    },
    {
      "name": "Ifosfamide",
      "form": "vial",
      "strength": "2 g",
      "price": 39.0245
    },
    {
      "name": "Imatinib",
      "form": "tab-cap",
      "strength": "100 mg",
      "price": 0.7446
    },
    {
      "name": "Imatinib",
      "form": "tab-cap",
      "strength": "400 mg",
      "price": 28.1493
    },
    {
      "name": "Imipenem+Cilastatin",
      "form": "vial",
      "strength": "500mg+500mg",
      "price": 5.1105
    },
    {
      "name": "Imipramine HCl",
      "form": "tab-cap",
      "strength": "10 mg",
      "price": 0.0217
    },
    {
      "name": "Imipramine HCl",
      "form": "tab-cap",
      "strength": "25 mg",
      "price": 0.0309
    },
    {
      "name": "Immunoglobulin, Anti-Hepatitis B",
      "form": "ampoule",
      "strength": "200 U",
      "price": 32.72
    },
    {
      "name": "Immunoglobulin, Anti-Tetanus",
      "form": "vial",
      "strength": "250 IU",
      "price": 29.28
    },
    {
      "name": "Immunoglobulin, Varicella Zoster",
      "form": "vial",
      "strength": "125 IU/ml",
      "price": 125.65
    },
    {
      "name": "Indinavir",
      "form": "tab-cap",
      "strength": "400 mg",
      "price": 0.2917
    },
    {
      "name": "Indometacin",
      "form": "tab-cap",
      "strength": "25 mg",
      "price": 0.0076
    },
    {
      "name": "Indometacin",
      "form": "suppos",
      "strength": "100 mg",
      "price": 0.0995
    },
    {
      "name": "Insulin, Isophane",
      "form": "vial",
      "strength": "40 IU/ml",
      "price": 0.26
    },
    {
      "name": "Insulin, Isophane",
      "form": "vial",
      "strength": "100 IU/ml",
      "price": 0.3603
    },
    {
      "name": "Insulin, Neut. Sol/Isophane 30/70",
      "form": "vial",
      "strength": "100 IU/ml",
      "price": 0.3603
    },
    {
      "name": "Insulin, Neutral Soluble",
      "form": "vial",
      "strength": "40 IU/ml",
      "price": 0.26
    },
    {
      "name": "Insulin, Neutral Soluble",
      "form": "vial",
      "strength": "100 IU/ml",
      "price": 0.4919
    },
    {
      "name": "Insulin, Zinc Susp",
      "form": "vial",
      "strength": "100 IU/ml",
      "price": 1.114
    },
    {
      "name": "Iohexol",
      "form": "vial",
      "strength": "350 mg/ml",
      "price": 0.2198
    },
    {
      "name": "Ipratropium Bromide",
      "form": "inhaler",
      "strength": "20 mcg/dose",
      "price": 0.0328
    },
    {
      "name": "Ipratropium Bromide",
      "form": "respsol",
      "strength": "250 mcg/ml",
      "price": 0.4086
    },
    {
      "name": "Irbesartan",
      "form": "tab-cap",
      "strength": "150 mg",
      "price": 0.24
    },
    {
      "name": "Iron Dextran",
      "form": "ampoule",
      "strength": "50 mg/ml",
      "price": 1.4261
    },
    {
      "name": "Isoflurane",
      "form": "liquid",
      "strength": "",
      "price": 0.2182
    },
    {
      "name": "Isoniazid",
      "form": "tab-cap",
      "strength": "100 mg",
      "price": 0.0139
    },
    {
      "name": "Isoniazid",
      "form": "elixir",
      "strength": "50 mg/5 ml",
      "price": 0.0319
    },
    {
      "name": "Isoniazid",
      "form": "tab-cap",
      "strength": "300 mg",
      "price": 0.0472
    },
    {
      "name": "Isoniazid",
      "form": "tab-cap",
      "strength": "100 mg",
      "price": 0.0093
    },
    {
      "name": "Isosorbide Dinitrate",
      "form": "tab-cap",
      "strength": "10 mg",
      "price": 0.0263
    },
    {
      "name": "Isosorbide Dinitrate",
      "form": "tab-cap",
      "strength": "5 mg",
      "price": 0.0407
    },
    {
      "name": "Isosorbide Dinitrate",
      "form": "tab-cap",
      "strength": "20 mg",
      "price": 0.0707
    },
    {
      "name": "Isosorbide Dinitrate",
      "form": "tab-cap",
      "strength": "5 mg",
      "price": 0.0771
    },
    {
      "name": "Isosorbide Mononitrate",
      "form": "tab-cap",
      "strength": "20 mg",
      "price": 0.1769
    },
    {
      "name": "Itraconazole",
      "form": "tab-cap",
      "strength": "100 mg",
      "price": 0.1606
    },
    {
      "name": "IUD (Copper)",
      "form": "iud",
      "strength": "",
      "price": 3
    },
    {
      "name": "IUD (Levonorgestrel)",
      "form": "iud",
      "strength": "52 mg",
      "price": 122.46
    },
    {
      "name": "Kanamycin Sulfate",
      "form": "vial",
      "strength": "1 g",
      "price": 1.1851
    },
    {
      "name": "Ketamine",
      "form": "vial",
      "strength": "50 mg/ml",
      "price": 0.1654
    },
    {
      "name": "Ketamine",
      "form": "vial",
      "strength": "10 mg/ml",
      "price": 0.2206
    },
    {
      "name": "Ketoconazole",
      "form": "cream",
      "strength": "2%",
      "price": 0.0354
    },
    {
      "name": "Ketoconazole",
      "form": "tab-cap",
      "strength": "200 mg",
      "price": 0.0421
    },
    {
      "name": "Labetalol",
      "form": "ampoule",
      "strength": "5 mg/ml",
      "price": 0.117
    },
    {
      "name": "Lactulose",
      "form": "solution",
      "strength": "3.35 g/5 ml",
      "price": 0.0118
    },
    {
      "name": "Lamivudine",
      "form": "solution",
      "strength": "10 mg/ml",
      "price": 0.0099
    },
    {
      "name": "Lamivudine",
      "form": "tab-cap",
      "strength": "150 mg",
      "price": 0.0569
    },
    {
      "name": "Lamivudine",
      "form": "tab-cap",
      "strength": "300 mg",
      "price": 0.0587
    },
    {
      "name": "Lamivudine/Zidovudine + Efavirenz",
      "form": "tab-cap",
      "strength": "150/300+600m",
      "price": 0.1811
    },
    {
      "name": "Lamivudine/Zidovudine + Nevirapine",
      "form": "tab-cap",
      "strength": "150/300+200m",
      "price": 0.1446
    },
    {
      "name": "Lamivudine/Zidovudine+Abacavir",
      "form": "tab-cap",
      "strength": "",
      "price": 0.3894
    },
    {
      "name": "Lamivudine+Stavudine",
      "form": "tab-cap",
      "strength": "30 mg+6 mg",
      "price": 0.0332
    },
    {
      "name": "Lamivudine+Stavudine",
      "form": "tab-cap",
      "strength": "60+12 mg",
      "price": 0.0577
    },
    {
      "name": "Lamivudine+Stavudine",
      "form": "tab-cap",
      "strength": "150 mg+30 mg",
      "price": 0.073
    },
    {
      "name": "Lamivudine+Stavudine",
      "form": "tab-cap",
      "strength": "150 mg+40 mg",
      "price": 0.1584
    },
    {
      "name": "Lamivudine+Stavudine+Nevirapine",
      "form": "tab-cap",
      "strength": "150+30+200mg",
      "price": 0.1533
    },
    {
      "name": "Lamivudine+Stavudine+Nevirapine",
      "form": "tab-cap",
      "strength": "30+6+50 mg",
      "price": 0.0399
    },
    {
      "name": "Lamivudine+Stavudine+Nevirapine",
      "form": "tab-cap",
      "strength": "60+12+100 mg",
      "price": 0.0752
    },
    {
      "name": "Lamivudine+Stavudine+Nevirapine",
      "form": "tab-cap",
      "strength": "150+40+200mg",
      "price": 0.2949
    },
    {
      "name": "Lamivudine+Tenofovir Df",
      "form": "tab-cap",
      "strength": "300+300 mg",
      "price": 0.1759
    },
    {
      "name": "Lamivudine+Zidovudine",
      "form": "tab-cap",
      "strength": "30 mg+60 mg",
      "price": 0.0471
    },
    {
      "name": "Lamivudine+Zidovudine",
      "form": "tab-cap",
      "strength": "150mg+300mg",
      "price": 0.1412
    },
    {
      "name": "Lamivudine+Zidovudine",
      "form": "tab-cap",
      "strength": "30+60 mg",
      "price": 0.0362
    },
    {
      "name": "Lamivudine+Zidovudine+Abacavir",
      "form": "tab-cap",
      "strength": "",
      "price": 0.4486
    },
    {
      "name": "Lamivudine+Zidovudine+Nevirapine",
      "form": "tab-cap",
      "strength": "3TC+AZT+NVP",
      "price": 0.3157
    },
    {
      "name": "Lamivudine+Zidovudine+Nevirapine",
      "form": "tab-cap",
      "strength": "30+60+50 mg",
      "price": 0.0643
    },
    {
      "name": "Lamivudine+Zidovudine+Nevirapine",
      "form": "tab-cap",
      "strength": "30+60+50 mg",
      "price": 0.0653
    },
    {
      "name": "Lamotrigine",
      "form": "tab-cap",
      "strength": "25 mg",
      "price": 0.0096
    },
    {
      "name": "Lamotrigine",
      "form": "tab-cap",
      "strength": "100 mg",
      "price": 0.0385
    },
    {
      "name": "Lamotrigine",
      "form": "tab-cap",
      "strength": "50 mg",
      "price": 0.1462
    },
    {
      "name": "Lancet, Blood",
      "form": "each",
      "strength": "",
      "price": 0.0171
    },
    {
      "name": "Latanoprost",
      "form": "opht drop",
      "strength": "0.005%",
      "price": 0.8965
    },
    {
      "name": "Letrozole",
      "form": "tab-cap",
      "strength": "2.5 mg",
      "price": 3.53
    },
    {
      "name": "Levamisole",
      "form": "tab-cap",
      "strength": "50 mg",
      "price": 0.0106
    },
    {
      "name": "Levamisole",
      "form": "tab-cap",
      "strength": "40 mg",
      "price": 0.0157
    },
    {
      "name": "Levodopa+Carbidopa",
      "form": "tab-cap",
      "strength": "100+25 mg",
      "price": 0.078
    },
    {
      "name": "Levodopa+Carbidopa",
      "form": "tab-cap",
      "strength": "250+25 mg",
      "price": 0.1
    },
    {
      "name": "Levofloxacin",
      "form": "vial",
      "strength": "5 mg/ml",
      "price": 0.0087
    },
    {
      "name": "Levofloxacin",
      "form": "tab-cap",
      "strength": "500 mg",
      "price": 0.0867
    },
    {
      "name": "Levofloxacin",
      "form": "tab-cap",
      "strength": "250 mg",
      "price": 0.2357
    },
    {
      "name": "Levonorgestrel",
      "form": "tab-cap",
      "strength": "0.03 mg",
      "price": 0.8062
    },
    {
      "name": "Levonorgestrel",
      "form": "tab-cap",
      "strength": "1.5 mg",
      "price": 1.6485
    },
    {
      "name": "Levonorgestrel",
      "form": "rod",
      "strength": "75 mg/rod",
      "price": 4.792
    },
    {
      "name": "Levonorgestrel",
      "form": "tab-cap",
      "strength": "0.75 mg",
      "price": 0.2341
    },
    {
      "name": "Levothyroxine",
      "form": "tab-cap",
      "strength": "50 mcg",
      "price": 0.0138
    },
    {
      "name": "Levothyroxine",
      "form": "tab-cap",
      "strength": "100 mcg",
      "price": 0.0194
    },
    {
      "name": "Levothyroxine",
      "form": "tab-cap",
      "strength": "200 mcg",
      "price": 0.02
    },
    {
      "name": "Lidocaine HCl",
      "form": "vial",
      "strength": "2%",
      "price": 0.0272
    },
    {
      "name": "Lidocaine HCl",
      "form": "vial",
      "strength": "1%",
      "price": 0.0288
    },
    {
      "name": "Lidocaine HCl",
      "form": "gel",
      "strength": "2%",
      "price": 0.1639
    },
    {
      "name": "Lidocaine HCl + Epinephrine Dental",
      "form": "crtdgs",
      "strength": "2%+1:80000",
      "price": 0.2334
    },
    {
      "name": "Lidocaine HCl 5% (In Dextrose 7.5%)",
      "form": "vial",
      "strength": "",
      "price": 3.68
    },
    {
      "name": "Lidocaine+Epinephrine",
      "form": "vial",
      "strength": "2%+1:100000",
      "price": 0.0424
    },
    {
      "name": "Lidocaine+Epinephrine",
      "form": "vial",
      "strength": "1%+1:100000",
      "price": 0.0973
    },
    {
      "name": "Linezolid",
      "form": "vial",
      "strength": "2 mg/ml",
      "price": 0.1035
    },
    {
      "name": "Linezolid",
      "form": "tab-cap",
      "strength": "600 mg",
      "price": 6.9
    },
    {
      "name": "Lisinopril",
      "form": "tab-cap",
      "strength": "10 mg",
      "price": 0.0353
    },
    {
      "name": "Lisinopril",
      "form": "tab-cap",
      "strength": "5 mg",
      "price": 0.06
    },
    {
      "name": "Lisinopril",
      "form": "tab-cap",
      "strength": "20 mg",
      "price": 0.0707
    },
    {
      "name": "Lithium Carbonate",
      "form": "tab-cap",
      "strength": "300 mg",
      "price": 0.041
    },
    {
      "name": "Loperamide HCl",
      "form": "tab-cap",
      "strength": "2 mg",
      "price": 0.0275
    },
    {
      "name": "Lopinavir+Ritonavir",
      "form": "tab-cap",
      "strength": "100 mg+25 mg",
      "price": 0.08
    },
    {
      "name": "Lopinavir+Ritonavir",
      "form": "solution",
      "strength": "80+20 mg/ml",
      "price": 0.0846
    },
    {
      "name": "Lopinavir+Ritonavir",
      "form": "tab-cap",
      "strength": "200 mg+50 mg",
      "price": 0.207
    },
    {
      "name": "Lopinavir+Ritonavir",
      "form": "tab-cap",
      "strength": "133.3+33.3mg",
      "price": 0.2398
    },
    {
      "name": "Loratadine",
      "form": "syrup",
      "strength": "5 mg/5 ml",
      "price": 0.0073
    },
    {
      "name": "Loratadine",
      "form": "tab-cap",
      "strength": "10 mg",
      "price": 0.011
    },
    {
      "name": "Lorazepam",
      "form": "tab-cap",
      "strength": "2 mg",
      "price": 0.0085
    },
    {
      "name": "Lorazepam",
      "form": "tab-cap",
      "strength": "1 mg",
      "price": 0.0815
    },
    {
      "name": "Losartan",
      "form": "tab-cap",
      "strength": "50 mg",
      "price": 0.0202
    },
    {
      "name": "Lovastatin",
      "form": "tab-cap",
      "strength": "20 mg",
      "price": 0.0156
    },
    {
      "name": "Lubricating Jelly",
      "form": "ointment",
      "strength": "",
      "price": 0.0145
    },
    {
      "name": "Lynestrenol",
      "form": "tab-cap",
      "strength": "0.5 mg",
      "price": 0.4305
    },
    {
      "name": "Magnesium Sulfate",
      "form": "powder",
      "strength": "",
      "price": 0.0015
    },
    {
      "name": "Magnesium Sulfate",
      "form": "vial",
      "strength": "20%",
      "price": 0.0186
    },
    {
      "name": "Magnesium Sulfate",
      "form": "vial",
      "strength": "50%",
      "price": 0.291
    },
    {
      "name": "Magnesium Trisilicate Compound",
      "form": "tab-cap",
      "strength": "",
      "price": 0.0053
    },
    {
      "name": "Mannitol",
      "form": "solution",
      "strength": "20%",
      "price": 0.0057
    },
    {
      "name": "Mebendazole",
      "form": "suspen",
      "strength": "100 mg/5 ml",
      "price": 0.0103
    },
    {
      "name": "Mebendazole",
      "form": "tab-cap",
      "strength": "100 mg",
      "price": 0.0117
    },
    {
      "name": "Mebendazole",
      "form": "tab-cap",
      "strength": "500 mg",
      "price": 0.2355
    },
    {
      "name": "Mebendazole",
      "form": "tab-cap",
      "strength": "100 mg",
      "price": 0.0067
    },
    {
      "name": "Mebendazole",
      "form": "tab-cap",
      "strength": "500 mg",
      "price": 0.0334
    },
    {
      "name": "Medroxyprogesterone",
      "form": "tab-cap",
      "strength": "5 mg",
      "price": 0.0888
    },
    {
      "name": "Medroxyprogesterone",
      "form": "tab-cap",
      "strength": "10 mg",
      "price": 0.1997
    },
    {
      "name": "Medroxyprogesterone Acetate",
      "form": "vial",
      "strength": "150 mg/ml",
      "price": 0.7912
    },
    {
      "name": "Mefenamic Acid",
      "form": "tab-cap",
      "strength": "500 mg",
      "price": 0.0184
    },
    {
      "name": "Mefenamic Acid",
      "form": "tab-cap",
      "strength": "250 mg",
      "price": 0.023
    },
    {
      "name": "Mefloquine",
      "form": "tab-cap",
      "strength": "250 mg",
      "price": 0.899
    },
    {
      "name": "Meglumine Antimonate",
      "form": "ampoule",
      "strength": "30-45%",
      "price": 0.864
    },
    {
      "name": "Meloxicam",
      "form": "tab-cap",
      "strength": "7.5 mg",
      "price": 0.0146
    },
    {
      "name": "Melphalan",
      "form": "tab-cap",
      "strength": "2 mg",
      "price": 1.7313
    },
    {
      "name": "Melphalan",
      "form": "vial",
      "strength": "50 mg",
      "price": 47.1707
    },
    {
      "name": "Mercaptopurine",
      "form": "tab-cap",
      "strength": "50 mg",
      "price": 1.943
    },
    {
      "name": "Meropenem",
      "form": "vial",
      "strength": "500 mg",
      "price": 6.7545
    },
    {
      "name": "Meropenem",
      "form": "vial",
      "strength": "1 g",
      "price": 9.255
    },
    {
      "name": "Mesna",
      "form": "ampoule",
      "strength": "100 mg/ml",
      "price": 0.48
    },
    {
      "name": "Mesna",
      "form": "ampoule",
      "strength": "400 mg",
      "price": 3.4976
    },
    {
      "name": "Metformin HCl",
      "form": "tab-cap",
      "strength": "850 mg",
      "price": 0.014
    },
    {
      "name": "Metformin HCl",
      "form": "tab-cap",
      "strength": "500 mg",
      "price": 0.0262
    },
    {
      "name": "Methadone",
      "form": "tab-cap",
      "strength": "5 mg",
      "price": 5
    },
    {
      "name": "Methotrexate Sodium",
      "form": "tab-cap",
      "strength": "2.5 mg",
      "price": 0.069
    },
    {
      "name": "Methotrexate Sodium",
      "form": "vial",
      "strength": "25 mg/ml",
      "price": 2.9775
    },
    {
      "name": "Methyldopa",
      "form": "tab-cap",
      "strength": "250 mg",
      "price": 0.0436
    },
    {
      "name": "Methyldopa",
      "form": "tab-cap",
      "strength": "500 mg",
      "price": 0.12
    },
    {
      "name": "Methylergometrine Maleate",
      "form": "ampoule",
      "strength": "0.2 mg/ml",
      "price": 0.186
    },
    {
      "name": "Methylphenidate Hydrochloride",
      "form": "tab-cap",
      "strength": "10 mg",
      "price": 0.0543
    },
    {
      "name": "Methylprednisolone",
      "form": "vial",
      "strength": "500 mg",
      "price": 5.8527
    },
    {
      "name": "Methylprednisolone",
      "form": "vial",
      "strength": "1 g",
      "price": 12.6473
    },
    {
      "name": "Methylprednisolone Acetate",
      "form": "vial",
      "strength": "40 mg",
      "price": 1.559
    },
    {
      "name": "Metoclopramide HCl",
      "form": "syrup",
      "strength": "5 mg/5 ml",
      "price": 0.0083
    },
    {
      "name": "Metoclopramide HCl",
      "form": "tab-cap",
      "strength": "10 mg",
      "price": 0.0174
    },
    {
      "name": "Metoclopramide HCl",
      "form": "ampoule",
      "strength": "5 mg/ml",
      "price": 0.0497
    },
    {
      "name": "Metoclopramide HCl",
      "form": "drops",
      "strength": "4 mg/ml",
      "price": 0.0982
    },
    {
      "name": "Metoprolol",
      "form": "tab-cap",
      "strength": "100 mg",
      "price": 0.02
    },
    {
      "name": "Metronidazole",
      "form": "vial",
      "strength": "5 mg/ml",
      "price": 0.0045
    },
    {
      "name": "Metronidazole",
      "form": "tab-cap",
      "strength": "200-250 mg",
      "price": 0.0053
    },
    {
      "name": "Metronidazole",
      "form": "syrup",
      "strength": "200 mg/5 ml",
      "price": 0.0069
    },
    {
      "name": "Metronidazole",
      "form": "tab-cap",
      "strength": "400-500 mg",
      "price": 0.017
    },
    {
      "name": "Metronidazole",
      "form": "suppos",
      "strength": "500 mg",
      "price": 0.2054
    },
    {
      "name": "Metronidazole",
      "form": "suppos",
      "strength": "1 g",
      "price": 0.6624
    },
    {
      "name": "Metronidazole",
      "form": "syrup",
      "strength": "125 mg/5 ml",
      "price": 0.0069
    },
    {
      "name": "Metronidazole",
      "form": "pessary",
      "strength": "500 mg",
      "price": 0.0344
    },
    {
      "name": "Miconazole",
      "form": "oral gel",
      "strength": "25 mg/ml",
      "price": 0.0991
    },
    {
      "name": "Miconazole Nitrate",
      "form": "cream",
      "strength": "2%",
      "price": 0.0077
    },
    {
      "name": "Miconazole Nitrate",
      "form": "tab-cap",
      "strength": "10 mg",
      "price": 0.2491
    },
    {
      "name": "Midazolam",
      "form": "ampoule",
      "strength": "1 mg/ml",
      "price": 0.0614
    },
    {
      "name": "Midazolam",
      "form": "ampoule",
      "strength": "5 mg/ml",
      "price": 0.22
    },
    {
      "name": "Midazolam",
      "form": "tab-cap",
      "strength": "15 mg",
      "price": 0.2922
    },
    {
      "name": "Minoxidil",
      "form": "tab-cap",
      "strength": "10 mg",
      "price": 0.4696
    },
    {
      "name": "Misoprostol",
      "form": "tab-cap",
      "strength": "200 mcg",
      "price": 0.2269
    },
    {
      "name": "Misoprostol",
      "form": "tab-cap",
      "strength": "100 mcg",
      "price": 0.2046
    },
    {
      "name": "Mitomycin",
      "form": "vial",
      "strength": "5 mg",
      "price": 21.5
    },
    {
      "name": "Morphine",
      "form": "tab-cap",
      "strength": "10 mg",
      "price": 0.1513
    },
    {
      "name": "Morphine Sulfate",
      "form": "tab-cap",
      "strength": "30 mg",
      "price": 0.44
    },
    {
      "name": "Morphine Sulfate",
      "form": "tab-cap",
      "strength": "60 mg",
      "price": 0.5103
    },
    {
      "name": "Morphine Sulfate",
      "form": "ampoule",
      "strength": "15 mg/ml",
      "price": 0.618
    },
    {
      "name": "Morphine Sulfate",
      "form": "tab-cap",
      "strength": "100 mg",
      "price": 0.8054
    },
    {
      "name": "Morphine Sulfate",
      "form": "ampoule",
      "strength": "10 mg/ml",
      "price": 1.063
    },
    {
      "name": "Morphine Sulfate",
      "form": "tab-cap",
      "strength": "10 mg",
      "price": 0.9302
    },
    {
      "name": "Mosquito Net, 1-Person, LLIN",
      "form": "net",
      "strength": "",
      "price": 6.1654
    },
    {
      "name": "Mosquito Net, 2-Person, Impregnated",
      "form": "net",
      "strength": "",
      "price": 5.394
    },
    {
      "name": "Mosquito Net, 2-Person, LLIN",
      "form": "net",
      "strength": "",
      "price": 3.4036
    },
    {
      "name": "Mosquito Net, Family, Impregnated",
      "form": "net",
      "strength": "",
      "price": 5.343
    },
    {
      "name": "Mosquito Net, Family, LLIN",
      "form": "net",
      "strength": "",
      "price": 6.9
    },
    {
      "name": "Mosquito Net, Family, Non-Impreg.",
      "form": "net",
      "strength": "",
      "price": 1.14
    },
    {
      "name": "Mosquito Net, Impregnated",
      "form": "net",
      "strength": "",
      "price": 4.485
    },
    {
      "name": "Mosquito Net, Impregnated",
      "form": "net",
      "strength": "",
      "price": 5.46
    },
    {
      "name": "Mosquito Net, LLIN",
      "form": "net",
      "strength": "",
      "price": 5.0879
    },
    {
      "name": "Moxifloxacin",
      "form": "tab-cap",
      "strength": "400 mg",
      "price": 1.6423
    },
    {
      "name": "Mupirocin",
      "form": "cream",
      "strength": "2%",
      "price": 0.1448
    },
    {
      "name": "Mupirocin",
      "form": "ointment",
      "strength": "2%",
      "price": 0.1673
    },
    {
      "name": "Mycophenolate Mofetil",
      "form": "tab-cap",
      "strength": "250 mg",
      "price": 0.3521
    },
    {
      "name": "Nalbufine Chlorhydrate",
      "form": "vial",
      "strength": "10 mg/ml",
      "price": 0.98
    },
    {
      "name": "Nalidixic Acid",
      "form": "tab-cap",
      "strength": "500 mg",
      "price": 0.1215
    },
    {
      "name": "Naloxone HCl",
      "form": "vial",
      "strength": "0.02 mg/ml",
      "price": 0.1903
    },
    {
      "name": "Naloxone HCl",
      "form": "ampoule",
      "strength": "0.4 mg/ml",
      "price": 0.7039
    },
    {
      "name": "Naproxen",
      "form": "tab-cap",
      "strength": "250 mg",
      "price": 0.0557
    },
    {
      "name": "Naproxen",
      "form": "tab-cap",
      "strength": "500 mg",
      "price": 0.0873
    },
    {
      "name": "Natamycin",
      "form": "opht drop",
      "strength": "50 mg/ml",
      "price": 4.8903
    },
    {
      "name": "Nelfinavir",
      "form": "tab-cap",
      "strength": "250 mg",
      "price": 0.8
    },
    {
      "name": "Nelfinavir",
      "form": "powder",
      "strength": "50 mg/g",
      "price": 0.2956
    },
    {
      "name": "Neomycin+Bacitracin",
      "form": "ointment",
      "strength": "5mg+500IU/g",
      "price": 0.0414
    },
    {
      "name": "Neostigmine Methylsulfate",
      "form": "ampoule",
      "strength": "0.5 mg/ml",
      "price": 0.1978
    },
    {
      "name": "Neostigmine Methylsulfate",
      "form": "ampoule",
      "strength": "2.5 mg/ml",
      "price": 1.3942
    },
    {
      "name": "Nevirapine",
      "form": "suspen",
      "strength": "50 mg/5 ml",
      "price": 0.0054
    },
    {
      "name": "Nevirapine",
      "form": "tab-cap",
      "strength": "200 mg",
      "price": 0.0487
    },
    {
      "name": "Niclosamide",
      "form": "tab-cap",
      "strength": "500 mg",
      "price": 0.029
    },
    {
      "name": "Niclosamide",
      "form": "tab-cap",
      "strength": "500 mg",
      "price": 0.0607
    },
    {
      "name": "Nifedipine",
      "form": "tab-cap",
      "strength": "10 mg",
      "price": 0.0294
    },
    {
      "name": "Nifedipine",
      "form": "tab-cap",
      "strength": "20 mg",
      "price": 0.0297
    },
    {
      "name": "Nifedipine",
      "form": "tab-cap",
      "strength": "20 mg",
      "price": 0.0387
    },
    {
      "name": "Nifedipine",
      "form": "tab-cap",
      "strength": "30 mg",
      "price": 0.0629
    },
    {
      "name": "Nifedipine",
      "form": "tab-cap",
      "strength": "10 mg",
      "price": 0.0142
    },
    {
      "name": "Nimodipine",
      "form": "tab-cap",
      "strength": "30 mg",
      "price": 0.0285
    },
    {
      "name": "Nitrofurantoin",
      "form": "suspen",
      "strength": "25 mg/5 ml",
      "price": 0.0084
    },
    {
      "name": "Nitrofurantoin",
      "form": "tab-cap",
      "strength": "50 mg",
      "price": 0.0285
    },
    {
      "name": "Nitrofurantoin",
      "form": "tab-cap",
      "strength": "100 mg",
      "price": 0.072
    },
    {
      "name": "Nitrofurazone",
      "form": "ointment",
      "strength": "0.2%",
      "price": 0.0391
    },
    {
      "name": "Norepinephrine",
      "form": "vial",
      "strength": "1 mg/ml",
      "price": 0.2093
    },
    {
      "name": "Norethisterone",
      "form": "tab-cap",
      "strength": "5 mg",
      "price": 0.1996
    },
    {
      "name": "Norethisterone",
      "form": "ampoule",
      "strength": "200 mg/ml",
      "price": 4.5131
    },
    {
      "name": "Norethisterone+Estradiol Cypionate",
      "form": "vial",
      "strength": "50mg+5mg/ml",
      "price": 4.39
    },
    {
      "name": "Norfloxacin",
      "form": "tab-cap",
      "strength": "400 mg",
      "price": 0.0261
    },
    {
      "name": "Noscapine",
      "form": "tab-cap",
      "strength": "15 mg",
      "price": 0.0294
    },
    {
      "name": "Nystatin",
      "form": "suspen",
      "strength": "100000 IU/ml",
      "price": 0.0346
    },
    {
      "name": "Nystatin",
      "form": "tab-cap",
      "strength": "500,000 IU",
      "price": 0.0805
    },
    {
      "name": "Nystatin",
      "form": "ointment",
      "strength": "100,000 IU/g",
      "price": 0.0992
    },
    {
      "name": "Nystatin",
      "form": "pessary",
      "strength": "100,000 IU",
      "price": 0.1
    },
    {
      "name": "Nystatin",
      "form": "cream",
      "strength": "100,000 IU/g",
      "price": 0.0231
    },
    {
      "name": "Nystatin",
      "form": "tab-cap",
      "strength": "100,000 IU",
      "price": 0.0319
    },
    {
      "name": "Octreotide",
      "form": "ampoule",
      "strength": "0.1 mg/ml",
      "price": 9.769
    },
    {
      "name": "Ofloxacin",
      "form": "opht drop",
      "strength": "0.3%",
      "price": 0.309
    },
    {
      "name": "Ofloxacin",
      "form": "tab-cap",
      "strength": "200 mg",
      "price": 0.058
    },
    {
      "name": "Ofloxacin",
      "form": "tab-cap",
      "strength": "400 mg",
      "price": 0.109
    },
    {
      "name": "Olanzapine",
      "form": "tab-cap",
      "strength": "5 mg",
      "price": 0.12
    },
    {
      "name": "Olanzapine",
      "form": "tab-cap",
      "strength": "10 mg",
      "price": 0.43
    },
    {
      "name": "Omeprazole",
      "form": "tab-cap",
      "strength": "20 mg",
      "price": 0.0191
    },
    {
      "name": "Omeprazole",
      "form": "tab-cap",
      "strength": "10 mg",
      "price": 0.1249
    },
    {
      "name": "Omeprazole",
      "form": "vial",
      "strength": "40 mg",
      "price": 0.4534
    },
    {
      "name": "Ondansetron",
      "form": "ampoule",
      "strength": "2 mg/ml",
      "price": 0.1771
    },
    {
      "name": "Ondansetron",
      "form": "tab-cap",
      "strength": "4 mg",
      "price": 0.2537
    },
    {
      "name": "Ondansetron",
      "form": "tab-cap",
      "strength": "8 mg",
      "price": 1.4247
    },
    {
      "name": "Oral Rehydration Salts",
      "form": "powder",
      "strength": "1 PKT/1 l",
      "price": 0.05
    },
    {
      "name": "Oral Rehydration Salts",
      "form": "powder",
      "strength": "1 pkt/500 ml",
      "price": 0.0532
    },
    {
      "name": "ORS+Zinc Co-Pack",
      "form": "each",
      "strength": "2 ORS+20 mg",
      "price": 0.45
    },
    {
      "name": "ORS+Zinc Co-Pack",
      "form": "each",
      "strength": "1 ORS+20 mg",
      "price": 0.58
    },
    {
      "name": "ORS+Zinc Co-Pack",
      "form": "each",
      "strength": "2 ORS+20 mg",
      "price": 0.8
    },
    {
      "name": "ORS+Zinc Co-Pack",
      "form": "each",
      "strength": "4 ORS+20 mg",
      "price": 0.504
    },
    {
      "name": "Oseltamivir",
      "form": "tab-cap",
      "strength": "75 mg",
      "price": 2.133
    },
    {
      "name": "Oxacillin",
      "form": "ampoule",
      "strength": "500 mg",
      "price": 0.2049
    },
    {
      "name": "Oxacillin",
      "form": "vial",
      "strength": "1 g",
      "price": 0.6472
    },
    {
      "name": "Oxacillin",
      "form": "disc",
      "strength": "1 mcg",
      "price": 0.198
    },
    {
      "name": "Oxaliplatin",
      "form": "vial",
      "strength": "50 mg",
      "price": 37.5858
    },
    {
      "name": "Oxaliplatin",
      "form": "vial",
      "strength": "100 mg",
      "price": 59.0858
    },
    {
      "name": "Oxybuprocaine",
      "form": "opht drop",
      "strength": "0.4%",
      "price": 0.3953
    },
    {
      "name": "Oxybutynin",
      "form": "tab-cap",
      "strength": "5 mg",
      "price": 0.0819
    },
    {
      "name": "Oxytocin",
      "form": "ampoule",
      "strength": "10 IU",
      "price": 0.1252
    },
    {
      "name": "Oxytocin",
      "form": "ampoule",
      "strength": "5 IU",
      "price": 0.4946
    },
    {
      "name": "Paclitaxel",
      "form": "vial",
      "strength": "6 mg/ml",
      "price": 0.9491
    },
    {
      "name": "Paclitaxel",
      "form": "vial",
      "strength": "100 mg",
      "price": 10.2734
    },
    {
      "name": "P-Aminosalicylic Acid (PAS)",
      "form": "powder",
      "strength": "4 g",
      "price": 2.7516
    },
    {
      "name": "P-Aminosalicylic Acid (PAS)",
      "form": "granules",
      "strength": "60% w/w",
      "price": 0.1249
    },
    {
      "name": "P-Aminosalicylic Acid (PAS)",
      "form": "granules",
      "strength": "9.2 g",
      "price": 1.15
    },
    {
      "name": "P-Aminosalicylic Acid (PAS)",
      "form": "powder",
      "strength": "5.52 g",
      "price": 1.37
    },
    {
      "name": "Pancuronium Bromide",
      "form": "ampoule",
      "strength": "2 mg/ml",
      "price": 0.6727
    },
    {
      "name": "Paracetamol",
      "form": "suspen",
      "strength": "120 mg/5 ml",
      "price": 0.0042
    },
    {
      "name": "Paracetamol",
      "form": "tab-cap",
      "strength": "500 mg",
      "price": 0.0051
    },
    {
      "name": "Paracetamol",
      "form": "suspen",
      "strength": "100 mg/ml",
      "price": 0.0231
    },
    {
      "name": "Paracetamol",
      "form": "suppos",
      "strength": "125 mg",
      "price": 0.2103
    },
    {
      "name": "Paracetamol",
      "form": "suppos",
      "strength": "250 mg",
      "price": 0.23
    },
    {
      "name": "Paracetamol",
      "form": "suppos",
      "strength": "500 mg",
      "price": 2.132
    },
    {
      "name": "Paracetamol",
      "form": "tab-cap",
      "strength": "100 mg",
      "price": 0.002
    },
    {
      "name": "Paracetamol",
      "form": "suppos",
      "strength": "100 mg",
      "price": 0.07
    },
    {
      "name": "Paraffin, Liquid",
      "form": "liquid",
      "strength": "",
      "price": 0.0089
    },
    {
      "name": "Paraffin, White Soft",
      "form": "ointment",
      "strength": "",
      "price": 0.0029
    },
    {
      "name": "Penicillamine",
      "form": "tab-cap",
      "strength": "250 mg",
      "price": 0.4381
    },
    {
      "name": "Penicillin, Benzathine Benzyl",
      "form": "powder",
      "strength": "1.2M IU",
      "price": 0.2155
    },
    {
      "name": "Penicillin, Benzathine Benzyl",
      "form": "powder",
      "strength": "2.4M IU",
      "price": 0.276
    },
    {
      "name": "Penicillin, Benzyl",
      "form": "powder",
      "strength": "1M IU",
      "price": 0.3238
    },
    {
      "name": "Penicillin, Benzyl",
      "form": "powder",
      "strength": "5M IU",
      "price": 0.68
    },
    {
      "name": "Penicillin, Phenoxymethyl",
      "form": "suspen",
      "strength": "125 mg/5 ml",
      "price": 0.0069
    },
    {
      "name": "Penicillin, Phenoxymethyl",
      "form": "syrup",
      "strength": "250 mg/5 ml",
      "price": 0.0071
    },
    {
      "name": "Penicillin, Phenoxymethyl",
      "form": "tab-cap",
      "strength": "250 mg",
      "price": 0.02
    },
    {
      "name": "Penicillin, Procaine Benzyl",
      "form": "powder",
      "strength": "1M IU",
      "price": 0.1801
    },
    {
      "name": "Penicillin, Procaine Benzyl",
      "form": "powder",
      "strength": "4M IU",
      "price": 0.233
    },
    {
      "name": "Penicillin, Procaine Benzyl",
      "form": "powder",
      "strength": "3M IU",
      "price": 0.2164
    },
    {
      "name": "Penicillin, Procaine+Benzyl",
      "form": "vial",
      "strength": "3M IU+1M IU",
      "price": 0.2987
    },
    {
      "name": "Pentazocine",
      "form": "ampoule",
      "strength": "30 mg/ml",
      "price": 0.1485
    },
    {
      "name": "Permethrin",
      "form": "cream",
      "strength": "5%",
      "price": 0.0355
    },
    {
      "name": "Permethrin",
      "form": "lotion",
      "strength": "1%",
      "price": 0.0275
    },
    {
      "name": "Permethrin",
      "form": "ointment",
      "strength": "2.5%",
      "price": 0.0416
    },
    {
      "name": "Permethrin",
      "form": "solution",
      "strength": "10%",
      "price": 0.1631
    },
    {
      "name": "Pethidine",
      "form": "tab-cap",
      "strength": "50 mg",
      "price": 0.2734
    },
    {
      "name": "Pethidine HCl",
      "form": "ampoule",
      "strength": "50 mg/ml",
      "price": 0.2634
    },
    {
      "name": "Phenobarbital",
      "form": "elixir",
      "strength": "20 mg/5 ml",
      "price": 0.0043
    },
    {
      "name": "Phenobarbital",
      "form": "tab-cap",
      "strength": "30 mg",
      "price": 0.0099
    },
    {
      "name": "Phenobarbital",
      "form": "tab-cap",
      "strength": "100 mg",
      "price": 0.02
    },
    {
      "name": "Phenobarbital",
      "form": "tab-cap",
      "strength": "50-60 mg",
      "price": 0.0472
    },
    {
      "name": "Phenobarbital",
      "form": "elixir",
      "strength": "15 mg/5 ml",
      "price": 0.0762
    },
    {
      "name": "Phenobarbital",
      "form": "ampoule",
      "strength": "100 mg/ml",
      "price": 1.008
    },
    {
      "name": "Phenobarbital",
      "form": "vial",
      "strength": "200 mg/ml",
      "price": 3.283
    },
    {
      "name": "Phenytoin",
      "form": "suspen",
      "strength": "125 mg/5 ml",
      "price": 0.0279
    },
    {
      "name": "Phenytoin",
      "form": "tab-cap",
      "strength": "100 mg",
      "price": 0.0359
    },
    {
      "name": "Phenytoin",
      "form": "ampoule",
      "strength": "50 mg/ml",
      "price": 0.3866
    },
    {
      "name": "Pilocarpine",
      "form": "opht drop",
      "strength": "1%",
      "price": 0.228
    },
    {
      "name": "Pilocarpine",
      "form": "opht drop",
      "strength": "2%",
      "price": 0.381
    },
    {
      "name": "Pilocarpine",
      "form": "opht drop",
      "strength": "4%",
      "price": 0.573
    },
    {
      "name": "Piperacillin+Tazobactam",
      "form": "vial",
      "strength": "4 g+500 mg",
      "price": 4.1276
    },
    {
      "name": "Piroxicam",
      "form": "tab-cap",
      "strength": "20 mg",
      "price": 0.0252
    },
    {
      "name": "Polygeline",
      "form": "solution",
      "strength": "3.5%",
      "price": 0.0239
    },
    {
      "name": "Potassium Chloride",
      "form": "vial",
      "strength": "15%",
      "price": 0.0224
    },
    {
      "name": "Potassium Chloride",
      "form": "tab-cap",
      "strength": "600 mg",
      "price": 0.0385
    },
    {
      "name": "Potassium Chloride",
      "form": "tab-cap",
      "strength": "600 mg",
      "price": 0.0987
    },
    {
      "name": "Potassium Chloride",
      "form": "vial",
      "strength": "10%",
      "price": 0.0439
    },
    {
      "name": "Potassium Permanganate",
      "form": "powder",
      "strength": "",
      "price": 0.0106
    },
    {
      "name": "Povidone Iodine",
      "form": "solution",
      "strength": "10%",
      "price": 0.0059
    },
    {
      "name": "Povidone Iodine",
      "form": "liquid",
      "strength": "7.5%",
      "price": 0.0107
    },
    {
      "name": "Povidone Iodine",
      "form": "ointment",
      "strength": "10%",
      "price": 0.0133
    },
    {
      "name": "Praziquantel",
      "form": "tab-cap",
      "strength": "600 mg",
      "price": 0.3174
    },
    {
      "name": "Prednisolone",
      "form": "tab-cap",
      "strength": "5 mg",
      "price": 0.0157
    },
    {
      "name": "Prednisolone",
      "form": "tab-cap",
      "strength": "25 mg",
      "price": 0.039
    },
    {
      "name": "Prednisolone",
      "form": "tab-cap",
      "strength": "1 mg",
      "price": 0.1
    },
    {
      "name": "Prednisolone",
      "form": "opht drop",
      "strength": "1%",
      "price": 0.3796
    },
    {
      "name": "Prednisolone (Base)",
      "form": "syrup",
      "strength": "15 mg/5 ml",
      "price": 0.0305
    },
    {
      "name": "Prednisone",
      "form": "tab-cap",
      "strength": "5 mg",
      "price": 0.01
    },
    {
      "name": "Prednisone",
      "form": "tab-cap",
      "strength": "50 mg",
      "price": 0.0837
    },
    {
      "name": "Prednisone",
      "form": "tab-cap",
      "strength": "20 mg",
      "price": 2.8256
    },
    {
      "name": "Primaquine",
      "form": "tab-cap",
      "strength": "15 mg",
      "price": 0.0554
    },
    {
      "name": "Prochlorperazine",
      "form": "tab-cap",
      "strength": "5 mg",
      "price": 0.02
    },
    {
      "name": "Proguanil",
      "form": "tab-cap",
      "strength": "100 mg",
      "price": 0.252
    },
    {
      "name": "Promethazine HCl",
      "form": "tab-cap",
      "strength": "25 mg",
      "price": 0.0043
    },
    {
      "name": "Promethazine HCl",
      "form": "suspen",
      "strength": "5 mg/5 ml",
      "price": 0.0055
    },
    {
      "name": "Promethazine HCl",
      "form": "ampoule",
      "strength": "25 mg/ml",
      "price": 0.2493
    },
    {
      "name": "Proparacaine",
      "form": "opht drop",
      "strength": "0.5%",
      "price": 0.342
    },
    {
      "name": "Propofol",
      "form": "vial",
      "strength": "10 mg/ml",
      "price": 0.0708
    },
    {
      "name": "Propranolol",
      "form": "ampoule",
      "strength": "1 mg/ml",
      "price": 10.8
    },
    {
      "name": "Propranolol HCl",
      "form": "tab-cap",
      "strength": "40 mg",
      "price": 0.0106
    },
    {
      "name": "Propranolol HCl",
      "form": "tab-cap",
      "strength": "10 mg",
      "price": 0.0246
    },
    {
      "name": "Propranolol HCl",
      "form": "tab-cap",
      "strength": "80 mg",
      "price": 0.0795
    },
    {
      "name": "Propylthiouracil",
      "form": "tab-cap",
      "strength": "50 mg",
      "price": 0.0604
    },
    {
      "name": "Protamine Sulfate",
      "form": "ampoule",
      "strength": "10 mg/ml",
      "price": 1.4811
    },
    {
      "name": "Protionamide",
      "form": "tab-cap",
      "strength": "250 mg",
      "price": 0.1293
    },
    {
      "name": "Pyrazinamide",
      "form": "tab-cap",
      "strength": "500 mg",
      "price": 0.0429
    },
    {
      "name": "Pyrazinamide",
      "form": "tab-cap",
      "strength": "400 mg",
      "price": 0.0276
    },
    {
      "name": "Pyrazinamide",
      "form": "tab-cap",
      "strength": "750 mg",
      "price": 0.0461
    },
    {
      "name": "Pyridostigmine Bromide",
      "form": "tab-cap",
      "strength": "60 mg",
      "price": 0.282
    },
    {
      "name": "Quinidine Sulfate",
      "form": "tab-cap",
      "strength": "200 mg",
      "price": 0.35
    },
    {
      "name": "Quinine Dihydrochloride",
      "form": "ampoule",
      "strength": "250-300mg/ml",
      "price": 0.4987
    },
    {
      "name": "Quinine Dihydrochloride",
      "form": "syrup",
      "strength": "100 mg/5 ml",
      "price": 0.0446
    },
    {
      "name": "Quinine Dihydrochloride",
      "form": "ampoule",
      "strength": "125-150mg/ml",
      "price": 0.243
    },
    {
      "name": "Quinine Hydrochloride",
      "form": "ampoule",
      "strength": "300 mg/ml",
      "price": 0.12
    },
    {
      "name": "Quinine Sulfate",
      "form": "tab-cap",
      "strength": "300 mg",
      "price": 0.0911
    },
    {
      "name": "Quinine Sulfate",
      "form": "syrup",
      "strength": "50 mg/5 ml",
      "price": 0.0086
    },
    {
      "name": "Quinine Sulfate",
      "form": "syrup",
      "strength": "100 mg/5 ml",
      "price": 0.0112
    },
    {
      "name": "Quinine Sulfate",
      "form": "tab-cap",
      "strength": "200-250 mg",
      "price": 0.0398
    },
    {
      "name": "Quinine Sulfate",
      "form": "tab-cap",
      "strength": "500 mg",
      "price": 0.0645
    },
    {
      "name": "Raltegravir",
      "form": "tab-cap",
      "strength": "400 mg",
      "price": 0.8364
    },
    {
      "name": "Ranitidine",
      "form": "tab-cap",
      "strength": "300 mg",
      "price": 0.0194
    },
    {
      "name": "Ranitidine",
      "form": "tab-cap",
      "strength": "150 mg",
      "price": 0.0204
    },
    {
      "name": "Ranitidine",
      "form": "ampoule",
      "strength": "25 mg/ml",
      "price": 0.1736
    },
    {
      "name": "Rifabutin",
      "form": "tab-cap",
      "strength": "150 mg",
      "price": 1
    },
    {
      "name": "Rifamp.+Isoniazid+Pyrazin.+Ethambut.",
      "form": "tab-cap",
      "strength": "",
      "price": 0.0756
    },
    {
      "name": "Rifampicin",
      "form": "tab-cap",
      "strength": "150 mg",
      "price": 0.0841
    },
    {
      "name": "Rifampicin",
      "form": "tab-cap",
      "strength": "300 mg",
      "price": 0.1193
    },
    {
      "name": "Rifampicin",
      "form": "tab-cap",
      "strength": "600 mg",
      "price": 0.1265
    },
    {
      "name": "Rifampicin",
      "form": "syrup",
      "strength": "100 mg/5 ml",
      "price": 0.1386
    },
    {
      "name": "Rifampicin+Isoniazid",
      "form": "tab-cap",
      "strength": "60 mg+60 mg",
      "price": 0.0445
    },
    {
      "name": "Rifampicin+Isoniazid",
      "form": "tab-cap",
      "strength": "150+75 mg",
      "price": 0.0629
    },
    {
      "name": "Rifampicin+Isoniazid",
      "form": "tab-cap",
      "strength": "300+150 mg",
      "price": 0.0837
    },
    {
      "name": "Rifampicin+Isoniazid",
      "form": "tab-cap",
      "strength": "60 mg+30 mg",
      "price": 0.0175
    },
    {
      "name": "Rifampicin+Isoniazid",
      "form": "tab-cap",
      "strength": "150mg+150mg",
      "price": 0.0343
    },
    {
      "name": "Rifampicin+Isoniazid+Ethambutol",
      "form": "tab-cap",
      "strength": "150+75+275mg",
      "price": 0.0729
    },
    {
      "name": "Rifampicin+Isoniazid+Pyrazinamide",
      "form": "tab-cap",
      "strength": "60+30+150 mg",
      "price": 0.0255
    },
    {
      "name": "Risperidone",
      "form": "tab-cap",
      "strength": "0.5 mg",
      "price": 0.0182
    },
    {
      "name": "Risperidone",
      "form": "tab-cap",
      "strength": "2 mg",
      "price": 0.02
    },
    {
      "name": "Risperidone",
      "form": "tab-cap",
      "strength": "1 mg",
      "price": 0.0268
    },
    {
      "name": "Risperidone",
      "form": "tab-cap",
      "strength": "3 mg",
      "price": 0.0906
    },
    {
      "name": "Risperidone",
      "form": "solution",
      "strength": "1 mg/ml",
      "price": 0.5978
    },
    {
      "name": "Ritonavir",
      "form": "solution",
      "strength": "80 mg/ml",
      "price": 0.063
    },
    {
      "name": "Ritonavir",
      "form": "tab-cap",
      "strength": "100 mg",
      "price": 0.1288
    },
    {
      "name": "Rituximab",
      "form": "ampoule",
      "strength": "10 mg/ml",
      "price": 15.9293
    },
    {
      "name": "Rocuronium Bromide",
      "form": "vial",
      "strength": "50 mg/5 ml",
      "price": 0.6595
    },
    {
      "name": "Salbutamol",
      "form": "syrup",
      "strength": "2 mg/5 ml",
      "price": 0.0037
    },
    {
      "name": "Salbutamol",
      "form": "tab-cap",
      "strength": "4 mg",
      "price": 0.0068
    },
    {
      "name": "Salbutamol",
      "form": "inhaler",
      "strength": "100 mcg/dose",
      "price": 0.0078
    },
    {
      "name": "Salbutamol",
      "form": "respsol",
      "strength": "0.5%",
      "price": 0.047
    },
    {
      "name": "Salbutamol",
      "form": "ampoule",
      "strength": "0.5 mg/ml",
      "price": 1.983
    },
    {
      "name": "Salbutamol",
      "form": "tab-cap",
      "strength": "2 mg",
      "price": 0.0026
    },
    {
      "name": "Salbutamol",
      "form": "respsol",
      "strength": "0.2%",
      "price": 0.1456
    },
    {
      "name": "Salmeterol+Fluticasone",
      "form": "inhaler",
      "strength": "",
      "price": 0.0568
    },
    {
      "name": "Saquinavir",
      "form": "tab-cap",
      "strength": "200 mg",
      "price": 0.244
    },
    {
      "name": "Saquinavir",
      "form": "tab-cap",
      "strength": "500 mg",
      "price": 1.1308
    },
    {
      "name": "Senna",
      "form": "tab-cap",
      "strength": "7.5 mg",
      "price": 0.0112
    },
    {
      "name": "Sertraline",
      "form": "tab-cap",
      "strength": "50 mg",
      "price": 0.0382
    },
    {
      "name": "Sevoflurane",
      "form": "solution",
      "strength": "",
      "price": 0.4105
    },
    {
      "name": "Silver Sulfadiazine",
      "form": "cream",
      "strength": "1%",
      "price": 0.0247
    },
    {
      "name": "Simvastatin",
      "form": "tab-cap",
      "strength": "20 mg",
      "price": 0.0245
    },
    {
      "name": "Simvastatin",
      "form": "tab-cap",
      "strength": "10 mg",
      "price": 0.0658
    },
    {
      "name": "Sodium Amidotrizoate",
      "form": "vial",
      "strength": "76%",
      "price": 0.4725
    },
    {
      "name": "Sodium Bicarbonate",
      "form": "solution",
      "strength": "8.4%",
      "price": 0.014
    },
    {
      "name": "Sodium Chloride In Water",
      "form": "solution",
      "strength": "0.9%",
      "price": 0.001
    },
    {
      "name": "Sodium Chloride In Water",
      "form": "solution",
      "strength": "0.45%",
      "price": 0.0011
    },
    {
      "name": "Sodium Dichloroisocyanurate",
      "form": "tab-cap",
      "strength": "1.67 g",
      "price": 0.0445
    },
    {
      "name": "Sodium Dichloroisocyanurate",
      "form": "tab-cap",
      "strength": "8.5 mg",
      "price": 0.0295
    },
    {
      "name": "Sodium Lactate Compound",
      "form": "solution",
      "strength": "",
      "price": 0.0007
    },
    {
      "name": "Sodium Stibogluconate",
      "form": "vial",
      "strength": "33%",
      "price": 0.3218
    },
    {
      "name": "Sodium Valproate",
      "form": "suspen",
      "strength": "250 mg/5 ml",
      "price": 0.0447
    },
    {
      "name": "Sodium Valproate",
      "form": "tab-cap",
      "strength": "500 mg",
      "price": 0.1702
    },
    {
      "name": "Sodium Valproate",
      "form": "tab-cap",
      "strength": "200 mg",
      "price": 0.0704
    },
    {
      "name": "Spectinomycin",
      "form": "vial",
      "strength": "2 g",
      "price": 4.8
    },
    {
      "name": "Spironolactone",
      "form": "tab-cap",
      "strength": "25 mg",
      "price": 0.0597
    },
    {
      "name": "Spironolactone",
      "form": "tab-cap",
      "strength": "100 mg",
      "price": 0.0692
    },
    {
      "name": "Stavudine",
      "form": "solution",
      "strength": "1 mg/ml",
      "price": 0.0062
    },
    {
      "name": "Stavudine",
      "form": "tab-cap",
      "strength": "15 mg",
      "price": 0.0206
    },
    {
      "name": "Stavudine",
      "form": "tab-cap",
      "strength": "20 mg",
      "price": 0.0233
    },
    {
      "name": "Stavudine",
      "form": "tab-cap",
      "strength": "30 mg",
      "price": 0.0409
    },
    {
      "name": "Stavudine",
      "form": "tab-cap",
      "strength": "40 mg",
      "price": 0.0606
    },
    {
      "name": "Streptokinase",
      "form": "vial",
      "strength": "1,500,000 IU",
      "price": 50.085
    },
    {
      "name": "Streptomycin Sulfate",
      "form": "vial",
      "strength": "1 g",
      "price": 4.391
    },
    {
      "name": "Sulfacetamide Sodium",
      "form": "opht drop",
      "strength": "10%",
      "price": 0.2946
    },
    {
      "name": "Sulfadiazine",
      "form": "tab-cap",
      "strength": "500 mg",
      "price": 0.0529
    },
    {
      "name": "Sulfadoxine+Pyrimethamine",
      "form": "suspen",
      "strength": "250+12mg/5ml",
      "price": 0.0782
    },
    {
      "name": "Sulfadoxine+Pyrimethamine",
      "form": "tab-cap",
      "strength": "500 mg+25 mg",
      "price": 0.106
    },
    {
      "name": "Sulfamethoxazole+Trimethoprim",
      "form": "suspen",
      "strength": "200+40mg/5ml",
      "price": 0.0048
    },
    {
      "name": "Sulfamethoxazole+Trimethoprim",
      "form": "tab-cap",
      "strength": "400 mg+80 mg",
      "price": 0.0127
    },
    {
      "name": "Sulfamethoxazole+Trimethoprim",
      "form": "tab-cap",
      "strength": "800 mg+160mg",
      "price": 0.0274
    },
    {
      "name": "Sulfamethoxazole+Trimethoprim",
      "form": "ampoule",
      "strength": "80+16 mg/ml",
      "price": 0.0501
    },
    {
      "name": "Sulfamethoxazole+Trimethoprim",
      "form": "tab-cap",
      "strength": "100 mg+20 mg",
      "price": 0.0051
    },
    {
      "name": "Sulfamethoxazole+Trimethoprim",
      "form": "tab-cap",
      "strength": "100 mg+20 mg",
      "price": 0.0085
    },
    {
      "name": "Sulfamethoxazole+Trimethoprim",
      "form": "tab-cap",
      "strength": "200 mg+40 mg",
      "price": 0.0133
    },
    {
      "name": "Sulfasalazine",
      "form": "tab-cap",
      "strength": "500 mg",
      "price": 0.1673
    },
    {
      "name": "Sulphametopyrazine-Pyrimethamine",
      "form": "tab-cap",
      "strength": "500+25 mg",
      "price": 0.2156
    },
    {
      "name": "Suxamethonium Cl",
      "form": "vial",
      "strength": "20 mg/ml",
      "price": 0.4067
    },
    {
      "name": "Suxamethonium Cl",
      "form": "ampoule",
      "strength": "50 mg/ml",
      "price": 0.4485
    },
    {
      "name": "Tacrolimus",
      "form": "tab-cap",
      "strength": "1 mg",
      "price": 0.9307
    },
    {
      "name": "Tamoxifen Citrate",
      "form": "tab-cap",
      "strength": "10 mg",
      "price": 0.0417
    },
    {
      "name": "Tamoxifen Citrate",
      "form": "tab-cap",
      "strength": "20 mg",
      "price": 0.16
    },
    {
      "name": "Tamsulosin",
      "form": "tab-cap",
      "strength": "0.4 mg",
      "price": 0.0471
    },
    {
      "name": "Temozolomide",
      "form": "tab-cap",
      "strength": "100 mg",
      "price": 46.424
    },
    {
      "name": "Tenofovir DF+Emtricitabine",
      "form": "tab-cap",
      "strength": "300 mg+200mg",
      "price": 0.2251
    },
    {
      "name": "Tenofovir DF+Lamivudine",
      "form": "tab-cap",
      "strength": "300mg+300mg",
      "price": 0.2178
    },
    {
      "name": "Tenofovir Disoproxil Fumerate (TDF)",
      "form": "tab-cap",
      "strength": "300 mg",
      "price": 0.5411
    },
    {
      "name": "Tenoxicam",
      "form": "tab-cap",
      "strength": "20 mg",
      "price": 0.0692
    },
    {
      "name": "Terbinafine",
      "form": "cream",
      "strength": "1%",
      "price": 0.11
    },
    {
      "name": "Terizidone",
      "form": "tab-cap",
      "strength": "250 mg",
      "price": 0.7117
    },
    {
      "name": "Test, Bloodgroup Anti-A, Monoclonal",
      "form": "test",
      "strength": "",
      "price": 0.1853
    },
    {
      "name": "Test, Bloodgroup Anti-A/B, Monoclonal",
      "form": "test",
      "strength": "",
      "price": 0.2651
    },
    {
      "name": "Test, Bloodgroup, Anti-B, Monoclonal",
      "form": "test",
      "strength": "",
      "price": 0.1853
    },
    {
      "name": "Test, Bloodgroup, Anti-D, Monoclonal",
      "form": "test",
      "strength": "",
      "price": 0.3307
    },
    {
      "name": "Test, Brucella Melitensis Antigen",
      "form": "test",
      "strength": "",
      "price": 0.1897
    },
    {
      "name": "Test, Glucose In Urine",
      "form": "test",
      "strength": "",
      "price": 0.0702
    },
    {
      "name": "Test, Glucose Meter",
      "form": "each",
      "strength": "",
      "price": 19.353
    },
    {
      "name": "Test, Glucose Meter",
      "form": "each",
      "strength": "",
      "price": 53.8583
    },
    {
      "name": "Test, Glucose Meter Strips",
      "form": "test",
      "strength": "",
      "price": 0.3042
    },
    {
      "name": "Test, Glucose Meter Strips",
      "form": "each",
      "strength": "",
      "price": 0.3793
    },
    {
      "name": "Test, Hepatitis B HBsAg Elisa",
      "form": "test",
      "strength": "",
      "price": 1.997
    },
    {
      "name": "Test, Hepatitis B, HBsAg, Determine",
      "form": "test",
      "strength": "",
      "price": 1.2854
    },
    {
      "name": "Test, Hepatitis BsAg",
      "form": "test",
      "strength": "",
      "price": 0.5313
    },
    {
      "name": "Test, Hepatitis C Elisa",
      "form": "test",
      "strength": "",
      "price": 3.3638
    },
    {
      "name": "Test, Hepatitis C, HCVScan (TM)",
      "form": "test",
      "strength": "",
      "price": 2.6333
    },
    {
      "name": "Test, HIV 1+2 Instantchek (TM)",
      "form": "test",
      "strength": "",
      "price": 1.8755
    },
    {
      "name": "Test, HIV 1+2 SD Bioline 3.0 (TM)",
      "form": "test",
      "strength": "",
      "price": 1.68
    },
    {
      "name": "Test, HIV 1+2 Stat Pak (TM)",
      "form": "test",
      "strength": "",
      "price": 2.7854
    },
    {
      "name": "Test, HIV 1+2, Intec",
      "form": "test",
      "strength": "",
      "price": 0.5916
    },
    {
      "name": "Test, HIV 1+2+O Ag/Ab Murex (TM)",
      "form": "test",
      "strength": "",
      "price": 2.7061
    },
    {
      "name": "Test, HIV, Capillus HIV-1/2 (TM)",
      "form": "test",
      "strength": "",
      "price": 0.9828
    },
    {
      "name": "Test, HIV, Determine HIV-1/2 (TM)",
      "form": "test",
      "strength": "",
      "price": 1.0699
    },
    {
      "name": "Test, HIV, Unigold I/II (TM)",
      "form": "test",
      "strength": "",
      "price": 3.3696
    },
    {
      "name": "Test, Malaria P. Falciparum",
      "form": "test",
      "strength": "",
      "price": 0.8915
    },
    {
      "name": "Test, Malaria, P. Falciparum",
      "form": "test",
      "strength": "",
      "price": 0.6203
    },
    {
      "name": "Test, Malaria, P. Falciparum",
      "form": "test",
      "strength": "",
      "price": 1.7126
    },
    {
      "name": "Test, Malaria, P. Falciparum/P. Ovale",
      "form": "test",
      "strength": "",
      "price": 0.616
    },
    {
      "name": "Test, Malaria, P. Falciparum+P. Pan",
      "form": "test",
      "strength": "",
      "price": 0.9947
    },
    {
      "name": "Test, Malaria, P.Falciparum, P.Vivax",
      "form": "test",
      "strength": "",
      "price": 1.0614
    },
    {
      "name": "Test, Malaria, SD-Bioline",
      "form": "test",
      "strength": "",
      "price": 1.0036
    },
    {
      "name": "Test, Pregnancy",
      "form": "test",
      "strength": "",
      "price": 0.069
    },
    {
      "name": "Test, Syphilis",
      "form": "test",
      "strength": "",
      "price": 0.1506
    },
    {
      "name": "Test, Syphilis",
      "form": "bott",
      "strength": "",
      "price": 1.9032
    },
    {
      "name": "Test, Syphilis Determine (TM)",
      "form": "test",
      "strength": "",
      "price": 1.75
    },
    {
      "name": "Test, Syphilis RPR (TM)",
      "form": "test",
      "strength": "",
      "price": 0.125
    },
    {
      "name": "Test, Syphilis SD Bioline 3.0 (TM)",
      "form": "test",
      "strength": "",
      "price": 0.9987
    },
    {
      "name": "Test, Urine Glucose/Protein Strip",
      "form": "test",
      "strength": "",
      "price": 0.043
    },
    {
      "name": "Tetanus Antitoxin",
      "form": "ampoule",
      "strength": "1500 IU",
      "price": 1.25
    },
    {
      "name": "Tetracaine",
      "form": "opht drop",
      "strength": "0.5%",
      "price": 0.1514
    },
    {
      "name": "Tetracycline",
      "form": "tab-cap",
      "strength": "500 mg",
      "price": 0.036
    },
    {
      "name": "Tetracycline",
      "form": "ointment",
      "strength": "3%",
      "price": 0.0457
    },
    {
      "name": "Tetracycline HCl",
      "form": "tab-cap",
      "strength": "250 mg",
      "price": 0.0128
    },
    {
      "name": "Tetracycline HCl",
      "form": "opht oint",
      "strength": "1%",
      "price": 0.069
    },
    {
      "name": "Tetracycline HCl",
      "form": "ointment",
      "strength": "1%",
      "price": 0.0512
    },
    {
      "name": "Thalidomide",
      "form": "tab-cap",
      "strength": "100 mg",
      "price": 0.4168
    },
    {
      "name": "Theophylline",
      "form": "tab-cap",
      "strength": "200 mg",
      "price": 0.024
    },
    {
      "name": "Thiopental Sodium",
      "form": "vial",
      "strength": "500 mg",
      "price": 1.375
    },
    {
      "name": "Thiopental Sodium",
      "form": "vial",
      "strength": "1 g",
      "price": 2.03
    },
    {
      "name": "Tiabendazole",
      "form": "tab-cap",
      "strength": "500 mg",
      "price": 0.0617
    },
    {
      "name": "Tiabendazole",
      "form": "tab-cap",
      "strength": "500 mg",
      "price": 0.1066
    },
    {
      "name": "Timolol Maleate",
      "form": "opht drop",
      "strength": "0.25%",
      "price": 0.1814
    },
    {
      "name": "Timolol Maleate",
      "form": "opht drop",
      "strength": "0.5%",
      "price": 0.1932
    },
    {
      "name": "Tinidazole",
      "form": "tab-cap",
      "strength": "500 mg",
      "price": 0.0675
    },
    {
      "name": "Tioguanine",
      "form": "tab-cap",
      "strength": "40 mg",
      "price": 7.0688
    },
    {
      "name": "Topiramate",
      "form": "tab-cap",
      "strength": "25 mg",
      "price": 0.0243
    },
    {
      "name": "Topiramate",
      "form": "tab-cap",
      "strength": "100 mg",
      "price": 0.0546
    },
    {
      "name": "Tramadol Hydrochloride",
      "form": "tab-cap",
      "strength": "50 mg",
      "price": 0.0218
    },
    {
      "name": "Tramadol Hydrochloride",
      "form": "solution",
      "strength": "100 mg/ml",
      "price": 0.0766
    },
    {
      "name": "Tramadol Hydrochloride",
      "form": "ampoule",
      "strength": "50 mg/ml",
      "price": 0.209
    },
    {
      "name": "Tramadol Hydrochloride",
      "form": "ampoule",
      "strength": "100 mg/ml",
      "price": 0.0559
    },
    {
      "name": "Tranexamic Acid",
      "form": "ampoule",
      "strength": "100 mg/ml",
      "price": 1.1599
    },
    {
      "name": "Trastuzumab",
      "form": "vial",
      "strength": "440 mg",
      "price": 1877.355
    },
    {
      "name": "Triamcinolone Acetonide",
      "form": "ampoule",
      "strength": "10 mg/ml",
      "price": 0.9628
    },
    {
      "name": "Trifluoperazine",
      "form": "tab-cap",
      "strength": "5 mg",
      "price": 0.0815
    },
    {
      "name": "Trihexyphenidyl",
      "form": "tab-cap",
      "strength": "2 mg",
      "price": 0.022
    },
    {
      "name": "Trihexyphenidyl",
      "form": "tab-cap",
      "strength": "5 mg",
      "price": 0.023
    },
    {
      "name": "Tropicamide",
      "form": "opht drop",
      "strength": "1%",
      "price": 0.2914
    },
    {
      "name": "Tropicamide",
      "form": "opht drop",
      "strength": "0.5%",
      "price": 0.374
    },
    {
      "name": "Tuberculin",
      "form": "vial",
      "strength": "5 IU",
      "price": 0.218
    },
    {
      "name": "Urographin",
      "form": "solution",
      "strength": "76%",
      "price": 4.914
    },
    {
      "name": "Vaccine, BCG",
      "form": "powder",
      "strength": "",
      "price": 0.1564
    },
    {
      "name": "Vaccine, Diphtheria-Tetanus",
      "form": "vial",
      "strength": "",
      "price": 0.5593
    },
    {
      "name": "Vaccine, Hepatitis B",
      "form": "vial",
      "strength": "",
      "price": 1.1209
    },
    {
      "name": "Vaccine, HPV",
      "form": "vial",
      "strength": "",
      "price": 94.5
    },
    {
      "name": "Vaccine, Influenza",
      "form": "ampoule",
      "strength": "0.5 ml",
      "price": 5.2592
    },
    {
      "name": "Vaccine, Measles",
      "form": "vial",
      "strength": "",
      "price": 0.7016
    },
    {
      "name": "Vaccine, Measles-Mumps-Rubella",
      "form": "vial",
      "strength": "",
      "price": 0.237
    },
    {
      "name": "Vaccine, Meningococcal",
      "form": "vial",
      "strength": "",
      "price": 10.7708
    },
    {
      "name": "Vaccine, Pentavalent",
      "form": "vial",
      "strength": "",
      "price": 15.4111
    },
    {
      "name": "Vaccine, Pneumococcal",
      "form": "vial",
      "strength": "",
      "price": 16.9838
    },
    {
      "name": "Vaccine, Polio",
      "form": "vial",
      "strength": "",
      "price": 0.2465
    },
    {
      "name": "Vaccine, Rabies",
      "form": "vial",
      "strength": "",
      "price": 15.6334
    },
    {
      "name": "Vaccine, Rotavirus",
      "form": "vial",
      "strength": "",
      "price": 6.9614
    },
    {
      "name": "Vaccine, Tetanus Toxoid",
      "form": "vial",
      "strength": "",
      "price": 0.6526
    },
    {
      "name": "Vaccine, Typhoid",
      "form": "vial",
      "strength": "",
      "price": 4.4352
    },
    {
      "name": "Vaccine, Yellow Fever",
      "form": "vial",
      "strength": "",
      "price": 21.2817
    },
    {
      "name": "Valaciclovir",
      "form": "tab-cap",
      "strength": "500 mg",
      "price": 0.625
    },
    {
      "name": "Valganciclovir",
      "form": "tab-cap",
      "strength": "450 mg",
      "price": 20.5755
    },
    {
      "name": "Valproic Acid",
      "form": "syrup",
      "strength": "200 mg/5 ml",
      "price": 0.0333
    },
    {
      "name": "Valproic Acid",
      "form": "tab-cap",
      "strength": "200 mg",
      "price": 0.1755
    },
    {
      "name": "Valproic Acid",
      "form": "tab-cap",
      "strength": "500 mg",
      "price": 0.31
    },
    {
      "name": "Valproic Acid",
      "form": "tab-cap",
      "strength": "150 mg",
      "price": 0.0822
    },
    {
      "name": "Vancomycin",
      "form": "vial",
      "strength": "500 mg",
      "price": 1.75
    },
    {
      "name": "VDRL Carbon Antigen",
      "form": "solution",
      "strength": "",
      "price": 2.805
    },
    {
      "name": "Vecuronium",
      "form": "vial",
      "strength": "4 mg",
      "price": 0.8512
    },
    {
      "name": "Venlafaxine",
      "form": "tab-cap",
      "strength": "75 mg",
      "price": 0.1425
    },
    {
      "name": "Verapamil HCl",
      "form": "tab-cap",
      "strength": "80 mg",
      "price": 0.0247
    },
    {
      "name": "Verapamil HCl",
      "form": "tab-cap",
      "strength": "40 mg",
      "price": 0.0448
    },
    {
      "name": "Verapamil HCl",
      "form": "tab-cap",
      "strength": "240 mg",
      "price": 0.0879
    },
    {
      "name": "Verapamil HCl",
      "form": "vial",
      "strength": "2.5 mg/ml",
      "price": 1.4905
    },
    {
      "name": "Vinblastine",
      "form": "vial",
      "strength": "10 mg",
      "price": 15.575
    },
    {
      "name": "Vincristine",
      "form": "vial",
      "strength": "1 mg",
      "price": 3.2783
    },
    {
      "name": "Vinorelbine",
      "form": "vial",
      "strength": "10 mg/1 ml",
      "price": 8.6146
    },
    {
      "name": "Vinorelbine",
      "form": "vial",
      "strength": "50 mg/5 ml",
      "price": 30.4579
    },
    {
      "name": "Vitamin A",
      "form": "tab-cap",
      "strength": "30 mg",
      "price": 0.0376
    },
    {
      "name": "Vitamin A",
      "form": "tab-cap",
      "strength": "7.5 mg",
      "price": 0.039
    },
    {
      "name": "Vitamin A",
      "form": "tab-cap",
      "strength": "15 mg",
      "price": 0.0451
    },
    {
      "name": "Vitamin A",
      "form": "tab-cap",
      "strength": "60 mg",
      "price": 0.0558
    },
    {
      "name": "Vitamin A",
      "form": "tab-cap",
      "strength": "3 mg",
      "price": 0.0374
    },
    {
      "name": "Vitamin B Complex",
      "form": "syrup",
      "strength": "",
      "price": 0.0037
    },
    {
      "name": "Vitamin B Complex",
      "form": "tab-cap",
      "strength": "",
      "price": 0.0052
    },
    {
      "name": "Vitamin B Complex",
      "form": "ampoule",
      "strength": "",
      "price": 0.0669
    },
    {
      "name": "Vitamin B1",
      "form": "tab-cap",
      "strength": "100 mg",
      "price": 0.0221
    },
    {
      "name": "Vitamin B1",
      "form": "ampoule",
      "strength": "100 mg/ml",
      "price": 0.217
    },
    {
      "name": "Vitamin B1",
      "form": "tab-cap",
      "strength": "50 mg",
      "price": 0.0067
    },
    {
      "name": "Vitamin B12",
      "form": "ampoule",
      "strength": "1 mg/ml",
      "price": 0.6915
    },
    {
      "name": "Vitamin B6",
      "form": "tab-cap",
      "strength": "25 mg",
      "price": 0.0059
    },
    {
      "name": "Vitamin B6",
      "form": "tab-cap",
      "strength": "50 mg",
      "price": 0.0179
    },
    {
      "name": "Vitamin B6",
      "form": "ampoule",
      "strength": "50 mg/ml",
      "price": 0.4384
    },
    {
      "name": "Vitamin C",
      "form": "tab-cap",
      "strength": "100 mg",
      "price": 0.0062
    },
    {
      "name": "Vitamin C",
      "form": "tab-cap",
      "strength": "250 mg",
      "price": 0.0071
    },
    {
      "name": "Vitamin C",
      "form": "tab-cap",
      "strength": "500 mg",
      "price": 0.02
    },
    {
      "name": "Vitamin D",
      "form": "tab-cap",
      "strength": "0.25 mcg",
      "price": 0.3407
    },
    {
      "name": "Vitamin D3",
      "form": "drops",
      "strength": "10,000 IU/ml",
      "price": 0.0713
    },
    {
      "name": "Vitamin K1",
      "form": "tab-cap",
      "strength": "10 mg",
      "price": 0.2702
    },
    {
      "name": "Vitamin K1",
      "form": "ampoule",
      "strength": "10 mg/ml",
      "price": 0.3612
    },
    {
      "name": "Vitamin K1",
      "form": "ampoule",
      "strength": "1 mg/ml",
      "price": 0.3738
    },
    {
      "name": "Vitamin, Multi",
      "form": "syrup",
      "strength": "",
      "price": 0.0101
    },
    {
      "name": "Vitamin, Multi",
      "form": "tab-cap",
      "strength": "",
      "price": 0.0166
    },
    {
      "name": "Vitamin, Multi",
      "form": "drops",
      "strength": "",
      "price": 0.0274
    },
    {
      "name": "Vitamin, Multi + Iron",
      "form": "tab-cap",
      "strength": "",
      "price": 0.0575
    },
    {
      "name": "Vitamin, Multi + Minerals",
      "form": "tab-cap",
      "strength": "",
      "price": 0.02
    },
    {
      "name": "Warfarin Sodium",
      "form": "tab-cap",
      "strength": "3 mg",
      "price": 0.0336
    },
    {
      "name": "Warfarin Sodium",
      "form": "tab-cap",
      "strength": "1 mg",
      "price": 0.04
    },
    {
      "name": "Warfarin Sodium",
      "form": "tab-cap",
      "strength": "5 mg",
      "price": 0.0453
    },
    {
      "name": "Warfarin Sodium",
      "form": "tab-cap",
      "strength": "2 mg",
      "price": 0.0458
    },
    {
      "name": "Water For Injection",
      "form": "ampoule",
      "strength": "5 ml",
      "price": 0.0399
    },
    {
      "name": "Water For Injection",
      "form": "ampoule",
      "strength": "10 ml",
      "price": 0.0584
    },
    {
      "name": "Water For Injection",
      "form": "vial",
      "strength": "100 ml",
      "price": 0.85
    },
    {
      "name": "Xylometazoline",
      "form": "nasal",
      "strength": "0.05%",
      "price": 0.0747
    },
    {
      "name": "Zidovudine",
      "form": "solution",
      "strength": "50 mg/5 ml",
      "price": 0.0103
    },
    {
      "name": "Zidovudine",
      "form": "tab-cap",
      "strength": "100 mg",
      "price": 0.0662
    },
    {
      "name": "Zidovudine",
      "form": "tab-cap",
      "strength": "300 mg",
      "price": 0.1888
    },
    {
      "name": "Zinc Oxide",
      "form": "ointment",
      "strength": "10%",
      "price": 0.012
    },
    {
      "name": "Zinc Sulfate",
      "form": "syrup",
      "strength": "10 mg/5 ml",
      "price": 0.0019
    },
    {
      "name": "Zinc Sulfate",
      "form": "syrup",
      "strength": "20 mg/5 ml",
      "price": 0.0025
    },
    {
      "name": "Zinc Sulfate",
      "form": "tab-cap",
      "strength": "10 mg",
      "price": 0.0072
    },
    {
      "name": "Zinc Sulfate",
      "form": "tab-cap",
      "strength": "20 mg",
      "price": 0.011
    },
    {
      "name": "Zinc Sulfate",
      "form": "tab-cap",
      "strength": "20 mg",
      "price": 0.0452
    },
    {
      "name": "Zoledronic Acid",
      "form": "vial",
      "strength": "4 mg/5 ml",
      "price": 29.38
    }
  ];
  return medicine;
}
