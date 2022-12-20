import React from 'react'
import Textarea from './Textarea'
import FormErrorBox from './FormErrorBox'

const FieldTextarea = React.forwardRef(({ form, field, width, ...rest }, ref) => {
  return (
    <>
      <Textarea {...field} {...rest} ref={ref} invalid={form.touched[field.name] && form.errors[field.name]} />
      <FormErrorBox fieldName={field.name} errors={form.errors} touched={form.touched} />
    </>
  )
})

FieldTextarea.displayName = 'FieldTextarea'

export default FieldTextarea
