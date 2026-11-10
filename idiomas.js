function cambiarIdioma(idioma) {

    if (!idioma) {

        const idiomaActual =
            localStorage.getItem("idioma") || "en";

        idioma = idiomaActual === "en" ? "es" : "en";
    }


    fetch("idiomas.json")

    .then(r => r.json())

    .then(datos => {

        const idiomaActual = datos[idioma];

        localStorage.setItem("idioma", idioma);

        document.documentElement.lang = idioma;


        // Navigation
        document.getElementById("navHome").textContent =
            idiomaActual.navHome;

        document.getElementById("navBikes").textContent =
            idiomaActual.navBikes;

        document.getElementById("navAbout").textContent =
            idiomaActual.navAbout;

        const navLogin = document.getElementById("navLogin");
        if (navLogin) {
            if (navLogin.getAttribute("href") === "logout.php") {
                navLogin.textContent = idiomaActual.navLogout;
            } else {
                navLogin.textContent = idiomaActual.navLogin;
            }
        }

        const languageButton =
            document.getElementById("languageButton");

        if (languageButton) {

            if (idioma === "en") {

                languageButton.textContent =
                    idiomaActual.changeToSpanish;

            } else {

                languageButton.textContent =
                    idiomaActual.changeToEnglish;
            }
        }


        // Home
        const homeTitle =
            document.getElementById("homeTitle");

        if (homeTitle) {

            homeTitle.textContent =
                idiomaActual.homeTitle;
        }


        const homeDescription =
            document.getElementById("homeDescription");

        if (homeDescription) {

            homeDescription.textContent =
                idiomaActual.homeDescription;
        }


        const homeSubtitle =
            document.getElementById("homeSubtitle");

        if (homeSubtitle) {

            homeSubtitle.textContent =
                idiomaActual.homeSubtitle;
        }


        // Bikes
        const bikesTitle =
            document.getElementById("bikesTitle");

        if (bikesTitle) {

            bikesTitle.textContent =
                idiomaActual.bikesTitle;
        }


        const bikesDescription =
            document.getElementById("bikesDescription");

        if (bikesDescription) {

            bikesDescription.textContent =
                idiomaActual.bikesDescription;
        }


        const mountain =
            document.getElementById("mountain");

        if (mountain) {

            mountain.textContent =
                idiomaActual.mountain;
        }


        const mountainText =
            document.getElementById("mountainText");

        if (mountainText) {

            mountainText.textContent =
                idiomaActual.mountainText;
        }


        const city =
            document.getElementById("city");

        if (city) {

            city.textContent =
                idiomaActual.city;
        }


        const cityText =
            document.getElementById("cityText");

        if (cityText) {

            cityText.textContent =
                idiomaActual.cityText;
        }


        const electric =
            document.getElementById("electric");

        if (electric) {

            electric.textContent =
                idiomaActual.electric;
        }


        const electricText =
            document.getElementById("electricText");

        if (electricText) {

            electricText.textContent =
                idiomaActual.electricText;
        }


        const bmx =
            document.getElementById("bmx");

        if (bmx) {

            bmx.textContent =
                idiomaActual.bmx;
        }


        const bmxText =
            document.getElementById("bmxText");

        if (bmxText) {

            bmxText.textContent =
                idiomaActual.bmxText;
        }


        const road =
            document.getElementById("road");

        if (road) {

            road.textContent =
                idiomaActual.road;
        }


        const roadText =
            document.getElementById("roadText");

        if (roadText) {

            roadText.textContent =
                idiomaActual.roadText;
        }


        const hybrid =
            document.getElementById("hybrid");

        if (hybrid) {

            hybrid.textContent =
                idiomaActual.hybrid;
        }


        const hybridText =
            document.getElementById("hybridText");

        if (hybridText) {

            hybridText.textContent =
                idiomaActual.hybridText;
        }


        const available =
            document.getElementById("available");

        if (available) {

            available.textContent =
                idiomaActual.available;
        }


        const notAvailable =
            document.getElementById("notAvailable");

        if (notAvailable) {

            notAvailable.textContent =
                idiomaActual.notAvailable;
        }


        const rent =
            document.getElementById("rent");

        if (rent) {

            rent.textContent =
                idiomaActual.rent;
        }


        // About
        const aboutTitle =
            document.getElementById("aboutTitle");

        if (aboutTitle) {

            aboutTitle.textContent =
                idiomaActual.aboutTitle;
        }


        const aboutDescription =
            document.getElementById("aboutDescription");

        if (aboutDescription) {

            aboutDescription.textContent =
                idiomaActual.aboutDescription;
        }


        const purposeTitle =
            document.getElementById("purposeTitle");

        if (purposeTitle) {

            purposeTitle.textContent =
                idiomaActual.purposeTitle;
        }


        const purposeText =
            document.getElementById("purposeText");

        if (purposeText) {

            purposeText.textContent =
                idiomaActual.purposeText;
        }


        const serviceTitle =
            document.getElementById("serviceTitle");

        if (serviceTitle) {

            serviceTitle.textContent =
                idiomaActual.serviceTitle;
        }


        const serviceText =
            document.getElementById("serviceText");

        if (serviceText) {

            serviceText.textContent =
                idiomaActual.serviceText;
        }


        const whyTitle =
            document.getElementById("whyTitle");

        if (whyTitle) {

            whyTitle.textContent =
                idiomaActual.whyTitle;
        }


        const whyText =
            document.getElementById("whyText");

        if (whyText) {

            whyText.textContent =
                idiomaActual.whyText;
        }


        const visionTitle =
            document.getElementById("visionTitle");

        if (visionTitle) {

            visionTitle.textContent =
                idiomaActual.visionTitle;
        }


        const visionText =
            document.getElementById("visionText");

        if (visionText) {

            visionText.textContent =
                idiomaActual.visionText;
        }


        const technologyTitle =
            document.getElementById("technologyTitle");

        if (technologyTitle) {

            technologyTitle.textContent =
                idiomaActual.technologyTitle;
        }


        const technologyText =
            document.getElementById("technologyText");

        if (technologyText) {

            technologyText.textContent =
                idiomaActual.technologyText;
        }


        const commitmentTitle =
            document.getElementById("commitmentTitle");

        if (commitmentTitle) {

            commitmentTitle.textContent =
                idiomaActual.commitmentTitle;
        }


        const commitmentText =
            document.getElementById("commitmentText");

        if (commitmentText) {

            commitmentText.textContent =
                idiomaActual.commitmentText;
        }


        // Login
        const loginTitle =
            document.getElementById("loginTitle");

        if (loginTitle) {

            loginTitle.textContent =
                idiomaActual.loginTitle;
        }


        const loginDescription =
            document.getElementById("loginDescription");

        if (loginDescription) {

            loginDescription.textContent =
                idiomaActual.loginDescription;
        }


        const username =
            document.getElementById("username");

        if (username) {

            username.placeholder =
                idiomaActual.username;
        }


        const password =
            document.getElementById("password");

        if (password) {

            password.placeholder =
                idiomaActual.password;
        }


        const loginButton =
            document.getElementById("loginButton");

        if (loginButton) {

            loginButton.textContent =
                idiomaActual.loginButton;
        }


        const noAccount =
            document.getElementById("noAccount");

        if (noAccount) {

            noAccount.textContent =
                idiomaActual.noAccount;
        }


        const registerHere =
            document.getElementById("registerHere");

        if (registerHere) {

            registerHere.textContent =
                idiomaActual.registerHere;
        }


        // Register
        const registerTitle =
            document.getElementById("registerTitle");

        if (registerTitle) {

            registerTitle.textContent =
                idiomaActual.registerTitle;
        }


        const confirmPassword =
            document.getElementById("confirmPassword");

        if (confirmPassword) {

            confirmPassword.placeholder =
                idiomaActual.confirmPassword;
        }


        const registerButton =
            document.getElementById("registerButton");

        if (registerButton) {

            registerButton.textContent =
                idiomaActual.registerButton;
        }


        const alreadyAccount =
            document.getElementById("alreadyAccount");

        if (alreadyAccount) {

            alreadyAccount.textContent =
                idiomaActual.alreadyAccount;
        }


        const loginHere =
            document.getElementById("loginHere");

        if (loginHere) {

            loginHere.textContent =
                idiomaActual.loginHere;
        }


        // Footer
        const footer =
            document.getElementById("footer");

        if (footer) {

            footer.textContent =
                idiomaActual.footer;
        }

    });

}


document.addEventListener("DOMContentLoaded", () => {

    const idiomaGuardado =
        localStorage.getItem("idioma") || "en";

    cambiarIdioma(idiomaGuardado);

});