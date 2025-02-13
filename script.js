function verificarPais() {
  var res = document.getElementById("resposta");
  var paragrafo = document.getElementById("paragrafo");
  var txtPais = document.getElementsByName("txtpais");
  var img = document.createElement("img");
  var texto = document.createElement("p");

  var pais = "";
  var paragrafo = "";

  img.setAttribute("id", "foto");
  if (txtPais[0].checked) {
    pais = "Japão";
    img.setAttribute("src", "img/japao.png");
    paragrafo =
      "Japão é um país insular localizado no leste da Ásia. Famoso pela sua cultura rica, que mistura tradições antigas com tecnologias avançadas, o Japão é conhecido por sua culinária, como sushi e ramen, além de seu forte sistema educacional e inovação tecnológica. Cidades como Tóquio e Quioto são referências em modernidade e história, respectivamente";
  } else if (txtPais[1].checked) {
    pais = "Brasil";
    img.setAttribute("src", "img/brasil.png");
    paragrafo =
      "O Brasil é o maior país da América Latina e um dos maiores do mundo em termos de território e população. Conhecido por suas belezas naturais, como a Amazônia, as praias do Rio de Janeiro e as Cataratas do Iguaçu, o Brasil também é famoso pelo futebol, pelo Carnaval e pela diversidade cultural. Sua economia é a maior da América do Sul.";
  } else if (txtPais[2].checked) {
    pais = "França";
    img.setAttribute("src", "img/franca.png");
    paragrafo =
      "A França, localizada na Europa Ocidental, é conhecida por sua história, arte, moda e gastronomia. Paris, sua capital, é famosa pela Torre Eiffel e pelos museus como o Louvre. O país também tem um grande impacto cultural, sendo berço de movimentos filosóficos e artísticos importantes, como o Impressionismo e o Existencialismo.";
  } else if (txtPais[3].checked) {
    pais = "Índia";
    img.setAttribute("src", "img/india.png");
    paragrafo =
      "A Índia, localizada no sul da Ásia, é um dos países mais populosos do mundo e tem uma história rica e diversa. Com uma herança cultural que inclui religiões como o Hinduísmo, Budismo e Sikhismo, a Índia é também o lar de importantes monumentos, como o Taj Mahal. A economia indiana está em crescimento e o país tem um papel significativo na indústria de tecnologia e cinema.";
  } else if (txtPais[4].checked) {
    pais = "Canadá";
    img.setAttribute("src", "img/canada.png");
    paragrafo =
      "O Canadá, localizado na América do Norte, é conhecido por sua vastidão territorial, que inclui montanhas, lagos e florestas. É um dos países mais desenvolvidos do mundo, com alta qualidade de vida e uma sociedade multicultural. A cidade de Vancouver, por exemplo, é famosa pela sua beleza natural e por ser um centro de sustentabilidade ambiental. O Canadá também é um importante polo de imigração.";
  }
  texto.innerHTML = paragrafo;
  res.innerHTML = `<h1>O seu país é o ${pais}<br></h1>`;
  res.appendChild(texto);
  res.appendChild(img);
}
