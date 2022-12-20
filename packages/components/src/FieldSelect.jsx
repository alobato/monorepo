import React from 'react'
import Select from './Select'
import FormErrorBox from './FormErrorBox'

const FieldSelect = React.forwardRef(({ form, field, children, ...rest }, ref) => {
  return (
    <>
      <Select {...field} {...rest} ref={ref} invalid={form.touched[field.name] && form.errors[field.name]}>
        {children}
      </Select>
      <FormErrorBox fieldName={field.name} errors={form.errors} touched={form.touched} />
    </>
  )
})

FieldSelect.displayName = 'FieldSelect'

export default FieldSelect
