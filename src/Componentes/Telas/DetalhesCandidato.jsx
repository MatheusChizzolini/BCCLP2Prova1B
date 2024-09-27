import { Container, Button, Alert, Form } from "react-bootstrap";

export default function DetalhesCandidato(props) {
    return (
        <Container>
            <br />
            <Alert className={"text-center"} variant="info"><h2>Detalhes Candidato</h2></Alert>
            <p>{"ID: " + props.candidatoSel.id}</p>
            <p>{"Nome: " + props.candidatoSel.nome}</p>
            <p>{"Email: " + props.candidatoSel.email}</p>
            <p>{"Curtidas: " + props.candidatoSel.curtidas}</p>
            <p>{"Descurtidas: " + props.candidatoSel.descurtidas}</p>
            <Alert className={"text-center"} variant="danger"><h2>Propostas de {props.candidatoSel.nome}</h2></Alert>
            {props.candidatoSel.propostas.map((proposta) => (
                <p>* {proposta}</p>
            ))}

            <Alert className="text-center" variant="dark"><h2>Registar questionamento</h2></Alert>

            <Form>
                <Form.Group className="mb-3" controlId="formQuest">
                    <Form.Label>Digite seu questionamento abaixo</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="secondary">Enviar questionamento</Button>
            </Form>

            <br />
            <Button variant="primary"
            onClick={() => {
                props.setDetalharCandidato(false);
            }}>Retornar</Button>
        </Container>
    );
}