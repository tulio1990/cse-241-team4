
const professional = (req, res, next) => {
  // res.json("Doctor");
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");
  res.json([{
    professionalName: "Alberto",
    base64Image: "",
    primaryDescription: "Descripción",
    workDescription1: "Primera Descripción",
    workDescription2: "Segunda descripción",
    linkTitleText: "Titulo",
    githubLink: {
        text: "GitHUb",
        link: "https://github.com/"
    },
    linkedInLink: {
        text: "LInkedin",
        link: "https://linkedin.com/"
    },
    nameLink: {
        firstName: "Jacob",
        url: "https://es.dreamstime.com/stock-de-ilustraci%C3%B3n-profesiones-conjunto-de-personajes-de-dibujos-animados-image95523011"
    },
  }]);
};

module.exports = {  professional };
