import React, { useState } from "react";
import LabelValuePair from "components/molecules/LabelValuePair";
import Title from "components/atoms/Text/Title";
import Label from "components/atoms/Text/Label";
import { IAddress, useAddressContext } from "contexts/AddressProvider";
import { AutocompleteRenderInputParams, TextField } from "@mui/material";
import ComboBox, { ComoboxOption } from "components/molecules/Comobox";

function ManagingBroker() {
  const [address, setAddress] = useState<IAddress | null>(null);
  const { addresses, toggleAddressModal } = useAddressContext();

  const options: ComoboxOption[] = [
    ...addresses,
    {
      isSpecial: true,
      renderOption: () => (
        <>
          <p>{`Or`}</p>
          <p style={{ textDecorationLine: "underline", marginLeft: 3 }}>
            Add manually
          </p>
        </>
      ),
      onClick: () => toggleAddressModal(),
    },
  ];
  const renderInput = (params: AutocompleteRenderInputParams) => (
    <TextField {...params} select={false} label="Name" />
  );

  return (
    <>
      <Title label="Managing broker" />
      <Label label="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      <LabelValuePair label="test" value="ok" />
      <ComboBox
        value={address}
        setValue={setAddress}
        options={options}
        renderInput={renderInput}
        readableLabelKey={"name" as keyof IAddress}
      />
      {address && (
        <>
          <LabelValuePair label="Address" value={address?.address} />
          <LabelValuePair label="Country" value={address?.country} />
        </>
      )}
    </>
  );
}

export default ManagingBroker;
