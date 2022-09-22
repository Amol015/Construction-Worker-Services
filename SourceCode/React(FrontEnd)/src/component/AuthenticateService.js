import react from 'react'
import { Component } from 'react'

class AuthenticateService extends Component {
    CustomerLogin(username) {
        const type = "customer"
        sessionStorage.setItem('authenticatedUser', username);
        sessionStorage.setItem('userType', type);
    }

    ServiceProviderLogin(username) {
        const type = "buyer"
        sessionStorage.setItem('authenticatedUser', username);
        sessionStorage.setItem('userType', type);
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser');
        sessionStorage.removeItem('userType');
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser');

        if (user === null) {
            return false;
        }
        else {
            return true;
        }
    }
}

export default new AuthenticateService();