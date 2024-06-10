(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./build.definitions/carcarenew/i18n/i18n.properties":
/*!***********************************************************!*\
  !*** ./build.definitions/carcarenew/i18n/i18n.properties ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = ""

/***/ }),

/***/ "./build.definitions/application-index.js":
/*!************************************************!*\
  !*** ./build.definitions/application-index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let application_app = __webpack_require__(/*! ./Application.app */ "./build.definitions/Application.app")
let carcarenew_actions_application_appupdate_action = __webpack_require__(/*! ./carcarenew/Actions/Application/AppUpdate.action */ "./build.definitions/carcarenew/Actions/Application/AppUpdate.action")
let carcarenew_actions_application_appupdatefailuremessage_action = __webpack_require__(/*! ./carcarenew/Actions/Application/AppUpdateFailureMessage.action */ "./build.definitions/carcarenew/Actions/Application/AppUpdateFailureMessage.action")
let carcarenew_actions_application_appupdateprogressbanner_action = __webpack_require__(/*! ./carcarenew/Actions/Application/AppUpdateProgressBanner.action */ "./build.definitions/carcarenew/Actions/Application/AppUpdateProgressBanner.action")
let carcarenew_actions_application_appupdatesuccessmessage_action = __webpack_require__(/*! ./carcarenew/Actions/Application/AppUpdateSuccessMessage.action */ "./build.definitions/carcarenew/Actions/Application/AppUpdateSuccessMessage.action")
let carcarenew_actions_application_logout_action = __webpack_require__(/*! ./carcarenew/Actions/Application/Logout.action */ "./build.definitions/carcarenew/Actions/Application/Logout.action")
let carcarenew_actions_application_navtoabout_action = __webpack_require__(/*! ./carcarenew/Actions/Application/NavToAbout.action */ "./build.definitions/carcarenew/Actions/Application/NavToAbout.action")
let carcarenew_actions_application_navtoactivitylog_action = __webpack_require__(/*! ./carcarenew/Actions/Application/NavToActivityLog.action */ "./build.definitions/carcarenew/Actions/Application/NavToActivityLog.action")
let carcarenew_actions_application_navtosupport_action = __webpack_require__(/*! ./carcarenew/Actions/Application/NavToSupport.action */ "./build.definitions/carcarenew/Actions/Application/NavToSupport.action")
let carcarenew_actions_application_onwillupdate_action = __webpack_require__(/*! ./carcarenew/Actions/Application/OnWillUpdate.action */ "./build.definitions/carcarenew/Actions/Application/OnWillUpdate.action")
let carcarenew_actions_application_reset_action = __webpack_require__(/*! ./carcarenew/Actions/Application/Reset.action */ "./build.definitions/carcarenew/Actions/Application/Reset.action")
let carcarenew_actions_application_resetmessage_action = __webpack_require__(/*! ./carcarenew/Actions/Application/ResetMessage.action */ "./build.definitions/carcarenew/Actions/Application/ResetMessage.action")
let carcarenew_actions_application_usermenupopover_action = __webpack_require__(/*! ./carcarenew/Actions/Application/UserMenuPopover.action */ "./build.definitions/carcarenew/Actions/Application/UserMenuPopover.action")
let carcarenew_actions_carcarenew_service_closeoffline_action = __webpack_require__(/*! ./carcarenew/Actions/carcarenew/Service/CloseOffline.action */ "./build.definitions/carcarenew/Actions/carcarenew/Service/CloseOffline.action")
let carcarenew_actions_carcarenew_service_closeofflinefailuremessage_action = __webpack_require__(/*! ./carcarenew/Actions/carcarenew/Service/CloseOfflineFailureMessage.action */ "./build.definitions/carcarenew/Actions/carcarenew/Service/CloseOfflineFailureMessage.action")
let carcarenew_actions_carcarenew_service_closeofflinesuccessmessage_action = __webpack_require__(/*! ./carcarenew/Actions/carcarenew/Service/CloseOfflineSuccessMessage.action */ "./build.definitions/carcarenew/Actions/carcarenew/Service/CloseOfflineSuccessMessage.action")
let carcarenew_actions_carcarenew_service_downloadoffline_action = __webpack_require__(/*! ./carcarenew/Actions/carcarenew/Service/DownloadOffline.action */ "./build.definitions/carcarenew/Actions/carcarenew/Service/DownloadOffline.action")
let carcarenew_actions_carcarenew_service_downloadstartedmessage_action = __webpack_require__(/*! ./carcarenew/Actions/carcarenew/Service/DownloadStartedMessage.action */ "./build.definitions/carcarenew/Actions/carcarenew/Service/DownloadStartedMessage.action")
let carcarenew_actions_carcarenew_service_initializeoffline_action = __webpack_require__(/*! ./carcarenew/Actions/carcarenew/Service/InitializeOffline.action */ "./build.definitions/carcarenew/Actions/carcarenew/Service/InitializeOffline.action")
let carcarenew_actions_carcarenew_service_initializeofflinefailuremessage_action = __webpack_require__(/*! ./carcarenew/Actions/carcarenew/Service/InitializeOfflineFailureMessage.action */ "./build.definitions/carcarenew/Actions/carcarenew/Service/InitializeOfflineFailureMessage.action")
let carcarenew_actions_carcarenew_service_syncfailuremessage_action = __webpack_require__(/*! ./carcarenew/Actions/carcarenew/Service/SyncFailureMessage.action */ "./build.definitions/carcarenew/Actions/carcarenew/Service/SyncFailureMessage.action")
let carcarenew_actions_carcarenew_service_syncstartedmessage_action = __webpack_require__(/*! ./carcarenew/Actions/carcarenew/Service/SyncStartedMessage.action */ "./build.definitions/carcarenew/Actions/carcarenew/Service/SyncStartedMessage.action")
let carcarenew_actions_carcarenew_service_uploadoffline_action = __webpack_require__(/*! ./carcarenew/Actions/carcarenew/Service/UploadOffline.action */ "./build.definitions/carcarenew/Actions/carcarenew/Service/UploadOffline.action")
let carcarenew_actions_carcarenew_zc_off_carcare_navtozc_off_carcare_detail_action = __webpack_require__(/*! ./carcarenew/Actions/carcarenew/ZC_OFF_CARCARE/NavToZC_OFF_CARCARE_Detail.action */ "./build.definitions/carcarenew/Actions/carcarenew/ZC_OFF_CARCARE/NavToZC_OFF_CARCARE_Detail.action")
let carcarenew_actions_carcarenew_zc_off_carcare_navtozc_off_carcare_list_action = __webpack_require__(/*! ./carcarenew/Actions/carcarenew/ZC_OFF_CARCARE/NavToZC_OFF_CARCARE_List.action */ "./build.definitions/carcarenew/Actions/carcarenew/ZC_OFF_CARCARE/NavToZC_OFF_CARCARE_List.action")
let carcarenew_actions_carcarenew_zc_off_caritem_navtozc_off_caritem_detail_action = __webpack_require__(/*! ./carcarenew/Actions/carcarenew/ZC_OFF_CARITEM/NavToZC_OFF_CARITEM_Detail.action */ "./build.definitions/carcarenew/Actions/carcarenew/ZC_OFF_CARITEM/NavToZC_OFF_CARITEM_Detail.action")
let carcarenew_actions_carcarenew_zc_off_caritem_navtozc_off_caritem_list_action = __webpack_require__(/*! ./carcarenew/Actions/carcarenew/ZC_OFF_CARITEM/NavToZC_OFF_CARITEM_List.action */ "./build.definitions/carcarenew/Actions/carcarenew/ZC_OFF_CARITEM/NavToZC_OFF_CARITEM_List.action")
let carcarenew_actions_carcarenew_zcds_off_material_navtozcds_off_material_detail_action = __webpack_require__(/*! ./carcarenew/Actions/carcarenew/ZCDS_OFF_MATERIAL/NavToZCDS_OFF_MATERIAL_Detail.action */ "./build.definitions/carcarenew/Actions/carcarenew/ZCDS_OFF_MATERIAL/NavToZCDS_OFF_MATERIAL_Detail.action")
let carcarenew_actions_carcarenew_zcds_off_material_navtozcds_off_material_list_action = __webpack_require__(/*! ./carcarenew/Actions/carcarenew/ZCDS_OFF_MATERIAL/NavToZCDS_OFF_MATERIAL_List.action */ "./build.definitions/carcarenew/Actions/carcarenew/ZCDS_OFF_MATERIAL/NavToZCDS_OFF_MATERIAL_List.action")
let carcarenew_actions_changesetcreate_action = __webpack_require__(/*! ./carcarenew/Actions/ChangeSetCreate.action */ "./build.definitions/carcarenew/Actions/ChangeSetCreate.action")
let carcarenew_actions_closemodalpage_cancel_action = __webpack_require__(/*! ./carcarenew/Actions/CloseModalPage_Cancel.action */ "./build.definitions/carcarenew/Actions/CloseModalPage_Cancel.action")
let carcarenew_actions_closemodalpage_complete_action = __webpack_require__(/*! ./carcarenew/Actions/CloseModalPage_Complete.action */ "./build.definitions/carcarenew/Actions/CloseModalPage_Complete.action")
let carcarenew_actions_closepage_action = __webpack_require__(/*! ./carcarenew/Actions/ClosePage.action */ "./build.definitions/carcarenew/Actions/ClosePage.action")
let carcarenew_actions_createheaderfailure_action = __webpack_require__(/*! ./carcarenew/Actions/CreateHeaderFailure.action */ "./build.definitions/carcarenew/Actions/CreateHeaderFailure.action")
let carcarenew_actions_createitemfailure_action = __webpack_require__(/*! ./carcarenew/Actions/CreateItemFailure.action */ "./build.definitions/carcarenew/Actions/CreateItemFailure.action")
let carcarenew_actions_deleteheaderentityfailuremessage_action = __webpack_require__(/*! ./carcarenew/Actions/DeleteHeaderEntityFailureMessage.action */ "./build.definitions/carcarenew/Actions/DeleteHeaderEntityFailureMessage.action")
let carcarenew_actions_errorarchive_errorarchive_syncfailure_action = __webpack_require__(/*! ./carcarenew/Actions/ErrorArchive/ErrorArchive_SyncFailure.action */ "./build.definitions/carcarenew/Actions/ErrorArchive/ErrorArchive_SyncFailure.action")
let carcarenew_actions_errorarchive_navtoerrorarchive_detail_action = __webpack_require__(/*! ./carcarenew/Actions/ErrorArchive/NavToErrorArchive_Detail.action */ "./build.definitions/carcarenew/Actions/ErrorArchive/NavToErrorArchive_Detail.action")
let carcarenew_actions_errorarchive_navtoerrorarchive_list_action = __webpack_require__(/*! ./carcarenew/Actions/ErrorArchive/NavToErrorArchive_List.action */ "./build.definitions/carcarenew/Actions/ErrorArchive/NavToErrorArchive_List.action")
let carcarenew_actions_genericbannermessage_action = __webpack_require__(/*! ./carcarenew/Actions/GenericBannerMessage.action */ "./build.definitions/carcarenew/Actions/GenericBannerMessage.action")
let carcarenew_actions_genericmessagebox_action = __webpack_require__(/*! ./carcarenew/Actions/GenericMessageBox.action */ "./build.definitions/carcarenew/Actions/GenericMessageBox.action")
let carcarenew_actions_genericnavigation_action = __webpack_require__(/*! ./carcarenew/Actions/GenericNavigation.action */ "./build.definitions/carcarenew/Actions/GenericNavigation.action")
let carcarenew_actions_generictoastmessage_action = __webpack_require__(/*! ./carcarenew/Actions/GenericToastMessage.action */ "./build.definitions/carcarenew/Actions/GenericToastMessage.action")
let carcarenew_actions_header_deleteconfirmation_action = __webpack_require__(/*! ./carcarenew/Actions/Header_DeleteConfirmation.action */ "./build.definitions/carcarenew/Actions/Header_DeleteConfirmation.action")
let carcarenew_actions_header_deleteentity_action = __webpack_require__(/*! ./carcarenew/Actions/Header_DeleteEntity.action */ "./build.definitions/carcarenew/Actions/Header_DeleteEntity.action")
let carcarenew_actions_logging_loguploadfailure_action = __webpack_require__(/*! ./carcarenew/Actions/Logging/LogUploadFailure.action */ "./build.definitions/carcarenew/Actions/Logging/LogUploadFailure.action")
let carcarenew_actions_logging_loguploadsuccessful_action = __webpack_require__(/*! ./carcarenew/Actions/Logging/LogUploadSuccessful.action */ "./build.definitions/carcarenew/Actions/Logging/LogUploadSuccessful.action")
let carcarenew_actions_logging_uploadlog_action = __webpack_require__(/*! ./carcarenew/Actions/Logging/UploadLog.action */ "./build.definitions/carcarenew/Actions/Logging/UploadLog.action")
let carcarenew_actions_logging_uploadlogprogress_action = __webpack_require__(/*! ./carcarenew/Actions/Logging/UploadLogProgress.action */ "./build.definitions/carcarenew/Actions/Logging/UploadLogProgress.action")
let carcarenew_actions_navtocreateitem_action = __webpack_require__(/*! ./carcarenew/Actions/navToCreateItem.action */ "./build.definitions/carcarenew/Actions/navToCreateItem.action")
let carcarenew_actions_navtocreatewash_action = __webpack_require__(/*! ./carcarenew/Actions/navToCreateWash.action */ "./build.definitions/carcarenew/Actions/navToCreateWash.action")
let carcarenew_actions_navtodisplaywash_action = __webpack_require__(/*! ./carcarenew/Actions/navToDisplayWash.action */ "./build.definitions/carcarenew/Actions/navToDisplayWash.action")
let carcarenew_actions_navtoheaderdetail_action = __webpack_require__(/*! ./carcarenew/Actions/navToHeaderDetail.action */ "./build.definitions/carcarenew/Actions/navToHeaderDetail.action")
let carcarenew_actions_navtoselectwash_action = __webpack_require__(/*! ./carcarenew/Actions/navToSelectWash.action */ "./build.definitions/carcarenew/Actions/navToSelectWash.action")
let carcarenew_actions_odatacreateheader_action = __webpack_require__(/*! ./carcarenew/Actions/ODataCreateHeader.action */ "./build.definitions/carcarenew/Actions/ODataCreateHeader.action")
let carcarenew_actions_odatacreateitem_action = __webpack_require__(/*! ./carcarenew/Actions/ODataCreateItem.action */ "./build.definitions/carcarenew/Actions/ODataCreateItem.action")
let carcarenew_actions_odatacreateitemtable_action = __webpack_require__(/*! ./carcarenew/Actions/ODataCreateItemTable.action */ "./build.definitions/carcarenew/Actions/ODataCreateItemTable.action")
let carcarenew_actions_odatareadheader_action = __webpack_require__(/*! ./carcarenew/Actions/ODataReadHeader.action */ "./build.definitions/carcarenew/Actions/ODataReadHeader.action")
let carcarenew_actions_savevalidation_action = __webpack_require__(/*! ./carcarenew/Actions/SaveValidation.action */ "./build.definitions/carcarenew/Actions/SaveValidation.action")
let carcarenew_globals_application_appdefinition_version_global = __webpack_require__(/*! ./carcarenew/Globals/Application/AppDefinition_Version.global */ "./build.definitions/carcarenew/Globals/Application/AppDefinition_Version.global")
let carcarenew_globals_application_applicationname_global = __webpack_require__(/*! ./carcarenew/Globals/Application/ApplicationName.global */ "./build.definitions/carcarenew/Globals/Application/ApplicationName.global")
let carcarenew_globals_application_supportemail_global = __webpack_require__(/*! ./carcarenew/Globals/Application/SupportEmail.global */ "./build.definitions/carcarenew/Globals/Application/SupportEmail.global")
let carcarenew_globals_application_supportphone_global = __webpack_require__(/*! ./carcarenew/Globals/Application/SupportPhone.global */ "./build.definitions/carcarenew/Globals/Application/SupportPhone.global")
let carcarenew_i18n_i18n_properties = __webpack_require__(/*! ./carcarenew/i18n/i18n.properties */ "./build.definitions/carcarenew/i18n/i18n.properties")
let carcarenew_jsconfig_json = __webpack_require__(/*! ./carcarenew/jsconfig.json */ "./build.definitions/carcarenew/jsconfig.json")
let carcarenew_pages_application_about_page = __webpack_require__(/*! ./carcarenew/Pages/Application/About.page */ "./build.definitions/carcarenew/Pages/Application/About.page")
let carcarenew_pages_application_support_page = __webpack_require__(/*! ./carcarenew/Pages/Application/Support.page */ "./build.definitions/carcarenew/Pages/Application/Support.page")
let carcarenew_pages_application_useractivitylog_page = __webpack_require__(/*! ./carcarenew/Pages/Application/UserActivityLog.page */ "./build.definitions/carcarenew/Pages/Application/UserActivityLog.page")
let carcarenew_pages_carcarenew_zc_off_carcare_zc_off_carcare_detail_page = __webpack_require__(/*! ./carcarenew/Pages/carcarenew_ZC_OFF_CARCARE/ZC_OFF_CARCARE_Detail.page */ "./build.definitions/carcarenew/Pages/carcarenew_ZC_OFF_CARCARE/ZC_OFF_CARCARE_Detail.page")
let carcarenew_pages_carcarenew_zc_off_carcare_zc_off_carcare_list_page = __webpack_require__(/*! ./carcarenew/Pages/carcarenew_ZC_OFF_CARCARE/ZC_OFF_CARCARE_List.page */ "./build.definitions/carcarenew/Pages/carcarenew_ZC_OFF_CARCARE/ZC_OFF_CARCARE_List.page")
let carcarenew_pages_carcarenew_zc_off_caritem_zc_off_caritem_detail_page = __webpack_require__(/*! ./carcarenew/Pages/carcarenew_ZC_OFF_CARITEM/ZC_OFF_CARITEM_Detail.page */ "./build.definitions/carcarenew/Pages/carcarenew_ZC_OFF_CARITEM/ZC_OFF_CARITEM_Detail.page")
let carcarenew_pages_carcarenew_zc_off_caritem_zc_off_caritem_list_page = __webpack_require__(/*! ./carcarenew/Pages/carcarenew_ZC_OFF_CARITEM/ZC_OFF_CARITEM_List.page */ "./build.definitions/carcarenew/Pages/carcarenew_ZC_OFF_CARITEM/ZC_OFF_CARITEM_List.page")
let carcarenew_pages_carcarenew_zcds_off_material_zcds_off_material_detail_page = __webpack_require__(/*! ./carcarenew/Pages/carcarenew_ZCDS_OFF_MATERIAL/ZCDS_OFF_MATERIAL_Detail.page */ "./build.definitions/carcarenew/Pages/carcarenew_ZCDS_OFF_MATERIAL/ZCDS_OFF_MATERIAL_Detail.page")
let carcarenew_pages_carcarenew_zcds_off_material_zcds_off_material_list_page = __webpack_require__(/*! ./carcarenew/Pages/carcarenew_ZCDS_OFF_MATERIAL/ZCDS_OFF_MATERIAL_List.page */ "./build.definitions/carcarenew/Pages/carcarenew_ZCDS_OFF_MATERIAL/ZCDS_OFF_MATERIAL_List.page")
let carcarenew_pages_createitem_page = __webpack_require__(/*! ./carcarenew/Pages/CreateItem.page */ "./build.definitions/carcarenew/Pages/CreateItem.page")
let carcarenew_pages_createwash_page = __webpack_require__(/*! ./carcarenew/Pages/CreateWash.page */ "./build.definitions/carcarenew/Pages/CreateWash.page")
let carcarenew_pages_displaywash_page = __webpack_require__(/*! ./carcarenew/Pages/DisplayWash.page */ "./build.definitions/carcarenew/Pages/DisplayWash.page")
let carcarenew_pages_errorarchive_errorarchive_detail_page = __webpack_require__(/*! ./carcarenew/Pages/ErrorArchive/ErrorArchive_Detail.page */ "./build.definitions/carcarenew/Pages/ErrorArchive/ErrorArchive_Detail.page")
let carcarenew_pages_errorarchive_errorarchive_list_page = __webpack_require__(/*! ./carcarenew/Pages/ErrorArchive/ErrorArchive_List.page */ "./build.definitions/carcarenew/Pages/ErrorArchive/ErrorArchive_List.page")
let carcarenew_pages_headerdetail_page = __webpack_require__(/*! ./carcarenew/Pages/HeaderDetail.page */ "./build.definitions/carcarenew/Pages/HeaderDetail.page")
let carcarenew_pages_main_page = __webpack_require__(/*! ./carcarenew/Pages/Main.page */ "./build.definitions/carcarenew/Pages/Main.page")
let carcarenew_pages_selecteditems_page = __webpack_require__(/*! ./carcarenew/Pages/SelectedItems.page */ "./build.definitions/carcarenew/Pages/SelectedItems.page")
let carcarenew_pages_selecteditemsdetail_page = __webpack_require__(/*! ./carcarenew/Pages/SelectedItemsDetail.page */ "./build.definitions/carcarenew/Pages/SelectedItemsDetail.page")
let carcarenew_pages_selectwash_page = __webpack_require__(/*! ./carcarenew/Pages/SelectWash.page */ "./build.definitions/carcarenew/Pages/SelectWash.page")
let carcarenew_rules_application_appupdatefailure_js = __webpack_require__(/*! ./carcarenew/Rules/Application/AppUpdateFailure.js */ "./build.definitions/carcarenew/Rules/Application/AppUpdateFailure.js")
let carcarenew_rules_application_appupdatesuccess_js = __webpack_require__(/*! ./carcarenew/Rules/Application/AppUpdateSuccess.js */ "./build.definitions/carcarenew/Rules/Application/AppUpdateSuccess.js")
let carcarenew_rules_application_clientismultiusermode_js = __webpack_require__(/*! ./carcarenew/Rules/Application/ClientIsMultiUserMode.js */ "./build.definitions/carcarenew/Rules/Application/ClientIsMultiUserMode.js")
let carcarenew_rules_application_getclientsupportversions_js = __webpack_require__(/*! ./carcarenew/Rules/Application/GetClientSupportVersions.js */ "./build.definitions/carcarenew/Rules/Application/GetClientSupportVersions.js")
let carcarenew_rules_application_getclientversion_js = __webpack_require__(/*! ./carcarenew/Rules/Application/GetClientVersion.js */ "./build.definitions/carcarenew/Rules/Application/GetClientVersion.js")
let carcarenew_rules_application_onwillupdate_js = __webpack_require__(/*! ./carcarenew/Rules/Application/OnWillUpdate.js */ "./build.definitions/carcarenew/Rules/Application/OnWillUpdate.js")
let carcarenew_rules_application_resetappsettingsandlogout_js = __webpack_require__(/*! ./carcarenew/Rules/Application/ResetAppSettingsAndLogout.js */ "./build.definitions/carcarenew/Rules/Application/ResetAppSettingsAndLogout.js")
let carcarenew_rules_callcreatedeep_js = __webpack_require__(/*! ./carcarenew/Rules/CallCreateDeep.js */ "./build.definitions/carcarenew/Rules/CallCreateDeep.js")
let carcarenew_rules_errorarchive_errorarchive_checkforsyncerror_js = __webpack_require__(/*! ./carcarenew/Rules/ErrorArchive/ErrorArchive_CheckForSyncError.js */ "./build.definitions/carcarenew/Rules/ErrorArchive/ErrorArchive_CheckForSyncError.js")
let carcarenew_rules_header_deleteconfirmation_js = __webpack_require__(/*! ./carcarenew/Rules/Header_DeleteConfirmation.js */ "./build.definitions/carcarenew/Rules/Header_DeleteConfirmation.js")
let carcarenew_rules_item_count_js = __webpack_require__(/*! ./carcarenew/Rules/Item_count.js */ "./build.definitions/carcarenew/Rules/Item_count.js")
let carcarenew_rules_item_number_js = __webpack_require__(/*! ./carcarenew/Rules/Item_number.js */ "./build.definitions/carcarenew/Rules/Item_number.js")
let carcarenew_rules_logging_loglevels_js = __webpack_require__(/*! ./carcarenew/Rules/Logging/LogLevels.js */ "./build.definitions/carcarenew/Rules/Logging/LogLevels.js")
let carcarenew_rules_logging_settracecategories_js = __webpack_require__(/*! ./carcarenew/Rules/Logging/SetTraceCategories.js */ "./build.definitions/carcarenew/Rules/Logging/SetTraceCategories.js")
let carcarenew_rules_logging_setuserloglevel_js = __webpack_require__(/*! ./carcarenew/Rules/Logging/SetUserLogLevel.js */ "./build.definitions/carcarenew/Rules/Logging/SetUserLogLevel.js")
let carcarenew_rules_logging_togglelogging_js = __webpack_require__(/*! ./carcarenew/Rules/Logging/ToggleLogging.js */ "./build.definitions/carcarenew/Rules/Logging/ToggleLogging.js")
let carcarenew_rules_logging_tracecategories_js = __webpack_require__(/*! ./carcarenew/Rules/Logging/TraceCategories.js */ "./build.definitions/carcarenew/Rules/Logging/TraceCategories.js")
let carcarenew_rules_logging_userlogsetting_js = __webpack_require__(/*! ./carcarenew/Rules/Logging/UserLogSetting.js */ "./build.definitions/carcarenew/Rules/Logging/UserLogSetting.js")
let carcarenew_rules_materialf4_js = __webpack_require__(/*! ./carcarenew/Rules/MaterialF4.js */ "./build.definitions/carcarenew/Rules/MaterialF4.js")
let carcarenew_rules_materialprice_js = __webpack_require__(/*! ./carcarenew/Rules/MaterialPrice.js */ "./build.definitions/carcarenew/Rules/MaterialPrice.js")
let carcarenew_rules_materialselection_js = __webpack_require__(/*! ./carcarenew/Rules/MaterialSelection.js */ "./build.definitions/carcarenew/Rules/MaterialSelection.js")
let carcarenew_rules_matlist_js = __webpack_require__(/*! ./carcarenew/Rules/MatList.js */ "./build.definitions/carcarenew/Rules/MatList.js")
let carcarenew_rules_quantitychange_js = __webpack_require__(/*! ./carcarenew/Rules/QuantityChange.js */ "./build.definitions/carcarenew/Rules/QuantityChange.js")
let carcarenew_rules_savevalidation_js = __webpack_require__(/*! ./carcarenew/Rules/SaveValidation.js */ "./build.definitions/carcarenew/Rules/SaveValidation.js")
let carcarenew_rules_service_initialize_js = __webpack_require__(/*! ./carcarenew/Rules/Service/Initialize.js */ "./build.definitions/carcarenew/Rules/Service/Initialize.js")
let carcarenew_rules_service_postcall_js = __webpack_require__(/*! ./carcarenew/Rules/Service/PostCall.js */ "./build.definitions/carcarenew/Rules/Service/PostCall.js")
let carcarenew_rules_storeglobalvalues_js = __webpack_require__(/*! ./carcarenew/Rules/StoreGlobalValues.js */ "./build.definitions/carcarenew/Rules/StoreGlobalValues.js")
let carcarenew_services_carcarenew_service = __webpack_require__(/*! ./carcarenew/Services/carcarenew.service */ "./build.definitions/carcarenew/Services/carcarenew.service")
let carcarenew_styles_styles_css = __webpack_require__(/*! ./carcarenew/Styles/Styles.css */ "./build.definitions/carcarenew/Styles/Styles.css")
let carcarenew_styles_styles_json = __webpack_require__(/*! ./carcarenew/Styles/Styles.json */ "./build.definitions/carcarenew/Styles/Styles.json")
let carcarenew_styles_styles_less = __webpack_require__(/*! ./carcarenew/Styles/Styles.less */ "./build.definitions/carcarenew/Styles/Styles.less")
let carcarenew_styles_styles_nss = __webpack_require__(/*! ./carcarenew/Styles/Styles.nss */ "./build.definitions/carcarenew/Styles/Styles.nss")
let tsconfig_json = __webpack_require__(/*! ./tsconfig.json */ "./build.definitions/tsconfig.json")
let version_mdkbundlerversion = __webpack_require__(/*! ./version.mdkbundlerversion */ "./build.definitions/version.mdkbundlerversion")

module.exports = {
	application_app : application_app,
	carcarenew_actions_application_appupdate_action : carcarenew_actions_application_appupdate_action,
	carcarenew_actions_application_appupdatefailuremessage_action : carcarenew_actions_application_appupdatefailuremessage_action,
	carcarenew_actions_application_appupdateprogressbanner_action : carcarenew_actions_application_appupdateprogressbanner_action,
	carcarenew_actions_application_appupdatesuccessmessage_action : carcarenew_actions_application_appupdatesuccessmessage_action,
	carcarenew_actions_application_logout_action : carcarenew_actions_application_logout_action,
	carcarenew_actions_application_navtoabout_action : carcarenew_actions_application_navtoabout_action,
	carcarenew_actions_application_navtoactivitylog_action : carcarenew_actions_application_navtoactivitylog_action,
	carcarenew_actions_application_navtosupport_action : carcarenew_actions_application_navtosupport_action,
	carcarenew_actions_application_onwillupdate_action : carcarenew_actions_application_onwillupdate_action,
	carcarenew_actions_application_reset_action : carcarenew_actions_application_reset_action,
	carcarenew_actions_application_resetmessage_action : carcarenew_actions_application_resetmessage_action,
	carcarenew_actions_application_usermenupopover_action : carcarenew_actions_application_usermenupopover_action,
	carcarenew_actions_carcarenew_service_closeoffline_action : carcarenew_actions_carcarenew_service_closeoffline_action,
	carcarenew_actions_carcarenew_service_closeofflinefailuremessage_action : carcarenew_actions_carcarenew_service_closeofflinefailuremessage_action,
	carcarenew_actions_carcarenew_service_closeofflinesuccessmessage_action : carcarenew_actions_carcarenew_service_closeofflinesuccessmessage_action,
	carcarenew_actions_carcarenew_service_downloadoffline_action : carcarenew_actions_carcarenew_service_downloadoffline_action,
	carcarenew_actions_carcarenew_service_downloadstartedmessage_action : carcarenew_actions_carcarenew_service_downloadstartedmessage_action,
	carcarenew_actions_carcarenew_service_initializeoffline_action : carcarenew_actions_carcarenew_service_initializeoffline_action,
	carcarenew_actions_carcarenew_service_initializeofflinefailuremessage_action : carcarenew_actions_carcarenew_service_initializeofflinefailuremessage_action,
	carcarenew_actions_carcarenew_service_syncfailuremessage_action : carcarenew_actions_carcarenew_service_syncfailuremessage_action,
	carcarenew_actions_carcarenew_service_syncstartedmessage_action : carcarenew_actions_carcarenew_service_syncstartedmessage_action,
	carcarenew_actions_carcarenew_service_uploadoffline_action : carcarenew_actions_carcarenew_service_uploadoffline_action,
	carcarenew_actions_carcarenew_zc_off_carcare_navtozc_off_carcare_detail_action : carcarenew_actions_carcarenew_zc_off_carcare_navtozc_off_carcare_detail_action,
	carcarenew_actions_carcarenew_zc_off_carcare_navtozc_off_carcare_list_action : carcarenew_actions_carcarenew_zc_off_carcare_navtozc_off_carcare_list_action,
	carcarenew_actions_carcarenew_zc_off_caritem_navtozc_off_caritem_detail_action : carcarenew_actions_carcarenew_zc_off_caritem_navtozc_off_caritem_detail_action,
	carcarenew_actions_carcarenew_zc_off_caritem_navtozc_off_caritem_list_action : carcarenew_actions_carcarenew_zc_off_caritem_navtozc_off_caritem_list_action,
	carcarenew_actions_carcarenew_zcds_off_material_navtozcds_off_material_detail_action : carcarenew_actions_carcarenew_zcds_off_material_navtozcds_off_material_detail_action,
	carcarenew_actions_carcarenew_zcds_off_material_navtozcds_off_material_list_action : carcarenew_actions_carcarenew_zcds_off_material_navtozcds_off_material_list_action,
	carcarenew_actions_changesetcreate_action : carcarenew_actions_changesetcreate_action,
	carcarenew_actions_closemodalpage_cancel_action : carcarenew_actions_closemodalpage_cancel_action,
	carcarenew_actions_closemodalpage_complete_action : carcarenew_actions_closemodalpage_complete_action,
	carcarenew_actions_closepage_action : carcarenew_actions_closepage_action,
	carcarenew_actions_createheaderfailure_action : carcarenew_actions_createheaderfailure_action,
	carcarenew_actions_createitemfailure_action : carcarenew_actions_createitemfailure_action,
	carcarenew_actions_deleteheaderentityfailuremessage_action : carcarenew_actions_deleteheaderentityfailuremessage_action,
	carcarenew_actions_errorarchive_errorarchive_syncfailure_action : carcarenew_actions_errorarchive_errorarchive_syncfailure_action,
	carcarenew_actions_errorarchive_navtoerrorarchive_detail_action : carcarenew_actions_errorarchive_navtoerrorarchive_detail_action,
	carcarenew_actions_errorarchive_navtoerrorarchive_list_action : carcarenew_actions_errorarchive_navtoerrorarchive_list_action,
	carcarenew_actions_genericbannermessage_action : carcarenew_actions_genericbannermessage_action,
	carcarenew_actions_genericmessagebox_action : carcarenew_actions_genericmessagebox_action,
	carcarenew_actions_genericnavigation_action : carcarenew_actions_genericnavigation_action,
	carcarenew_actions_generictoastmessage_action : carcarenew_actions_generictoastmessage_action,
	carcarenew_actions_header_deleteconfirmation_action : carcarenew_actions_header_deleteconfirmation_action,
	carcarenew_actions_header_deleteentity_action : carcarenew_actions_header_deleteentity_action,
	carcarenew_actions_logging_loguploadfailure_action : carcarenew_actions_logging_loguploadfailure_action,
	carcarenew_actions_logging_loguploadsuccessful_action : carcarenew_actions_logging_loguploadsuccessful_action,
	carcarenew_actions_logging_uploadlog_action : carcarenew_actions_logging_uploadlog_action,
	carcarenew_actions_logging_uploadlogprogress_action : carcarenew_actions_logging_uploadlogprogress_action,
	carcarenew_actions_navtocreateitem_action : carcarenew_actions_navtocreateitem_action,
	carcarenew_actions_navtocreatewash_action : carcarenew_actions_navtocreatewash_action,
	carcarenew_actions_navtodisplaywash_action : carcarenew_actions_navtodisplaywash_action,
	carcarenew_actions_navtoheaderdetail_action : carcarenew_actions_navtoheaderdetail_action,
	carcarenew_actions_navtoselectwash_action : carcarenew_actions_navtoselectwash_action,
	carcarenew_actions_odatacreateheader_action : carcarenew_actions_odatacreateheader_action,
	carcarenew_actions_odatacreateitem_action : carcarenew_actions_odatacreateitem_action,
	carcarenew_actions_odatacreateitemtable_action : carcarenew_actions_odatacreateitemtable_action,
	carcarenew_actions_odatareadheader_action : carcarenew_actions_odatareadheader_action,
	carcarenew_actions_savevalidation_action : carcarenew_actions_savevalidation_action,
	carcarenew_globals_application_appdefinition_version_global : carcarenew_globals_application_appdefinition_version_global,
	carcarenew_globals_application_applicationname_global : carcarenew_globals_application_applicationname_global,
	carcarenew_globals_application_supportemail_global : carcarenew_globals_application_supportemail_global,
	carcarenew_globals_application_supportphone_global : carcarenew_globals_application_supportphone_global,
	carcarenew_i18n_i18n_properties : carcarenew_i18n_i18n_properties,
	carcarenew_jsconfig_json : carcarenew_jsconfig_json,
	carcarenew_pages_application_about_page : carcarenew_pages_application_about_page,
	carcarenew_pages_application_support_page : carcarenew_pages_application_support_page,
	carcarenew_pages_application_useractivitylog_page : carcarenew_pages_application_useractivitylog_page,
	carcarenew_pages_carcarenew_zc_off_carcare_zc_off_carcare_detail_page : carcarenew_pages_carcarenew_zc_off_carcare_zc_off_carcare_detail_page,
	carcarenew_pages_carcarenew_zc_off_carcare_zc_off_carcare_list_page : carcarenew_pages_carcarenew_zc_off_carcare_zc_off_carcare_list_page,
	carcarenew_pages_carcarenew_zc_off_caritem_zc_off_caritem_detail_page : carcarenew_pages_carcarenew_zc_off_caritem_zc_off_caritem_detail_page,
	carcarenew_pages_carcarenew_zc_off_caritem_zc_off_caritem_list_page : carcarenew_pages_carcarenew_zc_off_caritem_zc_off_caritem_list_page,
	carcarenew_pages_carcarenew_zcds_off_material_zcds_off_material_detail_page : carcarenew_pages_carcarenew_zcds_off_material_zcds_off_material_detail_page,
	carcarenew_pages_carcarenew_zcds_off_material_zcds_off_material_list_page : carcarenew_pages_carcarenew_zcds_off_material_zcds_off_material_list_page,
	carcarenew_pages_createitem_page : carcarenew_pages_createitem_page,
	carcarenew_pages_createwash_page : carcarenew_pages_createwash_page,
	carcarenew_pages_displaywash_page : carcarenew_pages_displaywash_page,
	carcarenew_pages_errorarchive_errorarchive_detail_page : carcarenew_pages_errorarchive_errorarchive_detail_page,
	carcarenew_pages_errorarchive_errorarchive_list_page : carcarenew_pages_errorarchive_errorarchive_list_page,
	carcarenew_pages_headerdetail_page : carcarenew_pages_headerdetail_page,
	carcarenew_pages_main_page : carcarenew_pages_main_page,
	carcarenew_pages_selecteditems_page : carcarenew_pages_selecteditems_page,
	carcarenew_pages_selecteditemsdetail_page : carcarenew_pages_selecteditemsdetail_page,
	carcarenew_pages_selectwash_page : carcarenew_pages_selectwash_page,
	carcarenew_rules_application_appupdatefailure_js : carcarenew_rules_application_appupdatefailure_js,
	carcarenew_rules_application_appupdatesuccess_js : carcarenew_rules_application_appupdatesuccess_js,
	carcarenew_rules_application_clientismultiusermode_js : carcarenew_rules_application_clientismultiusermode_js,
	carcarenew_rules_application_getclientsupportversions_js : carcarenew_rules_application_getclientsupportversions_js,
	carcarenew_rules_application_getclientversion_js : carcarenew_rules_application_getclientversion_js,
	carcarenew_rules_application_onwillupdate_js : carcarenew_rules_application_onwillupdate_js,
	carcarenew_rules_application_resetappsettingsandlogout_js : carcarenew_rules_application_resetappsettingsandlogout_js,
	carcarenew_rules_callcreatedeep_js : carcarenew_rules_callcreatedeep_js,
	carcarenew_rules_errorarchive_errorarchive_checkforsyncerror_js : carcarenew_rules_errorarchive_errorarchive_checkforsyncerror_js,
	carcarenew_rules_header_deleteconfirmation_js : carcarenew_rules_header_deleteconfirmation_js,
	carcarenew_rules_item_count_js : carcarenew_rules_item_count_js,
	carcarenew_rules_item_number_js : carcarenew_rules_item_number_js,
	carcarenew_rules_logging_loglevels_js : carcarenew_rules_logging_loglevels_js,
	carcarenew_rules_logging_settracecategories_js : carcarenew_rules_logging_settracecategories_js,
	carcarenew_rules_logging_setuserloglevel_js : carcarenew_rules_logging_setuserloglevel_js,
	carcarenew_rules_logging_togglelogging_js : carcarenew_rules_logging_togglelogging_js,
	carcarenew_rules_logging_tracecategories_js : carcarenew_rules_logging_tracecategories_js,
	carcarenew_rules_logging_userlogsetting_js : carcarenew_rules_logging_userlogsetting_js,
	carcarenew_rules_materialf4_js : carcarenew_rules_materialf4_js,
	carcarenew_rules_materialprice_js : carcarenew_rules_materialprice_js,
	carcarenew_rules_materialselection_js : carcarenew_rules_materialselection_js,
	carcarenew_rules_matlist_js : carcarenew_rules_matlist_js,
	carcarenew_rules_quantitychange_js : carcarenew_rules_quantitychange_js,
	carcarenew_rules_savevalidation_js : carcarenew_rules_savevalidation_js,
	carcarenew_rules_service_initialize_js : carcarenew_rules_service_initialize_js,
	carcarenew_rules_service_postcall_js : carcarenew_rules_service_postcall_js,
	carcarenew_rules_storeglobalvalues_js : carcarenew_rules_storeglobalvalues_js,
	carcarenew_services_carcarenew_service : carcarenew_services_carcarenew_service,
	carcarenew_styles_styles_css : carcarenew_styles_styles_css,
	carcarenew_styles_styles_json : carcarenew_styles_styles_json,
	carcarenew_styles_styles_less : carcarenew_styles_styles_less,
	carcarenew_styles_styles_nss : carcarenew_styles_styles_nss,
	tsconfig_json : tsconfig_json,
	version_mdkbundlerversion : version_mdkbundlerversion
}

/***/ }),

/***/ "./build.definitions/carcarenew/Rules/Application/AppUpdateFailure.js":
/*!****************************************************************************!*\
  !*** ./build.definitions/carcarenew/Rules/Application/AppUpdateFailure.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateFailure)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function AppUpdateFailure(clientAPI) {
    let result = clientAPI.actionResults.AppUpdate.error.toString();
    var message;
    console.log(result);
    if (result.startsWith('Error: Uncaught app extraction failure:')) {
        result = 'Error: Uncaught app extraction failure:';
    }
    if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body: 404 Not Found: Requested route')) {
        result = 'Application instance is not up or running';
    }
    if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body')) {
        result = 'Service instance not found.';
    }

    switch (result) {
        case 'Service instance not found.':
            message = 'Mobile App Update feature is not assigned or not running for your application. Please add the Mobile App Update feature, deploy your application, and try again.';
            break;
        case 'Error: LCMS GET Version Response Error Response Status: 404 | Body: Failed to find a matched endpoint':
            message = 'Mobile App Update feature is not assigned to your application. Please add the Mobile App Update feature, deploy your application, and try again.';
            break;
        case 'Error: LCMS GET Version Response failed: Error: Optional(OAuth2Error.tokenRejected: The newly acquired or refreshed token got rejected.)':
            message = 'The Mobile App Update feature is not assigned to your application or there is no Application metadata deployed. Please check your application in Mobile Services and try again.';
            break;
        case 'Error: Uncaught app extraction failure:':
            message = 'Error extracting metadata. Please redeploy and try again.';
            break;
        case 'Application instance is not up or running':
            message = 'Communication failure. Verify that the BindMobileApplicationRoutesToME Application route is running in your BTP space cockpit.';
            break;
        default:
            message = result;
            break;
    }
    return clientAPI.getPageProxy().executeAction({
        "Name": "/carcarenew/Actions/Application/AppUpdateFailureMessage.action",
        "Properties": {
            "Duration": 0,
            "Message": message
        }
    });
}

/***/ }),

/***/ "./build.definitions/carcarenew/Rules/Application/AppUpdateSuccess.js":
/*!****************************************************************************!*\
  !*** ./build.definitions/carcarenew/Rules/Application/AppUpdateSuccess.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateSuccess)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function sleep(ms) {
    return (new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve();
        }, ms);
    }));
}
function AppUpdateSuccess(clientAPI) {
    var message;
    // Force a small pause to let the progress banner show in case there is no new version available
    return sleep(500).then(function() {
        let result = clientAPI.actionResults.AppUpdate.data;
        console.log(result);

        let versionNum = result.split(': ')[1];
        if (result.startsWith('Current version is already up to date')) {
            return clientAPI.getPageProxy().executeAction({
                "Name": "/carcarenew/Actions/Application/AppUpdateSuccessMessage.action",
                "Properties": {
                    "Message": `You are already using the latest version: ${versionNum}`,
                    "NumberOfLines": 2
                }
            });
        } else if (result === 'AppUpdate feature is not enabled or no new revision found.') {
            message = 'No Application metadata found. Please deploy your application and try again.';
            return clientAPI.getPageProxy().executeAction({
                "Name": "/carcarenew/Actions/Application/AppUpdateSuccessMessage.action",
                "Properties": {
                    "Duration": 5,
                    "Message": message,
                    "NumberOfLines": 2
                }
            });
        }
    });
}

/***/ }),

/***/ "./build.definitions/carcarenew/Rules/Application/ClientIsMultiUserMode.js":
/*!*********************************************************************************!*\
  !*** ./build.definitions/carcarenew/Rules/Application/ClientIsMultiUserMode.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClientIsMultiUserMode)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ClientIsMultiUserMode(clientAPI) {
    return clientAPI.isAppInMultiUserMode();
}

/***/ }),

/***/ "./build.definitions/carcarenew/Rules/Application/GetClientSupportVersions.js":
/*!************************************************************************************!*\
  !*** ./build.definitions/carcarenew/Rules/Application/GetClientSupportVersions.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetClientSupportVersions)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function GetClientSupportVersions(clientAPI) {
    let versionInfo = clientAPI.getVersionInfo();
    let versionStr = '';
    Object.keys(versionInfo).forEach(function(key, index) {
        // key: the name of the object key
        // index: the ordinal position of the key within the object
        //console.log(`Key: ${key}   Index: ${index}`);
        if (key != 'Application Version') {
            versionStr += `${key}: ${versionInfo[key]}\n`;
        }
    });
    return versionStr;
}

/***/ }),

/***/ "./build.definitions/carcarenew/Rules/Application/GetClientVersion.js":
/*!****************************************************************************!*\
  !*** ./build.definitions/carcarenew/Rules/Application/GetClientVersion.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetClientVersion)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function GetClientVersion(clientAPI) {
    let versionInfo = clientAPI.getVersionInfo();
    if (versionInfo.hasOwnProperty('Application Version')) {
        return versionInfo['Application Version'];
    }
}

/***/ }),

/***/ "./build.definitions/carcarenew/Rules/Application/OnWillUpdate.js":
/*!************************************************************************!*\
  !*** ./build.definitions/carcarenew/Rules/Application/OnWillUpdate.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OnWillUpdate)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function OnWillUpdate(clientAPI) {
    return clientAPI.executeAction('/carcarenew/Actions/Application/OnWillUpdate.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/carcarenew/Actions/carcarenew/Service/CloseOffline.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Offline Odata Close Failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/carcarenew/Rules/Application/ResetAppSettingsAndLogout.js":
/*!*************************************************************************************!*\
  !*** ./build.definitions/carcarenew/Rules/Application/ResetAppSettingsAndLogout.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResetAppSettingsAndLogout)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ResetAppSettingsAndLogout(clientAPI) {
    let logger = clientAPI.getLogger();
    let platform = clientAPI.nativescript.platformModule;
    let appSettings = clientAPI.nativescript.appSettingsModule;
    var appId;
    if (platform && (platform.isIOS || platform.isAndroid)) {
        appId = clientAPI.evaluateTargetPath('#Application/#AppData/MobileServiceAppId');
    } else {
        appId = 'WindowsClient';
    }
    try {
        // Remove any other app specific settings
        appSettings.getAllKeys().forEach(key => {
            if (key.substring(0, appId.length) === appId) {
                appSettings.remove(key);
            }
        });
    } catch (err) {
        logger.log(`ERROR: AppSettings cleanup failure - ${err}`, 'ERROR');
    } finally {
        // Logout 
        return clientAPI.getPageProxy().executeAction('/carcarenew/Actions/Application/Reset.action');
    }
}

/***/ }),

/***/ "./build.definitions/carcarenew/Rules/CallCreateDeep.js":
/*!**************************************************************!*\
  !*** ./build.definitions/carcarenew/Rules/CallCreateDeep.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CallCreateDeep)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function CallCreateDeep(clientAPI) {
    
}


/***/ }),

/***/ "./build.definitions/carcarenew/Rules/ErrorArchive/ErrorArchive_CheckForSyncError.js":
/*!*******************************************************************************************!*\
  !*** ./build.definitions/carcarenew/Rules/ErrorArchive/ErrorArchive_CheckForSyncError.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CheckForSyncError)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} context
 */
function CheckForSyncError(context) {
    context.count('/carcarenew/Services/carcarenew.service', 'ErrorArchive', '').then(errorCount => {
        if (errorCount > 0) {
            return context.getPageProxy().executeAction('/carcarenew/Actions/ErrorArchive/ErrorArchive_SyncFailure.action').then(function() {
                return Promise.reject(false);
            });
        }
    });
}

/***/ }),

/***/ "./build.definitions/carcarenew/Rules/Header_DeleteConfirmation.js":
/*!*************************************************************************!*\
  !*** ./build.definitions/carcarenew/Rules/Header_DeleteConfirmation.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Customers_DeleteConfirmation)
/* harmony export */ });
/**
* Describe this function...
* @param {IClientAPI} context
*/
function Customers_DeleteConfirmation(context) {
    return context.executeAction('/carcarenew/Actions/Header_DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return context.executeAction('/carcarenew/Actions/Header_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}


/***/ }),

/***/ "./build.definitions/carcarenew/Rules/Item_count.js":
/*!**********************************************************!*\
  !*** ./build.definitions/carcarenew/Rules/Item_count.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Item_count)
/* harmony export */ });
/**
* Describe this function...
* @param {IClientAPI} context
*/
function Item_count(context) {
    // Retrieves the current customer's information from the context
    const currentPlateNum = context.getPageProxy().binding['@odata.readLink'];
    // Counts the number of sales orders associated with the current customer.
    // var link = context.count('/carcarenew/Services/carcarenew.service', currentPlateNum + '/_Item', '');
    // var data = context.read('/carcarenew/Services/carcarenew.service', currentPlateNum + '_Item?$apply=groupby((Currency),aggregate(Price with sum as TotalAmount))', []);
    // // return data.then((sumPrices) => {
    // //     return Materials.reduce((total, Material) => {
    // //       return total + Material.price;
    // //     }, 0);
    // //   };
    // //return sumPrices;
    // var count = link.then((count) => {
    //     return count;
    // });
    // if (data.length >0){
    //     let prod = results.getItem(0);
    //     return prod.TotatAmount;
    // }
    // return data.then((sumPrices) => {
    //     sumPrices = 20.5;
    //     return sumPrices;
    // } );
    ///sap/opu/odata4/sap/zsb_off_carcare/srvd_a2x/sap/zsd_off_carcare/0001/ZC_OFF_CARCARE(Site='N001',PlateNum='3053',PlateCode='N',MobileNum='30533053',CreatedOn=2024-05-24)/_Item?$apply=groupby((Currency),aggregate(Price with sum as TotalAmount))

    return context.read('/carcarenew/Services/carcarenew.service', currentPlateNum + '/_Item', []).then(function (results) {
        let data = results._array;
        let totalPrice = 0;
        // Iterate over the array with a for loop
        for (let i = 0; i < data.length; i++) {
            totalPrice = data[i].Price + totalPrice;
        }
        var currency = data[0].Currency;
        var ReturnText = "Total Price : " + totalPrice + "" + currency;
        return ReturnText;
    });
}


/***/ }),

/***/ "./build.definitions/carcarenew/Rules/Item_number.js":
/*!***********************************************************!*\
  !*** ./build.definitions/carcarenew/Rules/Item_number.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Item_number)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function Item_number(clientAPI) {
    var ItemNo = 10;
    let desiredLength = 6;
    let ItemNoZeroes = ItemNo.toString().padStart(desiredLength, '0');
    const currentPlateNum = clientAPI.getPageProxy().binding['@odata.readLink'];
    return clientAPI.read('/carcarenew/Services/carcarenew.service', currentPlateNum + '/_Item', []).then(function (results) {
        let data = results._array;
        if(data.length == 0 ){
            ItemNoZeroes = ItemNo.toString().padStart(desiredLength, '0');
            return ItemNoZeroes;
        }else{
            const highestItemNo = data.reduce((max, item) => item.ItemNo > max ? item.ItemNo : max, data[0].ItemNo);
            var highestItemNoInt = parseInt(highestItemNo,10);
            ItemNo = highestItemNoInt + 10;
            ItemNoZeroes = ItemNo.toString().padStart(desiredLength, '0');
            return ItemNoZeroes;
        }
        
    }
    )


    // var link = ('/carcarenew/Services/carcarenew.service', currentPlateNum + '/_Item', []);
    // let data = clientAPI.read(link);
    // let array = data._array;
    // if(
    //     array.length < 1){
    //         return ItemNo;
    // }
    // if( array.length > 0){
    //     ItemNo = data[0].ItemNo + 10;
    //     return ItemNo;
    // }    
}

// return context.read('/carcarenew/Services/carcarenew.service', currentPlateNum + '/_Item', []).then(function (results) {
//     let data = results._array;
//     let totalPrice = 0;
//     // Iterate over the array with a for loop
//     for (let i = 0; i < data.length; i++) {
//         totalPrice = data[i].Price + totalPrice;
//     }
//     return totalPrice;
// });


/***/ }),

/***/ "./build.definitions/carcarenew/Rules/Logging/LogLevels.js":
/*!*****************************************************************!*\
  !*** ./build.definitions/carcarenew/Rules/Logging/LogLevels.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LogLevels)
/* harmony export */ });
function LogLevels(clientAPI) {
    var levels = [];
    levels.push({
        'DisplayValue': 'Error',
        'ReturnValue': 'Error',
    });
    levels.push({
        'DisplayValue': 'Warning',
        'ReturnValue': 'Warn',
    });
    levels.push({
        'DisplayValue': 'Info',
        'ReturnValue': 'Info',
    });
    levels.push({
        'DisplayValue': 'Debug',
        'ReturnValue': 'Debug',
    });
    levels.push({
        'DisplayValue': 'Trace',
        'ReturnValue': 'Trace',
    });
    return levels;
}

/***/ }),

/***/ "./build.definitions/carcarenew/Rules/Logging/SetTraceCategories.js":
/*!**************************************************************************!*\
  !*** ./build.definitions/carcarenew/Rules/Logging/SetTraceCategories.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetTraceCategories)
/* harmony export */ });
function SetTraceCategories(clientAPI) {
    var logger = clientAPI.getLogger();
    const sectionedTable = clientAPI.getPageProxy().getControl('SectionedTable');
    const fcsection = sectionedTable.getSection('FormCellSection0');
    const traceCategory = fcsection.getControl('TracingCategoriesListPicker');
    const odataTrace = fcsection.getControl('odataTrace');

    try {
        if (traceCategory.getValue()) {
            var values = traceCategory.getValue();
            var categories = [];

            if (values && values.length) {
                categories = values.map((value) => {
                    return 'mdk.trace.' + value.ReturnValue;
                });
            }
            clientAPI.setDebugSettings(odataTrace.getValue(), true, categories);
        }
    } catch (exception) {
        logger.log(String(exception), 'Error');
        return undefined;
    }
}

/***/ }),

/***/ "./build.definitions/carcarenew/Rules/Logging/SetUserLogLevel.js":
/*!***********************************************************************!*\
  !*** ./build.definitions/carcarenew/Rules/Logging/SetUserLogLevel.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetUserLogLevel)
/* harmony export */ });
function SetUserLogLevel(clientAPI) {
    try {
        if (clientAPI.getValue() && clientAPI.getValue()[0]) {
            var logger = clientAPI.getLogger();
            var listPickerValue = clientAPI.getValue()[0].ReturnValue;
            if (listPickerValue) {
                switch (listPickerValue) {
                    case 'Debug':
                        logger.setLevel('Debug');
                        ShowTraceOptions(clientAPI, false);
                        break;
                    case 'Error':
                        logger.setLevel('Error');
                        ShowTraceOptions(clientAPI, false);
                        break;
                    case 'Warn':
                        logger.setLevel('Warn');
                        ShowTraceOptions(clientAPI, false);
                        break;
                    case 'Info':
                        logger.setLevel('Info');
                        ShowTraceOptions(clientAPI, false);
                        break;
                    case 'Trace':
                        logger.setLevel('Trace');
                        ShowTraceOptions(clientAPI, true);
                        break;
                    default:
                        // eslint-disable-next-line no-console
                        console.log(`unrecognized key ${listPickerValue}`);
                }
                return listPickerValue;
            }
        }
    } catch (exception) {
        logger.log(String(exception), 'Error');
        return undefined;
    }
}

function ShowTraceOptions(clientAPI, tracingEnabled) {
    let categories = clientAPI.getPageProxy().getControl('SectionedTable').getControl('TracingCategoriesListPicker');
    let odataTrace = clientAPI.getPageProxy().getControl('SectionedTable').getControl('odataTrace');

    categories.setVisible(tracingEnabled);
    odataTrace.setVisible(tracingEnabled);
}

/***/ }),

/***/ "./build.definitions/carcarenew/Rules/Logging/ToggleLogging.js":
/*!*********************************************************************!*\
  !*** ./build.definitions/carcarenew/Rules/Logging/ToggleLogging.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToggleLogging)
/* harmony export */ });
function ToggleLogging(clientAPI) {
    try {
        var logger = clientAPI.getLogger();
        const sectionedTable = clientAPI.getPageProxy().getControl('SectionedTable');
        const fcsection = sectionedTable.getSection('FormCellSection0');
        const enableLogSwitch = fcsection.getControl('EnableLogSwitch');
        const logLevelListPicker = fcsection.getControl('LogLevelListPicker');
        let switchValue = enableLogSwitch.getValue();
        if (switchValue) {
            logger.on();
            logLevelListPicker.setVisible(true);
            logLevelListPicker.setEditable(true);
            logLevelListPicker.redraw();
        } else {
            logger.off();
            logLevelListPicker.setEditable(false);
            logLevelListPicker.setVisible(false);
            logLevelListPicker.redraw();
        }
        return switchValue;
    } catch (exception) {
        logger.log(String(exception), 'Error');
        return undefined;
    }
}

/***/ }),

/***/ "./build.definitions/carcarenew/Rules/Logging/TraceCategories.js":
/*!***********************************************************************!*\
  !*** ./build.definitions/carcarenew/Rules/Logging/TraceCategories.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TraceCategories)
/* harmony export */ });
function TraceCategories(clientAPI) {
    var categories = ['action', 'api', 'app', 'binding', 'branding',
        'core', 'i18n', 'lcms', 'logging', 'odata', 'onboarding', 'profiling', 'push',
        'restservice', 'settings', 'targetpath', 'ui'
    ];

    var values = [];
    categories.forEach((category) => {
        values.push({
            'DisplayValue': category,
            'ReturnValue': category,
        });
    });

    return values;
}

/***/ }),

/***/ "./build.definitions/carcarenew/Rules/Logging/UserLogSetting.js":
/*!**********************************************************************!*\
  !*** ./build.definitions/carcarenew/Rules/Logging/UserLogSetting.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserLogSetting)
/* harmony export */ });
function UserLogSetting(clientAPI) {

    try {
        var logger = clientAPI.getLogger();

        const sectionedTable = clientAPI.getControl('SectionedTable');
        const fcsection = sectionedTable.getSection('FormCellSection0');
        const enableLogSwitch = fcsection.getControl('EnableLogSwitch');
        const logLevelListPicker = fcsection.getControl('LogLevelListPicker');
        const traceCategory = fcsection.getControl('TracingCategoriesListPicker');
        const odataTrace = fcsection.getControl('odataTrace');


        //Persist the user logging preferences
        if (logger) {
            console.log("in logger state");
            if (logger.isTurnedOn()) {
                if (enableLogSwitch) {
                    enableLogSwitch.setValue(true);
                }
                if (logLevelListPicker) {
                    logLevelListPicker.setEditable(true);
                }
            } else {
                if (enableLogSwitch) {
                    enableLogSwitch.setValue(false);
                }
                if (logLevelListPicker) {
                    logLevelListPicker.setEditable(false);
                }
            }
            var logLevel = logger.getLevel();
            if (logLevel) {
                if (logLevelListPicker) {
                    logLevelListPicker.setValue([logLevel]);
                }
            }
            if (logLevel === 'Trace') {
                traceCategory.setVisible(true);
                odataTrace.setVisible(true);
            }

            //Upon selecting a value in the List picker and clicking the back button 
            //will enable the onload page rule. This will set the selected value
            //in the control
            if (logLevelListPicker.getValue()[0]) {
                var returnValue = logLevelListPicker.getValue()[0].ReturnValue;
                if (returnValue) {
                    logLevelListPicker.setValue([returnValue]);
                    logger.setLevel(returnValue);
                }
            }
        }
    } catch (exception) {
        // eslint-disable-next-line no-console
        console.log(String(exception), 'Error User Logger could not be set');
    }
}

/***/ }),

/***/ "./build.definitions/carcarenew/Rules/MatList.js":
/*!*******************************************************!*\
  !*** ./build.definitions/carcarenew/Rules/MatList.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MatList)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function MatList(clientAPI) {
}
// For Git


/***/ }),

/***/ "./build.definitions/carcarenew/Rules/MaterialF4.js":
/*!**********************************************************!*\
  !*** ./build.definitions/carcarenew/Rules/MaterialF4.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MaterialF4)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function MaterialF4(clientAPI) {
 
    clientAPI.read("/carcarenew/Services/carcarenew.service", 'ZCDS_OFF_MATERIAL', [],  '$top=5000').then(function(oData){
        let data = oData._array;
        //alert (data.length)
        if(data){
            data = data.map(({Material, MaterialName, Price}) => ({
                DisplayValue: Material + ': ' + MaterialName + ': ' + Price ,ReturnValue: Material
            }));
          //clientAPI.getPageProxy().getControls()[0].getControl("FCCList").setPickerItems(data);
          var a = clientAPI.getPageProxy();
          var b = a.getControl('SectionedTable0');
          var c = b.getControl('FCCList2');
          c.setPickerItems(data);
          // var d = b.getControl('FCCPrice');
          // b.setValue('10');
          // return data; 
        }
    });
 
}
 

/***/ }),

/***/ "./build.definitions/carcarenew/Rules/MaterialPrice.js":
/*!*************************************************************!*\
  !*** ./build.definitions/carcarenew/Rules/MaterialPrice.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MaterialPrice)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function MaterialPrice(clientAPI) {
    const FCCList = clientAPI.getControl("FCCList");
    var Material = FCCList.getValue();
    return Material;
}


/***/ }),

/***/ "./build.definitions/carcarenew/Rules/MaterialSelection.js":
/*!*****************************************************************!*\
  !*** ./build.definitions/carcarenew/Rules/MaterialSelection.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MaterialSelection)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function MaterialSelection(clientAPI) {




var oSeletedItem = clientAPI.evaluateTargetPath('#Page:CreateItem/#Control:FCCList/#Value/0/BindingObject');
    var price = oSeletedItem.Price;

var oSeletedItem = clientAPI.evaluateTargetPath('#Page:CreateItem/#Control:FCCList/#Value/0/BindingObject');
    var price = oSeletedItem.Price
if (price !== ""){
    // let segControl = clientAPI.getPageProxy().getControl('SectionFormCell0').getControl('FCCPrice');
    // segControl.setValue(price);

    var totalUnitPriceFC = clientAPI.getPageProxy().evaluateTargetPath("#Control:FCCPrice");
            totalUnitPriceFC.setValue(price);
// Saving Netprice in one more field it will be hide from screen just for calulation
            var totalUnitPriceFCCopy = clientAPI.getPageProxy().evaluateTargetPath("#Control:FCCPriceCopy");
            totalUnitPriceFCCopy.setValue(price);

}
     
    return price;
                                                                          
    // const selectedValue = clientAPI.evaluateTargetPath('#Page:CreateItem/#Control:ListPicker/#SelectedValue');
    // console.log("Seleted Item", selectedValue)
    // const { Description: description } = selectedValue[0].Price;
    // return description;


}


/***/ }),

/***/ "./build.definitions/carcarenew/Rules/QuantityChange.js":
/*!**************************************************************!*\
  !*** ./build.definitions/carcarenew/Rules/QuantityChange.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ QuantityChange)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */

function QuantityChange(clientAPI) {
   var FCCPriceCopy = clientAPI.evaluateTargetPath('#Page:CreateItem/#Control:FCCPriceCopy/#Value');
    // let UnitPrice = clientAPI.evaluateTargetPath('#Page:CreateItem/#Control:FCCPrice/#Value');
    let Qty = clientAPI.evaluateTargetPath('#Page:CreateItem/#Control:FCCQuantity/#Value');

    if(Qty !== "" && Qty !== 0){

        var sum = parseFloat(FCCPriceCopy) * Qty ;
       sum =  parseFloat(sum).toFixed(2);
       
      var totalUnitPriceFC = clientAPI.getPageProxy().evaluateTargetPath("#Control:FCCPrice");
            totalUnitPriceFC.setValue(sum);

    }else {
        
    }
            
}


/***/ }),

/***/ "./build.definitions/carcarenew/Rules/SaveValidation.js":
/*!**************************************************************!*\
  !*** ./build.definitions/carcarenew/Rules/SaveValidation.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SaveValidation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function SaveValidation(clientAPI) {



let FCSite =  clientAPI.getPageProxy().evaluateTargetPath("#Control:FCSite").getValue();
let FCPlateCode = clientAPI.getPageProxy().evaluateTargetPath("#Control:FCPlateCode").getValue();
let FCPlateNum =  clientAPI.getPageProxy().evaluateTargetPath("#Control:FCPlateNum").getValue();
let FCMobile = clientAPI.getPageProxy().evaluateTargetPath("#Control:FCMobile").getValue();
           
    // let FCSite = clientAPI.evaluateTargetPath('#Page:CreateWash/#Control:FCSite/#Value');
    // let FCPlateCode = clientAPI.evaluateTargetPath('#Page:CreateWash/#Control:FCPlateCode/#Value');
    // let FCPlateNum = clientAPI.evaluateTargetPath('#Page:CreateWash/#Control:FCPlateNum/#Value');
    // let FCMobile = clientAPI.evaluateTargetPath('#Page:CreateWash/#Control:FCMobile/#Value');

    if((FCSite ==="" || FCSite == undefined) && (FCPlateCode === "" || FCSite == undefined ) && (FCPlateNum === "" || FCSite == undefined) && (FCMobile === "" || FCSite == undefined)){
        // validation popup
        return clientAPI.executeAction("/carcarenew/Actions/SaveValidation.action");
    }else{
        // good to post
        return clientAPI.executeAction("/carcarenew/Actions/ODataCreateHeader.action");
    }




}


/***/ }),

/***/ "./build.definitions/carcarenew/Rules/Service/Initialize.js":
/*!******************************************************************!*\
  !*** ./build.definitions/carcarenew/Rules/Service/Initialize.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Initialize)
/* harmony export */ });
function Initialize(context) {

    // Perform pre data initialization task

    // Initialize all your Data sources
    let _carcarenew = context.executeAction('/carcarenew/Actions/carcarenew/Service/InitializeOffline.action');

    //You can add more service initialize actions here

    return Promise.all([_carcarenew]).then(() => {
        // After Initializing the DB connections

        // Display successful initialization  message to the user
        return context.executeAction({

            "Name": "/carcarenew/Actions/GenericToastMessage.action",
            "Properties": {
                "Message": "Application Services Initialized",
                "Animated": true,
                "Duration": 1,
                "IsIconHidden": true,
                "NumberOfLines": 1
            }
        });
    }).catch(() => {
        return false;
    });
}

/***/ }),

/***/ "./build.definitions/carcarenew/Rules/Service/PostCall.js":
/*!****************************************************************!*\
  !*** ./build.definitions/carcarenew/Rules/Service/PostCall.js ***!
  \****************************************************************/
/***/ (() => {



/***/ }),

/***/ "./build.definitions/carcarenew/Rules/StoreGlobalValues.js":
/*!*****************************************************************!*\
  !*** ./build.definitions/carcarenew/Rules/StoreGlobalValues.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StoreGlobalValues)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function StoreGlobalValues(clientAPI) {

}


/***/ }),

/***/ "./build.definitions/carcarenew/Styles/Styles.css":
/*!********************************************************!*\
  !*** ./build.definitions/carcarenew/Styles/Styles.css ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
div.MDKPage

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/
`, "",{"version":3,"sources":["webpack://./build.definitions/carcarenew/Styles/Styles.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\ndiv.MDKPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/carcarenew/Styles/Styles.less":
/*!*********************************************************!*\
  !*** ./build.definitions/carcarenew/Styles/Styles.less ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
Page

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/`, "",{"version":3,"sources":["webpack://./build.definitions/carcarenew/Styles/Styles.less"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\nPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/carcarenew/Styles/Styles.nss":
/*!********************************************************!*\
  !*** ./build.definitions/carcarenew/Styles/Styles.nss ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "../../../../css-loader/dist/runtime/api.js":
/*!**************************************************!*\
  !*** ../../../../css-loader/dist/runtime/api.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../../../../css-loader/dist/runtime/sourceMaps.js":
/*!*********************************************************!*\
  !*** ../../../../css-loader/dist/runtime/sourceMaps.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./build.definitions/carcarenew/Pages/Application/About.page":
/*!*******************************************************************!*\
  !*** ./build.definitions/carcarenew/Pages/Application/About.page ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"KeyAndValues":[{"_Name":"KeyValue0","KeyName":"User ID","Value":"#Application/#AppData/UserId","Visible":true},{"Value":"#Application/#AppData/DeviceId","_Name":"KeyValue1","KeyName":"Device ID","Visible":true},{"Value":"/carcarenew/Globals/Application/ApplicationName.global","_Name":"KeyValue2","KeyName":"Application","Visible":true},{"Value":"/carcarenew/Globals/Application/AppDefinition_Version.global","_Name":"KeyValue3","KeyName":"Application Metadata Version","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}},{"KeyAndValues":[{"Value":"/carcarenew/Rules/Application/GetClientVersion.js","_Name":"KeyValue4","KeyName":"Client Version","Visible":"$(PLT,true,true,false)"},{"Value":"/carcarenew/Rules/Application/GetClientSupportVersions.js","_Name":"KeyValue5","KeyName":"Client Support Versions","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue1","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}}]}],"_Type":"Page","_Name":"About","Caption":"About","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/carcarenew/Actions/CloseModalPage_Complete.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/carcarenew/Pages/Application/Support.page":
/*!*********************************************************************!*\
  !*** ./build.definitions/carcarenew/Pages/Application/Support.page ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":true,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ContactCell","_Name":"SectionContactCellTable1","EmptySection":{"FooterVisible":false},"ContactCells":[{"ContactCell":{"_Name":"ContactCellItem0","Headline":"Contact Support","ActivityItems":[{"ActivityType":"Phone","ActivityValue":"/carcarenew/Globals/Application/SupportPhone.global"},{"ActivityType":"Email","ActivityValue":"/carcarenew/Globals/Application/SupportEmail.global"},{"ActivityType":"Message","ActivityValue":"/carcarenew/Globals/Application/SupportPhone.global"}]}}]},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":false,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.SimplePropertyCollection","_Name":"SectionSimplePropertyCollection0","Visible":"$(PLT,true,true,false)","EmptySection":{"FooterVisible":false},"SimplePropertyCells":[{"SimplePropertyCell":{"_Name":"SectionSimplePropertyCell0","KeyName":"Activity Log","AccessoryType":"DisclosureIndicator","Visible":"$(PLT,true,true,false)","OnPress":"/carcarenew/Actions/Application/NavToActivityLog.action"}}],"Layout":{"NumberOfColumns":1,"MinimumInteritemSpacing":66}}]}],"_Type":"Page","_Name":"Settings","Caption":"Settings","PrefersLargeCaption":false,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/carcarenew/Actions/CloseModalPage_Complete.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/carcarenew/Pages/Application/UserActivityLog.page":
/*!*****************************************************************************!*\
  !*** ./build.definitions/carcarenew/Pages/Application/UserActivityLog.page ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":true,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"Controls":[{"Value":false,"_Type":"Control.Type.FormCell.Switch","_Name":"EnableLogSwitch","IsVisible":true,"Separator":true,"Caption":"Enable Logging","OnValueChange":"/carcarenew/Rules/Logging/ToggleLogging.js","IsEditable":true},{"IsSearchEnabled":false,"_Type":"Control.Type.FormCell.ListPicker","_Name":"LogLevelListPicker","IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Log Level","OnValueChange":"/carcarenew/Rules/Logging/SetUserLogLevel.js","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":true,"AllowDefaultValueIfOneItem":false,"IsEditable":false,"PickerItems":"/carcarenew/Rules/Logging/LogLevels.js"},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"TracingCategoriesListPicker","IsVisible":false,"Separator":true,"AllowMultipleSelection":true,"AllowEmptySelection":true,"Caption":"Tracing Categories","PickerPrompt":"Select Categories for Tracing","OnValueChange":"/carcarenew/Rules/Logging/SetTraceCategories.js","IsSelectedSectionEnabled":true,"IsPickerDismissedOnSelection":false,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"IsEditable":true,"PickerItems":"/carcarenew/Rules/Logging/TraceCategories.js"},{"Value":false,"_Type":"Control.Type.FormCell.Switch","_Name":"odataTrace","IsVisible":false,"Separator":true,"Caption":"OData Tracing","OnValueChange":"/carcarenew/Rules/Logging/SetTraceCategories.js","IsEditable":true}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"FormCellSection0"},{"Controls":[{"_Type":"Control.Type.FormCell.Button","_Name":"Send","IsVisible":true,"Separator":true,"Title":"Send Activity Log","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","Enabled":true,"OnPress":"/carcarenew/Actions/Logging/UploadLogProgress.action"}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"FormCellSection1"}]}],"_Type":"Page","_Name":"UserActivityLog","Caption":"Activity Log","PrefersLargeCaption":false,"OnLoaded":"/carcarenew/Rules/Logging/UserLogSetting.js"}

/***/ }),

/***/ "./build.definitions/carcarenew/Pages/CreateItem.page":
/*!************************************************************!*\
  !*** ./build.definitions/carcarenew/Pages/CreateItem.page ***!
  \************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Controls":[{"Value":"/carcarenew/Rules/Item_number.js","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCItem","IsVisible":true,"Separator":true,"Caption":"Item","PlaceHolder":"PlaceHolder","Enabled":true,"IsEditable":false},{"Value":["{Material}"],"_Type":"Control.Type.FormCell.ListPicker","_Name":"FCCList","IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":true,"Caption":"Choose Material","DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"PickerPrompt":"Please select one single item","OnValueChange":"/carcarenew/Rules/MaterialSelection.js","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":false,"AllowDefaultValueIfOneItem":false,"IsEditable":true,"Search":{"Enabled":true},"PickerItems":{"Target":{"Service":"/carcarenew/Services/carcarenew.service","EntitySet":"ZCDS_OFF_MATERIAL"},"DisplayValue":"{Material} {MaterialName} {Price}","ReturnValue":"{Material}"}},{"Value":"/carcarenew/Rules/MaterialSelection.js","_Type":"Control.Type.FormCell.SimpleProperty","DataSubscriptions":["ZCDS_OFF_MATERIAL"],"_Name":"FCCPrice","IsVisible":true,"Separator":true,"Caption":"Price","PlaceHolder":"PlaceHolder","Enabled":true,"IsEditable":false},{"Value":"/carcarenew/Rules/MaterialSelection.js","_Type":"Control.Type.FormCell.SimpleProperty","DataSubscriptions":["ZCDS_OFF_MATERIAL"],"_Name":"FCCPriceCopy","IsVisible":false,"Separator":true,"Caption":"Price","PlaceHolder":"PlaceHolder","Enabled":true,"IsEditable":false},{"Value":"INR","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCCurrency","IsVisible":true,"Separator":true,"Caption":"Currency","PlaceHolder":"PlaceHolder","Enabled":true,"IsEditable":false},{"Value":"1","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCQuantity","IsVisible":true,"Separator":true,"Caption":"Quantity","PlaceHolder":"1","OnValueChange":"/carcarenew/Rules/QuantityChange.js","Enabled":true,"IsEditable":true},{"Value":"EA","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCUnit","IsVisible":true,"Separator":true,"Caption":"Unit","PlaceHolder":"PlaceHolder","Enabled":true,"IsEditable":false},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"FCCList2","IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":true,"Caption":"Choose Material","DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"PickerPrompt":"Please select one single item","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":false,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"IsEditable":true,"Search":{"Enabled":true},"PickerItems":"/carcarenew/Rules/MaterialF4.js"}],"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0"}]}],"_Type":"Page","_Name":"CreateItem","Caption":"Create Item","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Item","SystemItem":"Cancel","Position":"Left","IsIconCircular":false,"Visible":true,"OnPress":"/carcarenew/Actions/CloseModalPage_Cancel.action"},{"_Name":"ActionBarItem1","Caption":"Item","SystemItem":"Save","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/carcarenew/Actions/ODataCreateItem.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/carcarenew/Pages/CreateWash.page":
/*!************************************************************!*\
  !*** ./build.definitions/carcarenew/Pages/CreateWash.page ***!
  \************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Controls":[{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCSite","IsVisible":true,"Separator":true,"validationProperties":{"ValidationMessageColor":"#f26363","SeparatorBackgroundColor":"#ff9393","ValidationViewBackgroundColor":"#f48989","ValidationViewIsHidden":true},"Caption":"Site","PlaceHolder":"Site","KeyboardType":"Default","AlternateInput":"None","Enabled":true,"IsEditable":true},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCPlateCode","IsVisible":true,"Separator":true,"Caption":"Plate Code","PlaceHolder":"Plate Code","Enabled":true,"IsEditable":true},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCPlateNum","IsVisible":true,"Separator":true,"Caption":"Plate Num","PlaceHolder":"Plate Num","KeyboardType":"Number","Enabled":true,"IsEditable":true},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCMobile","IsVisible":true,"Separator":true,"Caption":"Mobile","PlaceHolder":"Mobile","KeyboardType":"Phone","Enabled":true,"IsEditable":true},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCModel","IsVisible":true,"Separator":true,"Caption":"Model","PlaceHolder":"Model","Enabled":true,"IsEditable":true},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCName","IsVisible":true,"Separator":true,"Caption":"Name","PlaceHolder":"Name","Enabled":true,"IsEditable":true},{"Value":"2024-05-24T18:58:19","_Type":"Control.Type.FormCell.DatePicker","_Name":"FCDate","IsVisible":true,"Separator":true,"Caption":"Date","IsEditable":false,"Mode":"Date"}],"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0"}]}],"_Type":"Page","_Name":"CreateWash","Caption":"CreateWash","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Item","SystemItem":"Save","Position":"Left","IsIconCircular":false,"Visible":true,"OnPress":"/carcarenew/Rules/SaveValidation.js"},{"_Name":"ActionBarItem1","Caption":"Item","SystemItem":"Cancel","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/carcarenew/Actions/CloseModalPage_Cancel.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/carcarenew/Pages/DisplayWash.page":
/*!*************************************************************!*\
  !*** ./build.definitions/carcarenew/Pages/DisplayWash.page ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/carcarenew/Services/carcarenew.service","EntitySet":"ZC_OFF_CARCARE","QueryOptions":"$expand=_Item&$filter=PlateNum eq '{{#Page:CreateWash/#Control:FCPlateNum/#Value}}' and PlateCode eq '{{#Page:CreateWash/#Control:FCPlateCode/#Value}}' and Site eq '{{#Page:CreateWash/#Control:FCSite/#Value}}' and MobileNum eq '{{#Page:CreateWash/#Control:FCMobile/#Value}}'"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"Caption":"No Order Found","FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true,"LeadingItems":[],"TrailingItems":[]},"Title":"$(D,{CreatedOn},'','',{format:'medium'})","Subhead":"{PlateNum}","DisplayDescriptionInMobile":true,"StatusText":"{FirstName}, {PlateCode}, {MobileNum}, {Site}","PreserveIconStackSpacing":false,"AccessoryType":"DisclosureIndicator","Tags":[],"AvatarStack":{"Avatars":[],"ImageIsCircular":true,"ImageHasBorder":false},"AvatarGrid":{"Avatars":[],"ImageIsCircular":true},"OnPress":"/carcarenew/Actions/navToHeaderDetail.action","Selected":false},"Search":{"Enabled":true},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}}]}],"_Type":"Page","_Name":"DisplayWash","Caption":"DisplayWash","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/carcarenew/Pages/ErrorArchive/ErrorArchive_Detail.page":
/*!**********************************************************************************!*\
  !*** ./build.definitions/carcarenew/Pages/ErrorArchive/ErrorArchive_Detail.page ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"KeyAndValues":[{"Value":"{Message}","_Name":"KeyValue0","KeyName":"Error","Visible":true},{"Value":"{RequestBody}","_Name":"KeyValue1","KeyName":"Request Body","Visible":true},{"Value":"{RequestURL}","_Name":"KeyValue2","KeyName":"Request URL","Visible":true},{"Value":"{HTTPStatusCode}","_Name":"KeyValue3","KeyName":"HTTP Status Code","Visible":true},{"Value":"{RequestMethod}","_Name":"KeyValue4","KeyName":"Request Method","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}}]}],"_Type":"Page","_Name":"ErrorArchive_Detail","Caption":"Details","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/carcarenew/Pages/ErrorArchive/ErrorArchive_List.page":
/*!********************************************************************************!*\
  !*** ./build.definitions/carcarenew/Pages/ErrorArchive/ErrorArchive_List.page ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ObjectTable","Target":{"Service":"/carcarenew/Services/carcarenew.service","EntitySet":"ErrorArchive"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"FooterVisible":false,"Caption":"No record found!"},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true},"Title":"{HTTPStatusCode}","Subhead":"{RequestURL}","Footnote":"{Message}","StatusText":"{RequestMethod}","AvatarStack":{"ImageIsCircular":false},"PreserveIconStackSpacing":false,"AccessoryType":"None","OnPress":"/carcarenew/Actions/ErrorArchive/NavToErrorArchive_Detail.action","Selected":false},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}}]}],"_Type":"Page","_Name":"ErrorArchive_List","Caption":"Error List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/carcarenew/Pages/HeaderDetail.page":
/*!**************************************************************!*\
  !*** ./build.definitions/carcarenew/Pages/HeaderDetail.page ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","Target":{"Service":"/carcarenew/Services/carcarenew.service","EntitySet":"{@odata.readLink}/_Item","QueryOptions":"$filter=Site eq '{{#Page:CreateWash/#Control:FCSite/#Value}}' and PlateCode eq '{{#Page:CreateWash/#Control:FCPlateCode/#Value}}' and PlateNum eq '{{#Page:CreateWash/#Control:FCPlateNum/#Value}}'"},"_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"KeyAndValues":[{"Value":"{Site}","_Name":"KeyValue0","KeyName":"Site","Visible":true},{"Value":"{CreatedOn}","_Name":"KeyValue1","KeyName":"Created On","Visible":true},{"Value":"{PlateCode}","_Name":"KeyValue2","KeyName":"Plate Code","Visible":true},{"Value":"{PlateNum}","_Name":"KeyValue3","KeyName":"Plate Num","Visible":true},{"Value":"{MobileNum}","_Name":"KeyValue4","KeyName":"Mobile Num","Visible":true},{"Value":"{FirstName}","_Name":"KeyValue5","KeyName":"Name","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":2}},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Header":{"_Name":"SectionHeader0","AccessoryType":"None","UseTopPadding":true,"Caption":"Selected Materials"},"Footer":{"_Name":"SectionFooter0","Caption":"See All","AttributeLabel":"/carcarenew/Rules/Item_count.js","AccessoryType":"DisclosureIndicator","FooterStyle":"Attribute","Visible":true,"OnPress":{"Name":"/carcarenew/Actions/GenericNavigation.action","Properties":{"PageToOpen":"/carcarenew/Pages/SelectedItems.page"}},"UseBottomPadding":false},"_Type":"Section.Type.ObjectTable","DataSubscriptions":["ZC_OFF_CARITEM"],"Target":{"Service":"/carcarenew/Services/carcarenew.service","EntitySet":"{@odata.readLink}/_Item","QueryOptions":"$expand=_Header&$orderby=PlateNum&$select=ItemNo,Material,MobileNum,PlateCode,PlateNum,Site","ReadLink":"{@odata.readLink}"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"Caption":"No Items Found","FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true,"LeadingItems":[],"TrailingItems":[]},"Title":"{Material}","Subhead":"{Price}","DisplayDescriptionInMobile":true,"StatusText":"{ItemNo}","SubstatusText":"{Price} {Currency}","PreserveIconStackSpacing":false,"AccessoryType":"None","Tags":[],"AvatarStack":{"Avatars":[],"ImageIsCircular":true,"ImageHasBorder":false},"AvatarGrid":{"Avatars":[],"ImageIsCircular":true},"OnPress":{"Name":"/carcarenew/Actions/GenericNavigation.action","Properties":{"PageToOpen":"/carcarenew/Pages/SelectedItemsDetail.page"}},"Selected":false},"Search":{"Enabled":true},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}}]}],"DesignTimeTarget":{"Service":"/carcarenew/Services/carcarenew.service","EntitySet":"ZC_OFF_CARCARE","QueryOptions":"$expand=_Item&$filter=Site eq '{{#Control:FCSite/#Value}}' and PlateCode eq '{{#Control:FCPlateCode/#Value}}' and PlateNum eq '{{#Control:FCPlateNum/#Value}}' and MobileNum eq '{{#Control:FCMobile/#Value}}'"},"_Type":"Page","_Name":"HeaderDetail","Caption":"Detail","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Item","SystemItem":"Trash","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/carcarenew/Rules/Header_DeleteConfirmation.js"}],"_Name":"ActionBar1"},"FioriToolbar":{"_Type":"Control.Type.FioriToolbar","_Name":"FioriToolbar0","Items":[{"_Type":"FioriToolbarItem.Type.Button","_Name":"ToolbarItem0","Visible":true,"Title":"Add Item","OnPress":"/carcarenew/Actions/navToCreateItem.action","Image":"res://mdk_logo.png","Enabled":true,"ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading"}]}}

/***/ }),

/***/ "./build.definitions/carcarenew/Pages/Main.page":
/*!******************************************************!*\
  !*** ./build.definitions/carcarenew/Pages/Main.page ***!
  \******************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ButtonTable","_Name":"SectionButtonTable1","Visible":true,"EmptySection":{"FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Buttons":[{"_Name":"SectionButton4","Title":"Display Wash","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"res://mdk_logo.png","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/carcarenew/Actions/navToDisplayWash.action"},{"_Name":"SectionButton3","Title":"Create wash","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"res://mdk_logo.png","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/carcarenew/Actions/navToCreateWash.action"}],"Layout":{"LayoutType":"Vertical","HorizontalAlignment":"Leading"}},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.ButtonTable","_Name":"SectionButtonTable_carcarenew","Header":{"_Name":"SectionHeader_carcarenew","AccessoryType":"None","UseTopPadding":true,"Caption":"carcarenew"},"Visible":true,"EmptySection":{"FooterVisible":false},"Buttons":[{"_Name":"SectionButton0","Title":"ZC_OFF_CARCARE","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/carcarenew/Actions/carcarenew/ZC_OFF_CARCARE/NavToZC_OFF_CARCARE_List.action"},{"_Name":"SectionButton1","Title":"ZC_OFF_CARITEM","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/carcarenew/Actions/carcarenew/ZC_OFF_CARITEM/NavToZC_OFF_CARITEM_List.action"},{"_Name":"SectionButton2","Title":"ZCDS_OFF_MATERIAL","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/carcarenew/Actions/carcarenew/ZCDS_OFF_MATERIAL/NavToZCDS_OFF_MATERIAL_List.action"}],"Layout":{"LayoutType":"Vertical","HorizontalAlignment":"Leading"}}]}],"_Type":"Page","_Name":"Main","Caption":"Main","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"User Menu","Icon":"sap-icon://customer","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/carcarenew/Actions/Application/UserMenuPopover.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/carcarenew/Pages/SelectWash.page":
/*!************************************************************!*\
  !*** ./build.definitions/carcarenew/Pages/SelectWash.page ***!
  \************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Controls":[{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCIMaterial","IsVisible":true,"Separator":true,"Caption":"Material","PlaceHolder":"Material","KeyboardType":"Default","Enabled":true,"IsEditable":true},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCItem","IsVisible":true,"Separator":true,"Caption":"Item","PlaceHolder":"Item","KeyboardType":"Number","Enabled":true,"IsEditable":true}],"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0"}]}],"_Type":"Page","_Name":"SelectWash","Caption":"SelectWash","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Save","SystemItem":"Save","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/carcarenew/Actions/ODataCreateItem.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/carcarenew/Pages/SelectedItems.page":
/*!***************************************************************!*\
  !*** ./build.definitions/carcarenew/Pages/SelectedItems.page ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/carcarenew/Services/carcarenew.service","EntitySet":"ZC_OFF_CARITEM","QueryOptions":"$filter=PlateNum eq '{{#Page:CreateWash/#Control:FCPlateNum/#Value}}'"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"Caption":"No item found","FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true,"LeadingItems":[],"TrailingItems":[]},"Title":"{PlateCode} {PlateNum}","Subhead":"{ItemNo}","DisplayDescriptionInMobile":true,"StatusText":"{Material}","PreserveIconStackSpacing":false,"AccessoryType":"DisclosureIndicator","Tags":[],"AvatarStack":{"Avatars":[],"ImageIsCircular":true,"ImageHasBorder":false},"AvatarGrid":{"Avatars":[],"ImageIsCircular":true},"OnPress":{"Name":"/carcarenew/Actions/GenericNavigation.action","Properties":{"PageToOpen":"/carcarenew/Pages/SelectedItemsDetail.page"}},"Selected":false},"Search":{"Enabled":true},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}}]}],"_Type":"Page","_Name":"SelectedItems","Caption":"SelectedItems","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/carcarenew/Pages/SelectedItemsDetail.page":
/*!*********************************************************************!*\
  !*** ./build.definitions/carcarenew/Pages/SelectedItemsDetail.page ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"KeyAndValues":[{"Value":"{Material}","_Name":"KeyValue0","KeyName":"Material","Visible":true},{"Value":"{ItemNo}","_Name":"KeyValue1","KeyName":"Item","Visible":true}],"MaxItemCount":1,"Layout":{"NumberOfColumns":2}}],"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"}}],"_Type":"Page","_Name":"SelectedItemsDetail","Caption":"Selected Item Detail","PrefersLargeCaption":true,"DesignTimeTarget":{"Service":"/carcarenew/Services/carcarenew.service","EntitySet":"ZC_OFF_CARITEM"}}

/***/ }),

/***/ "./build.definitions/carcarenew/Pages/carcarenew_ZCDS_OFF_MATERIAL/ZCDS_OFF_MATERIAL_Detail.page":
/*!*******************************************************************************************************!*\
  !*** ./build.definitions/carcarenew/Pages/carcarenew_ZCDS_OFF_MATERIAL/ZCDS_OFF_MATERIAL_Detail.page ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"ZCDS_OFF_MATERIALType Detail","DesignTimeTarget":{"Service":"/carcarenew/Services/carcarenew.service","EntitySet":"ZCDS_OFF_MATERIAL","QueryOptions":""},"ActionBar":{"Items":[]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{MaterialName}","Subhead":"{Material}","BodyText":"","Footnote":"{SalesOrg}","Description":"{Plant}","StatusText":"{Materialtype}","StatusImage":"","SubstatusImage":"","SubstatusText":"{MaterialGroup}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"Material","Value":"{Material}"},{"KeyName":"Plant","Value":"{Plant}"},{"KeyName":"SalesOrg","Value":"{SalesOrg}"},{"KeyName":"Materialtype","Value":"{Materialtype}"},{"KeyName":"MaterialGroup","Value":"{MaterialGroup}"},{"KeyName":"ProfitCenter","Value":"{ProfitCenter}"},{"KeyName":"MaterialName","Value":"{MaterialName}"},{"KeyName":"Price","Value":"{Price}"},{"KeyName":"Currency","Value":"{Currency}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"ZCDS_OFF_MATERIAL_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/carcarenew/Pages/carcarenew_ZCDS_OFF_MATERIAL/ZCDS_OFF_MATERIAL_List.page":
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/carcarenew/Pages/carcarenew_ZCDS_OFF_MATERIAL/ZCDS_OFF_MATERIAL_List.page ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"ZCDS_OFF_MATERIAL","ActionBar":{"Items":[]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{Plant}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/carcarenew/Actions/carcarenew/ZCDS_OFF_MATERIAL/NavToZCDS_OFF_MATERIAL_Detail.action","StatusImage":"","Title":"{MaterialName}","Footnote":"{SalesOrg}","PreserveIconStackSpacing":false,"StatusText":"{Materialtype}","Subhead":"{Material}","SubstatusText":"{MaterialGroup}"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"ZCDS_OFF_MATERIAL","Service":"/carcarenew/Services/carcarenew.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"ZCDS_OFF_MATERIAL_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/carcarenew/Pages/carcarenew_ZC_OFF_CARCARE/ZC_OFF_CARCARE_Detail.page":
/*!*************************************************************************************************!*\
  !*** ./build.definitions/carcarenew/Pages/carcarenew_ZC_OFF_CARCARE/ZC_OFF_CARCARE_Detail.page ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"ZC_OFF_CARCAREType Detail","DesignTimeTarget":{"Service":"/carcarenew/Services/carcarenew.service","EntitySet":"ZC_OFF_CARCARE","QueryOptions":""},"ActionBar":{"Items":[]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{LastName}","Subhead":"{Site}","BodyText":"","Footnote":"{PlateCode}","Description":"{PlateNum}","StatusText":"{MobileNum}","StatusImage":"","SubstatusImage":"","SubstatusText":"{CreatedOn}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"Site","Value":"{Site}"},{"KeyName":"PlateNum","Value":"{PlateNum}"},{"KeyName":"PlateCode","Value":"{PlateCode}"},{"KeyName":"MobileNum","Value":"{MobileNum}"},{"KeyName":"CreatedOn","Value":"{CreatedOn}"},{"KeyName":"CreatedAt","Value":"{CreatedAt}"},{"KeyName":"Partner","Value":"{Partner}"},{"KeyName":"Model","Value":"{Model}"},{"KeyName":"Manufacture","Value":"{Manufacture}"},{"KeyName":"Createdby","Value":"{Createdby}"},{"KeyName":"Vir","Value":"{Vir}"},{"KeyName":"Salesorder","Value":"{Salesorder}"},{"KeyName":"Delivery","Value":"{Delivery}"},{"KeyName":"Invoice","Value":"{Invoice}"},{"KeyName":"Paymentdoc","Value":"{Paymentdoc}"},{"KeyName":"Completed","Value":"{Completed}"},{"KeyName":"OfflineFlag","Value":"{OfflineFlag}"},{"KeyName":"LastName","Value":"{LastName}"},{"KeyName":"FirstName","Value":"{FirstName}"},{"KeyName":"CashAmount","Value":"{CashAmount}"},{"KeyName":"CardAmount","Value":"{CardAmount}"},{"KeyName":"CardAuthCode","Value":"{CardAuthCode}"},{"KeyName":"Currency","Value":"{Currency}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"ZC_OFF_CARCARE_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/carcarenew/Pages/carcarenew_ZC_OFF_CARCARE/ZC_OFF_CARCARE_List.page":
/*!***********************************************************************************************!*\
  !*** ./build.definitions/carcarenew/Pages/carcarenew_ZC_OFF_CARCARE/ZC_OFF_CARCARE_List.page ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"ZC_OFF_CARCARE","ActionBar":{"Items":[]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{PlateNum}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/carcarenew/Actions/carcarenew/ZC_OFF_CARCARE/NavToZC_OFF_CARCARE_Detail.action","StatusImage":"","Title":"{LastName}","Footnote":"{PlateCode}","PreserveIconStackSpacing":false,"StatusText":"{MobileNum}","Subhead":"{Site}","SubstatusText":"{CreatedOn}"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"ZC_OFF_CARCARE","Service":"/carcarenew/Services/carcarenew.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"ZC_OFF_CARCARE_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/carcarenew/Pages/carcarenew_ZC_OFF_CARITEM/ZC_OFF_CARITEM_Detail.page":
/*!*************************************************************************************************!*\
  !*** ./build.definitions/carcarenew/Pages/carcarenew_ZC_OFF_CARITEM/ZC_OFF_CARITEM_Detail.page ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"ZC_OFF_CARITEMType Detail","DesignTimeTarget":{"Service":"/carcarenew/Services/carcarenew.service","EntitySet":"ZC_OFF_CARITEM","QueryOptions":""},"ActionBar":{"Items":[]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{Site}","Subhead":"{PlateNum}","BodyText":"","Footnote":"{MobileNum}","Description":"{PlateCode}","StatusText":"{CreatedOn}","StatusImage":"","SubstatusImage":"","SubstatusText":"{ItemNo}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"Site","Value":"{Site}"},{"KeyName":"PlateNum","Value":"{PlateNum}"},{"KeyName":"PlateCode","Value":"{PlateCode}"},{"KeyName":"MobileNum","Value":"{MobileNum}"},{"KeyName":"CreatedOn","Value":"{CreatedOn}"},{"KeyName":"ItemNo","Value":"{ItemNo}"},{"KeyName":"CreatedAt","Value":"{CreatedAt}"},{"KeyName":"Material","Value":"{Material}"},{"KeyName":"Price","Value":"{Price}"},{"KeyName":"Currency","Value":"{Currency}"},{"KeyName":"Quantity","Value":"{Quantity}"},{"KeyName":"Unit","Value":"{Unit}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"ZC_OFF_CARITEM_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/carcarenew/Pages/carcarenew_ZC_OFF_CARITEM/ZC_OFF_CARITEM_List.page":
/*!***********************************************************************************************!*\
  !*** ./build.definitions/carcarenew/Pages/carcarenew_ZC_OFF_CARITEM/ZC_OFF_CARITEM_List.page ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"ZC_OFF_CARITEM","ActionBar":{"Items":[]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{PlateCode}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/carcarenew/Actions/carcarenew/ZC_OFF_CARITEM/NavToZC_OFF_CARITEM_Detail.action","StatusImage":"","Title":"{Site}","Footnote":"{MobileNum}","PreserveIconStackSpacing":false,"StatusText":"{CreatedOn}","Subhead":"{PlateNum}","SubstatusText":"{ItemNo}"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"ZC_OFF_CARITEM","Service":"/carcarenew/Services/carcarenew.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"ZC_OFF_CARITEM_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/Application.app":
/*!*******************************************!*\
  !*** ./build.definitions/Application.app ***!
  \*******************************************/
/***/ ((module) => {

module.exports = {"_Name":"carcarenew","Version":"/carcarenew/Globals/Application/AppDefinition_Version.global","MainPage":"/carcarenew/Pages/Main.page","OnLaunch":"/carcarenew/Rules/Service/Initialize.js","OnWillUpdate":"/carcarenew/Rules/Application/OnWillUpdate.js","OnDidUpdate":"/carcarenew/Rules/Service/Initialize.js","Styles":"/carcarenew/Styles/Styles.less","Localization":"/carcarenew/i18n/i18n.properties","_SchemaVersion":"24.4","StyleSheets":{"Styles":{"css":"/carcarenew/Styles/Styles.css","ios":"/carcarenew/Styles/Styles.nss","android":"/carcarenew/Styles/Styles.json"}}}

/***/ }),

/***/ "./build.definitions/carcarenew/Actions/Application/AppUpdate.action":
/*!***************************************************************************!*\
  !*** ./build.definitions/carcarenew/Actions/Application/AppUpdate.action ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ApplicationUpdate","ActionResult":{"_Name":"AppUpdate"},"OnFailure":"/carcarenew/Rules/Application/AppUpdateFailure.js","OnSuccess":"/carcarenew/Rules/Application/AppUpdateSuccess.js"}

/***/ }),

/***/ "./build.definitions/carcarenew/Actions/Application/AppUpdateFailureMessage.action":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/carcarenew/Actions/Application/AppUpdateFailureMessage.action ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to update application - {#ActionResults:AppUpdate/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/carcarenew/Actions/Application/AppUpdateProgressBanner.action":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/carcarenew/Actions/Application/AppUpdateProgressBanner.action ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionTimeout":3,"Message":"Checking for Updates...","OnSuccess":"/carcarenew/Actions/Application/AppUpdate.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/carcarenew/Actions/Application/AppUpdateSuccessMessage.action":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/carcarenew/Actions/Application/AppUpdateSuccessMessage.action ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Update application complete","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/carcarenew/Actions/Application/Logout.action":
/*!************************************************************************!*\
  !*** ./build.definitions/carcarenew/Actions/Application/Logout.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logout","SkipReset":true}

/***/ }),

/***/ "./build.definitions/carcarenew/Actions/Application/NavToAbout.action":
/*!****************************************************************************!*\
  !*** ./build.definitions/carcarenew/Actions/Application/NavToAbout.action ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"PageToOpen":"/carcarenew/Pages/Application/About.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/carcarenew/Actions/Application/NavToActivityLog.action":
/*!**********************************************************************************!*\
  !*** ./build.definitions/carcarenew/Actions/Application/NavToActivityLog.action ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"PageToOpen":"/carcarenew/Pages/Application/UserActivityLog.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/carcarenew/Actions/Application/NavToSupport.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/carcarenew/Actions/Application/NavToSupport.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"NavigationType":"Cross","PageToOpen":"/carcarenew/Pages/Application/Support.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/carcarenew/Actions/Application/OnWillUpdate.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/carcarenew/Actions/Application/OnWillUpdate.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"A new version of the application is now ready to apply. Do you want to update to this version?","Title":"New Version Available!","OKCaption":"Now","CancelCaption":"Later","ActionResult":{"_Name":"OnWillUpdate"}}

/***/ }),

/***/ "./build.definitions/carcarenew/Actions/Application/Reset.action":
/*!***********************************************************************!*\
  !*** ./build.definitions/carcarenew/Actions/Application/Reset.action ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logout","SkipReset":false}

/***/ }),

/***/ "./build.definitions/carcarenew/Actions/Application/ResetMessage.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/carcarenew/Actions/Application/ResetMessage.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"This action will remove all data and return to the Welcome screen. Any local data will be lost. Are you sure you want to continue?","Title":"Reset","OKCaption":"Yes","OnOK":"/carcarenew/Rules/Application/ResetAppSettingsAndLogout.js","CancelCaption":"No"}

/***/ }),

/***/ "./build.definitions/carcarenew/Actions/Application/UserMenuPopover.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/carcarenew/Actions/Application/UserMenuPopover.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"PopoverItems":[{"Enabled":true,"Icon":"sap-icon://synchronize","OnPress":"/carcarenew/Actions/carcarenew/Service/SyncStartedMessage.action","Title":"Sync Changes","Visible":"$(PLT,true,true,false)"},{"Enabled":true,"Icon":"sap-icon://headset","OnPress":"/carcarenew/Actions/Application/NavToSupport.action","Title":"Support","Visible":true},{"Enabled":true,"Icon":"sap-icon://refresh","OnPress":"/carcarenew/Actions/Application/AppUpdateProgressBanner.action","Title":"Check for Updates","Visible":"$(PLT,true,true,false)"},{"Enabled":true,"Icon":"sap-icon://hint","OnPress":"/carcarenew/Actions/Application/NavToAbout.action","Title":"About","Visible":true},{"Enabled":true,"Icon":"sap-icon://reset","OnPress":"/carcarenew/Actions/Application/ResetMessage.action","Title":"Reset","Visible":true},{"Enabled":true,"Icon":"sap-icon://log","OnPress":"/carcarenew/Actions/Application/Logout.action","Title":"Logout","Visible":"/carcarenew/Rules/Application/ClientIsMultiUserMode.js"}],"_Type":"Action.Type.PopoverMenu"}

/***/ }),

/***/ "./build.definitions/carcarenew/Actions/ChangeSetCreate.action":
/*!*********************************************************************!*\
  !*** ./build.definitions/carcarenew/Actions/ChangeSetCreate.action ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.ChangeSet","ActionResult":{"_Name":"ChangeSetCreate"},"OnFailure":"/carcarenew/Actions/CreateHeaderFailure.action","OnSuccess":"/carcarenew/Actions/CloseModalPage_Complete.action","Target":{"Service":"/carcarenew/Services/carcarenew.service"},"Actions":["/carcarenew/Actions/ODataCreateHeader.action","/carcarenew/Actions/ODataCreateItem.action"]}

/***/ }),

/***/ "./build.definitions/carcarenew/Actions/CloseModalPage_Cancel.action":
/*!***************************************************************************!*\
  !*** ./build.definitions/carcarenew/Actions/CloseModalPage_Cancel.action ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Canceled","CancelPendingActions":true,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/carcarenew/Actions/CloseModalPage_Complete.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/carcarenew/Actions/CloseModalPage_Complete.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Completed","CancelPendingActions":false,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/carcarenew/Actions/ClosePage.action":
/*!***************************************************************!*\
  !*** ./build.definitions/carcarenew/Actions/ClosePage.action ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/carcarenew/Actions/CreateHeaderFailure.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/carcarenew/Actions/CreateHeaderFailure.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"CreateHeaderFailure"},"Message":"Create Header Failed","Title":"Create Header","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/carcarenew/Actions/CreateItemFailure.action":
/*!***********************************************************************!*\
  !*** ./build.definitions/carcarenew/Actions/CreateItemFailure.action ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"CreateItemFailure"},"Message":"Creation of Item failed","Title":"Create Item","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/carcarenew/Actions/DeleteHeaderEntityFailureMessage.action":
/*!**************************************************************************************!*\
  !*** ./build.definitions/carcarenew/Actions/DeleteHeaderEntityFailureMessage.action ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"DeleteHeaderEntityFailureMessage"},"Message":"Delete entity failure","Title":"Delete Header","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/carcarenew/Actions/ErrorArchive/ErrorArchive_SyncFailure.action":
/*!*******************************************************************************************!*\
  !*** ./build.definitions/carcarenew/Actions/ErrorArchive/ErrorArchive_SyncFailure.action ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.BannerMessage","Message":"Upload failed!","Duration":0,"Animated":false,"OnActionLabelPress":"/carcarenew/Actions/ErrorArchive/NavToErrorArchive_List.action","ActionLabel":"View Errors"}

/***/ }),

/***/ "./build.definitions/carcarenew/Actions/ErrorArchive/NavToErrorArchive_Detail.action":
/*!*******************************************************************************************!*\
  !*** ./build.definitions/carcarenew/Actions/ErrorArchive/NavToErrorArchive_Detail.action ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/carcarenew/Pages/ErrorArchive/ErrorArchive_Detail.page","NavigationType":"Inner"}

/***/ }),

/***/ "./build.definitions/carcarenew/Actions/ErrorArchive/NavToErrorArchive_List.action":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/carcarenew/Actions/ErrorArchive/NavToErrorArchive_List.action ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/carcarenew/Pages/ErrorArchive/ErrorArchive_List.page","NavigationType":"Inner"}

/***/ }),

/***/ "./build.definitions/carcarenew/Actions/GenericBannerMessage.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/carcarenew/Actions/GenericBannerMessage.action ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.BannerMessage","ActionResult":{"_Name":"GenericBannerMessage"},"Message":"Message"}

/***/ }),

/***/ "./build.definitions/carcarenew/Actions/GenericMessageBox.action":
/*!***********************************************************************!*\
  !*** ./build.definitions/carcarenew/Actions/GenericMessageBox.action ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"GenericMessageBox"},"Message":"Message","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/carcarenew/Actions/GenericNavigation.action":
/*!***********************************************************************!*\
  !*** ./build.definitions/carcarenew/Actions/GenericNavigation.action ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"GenericNavigation"},"PageToOpen":"/carcarenew/Pages/Main.page"}

/***/ }),

/***/ "./build.definitions/carcarenew/Actions/GenericToastMessage.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/carcarenew/Actions/GenericToastMessage.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ToastMessage","ActionResult":{"_Name":"GenericToastMessage"},"Message":"Message"}

/***/ }),

/***/ "./build.definitions/carcarenew/Actions/Header_DeleteConfirmation.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/carcarenew/Actions/Header_DeleteConfirmation.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"Header_DeleteConfirmation"},"Message":"Delete current entity?","Title":"Delete Confirmation","OKCaption":"OK","CancelCaption":"Cancel"}

/***/ }),

/***/ "./build.definitions/carcarenew/Actions/Header_DeleteEntity.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/carcarenew/Actions/Header_DeleteEntity.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.DeleteEntity","ActionResult":{"_Name":"Header_DeleteEntity"},"OnFailure":"/carcarenew/Actions/DeleteHeaderEntityFailureMessage.action","OnSuccess":"/carcarenew/Actions/CloseModalPage_Complete.action","Target":{"Service":"/carcarenew/Services/carcarenew.service","EntitySet":"ZC_OFF_CARCARE","ReadLink":"{@odata.readLink}"}}

/***/ }),

/***/ "./build.definitions/carcarenew/Actions/Logging/LogUploadFailure.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/carcarenew/Actions/Logging/LogUploadFailure.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Uploading log file failed with error: {#ActionResults:UploadLog/error}","OKCaption":"OK","Title":"Log Upload Failed","_Type":"Action.Type.Message"}

/***/ }),

/***/ "./build.definitions/carcarenew/Actions/Logging/LogUploadSuccessful.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/carcarenew/Actions/Logging/LogUploadSuccessful.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":3,"IsIconHidden":false,"MaxNumberOfLines":1,"Message":"Log File Uploaded","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/carcarenew/Actions/Logging/UploadLog.action":
/*!***********************************************************************!*\
  !*** ./build.definitions/carcarenew/Actions/Logging/UploadLog.action ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"ActionResult":{"_Name":"UploadLog"},"ActivityIndicatorText":"Uploading...","OnFailure":"/carcarenew/Actions/Logging/LogUploadFailure.action","OnSuccess":"/carcarenew/Actions/Logging/LogUploadSuccessful.action","ShowActivityIndicator":false,"_Type":"Action.Type.Logger.Upload"}

/***/ }),

/***/ "./build.definitions/carcarenew/Actions/Logging/UploadLogProgress.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/carcarenew/Actions/Logging/UploadLogProgress.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionMessage":"Logs Uploaded","CompletionTimeout":2,"Message":"Uploading Log Files...","OnSuccess":"/carcarenew/Actions/Logging/UploadLog.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/carcarenew/Actions/ODataCreateHeader.action":
/*!***********************************************************************!*\
  !*** ./build.definitions/carcarenew/Actions/ODataCreateHeader.action ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.CreateEntity","ActionResult":{"_Name":"ODataCreateHeader"},"OnFailure":"/carcarenew/Actions/CreateHeaderFailure.action","OnSuccess":"/carcarenew/Actions/navToDisplayWash.action","Target":{"Service":"/carcarenew/Services/carcarenew.service","EntitySet":"ZC_OFF_CARCARE"},"Properties":{"Site":"#Page:CreateWash/#Control:FCSite/#Value","PlateNum":"#Page:CreateWash/#Control:FCPlateNum/#Value","PlateCode":"#Page:CreateWash/#Control:FCPlateCode/#Value","MobileNum":"#Page:CreateWash/#Control:FCMobile/#Value","CreatedOn":"#Page:CreateWash/#Control:FCDate/#Value","FirstName":"#Page:CreateWash/#Control:FCName/#Value"}}

/***/ }),

/***/ "./build.definitions/carcarenew/Actions/ODataCreateItem.action":
/*!*********************************************************************!*\
  !*** ./build.definitions/carcarenew/Actions/ODataCreateItem.action ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.CreateRelatedEntity","ActionResult":{"_Name":"ODataCreateItem"},"OnFailure":"/carcarenew/Actions/CreateItemFailure.action","OnSuccess":"/carcarenew/Actions/CloseModalPage_Complete.action","Target":{"Service":"/carcarenew/Services/carcarenew.service","EntitySet":"ZC_OFF_CARITEM"},"ParentLink":{"Target":{"EntitySet":"ZC_OFF_CARCARE","ReadLink":"{@odata.readLink}"},"Property":"_Item"},"Properties":{"ItemNo":"#Control:FCCItem/#Value","Material":"#Page:CreateItem/#Control:FCCList/#SelectedValue","Price":"#Page:CreateItem/#Control:FCCPrice/#Value","Currency":"#Page:CreateItem/#Control:FCCCurrency/#Value","Quantity":"#Page:CreateItem/#Control:FCCQuantity/#Value","Unit":"#Page:CreateItem/#Control:FCCUnit/#Value"}}

/***/ }),

/***/ "./build.definitions/carcarenew/Actions/ODataCreateItemTable.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/carcarenew/Actions/ODataCreateItemTable.action ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.CreateRelatedEntity","ActionResult":{"_Name":"ODataCreateItemTable"},"Target":{"Service":"/carcarenew/Services/carcarenew.service","EntitySet":"ZC_OFF_CARITEM"},"ParentLink":{"Target":{"EntitySet":"ZC_OFF_CARCARE","ReadLink":"{@odata.readLink}"},"Property":"_Item"},"Properties":{"ItemNo":"000010","Material":""}}

/***/ }),

/***/ "./build.definitions/carcarenew/Actions/ODataReadHeader.action":
/*!*********************************************************************!*\
  !*** ./build.definitions/carcarenew/Actions/ODataReadHeader.action ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.Read","ActionResult":{"_Name":"ODataReadHeader"},"Target":{"Service":"/carcarenew/Services/carcarenew.service","EntitySet":"ZC_OFF_CARCARE","QueryOptions":"$top=1&$filter=PlateCode eq '{{#Page:CreateWash/#Control:FCPlateCode/#Value}}' and PlateNum eq '{{#Page:CreateWash/#Control:FCPlateNum/#Value}}' and MobileNum eq '{{#Page:CreateWash/#Control:FCMobile/#Value}}' and Site eq '{{#Page:CreateWash/#Control:FCSite/#Value}}'"},"Properties":["Site","PlateNum","PlateCode","MobileNum","CreatedOn","Model","Manufacture","FirstName"]}

/***/ }),

/***/ "./build.definitions/carcarenew/Actions/SaveValidation.action":
/*!********************************************************************!*\
  !*** ./build.definitions/carcarenew/Actions/SaveValidation.action ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"SaveValidation"},"Message":"Please fill the details","OKCaption":"Ok"}

/***/ }),

/***/ "./build.definitions/carcarenew/Actions/carcarenew/Service/CloseOffline.action":
/*!*************************************************************************************!*\
  !*** ./build.definitions/carcarenew/Actions/carcarenew/Service/CloseOffline.action ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.OfflineOData.Close","Service":"/carcarenew/Services/carcarenew.service","Force":true,"ActionResult":{"_Name":"close"},"OnSuccess":"/carcarenew/Actions/carcarenew/Service/CloseOfflineSuccessMessage.action","OnFailure":"/carcarenew/Actions/carcarenew/Service/CloseOfflineFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/carcarenew/Actions/carcarenew/Service/CloseOfflineFailureMessage.action":
/*!***************************************************************************************************!*\
  !*** ./build.definitions/carcarenew/Actions/carcarenew/Service/CloseOfflineFailureMessage.action ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failure closing data service - {#ActionResults:close/error}","NumberOfLines":1,"Duration":3,"Animated":true,"IsIconHidden":true,"_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/carcarenew/Actions/carcarenew/Service/CloseOfflineSuccessMessage.action":
/*!***************************************************************************************************!*\
  !*** ./build.definitions/carcarenew/Actions/carcarenew/Service/CloseOfflineSuccessMessage.action ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Data service closed successfully","NumberOfLines":1,"Duration":3,"Animated":true,"IsIconHidden":true,"_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/carcarenew/Actions/carcarenew/Service/DownloadOffline.action":
/*!****************************************************************************************!*\
  !*** ./build.definitions/carcarenew/Actions/carcarenew/Service/DownloadOffline.action ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/carcarenew/Services/carcarenew.service","DefiningRequests":[{"Name":"ZC_OFF_CARCARE","Query":"ZC_OFF_CARCARE"},{"Name":"ZC_OFF_CARITEM","Query":"ZC_OFF_CARITEM"},{"Name":"ZCDS_OFF_MATERIAL","Query":"ZCDS_OFF_MATERIAL"}],"_Type":"Action.Type.OfflineOData.Download","ActionResult":{"_Name":"sync"},"OnFailure":"/carcarenew/Actions/carcarenew/Service/SyncFailureMessage.action","OnSuccess":"/carcarenew/Rules/ErrorArchive/ErrorArchive_CheckForSyncError.js"}

/***/ }),

/***/ "./build.definitions/carcarenew/Actions/carcarenew/Service/DownloadStartedMessage.action":
/*!***********************************************************************************************!*\
  !*** ./build.definitions/carcarenew/Actions/carcarenew/Service/DownloadStartedMessage.action ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Download in progress...","CompletionMessage":"Download Successful","CompletionTimeout":7,"OnSuccess":"/carcarenew/Actions/carcarenew/Service/DownloadOffline.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/carcarenew/Actions/carcarenew/Service/InitializeOffline.action":
/*!******************************************************************************************!*\
  !*** ./build.definitions/carcarenew/Actions/carcarenew/Service/InitializeOffline.action ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/carcarenew/Services/carcarenew.service","DefiningRequests":[{"Name":"ZC_OFF_CARCARE","Query":"ZC_OFF_CARCARE"},{"Name":"ZC_OFF_CARITEM","Query":"ZC_OFF_CARITEM"},{"Name":"ZCDS_OFF_MATERIAL","Query":"ZCDS_OFF_MATERIAL"}],"_Type":"Action.Type.ODataService.Initialize","ShowActivityIndicator":true,"ActivityIndicatorText":"Downloading...","ActionResult":{"_Name":"init"},"OnFailure":"/carcarenew/Actions/carcarenew/Service/InitializeOfflineFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/carcarenew/Actions/carcarenew/Service/InitializeOfflineFailureMessage.action":
/*!********************************************************************************************************!*\
  !*** ./build.definitions/carcarenew/Actions/carcarenew/Service/InitializeOfflineFailureMessage.action ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to initialize application data service - {#ActionResults:init/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/carcarenew/Actions/carcarenew/Service/SyncFailureMessage.action":
/*!*******************************************************************************************!*\
  !*** ./build.definitions/carcarenew/Actions/carcarenew/Service/SyncFailureMessage.action ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Sync offline data service failure - {#ActionResults:sync/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/carcarenew/Actions/carcarenew/Service/SyncStartedMessage.action":
/*!*******************************************************************************************!*\
  !*** ./build.definitions/carcarenew/Actions/carcarenew/Service/SyncStartedMessage.action ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Upload in progress...","CompletionMessage":"Sync completed","CompletionTimeout":7,"OnSuccess":"/carcarenew/Actions/carcarenew/Service/UploadOffline.action","OnFailure":"/carcarenew/Actions/carcarenew/Service/SyncFailureMessage.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/carcarenew/Actions/carcarenew/Service/UploadOffline.action":
/*!**************************************************************************************!*\
  !*** ./build.definitions/carcarenew/Actions/carcarenew/Service/UploadOffline.action ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/carcarenew/Services/carcarenew.service","_Type":"Action.Type.OfflineOData.Upload","ActionResult":{"_Name":"sync"},"OnSuccess":"/carcarenew/Actions/carcarenew/Service/DownloadStartedMessage.action","OnFailure":"/carcarenew/Actions/carcarenew/Service/SyncFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/carcarenew/Actions/carcarenew/ZCDS_OFF_MATERIAL/NavToZCDS_OFF_MATERIAL_Detail.action":
/*!****************************************************************************************************************!*\
  !*** ./build.definitions/carcarenew/Actions/carcarenew/ZCDS_OFF_MATERIAL/NavToZCDS_OFF_MATERIAL_Detail.action ***!
  \****************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/carcarenew/Pages/carcarenew_ZCDS_OFF_MATERIAL/ZCDS_OFF_MATERIAL_Detail.page"}

/***/ }),

/***/ "./build.definitions/carcarenew/Actions/carcarenew/ZCDS_OFF_MATERIAL/NavToZCDS_OFF_MATERIAL_List.action":
/*!**************************************************************************************************************!*\
  !*** ./build.definitions/carcarenew/Actions/carcarenew/ZCDS_OFF_MATERIAL/NavToZCDS_OFF_MATERIAL_List.action ***!
  \**************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/carcarenew/Pages/carcarenew_ZCDS_OFF_MATERIAL/ZCDS_OFF_MATERIAL_List.page"}

/***/ }),

/***/ "./build.definitions/carcarenew/Actions/carcarenew/ZC_OFF_CARCARE/NavToZC_OFF_CARCARE_Detail.action":
/*!**********************************************************************************************************!*\
  !*** ./build.definitions/carcarenew/Actions/carcarenew/ZC_OFF_CARCARE/NavToZC_OFF_CARCARE_Detail.action ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/carcarenew/Pages/carcarenew_ZC_OFF_CARCARE/ZC_OFF_CARCARE_Detail.page"}

/***/ }),

/***/ "./build.definitions/carcarenew/Actions/carcarenew/ZC_OFF_CARCARE/NavToZC_OFF_CARCARE_List.action":
/*!********************************************************************************************************!*\
  !*** ./build.definitions/carcarenew/Actions/carcarenew/ZC_OFF_CARCARE/NavToZC_OFF_CARCARE_List.action ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/carcarenew/Pages/carcarenew_ZC_OFF_CARCARE/ZC_OFF_CARCARE_List.page"}

/***/ }),

/***/ "./build.definitions/carcarenew/Actions/carcarenew/ZC_OFF_CARITEM/NavToZC_OFF_CARITEM_Detail.action":
/*!**********************************************************************************************************!*\
  !*** ./build.definitions/carcarenew/Actions/carcarenew/ZC_OFF_CARITEM/NavToZC_OFF_CARITEM_Detail.action ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/carcarenew/Pages/carcarenew_ZC_OFF_CARITEM/ZC_OFF_CARITEM_Detail.page"}

/***/ }),

/***/ "./build.definitions/carcarenew/Actions/carcarenew/ZC_OFF_CARITEM/NavToZC_OFF_CARITEM_List.action":
/*!********************************************************************************************************!*\
  !*** ./build.definitions/carcarenew/Actions/carcarenew/ZC_OFF_CARITEM/NavToZC_OFF_CARITEM_List.action ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/carcarenew/Pages/carcarenew_ZC_OFF_CARITEM/ZC_OFF_CARITEM_List.page"}

/***/ }),

/***/ "./build.definitions/carcarenew/Actions/navToCreateItem.action":
/*!*********************************************************************!*\
  !*** ./build.definitions/carcarenew/Actions/navToCreateItem.action ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"navToCreateItem"},"PageToOpen":"/carcarenew/Pages/CreateItem.page","ModalPage":true,"Transition":{"Curve":"EaseIn","Name":"None"}}

/***/ }),

/***/ "./build.definitions/carcarenew/Actions/navToCreateWash.action":
/*!*********************************************************************!*\
  !*** ./build.definitions/carcarenew/Actions/navToCreateWash.action ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"navToCreateWash"},"PageToOpen":"/carcarenew/Pages/CreateWash.page"}

/***/ }),

/***/ "./build.definitions/carcarenew/Actions/navToDisplayWash.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/carcarenew/Actions/navToDisplayWash.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"navToDisplayWash"},"PageToOpen":"/carcarenew/Pages/DisplayWash.page"}

/***/ }),

/***/ "./build.definitions/carcarenew/Actions/navToHeaderDetail.action":
/*!***********************************************************************!*\
  !*** ./build.definitions/carcarenew/Actions/navToHeaderDetail.action ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"navToHeaderDetail"},"PageToOpen":"/carcarenew/Pages/HeaderDetail.page"}

/***/ }),

/***/ "./build.definitions/carcarenew/Actions/navToSelectWash.action":
/*!*********************************************************************!*\
  !*** ./build.definitions/carcarenew/Actions/navToSelectWash.action ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"navToSelectWash"},"PageToOpen":"/carcarenew/Pages/SelectWash.page","ModalPage":true}

/***/ }),

/***/ "./build.definitions/carcarenew/Globals/Application/AppDefinition_Version.global":
/*!***************************************************************************************!*\
  !*** ./build.definitions/carcarenew/Globals/Application/AppDefinition_Version.global ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1.0.0","_Type":"String"}

/***/ }),

/***/ "./build.definitions/carcarenew/Globals/Application/ApplicationName.global":
/*!*********************************************************************************!*\
  !*** ./build.definitions/carcarenew/Globals/Application/ApplicationName.global ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"MDK App","_Type":"String"}

/***/ }),

/***/ "./build.definitions/carcarenew/Globals/Application/SupportEmail.global":
/*!******************************************************************************!*\
  !*** ./build.definitions/carcarenew/Globals/Application/SupportEmail.global ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"support@mycompany.com","_Type":"String"}

/***/ }),

/***/ "./build.definitions/carcarenew/Globals/Application/SupportPhone.global":
/*!******************************************************************************!*\
  !*** ./build.definitions/carcarenew/Globals/Application/SupportPhone.global ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1-800-677-7271","_Type":"String"}

/***/ }),

/***/ "./build.definitions/carcarenew/Services/carcarenew.service":
/*!******************************************************************!*\
  !*** ./build.definitions/carcarenew/Services/carcarenew.service ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = {"DestinationName":"carcarenew","OfflineEnabled":true,"LanguageURLParam":"","OnlineOptions":{},"OfflineOptions":{"StoreParameters":{}},"PathSuffix":"","SourceType":"Mobile","ServiceUrl":""}

/***/ }),

/***/ "./build.definitions/version.mdkbundlerversion":
/*!*****************************************************!*\
  !*** ./build.definitions/version.mdkbundlerversion ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "1.1\n";

/***/ }),

/***/ "./build.definitions/carcarenew/Styles/Styles.json":
/*!*********************************************************!*\
  !*** ./build.definitions/carcarenew/Styles/Styles.json ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ }),

/***/ "./build.definitions/carcarenew/jsconfig.json":
/*!****************************************************!*\
  !*** ./build.definitions/carcarenew/jsconfig.json ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"include":["Rules/**/*",".typings/**/*"]}');

/***/ }),

/***/ "./build.definitions/tsconfig.json":
/*!*****************************************!*\
  !*** ./build.definitions/tsconfig.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"compilerOptions":{"module":"esnext","target":"es2019","moduleResolution":"node","lib":["esnext","dom"],"experimentalDecorators":true,"emitDecoratorMetadata":true,"removeComments":true,"inlineSourceMap":true,"noEmitOnError":false,"noEmitHelpers":true,"baseUrl":".","plugins":[{"transform":"@nativescript/webpack/dist/transformers/NativeClass","type":"raw"}]},"exclude":["node_modules"]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./build.definitions/application-index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=bundle.js.map