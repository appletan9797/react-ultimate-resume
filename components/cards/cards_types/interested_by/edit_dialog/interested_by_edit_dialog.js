"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InterestedByEditDialog = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

var _formik = require("formik");

var _edit_dialog = require("../../../../commons/edit_dialog/edit_dialog");

var _edit_dialog_field = require("../../../../commons/edit_dialog_field/edit_dialog_field");

var _ui = require("@wld/ui");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var BasicsCardEditDialogContent = function BasicsCardEditDialogContent() {
  var _useFormikContext = (0, _formik.useFormikContext)(),
      values = _useFormikContext.values,
      errors = _useFormikContext.errors,
      handleChange = _useFormikContext.handleChange;

  var interestedBy = values.interestedBy;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_edit_dialog_field.EditDialogField, {
    error: errors === null || errors === void 0 ? void 0 : errors.interestedBy
  }, _react.default.createElement(_ui.TextField, {
    multiline: true,
    variant: "flat",
    fullWidth: true,
    rows: 4,
    placeholder: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "InterestedBy.editDialog.interestedBy.placeholder",
      defaultMessage: "Vue.js, blockchain, datadog"
    }),
    value: interestedBy,
    onChange: handleChange,
    name: "interestedBy"
  })));
};

var InterestedByEditDialog = function InterestedByEditDialog(_ref) {
  var data = _ref.data,
      onEdit = _ref.onEdit,
      validationSchema = _ref.validationSchema,
      onClose = _ref.onClose;

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var validationSchemaToPass = (0, _react.useMemo)(function () {
    return validationSchema(formatMessage);
  }, [validationSchema]);
  return _react.default.createElement(_edit_dialog.EditDialog, {
    data: data,
    onEdit: onEdit,
    onClose: onClose,
    validationSchema: validationSchemaToPass,
    open: true,
    title: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: 'InterestedBy.editDialog.title',
      defaultMessage: "What technologies are you interested in ?"
    })
  }, function (helpers) {
    return _react.default.createElement(BasicsCardEditDialogContent, {
      helpers: helpers
    });
  });
};

exports.InterestedByEditDialog = InterestedByEditDialog;