export const Vehicle = ({ id, tipo, patente, numChasis, numMotor, numMovil, activo  }) => {
    return (
        <div>
            <p>{id}</p>
            <p>{patente}</p>
            <p>{tipo}</p>
            <p>{numChasis}</p>
            <p>{numMotor}</p>
            <p>{numMovil}</p>
            <p>{activo}</p>
            </div>
    )
}