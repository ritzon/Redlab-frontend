import {authRoles} from 'auth';
import Forgot from './Forgot';

export const ForgotConfig = {
    settings: {
        layout: {
            config: {
                navbar : {
                    display: false
                },
                toolbar: {
                    display: false
                },
                footer : {
                    display: false
                },
                leftSidePanel : {
                    display: false
                },
                rightSidePanel: {
                    display: false
                }
            }
        }
    },
    auth    : authRoles.onlyGuest,
    routes  : [
        {
            path     : '/forgot',
            component: Forgot
        }
    ]
};

