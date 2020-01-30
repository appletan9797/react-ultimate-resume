"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectDialogContentImage = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJss = require("react-jss");

var _reactSpring = require("react-spring");

var _ui = require("@wld/ui");

var _use_is_editing = require("../../../../../../hooks/use_is_editing");

var _project_dialog_content_image_edit_layer_spring_props = require("./project_dialog_content_image_edit_layer_spring_props");

var _use_opener_state = require("../../../../../../hooks/use_opener_state");

var _project_dialog_content_image_styles = require("./project_dialog_content_image_styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DeleteIcon = function DeleteIcon(props) {
  return _react.default.createElement("svg", props, _react.default.createElement("path", {
    d: "M8.277 25.334C8.277 26.8 9.498 28 10.99 28h10.857c1.493 0 2.714-1.2 2.714-2.666v-16H8.277v16zm17.642-20h-4.75L19.813 4h-6.785L11.67 5.333H6.92V8h19V5.333z"
  }));
};

DeleteIcon.defaultProps = {
  width: "33",
  height: "32",
  viewBox: "0 0 33 32",
  fill: "#fff",
  xmlns: "http://www.w3.org/2000/svg"
};
var useStyles = (0, _reactJss.createUseStyles)(_project_dialog_content_image_styles.styles);

var ProjectDialogContentImageComponent = function ProjectDialogContentImageComponent(_ref) {
  var _ref$component = _ref.component,
      Component = _ref$component === void 0 ? 'div' : _ref$component,
      url = _ref.url,
      name = _ref.name,
      style = _ref.style;
  var classes = useStyles();

  var _useIsEditing = (0, _use_is_editing.useIsEditing)(),
      _useIsEditing2 = _slicedToArray(_useIsEditing, 1),
      isEditing = _useIsEditing2[0];

  var _useOpenerState = (0, _use_opener_state.useOpenerState)(),
      _useOpenerState2 = _slicedToArray(_useOpenerState, 2),
      showEditLayer = _useOpenerState2[0],
      eventsHandlerElementProps = _useOpenerState2[1];

  var editLayerTransitions = (0, _reactSpring.useTransition)(showEditLayer, function (item) {
    return "".concat(item ? 'visible' : 'invisible', "_edit_layer");
  }, _project_dialog_content_image_edit_layer_spring_props.PROJECT_DIALOG_CONTENT_IMAGE_EDIT_LAYER_SPRING_PROPS);
  return _react.default.createElement(Component, _extends({
    className: classes.container,
    style: style
  }, isEditing && eventsHandlerElementProps), _react.default.createElement("img", {
    className: classes.image,
    src: url,
    alt: "Project ".concat(name)
  }), editLayerTransitions.map(function (_ref2) {
    var item = _ref2.item,
        key = _ref2.key,
        props = _ref2.props;
    return item && _react.default.createElement(EditLayer, {
      key: key,
      style: props,
      classes: classes
    });
  }));
};

var EditLayer = function EditLayer(_ref3) {
  var style = _ref3.style,
      classes = _ref3.classes;
  return _react.default.createElement(_reactSpring.animated.div, {
    className: classes.editLayer,
    style: style
  }, _react.default.createElement(_ui.Tooltip, {
    title: "Supprimer cette image"
  }, _react.default.createElement("button", {
    className: classes.deleteButton,
    type: "button"
  }, _react.default.createElement(DeleteIcon, {
    className: classes.deleteIcon
  }))));
};

var ProjectDialogContentImage = ProjectDialogContentImageComponent;
exports.ProjectDialogContentImage = ProjectDialogContentImage;