const url = require('url');
const axios = require('axios');
const dataUtils = require('./dataUtils');


const authUrl = "https://entreprise.pole-emploi.fr/connexion/oauth2/access_token?realm=%2Fpartenaire";
const clientId = "PAR_myjobhandler_bd7ef31ee3afacc5ab2f20e72b9dd6707a29f9c8c673a7017c008e5fe54f78c5";
const secretKey = "0bab35b449fdddb1bc2d88e88ada57a1c33cfade51ac94d2cb8d3b6f0a7f7738";
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