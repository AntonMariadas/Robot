const url = require('url');
require('dotenv').config();
const axios = require('axios');
const dataUtils = require('./dataUtils');

const authUrl = "https://entreprise.pole-emploi.fr/connexion/oauth2/access_token?realm=%2Fpartenaire";
const clientId = process.env.CLIENT_ID;
const secretKey = process.env.SECRET_KEY;
let token = null;


const credentials = new url.URLSearchParams({
    "grant_type": "client_credentials",
    "client_id": clientId,
    "client_secret": secretKey,
    "scope": `application_${clientId} api_labonneboitev1`
});


function refreshCompaniesData() {
    axios.post(authUrl, credentials.toString())
        .then(res => {
            token = res.data.access_token;
            dataUtils.GetCompaniesData(dataUtils.romCodes.romCodeAdministration, token);
            dataUtils.GetCompaniesData(dataUtils.romCodes.romCodeAdministration, token);
            dataUtils.GetCompaniesData(dataUtils.romCodes.romCodeConsultant, token);
            dataUtils.GetCompaniesData(dataUtils.romCodes.romCodeDefense, token);
            dataUtils.GetCompaniesData(dataUtils.romCodes.romCodeDeveloppement, token);
            dataUtils.GetCompaniesData(dataUtils.romCodes.romCodeDirection, token);
            dataUtils.GetCompaniesData(dataUtils.romCodes.romCodeMaintenance, token);
            dataUtils.GetCompaniesData(dataUtils.romCodes.romCodeProduction, token);
            dataUtils.GetCompaniesData(dataUtils.romCodes.romCodeRedaction, token);
            dataUtils.GetCompaniesData(dataUtils.romCodes.romCodeSupport, token);
        })
        .catch(err => console.log(err));
}

module.exports = {
    refreshCompaniesData
};