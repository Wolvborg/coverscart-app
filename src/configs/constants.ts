const PREFACE = 'https://api.stayclassic.in';

export const ELASTIC_URL = 'https://node2741.myfcloud.com:9200/staging/_search';

export const TOKEN_GENERATE_URL = PREFACE + '/api/rest/oauth2/token/client_credentials';

export const CART_URL = PREFACE + '/api/rest/cart';

export const COUPON_URL = PREFACE + '/api/rest/coupon';

export const GET_COUPON_LIST_URL = PREFACE + '/api/rest/xlcoupon/list';

export const GIFT_WRAP_URL = PREFACE + '/api/rest/xgiftwrap';

export const WISHLIST_URL = PREFACE + '/api/rest/wishlist';

export const CREDS_LOGIN_URL = PREFACE + '/api/rest/login';

export const TEL_LOGIN_URL = PREFACE + '/api/rest/sms/checkLogin';

export const CREDS_LOGOUT_URL = PREFACE + '/api/rest/logout';

export const SOCIAL_LOGIN_URL = PREFACE + '/api/rest/sociallogin';

export const REGISTER_URL = PREFACE + '/api/rest/register';

export const ACCOUNT_URL = PREFACE + '/api/rest/account';

export const WALLET_URL = PREFACE + '/api/rest/account/transactions';

export const ORDERS_URL = PREFACE + '/api/rest/customerorders';

export const ADDRESS_URL = PREFACE + '/api/rest/account/address';

export const PAYMENT_ADDRESS_URL = PREFACE + '/api/rest/paymentaddress';

export const SHIPPING_ADDRESS_URL = PREFACE + '/api/rest/shippingaddress/existing';

export const STATE_URL = PREFACE + '/api/rest/countries/99';

export const PINCODE_URL = PREFACE + '/api/rest/pincode';

export const SHIPPING_METHODS_URL = PREFACE + '/api/rest/shippingmethods';

export const PAYMENT_METHODS_URL = PREFACE + '/api/rest/paymentmethods';

export const ORDER_OVERVIEW_URL = PREFACE + '/api/rest/confirm';

export const GET_PAYMENT_ONLINE_URL = PREFACE + '/index.php?route=rest/payonline/payonline';

export const PROFILE_EDIT_OTP_URL = PREFACE + '/api/rest/sms/editValidate';

export const RESEND_OTP = PREFACE + '/api/rest/sms/resend';

/**
 * Auth URL
 */
export const CHECK_NUMBER_URL = PREFACE + '/api/rest/commonlogin/check';

export const VALIDATE_LOGIN_URL = PREFACE + '/api/rest/commonlogin/login';

export const VALIDATE_REGISTER_URL = PREFACE + '/api/rest/commonlogin/register';

export const LOGOUT_URL = PREFACE + '/api/rest/logout';

/**
 * Otp URL
 */
export const REGISTER_OTP_URL = PREFACE + '/api/rest/commonlogin/resend/register';

export const LOGIN_OTP_URL = PREFACE + '/api/rest/commonlogin/resend/login';

/**
 * Tracking URL
 */
export const TRACKING_URL = PREFACE + '/api/rest/track';

/**
 * Return URL
 */
export const RETURN_URL = PREFACE + '/api/rest/returns';
