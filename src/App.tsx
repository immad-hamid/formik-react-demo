import React from "react";
import {
  Formik,
  Field,
  Form
} from "formik";
import {
  Button,
  Checkbox,
  Select,
  MenuItem
} from "@material-ui/core";
import * as yup from "yup";
import SharedRadioComponent from "./components/shared-radio-component/shared-radio-component";
import SharedTextFieldComponent from "./components/shared-text-field-component/shared-text-field-component";

const countriesData = [
  { countryName: "USA", id: "1" },
  { countryName: "Canada", id: "2" },
  { countryName: "Kenya", id: "3" },
  { countryName: "Russia", id: "4" },
  { countryName: "France", id: "5" }
]

const validationSchema = yup.object({
  firstName: yup
    .string()
    .required()
    .max(10),
  country: yup.object({
    id: yup.string().required()
  })
});

const initialValues = {
  firstName: "",
  lastName: "",
  isTall: false,
  someCheckboxes: [],
  someRadio: "",
  country: { }
};

const App: React.FC = () => {
  return (
    <div>
      <Formik
        validateOnChange={true}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          // make async call
          console.log("submit: ", data);
          setSubmitting(false);
        }}
      >
        {({ values, errors, isSubmitting }) => (
          <Form>
            <Field
              enableReinitialize={true}
              name="country.id"
              type="select"
              as={Select}
            >
              <MenuItem value="1">USA</MenuItem>
              {/* { countriesData.map(data => <MenuItem key={data.id} value={ data.id }>{ data.countryName }</MenuItem>) } */}
            </Field>

            <br/>
            <br/>

            <SharedTextFieldComponent placeholder="first name" name="firstName" />
            <SharedTextFieldComponent placeholder="last name" name="lastName" />


            <div>Some Array:</div>
            <Field
              name="cookies"
              type="checkbox"
              value="chocolate chip"
              as={Checkbox}
            />
            <Field
              name="cookies"
              type="checkbox"
              value="snickerdoodle"
              as={Checkbox}
            />


            <Field name="cookies" type="checkbox" value="sugar" as={Checkbox} />


            <div>Radio Selections</div>
            <SharedRadioComponent name="someRadio" type="radio" value="peach" label="peach" />
            <SharedRadioComponent
              name="someRadio"
              type="radio"
              value="blueberry"
              label="blueberry"
            />
            <SharedRadioComponent name="someRadio" type="radio" value="apple" label="apple" />
            <div>
              <Button disabled={isSubmitting} type="submit">
                submit
              </Button>
            </div>
            <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{JSON.stringify(errors, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default App;
