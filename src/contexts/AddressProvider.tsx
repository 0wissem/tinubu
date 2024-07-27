import React, { createContext, useState, useContext, ReactNode } from "react";

export interface IAddress {
  name: string;
  address: string;
  city: string;
  country: string;
}

interface AddressContextType {
  addresses: IAddress[];
  addAddress: (address: IAddress) => void;
  isOpened: boolean;
  toggleAddressModal: () => void;
}

const AddressContext = createContext<AddressContextType | undefined>(undefined);

export const useAddressContext = () => {
  const context = useContext(AddressContext);
  if (!context) {
    throw new Error("useAddressContext must be used within an AddressProvider");
  }
  return context;
};

interface AddressProviderProps {
  children: ReactNode;
}

export const AddressProvider: React.FC<AddressProviderProps> = ({
  children,
}) => {
  const [addresses, setAddresses] = useState<IAddress[]>([]);
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const addAddress = (address: IAddress) => {
    setAddresses((prevAddresses) => [...prevAddresses, address]);
  };
  const toggleAddressModal = () => setIsOpened(!isOpened);
  return (
    <AddressContext.Provider
      value={{ addresses, addAddress, isOpened, toggleAddressModal }}
    >
      {children}
    </AddressContext.Provider>
  );
};
