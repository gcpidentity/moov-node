/** @external Promise */
/**
 * Describes a Moov account associated with an individual or a business.
 * @typedef Account
 * @property {"sandbox"|"production"} mode - Mode this account is allowed to be used within
 * @property {string} accountID - Account identifier
 * @property {"individual"|"business"} accountType - Type of entity represented by this account
 * @property {string} displayName - Name of individual or business
 * @property {Profile} profile - Details for individual or business
 * @property {object} metadata - Arbitrary key-value pairs
 * @property {string} foreignID - Optional identification or alias
 * @property {CustomerSupport|null} customerSupport - Displayed on credit card transactions (business only)
 * @property {AccountSettings} settings - Account settings
 * @property {string} createdOn - Date account was created
 * @property {string} updatedOn - Date account was last updated
 *
 * @example
 * {
  "accountType": "business",
  "profile": {
    "business": {
      "legalBusinessName": "Whole Body Fitness LLC",
      "doingBusinessAs": "Whole Body Fitness",
      "businessType": "llc",
      "address": {
        "addressLine1": "123 Main Street",
        "addressLine2": "Apt 302",
        "city": "Boulder",
        "stateOrProvince": "CO",
        "postalCode": "80301",
        "country": "US"
      },
      "phone": {
        "number": "8185551212",
        "countryCode": "1"
      },
      "email": "amanda@classbooker.dev",
      "website": "www.wholebodyfitnessgym.com",
      "description": "Local fitness center paying out instructors",
      "taxID": {
        "ein": {
          "number": "123-45-6789"
        }
      },
      "industryCodes": {
        "naics": "713940",
        "sic": "7991",
        "mcc": "7997"
      }
    }
  },
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "termsOfService": {
    "token": "kgT1uxoMAk7QKuyJcmQE8nqW_HjpyuXBabiXPi6T83fUQoxsyWYPcYzuHQTqrt7YRp4gCwyDQvb6U5REM9Pgl2EloCe35t-eiMAbUWGo3Kerxme6aqNcKrP_6-v0MTXViOEJ96IBxPFTvMV7EROI2dq3u4e-x4BbGSCedAX-ViAQND6hcreCDXwrO6sHuzh5Xi2IzSqZHxaovnWEboaxuZKRJkA3dsFID6fzitMpm2qrOh4"
  },
  "foreignID": "4528aba-b9a1-11eb-8529-0242ac13003",
  "customerSupport": {
    "phone": {
      "number": "8185551212",
      "countryCode": "1"
    },
    "email": "amanda@classbooker.dev",
    "address": {
      "addressLine1": "123 Main Street",
      "addressLine2": "Apt 302",
      "city": "Boulder",
      "stateOrProvince": "CO",
      "postalCode": "80301",
      "country": "US"
    },
    "website": "www.wholebodyfitnessgym.com"
  },
  "settings": {
    "cardPayment": {
      "statementDescriptor": "Whole Body Fitness"
    }
  }
}
 *
 * @tag Accounts
 */
/**
 * Profile for a Moov acocunt. May be business or individual.
 * @typedef Profile
 * @property {BusinessProfile} [business]
 * @property {IndividualProfile} [individual]
 * @tag Accounts
 */
/**
 * Describes a business account.
 * @typedef BusinessProfile
 * @property {string} legalBusinessName
 * @property {string} doingBusinessAs
 * @property {"soleProprietorship"|"unincorporatedAssociation"|"trust"|"publicCorporation"|"privateCorporation"|"privateCorporation"|"llc"|"partnership"|"unincorporatedNonProfit"|"incorporatedNonProfit"} businessType
 * @property {Address} address
 * @property {Phone} phone
 * @property {string} email
 * @property {string} website
 * @property {string} description
 * @property {boolean} taxIDProvided - True if business's tax ID has been provided
 * @property {Representative[]} representatives
 * @property {boolean} ownersProvided - True if business owner(s) have been provided
 * @property {IndustryCodes} industryCodes
 * @tag Accounts
 */
/**
 * Describes the individual associated with a non-business account.
 * @typedef IndividualProfile
 * @property {string} name
 * @property {Phone} phone
 * @property {string} email
 * @property {Address} address
 * @property {boolean} birthDateProvided - True if individual's birthdate has been provided
 * @property {boolean} governmentIDProvided - True if individual's government-issued ID has been provided
 * @tag Accounts
 */
/**
 * @typedef Phone
 * @property {string} number - Phone number
 * @property {string} [countryCode] - 1 digit country code
 * @tag Accounts
 */
/**
 * @typedef Address
 * @property {string} addressLine1
 * @property {string} addressLine2
 * @property {string} city
 * @property {string} stateOrProvince - 2 characters
 * @property {string} postalCode - 5 characters
 * @property {string} country - 2 characters
 * @tag Accounts
 */
/**
 * Standard industry codes for businesses.
 * @typedef IndustryCodes
 * @property {string} naics
 * @property {string} sic
 * @property {string} mcc
 * @tag Accounts
 */
/**
 * Describes an individual who represents a business account.
 * @typedef Representative
 * @property {string} name
 * @property {Phone} phone
 * @property {string} email
 * @property {Address} address
 * @property {boolean} birthDateProvided - True if individual's birthdate has been provided
 * @property {boolean} governmentIDProvided - True if individual's government-issued ID has been provided
 * @property {Responsibility[]} responsibilities
 * @property {string} createdOn - Date representative was recorded
 * @property {string} updatedOn - Date representative was last updated
 * @property {string} disabledOn - Date representative was removed from business
 * @tag Accounts
 */
/**
 * Describes the responsibilities associated with a business representative.
 * @typedef Responsibility
 * @property {boolean} isController
 * @property {boolean} isOwner
 * @property {integer} ownershipPercentage - Required if `isOwner` is true
 * @property {string} jobTitle
 * @tag Accounts
 */
/**
 * Describes customer support contact information for a business account.
 * @typedef CustomerSupport
 * @property {Phone} phone
 * @property {string} email
 * @property {Address} address
 * @property {string} website
 * @tag Accounts
 */
/**
 * @typedef AccountSettings
 * @property {CardPaymentSettings} cardPayment - Card payment settings (business only)
 * @tag Accounts
 */
/**
 * @typedef CardPaymentSettings
 * @property {string} statementDescriptor - Description to display on credit card transactions
 * @tag Accounts
 */
/**
 * @typedef Countries
 * @property {string[]} countries
 * @tag Accounts
 */
/**
 * The Accounts API.
 * @tag Accounts
 */
export class Accounts {
    constructor(moov: any);
    moov: any;
    /**
     * Create a new connected account.
     * @tag Accounts
     *
     * @param {Account} account - New account details
     * @returns {Promise<Account>}
     * @tag Accounts
     */
    create(account: Account): Promise<Account>;
    /**
     * Retrieves details for the account with the specified ID.
     *
     * @param {string} connectedAccountID - Account to query
     * @returns {Promise<Account>}
     * @tag Accounts
     */
    get(connectedAccountID: string): Promise<Account>;
    /**
     * Updates an existing account. Requires a complete Account object.
     *
     * @param {Account} account - Account to update
     * @returns {Promise<Account>}
     * @tag Accounts
     */
    update(account: Account): Promise<Account>;
    /**
     * Updates an existing account. Does not require a complete Account object,
     * but the `accountID` property is required.
     *
     * @param {Account} account - Account to update
     * @returns {Promise<Account>}
     * @tag Accounts
     */
    patch(account: Account): Promise<Account>;
    /**
     * Retrieve the specified countries of operation for an account.
     *
     * @param {string} accountID - Account to query
     * @returns {Promise<Countries>}
     * @tag Accounts
     */
    getCountries(accountID: string): Promise<Countries>;
    /**
     * Assign the countries of operation for an account. This endpoint will always overwrite the previously assigned values.
     *
     * @param {string} accountID - Account to query
     * @param {Countries} countries - Countries to add to the account.
     * @returns {Promise<Countries>}
     * @tag Accounts
     */
    assignCountries(accountID: string, countries: Countries): Promise<Countries>;
}
/**
 * Describes a Moov account associated with an individual or a business.
 */
export type Account = {
    /**
     * - Mode this account is allowed to be used within
     */
    mode: "sandbox" | "production";
    /**
     * - Account identifier
     */
    accountID: string;
    /**
     * - Type of entity represented by this account
     */
    accountType: "individual" | "business";
    /**
     * - Name of individual or business
     */
    displayName: string;
    /**
     * - Details for individual or business
     */
    profile: Profile;
    /**
     * - Arbitrary key-value pairs
     */
    metadata: object;
    /**
     * - Optional identification or alias
     */
    foreignID: string;
    /**
     * - Displayed on credit card transactions (business only)
     */
    customerSupport: CustomerSupport | null;
    /**
     * - Account settings
     */
    settings: AccountSettings;
    /**
     * - Date account was created
     */
    createdOn: string;
    /**
     * - Date account was last updated
     */
    updatedOn: string;
};
/**
 * Profile for a Moov acocunt. May be business or individual.
 */
export type Profile = {
    business?: BusinessProfile;
    individual?: IndividualProfile;
};
/**
 * Describes a business account.
 */
export type BusinessProfile = {
    legalBusinessName: string;
    doingBusinessAs: string;
    businessType: "soleProprietorship" | "unincorporatedAssociation" | "trust" | "publicCorporation" | "privateCorporation" | "privateCorporation" | "llc" | "partnership" | "unincorporatedNonProfit" | "incorporatedNonProfit";
    address: Address;
    phone: Phone;
    email: string;
    website: string;
    description: string;
    /**
     * - True if business's tax ID has been provided
     */
    taxIDProvided: boolean;
    representatives: Representative[];
    /**
     * - True if business owner(s) have been provided
     */
    ownersProvided: boolean;
    industryCodes: IndustryCodes;
};
/**
 * Describes the individual associated with a non-business account.
 */
export type IndividualProfile = {
    name: string;
    phone: Phone;
    email: string;
    address: Address;
    /**
     * - True if individual's birthdate has been provided
     */
    birthDateProvided: boolean;
    /**
     * - True if individual's government-issued ID has been provided
     */
    governmentIDProvided: boolean;
};
export type Phone = {
    /**
     * - Phone number
     */
    number: string;
    /**
     * - 1 digit country code
     */
    countryCode?: string;
};
export type Address = {
    addressLine1: string;
    addressLine2: string;
    city: string;
    /**
     * - 2 characters
     */
    stateOrProvince: string;
    /**
     * - 5 characters
     */
    postalCode: string;
    /**
     * - 2 characters
     */
    country: string;
};
/**
 * Standard industry codes for businesses.
 */
export type IndustryCodes = {
    naics: string;
    sic: string;
    mcc: string;
};
/**
 * Describes an individual who represents a business account.
 */
export type Representative = {
    name: string;
    phone: Phone;
    email: string;
    address: Address;
    /**
     * - True if individual's birthdate has been provided
     */
    birthDateProvided: boolean;
    /**
     * - True if individual's government-issued ID has been provided
     */
    governmentIDProvided: boolean;
    responsibilities: Responsibility[];
    /**
     * - Date representative was recorded
     */
    createdOn: string;
    /**
     * - Date representative was last updated
     */
    updatedOn: string;
    /**
     * - Date representative was removed from business
     */
    disabledOn: string;
};
/**
 * Describes the responsibilities associated with a business representative.
 */
export type Responsibility = {
    isController: boolean;
    isOwner: boolean;
    /**
     * - Required if `isOwner` is true
     */
    ownershipPercentage: integer;
    jobTitle: string;
};
/**
 * Describes customer support contact information for a business account.
 */
export type CustomerSupport = {
    phone: Phone;
    email: string;
    address: Address;
    website: string;
};
export type AccountSettings = {
    /**
     * - Card payment settings (business only)
     */
    cardPayment: CardPaymentSettings;
};
export type CardPaymentSettings = {
    /**
     * - Description to display on credit card transactions
     */
    statementDescriptor: string;
};
export type Countries = {
    countries: string[];
};
//# sourceMappingURL=accounts.d.ts.map