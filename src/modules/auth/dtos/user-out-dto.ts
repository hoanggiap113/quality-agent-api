import { ROLE } from "src/common/enum";

export type UserOut = {
    id: string;
    name: string;
    email: string;
    role: ROLE;
    is_verified: boolean;
}