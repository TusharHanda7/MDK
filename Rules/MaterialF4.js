/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function MaterialF4(clientAPI) {
 
    clientAPI.read("/carcarenew/Services/carcarenew.service", 'ZCDS_OFF_MATERIAL', [],  '$top=5000').then(function(oData){
        let data = oData._array;
        //alert (data.length)
        if(data){
            data = data.map(({Material, MaterialName, Price}) => ({
                DisplayValue: Material + ': ' + MaterialName + ': ' + Price ,ReturnValue: Material
            }));
          //clientAPI.getPageProxy().getControls()[0].getControl("FCCList").setPickerItems(data);
          clientAPI.getPageProxy().getControl('SectionFormCell1').setPickerItems(data);
            //clientAPI.getPageProxy().getControls()[0].getControl("MListpicker").setValue(["I47"]);
          //  clientAPI.getPageProxy().getControls()[0].getControl("MListpicker").reset();  
 
         
        }
    });
 
}
 