import { TextField } from "@mui/material"
import { useField } from "formik"

const TextfieldWrapper = ({ ...otherProps }) => {
  const [field, meta] = useField(otherProps.name)

  return (
    <TextField
      {...field}
      {...otherProps}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
    />
  )
}

export default TextfieldWrapper
