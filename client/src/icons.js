import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faHome,
  faBars,
  faSearch,
  faBell,
  faSignInAlt,
  faUser,
  faCogs,
  faCalendar,
  faClipboard,
  faComments,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faHome,
  faBars,
  faSearch,
  faBell,
  faSignInAlt,
  faUser,
  faCogs,
  faCalendar,
  faClipboard,
  faComments,
  faLightbulb
);

Vue.component("fa-icon", FontAwesomeIcon);
