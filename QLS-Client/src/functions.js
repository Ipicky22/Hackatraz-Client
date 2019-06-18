import { AsyncStorage } from 'react-native';
import { Location, Permissions } from 'expo';
import ENV from '../env'

export default Func = {
    fetch: async function(url, method, body = {}, auth = null) {
        try {
            let response = await fetch(
                url,
                {
                    method,
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": auth
                    },
                    body
                }
            );
            return response
        } catch (errors) {
            throw errors;
        }
    }
}
