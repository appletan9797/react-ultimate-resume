"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.basicsValidationTranslations = void 0;

var _reactIntl = require("react-intl");

var basicsValidationTranslations = (0, _reactIntl.defineMessages)({
  atLeastOneContractType: {
    id: 'Basics.form.validation.selectOne',
    defaultMessage: 'Veuillez sélectionner au moins un contrat !'
  },
  selectByGroup: {
    id: 'Basics.form.validation.byGroup',
    defaultMessage: 'Vous ne pouvez pas sélectionner Stage ou Alternance en meme temps que CDI/CDD/Freelance'
  }
});
exports.basicsValidationTranslations = basicsValidationTranslations;