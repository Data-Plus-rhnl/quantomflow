'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface NavbarContextType {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

export function NavbarProvider({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavbarContext.Provider value={{ menuOpen, setMenuOpen }}>
      {children}
    </NavbarContext.Provider>
  );
}

export function useNavbar() {
  const context = useContext(NavbarContext);
  if (!context) {
    return { menuOpen: false, setMenuOpen: () => {} };
  }
  return context;
}
