import 'nano-grid/dist/nanogrid.js'
import gColors from 'nano-grid/dist/gcolors.js'
import { useForm, useFieldArray } from 'react-hook-form'

function Edit() {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      names: [{ value: '' }],
      family_names: [{ value: '' }],
      relationships: [{ value: '' }],
    },
  })

  const {
    fields: nameFields,
    append: appendName,
    remove: removeName,
  } = useFieldArray({
    control,
    name: 'names',
  })

  const {
    fields: familyNameFields,
    append: appendFamilyName,
    remove: removeFamilyName,
  } = useFieldArray({
    control,
    name: 'family_names',
  })

  const {
    fields: relationshipsFields,
    append: appendRelationship,
    remove: removeRelationship,
  } = useFieldArray({
    control,
    name: 'relationships',
  })

  const onSubmit = data => console.log(data)

  return (
    <section className="edit">
      <nn-caja
        padding="1rem"
        max-width="600px"
      >
        <h1>Add / Edit User</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <legend>Names</legend>

            <ul className="repeater">
              {nameFields.map((field, index) => (
                <li key={field.id}>
                  <nn-fila>
                    <nn-pilar
                      size="35px"
                      className="index"
                    >
                      {index + 1}
                    </nn-pilar>
                    <nn-pilar size="100% - 35px * 2">
                      <input
                        autoComplete="off"
                        {...register(`names.${index}.value`, {
                          required: true,
                        })}
                      />
                    </nn-pilar>
                    <nn-pilar size="35px">
                      <nn-btn
                        color="#ff5555"
                        type="button"
                        onClick={() => removeName(index)}
                      >
                        X
                      </nn-btn>
                    </nn-pilar>
                  </nn-fila>
                </li>
              ))}
            </ul>

            <nn-btn
              type="button"
              color={gColors['spanish-green'].hex}
              onClick={() => appendName({ value: '' })}
            >
              + Add Another Name
            </nn-btn>
          </fieldset>

          <fieldset>
            <legend>Family Names</legend>

            <ul className="repeater">
              {familyNameFields.map((field, index) => (
                <li key={field.id}>
                  <nn-fila>
                    <nn-pilar
                      size="35px"
                      className="index"
                    >
                      {index + 1}
                    </nn-pilar>
                    <nn-pilar size="100% - 35px * 2">
                      <input
                        autoComplete="off"
                        {...register(`family_names.${index}.value`, {
                          required: true,
                        })}
                      />
                    </nn-pilar>
                    <nn-pilar size="35px">
                      <nn-btn
                        color="#ff5555"
                        type="button"
                        onClick={() => removeFamilyName(index)}
                      >
                        X
                      </nn-btn>
                    </nn-pilar>
                  </nn-fila>
                </li>
              ))}
            </ul>

            <nn-btn
              type="button"
              color={gColors['spanish-green'].hex}
              onClick={() => appendFamilyName({ value: '' })}
            >
              + Add Another Family Name
            </nn-btn>
          </fieldset>

          <fieldset>
            <label>
              <input
                type="checkbox"
                name="adopted"
              />
              <span>Adopted</span>
            </label>
          </fieldset>

          <fieldset>
            <label htmlFor="parent_a">Guardian/Parent A</label>
            <select
              id="parent_a"
              {...register('parent_a')}
            >
              <option value="1">1</option>
            </select>
          </fieldset>

          <fieldset>
            <label htmlFor="parent_b">Guardian/Parent B</label>
            <select
              id="parent_b"
              {...register('parent_b')}
            >
              <option value="1">1</option>
            </select>
          </fieldset>

          <fieldset>
            <label htmlFor="lead_family_name">Lead Family Name</label>
            <select
              id="lead_family_name"
              {...register('lead_family_name')}
            >
              <option value="1">Parent A</option>
            </select>
          </fieldset>

          <fieldset>
            <legend>Relationships</legend>

            <ul className="repeater">
              {relationshipsFields.map((field, index) => (
                <li key={field.id}>
                  <nn-fila>
                    <nn-pilar
                      size="35px"
                      className="index"
                    >
                      {index + 1}
                    </nn-pilar>
                    <nn-pilar size="100% - 35px * 2">
                      <select
                        {...register(`relationships.${index}.value`, {
                          required: true,
                        })}
                      >
                        <option value="1">1</option>
                      </select>
                    </nn-pilar>
                    <nn-pilar size="35px">
                      <nn-btn
                        color="#ff5555"
                        type="button"
                        onClick={() => removeRelationship(index)}
                      >
                        X
                      </nn-btn>
                    </nn-pilar>
                  </nn-fila>
                </li>
              ))}
            </ul>

            <nn-btn
              type="button"
              color={gColors['spanish-green'].hex}
              onClick={() => appendRelationship({ value: '' })}
            >
              + Add Another Relationship
            </nn-btn>
          </fieldset>

          <nn-btn
            type="submit"
            color={gColors['sunglow'].hex}
          >
            Add/Edit User
          </nn-btn>
        </form>
      </nn-caja>
    </section>
  )
}

export default Edit
