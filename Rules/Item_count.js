/**
* Describe this function...
* @param {IClientAPI} context
*/
export default function CustomerOrderCount(context) {
    // Retrieves the current customer's information from the context
    const currentPlateNum = context.getPageProxy().binding['@odata.readLink'];
    // Counts the number of sales orders associated with the current customer.
    return context.count('/carcarenew/Services/carcarenew.service', currentPlateNum + '/_Items', '').then((count) => {
        return count;
    });
}
