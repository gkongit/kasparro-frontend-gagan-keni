"use client";

import { MOCK_BRANDS } from "@/lib/data/mock-data";
import { Brand } from "@/lib/types";
import { createContext, ReactNode, useContext, useState } from "react";

interface BrandContextType {
    selectedBrand: Brand;
    setSelectedBrand: (brand: Brand) => void;
    brands: Brand[];
}

const BrandContext = createContext<BrandContextType | undefined>(undefined);

export function BrandProvider({ children }: { children: ReactNode }) {
    // Default to the first brand
    const [selectedBrand, setSelectedBrand] = useState<Brand>(MOCK_BRANDS[0]);

    return (
        <BrandContext.Provider
            value={{
                selectedBrand,
                setSelectedBrand,
                brands: MOCK_BRANDS,
            }}
        >
            {children}
        </BrandContext.Provider>
    );
}

export function useBrand() {
    const context = useContext(BrandContext);
    if (context === undefined) {
        throw new Error("useBrand must be used within a BrandProvider");
    }
    return context;
}
