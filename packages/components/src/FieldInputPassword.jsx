import React from 'react'
import InputPassword from './InputPassword'
import FormErrorBox from './FormErrorBox'

const FieldInputPassword = React.forwardRef(({ form, field, ...rest }, ref) => {
  return (
    <>
      <InputPassword {...field} {...rest} ref={ref} invalid={form.touched[field.name] && form.errors[field.name]} />
      <FormErrorBox fieldName={field.name} errors={form.errors} touched={form.touched} />
    </>
  )
})

FieldInputPassword.displayName = 'FieldInputPassword'

export default FieldInputPassword
