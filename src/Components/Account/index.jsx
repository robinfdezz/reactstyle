import React, { useState } from "react";
import styled from "styled-components"
import { Icono, Box, Btn, Saldo, Detalle, IconoTema } from "../UI";
import privado from "../../assets/images/privado.svg";
import ojo from "../../assets/images/ojo.svg";
import dinero from "../../assets/images/dinero.svg";

const IconoMargin = styled(Icono)`
  margin-top: 2px;
`

const Account = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Box className="box">
      <h2>Cuenta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponible
        <Detalle>
          <IconoTema src={dinero} alt="Icono de saldo" />
        </Detalle>
        {toggleState ? (
          <Saldo>
            <span className="detalle">$</span> 8,621.50
          </Saldo>
        ) : null}
      </div>

      <Btn className="btn" onClick={toggleHandler}>
        <IconoMargin
          src={toggleState ? privado : ojo}
          alt="Privacidad de saldo"
        />
      </Btn>
    </Box>
  );
};

export default Account;
