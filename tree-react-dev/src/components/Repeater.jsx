export default function Repeater({
  fields,
  remove,
  register,
  namePrefix,
  options = null,
  labelProp = 'label',
  valueProp = 'value',
  children,
}) {
  return (
    <>
      <ul className="repeater">
        {fields.map((field, index) => {
          const isOnlyChild = fields.length === 1

          return (
            <li key={`${namePrefix}${index}${field.id}`}>
              <nn-fila>
                {!isOnlyChild && (
                  <nn-pilar
                    size="35px"
                    className="index"
                  >
                    {index + 1}
                  </nn-pilar>
                )}

                <nn-pilar size={isOnlyChild ? '100%' : '100% - 35px * 2'}>
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
          )
        })}
      </ul>
      {children}
    </>
  )
}
