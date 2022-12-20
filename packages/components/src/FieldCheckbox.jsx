import React from 'react'
import Checkbox from './Checkbox'
import FormErrorBox from './FormErrorBox'

const FieldCheckbox = React.forwardRef(({ form, field, ...rest }, ref) => {
  return (
    <>
      <Checkbox {...field} {...rest} checked={field.value} onChange={(checked) => form.setFieldValue(field.name, checked)} ref={ref} />
      <FormErrorBox fieldName={field.name} errors={form.errors} touched={form.touched} />
    </>
  )
})

FieldCheckbox.displayName = 'FieldCheckbox'

export default FieldCheckbox
