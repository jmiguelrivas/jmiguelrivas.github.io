import 'nano-grid/dist/nanogrid.js'
import gColors from 'nano-grid/dist/gcolors.js'
import { useForm, useFieldArray } from 'react-hook-form'

const users = [
  {
    id: 1,
    full_name: 'Joan Manuel Serrat',
  },
  {
    id: 2,
    full_name: 'Juana La Cubana',
  },
  {
    id: 3,
    full_name: 'Marcela Duran',
  },
]

const family_names = [
  {
    id: 1,
    family_name: 'Santos',
  },
  {
    id: 2,
    family_name: 'Rivas',
  },
  {
    id: 3,
    family_name: 'Solis',
  },
]

export default function () {
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
              {nameFields.map((field, index) => {
                const isOnlychild = !(nameFields.length > 1)
                return (
                  <li key={field.id}>
                    <nn-fila>
                      <nn-pilar
                        size="35px"
                        className="index"
                      >
                        {index + 1}
                      </nn-pilar>
                      <nn-pilar
                        size={isOnlychild ? '100% - 35px' : '100% - 35px * 2'}
                      >
                        <input
                          autoComplete="off"
                          {...register(`names.${index}.value`, {
                            required: true,
                          })}
                        />
                      </nn-pilar>
                      {!isOnlychild && (
                        <nn-pilar size="35px">
                          <nn-btn
                            color="#ff5555"
                            type="button"
                            onClick={() => removeName(index)}
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
                      <select
                        {...register(`family_names.${index}.value`, {
                          required: true,
                        })}
                      >
                        {family_names.map(name => (
                          <option
                            key={name.id}
                            value={name.id}
                          >
                            {name.family_name}
                          </option>
                        ))}
                      </select>
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
              {users.map(user => (
                <option
                  key={user.id}
                  value={user.id}
                >
                  {user.full_name}
                </option>
              ))}
            </select>
          </fieldset>

          <fieldset>
            <label htmlFor="parent_b">Guardian/Parent B</label>
            <select
              id="parent_b"
              {...register('parent_b')}
            >
              {users.map(user => (
                <option
                  key={user.id}
                  value={user.id}
                >
                  {user.full_name}
                </option>
              ))}
            </select>
          </fieldset>

          <fieldset>
            <label htmlFor="lead_family_name">Lead Family Name</label>
            <select
              id="lead_family_name"
              {...register('lead_family_name')}
            >
              {users.map(user => (
                <option
                  key={user.id}
                  value={user.id}
                >
                  {user.full_name}
                </option>
              ))}
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
                        {users.map(user => (
                          <option
                            key={user.id}
                            value={user.id}
                          >
                            {user.full_name}
                          </option>
                        ))}
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
