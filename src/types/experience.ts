import { ReactNode } from "react";

export default interface Experience {
    icon: ReactNode;
    position: string;
    company: string;
    from: string; // YYYY-MM
    to?: string; // YYYY-MM / undefined

}