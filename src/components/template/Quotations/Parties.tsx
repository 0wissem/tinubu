import React from "react";
import CardContainer from "components/atoms/containers/CardContainer";
import ModalContainer from "components/atoms/containers/ModalContainer";
import AddressForm from "components/organisms/AddressForm";
import ManagingBroker from "components/organisms/ManagingBroker";

function Parties() {
  return (
    <CardContainer>
      <ManagingBroker />
      <ModalContainer>
        <AddressForm />
      </ModalContainer>
    </CardContainer>
  );
}

export default Parties;
