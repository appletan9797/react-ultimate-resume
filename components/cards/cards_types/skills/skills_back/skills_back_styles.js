"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _styles_utils = require("../../../../../utils/styles/styles_utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  return {
    container: function container(_ref) {
      var variant = _ref.variant;
      return _objectSpread({
        display: 'flex',
        flexWrap: 'wrap',
        overflow: 'auto'
      }, (0, _styles_utils.withCustomVerticalScrollbar)((0, _styles_utils.getHexFromPaletteColor)(theme, (0, _styles_utils.getColorsFromCardVariant)(theme, variant).backBackgroundColor)));
    },
    otherSkillsContainer: {
      width: '100%',
      margin: "0px ".concat(theme.miscellaneous.spacing * 5, "px"),
      paddingBottom: theme.miscellaneous.spacing * 2
    }
  };
};

exports.styles = styles;