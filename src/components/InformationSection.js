import React, { useState } from "react";
import InformationOptionsCard from "./InformationOptionsCard";
import Modal from "./InformationModal";
import styled from "styled-components";
import { useModalInformation } from "../hooks/useModalInformation";

const Container = styled.section`
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 760px) {
    flex-direction: row-reverse;
    align-items: center;
    width: 900px;
gap: 2rem;

  }

  .options-container {
    overflow-x: scroll;
    scrollbar-width: none;

/* Hide scrollbar for Chrome, Safari and Opera */
::-webkit-scrollbar {
  display: none;

}

/* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
scrollbar-width: none;  /* Firefox */

    display: flex;
    flex-direction: row;

    @media (min-width: 760px) {
      flex-direction: column;
      overflow-x: auto;
      .shadow {
        display: none;
      }
    }
  }

  .shadow {
    background-image: linear-gradient(
      to left,
      #0009 0% 1%,
      transparent 25% 90%
    );
    width: 100%;
    height: 227px;
    position: absolute;
    pointer-events: none;
  }
  .modal-container {
width: 100%;
  }
`;

const Div = styled.div`
  @media (min-width: 760px) {
    display: flex;
    justify-content: center;
align-items: center;
  }
`;

function InformationSection() {
  const [modal1, ModalIsOpen1, ModalIsClose1] = useModalInformation();
  const [modal2, ModalIsOpen2, ModalIsClose2] = useModalInformation(true);
  const [modal3, ModalIsOpen3, ModalIsClose3] = useModalInformation();
  const [modal4, ModalIsOpen4, ModalIsClose4] = useModalInformation();

  return (
<Div id="more">
      <Container>
        <div className="options-container">
          <InformationOptionsCard
            data="10-04/22"
            text="Sunlight on the Atlantic Ocean, something really beautiful"
          onClick={() => {
              ModalIsOpen1();
              ModalIsClose2();
              ModalIsClose3();
              ModalIsClose4();
            }}
            modal={modal1}
          />
          <InformationOptionsCard
            data={"30-06/22"}
            text={"SpaceX just sent an additional 88 miniature satellites into space"}
            onClick={() => {
              ModalIsOpen2();
              ModalIsClose1();
              ModalIsClose3();
              ModalIsClose4();
            }}
            modal={modal2}
          />
          <InformationOptionsCard
            data={"17-05/22"}
            text={"NASA and ESA Astronauts Continue Installing Space Station Solar Arrays"}
            onClick={() => {
              ModalIsOpen3();
              ModalIsClose1();
              ModalIsClose2();
              ModalIsClose4();
            }}
            modal={modal3}
          />
          <InformationOptionsCard
            data={"09-07/22"}
            text={"Armstrong, commander of the Apollo 11 Lunar Landing mission in his space suit"}
            onClick={() => {
              ModalIsOpen4();
              ModalIsClose1();
              ModalIsClose2();
              ModalIsClose3();
            }}
            modal={modal4}
          />
        </div>

        <div className="modal-container" id="modal-container">
          <Modal
          data={"10-02"}
          place="Atlantic Ocean"
          points="551 338"
            url={"http://imgfz.com/i/E0xAG7r.jpeg"}
            alt={"img"}
            OpenModal={modal1}
            CloseModal={ModalIsClose1}
          />
          <Modal
            data={"30-06"}
            place={"SpaceX"}
            points={"964 517"}
            url={"http://imgfz.com/i/nG6WjY0.jpeg"}
            alt={"img"}
            OpenModal={modal2}
            CloseModal={ModalIsClose2}
          />
          <Modal
            data={"17-05"}
            place={"NASA"}
            points={"715 841"}
            url={"http://imgfz.com/i/3JBNivW.jpeg"}
            alt={"img"}
            OpenModal={modal3}
            CloseModal={ModalIsClose3}
          />
          <Modal
            data={"09-07"}
            place={"NASA"}
            points={"815 566"}
            url={"http://imgfz.com/i/Dv67Hjt.jpeg"}
            alt={"img"}
            OpenModal={modal4}
            CloseModal={ModalIsClose4}
          />
        </div>
      </Container>
    </Div>
  );
}
export default InformationSection;
