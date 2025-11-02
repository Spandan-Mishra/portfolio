import { ReactNode } from "react";

export default interface Education {
    icon: ReactNode;
    institution: string;
    from: string; // YYYY-MM
    to?: string; // YYYY-MM / undefined
}