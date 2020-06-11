require("babel-register")({
  presets: ["es2015", "react", "env"]
});
 
const router = require("./routes").default;
const Sitemap = require("react-router-sitemap").default;

function generateSitemap() {
    return (
      new Sitemap(router)
          .build("http://www.theelysiancatering.com")
          .save("./public/sitemap.xml")
    );
}

generateSitemap();
