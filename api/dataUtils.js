const axios = require('axios');
const Company = require('../model/company');

// Administration de systèmes d'information
// Conseil et maîtrise d'ouvrage en systèmes d'information
// Défense et conseil juridique
// Direction des systèmes d'information
// Etudes et développement informatique
// Expertise et support en systèmes d'information
// Maintenance informatique et bureautique
// Production et exploitation de systèmes d'information
// Rédaction technique

const companiesApiUrl = "https://api.emploi-store.fr/partenaire/labonneboite/v1/company/";

const romCodes = {
    romCodeAdministration: "M1801",
    romCodeConsultant: "M1806",
    romCodeDefense: "K1903",
    romCodeDirection: "M1803",
    romCodeDeveloppement: "M1805",
    romCodeSupport: "M1802",
    romCodeMaintenance: "I1401",
    romCodeProduction: "M1810",
    romCodeRedaction: "H1207"
};

function GetCompaniesData(romCode, token) {
    axios.get(
        `${companiesApiUrl}?rome_codes=${romCode}&departments=75,77,78,91,92,93,94,95`,
        { headers: { "Authorization": `Bearer ${token}` } })
        .then(res => {
            let companies = res.data.companies;
            Company.deleteMany({ matched_rome_code: romCode })
                .then(() => console.log(`${romCode} : Data deleted`));
            Company.insertMany(companies)
                .then(() => console.log(`${romCode} : Data inserted`));
        })
        .catch(err => console.log(err));
}

module.exports = {
    romCodes,
    GetCompaniesData
};
