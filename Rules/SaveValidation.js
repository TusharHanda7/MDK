/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function SaveValidation(clientAPI) {



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
