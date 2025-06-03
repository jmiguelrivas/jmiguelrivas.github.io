function RepeaterField({
  fields,
  append,
  remove,
  register,
  namePrefix,
  options = null,
  labelProp = 'label',
  valueProp = 'value',
}) {
  const isOnlyChild = fields.length === 1

  return (
    <>
      <ul className="repeater">
        {fields.map((field, index) => (
          <li key={field.id}>
            <nn-fila>
              <nn-pilar size="35px" className="index">
                {index + 1}
              </nn-pilar>

              <nn-pilar size={isOnlyChild ? '100% - 35px' : '100% - 35px * 2'}>
                {options ? (
                  <select
                    {...register(`${namePrefix}.${index}.value`, {
                      required: true,
                    })}
                  >
                    {options.map(opt => (
                      <option
                        key={opt[valueProp]}
                        value={opt[valueProp]}
                      >
                        {opt[labelProp]}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    autoComplete="off"
                    {...register(`${namePrefix}.${index}.value`, {
                      required: true,
                    })}
                  />
                )}
              </nn-pilar>

              {!isOnlyChild && (
                <nn-pilar size="35px">
                  <nn-btn
                    color="#ff5555"
                    type="button"
                    onClick={() => remove(index)}
                  >
                    X
                  </nn-btn>
                </nn-pilar>
              )}
            </nn-fila>
          </li>
        ))}
      </ul>
    </>
  )
}
