const BACKEND_SERVER_URL = "http://api.permahub.local"
const PERMAHUB_DOMAIN = ".permahub.local"
const PRIVATE_FRONTEND_URL = "http://app.permahub.local"
const REGISTER_URL = BACKEND_SERVER_URL + "/public/api/users/register"
const LOGIN_URL = BACKEND_SERVER_URL + "/public/api/users/authenticate"
const VERIFY_URL = BACKEND_SERVER_URL + "/public/api/users/verify"
const LOGIN_COOKIE_EXPIRATION = "1D"

module.exports = {
    BACKEND_SERVER_URL: BACKEND_SERVER_URL,
    PERMAHUB_DOMAIN: PERMAHUB_DOMAIN,
    PRIVATE_FRONTEND_URL: PRIVATE_FRONTEND_URL,
    REGISTER_URL: REGISTER_URL,
    LOGIN_URL: LOGIN_URL,
    VERIFY_URL: VERIFY_URL,
    LOGIN_COOKIE_EXPIRATION
}