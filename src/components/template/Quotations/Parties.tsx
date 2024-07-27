import React from "react";
import CardContainer from "components/atoms/containers/CardContainer";
import ModalContainer from "components/atoms/containers/ModalContainer";
import AddressForm from "components/organisms/AddressForm";
import ManagingBroker from "components/organisms/ManagingBroker";
import PageContainer from "components/atoms/containers/PageContainer";

function Parties() {
  return (
    <PageContainer>
      <CardContainer>
        <ManagingBroker />
        <ModalContainer>
          <AddressForm />
        </ModalContainer>
      </CardContainer>
    </PageContainer>
  );
}

export default Parties;
