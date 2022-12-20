import React from 'react'
import Input from './Input'
import FormErrorBox from './FormErrorBox'

const FieldInput = React.forwardRef(({ form, field, width, ...rest }, ref) => {
  return (
    <>
      <Input {...field} {...rest} ref={ref} invalid={form.touched[field.name] && form.errors[field.name]} />
      <FormErrorBox fieldName={field.name} errors={form.errors} touched={form.touched} />
    </>
  )
})

FieldInput.displayName = 'FieldInput'

export default FieldInput
