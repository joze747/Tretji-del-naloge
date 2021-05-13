import React from "react";
import { Form, Dropdown } from "semantic-ui-react";
import returnValue from "./returnValue";

const regijeOptions = [
  { key: "go", value: "go", text: "Gorenjska" },
  { key: "gi", value: "gi", text: "Goriška" },
  { key: "js", value: "js", text: "Jugovzhodna Slovenija" },
  { key: "ko", value: "ko", text: "Koroška" },
  { key: "ok", value: "ok", text: "Obalno-Kraška" },
  { key: "os", value: "os", text: "Osrednjeslovenska" },
  { key: "po", value: "po", text: "Podravska" },
  { key: "pu", value: "pu", text: "Pomurska" },
  { key: "ps", value: "ps", text: "Posavska" },
  { key: "pn", value: "pn", text: "Primorsko-Notranjska" },
  { key: "sv", value: "sv", text: "Savinjska" },
  { key: "zs", value: "zs", text: "Zasavska" }
];

const spolOptions = [
  { key: "male", value: "male", text: "Moški" },
  { key: "female", value: "female", text: "Ženski" },
  { key: "rnt", value: "rnt", text: "Ne želim povedati" }
];

export default function InfoForm() {
  const [name, setName] = React.useState("");
  const [surname, setSurname] = React.useState("");
  const [region, setRegion] = React.useState("");
  const [sex, setSex] = React.useState("");

  const [submittedName, setSubmittedName] = React.useState(() =>
    name ? name : ""
  );
  const [submittedSurname, setSubmittedsurname] = React.useState(() =>
    surname ? surname : ""
  );
  const [submittedRegion, setSubmittedRegion] = React.useState(() =>
    region ? region : ""
  );
  const [submittedSex, setSubmittedSex] = React.useState(() =>
    sex ? sex : ""
  );

  const handleChangeName = (event) => setName(event.target.value);
  const handleChangeSurname = (event) => setSurname(event.target.value);
  const handleChangeRegion = (event, data) =>
    setRegion(returnValue(regijeOptions, data.value));
  const handleChangeSpol = (event, data) =>
    setSex(returnValue(spolOptions, data.value));

  const handleSubmit = (event, data) => {
    setSubmittedName(name);
    setSubmittedsurname(surname);
    setSubmittedRegion(region);
    setSubmittedSex(sex);
  };


  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Field required width={6}>
            <label>Ime</label>
            <input
              placeholder="Ime"
              onChange={handleChangeName}
              name="name"
              id="name"
            />
          </Form.Field>

          <Form.Field required width={6}>
            <label>Priimek</label>
            <input
              placeholder="Priimek"
              onChange={handleChangeSurname}
              name="surname"
              id="surname"
            />
          </Form.Field>
        </Form.Group>

        <Form.Group>
          <Form.Field required width={8}>
            <label>Regija</label>
            <Dropdown
              placeholder="Izberi regijo"
              fluid
              search
              onChange={handleChangeRegion}
              selection
              options={regijeOptions}
              id="region"
            />
          </Form.Field>

          <Form.Field required width={4}>
            <label>Spol</label>
            <Dropdown
              placeholder="Izberi spol"
              fluid
              search
              onChange={handleChangeSpol}
              selection
              options={spolOptions}
              id="sex"
            />
          </Form.Field>
        </Form.Group>

        <Form.Button content="submit" />
      </Form>
      <strong>onChange:</strong>
      <pre>{JSON.stringify({ name, surname, region, sex }, null, 2)}</pre>
      <strong>onSubmit:</strong>
      <pre>
        {JSON.stringify(
          { submittedName, submittedSurname, submittedRegion, submittedSex },
          null,
          2
        )}
      </pre>
    </div>
  );
}
