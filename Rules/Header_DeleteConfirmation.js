/**
* Describe this function...
* @param {IClientAPI} context
*/
export default function Customers_DeleteConfirmation(context) {
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
