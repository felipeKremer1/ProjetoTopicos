const GoogleChartsNode = require("google-charts-node");
const { load, parseCSV } = require("csv-load-sync");
const { parse } = require("fast-csv");
const csv = load("dee-3859 (1).csv");

//console.log(csv.findIndex('Bom Princípio'))

const csv1 = load("dee-3861 (1).csv");
bp = new Array();
feliz = new Array();
SsC = new Array();
farroupilha = new Array();
caxias = new Array();
flores = new Array();
const municipios = new Array();
for (var i = 0; i < csv.length; i++) {
  if (csv[i]["municipio"] == "Bom Princípio") {
    bpTitle = csv[i]["municipio"];
    bpCount2010 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2010 (-)"
      ];
    bpCount2011 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2011 (-)"
      ];
    bpCount2012 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2012 (-)"
      ];
    bpCount2013 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2013 (-)"
      ];
    bpCount2014 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2014 (-)"
      ];
    bpCount2015 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2015 (-)"
      ];
    bpCount2016 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2016 (-)"
      ];
    bpCount2017 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2017 (-)"
      ];
    bpCount2018 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2018 (-)"
      ];
    bpCount2019 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2019 (-)"
      ];
    bpCount2020 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2020 (-)"
      ];
    bp[0] = bpTitle;
    bp[1] = parseInt(bpCount2010);
    bp[2] = parseInt(bpCount2011);
    bp[3] = parseInt(bpCount2012);
    bp[4] = parseInt(bpCount2013);
    bp[5] = parseInt(bpCount2014);
    bp[6] = parseInt(bpCount2015);
    bp[7] = parseInt(bpCount2016);
    bp[8] = parseInt(bpCount2017);
    bp[9] = parseInt(bpCount2018);
    bp[10] = parseInt(bpCount2019);
    bp[11] = parseInt(bpCount2020);
  }
}
for (var i = 0; i < csv1.length; i++) {
  if (csv1[i]["municipio"] == "Bom Princípio") {
    bpTitle = csv1[i]["municipio"];
    bpCount2010 =
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2010 (-)"
      ];
    bpCount2011 =
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2011 (-)"
      ];
    bpCount2012 =
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2012 (-)"
      ];
    bpCount2013 =
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2013 (-)"
      ];
    bpCount2014 =
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2014 (-)"
      ];
    bpCount2015 =
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2015 (-)"
      ];
    bpCount2016 =
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2016 (-)"
      ];
    bpCount2017 =
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2017 (-)"
      ];
    bpCount2018 =
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2018 (-)"
      ];
    bpCount2019 =
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2019 (-)"
      ];
    bpCount2020 =
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2020 (-)"
      ];

    bp[1] = bp[1] + parseInt(bpCount2010);
    bp[2] = bp[2] + parseInt(bpCount2011);
    bp[3] = bp[3] + parseInt(bpCount2012);
    bp[4] = bp[4] + parseInt(bpCount2013);
    bp[5] = bp[5] + parseInt(bpCount2014);
    bp[6] = bp[6] + parseInt(bpCount2015);
    bp[7] = bp[7] + parseInt(bpCount2016);
    bp[8] = bp[8] + parseInt(bpCount2017);
    bp[9] = bp[9] + parseInt(bpCount2018);
    bp[10] = bp[10] + parseInt(bpCount2019);
    bp[11] = bp[11] + parseInt(bpCount2020);
  }
}
for (var i = 0; i < csv.length; i++) {
  if (csv[i]["municipio"] == "Feliz") {
    felizTitle = csv[i]["municipio"];
    felizCount2010 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2010 (-)"
      ];
    felizCount2011 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2011 (-)"
      ];
    felizCount2012 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2012 (-)"
      ];
    felizCount2013 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2013 (-)"
      ];
    felizCount2014 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2014 (-)"
      ];
    felizCount2015 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2015 (-)"
      ];
    felizCount2016 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2016 (-)"
      ];
    felizCount2017 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2017 (-)"
      ];
    felizCount2018 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2018 (-)"
      ];
    felizCount2019 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2019 (-)"
      ];
    felizCount2020 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2020 (-)"
      ];
    feliz[0] = felizTitle;
    feliz[1] = parseInt(felizCount2010);
    feliz[2] = parseInt(felizCount2011);
    feliz[3] = parseInt(felizCount2012);
    feliz[4] = parseInt(felizCount2013);
    feliz[5] = parseInt(felizCount2014);
    feliz[6] = parseInt(felizCount2015);
    feliz[7] = parseInt(felizCount2016);
    feliz[8] = parseInt(felizCount2017);
    feliz[9] = parseInt(felizCount2018);
    feliz[10] = parseInt(felizCount2019);
    feliz[11] = parseInt(felizCount2020);
  }
}
for (var i = 0; i < csv1.length; i++) {
  if (csv1[i]["municipio"] == "Feliz") {
    felizCount2010 =
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2010 (-)"
      ];
    felizCount2011 =
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2011 (-)"
      ];
    felizCount2012 =
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2012 (-)"
      ];
    felizCount2013 =
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2013 (-)"
      ];
    felizCount2014 =
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2014 (-)"
      ];
    felizCount2015 =
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2015 (-)"
      ];
    felizCount2016 =
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2016 (-)"
      ];
    felizCount2017 =
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2017 (-)"
      ];
    felizCount2018 =
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2018 (-)"
      ];
    felizCount2019 =
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2019 (-)"
      ];
    felizCount2020 =
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2020 (-)"
      ];

    feliz[1] = feliz[1] + parseInt(felizCount2010);
    feliz[2] = feliz[2] + parseInt(felizCount2011);
    feliz[3] = feliz[3] + parseInt(felizCount2012);
    feliz[4] = feliz[4] + parseInt(felizCount2013);
    feliz[5] = feliz[5] + parseInt(felizCount2014);
    feliz[6] = feliz[6] + parseInt(felizCount2015);
    feliz[7] = feliz[7] + parseInt(felizCount2016);
    feliz[8] = feliz[8] + parseInt(felizCount2017);
    feliz[9] = feliz[9] + parseInt(felizCount2018);
    feliz[10] = feliz[10] + parseInt(felizCount2019);
    feliz[11] = feliz[11] + parseInt(felizCount2020);
  }
}
for (var i = 0; i < csv.length; i++) {
  if (csv[i]["municipio"] == "São Sebastião do Caí") {
    sscTitle = csv[i]["municipio"];
    sscCount2010 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2010 (-)"
      ];
    sscCount2011 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2011 (-)"
      ];
    sscCount2012 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2012 (-)"
      ];
    sscCount2013 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2013 (-)"
      ];
    sscCount2014 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2014 (-)"
      ];
    sscCount2015 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2015 (-)"
      ];
    sscCount2016 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2016 (-)"
      ];
    sscCount2017 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2017 (-)"
      ];
    sscCount2018 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2018 (-)"
      ];
    sscCount2019 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2019 (-)"
      ];
    sscCount2020 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2020 (-)"
      ];
    SsC[0] = sscTitle;
    SsC[1] = parseInt(sscCount2010);
    SsC[2] = parseInt(sscCount2011);
    SsC[3] = parseInt(sscCount2012);
    SsC[4] = parseInt(sscCount2013);
    SsC[5] = parseInt(sscCount2014);
    SsC[6] = parseInt(sscCount2015);
    SsC[7] = parseInt(sscCount2016);
    SsC[8] = parseInt(sscCount2017);
    SsC[9] = parseInt(sscCount2018);
    SsC[10] = parseInt(sscCount2019);
    SsC[11] = parseInt(sscCount2020);
  }
}
for (var i = 0; i < csv1.length; i++) {
  if (csv1[i]["municipio"] == "São Sebastião do Caí") {
    sscCount2010 =
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2010 (-)"
      ];
    sscCount2011 =
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2011 (-)"
      ];
    sscCount2012 =
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2012 (-)"
      ];
    sscCount2013 =
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2013 (-)"
      ];
    sscCount2014 =
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2014 (-)"
      ];
    sscCount2015 =
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2015 (-)"
      ];
    sscCount2016 =
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2016 (-)"
      ];
    sscCount2017 =
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2017 (-)"
      ];
    sscCount2018 =
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2018 (-)"
      ];
    sscCount2019 =
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2019 (-)"
      ];
    sscCount2020 =
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2020 (-)"
      ];

    SsC[1] = SsC[1] + parseInt(sscCount2010);
    SsC[2] = SsC[2] + parseInt(sscCount2011);
    SsC[3] = SsC[3] + parseInt(sscCount2012);
    SsC[4] = SsC[4] + parseInt(sscCount2013);
    SsC[5] = SsC[5] + parseInt(sscCount2014);
    SsC[6] = SsC[6] + parseInt(sscCount2015);
    SsC[7] = SsC[7] + parseInt(sscCount2016);
    SsC[8] = SsC[8] + parseInt(sscCount2017);
    SsC[9] = SsC[9] + parseInt(sscCount2018);
    SsC[10] = SsC[10] + parseInt(sscCount2019);
    SsC[11] = SsC[11] + parseInt(sscCount2020);
  }
}
for (var i = 0; i < csv.length; i++) {
  if (csv[i]["municipio"] == "Caxias do Sul") {
    caxiasTitle = csv[i]["municipio"];
    caxiasCount2010 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2010 (-)"
      ];
    caxiasCount2011 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2011 (-)"
      ];
    caxiasCount2012 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2012 (-)"
      ];
    caxiasCount2013 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2013 (-)"
      ];
    caxiasCount2014 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2014 (-)"
      ];
    caxiasCount2015 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2015 (-)"
      ];
    caxiasCount2016 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2016 (-)"
      ];
    caxiasCount2017 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2017 (-)"
      ];
    caxiasCount2018 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2018 (-)"
      ];
    caxiasCount2019 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2019 (-)"
      ];
    caxiasCount2020 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2020 (-)"
      ];
    caxias[0] = caxiasTitle;
    caxias[1] = parseFloat(caxiasCount2010);
    caxias[2] = parseFloat(caxiasCount2011);
    caxias[3] = parseFloat(caxiasCount2012);
    caxias[4] = parseFloat(caxiasCount2013);
    caxias[5] = parseFloat(caxiasCount2014);
    caxias[6] = parseFloat(caxiasCount2015);
    caxias[7] = parseFloat(caxiasCount2016);
    caxias[8] = parseFloat(caxiasCount2017);
    caxias[9] = parseFloat(caxiasCount2018);
    caxias[10] = parseFloat(caxiasCount2019);
    caxias[11] = parseFloat(caxiasCount2020);
  }
}
for (var i = 0; i < csv1.length; i++) {
  if (csv1[i]["ibge"] == 4305108) {
    caxiasCount2010 =
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2010 (-)"
      ];
    caxiasCount2011 =
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2011 (-)"
      ];
    caxiasCount2012 =
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2012 (-)"
      ];
    caxiasCount2013 =
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2013 (-)"
      ];
    caxiasCount2014 =
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2014 (-)"
      ];
    caxiasCount2015 =
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2015 (-)"
      ];
    caxiasCount2016 =
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2016 (-)"
      ];
    caxiasCount2017 =
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2017 (-)"
      ];
    caxiasCount2018 =
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2018 (-)"
      ];
    caxiasCount2019 =
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2019 (-)"
      ];
    caxiasCount2020 =
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2020 (-)"
      ];

    caxias[1] = caxias[1] + parseFloat(caxiasCount2010);
    caxias[2] = caxias[2] + parseFloat(caxiasCount2011);
    caxias[3] = caxias[3] + parseFloat(caxiasCount2012);
    caxias[4] = caxias[4] + parseFloat(caxiasCount2013);
    caxias[5] = caxias[5] + parseFloat(caxiasCount2014);
    caxias[6] = caxias[6] + parseFloat(caxiasCount2015);
    caxias[7] = caxias[7] + parseFloat(caxiasCount2016);
    caxias[8] = caxias[8] + parseFloat(caxiasCount2017);
    caxias[9] = caxias[9] + parseFloat(caxiasCount2018);
    caxias[10] = caxias[10] + parseFloat(caxiasCount2019);
    caxias[11] = caxias[11] + parseFloat(caxiasCount2020);
  }
}
for (var i = 0; i < csv.length; i++) {
  if (csv[i]["municipio"] == "Farroupilha") {
    fTitle = csv[i]["municipio"];
    fCount2010 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2010 (-)"
      ];
    fCount2011 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2011 (-)"
      ];
    fCount2012 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2012 (-)"
      ];
    fCount2013 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2013 (-)"
      ];
    fCount2014 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2014 (-)"
      ];
    fCount2015 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2015 (-)"
      ];
    fCount2016 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2016 (-)"
      ];
    fCount2017 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2017 (-)"
      ];
    fCount2018 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2018 (-)"
      ];
    fCount2019 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2019 (-)"
      ];
    fCount2020 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2020 (-)"
      ];
    farroupilha[0] = fTitle;
    farroupilha[1] = parseFloat(fCount2010);
    farroupilha[2] = parseFloat(fCount2011);
    farroupilha[3] = parseFloat(fCount2012);
    farroupilha[4] = parseFloat(fCount2013);
    farroupilha[5] = parseFloat(fCount2014);
    farroupilha[6] = parseFloat(fCount2015);
    farroupilha[7] = parseFloat(fCount2016);
    farroupilha[8] = parseFloat(fCount2017);
    farroupilha[9] = parseFloat(fCount2018);
    farroupilha[10] = parseFloat(fCount2019);
    farroupilha[11] = parseFloat(fCount2020);
  }
}
for (var i = 0; i < csv1.length; i++) {
  if (csv1[i]["municipio"] == "Farroupilha") {
    fCount2010 = parseFloat(
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2010 (-)"
      ]
    );
    fCount2011 = parseFloat(
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2011 (-)"
      ]
    );
    fCount2012 = parseFloat(
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2012 (-)"
      ]
    );
    fCount2013 = parseFloat(
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2013 (-)"
      ]
    );
    fCount2014 = parseFloat(
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2014 (-)"
      ]
    );
    fCount2015 = parseFloat(
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2015 (-)"
      ]
    );
    fCount2016 = parseFloat(
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2016 (-)"
      ]
    );
    fCount2017 = parseFloat(
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2017 (-)"
      ]
    );
    fCount2018 = parseFloat(
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2018 (-)"
      ]
    );
    fCount2019 = parseFloat(
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2019 (-)"
      ]
    );
    fCount2020 = parseFloat(
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2020 (-)"
      ]
    );

    farroupilha[1] = farroupilha[1] + fCount2010;
    farroupilha[2] = farroupilha[2] + fCount2011;
    farroupilha[3] = farroupilha[3] + fCount2012;
    farroupilha[4] = farroupilha[4] + fCount2013;
    farroupilha[5] = farroupilha[5] + fCount2014;
    farroupilha[6] = farroupilha[6] + fCount2015;
    farroupilha[7] = farroupilha[7] + fCount2016;
    farroupilha[8] = farroupilha[8] + fCount2017;
    farroupilha[9] = farroupilha[9] + fCount2018;
    farroupilha[10] = farroupilha[10] + fCount2010;
    farroupilha[11] = farroupilha[11] + fCount2020;
  }
}
for (var i = 0; i < csv.length; i++) {
  if (csv[i]["municipio"] == "Flores da Cunha") {
    floresTitle = csv[i]["municipio"];
    floresCount2010 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2010 (-)"
      ];
    floresCount2011 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2011 (-)"
      ];
    floresCount2012 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2012 (-)"
      ];
    floresCount2013 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2013 (-)"
      ];
    floresCount2014 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2014 (-)"
      ];
    floresCount2015 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2015 (-)"
      ];
    floresCount2016 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2016 (-)"
      ];
    floresCount2017 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2017 (-)"
      ];
    floresCount2018 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2018 (-)"
      ];
    floresCount2019 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2019 (-)"
      ];
    floresCount2020 =
      csv[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 15 a 17 anos 2020 (-)"
      ];
    flores[0] = floresTitle;
    flores[1] = parseFloat(floresCount2010);
    flores[2] = parseFloat(floresCount2011);
    flores[3] = parseFloat(floresCount2012);
    flores[4] = parseFloat(floresCount2013);
    flores[5] = parseFloat(floresCount2014);
    flores[6] = parseFloat(floresCount2015);
    flores[7] = parseFloat(floresCount2016);
    flores[8] = parseFloat(floresCount2017);
    flores[9] = parseFloat(floresCount2018);
    flores[10] = parseFloat(floresCount2019);
    flores[11] = parseFloat(floresCount2020);
  }
}
for (var i = 0; i < csv1.length; i++) {
  if (csv1[i]["municipio"] == "Flores da Cunha") {
    floresCount2010 =
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2010 (-)"
      ];
    floresCount2011 =
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2011 (-)"
      ];
    floresCount2012 =
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2012 (-)"
      ];
    floresCount2013 =
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2013 (-)"
      ];
    floresCount2014 =
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2014 (-)"
      ];
    floresCount2015 =
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2015 (-)"
      ];
    floresCount2016 =
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2016 (-)"
      ];
    floresCount2017 =
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2017 (-)"
      ];
    floresCount2018 =
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2018 (-)"
      ];
    floresCount2019 =
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2019 (-)"
      ];
    floresCount2020 =
      csv1[i][
        "/Emprego/Número de Vínculos Empregatícios/Ativos/Faixa Etária/de 18 a 24 anos 2020 (-)"
      ];

    flores[1] = flores[1] + parseFloat(floresCount2010);
    flores[2] = flores[2] + parseFloat(floresCount2011);
    flores[3] = flores[3] + parseFloat(floresCount2012);
    flores[4] = flores[4] + parseFloat(floresCount2013);
    flores[5] = flores[5] + parseFloat(floresCount2014);
    flores[6] = flores[6] + parseFloat(floresCount2015);
    flores[7] = flores[7] + parseFloat(floresCount2016);
    flores[8] = flores[8] + parseFloat(floresCount2017);
    flores[9] = flores[9] + parseFloat(floresCount2018);
    flores[10] = flores[10] + parseFloat(floresCount2019);
    flores[11] = flores[11] + parseFloat(floresCount2020);
  }
}
municipios[0] = bp;
municipios[1] = feliz;
municipios[2] = SsC;
municipios[3] = caxias;
municipios[4] = farroupilha;
municipios[5] = flores;

var cidades = [
  {
    Cidade: bp[0],
    2010: bp[1],
    2011: bp[2],
    2012: bp[3],
    2013: bp[4],
    2014: bp[5],
    2015: bp[6],
    2016: bp[7],
    2017: bp[8],
    2018: bp[9],
    2019: bp[10],
    2020: bp[11],
  },
  {
    Cidade: feliz[0],
    2010: feliz[1],
    2011: feliz[2],
    2012: feliz[3],
    2013: feliz[4],
    2014: feliz[5],
    2015: feliz[6],
    2016: feliz[7],
    2017: feliz[8],
    2018: feliz[9],
    2019: feliz[10],
    2020: feliz[11],
  },
  {
    Cidade: SsC[0],
    2010: SsC[1],
    2011: SsC[2],
    2012: SsC[3],
    2013: SsC[4],
    2014: SsC[5],
    2015: SsC[6],
    2016: SsC[7],
    2017: SsC[8],
    2018: SsC[9],
    2019: SsC[10],
    2020: SsC[11],
  },
  {
    Cidade: caxias[0],
    2010: caxias[1],
    2011: caxias[2],
    2012: caxias[3],
    2013: caxias[4],
    2014: caxias[5],
    2015: caxias[6],
    2016: caxias[7],
    2017: caxias[8],
    2018: caxias[9],
    2019: caxias[10],
    2020: caxias[11],
  },
  {
    Cidade: farroupilha[0],
    2010: farroupilha[1],
    2011: farroupilha[2],
    2012: farroupilha[3],
    2013: farroupilha[4],
    2014: farroupilha[5],
    2015: farroupilha[6],
    2016: farroupilha[7],
    2017: farroupilha[8],
    2018: farroupilha[9],
    2019: farroupilha[10],
    2020: farroupilha[11],
  },
  {
    Cidade: flores[0],
    2010: flores[1],
    2011: flores[2],
    2012: flores[3],
    2013: flores[4],
    2014: flores[5],
    2015: flores[6],
    2016: flores[7],
    2017: flores[8],
    2018: flores[9],
    2019: flores[10],
    2020: flores[11],
  },
];

// Define your chart drawing function
function drawChart() {
  const data = google.visualization.arrayToDataTable([
    ["City", "2010 Population"],
    ["New York City, NY", 8175000],
    ["Los Angeles, CA", 3792000],
    ["Chicago, IL", 2695000],
    ["Houston, TX", 2099000],
    ["Philadelphia, PA", 1526000],
  ]);

  const options = {
    title: "Population of Largest U.S. Cities",
    chartArea: { width: "50%" },
    hAxis: {
      title: "Total Population",
      minValue: 0,
    },
    vAxis: {
      title: "City",
    },
  };

  const chart = new google.visualization.BarChart(container);
  chart.draw(data, options);
}

console.log(cidades);
