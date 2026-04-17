export enum ROLE{
    ADMIN = 'admin',
    USER = 'user',
    STAFF = 'staff'
}

export enum SYNCSTATUS{
    SYNCED = "synced",
    PENDING = "pending",
    NEVER = "never",
    FAILED = "failed"
}

export type SyncInterval = '5' | '15' | '30' | '60'

export enum CHANNEL_STATUS {
    ACTIVE = 'active', 
    INACTIVE= 'inactive', 
     ERROR  = 'error'
}

export enum ChannelType {
    ZALO_OA = "zalo_oa",
    FACEBOOK = 'facebook'
}

export enum CONVERSATION_STATUS {
    OPEN    = "OPEN",
    CLOSED  = "CLOSED",
    PENDING = "PENDING",
}
 
export enum CONVERSATION_CATEGORY {
    COMPLAINT       = "COMPLAINT",
    CONSULTATION    = "CONSULTATION",
    ORDER_SUPPORT   = "ORDER_SUPPORT",
    AFTER_SALES     = "AFTER_SALES",
    GENERAL_INQUIRY = "GENERAL_INQUIRY",
    SPAM            = "SPAM",
}
 
export enum SENDER_TYPE {
    CUSTOMER = "CUSTOMER",
    STAFF    = "STAFF",
}
 
export enum SCORE_STATUS {
    PENDING    = "PENDING",
    PROCESSING = "PROCESSING",
    DONE       = "DONE",
    FAILED     = "FAILED",
}
 
export enum SCORE_CATEGORY {
    RESPONSE_TIME     = "RESPONSE_TIME",
    TONE_LANGUAGE     = "TONE_LANGUAGE",
    RESOLUTION        = "RESOLUTION",
    ACCURACY          = "ACCURACY",
    PROFESSIONALISM   = "PROFESSIONALISM",
    EMPATHY           = "EMPATHY",
    ESCALATION_NEEDED = "ESCALATION_NEEDED",
    POSITIVE          = "POSITIVE",
}