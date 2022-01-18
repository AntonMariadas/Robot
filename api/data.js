const url = require('url');
require('dotenv').config();
const axios = require('axios');
const dataUtils = require('./dataUtils');


const authUrl = "https://entreprise.pole-emploi.fr/connexion/oauth2/access_token?realm=%2Fpartenaire";
const clientId = process.env.CLIENT_ID;
const secretKey = process.env.SECRET_KEY;
const credentials = new url.URLSearchParams({
    "grant_type": "client_credentials",
    "client_id": clientId,
    "client_secret": secretKey,
    "scope": `application_${clientId} api_labonneboitev1`
});

const refreshCompaniesData = async () => {
    try {
        const res = await axios.post(authUrl, credentials.toString());
        let token = res.data.access_token;
        dataUtils.getCompaniesData(dataUtils.romCodes.romCodeAdministration, token);
        dataUtils.getCompaniesData(dataUtils.romCodes.romCodeAdministration, token);
        dataUtils.getCompaniesData(dataUtils.romCodes.romCodeConsultant, token);
        dataUtils.getCompaniesData(dataUtils.romCodes.romCodeDefense, token);
        dataUtils.getCompaniesData(dataUtils.romCodes.romCodeDeveloppement, token);
        dataUtils.getCompaniesData(dataUtils.romCodes.romCodeDirection, token);
        dataUtils.getCompaniesData(dataUtils.romCodes.romCodeMaintenance, token);
        dataUtils.getCompaniesData(dataUtils.romCodes.romCodeProduction, token);
        dataUtils.getCompaniesData(dataUtils.romCodes.romCodeRedaction, token);
        dataUtils.getCompaniesData(dataUtils.romCodes.romCodeSupport, token);
    } catch (error) {
        console.log("Error while refreshing datas", error);
    }
};



module.exports = {
    refreshCompaniesData
};